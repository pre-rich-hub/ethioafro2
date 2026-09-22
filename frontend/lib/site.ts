export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours', href: '/tours' },
  { label: 'Journal', href: '/blog' },
] as const

export const contact = {
  phone: '+1909-450-7246',
  whatsapp: '+1909-450-7246',
  email: 'contact@simienethiopiatours.com',
  address: 'Bole Medhaniallem, Cape Verde Street 1000, Addis Ababa, Ethiopia',
  hours: 'Monday to Saturday 8:00 AM - 5:30 PM',
}

export type Destination = {
  slug: string
  name: string
  region: string
  tag: string
  image: string
  teaser: string
  intro: string
  bestTime: string
  duration: string
  altitude: string
  highlights: string[]
  paragraphs: string[]
  span?: string
}

export const destinations: Destination[] = [
  {
    slug: 'lalibela',
    name: 'Lalibela',
    region: 'Northern Highlands',
    tag: 'UNESCO Heritage',
    image: '/images/lalibela.png',
    teaser:
      'Thirteenth-century churches cut entire from single blocks of volcanic rock, and never abandoned.',
    intro:
      'King Lalibela is said to have dreamed of a New Jerusalem and had it quarried from the mountain rather than built upon it — a project that took a working population most of a century to finish.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '2,500 m',
    highlights: [
      'Bete Giyorgis, cut in the shape of a Greek cross and roofed at ground level',
      'The trench passages linking the northern and eastern church clusters',
      'Morning prayer beneath the frescoed ceiling of Bete Maryam',
      'A walk to Asheton Maryam, the monastery on the cliff above town',
    ],
    paragraphs: [
      'Twelve hundred masons, tradition says, spent decades lowering these churches out of the rock rather than raising them from the ground — each one begun as a trench cut around a single block of tuff, then hollowed from the top down until windows, doors and columns emerged from what had been solid stone.',
      'None of it is sealed behind rope lines. Priests still keep the liturgical calendar here, incense still moves through the same corridors pilgrims have used for eight hundred years, and a visit timed to the early service will put you inside that rhythm rather than beside it.',
    ],
    span: 'lg:col-span-7',
  },
  {
    slug: 'simien-mountains',
    name: 'Simien Mountains',
    region: 'Northern Highlands',
    tag: 'National Park',
    image: '/images/hero-simien.png',
    teaser:
      'An Afro-alpine escarpment where the ground simply stops, two thousand metres down.',
    intro:
      'A UNESCO-listed massif of jagged peaks and sheer basalt cliffs, home to more gelada monkeys than anywhere else on the planet and the endemic walia ibex found nowhere else at all.',
    bestTime: 'October – April',
    duration: '3 – 5 days',
    altitude: '3,200 – 4,533 m',
    highlights: [
      'Gelada troops grazing metres from the escarpment path at Chenek',
      'Giant lobelia stands lining the ridge above Sankaber',
      'Sunrise at Imet Gogo, with three separate ridgelines visible below the cloud',
      'The multi-day approach to Ras Dashen, Ethiopia\'s highest summit at 4,550 metres',
    ],
    paragraphs: [
      'The range formed some thirty million years ago as volcanic plateau eroded into towers, gorges and near-vertical drops — geology that reads, from the rim trail, less like a mountain range than the broken edge of a continent.',
      'Because the walking follows the escarpment rather than descending into it, the exposure and the views are constant. We build in a rest lodge partway along the route, so the difficulty stays a matter of choice rather than necessity.',
    ],
    span: 'lg:col-span-5',
  },
  {
    slug: 'danakil-depression',
    name: 'Danakil Depression',
    region: 'Afar Lowlands',
    tag: 'Expedition',
    image: '/images/danakil.png',
    teaser:
      'One of the lowest, hottest points on the continent, and one of the most geologically active.',
    intro:
      'A tectonic triple junction where three plates are slowly pulling apart, leaving behind an active lava lake, sulphur fields at Dallol, and salt flats still worked by hand.',
    bestTime: 'November – February',
    duration: '3 – 4 days',
    altitude: '-125 m',
    highlights: [
      'The mineral terraces of Dallol at sunrise, before the heat sets in',
      'A night ascent to the rim of Erta Ale, in near-continuous eruption since 1906',
      'Afar camel trains cutting slabs of salt from Lake Karum for the highland trade',
      'A sky with no artificial light for hundreds of kilometres in any direction',
    ],
    paragraphs: [
      'This basin sits well below sea level, at the point where the African and Arabian plates are separating — the reason the crust here is thin enough to keep a lava lake permanently open and hot springs running mineral-bright yellows and greens.',
      'We treat it as an expedition rather than a sightseeing day: reinforced vehicles, a guide trained in field medicine, an Afar community liaison, and a pace that respects a landscape with genuinely no margin for improvisation.',
    ],
    span: 'lg:col-span-5',
  },
  {
    slug: 'omo-valley',
    name: 'Omo Valley',
    region: 'Southern Rift',
    tag: 'Cultural Immersion',
    image: '/images/omo-valley.png',
    teaser:
      'Home to more distinct ethnic groups than almost anywhere else on the continent.',
    intro:
      'Along the lower Omo River, some sixteen communities — Hamar, Mursi, Karo, Dassanech, Nyangatom and others — maintain distinct languages, dress and ceremony within a few hours\' drive of one another.',
    bestTime: 'June – September, December – March',
    duration: '5 – 8 days',
    altitude: '500 – 1,400 m',
    highlights: [
      'Saturday market at Key Afer, where several communities trade in one place',
      'An invitation-only Hamar bull-jumping coming-of-age ceremony, season permitting',
      'A visit to a Mursi settlement in the company of an anthropologist who works there year-round',
      'Riverside camps set beside the Omo rather than in a fenced compound',
    ],
    paragraphs: [
      'The pace here is set by invitation, not by us. We work through relationships with elders that have been maintained for years, which means access is arranged in advance rather than negotiated at the roadside — no fee changes hands per photograph, ever.',
      'A cultural mediator accompanies every visit, not to translate alone but to make clear who is asking to enter a community\'s space, and to make a genuine "no" easy to give.',
    ],
    span: 'lg:col-span-7',
  },
  {
    slug: 'gondar',
    name: 'Gondar',
    region: 'Northern Highlands',
    tag: 'Imperial City',
    image: '/images/gondar.png',
    teaser:
      'A seventeenth-century royal capital of castles, still central to the January baptismal festival.',
    intro:
      'Founded by Emperor Fasilides in 1636 as Ethiopia\'s first permanent capital, its walled compound of stone castles blends Aksumite, Nubian and Portuguese-Jesuit building styles across six royal reigns.',
    bestTime: 'October – March',
    duration: '1 – 2 days',
    altitude: '2,133 m',
    highlights: [
      'The Fasil Ghebbi compound, home to six castles built across six reigns',
      'The painted ceiling of Debre Berhan Selassie, covered in the faces of eighty winged cherubim',
      'Fasilides\' Bath, drained and refilled each January for the Timkat festival',
      'Kuskuam, the hilltop palace built for Empress Mentewab',
    ],
    paragraphs: [
      'Six emperors added to this compound over roughly two hundred years, each building against — rather than replacing — what came before, so the walls read almost like tree rings of a single dynasty\'s ambitions.',
      'A short domestic flight connects Gondar directly to Lalibela and the Simien range, which is why most northern circuits treat it as a one-night hinge rather than a destination in itself — though the ceiling at Debre Berhan Selassie alone is worth the stop.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'axum',
    name: 'Axum',
    region: 'Tigray',
    tag: 'Ancient Capital',
    image: '/images/festival-timkat.png',
    teaser:
      'Capital of an ancient trading empire, and Ethiopian Orthodoxy\'s spiritual centre.',
    intro:
      'Between roughly 100 and 940 CE, the Kingdom of Aksum minted its own currency and traded across the Red Sea to India — a wealth still visible in the carved granite stelae left standing in its old necropolis.',
    bestTime: 'October – March',
    duration: '1 – 2 days',
    altitude: '2,131 m',
    highlights: [
      'The Northern Stelae Field, including the fallen Great Stele — once the largest single block of stone ever raised',
      'The Chapel of the Tablet, said by tradition to guard the Ark of the Covenant',
      'The ruins attributed to the Queen of Sheba\'s palace, Dungur',
      'A drive south into Tigray\'s cliffside churches, several reached only on foot',
    ],
    paragraphs: [
      'The stelae are less monuments than engineering arguments: single pieces of granite carved to mimic multi-storey buildings, complete with false doors and window frames, quarried and raised without any of the machinery that would later be considered necessary for the job.',
      'We usually pair a day in Axum with the Gheralta cliff churches an hour or so south — a different kind of ancient, reached by scrambling rather than driving, and rewarded with frescoes almost no visitor sees.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'bale-mountains',
    name: 'Bale Mountains',
    region: 'Southern Highlands',
    tag: 'Wildlife',
    image: '/images/bale-gelada.png',
    teaser:
      'The single best place on earth to see a wild Ethiopian wolf.',
    intro:
      'The Sanetti Plateau, at over 4,000 metres, is the largest continuous stretch of Afro-alpine habitat left in Africa — and home to roughly half of the fewer than five hundred Ethiopian wolves believed to survive.',
    bestTime: 'November – April',
    duration: '3 – 4 days',
    altitude: '2,500 – 4,377 m',
    highlights: [
      'Dawn wolf-tracking on the open plateau, when hunting activity peaks',
      'The Harenna forest, one of the last strongholds of wild Coffea arabica',
      'A morning list that can run to a dozen Ethiopia-only bird species',
      'Mountain nyala grazing the moorland edges near Dinsho at dusk',
    ],
    paragraphs: [
      'Wild Arabica coffee still grows in the understorey of the Harenna forest below the plateau — one of the places botanists point to when tracing the plant back to its origin, before it ever reached a cup.',
      'We split most itineraries across both faces of the range: the exposed, cold plateau for wolves and endemic birds, then a night dropped into Harenna\'s cloud forest for colobus monkeys and a different, damper kind of quiet.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'lake-tana',
    name: 'Lake Tana & Blue Nile',
    region: 'Amhara',
    tag: 'Slow Travel',
    image: '/images/lake-tana.png',
    teaser:
      'Island monasteries guarding centuries-old manuscripts, at the river\'s true source.',
    intro:
      'Ethiopia\'s largest lake feeds the Blue Nile and shelters roughly twenty monastery communities across its islands and peninsulas, several holding illuminated goatskin gospels several hundred years old.',
    bestTime: 'September – March',
    duration: '1 – 2 days',
    altitude: '1,788 m',
    highlights: [
      'A private boat to Ura Kidane Mehret, its interior painted floor to ceiling',
      'Illuminated manuscripts shown by the monks who still keep them',
      'Tis Issat, the Blue Nile Falls, running fullest just after the rains',
      'A tankwa reed-boat launch at first light, before the wind picks up',
    ],
    paragraphs: [
      'The monastery paintings here follow a visual grammar centuries old — saints and demons rendered in the same flattened, wide-eyed style regardless of when a particular building was finished, so a fifteenth-century wall can sit beside a nineteenth-century one almost without a seam.',
      'We favour a private boat and an early start, ahead of the day-tripper crossings from Bahir Dar, followed by a slow breakfast on the water once the morning haze has burned off.',
    ],
    span: 'lg:col-span-6',
  },
]

export type Tour = {
  slug: string
  title: string
  image: string
  days: string
  nights: number
  style: string
  season: string
  from: string
  group: string
  teaser: string
  summary: string
  includes: string[]
  excludes: string[]
  itinerary: { day: string; title: string; text: string }[]
  places: string[]
  featured?: boolean
}

export const tours: Tour[] = [
  {
    slug: 'the-historic-route',
    title: 'The Historic Route',
    image: '/images/hero-lalibela.png',
    days: '11 Days',
    nights: 10,
    style: 'Cultural · Private',
    season: 'Oct – Mar',
    from: '$6,450 per person',
    group: '2 – 8 guests',
    teaser:
      'Four UNESCO sites and three former capitals, linked by short domestic flights rather than long drives.',
    summary:
      'The classic northern circuit, reordered around light and liturgy instead of road distance. Private access at the churches, boutique lodges along the way, and no day longer than it needs to be.',
    includes: [
      'All domestic flights within Ethiopia',
      'Private vehicle with a senior driver-guide throughout',
      'Specialist local guides at Lalibela, Axum and Gondar',
      'Handpicked boutique lodges at every stop',
      'Breakfast daily, most lunches and dinners',
      'A dedicated trip coordinator reachable around the clock',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Gratuities and personal spending',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Private airport transfer and a welcome dinner of tibs and tej with your trip coordinator, who walks through the days ahead.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Bahir Dar & Lake Tana',
        text: 'An early flight north, then a private boat out to the island monasteries ahead of the day crowds, and Tis Issat falls in the afternoon light.',
      },
      {
        day: 'Days 4 – 5',
        title: 'Gondar',
        text: 'The royal enclosure at opening hour, the painted ceiling at Debre Berhan Selassie, then Kuskuam palace as the light turns gold.',
      },
      {
        day: 'Days 6 – 7',
        title: 'Simien Mountains',
        text: 'Two escarpment walks among habituated gelada troops, returning each evening to a lodge fire on the rim.',
      },
      {
        day: 'Days 8 – 9',
        title: 'Lalibela',
        text: 'The northern church cluster at dawn, the connecting trench to Bete Golgotha, and a climb to Asheton Maryam for the valley view.',
      },
      {
        day: 'Day 10',
        title: 'Axum',
        text: 'The stelae field, the Chapel of the Tablet from the permitted threshold, and the palace ruins attributed to the Queen of Sheba.',
      },
      {
        day: 'Day 11',
        title: 'Addis & Departure',
        text: 'One last coffee ceremony, a day room to rest before your flight, and an evening departure.',
      },
    ],
    places: ['Lake Tana', 'Gondar', 'Simien Mountains', 'Lalibela', 'Axum'],
    featured: true,
  },
  {
    slug: 'highlands-and-wildlife',
    title: 'Highlands & Wildlife',
    image: '/images/bale-gelada.png',
    days: '9 Days',
    nights: 8,
    style: 'Expedition · Private',
    season: 'Nov – Apr',
    from: '$5,780 per person',
    group: '2 – 6 guests',
    teaser:
      'The Simien escarpment and the Sanetti Plateau, Ethiopia\'s two great high-altitude wildernesses, in one trip.',
    summary:
      'A naturalist travels with you the entire way, from gelada troops on a two-thousand-metre drop to wolf-tracking above the clouds. Strenuous where you choose, comfortable everywhere else.',
    includes: [
      'Domestic flights and private 4x4 transfers throughout',
      'A dedicated wildlife specialist for the full itinerary',
      'All national park fees, scouts and permits',
      'Lodge accommodation on the Simien rim and Bale escarpment',
      'Full board on every trekking day',
      'Trekking poles and daypacks provided',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'The optional Ras Dashen summit extension',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'A briefing dinner with your wildlife specialist, kit check, and an early night ahead of the flight north.',
      },
      {
        day: 'Days 2 – 4',
        title: 'Simien Mountains',
        text: 'Three escarpment walks of increasing length, close encounters with gelada troops, and sunrise from the Imet Gogo viewpoint.',
      },
      {
        day: 'Day 5',
        title: 'Transfer south',
        text: 'A flight back to Addis, then the Rift Valley road south with a birding stop at Lake Ziway.',
      },
      {
        day: 'Days 6 – 8',
        title: 'Bale Mountains',
        text: 'Dawn wolf-tracking on the Sanetti Plateau, mountain nyala near Dinsho, and a day inside the Harenna cloud forest.',
      },
      {
        day: 'Day 9',
        title: 'Addis & Departure',
        text: 'A return flight, a visit to the National Museum with a curator, and an evening flight home.',
      },
    ],
    places: ['Simien Mountains', 'Rift Valley Lakes', 'Bale Mountains'],
    featured: true,
  },
  {
    slug: 'sacred-waters-and-coffee',
    title: 'Sacred Waters & Coffee',
    image: '/images/coffee-ceremony.png',
    days: '7 Days',
    nights: 6,
    style: 'Slow Travel · Private',
    season: 'Year-round',
    from: '$4,320 per person',
    group: '2 – 8 guests',
    teaser:
      'Island monasteries by boat, then south into the forest understorey where wild Arabica coffee still grows.',
    summary:
      'The least demanding of our itineraries, built for guests who want depth over distance. Water, forest, ceremony, and very little time spent driving.',
    includes: [
      'Domestic flights and all private transfers',
      'A private boat charter on Lake Tana',
      'A farm-to-cup coffee immersion in the Kaffa forests',
      'Two nights at a forest eco-lodge',
      'Breakfast and dinner daily',
      'A guided cupping session in Addis Ababa',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Coffee purchases and shipping home',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'A cupping session in the roastery district to set the palate before the journey begins.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Lake Tana',
        text: 'A private boat to Ura Kidane Mehret at first light, manuscripts shown by resident monks, and a slow afternoon on the water.',
      },
      {
        day: 'Days 4 – 6',
        title: 'Kaffa & Bonga forest',
        text: 'Wild coffee harvested and roasted under the canopy with a farming family, and nights spent in the forest itself.',
      },
      {
        day: 'Day 7',
        title: 'Addis & Departure',
        text: 'A walk through Mercato with a local chef, a final lunch, and an evening flight.',
      },
    ],
    places: ['Lake Tana', 'Kaffa', 'Bonga Forest', 'Addis Ababa'],
    featured: true,
  },
  {
    slug: 'danakil-expedition',
    title: 'Danakil Expedition',
    image: '/images/danakil.png',
    days: '6 Days',
    nights: 5,
    style: 'Expedition · Small Group',
    season: 'Nov – Feb',
    from: '$5,150 per person',
    group: '2 – 6 guests',
    teaser:
      'Sulphur springs, an open lava lake, and salt caravans crossing one of the lowest points on earth.',
    summary:
      'Our most physically demanding route, run with a field-medic-trained guide, reinforced vehicles and an Afar community liaison. Nights spent under skies with no light pollution for hundreds of kilometres.',
    includes: [
      'Afar regional permits and a dedicated local liaison',
      'Reinforced expedition vehicles with a support truck',
      'A field-medic-trained guide and satellite communication',
      'Camp beds, bedding and full catering throughout',
      'A porter-supported overnight ascent of Erta Ale',
      'Unlimited chilled water for the duration',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance with medical evacuation cover',
      'Sleeping bag hire',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'An expedition briefing, kit issue, and an early dinner before the flight north.',
      },
      {
        day: 'Day 2',
        title: 'Mekele to Hamed Ela',
        text: 'A morning flight, then the descent into the Afar depression as the temperature climbs steadily through the afternoon.',
      },
      {
        day: 'Day 3',
        title: 'Dallol & Lake Karum',
        text: 'The sulphur terraces of Dallol at first light, salt caravans in the afternoon heat, and camp set on the open plain.',
      },
      {
        day: 'Day 4',
        title: 'Erta Ale',
        text: 'A night ascent to the caldera rim to look down into the open lava lake, sleeping on the volcano itself.',
      },
      {
        day: 'Day 5',
        title: 'Return to Mekele',
        text: 'A long drive back out of the depression, followed by a proper shower, a cold drink and a real bed.',
      },
      {
        day: 'Day 6',
        title: 'Addis & Departure',
        text: 'A morning flight south and a day room before your evening departure.',
      },
    ],
    places: ['Mekele', 'Dallol', 'Lake Assale', 'Erta Ale'],
    featured: true,
  },
  {
    slug: 'omo-valley-immersion',
    title: 'Omo Valley Immersion',
    image: '/images/omo-valley.png',
    days: '10 Days',
    nights: 9,
    style: 'Cultural · Private',
    season: 'Jun – Sep, Dec – Mar',
    from: '$6,980 per person',
    group: '2 – 6 guests',
    teaser:
      'Market days and standing invitations, in one of the most ethnically diverse valleys anywhere on earth.',
    summary:
      'Built around market schedules and invitations rather than a fixed route, with a cultural mediator travelling alongside your guide from start to finish.',
    includes: [
      'A private vehicle and senior driver-guide',
      'A resident cultural mediator and translator throughout',
      'Community fees paid transparently at village level',
      'Riverside tented camps and the best lodges the region offers',
      'Full board for the entire southern leg',
      'Guidance on ethical, consent-based photography',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Personal gifts and purchases',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'An evening briefing with an anthropologist from Addis Ababa University on the communities you will meet.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Rift Valley south',
        text: 'Lakeside stops and hot springs on the way down, plus a morning with a weaving family in the Dorze highlands.',
      },
      {
        day: 'Days 4 – 7',
        title: 'Turmi, Dimeka & the Hamar',
        text: 'Market days, an invited bull-jumping ceremony where the season allows, and long evenings beside the river.',
      },
      {
        day: 'Days 8 – 9',
        title: 'Mursi highlands & Karo',
        text: 'Two unhurried days with a resident anthropologist, ending with the Omo escarpment at dusk.',
      },
      {
        day: 'Day 10',
        title: 'Addis & Departure',
        text: 'A flight north, a farewell lunch, and an evening departure.',
      },
    ],
    places: ['Dorze', 'Turmi', 'Dimeka', 'Mursi Highlands', 'Karo'],
    featured: true,
  },
  {
    slug: 'timkat-festival-journey',
    title: 'Timkat Festival Journey',
    image: '/images/festival-timkat.png',
    days: '8 Days',
    nights: 7,
    style: 'Festival · Private',
    season: 'January only',
    from: '$5,940 per person',
    group: '2 – 10 guests',
    teaser:
      'Ethiopian Epiphany — processions, an all-night vigil, and the royal bath flooded at dawn.',
    summary:
      'A single fixed window each January, and one we plan a full year ahead, since rooms and vantage points along the procession route are gone early.',
    includes: [
      'Reserved viewing positions at Fasilides\' Bath',
      'Domestic flights and all private transfers',
      'Accommodation held twelve months in advance',
      'An Orthodox Christian scholar as festival guide',
      'Breakfast daily and festival-day catering',
      'Guidance for photographing the processions respectfully',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Gratuities',
    ],
    itinerary: [
      {
        day: 'Days 1 – 2',
        title: 'Addis Ababa',
        text: 'Arrival, a visit to Holy Trinity Cathedral, and a briefing on the liturgical calendar behind the festival.',
      },
      {
        day: 'Days 3 – 5',
        title: 'Gondar for Timkat',
        text: 'The Ketera eve procession, an all-night vigil, and the flooding of Fasilides\' Bath at dawn.',
      },
      {
        day: 'Days 6 – 7',
        title: 'Lalibela',
        text: 'The rock churches during festival season, visiting the northern cluster before the crowds gather.',
      },
      {
        day: 'Day 8',
        title: 'Departure',
        text: 'A return flight to Addis Ababa and an evening departure.',
      },
    ],
    places: ['Addis Ababa', 'Gondar', 'Lalibela'],
    featured: true,
  },
  {
    slug: 'ethiopia-through-the-lens',
    title: 'Ethiopia Through the Lens',
    image: '/images/omo-valley.png',
    days: '9 Days',
    nights: 8,
    style: 'Photography · Private',
    season: 'Oct – Mar',
    from: '$6,120 per person',
    group: '2 – 4 guests',
    teaser:
      'A route timed entirely around the light — golden hour at Lalibela, blue hour over the salt flats.',
    summary:
      'Every stop on this circuit is scheduled by light, not by convenience, with a working photographer as your guide and a vehicle built for shooting from the window. Kept deliberately small.',
    includes: [
      'A photographer-guide with advance location scouting',
      'Golden-hour and blue-hour access at every site',
      'Domestic flights and a private vehicle fitted for photography',
      'Consent-based portrait sessions with a cultural mediator in the Omo',
      'Lodges chosen for the quality of their light, not just their comfort',
      'RAW file backup and field storage support',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Camera hire and personal equipment',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'A kit check and a working dinner covering light, logistics and portrait consent protocol.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Lalibela',
        text: 'Dawn and dusk sessions in the rock churches on back-to-back days, skipping the flat midday hours entirely.',
      },
      {
        day: 'Days 4 – 5',
        title: 'Danakil Depression',
        text: 'Dallol at first light, salt caravans in the afternoon glow, and the Erta Ale caldera after dark.',
      },
      {
        day: 'Days 6 – 8',
        title: 'Omo Valley',
        text: 'Market days and invited portrait sessions with a mediator present, shot slowly and with genuine consent.',
      },
      {
        day: 'Day 9',
        title: 'Addis & Departure',
        text: 'A first pass at editing the trip over coffee, then an evening flight home.',
      },
    ],
    places: ['Lalibela', 'Danakil Depression', 'Omo Valley'],
  },
  {
    slug: 'rift-valley-birding-trail',
    title: 'Rift Valley Birding Trail',
    image: '/images/lake-tana.png',
    days: '8 Days',
    nights: 7,
    style: 'Wildlife · Birding · Private',
    season: 'Year-round',
    from: '$4,780 per person',
    group: '2 – 6 guests',
    teaser:
      'From Afro-alpine endemics on the Sanetti Plateau to pelicans on Lake Tana, built for a serious list.',
    summary:
      'Ethiopia holds close to two dozen endemic bird species spread across sharply different habitats. We move between them efficiently, with a resident ornithologist and no detours that aren\'t about birds.',
    includes: [
      'A resident ornithologist and endemics specialist throughout',
      'Domestic flights and private 4x4 transfers',
      'Private boat sessions on Lake Tana and the Rift Valley lakes',
      'All national park fees, scouts and permits',
      'Full board at lodges chosen for proximity to habitat',
      'A species checklist and daily sightings log',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Personal optics and field guides',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'A briefing with your ornithologist and an afternoon at the Ethiopian Wildlife and Natural History Society grounds.',
      },
      {
        day: 'Day 2',
        title: 'Rift Valley lakes',
        text: 'Lake Ziway and Lake Langano for pelicans, storks and other Rift Valley waterbirds.',
      },
      {
        day: 'Days 3 – 4',
        title: 'Bale Mountains',
        text: 'The Sanetti Plateau for Afro-alpine endemics, then the Harenna forest for its highland forest species.',
      },
      {
        day: 'Days 5 – 6',
        title: 'Lake Tana & Blue Nile',
        text: 'Private boat sessions around the island monasteries, with reed-boat access into the reedbeds.',
      },
      {
        day: 'Day 7',
        title: 'Debre Libanos',
        text: 'The Jemma gorge escarpment for raptors, with gelada troops working the cliff edge below.',
      },
      {
        day: 'Day 8',
        title: 'Addis & Departure',
        text: 'A final checklist review over breakfast, then an evening departure.',
      },
    ],
    places: ['Rift Valley Lakes', 'Bale Mountains', 'Lake Tana', 'Debre Libanos'],
  },
]

