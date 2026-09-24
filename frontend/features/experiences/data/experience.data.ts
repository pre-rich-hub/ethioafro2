import type { ActivityCategory } from '@/features/experiences/types/experience.types'
import type { Activity } from '@/features/experiences/types/experience.types'

export const activityCategories: ActivityCategory[] = [
  'Food & Drink',
  'Coffee',
  'Active',
  'Farm & Community',
  'Give Back',
]

export const activities: Activity[] = [
  {
    slug: 'injera-and-ethiopian-cooking',
    title: 'Injera & an Ethiopian kitchen',
    short: 'Cooking class',
    category: 'Food & Drink',
    duration: 'Half a day',
    where: 'Addis Ababa',
    season: 'Year-round',
    image: '/images/coffee-ceremony.png',
    teaser:
      'Pour injera on the mitad, cook the stews that go with it, and eat together the Ethiopian way.',
    intro:
      'Injera is the heart of every Ethiopian meal — a soft, tangy flatbread made from teff, the tiny grain native to the Ethiopian highlands. In a family kitchen in Addis Ababa, you learn to make it, and everything served on top of it.',
    paragraphs: [
      'Teff is the smallest grain in the world, and injera is slow food: the batter ferments for days before it is ready, which is where its sour tang comes from. Then it is poured in a spiral onto a wide clay griddle, the mitad, and covered until the surface sets into its familiar pattern of tiny holes. Getting the pour right takes practice — and a few failed attempts are part of the fun.',
      'While the injera cooks, you make the dishes that go with it: a simmering wat, shiro from ground chickpeas, and vegetable dishes that many Ethiopians eat on fasting days. Your host explains the spices, the butter and the order things are cooked in.',
      'Then everyone sits down together around one shared platter. Eating with the right hand, tearing injera to scoop the stews, is the whole etiquette — and being offered a mouthful by your host is a gesture of friendship.',
    ],
    includes: [
      'A hosted class in a family kitchen',
      'All ingredients and equipment',
      'The shared meal you cooked',
      'A coffee ceremony to finish',
      'Hotel pick-up and drop-off in Addis Ababa',
    ],
    goodToKnow: 'Vegetarian and vegan menus are easy — many Ethiopian dishes are naturally plant-based.',
    destinationSlugs: ['addis-ababa'],
    tourSlugs: ['addis-ababa-in-depth', 'addis-and-its-highlands'],
  },
  {
    slug: 'tej-tella-and-areki',
    title: 'Tej, tella & areki',
    short: 'Traditional drinks',
    category: 'Food & Drink',
    duration: 'An evening',
    where: 'Addis Ababa',
    season: 'Year-round',
    image: '/images/luxury-lodge.png',
    teaser:
      'Honey wine, home-brewed beer and a clear highland spirit — with azmari musicians improvising as you drink.',
    intro:
      'Ethiopia has brewed its own drinks for a very long time. On this evening you taste the three traditional ones — tej, tella and areki — and learn how each is made, ending in a traditional house where azmari musicians play.',
    paragraphs: [
      'Tej is Ethiopia\'s honey wine: honey and water fermented with gesho, a native buckthorn whose bitter leaves balance the sweetness, much as hops do in beer. It usually ferments for a couple of weeks and is served in a round-bottomed flask called a berele, typically at 7 to 11 per cent alcohol.',
      'Tella is the everyday home brew — a cloudy beer made from grain such as barley and the same gesho, fermented for a few days. Areki is its strong cousin: a clear spirit distilled from a fermented grain mash, often between 30 and 50 per cent alcohol, and best treated with respect.',
      'The evening ends in a tej house with azmari — poet-musicians who improvise verses on the one-stringed masenqo, often teasing the audience in rhyme. It is one of the liveliest nights out in the capital.',
    ],
    includes: [
      'A guided tasting of tej, tella and areki',
      'Traditional snacks with each drink',
      'An evening of live azmari music',
      'A private guide and return transport',
    ],
    goodToKnow: 'For guests aged 18 and over. Non-alcoholic tastings — including fresh fruit juices and spiced tea — are always available.',
    destinationSlugs: ['addis-ababa'],
    tourSlugs: ['addis-ababa-in-depth', 'addis-and-its-highlands'],
  },
  {
    slug: 'coffee-cupping-and-ceremony',
    title: 'Coffee cupping & ceremony',
    short: 'Coffee tasting',
    category: 'Coffee',
    duration: '2 – 3 hours',
    where: 'Addis Ababa, or any coffee region',
    season: 'Year-round',
    image: '/images/coffee-ceremony.png',
    teaser:
      'Taste coffees from Sidama, Yirgacheffe, Jimma and Harar side by side, then share a ceremony in a family home.',
    intro:
      'Ethiopia is where Arabica coffee comes from, and its regions taste strikingly different. This tasting sets them side by side the way professionals do, then shows how Ethiopians themselves drink coffee — slowly, together, in three rounds.',
    paragraphs: [
      'A cupping is the coffee trade\'s tasting method: freshly ground coffee steeped in open cups, the crust broken, and each one slurped from a spoon. Side by side, the differences are clear — the bright, floral cups of Yirgacheffe, the fuller coffees of Sidama and Jimma, the fruity, wine-like naturals of Harar.',
      'Then the ceremony. Green beans are roasted over coals in front of you, ground by hand, and brewed in a clay jebena, with incense burning and popcorn passed around. There are three rounds — abol, tona and baraka, the last meaning blessing — and staying for all three is part of the courtesy.',
      'The tasting can run in Addis Ababa on any day, or on the farms themselves during one of our coffee journeys.',
    ],
    includes: [
      'A guided cupping of coffees from several regions',
      'A full three-round coffee ceremony in a family home',
      'Tasting notes to take home',
      'Hotel pick-up and drop-off',
    ],
    destinationSlugs: ['addis-ababa', 'sidama-yirgacheffe', 'jimma', 'harar'],
    tourSlugs: ['the-coffee-road', 'sidama-and-yirgacheffe-coffee', 'jimma-the-coffee-kingdom'],
  },
  {
    slug: 'run-where-champions-train',
    title: 'Run where champions train',
    short: 'Running',
    category: 'Active',
    duration: 'An early morning',
    where: 'Entoto, Addis Ababa',
    season: 'Year-round (best Oct – May)',
    image: '/images/addis-skyline.png',
    teaser:
      'A dawn run on the forest trails of Entoto, around 3,000 metres up, where Ethiopia\'s great distance runners train.',
    intro:
      'Above Addis Ababa, the eucalyptus forest of Mount Entoto is where generations of Ethiopian runners have built their endurance — Haile Gebrselassie trained there at least three times a week. Join the early-morning crowd on its dirt trails.',
    paragraphs: [
      'At around 3,000 metres, Entoto is higher than the city below, and its soft forest trails and rolling dirt roads are ideal for building fitness without pounding the legs. At dawn they fill with runners, from elite groups to people training for their first race.',
      'A local running guide sets a pace that suits you — this is about the experience, not a time — and explains how Ethiopian runners train: easy days truly easy, lots of running off-road, and plenty of it in groups. Breakfast afterwards is the reward.',
      'Serious runners can go further: the town of Bekoji, birthplace of Derartu Tulu, Kenenisa Bekele and the Dibaba sisters, and the Great Ethiopian Run in late November — a 10-kilometre race through the capital with tens of thousands of runners.',
    ],
    includes: [
      'A local running guide',
      'Transport to and from the Entoto trails',
      'Water and a post-run breakfast',
      'Routes and pace adjusted to your level',
    ],
    goodToKnow: 'At this altitude, everyone runs slower and breathes harder — we suggest at least two days in Addis before running hard.',
    destinationSlugs: ['addis-ababa'],
    tourSlugs: ['run-with-ethiopias-champions'],
  },
  {
    slug: 'rift-valley-cycling-day',
    title: 'A day on two wheels in the Rift',
    short: 'Cycling',
    category: 'Active',
    duration: 'A full day',
    where: 'Central Rift Valley',
    season: 'Oct – May',
    image: '/images/lake-tana.png',
    teaser:
      'Quiet roads between the Rift Valley lakes, villages along the way, and a support vehicle never far behind.',
    intro:
      'The central Rift Valley is some of the most rewarding cycling in Ethiopia — flat to gently rolling, lined with lakes, and full of village life. A day ride takes you along its quiet roads with a guide and a vehicle for support.',
    paragraphs: [
      'Rides usually run between the lakes south of Addis Ababa — Ziway, Abijata-Shalla and Langano — on a mix of quiet tarmac and dirt tracks through farmland and acacia country, with stops wherever something catches your eye.',
      'A support vehicle carries water, snacks and spare parts, and can take anyone who has had enough. E-bikes are available for riders who want the scenery with less effort.',
      'For a longer adventure, our Rift Valley by bike journey links several days of riding, including a long descent from the highlands into the valley itself.',
    ],
    includes: [
      'A quality bike or e-bike, helmet and repair kit',
      'A cycling guide and support vehicle',
      'Water, snacks and a lakeside lunch',
      'Transfers to and from the start',
    ],
    destinationSlugs: [],
    tourSlugs: ['rift-valley-by-bike'],
  },
  {
    slug: 'teff-farm-day',
    title: 'A day on a teff farm',
    short: 'Farm day',
    category: 'Farm & Community',
    duration: 'A full day',
    where: 'Highland villages',
    season: 'Harvest: Nov – Jan',
    image: '/images/hero-lalibela.png',
    teaser:
      'Plough with oxen, cut and thresh the teff that becomes injera, and share lunch with the family that grows it.',
    intro:
      'Most Ethiopians still farm, and teff — the grain behind injera — is the crop of the highlands. Spend a day with a farming family, working alongside them at whatever the season demands.',
    paragraphs: [
      'Teff is sown with the long rains around July and harvested from November to January. Fields are still ploughed with a pair of oxen and a wooden plough, the grain is cut by hand, and threshing is done the old way: oxen or donkeys walking in a circle over the harvest to separate the seed from the straw.',
      'Depending on the time of year you might plough, weed, cut or help at the threshing floor — then carry the grain home, see it ground, and eat injera made from it at the family\'s table.',
      'We arrange farm days with families we know in highland villages along our routes, from the Menz highlands to the countryside around Lalibela, and the day is always paid for directly to the household.',
    ],
    includes: [
      'A day with a farming family, arranged in advance',
      'A local guide and translator',
      'Lunch with the family',
      'A payment made directly to the household',
    ],
    goodToKnow: 'The work changes with the season; the harvest and threshing, November to January, are the most striking time to come.',
    destinationSlugs: ['lalibela', 'guassa-plateau'],
    tourSlugs: ['lalibela-highlands-community-trek', 'the-road-north'],
  },
  {
    slug: 'herding-with-the-borana',
    title: 'Cattle, wells & the Borana',
    short: 'Cattle & herding',
    category: 'Farm & Community',
    duration: 'Half a day or more',
    where: 'Borana, around Yabelo',
    season: 'Oct – Mar',
    image: '/images/omo-valley.png',
    teaser:
      'Spend time with Borana herders — at the singing wells, and out with the cattle their way of life revolves around.',
    intro:
      'For the Borana of Ethiopia\'s far south, cattle are wealth, food and culture. With a local guide, you spend time with a herding family and see how water and livestock shape every day.',
    paragraphs: [
      'The centre of Borana life is the well. Hand-dug as deep as thirty metres, the wells are worked by human chains that pass water up bucket by bucket, singing to keep the rhythm — the singing wells, where herds come to drink.',
      'Away from the wells, you walk out with the herders and their cattle, hear how grazing is shared across the dry country, and share milk and tea in a family compound.',
      'Visits are always arranged through a local Borana guide and with the community\'s consent, and fees go to the families and community you visit.',
    ],
    includes: [
      'A local Borana guide',
      'A visit to a working well, where permitted',
      'Time with a herding family',
      'Community fees',
    ],
    destinationSlugs: ['borana-yabelo'],
    tourSlugs: ['borana-wells-salt-and-bushcrows'],
  },
  {
    slug: 'village-homestay',
    title: 'Stay with a village family',
    short: 'Homestay',
    category: 'Farm & Community',
    duration: '1 – 3 nights',
    where: 'Lalibela highlands, Choke, Awra Amba, Gamo Highlands',
    season: 'Oct – May',
    image: '/images/textile.png',
    teaser:
      'Sleep in a community-run lodge or guesthouse and share daily life — meals, markets, work and evenings by the fire.',
    intro:
      'The quickest way to understand a place is to stay in it. Across the north and south, communities run their own simple lodges and guesthouses, and a night or two there adds a depth that no hotel can.',
    paragraphs: [
      'On the Meket escarpment near Lalibela, villages host walkers in thatched tukul camps they built and run themselves. In the Choke Mountains, an ecovillage welcomes trekkers with an evening celebration. At Awra Amba, the weaving cooperative keeps a guesthouse for visitors who want to stay beyond the day tour.',
      'Days follow the household: fetching water, the market, the fields, the coffee ceremony in the afternoon. Evenings are for food, conversation through your guide, and very early nights.',
      'Rooms are simple and clean, and the money goes directly to the communities who host you — which is exactly the point.',
    ],
    includes: [
      'Nights in community-run lodges or guesthouses',
      'All meals with your hosts',
      'A guide and translator',
      'Community fees paid directly',
    ],
    destinationSlugs: ['lalibela', 'choke-mountains', 'awra-amba', 'arba-minch-nechisar'],
    tourSlugs: ['lalibela-highlands-community-trek', 'choke-mountains-trek', 'around-lake-tana'],
  },
  {
    slug: 'leave-it-better',
    title: 'Leave it better: a clean-up day',
    short: 'Clean-up day',
    category: 'Give Back',
    duration: 'Half a day',
    where: 'Entoto, the Simien trails, Lake Tana shores',
    season: 'Year-round',
    image: '/images/hero-simien.png',
    teaser:
      'Give a morning back to the places you visit — a guided clean-up alongside local people who look after them.',
    intro:
      'Popular places carry the marks of visitors. A clean-up morning is a small, practical way to give something back — working alongside local people on a trail, a viewpoint or a shoreline.',
    paragraphs: [
      'A half-day clean-up fits easily into a journey: a stretch of forest trail on Entoto above Addis Ababa, a busy section of the Simien escarpment path, or a Lake Tana shore near Bahir Dar. You work in a small group, with gloves, bags and a guide, and the waste is sorted and taken away properly.',
      'We only run clean-ups together with a local park office or community group, so the work is wanted, organised and useful. We confirm the partner and the site with you before your journey — never as a staged photo opportunity.',
      'Every journey we run follows the same principle quietly: pack out what we pack in, and leave camps and trails as we found them.',
    ],
    includes: [
      'Gloves, bags and equipment',
      'A guide and local coordination',
      'Proper disposal of what is collected',
      'Refreshments afterwards',
    ],
    goodToKnow: 'Arranged on request with a local park or community partner, confirmed before your journey.',
    destinationSlugs: ['addis-ababa', 'simien-mountains', 'lake-tana'],
    tourSlugs: ['the-historic-route', 'simien-escarpment-trek'],
  },
]
