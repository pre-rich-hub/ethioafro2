import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { env, isProduction } from "../src/config/env.js";

// Maintenance scripts use the direct connection: interactive work over the
// pooler endpoint can fail with transaction-not-found.
const prisma = new PrismaClient({
  ...(env.DIRECT_URL ? { datasourceUrl: env.DIRECT_URL } : {}),
});

/**
 * Creates or updates the single admin account from ADMIN_EMAIL and
 * ADMIN_PASSWORD. Falls back to a development-only pair when those are
 * empty, and refuses to do so in production.
 */
async function main() {
  if (isProduction && (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD)) {
    throw new Error(
      "ADMIN_EMAIL and ADMIN_PASSWORD must be set explicitly in production. " +
        "Refusing to create an admin with fallback credentials.",
    );
  }

  const email = env.ADMIN_EMAIL || "admin@example.com";
  const password = env.ADMIN_PASSWORD || "admin123456";

  if (password.length < 8) {
    throw new Error("ADMIN_PASSWORD must be at least 8 characters.");
  }

  const existing = await prisma.admin.findFirst({ where: { email } });
  const passwordHash = await bcrypt.hash(password, 12);
  const data = { email, name: "Admin", passwordHash };

  if (existing) {
    // Bump tokenVersion so any session signed with the old password dies.
    await prisma.admin.update({
      where: { id: existing.id },
      data: { ...data, tokenVersion: { increment: 1 } },
    });
    console.log(`Admin updated: ${email}`);
  } else {
    await prisma.admin.create({ data });
    console.log(`Admin created: ${email}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