// Field names date back to when this catalog held layover packages; the
// admin CRUD and API layer key off these exact names, so the shape is left
// as-is even though it now holds outbound (regional add-on) tours. `hours`
// carries a duration string like "3 Days" rather than an hour count.
export type LayoverPackage = {
  slug: string
  hours: string
  title: string
  price: string
  image: string
  teaser: string
  itinerary: string[]
  includes: string[]
  best: string
}

export const layoverPackages: LayoverPackage[] = [
  {
    slug: '6-hour',
    hours: '3 Days',
    title: 'Kenya Safari Extension',
    price: 'from $1,450 per person',
    image: '/images/luxury-lodge.png',
    teaser:
      'A short Maasai Mara add-on flown direct from Addis — enough time for real game drives without reworking your whole itinerary.',
    itinerary: [
      'Morning flight from Addis to the Mara, met on the airstrip',
      'Afternoon and evening game drives out of a private tented camp',
      'A full day following the plains at the pace the wildlife sets',
      'A final dawn drive, then the flight back to Addis for your onward leg',
    ],
    includes: [
      'Return flights Addis – Mara – Addis',
      'Two nights at a private tented camp, full board',
      'All game drives with a resident guide',
      'Park and conservancy fees',
    ],
    best: 'Guests extending an Ethiopia trip who still want a classic safari',
  },
  {
    slug: '12-hour',
    hours: '4 Days',
    title: 'Zanzibar Beach Escape',
    price: 'from $1,780 per person',
    image: '/images/lake-tana.png',
    teaser:
      'Stone Town for an afternoon, then several unhurried days on the coast — the natural close to a highland-and-history trip.',
    itinerary: [
      'Flight from Addis to Zanzibar, afternoon walk through Stone Town',
      'Transfer to the north coast and nothing scheduled for the rest of the day',
      'Two full days free — diving, a sailing dhow, or simply the beach',
      'A last morning by the water before the flight home',
    ],
    includes: [
      'Return flights Addis – Zanzibar – Addis',
      'Three nights at a beachfront villa, breakfast included',
      'A private guided walk through Stone Town',
      'All transfers on the island',
    ],
    best: 'Ending a highland itinerary somewhere warm and slow',
  },
  {
    slug: '24-hour',
    hours: '5 Days',
    title: 'Tanzania: Serengeti & Ngorongoro',
    price: 'from $3,250 per person',
    image: '/images/luxury-lodge.png',
    teaser:
      'The two reserves most guests ask for by name, linked in a single loop with a private guide throughout.',
    itinerary: [
      'Flight into Arusha, then the drive up to the Ngorongoro rim',
      'A full day inside the crater floor — among the densest wildlife in Africa',
      'Transfer north into the Serengeti for two nights',
      'Game drives timed around the resident herds, not a fixed clock',
      'Return flight to Addis on the final morning',
    ],
    includes: [
      'Domestic flights and all park transfers',
      'Four nights across crater-rim and Serengeti lodges',
      'A private driver-guide for the full circuit',
      'All park and conservation fees',
    ],
    best: 'A genuine second-country safari, not a side trip',
  },
  {
    slug: '48-hour',
    hours: '3 Days',
    title: 'Rwanda Gorilla Trekking',
    price: 'from $4,100 per person',
    image: '/images/luxury-lodge.png',
    teaser:
      'One trekking permit, one encounter, built around it properly rather than rushed in and out on a long weekend.',
    itinerary: [
      'Flight to Kigali, afternoon transfer to Volcanoes National Park',
      'Briefing at dawn, then the trek itself — typically two to four hours each way',
      'An hour with a habituated gorilla family, at a respectful distance',
      'A slower final day before the return flight to Addis',
    ],
    includes: [
      'Return flights Addis – Kigali – Addis',
      'The gorilla trekking permit, secured in advance',
      'Two nights at a lodge bordering the park',
      'A private guide and vehicle throughout',
    ],
    best: 'Guests who have wanted to do this for years and don\'t want to rush it',
  },
]

