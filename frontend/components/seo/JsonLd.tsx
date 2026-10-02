type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[]
type JsonLdObject = { [key: string]: JsonLdValue }

export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