export type Post = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  authorRole: string
  excerpt: string
  body: string[]
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: 'when-to-visit-ethiopia',
    title: 'Choosing your dates: a season-by-season guide to Ethiopia',
    category: 'Planning',
    date: 'June 18, 2026',
    readTime: '9 min read',
    image: '/images/hero-simien.png',
    author: 'Selam Bekele',
    authorRole: 'Head of Journey Design',
    excerpt:
      'The country spans four and a half kilometres of altitude, so "best time to visit" depends entirely on where you\'re actually going.',
    body: [
      'Ethiopia runs from 125 metres below sea level in the Danakil to nearly 4,600 metres in the Simiens, which means there is no single answer to "when should I come" — only a set of answers depending on which parts of the country you want.',
      'October and November are, by most measures, the strongest weeks of the year. The main rains have just ended, the highlands are still green, wildflowers cover the Sanetti Plateau, and visibility in the Simiens can stretch three ridgelines deep.',
      'December through February brings the festival calendar — Ethiopian Christmas at Lalibela, then Timkat in Gondar in January — alongside the coldest highland nights of the year. It is also the only comfortable window for the Danakil, where daytime heat shifts from dangerous to merely extreme.',
      'March through May is the quieter option many repeat guests prefer. Afternoon storms are possible in the north and the lowlands run hot, but the light is dramatic, sites are near-empty, and rates soften.',
      'June through September is kiremt, the long rainy season. We scale back the northern circuit almost entirely during these months, since roads soften and flights get disrupted. The south, though, stays open, and the Omo Valley is at its greenest with noticeably fewer visitors.',
    ],
    featured: true,
  },
  {
    slug: 'lalibela-at-dawn',
    title: 'The case for seeing Lalibela before sunrise',
    category: 'Destinations',
    date: 'May 30, 2026',
    readTime: '7 min read',
    image: '/images/lalibela.png',
    author: 'Yohannes Tesfaye',
    authorRole: 'Senior Guide, Northern Circuit',
    excerpt:
      'Most visitors reach the churches mid-morning and see an impressive ruin. Arrive before dawn instead and you find a place still very much in use.',
    body: [
      'By eight in the morning, Lalibela has largely become the version most photographs show: busy by ten, thinning out by early afternoon. It is genuinely impressive on those terms — and it is also the least interesting way to see it.',
      'Arrive at five instead, while it\'s still dark, and you\'ll find pilgrims already gathered in the trenches with candles and white shawls. The chant reaches the surface before you can see where it\'s coming from.',
      'The practical requirements are modest: a lodge within a short walk of the site, a guide on good terms with the resident clergy, and a willingness to stand in the cold for the better part of an hour. We supply blankets and a flask, and nobody has ever asked to turn back.',
      'By around seven, once the light drops into the trench at Bete Maryam and lands across the northern wall, you\'ll have already spent two hours inside a working sanctuary — the arriving day-trippers are welcome to what\'s left.',
    ],
  },
  {
    slug: 'the-coffee-ceremony',
    title: 'What a real Ethiopian coffee ceremony actually involves',
    category: 'Culture',
    date: 'May 9, 2026',
    readTime: '6 min read',
    image: '/images/coffee-ceremony.png',
    author: 'Marta Alemu',
    authorRole: 'Culture & Community Lead',
    excerpt:
      'Done properly it runs close to an hour and has almost nothing to do with the coffee itself — a short guide to the etiquette involved.',
    body: [
      'In a hotel lobby, the ceremony is often compressed to fifteen minutes and arrives with a bill attached. In someone\'s home, it takes the better part of an hour, and the coffee is closer to a pretext than the point.',
      'Green beans are roasted over coals in full view of the guests, and the pan is often carried around the room so everyone can take in the smoke with cupped hands — a genuine invitation, not a theatrical flourish. Then comes the grinding, the clay jebena, and the first of three pours.',
      'Those three rounds carry names: abol, tona, and baraka, the last meaning blessing. Leaving before the third round is considered a mild discourtesy — staying for it is, in a real sense, the entire purpose of the ritual.',
      'A short list of what tends to go well: accepting the popcorn that\'s offered, drinking slowly, complimenting the roast rather than the surroundings, and letting the conversation wander at its own pace. What doesn\'t: reaching for a camera before asking, particularly on the first round.',
    ],
  },
  {
    slug: 'packing-for-the-highlands',
    title: 'Packing for both 4,000 metres and 45 degrees',
    category: 'Practical',
    date: 'April 22, 2026',
    readTime: '5 min read',
    image: '/images/danakil.png',
    author: 'Selam Bekele',
    authorRole: 'Head of Journey Design',
    excerpt:
      'Few countries ask you to pack for two extremes in one suitcase. A short, opinionated list built from years of getting it wrong first.',
    body: [
      'The Simien escarpment can drop below freezing before sunrise. The Danakil floor can pass forty-five degrees by mid-morning. Most first-time guests overprepare for one extreme and underprepare for the other.',
      'The fix is layering rather than bulk: a merino base layer, a light fleece, and one genuinely windproof shell will cover every highland morning on our routes. A warm hat earns its space in the bag more often than expected.',
      'For the lowlands, favour loose, breathable long sleeves over bare skin, a wide-brimmed hat, and closed shoes for crossing salt crust, which is sharper underfoot than it appears. Sandals are a real mistake at Dallol.',
      'Everywhere: modest coverage for shoulders and knees when visiting churches, slip-on footwear since you\'ll remove it often, and a headlamp for pre-dawn starts. Leave room in the bag — you will want to bring coffee home.',
    ],
  },
  {
    slug: 'responsible-travel-in-the-omo',
    title: 'The case against pay-per-photo tourism in the Omo Valley',
    category: 'Responsible Travel',
    date: 'April 3, 2026',
    readTime: '8 min read',
    image: '/images/omo-valley.png',
    author: 'Marta Alemu',
    authorRole: 'Culture & Community Lead',
    excerpt:
      'A visitor arrives, pays a small fee per frame, and leaves. It\'s a common model in the region — and an avoidable one.',
    body: [
      'The Omo Valley has a well-known problem: a transactional economy where photographs are purchased a few birr at a time from strangers passing through. It distorts the relationships it touches and encourages exactly the kind of encounter nobody actually wants.',
      'Our approach pays community fees at the village level, agreed annually with local elders and disclosed openly to guests. Nothing is negotiated roadside, and no payment is ever tied to an individual photograph.',
      'A cultural mediator travels on every Omo itinerary. Their role goes beyond translation — they arrange visits ahead of time, explain who we are and why we\'ve come, and make sure a genuine refusal is always a real option.',
      'What we ask of guests is straightforward: hold off on the camera for the first half hour of any encounter, ask before every portrait, accept a no gracefully, and send prints back afterward — a step many returning guests say matters more than the photos themselves.',
    ],
  },
  {
    slug: 'twelve-hours-in-addis',
    title: 'A twelve-hour layover is worth leaving the airport for',
    category: 'Layover',
    date: 'March 14, 2026',
    readTime: '6 min read',
    image: '/images/textile.png',
    author: 'Yohannes Tesfaye',
    authorRole: 'Senior Guide, Northern Circuit',
    excerpt:
      'Bole is one of the busiest connecting hubs on the continent. Anyone with more than eight hours between flights has options.',
    body: [
      'Most of our layover guests arrive with no plan to leave the terminal. By hour twelve, a fair number are asking whether it\'s possible to push their onward flight back.',
      'A solid Addis day tends to follow the same shape: high ground first for the skyline and the eucalyptus air, the National Museum before the tour groups arrive, then Mercato with someone who actually knows which alley leads where.',
      'The single best part of the day is rarely a landmark. It\'s a coffee ceremony inside a family home in Shiro Meda — an hour under a corrugated roof, a bowl of popcorn, and conversation that outlasts the coffee.',
      'On a layover, logistics matter more than sightseeing. A visa on arrival, a driver tracking your inbound flight in real time, a day room for a shower, and a firm return to the terminal three hours before departure — that covers almost everything that can go wrong.',
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Every question we asked before booking got a real answer, not a sales pitch. Once we arrived, that same honesty showed up in every guide they put in front of us.',
    name: 'Richard Ashworth',
    detail: 'The Historic Route · United States',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'We changed our minds twice about the pace of the Omo leg, and both times the itinerary was redrawn within a day rather than treated as a fixed contract. That flexibility is rare.',
    name: 'Amara Nwosu',
    detail: 'Omo Valley Immersion · Nigeria',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'A thirteen-hour layover turned into the highlight of a much longer trip through the region — coffee in a family home, Lucy in person, and back at the gate with time to breathe.',
    name: 'Freja Lindqvist',
    detail: 'The Capital, 12-hour layover · Sweden',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'The wolf tracking alone was worth the trip. Our naturalist knew which ridge to wait on before we even saw a print in the frost, and the whole Sanetti morning felt unhurried despite the cold.',
    name: 'Marcus Bellweather',
    detail: 'Highlands & Wildlife · United Kingdom',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'Dallol looked exactly like the photos and somehow still felt bigger in person. What I did not expect was how careful the whole operation was — water, shade, a medic who actually knew what he was doing.',
    name: 'Sofia Marchetti',
    detail: 'Danakil Expedition · Italy',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'We asked for something slower than a typical circuit and got it — two extra nights at Lake Tana that were never in the original plan, added the moment we said we wanted to linger.',
    name: 'Daniel Osei',
    detail: 'Sacred Waters & Coffee · Ghana',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'Our guide in the Omo Valley spent the first hour just talking with the village elders before a single photograph was taken. It changed how our kids understood the whole visit.',
    name: 'Claire Dubois',
    detail: 'Omo Valley Immersion · France',
    image: '/images/traveler-portrait.png',
  },
  {
    quote:
      'I have used four different operators across East Africa over the years. This was the first time the pre-trip planning calls felt like they were actually listening rather than pitching packages.',
    name: 'Hana Kobayashi',
    detail: 'The Historic Route · Japan',
    image: '/images/traveler-portrait.png',
  },
]

export type Experience = {
  slug: string
  number: string
  title: string
  tagline: string
  image: string
  gallery: string[]
  intro: string
  paragraphs: string[]
  highlights: string[]
  facts: { label: string; value: string }[]
  relatedTourSlug: string
}

export const experiences: Experience[] = [
  {
    slug: 'coffee-traced-to-origin',
    number: '01',
    title: 'Follow the bean home',
    tagline: 'Where coffee was born, roasted the way it always has been',
    image: '/images/coffee-ceremony.png',
    gallery: ['/images/coffee-ceremony.png', '/images/lake-tana.png'],
    intro:
      'Wild coffee still grows under the canopy in Kaffa, where the plant was first found. We take you from forest floor to open-coal roast, in the hands of a family that has done this for generations.',
    paragraphs: [
      'Most coffee tourism stops at a demonstration. Ours starts a day earlier, in the Bonga forest understorey, where wild Arabica still grows exactly as it did before anyone thought to cultivate it — no rows, no irrigation, just shade trees and red cherries hanging at head height.',
      'From there it is a short drive to a family compound where the same beans are washed, dried and roasted over open coals, the way it has been done for longer than anyone in the household can date precisely. You sit on the floor mat, not a tourist bench, and the three rounds — abol, tona, baraka — are not shortened for the schedule.',
      'What you leave with is not a photograph of a ceremony. It is an understanding of why Ethiopians will tell you, without exaggeration, that coffee is a relationship rather than a drink.',
    ],
    highlights: [
      'A guided walk through wild coffee forest in Kaffa, with a botanist-trained local guide',
      'A full three-round coffee ceremony inside a family home, not a staged tourist stop',
      'Time with the family who grows and roasts it — through a translator, unhurried',
      'The chance to buy beans directly from the household that roasted them',
    ],
    facts: [
      { label: 'Best paired with', value: 'Sacred Waters & Coffee' },
      { label: 'Typical setting', value: 'Kaffa & Bonga forest' },
      { label: 'Time needed', value: 'Half a day, minimum' },
      { label: 'Season', value: 'Year-round' },
    ],
    relatedTourSlug: 'sacred-waters-and-coffee',
  },
  {
    slug: 'light-first-photography',
    number: '02',
    title: 'Work around the light, not the schedule',
    tagline: 'A photographer-guide, not a driver who waits in the car',
    image: '/images/danakil.png',
    gallery: ['/images/danakil.png', '/images/lalibela.png', '/images/omo-valley.png'],
    intro:
      'A photographer-guide reads each site for its hour — the churches at dawn, the salt flats at dusk — so the camera is never fighting flat midday sun.',
    paragraphs: [
      'Every stop on a photography-led route is scheduled around the light rather than the itinerary. That means a 4am departure for Lalibela more often than not, and it means leaving Dallol at exactly the moment the light turns from harsh to workable rather than sticking to a printed timetable.',
      'Your guide is a working photographer first, a driver second. They know which ridge at Imet Gogo gets the clean sunrise line, which angle on the Erta Ale caldera avoids the sulphur haze, and when to simply stop the vehicle because the light will not hold.',
      'In the Omo Valley, portraits are arranged in advance through a cultural mediator, with consent asked and respected — never a photograph taken from a moving vehicle. Prints are sent back afterward, which is usually the more meaningful exchange of the two.',
    ],
    highlights: [
      'A working photographer as guide, not a generalist driver-guide',
      'Golden-hour and blue-hour access built into the schedule at every major site',
      'A vehicle with windows that actually open, and stops made on request',
      'Consent-based portrait sessions in the Omo Valley, with a mediator present',
    ],
    facts: [
      { label: 'Best paired with', value: 'Ethiopia Through the Lens' },
      { label: 'Typical setting', value: 'Lalibela, Danakil, Omo Valley' },
      { label: 'Group size', value: '2 – 4 guests, by design' },
      { label: 'Season', value: 'Oct – Mar' },
    ],
    relatedTourSlug: 'ethiopia-through-the-lens',
  },
  {
    slug: 'access-through-relationship',
    number: '03',
    title: 'Arrive as a guest, not a tourist',
    tagline: 'Doors that open because of years of trust, not a fee',
    image: '/images/textile.png',
    gallery: ['/images/textile.png', '/images/omo-valley.png'],
    intro:
      'Years of standing relationships with artisans, elders and monks mean doors open before you knock. What you see is offered, never staged.',
    paragraphs: [
      'The lower Omo Valley has a well-documented problem: an economy where a stranger arrives, pays a few birr per photograph, and leaves having learned nothing. We built our access here differently, over more than a decade, and it shows in how a visit actually unfolds.',
      'Community fees are agreed annually with elders and published to guests — nothing negotiated at the roadside. A cultural mediator travels with every journey, and their job is arranging the visit in advance, not translating on the fly. That is the difference between being tolerated and being invited.',
      'The same principle holds further north — a monk unwrapping an illuminated gospel at Lake Tana, a weaver in Dorze explaining a pattern passed through four generations. None of it is a performance scheduled for tour groups; it is simply what happens when the same guides return, respectfully, year after year.',
    ],
    highlights: [
      'Community fees agreed with elders and published in advance, never negotiated on arrival',
      'A resident cultural mediator on every Omo Valley journey',
      'Access to artisans, monks and elders built on years of standing relationship',
      'A firm no-photography-without-consent standard, explained to guests before arrival',
    ],
    facts: [
      { label: 'Best paired with', value: 'Omo Valley Immersion' },
      { label: 'Typical setting', value: 'Omo Valley, Lake Tana, Dorze' },
      { label: 'Time needed', value: '3 days or more' },
      { label: 'Season', value: 'Jun – Sep, Dec – Mar' },
    ],
    relatedTourSlug: 'omo-valley-immersion',
  },
  {
    slug: 'rest-at-the-edge-of-the-wild',
    number: '04',
    title: 'Sleep at the edge of the wild',
    tagline: 'Lodges chosen for the view, not the brochure',
    image: '/images/luxury-lodge.png',
    gallery: ['/images/luxury-lodge.png', '/images/hero-simien.png'],
    intro:
      'Each evening ends somewhere chosen for its view and its quiet — lodges set into escarpments and forest edges, built to disappear into what surrounds them.',
    paragraphs: [
      'We do not select lodges from a chain\'s sales sheet. Each property on our list has been slept in by someone on our team, usually more than once, and judged on the same short list: the view from the room, how the light enters at both ends of the day, and whether the staff would still be warm to you if no one was watching.',
      'On the Simien rim, that means a lodge positioned so the escarpment drop is the first thing you see on waking, with a fire lit before you are back from the day\'s walk. In the lowlands, it means a camp with proper bedding and a cook rather than a tent pitched wherever the vehicle stopped.',
      'The common thread is restraint — comfort that supports the day rather than competing with the landscape for attention.',
    ],
    highlights: [
      'Every lodge personally inspected and slept in by our team before it is recommended',
      'Rooms and camps chosen for their view first, amenities second',
      'A fire, hot water and proper bedding even in genuinely remote settings',
      'Never a chain hotel where a family-run alternative exists and performs as well',
    ],
    facts: [
      { label: 'Best paired with', value: 'Highlands & Wildlife' },
      { label: 'Typical setting', value: 'Simien rim, forest edges' },
      { label: 'Style', value: 'Boutique lodges & serviced camps' },
      { label: 'Season', value: 'Year-round' },
    ],
    relatedTourSlug: 'highlands-and-wildlife',
  },
]

export const journeyStyles = [
  'Luxury',
  'Photography',
  'Cultural',
  'Wildlife',
  'Trekking',
  'Festival',
  'Outbound',
  'Family',
]

export const promises = [
  {
    title: 'Run by people who live here',
    text: 'An Addis Ababa-based team of designers, guides and drivers who have worked as a unit for years — not a distant office booking through a local subcontractor.',
  },
  {
    title: 'Built from a blank page',
    text: 'No route on this site is fixed. Every itinerary starts from your pace, your interests and your tolerance for altitude, and is drawn from there.',
  },
  {
    title: 'Doors that don\'t open for everyone',
    text: 'Curators, clergy, archaeologists and artisans who make time outside normal hours, through relationships built over years rather than booking fees.',
  },
  {
    title: 'One point of contact, start to finish',
    text: 'A single named designer follows your trip from first enquiry to final departure, with a direct line open for the whole journey.',
  },
]

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug)
}

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug)
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
