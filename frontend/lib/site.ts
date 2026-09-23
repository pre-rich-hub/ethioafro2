export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tours', href: '/tours' },
  { label: 'Experiences', href: '/experiences' },
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
    duration: '3 – 10 days',
    altitude: '3,000 – 4,550 m',
    highlights: [
      'Gelada troops grazing metres from the escarpment path above Sankaber',
      'Jinbar Falls dropping into the gorge below Geech, lammergeiers riding the updraft',
      'Sunrise at Imet Gogo, with three separate ridgelines visible below the cloud',
      'Walia ibex on the cliffs at Chenek, and the Bwahit pass above it at 4,200 metres',
      'The multi-day approach to Ras Dashen, Ethiopia\'s highest summit at 4,550 metres',
    ],
    paragraphs: [
      'The range formed some thirty million years ago as volcanic plateau eroded into towers, gorges and near-vertical drops — geology that reads, from the rim trail, less like a mountain range than the broken edge of a continent.',
      'The classic line runs camp to camp along the northern escarpment — Sankaber, Geech, Chenek — so the exposure and the views are constant rather than earned at the end of a long climb. Mules carry the loads, a park scout walks with every group, and a camp cook means dinner is hot long before the cold comes down.',
      'Go further east and the character changes: the trail drops into the Mesheha river valley, climbs out to the base camp at Ambiko, and reaches Ras Dashen before dawn. Or stay on the rim entirely and sleep in a lodge — the difficulty is always a matter of choice rather than necessity.',
    ],
    span: 'lg:col-span-5',
  },
  {
    slug: 'gondar',
    name: 'Gondar',
    region: 'Northern Highlands',
    tag: 'Imperial City',
    image: '/images/gondar.png',
    teaser:
      'A seventeenth-century royal capital of castles — and the gateway town for the Simien Mountains.',
    intro:
      'Founded by Emperor Fasilides in 1636 as Ethiopia\'s first permanent capital, its walled compound of stone castles blends Aksumite, Nubian and Portuguese-Jesuit building styles across six royal reigns.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '2,133 m',
    highlights: [
      'The Fasil Ghebbi compound, home to six castles built across six reigns',
      'The painted ceiling of Debre Berhan Selassie, covered in the faces of eighty winged cherubim',
      'Fasilides\' Bath, drained and refilled each January for the Timkat festival',
      'Kuskuam, the hilltop palace built for Empress Mentewab, at the last light of the day',
      'Wolleka, the village of Gondar\'s Beta Israel community, and the potters who still work there',
      'Kosoye viewpoint, thirty kilometres north, where Queen Elizabeth II\'s party is said to have camped in 1965',
      'Guzara Castle near Enfraz, built by Emperor Sarsa Dengel in the late 1500s — older than anything in Gondar itself',
    ],
    paragraphs: [
      'Six emperors added to this compound over roughly two hundred years, each building against — rather than replacing — what came before, so the walls read almost like tree rings of a single dynasty\'s ambitions.',
      'Most circuits treat Gondar as a one-night hinge, and they miss the point. It sits a hundred kilometres from the Simien trailhead at Debark, which makes it the natural base for the mountains: we give it a full unhurried day before a trek and a slower evening after one, when a hot shower and a plate of tibs in the old piazza feel earned.',
      'Leave room for the edges of town too — the Beta Israel village at Wolleka, the Saturday market below the old piazza, and a coffee ceremony in a family courtyard rather than a hotel lobby.',
    ],
    span: 'lg:col-span-6',
  },
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
      'The Zege Peninsula\'s coffee forest, walked on shaded trails between its monasteries',
      'The seventeenth-century Portuguese bridge below the falls, the first stone bridge of its kind in Ethiopia',
    ],
    paragraphs: [
      'The monastery paintings here follow a visual grammar centuries old — saints and demons rendered in the same flattened, wide-eyed style regardless of when a particular building was finished, so a fifteenth-century wall can sit beside a nineteenth-century one almost without a seam.',
      'We favour a private boat and an early start, ahead of the day-tripper crossings from Bahir Dar, followed by a slow breakfast on the water once the morning haze has burned off.',
    ],
    span: 'lg:col-span-6',
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
    slug: 'gheralta',
    name: 'Gheralta',
    region: 'Tigray',
    tag: 'Cliff Churches',
    image: '/images/hero-lalibela.png',
    teaser:
      'Churches cut into sandstone towers, some reached only by handholds and bare feet.',
    intro:
      'A range of red sandstone massifs in eastern Tigray, hiding more than thirty rock-hewn churches — several carved high into cliff faces between the fifth and fifteenth centuries, and still served by their priests every Sunday.',
    bestTime: 'October – March',
    duration: '2 – 4 days',
    altitude: '2,000 – 2,700 m',
    highlights: [
      'Abuna Yemata Guh, reached by a free climb and a ledge walk, its dome painted with the Nine Saints',
      'Maryam Korkor and its sister chapel Daniel Korkor, on the same summit plateau',
      'Abune Abraham at Debre Tsion, the frescoes lit only by the doorway',
      'Nights in a community guesthouse run by the village below the cliffs',
    ],
    paragraphs: [
      'Lalibela is the famous one, but Gheralta is older and stranger: rather than lowered into the ground, these churches were hollowed into the sides of rock towers, some so exposed that the final approach is a barefoot climb with a priest calling out footholds from above.',
      'The effort is the point. Inside, the paintings have survived in near-darkness for centuries, unretouched and almost unvisited, and there is rarely anyone else on the path. We walk the range with a local Tigrayan guide and send climbers only as far as they are comfortable — the valley-floor churches are just as painted and need nothing more than a morning walk.',
      'We run Gheralta when regional conditions allow and confirm access with our partners on the ground in the weeks before every departure, never assuming.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'ras-dashen',
    name: 'Ras Dashen',
    region: 'Northern Highlands',
    tag: 'Summit Trek',
    image: '/images/bale-gelada.png',
    teaser:
      'Ethiopia\'s highest peak, reached through the far side of the Simien few trekkers ever see.',
    intro:
      'At 4,550 metres, Ras Dashen crowns the eastern Simien — a full week\'s walk from the road-served western rim, through river valleys, farming villages and the Afro-alpine base camp at Ambiko.',
    bestTime: 'October – February',
    duration: '6 – 10 days',
    altitude: '2,900 – 4,550 m',
    highlights: [
      'The pre-dawn summit push from Ambiko, reaching the top as the sun clears the eastern ridges',
      'The Bwahit pass at 4,200 metres, the best ground in the park for walia ibex and Ethiopian wolf',
      'The descent into the Mesheha river valley and back out through terraced barley fields',
      'An optional second summit on Mount Berochwuha, 4,272 metres, on the return',
    ],
    paragraphs: [
      'The summit itself is a scramble up a rock tower rather than a technical climb — what makes Ras Dashen serious is the altitude and the distance, not the difficulty. Most of the week is spent above 3,500 metres, and the day before the summit drops a thousand metres into a river valley only to climb it all back again.',
      'The reward is a side of the Simien that the day-trip crowds never reach: villages where the trail runs past the threshing floors, children herding goats along the ridge, and camps with nothing in view but more mountain. We build in an acclimatisation day on the western rim first, and turn around without hesitation if the altitude says so.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'gorgora',
    name: 'Gorgora',
    region: 'Amhara',
    tag: 'Lakeshore History',
    image: '/images/lake-tana.png',
    teaser:
      'A quiet north-shore village where Gondar\'s imperial story began, before there was a Gondar.',
    intro:
      'Sixty-five kilometres south of Gondar on the northern shore of Lake Tana, Gorgora was a royal seat under Emperor Susenyos and home to the Jesuit mission in the early seventeenth century. Its ruined Maryam Gimb is the most remote part of the Fasil Ghebbi World Heritage Site.',
    bestTime: 'October – May',
    duration: '1 – 2 days',
    altitude: '1,790 m',
    highlights: [
      'Debre Sina Maryam, a fourteenth-century monastery whose church paintings, from the early 1600s, are among the oldest surviving in northern Ethiopia',
      'The ruins of Maryam Gimb, the Jesuit-era castle and church listed with Gondar\'s royal enclosure',
      'A private boat along the quiet northern shore of Lake Tana, far from the Bahir Dar crossings',
      'An easy half-day from Gondar, or an unhurried overnight between Gondar and Bahir Dar',
    ],
    paragraphs: [
      'Before Fasilides founded Gondar, the court moved between camps and lakeside residences — and Gorgora was one of the most important. Emperor Susenyos granted the Jesuits land here in 1607; the Spanish missionary Pedro Páez designed a stone church that was finished in 1621, and a second complex of residences, cisterns and a small castle followed at the site now called Maryam Gimb.',
      'It did not last. When Fasilides restored the Orthodox Church he expelled the Jesuits and ordered their buildings and images destroyed, and an earthquake in the 1950s brought down much of what remained. What survives is atmospheric rather than grand: roofless walls above the water, and a short walk away, the painted interior of Debre Sina Maryam, still in use.',
      'We treat Gorgora as a slow add-on to Gondar — a morning at the ruins and the church, lunch by the lake, and the afternoon on the water — for guests who have already seen the castles and want the chapter that came before them.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'guassa-plateau',
    name: 'Guassa Plateau',
    region: 'Northern Highlands',
    tag: 'Community Conservation',
    image: '/images/bale-gelada.png',
    teaser:
      'Ethiopian wolves and geladas on highland moor a community has protected for four hundred years.',
    intro:
      'A hundred square kilometres of Afro-alpine grassland in Menz, north-east of Addis Ababa, managed for more than four centuries under the Qero — an indigenous system of grazing and grass-cutting rules that ranks among the oldest community conservation arrangements in Africa.',
    bestTime: 'October – May',
    duration: '2 – 3 days',
    altitude: '3,200 – 3,700 m',
    highlights: [
      'Ethiopian wolves hunting rodents across the open grassland — six packs hold territory on the plateau',
      'Gelada troops grazing the moor and sleeping on the cliffs at its edge',
      'Giant lobelia up to twelve metres tall, erica heath, and the tussock guassa grass the area is named for',
      'Twelve endemic bird species, including the Ankober serin, blue-winged goose and wattled ibis',
    ],
    paragraphs: [
      'Under the Qero, two elected chiefs decided when the plateau could be grazed and when its grass could be cut for thatch and rope. The system held from the seventeenth century until the 1974 revolution nationalised the land; the communities of Menz have since rebuilt it, and in 2004 their work was recognised with the UN Development Programme\'s Equator Prize.',
      'The result is a landscape that looks much as the highlands must have before farming reached them — and one of the most reliable places in the north to see the Ethiopian wolf, a species with fewer than five hundred animals left in the wild. With no national park infrastructure, sightings come on foot, walking the grassland at dawn with a community scout.',
      'Guassa is genuinely remote. The community lodge near Mehal Meda is simple, with no mains electricity, and dry-season nights can fall to ten below freezing. We bring a cook and supplies, and pair it with the drive north toward Lalibela for guests who want wildlife without the long detour south to Bale.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'awra-amba',
    name: 'Awra Amba',
    region: 'Amhara',
    tag: 'Community Visit',
    image: '/images/textile.png',
    teaser:
      'A weaving village founded on one idea: that men and women should share every kind of work.',
    intro:
      'Founded in 1980 by Zumra Nuru and some twenty others, this cooperative of around 450 people, 73 kilometres east of Bahir Dar, has become one of Ethiopia\'s most studied social experiments — women plough, men weave, and the community governs itself through its own committees.',
    bestTime: 'Year-round',
    duration: 'Half a day – 1 day',
    altitude: '1,920 m',
    highlights: [
      'The weaving workshop, where men and women work the same looms and sell scarves, blankets and cloth by the metre',
      'The community\'s own school, library and care for its elderly members, each run by an elected committee',
      'An open conversation with residents about how the village makes decisions and settles disputes',
      'A night in the community guesthouse, for those who want to stay after the day visitors leave',
    ],
    paragraphs: [
      'Awra Amba — "top of the hill" in Amharic — was built on principles that set it apart from its neighbours: no division of labour by sex, no institutional religion, a minimum marriage age of eighteen for women and twenty-two for men, and formal committees to look after children, the sick and the elderly.',
      'Those choices came at a cost. Denied farmland by surrounding communities, the village turned to weaving and grain milling, and the looms that now fill its workshop are the reason it is self-sufficient today. Its library, preschool and adult literacy work have made it the subject of international research, including World Bank case studies.',
      'Visitors pay the same entry fee whatever their nationality, and a local guide can walk you through the village. It sits just off the road east from Bahir Dar toward Lalibela, which makes it an easy and rewarding morning on a northern circuit — and a natural fit for anyone interested in who does the work, and who shares in it.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'choke-mountains',
    name: 'Choke Mountains',
    region: 'Northern Highlands',
    tag: 'Community Trek',
    image: '/images/hero-simien.png',
    teaser:
      'The water tower of the Blue Nile, walked village to village with the families who live there.',
    intro:
      'A broad massif in the heart of Gojjam, rising from a 2,800-metre plateau to summits above 4,000 metres, whose moorland feeds more than fifty rivers flowing into the Blue Nile. Its community ecovillage was named one of UN Tourism\'s Best Tourism Villages in 2022.',
    bestTime: 'October – February',
    duration: '3 – 5 days',
    altitude: '2,800 – 4,000+ m',
    highlights: [
      'Afro-alpine moorland of giant lobelia, lady\'s mantle and tussock grass, almost untouched by other trekkers',
      'Camps in high farming villages, and an evening welcome from the families hosting you',
      'The headwaters of dozens of Blue Nile tributaries, springing from the moor itself',
      'Endemic and threatened birds, including the Abyssinian longclaw',
    ],
    paragraphs: [
      'Choke sits roughly between Bahir Dar and Debre Markos, about three hundred kilometres north-west of Addis Ababa, and it matters far beyond its size: researchers call it the water tower of the upper Blue Nile, with more than fifty major rivers and hundreds of smaller streams rising from its slopes.',
      'Tourism here is run by the community rather than for it, on a fair-trade ecovillage model built around conserving both the mountain and the culture of the farming villages on its slopes. Walkers camp in the high villages, and the evening welcome is a genuine one — closer to a stay than a sightseeing route. Allow at least three days to reach the high moor and come back down unhurried.',
      'It is the least developed trek we offer, with simple community campsites and very few other visitors. We pair it with Bahir Dar and Lake Tana for guests who have already walked the Simien and want somewhere no one else they know has been.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'lake-hayk',
    name: 'Hayk & Istifanos',
    region: 'Amhara',
    tag: 'Monastery Lake',
    image: '/images/lake-tana.png',
    teaser:
      'A highland lake on the road to Lalibela, and the monastery where one of Ethiopia\'s great saints was taught.',
    intro:
      'At 2,030 metres, just north of Dessie, Lake Hayk is six kilometres across and eighty-eight metres deep. On its peninsula stands Istifanos, a monastery founded in the mid-thirteenth century by Iyasus Mo\'a, teacher of Saint Tekle Haymanot.',
    bestTime: 'October – May',
    duration: 'Half a day – 1 day',
    altitude: '2,030 m',
    highlights: [
      'The monastery museum\'s gospel book, made for Istifanos in 1280–81 — among the oldest Ethiopian manuscripts to record its own date',
      'Iyasus Mo\'a\'s stone cross, and manuscripts and treasures donated by successive emperors',
      'A walk along the lakeshore, where Europe\'s first recorded visitor noted hippos in 1520',
      'The nunnery of Margebeta Giorgis nearby, open to women visitors',
    ],
    paragraphs: [
      'Between the thirteenth and fifteenth centuries Istifanos was one of the most influential monasteries in the country. Its most famous pupil, Tekle Haymanot, went on to found Debre Libanos and carry the Church south into Shewa. In 1531 the church was burned during the wars of Imam Ahmad ibn Ibrahim, and ruins from that period still stand beside the later buildings.',
      'Please note that the monastery itself admits men only. Women are welcome at the nearby nunnery of Margebeta Giorgis, and the lakeshore and its views are open to everyone — we explain this before any itinerary includes Hayk, so no one is caught out on the day.',
      'Hayk lies directly on the road between Addis Ababa and Lalibela via Dessie, so it slots into an overland northern route as a lunch stop or a quiet night by the water rather than a detour.',
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
      'The temple at Yeha, raised around 700 BCE and the oldest standing building in Ethiopia',
    ],
    paragraphs: [
      'The stelae are less monuments than engineering arguments: single pieces of granite carved to mimic multi-storey buildings, complete with false doors and window frames, quarried and raised without any of the machinery that would later be considered necessary for the job.',
      'We usually pair a day in Axum with the Gheralta cliff churches an hour or so south — a different kind of ancient, reached by scrambling rather than driving, and rewarded with frescoes almost no visitor sees.',
    ],
    span: 'lg:col-span-6',
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
    slug: 'addis-ababa',
    name: 'Addis Ababa',
    region: 'Central Ethiopia',
    tag: 'Capital City',
    image: '/images/addis-skyline.png',
    teaser:
      'Africa\'s diplomatic capital, and home to the most famous ancestor of us all.',
    intro:
      'Founded in the 1880s when Emperor Menelik II moved his court down from the Entoto hills, Addis Ababa — "new flower" — is now one of Africa\'s great capitals, and the place almost every journey in Ethiopia begins and ends.',
    bestTime: 'Year-round',
    duration: '1 – 3 days',
    altitude: '2,300 – 3,000 m',
    highlights: [
      'Lucy — Dinknesh — the 3.2-million-year-old hominid at the National Museum',
      'Mount Entoto, where the city began, with Menelik II\'s palace and the church of Entoto Maryam',
      'Unity Park, opened inside Menelik\'s 36-hectare palace compound',
      'Holy Trinity Cathedral, where Emperor Haile Selassie is buried',
      'Merkato, the largest open-air market in Africa',
    ],
    paragraphs: [
      'Most visitors treat Addis as an airport with a city attached. Give it a day or two and it rewards you: the National Museum, where the fossil known as Lucy lies alongside the story of the country\'s ancient kingdoms; the forested heights of Entoto, where the city was born and the air smells of eucalyptus; and the palace compound that is now Unity Park, the seat of Ethiopia\'s rulers for more than a century.',
      'Then there is Merkato, the largest open-air market on the continent, a city within the city where every alley specialises — spices, baskets, recycled metal, coffee. We go with a guide who knows which lane leads where, and end the day as Addis does: a coffee ceremony, and an evening of traditional music and dance.',
      'At around 2,300 metres the capital is also a gentle first step to altitude, which is why we often suggest a night here before flying north or driving into the highlands.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'debre-libanos',
    name: 'Debre Libanos',
    region: 'Central Ethiopia',
    tag: 'Monastery & Gorge',
    image: '/images/bale-gelada.png',
    teaser:
      'A monastery above a Blue Nile gorge, founded by one of Ethiopia\'s greatest saints.',
    intro:
      'About a hundred kilometres north of Addis Ababa, Debre Libanos was founded in 1284 by Saint Tekle Haymanot and became one of the most important monasteries in the country — its abbot once second only to the head of the Church.',
    bestTime: 'October – May',
    duration: '1 day, or an overnight',
    altitude: '2,200 – 2,500 m',
    highlights: [
      'The monastery on its terrace between the cliffs and the gorge, still a major place of pilgrimage',
      'The Jemma gorge viewpoints, dropping toward a tributary of the Blue Nile',
      'Gelada monkeys grazing along the cliff edge',
      'The old stone bridge, locally called "Portuguese" but built in the 1890s by Ras Darge',
    ],
    paragraphs: [
      'Tekle Haymanot founded the monastery in 1284 under the name Debre Atsbo; it took the name Debre Libanos in the fifteenth century. For centuries its chief abbot, the Ichege, was the second most powerful figure in the Ethiopian Church, and it remains a major place of pilgrimage today.',
      'The setting is half the reason to come. The monastery sits on a ledge between a cliff and a deep gorge, and short walks lead out to viewpoints over the Jemma valley, where gelada monkeys graze the grass along the rim.',
      'On the way, an old stone bridge spans a side gorge. Locals call it the Portuguese bridge, but it was built in the 1890s by Ras Darge in the older Portuguese style — a small story we like to tell accurately.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'tiya-adadi-mariam',
    name: 'Tiya & Adadi Mariam',
    region: 'Central Ethiopia',
    tag: 'UNESCO Heritage',
    image: '/images/hero-lalibela.png',
    teaser:
      'Carved stelae, a rock-hewn church and a million years of human tools — all south of the capital.',
    intro:
      'A single road south-west of Addis Ababa links three very different chapters of the past: the prehistoric site of Melka Kunture, the rock-hewn church of Adadi Mariam, and the carved stelae of Tiya, a World Heritage Site since 1980.',
    bestTime: 'October – May',
    duration: '1 day',
    altitude: '2,000 – 2,500 m',
    highlights: [
      'Tiya\'s stelae field — 36 monuments, 32 of them carved with swords and enigmatic symbols',
      'Adadi Mariam, a rock-hewn church 73 km from Addis, attributed by tradition to King Lalibela\'s era',
      'Melka Kunture, where obsidian tools more than 1.2 million years old have been found',
      'The upper Awash valley and the highland farmland in between',
    ],
    paragraphs: [
      'Melka Kunture, around fifty kilometres from the capital on the upper Awash River, is one of the most important prehistoric sites in East Africa, with a sequence of occupation stretching back more than a million years — including some of the earliest known use of obsidian for tools.',
      'Further on, Adadi Mariam is one of the few rock-hewn churches in the south of the country. Local tradition credits it to the time of King Lalibela, and though it is far simpler than the churches that bear his name, it is still in use and rarely busy.',
      'Tiya closes the day. Its field of standing stones, inscribed on the World Heritage List in 1980, marks a burial ground whose builders remain uncertain; many of the stelae are carved with swords and symbols that have never been fully explained.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'bishoftu-zuqualla',
    name: 'Bishoftu & Mount Zuqualla',
    region: 'Central Ethiopia',
    tag: 'Crater Lakes',
    image: '/images/lake-tana.png',
    teaser:
      'Volcanic crater lakes an hour from Addis, and a holy mountain with a lake in its summit.',
    intro:
      'Forty kilometres south-east of the capital, the town of Bishoftu is ringed by volcanic crater lakes — among them Lake Hora, where the Oromo gather each October for Irreecha. Above them rises Mount Zuqualla, whose crater holds a sacred lake and a monastery.',
    bestTime: 'October – May',
    duration: '1 day',
    altitude: '1,920 – 3,010 m',
    highlights: [
      'The crater lakes of Bishoftu, including Hora and the deeper Babogaya',
      'Irreecha, the Oromo thanksgiving festival held at Lake Hora each October',
      'The walk up Mount Zuqualla to its crater lake, held holy by pilgrims',
      'The monastery on Zuqualla, traditionally founded by the Egyptian saint Abbo',
    ],
    paragraphs: [
      'Bishoftu — also known by its older name, Debre Zeit — sits at 1,920 metres among a cluster of crater lakes formed by volcanic activity. They make an easy escape from the city: birdlife along the shores, lakeside cafés, and water far calmer than the traffic you left behind.',
      'Lake Hora is also the setting for Irreecha, the thanksgiving festival of the Oromo people, when crowds in traditional dress gather at the shore each October to give thanks, touching fresh grass and flowers to the water. It is a genuine community celebration, and one we visit respectfully and only with a local guide.',
      'Across the plain, Mount Zuqualla rises to about 3,000 metres. At its summit is a crater lake considered holy, and a monastery that tradition says was founded by Abbo, an Egyptian saint. The walk to the rim is rewarded with wide views over the surrounding plains.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'menagesha-suba-forest',
    name: 'Menagesha Suba Forest',
    region: 'Central Ethiopia',
    tag: 'Ancient Forest',
    image: '/images/hero-simien.png',
    teaser:
      'A juniper forest protected by imperial decree since the fifteenth century, forty kilometres from Addis.',
    intro:
      'On the slopes of Mount Wechecha, west of the capital, Menagesha Suba is often called the oldest protected area in East Africa — replanted with juniper and set aside by Emperor Zara Yaqob in the fifteenth century.',
    bestTime: 'October – May',
    duration: 'Half a day – 1 day',
    altitude: 'Up to 3,385 m',
    highlights: [
      'Walking trails under towering African juniper and other native trees',
      'A climb toward the summit of Mount Wechecha at 3,385 metres',
      'Forest birds and, with patience, colobus monkeys',
      'The quiet — an hour from one of Africa\'s busiest capitals',
    ],
    paragraphs: [
      'The forest\'s story begins with Emperor Zara Yaqob, who in the fifteenth century ordered the degraded slopes replanted with juniper and placed under protection. Whatever the exact claim to being the oldest protected area in East Africa, it has been cared for as a forest for more than five hundred years.',
      'Today it is simply one of the best walks near Addis Ababa: trails under tall juniper, clearings with views back toward the city, and — for those who want more — the climb toward the 3,385-metre summit of Mount Wechecha.',
      'We use Menagesha as a gentle first day for guests acclimatising before a trek, and as a half-day of fresh air for anyone with time to spare in the capital.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'wenchi-crater-lake',
    name: 'Wenchi Crater Lake',
    region: 'Oromia',
    tag: 'Crater Lake',
    image: '/images/lake-tana.png',
    teaser:
      'A lake inside an extinct volcano, with an island monastery, hot springs and waterfalls.',
    intro:
      'About 155 kilometres west of Addis Ababa by road, halfway between Ambo and Woliso, the Wenchi caldera cradles a lake at around 2,600 metres — reached on foot or on horseback, and crossed by boat to the island monastery of Cherkos.',
    bestTime: 'October – May',
    duration: '1 – 2 days',
    altitude: '≈ 2,600 m (lake)',
    highlights: [
      'The descent into the crater on foot or on horseback with local guides',
      'A boat to Cherkos, the island monastery traditionally founded by Tekle Haymanot',
      'Hot springs and waterfalls in the valley below the lake',
      'Farmland and forest on the crater walls, with views from the rim',
    ],
    paragraphs: [
      'Wenchi is one of the most beautiful landscapes within reach of the capital: a green volcanic bowl with a lake at its heart, small islands, and valleys running down to hot springs and falls. Tradition holds that the monastery of Cherkos, on one of the islands, was founded in the thirteenth century by Saint Tekle Haymanot and rebuilt in the fifteenth under Emperor Zara Yaqob.',
      'The way down is part of the visit. Local horsemen and guides lead the path from the rim to the shore, where small boats cross to the monastery. Beyond the lake, the walk continues down through the caldera to the hot springs — an easy day for most walkers, with horses for anyone who prefers to ride.',
      'Wenchi works as a long day trip from Addis Ababa, but we prefer an overnight nearby so the crater can be seen in the morning light, before the day visitors arrive.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'awash-national-park',
    name: 'Awash National Park',
    region: 'Oromia',
    tag: 'National Park',
    image: '/images/danakil.png',
    teaser:
      'Ethiopia\'s oldest national park: a dormant volcano, a waterfall gorge and palm-fringed hot springs.',
    intro:
      'Established in 1966 about 225 kilometres east of Addis Ababa, Awash is Ethiopia\'s oldest national park — 827 square kilometres of acacia plain, lava fields and river gorge, watched over by the dormant Fantale volcano.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '700 – 2,007 m',
    highlights: [
      'Awash Falls, where the river drops into a gorge some 250 metres deep',
      'Beisa oryx, Soemmerring\'s gazelle and Salt\'s dik-dik on the open plains',
      'The Fantale volcano, with the dark scar of its last lava flow in 1820',
      'The Filwoha hot springs — clear pools around 36°C, fringed by doum palms',
    ],
    paragraphs: [
      'Awash was created to protect the dry-country wildlife of the Rift Valley floor — the beisa oryx above all, alongside Soemmerring\'s gazelle and the tiny Salt\'s dik-dik. Game drives run across open grassland and acacia scrub, with the river gorge along the park\'s southern edge.',
      'Dominating the western side is Fantale, a dormant volcano whose summit crater is still grazed seasonally by the Kereyu people. On its southern flank, the black lava of its last eruption in 1820 is still clear to see from the road.',
      'Elsewhere in the park, the Filwoha hot springs form a string of warm, blue pools shaded by doum palms — an oasis for wildlife and for anyone who has spent the morning on dusty tracks. The traditional lands of the Afar, Kereyu and Ittu peoples surround the park, and we visit with local guides from those communities.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'sof-omar-caves',
    name: 'Sof Omar Caves',
    region: 'Oromia',
    tag: 'Cave System',
    image: '/images/lalibela.png',
    teaser:
      'Fifteen kilometres of river-carved limestone passages, sacred to two faiths.',
    intro:
      'East of the Bale Mountains, the Weyib River has carved Ethiopia\'s longest cave — 15.1 kilometres of passages and chambers that were the longest known in Africa when they were surveyed in 1972.',
    bestTime: 'October – March',
    duration: '1 day',
    altitude: '≈ 1,345 m (entrance)',
    highlights: [
      'The Chamber of Columns, a hall of limestone pillars shaped by the river',
      'Walking through passages where the Weyib River still flows',
      'A site held sacred by both Muslims and followers of traditional Oromo religion',
      'The dry lowland landscape of East Bale around the cave entrance',
    ],
    paragraphs: [
      'The Weyib River sinks into the rock at the Ayiew Maco entrance and reappears a kilometre away at the Holuca resurgence, and between the two it has hollowed out a labyrinth of more than fifteen kilometres. The most famous hall, the Chamber of Columns, is a forest of limestone pillars carved by water over a very long time.',
      'Sof Omar has been a religious centre for centuries. Tradition says it is named after a Muslim holy man who lived here, and Ayiew after his daughter; the cave is sacred both to Islam and to the traditional religion of the Oromo, and pilgrims still come.',
      'It lies about 110 kilometres east of Robe, in the lowlands below the Bale Mountains, which is why we usually pair it with a Bale journey — Ethiopian wolves on the Sanetti Plateau one day, an underground river the next. Visits are always made with a local guide.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'borana-yabelo',
    name: 'Borana & Yabelo',
    region: 'Oromia',
    tag: 'Pastoral Culture',
    image: '/images/omo-valley.png',
    teaser:
      'Singing wells, a salt lake inside a volcano, and a bird found nowhere else on earth.',
    intro:
      'In Ethiopia\'s far south, around the town of Yabelo, the Borana Oromo keep a pastoral way of life shaped by water: wells dug by hand deep into the ground, and a crater lake that has supplied salt for centuries.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '≈ 1,857 m (Yabelo)',
    highlights: [
      'A singing well, where herders pass water up a human chain from as deep as 30 metres, singing to keep the rhythm',
      'El Sod, a 1.8-kilometre-wide volcanic crater with a salt lake at its floor',
      'The Ethiopian bushcrow, found only in a small area around Yabelo',
      'Borana villages and cattle country on the road south',
    ],
    paragraphs: [
      'Where there is no surface water, the Borana dig for it. Their wells reach down as far as thirty metres, and to water the herds men and women form a chain inside the well, passing buckets up hand to hand and singing to keep the rhythm — the reason they are known as singing wells. The tradition stretches across the Borana lands into northern Kenya.',
      'About ninety kilometres from Yabelo, the village of El Sod stands on the rim of an extinct volcano 1.8 kilometres across. On the crater floor lies a salt lake — its Amharic name means salt house — which the Borana have worked by hand for centuries, carrying the salt up the steep path to the rim.',
      'Yabelo is also a quiet pilgrimage for birdwatchers: the Ethiopian bushcrow, or Stresemann\'s bushcrow, lives only within a small area around Yabelo and is protected in the Yabelo Wildlife Sanctuary and Borana National Park. Visits to wells and villages are arranged with local guides and always with the community\'s consent.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'jimma',
    name: 'Jimma',
    region: 'Oromia',
    tag: 'Coffee Kingdom',
    image: '/images/coffee-ceremony.png',
    teaser:
      'The palace of a coffee-rich Oromo king, in the heartland of wild Arabica.',
    intro:
      'In the green south-west, 353 kilometres from Addis Ababa, Jimma was once the capital of the strongest of the five Oromo Gibe kingdoms — and its king, Abba Jifar II, grew rich on the coffee that still grows all around the town.',
    bestTime: 'October – May',
    duration: '1 – 2 days',
    altitude: '≈ 1,780 m',
    highlights: [
      'The palace of King Abba Jifar II on the hill at Jiren',
      'The palace museum, with the king\'s furniture, manuscripts and household objects',
      'Coffee farms and forest in the region where Arabica originates',
      'Jimma\'s markets, busy with coffee and produce from the surrounding hills',
    ],
    paragraphs: [
      'The Kingdom of Jimma was an Oromo Muslim kingdom that emerged in the eighteenth century, with its capital at Jiren, today part of Jimma town. Under Abba Jifar II it became the strongest of the Gibe kingdoms, and through careful diplomacy it kept a large measure of autonomy even after joining the Ethiopian empire.',
      'His palace, built at the end of the nineteenth century, still stands on its hill above the town — a timber and stone complex with a mosque, reception halls and royal quarters. The museum inside keeps the king\'s beds, chairs, utensils and manuscripts, and tells the story of a court that grew wealthy on coffee.',
      'Coffee is still the reason to come. Jimma lies in the heart of the country\'s wild Arabica region, and we spend time on local farms and in the forest with growers before a ceremony at home. For guests who want to go further, the forests of Kafa and Bonga lie beyond, to the south-west.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'harar',
    name: 'Harar',
    region: 'Eastern Ethiopia',
    tag: 'UNESCO Heritage',
    image: '/images/textile.png',
    teaser:
      'Ethiopia\'s only walled city — 82 mosques, lanes too narrow for cars, and hyenas fed by hand at dusk.',
    intro:
      'On a hilltop in the eastern highlands, Harar Jugol has been a centre of Islamic learning and trade for centuries. Its walled old city, listed by UNESCO in 2006, is a maze of lanes, painted houses and shrines entered through historic gates.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '1,885 m',
    highlights: [
      'The Jugol wall and its historic gates, including the Shoa Gate',
      'An old city counted by UNESCO as holding 82 mosques and 102 shrines',
      'The hyena feeding at dusk, a tradition kept by Harar\'s hyena men for generations',
      'The Rimbaud House, with photographs of the city a century ago',
      'Harar coffee, grown in the surrounding highlands and known for its fruity, wine-like character',
    ],
    paragraphs: [
      'The wall around the old city is believed to have been built between the thirteenth and sixteenth centuries, and five historic gates once led into five different quarters. Inside, the lanes are too narrow for cars: a walk through Harar is a walk through markets, courtyards and the colourful traditional houses of the Harari people.',
      'UNESCO describes Harar as considered the fourth holiest city of Islam, with 82 mosques — three said to date from the tenth century — and 102 shrines. It is also a city of trade, and its markets still gather goods from the surrounding countryside, including the coffee for which the eastern highlands are famous.',
      'As night falls, the hyena men of Harar call wild spotted hyenas to the edge of the city and feed them by hand — a tradition that local history traces to a nineteenth-century famine. Harar lies a short drive from Dire Dawa, which has flights from Addis Ababa, so two or three days here fit easily into a wider journey.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'arba-minch-nechisar',
    name: 'Arba Minch & Nechisar',
    region: 'Southern Rift',
    tag: 'Lakes & Wildlife',
    image: '/images/lake-tana.png',
    teaser:
      'Forty springs, two Rift Valley lakes, and crocodiles basking on the shore of Lake Chamo.',
    intro:
      'Arba Minch — "forty springs" — sits above two great Rift Valley lakes, Abaya and Chamo, divided by a narrow isthmus known as the Bridge of God. Below it lies Nechisar National Park, and above it the cool Gamo Highlands of the Dorze weavers.',
    bestTime: 'October – March',
    duration: '2 – 3 days',
    altitude: '1,285 – 2,732 m',
    highlights: [
      'A boat on Lake Chamo to the Crocodile Market, where hundreds of crocodiles sun themselves',
      'The Bridge of God, the isthmus between Lakes Abaya and Chamo',
      'The Nechisar plains — the park\'s name means "white grass"',
      'The Dorze villages near Chencha, with woven bamboo houses up to 12 metres tall',
    ],
    paragraphs: [
      'The town takes its name from the springs at the entrance to Nechisar National Park, and the park itself stretches across the ridge between Lakes Abaya and Chamo and the pale grass plains to the east — the white grass that gives Nechisar its name.',
      'The classic outing is by boat across Lake Chamo to the stretch of shore known as the Crocodile Market, where large numbers of crocodiles gather in the sun. Birdlife along the lakes is rich, and the views back to the escarpment are some of the best in the southern Rift.',
      'Up in the Gamo Highlands, around Chencha at 2,732 metres, the Dorze are known for their weaving and for their tall beehive-shaped houses woven from bamboo, which can reach twelve metres and last for decades. We visit with a Dorze guide, and Arba Minch has flights from Addis Ababa, making it the natural gateway to Konso and the Omo Valley.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'konso',
    name: 'Konso',
    region: 'Southern Rift',
    tag: 'UNESCO Heritage',
    image: '/images/omo-valley.png',
    teaser:
      'Stone-terraced hills and walled villages — a living landscape more than 400 years in the making.',
    intro:
      'In 2011 the Konso Cultural Landscape became the first place in Ethiopia listed by UNESCO as a cultural landscape: 55 square kilometres of dry-stone terraces and fortified hilltop villages, built and maintained by the Konso over some 21 generations.',
    bestTime: 'October – March',
    duration: '1 – 2 days',
    altitude: '≈ 1,650 m',
    highlights: [
      'Terraces of dry-stone walls, in places up to five metres high',
      'Walled villages such as Mecheke and Gamole, ringed by as many as six stone walls',
      'The Konso Museum, with around 200 carved waka grave markers returned after looting',
      'A landscape still farmed, lived in and governed by its own traditions',
    ],
    paragraphs: [
      'Konso agriculture is a feat of engineering. Dry-stone walls, some five metres high, contour the hillsides into terraces that hold the soil, catch the rain and release the excess — the reason crops grow here at all in a dry, difficult environment. The tradition stretches back more than four hundred years.',
      'The Konso live in fortified hilltop towns, each encircled by up to six concentric stone walls and entered through ceremonial gates. Of the two dozen or so traditional villages, Mecheke, Dokatu, Gamole and Buso are the most visited, and a local guide explains the meeting houses, generation poles and public spaces that organise village life.',
      'Waka — carved wooden grave markers — honour important men and brave warriors. Many still stand in place, and the Konso Museum shows around two hundred that were recovered after being looted by collectors. Konso lies 87 kilometres from Arba Minch, on the road to the Omo Valley.',
    ],
    span: 'lg:col-span-6',
  },
  {
    slug: 'sidama-yirgacheffe',
    name: 'Sidama & Yirgacheffe',
    region: 'Southern Rift',
    tag: 'Coffee Country',
    image: '/images/coffee-ceremony.png',
    teaser:
      'The hills behind the world\'s most famous coffees — and a UNESCO landscape where coffee grows under the trees.',
    intro:
      'South of Hawassa, the green slopes of Sidama and Gedeo produce the coffees known worldwide as Sidamo and Yirgacheffe. In 2023 UNESCO listed the Gedeo Cultural Landscape, where coffee is grown in layered forest gardens beneath shade trees and enset.',
    bestTime: 'October – February',
    duration: '2 – 4 days',
    altitude: '1,570 – 1,920 m',
    highlights: [
      'Coffee farms and washing stations in Sidama, which grows around 30% of Ethiopia\'s coffee',
      'The Gedeo agroforestry landscape, a World Heritage Site since 2023',
      'The megalithic stelae of Tuto Fela near Dilla, dated in part to the 11th–13th centuries',
      'A cupping with growers, and a coffee ceremony in a family home',
    ],
    paragraphs: [
      'Sidama is the leading coffee-producing zone in the country, and Yirgacheffe, in neighbouring Gedeo, is perhaps the most celebrated coffee name in the world. Visiting during the harvest, roughly from October into the new year, means cherries on the trees and washing stations at work.',
      'The Gedeo landscape is remarkable in its own right. Instead of open plantations, the Gedeo farm in layers: tall trees overhead, enset — the false banana that is their staple food — beneath, and coffee under that. UNESCO inscribed it in 2023 for this system and for the sacred forests and stone monuments woven through it.',
      'Those monuments are among the most striking in Africa: the region holds a vast concentration of megaliths, and the site of Tuto Fela near Dilla preserves carved stelae partly dated to between the eleventh and thirteenth centuries. Hawassa, 273 kilometres south of Addis Ababa on its own lake, is the natural base.',
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

// Tours without a price we can stand behind are quoted individually. Keep this
// sentinel in `from`, and check it with isTailorMade() before showing a price.
export const TAILOR_MADE = 'Tailor-made'

export function isTailorMade(t: Pick<Tour, 'from'>) {
  return t.from === TAILOR_MADE
}

export const tours: Tour[] = [
  {
    slug: 'the-historic-route',
    title: 'The Historic Route',
    image: '/images/hero-lalibela.png',
    days: '11 Days',
    nights: 10,
    style: 'Cultural · Luxury · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
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
    slug: 'simien-escarpment-trek',
    title: 'Simien Escarpment Trek',
    image: '/images/bale-gelada.png',
    days: '5 Days',
    nights: 4,
    style: 'Trekking · Small Group',
    season: 'Oct – Apr',
    from: '$1,890 per person',
    group: '2 – 10 guests',
    teaser:
      'Camp to camp along the northern rim — Sankaber, Geech, Chenek — with the drop never more than a few steps away.',
    summary:
      'The classic Simien line, walked from Gondar and back in five days. Mules carry the loads, a park scout and camp cook travel with you, and each day ends a little higher than the last, so the altitude arrives gradually rather than all at once.',
    includes: [
      'A night in Gondar before the trek, with the castles on the afternoon of arrival',
      'Return transfers Gondar – Debark – Gondar',
      'All national park fees, an armed park scout and permits',
      'Mules and muleteers, a camp cook and full board on the trail',
      'Tents, sleeping mats and a heated mess tent at every camp',
      'A senior English-speaking mountain guide throughout',
    ],
    excludes: [
      'Flights to and from Gondar',
      'Sleeping bag (hire available in Gondar)',
      'Travel insurance (required)',
      'Gratuities for scouts, muleteers and cook',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Gondar',
        text: 'The royal enclosure in the afternoon light, then a kit check and route briefing with your mountain guide over dinner.',
      },
      {
        day: 'Day 2',
        title: 'Debark to Sankaber · 3,250 m',
        text: 'Two hours north to the park office at Debark to collect your scout, then a first gentle walk along the rim from Buyit Ras, where gelada troops graze right up to the path.',
      },
      {
        day: 'Day 3',
        title: 'Sankaber to Geech · 3,600 m',
        text: 'Around six hours and thirteen kilometres along the escarpment to Jinbar Falls, then up through barley terraces to camp. For those with legs left, a sunset walk to Kedadit.',
      },
      {
        day: 'Day 4',
        title: 'Imet Gogo & Inatye to Chenek · 3,620 m',
        text: 'The longest and best day: Imet Gogo at 3,926 metres, the ridge over Inatye at 4,070, and a long descent through giant lobelia to the cliffs at Chenek.',
      },
      {
        day: 'Day 5',
        title: 'Bwahit & return to Gondar',
        text: 'A dawn walk toward the Bwahit pass, the best ground in the park for walia ibex, before the drive back to Gondar by late afternoon.',
      },
    ],
    places: ['Gondar', 'Debark', 'Sankaber', 'Geech', 'Imet Gogo', 'Chenek', 'Simien Mountains'],
    featured: true,
  },
  {
    slug: 'gondar-and-the-simien-rim',
    title: 'Gondar & the Simien Rim',
    image: '/images/luxury-lodge.png',
    days: '4 Days',
    nights: 3,
    style: 'Cultural · Hiking · Private',
    season: 'Oct – May',
    from: '$1,760 per person',
    group: '2 – 8 guests',
    teaser:
      'The castles of Gondar, then three nights on the escarpment edge — every walk, no tents.',
    summary:
      'For guests who want the Simien without camping. A full day in the imperial city, then a lodge on the rim as your base, with a vehicle on hand so each walk can be as long or as short as the day allows.',
    includes: [
      'A specialist historian-guide for the day in Gondar',
      'Two nights at an escarpment lodge, one in Gondar',
      'Private 4x4 and driver for the full itinerary',
      'All national park fees and a park scout',
      'Breakfast daily, lunches and dinners in the mountains',
      'Walks tailored each morning to weather and energy',
    ],
    excludes: [
      'Flights to and from Gondar',
      'Travel insurance (required)',
      'Gratuities and drinks',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Gondar',
        text: 'Fasil Ghebbi at opening hour, the cherubim ceiling at Debre Berhan Selassie, the potters of Wolleka village, and Kuskuam palace as the light goes.',
      },
      {
        day: 'Day 2',
        title: 'Up to the rim',
        text: 'The drive north to Debark, then an afternoon walk from Buyit Ras to Sankaber among the gelada troops, and a lodge fire waiting at the end.',
      },
      {
        day: 'Day 3',
        title: 'Jinbar Falls & Imet Gogo',
        text: 'A half-day walk to the Jinbar gorge, lunch on the escarpment, then the drive out to Imet Gogo for the view across three ridgelines at dusk.',
      },
      {
        day: 'Day 4',
        title: 'Chenek & return',
        text: 'An early run to Chenek while the walia ibex are still on the cliffs, then back down to Gondar in time for an evening flight.',
      },
    ],
    places: ['Gondar', 'Wolleka', 'Simien Mountains', 'Imet Gogo', 'Chenek'],
    featured: true,
  },
  {
    slug: 'ras-dashen-traverse',
    title: 'Ras Dashen Traverse',
    image: '/images/hero-simien.png',
    days: '10 Days',
    nights: 9,
    style: 'Climbing · Trekking · Expedition · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'West to east across the whole Simien massif, to the roof of Ethiopia and out the far side.',
    summary:
      'A full traverse rather than an out-and-back: the western rim first, for acclimatisation and the classic views, then down through the Mesheha valley to Ambiko, up Ras Dashen before dawn, and out through river valleys to Adi Arkay. Most of the week is above 3,500 metres, so fitness and patience matter more than technique.',
    includes: [
      'Return transfers from Gondar, with a night there at each end',
      'All national park fees, an armed scout and summit permits',
      'Mules, muleteers, a camp cook and full board on the trail',
      'Four-season tents, mats and a heated mess tent',
      'A senior mountain guide with altitude first-aid training',
      'Pulse oximeter checks every morning above 3,500 metres',
    ],
    excludes: [
      'Flights to and from Gondar',
      'Sleeping bag (hire available in Gondar)',
      'Travel insurance with evacuation cover',
      'Gratuities for scouts, muleteers and cook',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Gondar',
        text: 'Route briefing, kit check and a quiet afternoon around the castles before an early night.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Sankaber & Geech',
        text: 'The western rim at an easy pace: geladas above Sankaber, then the long escarpment walk past Jinbar Falls to camp at Geech.',
      },
      {
        day: 'Day 4',
        title: 'Imet Gogo & Saha',
        text: 'An acclimatisation day with no camp move — Imet Gogo at sunrise, the Saha gorge in the afternoon, and back to Geech for the night.',
      },
      {
        day: 'Day 5',
        title: 'Inatye to Chenek',
        text: 'Over the 4,070-metre ridge at Inatye and through the lobelia to Chenek, where the walia ibex come down to the cliffs at dusk.',
      },
      {
        day: 'Day 6',
        title: 'Bwahit to Ambiko',
        text: 'Over the Bwahit pass at 4,200 metres, down into the Mesheha river valley, and a long climb out to the base camp at Ambiko.',
      },
      {
        day: 'Day 7',
        title: 'Ras Dashen summit · 4,550 m',
        text: 'A 3 a.m. start, headlamps up the scree, and the summit tower as the sun clears the eastern ridges. Back at Ambiko by early afternoon.',
      },
      {
        day: 'Days 8 – 9',
        title: 'Berochwuha & the river valleys',
        text: 'An optional second summit on Berochwuha, then the descent through Sona and the Mekarebya valley to the village of Mulet, with a swim at Derkwenth pool on the way.',
      },
      {
        day: 'Day 10',
        title: 'Adi Arkay & Gondar',
        text: 'A last morning\'s walk to the road at Adi Arkay, then the drive back to Gondar for a hot shower and a proper dinner.',
      },
    ],
    places: ['Gondar', 'Simien Mountains', 'Chenek', 'Ambiko', 'Ras Dashen', 'Adi Arkay'],
  },
  {
    slug: 'the-complete-north',
    title: 'The Complete North',
    image: '/images/hero-gondar.jpg',
    days: '15 Days',
    nights: 14,
    style: 'Cultural · Trekking · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Every great northern site, plus three days walking the Simien — driven overland where the road is worth it.',
    summary:
      'The Historic Route with the gaps filled in. Instead of flying between every stop, we drive the stretches that earn it — the Limalimo road down off the Simien, the Tigray highlands into Axum — and add three camp nights on the escarpment and the cliff churches of Gheralta.',
    includes: [
      'All domestic flights and a private vehicle with senior driver-guide',
      'Specialist local guides at Lake Tana, Gondar, Axum, Gheralta and Lalibela',
      'A fully supported three-day Simien trek with scout, mules and cook',
      'Boutique lodges throughout, and a community guesthouse in Gheralta',
      'Breakfast daily, full board on the trek and in Gheralta',
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
        text: 'Private transfer, an afternoon to rest, and a welcome dinner with your trip coordinator.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Bahir Dar & Lake Tana',
        text: 'The island monasteries by private boat, the manuscripts of the Zege peninsula, and the fish market at dawn.',
      },
      {
        day: 'Day 4',
        title: 'Blue Nile Falls to Gondar',
        text: 'A walk from Tis Abay village to the falls and across the seventeenth-century Portuguese bridge, then the road north to Gondar.',
      },
      {
        day: 'Day 5',
        title: 'Gondar',
        text: 'The royal enclosure, Debre Berhan Selassie, the Beta Israel village at Wolleka and Kuskuam at sunset.',
      },
      {
        day: 'Days 6 – 8',
        title: 'Simien trek',
        text: 'Camp to camp from Sankaber to Geech to Chenek, with Imet Gogo at sunrise and walia ibex on the final morning.',
      },
      {
        day: 'Day 9',
        title: 'The Limalimo road to Axum',
        text: 'Down the switchbacks off the Simien escarpment, across the Tekeze gorge and up into Tigray — one of the great drives in Africa.',
      },
      {
        day: 'Day 10',
        title: 'Axum',
        text: 'The stelae field, the Chapel of the Tablet from the permitted threshold, and the eighth-century BCE temple at Yeha on the road east.',
      },
      {
        day: 'Days 11 – 12',
        title: 'Gheralta',
        text: 'Abuna Yemata Guh for the climbers, Maryam Korkor for everyone, and a night in a village guesthouse below the cliffs.',
      },
      {
        day: 'Days 13 – 14',
        title: 'Lalibela',
        text: 'The churches at dawn, Asheton Maryam above town, and the cave church of Yemrehanna Kristos out in the hills.',
      },
      {
        day: 'Day 15',
        title: 'Addis & Departure',
        text: 'A morning flight south, a day room, and a final coffee ceremony before your evening departure.',
      },
    ],
    places: ['Lake Tana', 'Gondar', 'Simien Mountains', 'Axum', 'Gheralta', 'Lalibela'],
    featured: true,
  },
  {
    slug: 'gheralta-and-axum',
    title: 'Gheralta & Axum',
    image: '/images/festival-timkat.png',
    days: '6 Days',
    nights: 5,
    style: 'Cultural · Hiking · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Cliffside churches reached on foot, then the granite stelae of Ethiopia\'s oldest empire.',
    summary:
      'Tigray at walking pace. Three days among the sandstone towers of Gheralta, sleeping in the village below them, then Axum and its stelae. Run only when regional conditions allow — we confirm access with our partners on the ground before every departure.',
    includes: [
      'Return flights Addis – Mekele and Axum – Addis',
      'A private vehicle and a Tigrayan guide from Gheralta itself',
      'Climbing guides and church entry at every site',
      'Two nights in a community guesthouse, one lodge night in Axum',
      'Full board in Gheralta, breakfast in Axum',
      'A priest\'s blessing arranged at Abuna Yemata Guh, where welcome',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Gratuities and church donations',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis to Gheralta',
        text: 'A morning flight to Mekele and the drive north into the Gheralta range, arriving for sunset over the sandstone.',
      },
      {
        day: 'Day 2',
        title: 'Abuna Yemata Guh & Debre Tsion',
        text: 'The barefoot climb and ledge walk to Abuna Yemata Guh for those who want it, a valley-floor church for those who don\'t, then the frescoes of Abune Abraham in the afternoon.',
      },
      {
        day: 'Day 3',
        title: 'Maryam & Daniel Korkor',
        text: 'A steady climb to the summit plateau for both Korkor churches and the view across the range, then down to Korkor village for the night.',
      },
      {
        day: 'Day 4',
        title: 'Yeha to Axum',
        text: 'The drive west by way of Yeha, a temple older than Aksum itself, arriving in Axum by mid-afternoon.',
      },
      {
        day: 'Day 5',
        title: 'Axum',
        text: 'The Northern Stelae Field, the Chapel of the Tablet, the Ezana inscription and the palace ruins at Dungur.',
      },
      {
        day: 'Day 6',
        title: 'Departure',
        text: 'A morning flight back to Addis Ababa to connect with your onward journey.',
      },
    ],
    places: ['Mekele', 'Gheralta', 'Korkor', 'Yeha', 'Axum'],
  },
  {
    slug: 'lalibela-beyond-the-churches',
    title: 'Lalibela, Beyond the Churches',
    image: '/images/lalibela.png',
    days: '4 Days',
    nights: 3,
    style: 'Cultural · Hiking · Private',
    season: 'Oct – Mar',
    from: '$1,980 per person',
    group: '2 – 8 guests',
    teaser:
      'The eleven churches at their best hours, then out into the hills for the ones most visitors miss.',
    summary:
      'Most trips give Lalibela a day and a half. We give the town its dawns and dusks, then walk and drive out to Asheton Maryam, Nakuto La\'ab and the cave church of Yemrehanna Kristos — older than Lalibela itself, and almost unvisited.',
    includes: [
      'A resident Lalibela guide on good terms with the clergy',
      'All church entry fees and a church-site scout',
      'A mule for the Asheton Maryam climb, if wanted',
      'Three nights at a lodge within walking distance of the churches',
      'Breakfast and dinner daily',
      'Airport transfers on arrival and departure',
    ],
    excludes: [
      'Flights to and from Lalibela',
      'Travel insurance (required)',
      'Gratuities and church donations',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Lalibela',
        text: 'Straight to Bete Giyorgis for the late light on its cross-shaped roof, then dinner above the town.',
      },
      {
        day: 'Day 2',
        title: 'The two church clusters',
        text: 'The northern cluster at dawn with the morning service, then through the trench passages to Bete Golgotha and the eastern group once the crowds have gone.',
      },
      {
        day: 'Day 3',
        title: 'Asheton Maryam & Nakuto La\'ab',
        text: 'A morning climb to the cliff monastery of Asheton Maryam, on foot or by mule, and the cave church of Nakuto La\'ab in the afternoon.',
      },
      {
        day: 'Day 4',
        title: 'Yemrehanna Kristos & departure',
        text: 'The drive out to a church built of wood and stone inside a cave, a century older than Lalibela\'s, before an afternoon flight.',
      },
    ],
    places: ['Lalibela', 'Asheton Maryam', 'Nakuto La\'ab', 'Yemrehanna Kristos'],
  },
  {
    slug: 'addis-ababa-in-depth',
    title: 'Addis Ababa in Depth',
    image: '/images/addis-skyline.png',
    days: '2 Days',
    nights: 1,
    style: 'Cultural · Family · Private',
    season: 'Year-round',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Lucy, Entoto, the emperors\' palace and Africa\'s biggest market — the capital properly, in two unhurried days.',
    summary:
      'The capital most travellers only pass through, seen the way residents would show it: the hills where the city began, the museum that holds humanity\'s most famous ancestor, the market that never stops, and an evening of music and food to close. A natural start or finish to any journey in Ethiopia.',
    includes: [
      'A private vehicle and city guide for both days',
      'One night at a boutique hotel in Addis Ababa',
      'Entry to the National Museum, Entoto and Unity Park',
      'A guided walk through Merkato',
      'A coffee ceremony in a family home',
      'Dinner with traditional music and dance',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Lunches, drinks and personal purchases',
    ],
    itinerary: [
      {
        day: 'Day 1 · Morning',
        title: 'Entoto, where the city began',
        text: 'Up into the eucalyptus forest of Mount Entoto for the view over the city, Menelik II\'s palace, and the church of Entoto Maryam.',
      },
      {
        day: 'Day 1 · Afternoon',
        title: 'Lucy & the National Museum',
        text: 'The 3.2-million-year-old fossil known as Lucy — Dinknesh — and the galleries of ancient Ethiopia, then Holy Trinity Cathedral, where Haile Selassie is buried.',
      },
      {
        day: 'Day 1 · Evening',
        title: 'Music & dinner',
        text: 'A traditional dinner with live music and dance from across the country\'s regions.',
      },
      {
        day: 'Day 2 · Morning',
        title: 'Unity Park',
        text: 'The palace compound of the emperors, opened to the public as Unity Park — throne rooms, banquet halls and gardens.',
      },
      {
        day: 'Day 2 · Afternoon',
        title: 'Merkato & a coffee ceremony',
        text: 'Africa\'s largest open-air market with a guide who knows its lanes, then a full three-round coffee ceremony in a family home before your onward journey.',
      },
    ],
    places: ['Addis Ababa', 'Entoto', 'Unity Park', 'Merkato'],
  },
  {
    slug: 'southern-heritage-road',
    title: 'The Southern Heritage Road',
    image: '/images/hero-lalibela.png',
    days: '1 Day',
    nights: 0,
    style: 'Cultural · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'A million years of human history in a single day south of Addis — early tools, a rock-hewn church, and the carved stelae of Tiya.',
    summary:
      'One road, three chapters of the past. The prehistoric site of Melka Kunture, the rock-hewn church of Adadi Mariam, and the World Heritage stelae field at Tiya, with the farmland of the upper Awash valley in between. An easy, rewarding day from the capital.',
    includes: [
      'A private vehicle and guide for the day',
      'Entry to Melka Kunture, Adadi Mariam and Tiya',
      'A packed or local lunch',
      'Hotel pick-up and drop-off in Addis Ababa',
    ],
    excludes: [
      'Travel insurance (required)',
      'Church donations and gratuities',
    ],
    itinerary: [
      {
        day: 'Morning',
        title: 'Melka Kunture',
        text: 'About fifty kilometres out of the city, the prehistoric site on the upper Awash River, where obsidian tools more than 1.2 million years old have been found.',
      },
      {
        day: 'Midday',
        title: 'Adadi Mariam',
        text: 'The rock-hewn church 73 kilometres from Addis, attributed by tradition to King Lalibela\'s era — simpler than Lalibela, still in use, and rarely busy.',
      },
      {
        day: 'Afternoon',
        title: 'The stelae of Tiya',
        text: 'The World Heritage stelae field: 36 monuments, 32 of them carved with swords and symbols never fully explained. Back in Addis by early evening.',
      },
    ],
    places: ['Melka Kunture', 'Adadi Mariam', 'Tiya & Adadi Mariam'],
  },
  {
    slug: 'debre-libanos-and-the-jemma-gorge',
    title: 'Debre Libanos & the Jemma Gorge',
    image: '/images/bale-gelada.png',
    days: '1 Day',
    nights: 0,
    style: 'Cultural · Wildlife · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'A thirteenth-century monastery on a cliff ledge, gorge views, and gelada monkeys on the rim — a day north of Addis.',
    summary:
      'A hundred kilometres north of the capital, the great monastery founded by Saint Tekle Haymanot sits between a cliff and the gorge of a Blue Nile tributary. We pair it with short walks to the gorge viewpoints and the old stone bridge. It can also run as an overnight at a lodge on the rim.',
    includes: [
      'A private vehicle and guide for the day',
      'Monastery and museum entry',
      'A local guide for the gorge walks',
      'Lunch on the gorge rim',
      'Hotel pick-up and drop-off in Addis Ababa',
    ],
    excludes: [
      'Travel insurance (required)',
      'An optional overnight at the rim (on request)',
      'Church donations and gratuities',
    ],
    itinerary: [
      {
        day: 'Morning',
        title: 'North across the plateau',
        text: 'Out of Addis and north across the farmland of the Shewa plateau, arriving at Debre Libanos by mid-morning.',
      },
      {
        day: 'Midday',
        title: 'The monastery',
        text: 'The monastery founded in 1284 by Tekle Haymanot, its church, its museum, and the terrace between the cliffs and the gorge — still a place of pilgrimage.',
      },
      {
        day: 'Afternoon',
        title: 'The Jemma gorge & the bridge',
        text: 'Short walks to the gorge viewpoints and the stone bridge built in the 1890s by Ras Darge, with gelada monkeys grazing along the rim. Back in Addis by evening.',
      },
    ],
    places: ['Debre Libanos', 'Jemma Gorge'],
  },
  {
    slug: 'crater-lakes-and-the-holy-mountain',
    title: 'Crater Lakes & the Holy Mountain',
    image: '/images/lake-tana.png',
    days: '1 Day',
    nights: 0,
    style: 'Hiking · Cultural · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Bishoftu\'s volcanic crater lakes in the morning, then a walk to the sacred lake on the summit of Mount Zuqualla.',
    summary:
      'An hour south-east of Addis, a string of crater lakes surrounds the town of Bishoftu. After a slow morning on their shores, we drive to the foot of Mount Zuqualla and walk up to its crater lake and monastery, at around 3,000 metres. In early October we can time it to the Irreecha festival at Lake Hora.',
    includes: [
      'A private vehicle and guide for the day',
      'A local guide for the Zuqualla walk',
      'Monastery entry and a lakeside lunch',
      'Hotel pick-up and drop-off in Addis Ababa',
    ],
    excludes: [
      'Travel insurance (required)',
      'Donations and gratuities',
    ],
    itinerary: [
      {
        day: 'Morning',
        title: 'The crater lakes of Bishoftu',
        text: 'South-east to Bishoftu and its lakes — Hora, where the Oromo gather for Irreecha each October, and the deeper Babogaya — with birdlife along the shores.',
      },
      {
        day: 'Midday',
        title: 'Lunch by the water',
        text: 'A slow lunch at a lakeside restaurant before the afternoon climb.',
      },
      {
        day: 'Afternoon',
        title: 'Mount Zuqualla',
        text: 'The walk up to the holy crater lake and the monastery traditionally founded by the Egyptian saint Abbo, with wide views from the rim. Back in Addis by evening.',
      },
    ],
    places: ['Bishoftu', 'Mount Zuqualla'],
  },
  {
    slug: 'addis-and-its-highlands',
    title: 'Addis & Its Highlands',
    image: '/images/addis-skyline.png',
    days: '5 Days',
    nights: 4,
    style: 'Cultural · Hiking · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'The capital and everything within a day of it — stelae, a cliffside monastery, crater lakes and a five-hundred-year-old forest.',
    summary:
      'Five days based in one comfortable hotel, with a different direction each morning: south to the stelae of Tiya, north to Debre Libanos, south-east to the crater lakes, and west into the ancient forest of Menagesha. Ideal for a first visit, a long stopover, or gentle acclimatisation before the north.',
    includes: [
      'A private vehicle and senior guide throughout',
      'Four nights at a boutique hotel in Addis Ababa',
      'All site, museum, monastery and park entry fees',
      'Local guides for the gorge, mountain and forest walks',
      'Breakfast daily and lunch on every excursion',
      'A coffee ceremony and a farewell dinner with music',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Dinners not listed, drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa',
        text: 'Mount Entoto and Menelik\'s palace in the morning, then Lucy at the National Museum and Holy Trinity Cathedral.',
      },
      {
        day: 'Day 2',
        title: 'The Southern Heritage Road',
        text: 'Melka Kunture\'s prehistoric site, the rock-hewn church of Adadi Mariam, and the World Heritage stelae of Tiya.',
      },
      {
        day: 'Day 3',
        title: 'Debre Libanos & the Jemma Gorge',
        text: 'North to the monastery founded in 1284 by Tekle Haymanot, the gorge viewpoints, and gelada monkeys along the rim.',
      },
      {
        day: 'Day 4',
        title: 'Crater Lakes & Mount Zuqualla',
        text: 'The lakes of Bishoftu in the morning, then the walk to the holy crater lake and monastery on Zuqualla.',
      },
      {
        day: 'Day 5',
        title: 'Menagesha forest & farewell',
        text: 'A morning walk in the juniper forest protected since the fifteenth century, then Merkato, a coffee ceremony, and a farewell dinner with music.',
      },
    ],
    places: ['Addis Ababa', 'Tiya & Adadi Mariam', 'Debre Libanos', 'Bishoftu', 'Menagesha Suba Forest'],
  },
  {
    slug: 'wenchi-crater-lake-escape',
    title: 'Wenchi Crater Lake Escape',
    image: '/images/lake-tana.png',
    days: '2 Days',
    nights: 1,
    style: 'Hiking · Cultural · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Into a volcanic crater on foot or horseback, by boat to an island monastery, and down to the hot springs.',
    summary:
      'Wenchi is easy to rush as a long day trip. We give it a night instead, so you see the crater in the quiet of the morning and walk it at your own pace — down to the lake with local horsemen, across to the monastery of Cherkos, and on to the hot springs and falls.',
    includes: [
      'A private vehicle and guide from Addis Ababa',
      'Local guides and horses at Wenchi, as you prefer',
      'The boat crossing to Cherkos monastery',
      'One night in Ambo or Woliso',
      'Lunch both days and dinner on the first night',
    ],
    excludes: [
      'Travel insurance (required)',
      'Church donations and gratuities for horsemen',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'West to the crater',
        text: 'About 155 kilometres west of Addis through farmland and eucalyptus, arriving at the rim of the caldera for a first look down at the lake. An easy afternoon walk along the rim, and the night in Ambo or Woliso.',
      },
      {
        day: 'Day 2 · Morning',
        title: 'Down to the lake & Cherkos',
        text: 'The descent on foot or on horseback with local guides, then a small boat to the island monastery of Cherkos, traditionally founded by Tekle Haymanot.',
      },
      {
        day: 'Day 2 · Afternoon',
        title: 'Hot springs & the road home',
        text: 'The walk on through the caldera to the hot springs and falls, lunch by the water, and the drive back to Addis Ababa by evening.',
      },
    ],
    places: ['Wenchi Crater Lake', 'Cherkos', 'Ambo'],
  },
  {
    slug: 'awash-and-the-fantale-volcano',
    title: 'Awash & the Fantale Volcano',
    image: '/images/danakil.png',
    days: '3 Days',
    nights: 2,
    style: 'Wildlife · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Oryx on the plains, a waterfall gorge, the lava of an 1820 eruption, and warm pools under the palms.',
    summary:
      'Ethiopia\'s oldest national park is only a few hours east of the capital, yet few visitors reach it. Three days are enough for dawn and dusk game drives, the Awash Falls and gorge, the lava fields of Fantale, and a slow afternoon at the Filwoha hot springs.',
    includes: [
      'A private 4x4 and driver-guide from Addis Ababa',
      'All park fees and an armed park scout',
      'Two nights at a lodge above Awash Falls',
      'Full board in the park',
      'Game drives at dawn and in the late afternoon',
    ],
    excludes: [
      'Travel insurance (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'East to Awash Falls',
        text: 'About 225 kilometres east from Addis Ababa, down into the Rift Valley, arriving at Awash Falls where the river drops into its gorge. A late-afternoon drive on the plains for the first oryx.',
      },
      {
        day: 'Day 2',
        title: 'Oryx, Fantale & Filwoha',
        text: 'A dawn game drive for beisa oryx, Soemmerring\'s gazelle and Salt\'s dik-dik, then the lava field of Fantale\'s 1820 eruption. The afternoon at the palm-fringed Filwoha hot springs, and dusk back at the falls.',
      },
      {
        day: 'Day 3',
        title: 'Back to Addis Ababa',
        text: 'A last early drive along the gorge, then the road west to the capital by mid-afternoon.',
      },
    ],
    places: ['Awash National Park', 'Fantale', 'Filwoha'],
  },
  {
    slug: 'bale-mountains-and-sof-omar',
    title: 'Bale Mountains & Sof Omar',
    image: '/images/bale-gelada.png',
    days: '6 Days',
    nights: 5,
    style: 'Wildlife · Hiking · Private',
    season: 'Nov – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Ethiopian wolves on the roof of Africa, a cloud forest below it, then an underground river in the lowlands.',
    summary:
      'The Bale Mountains in full — the moorland of Dinsho, the Sanetti Plateau where Ethiopian wolves hunt at dawn, and the Harenna forest on the southern slopes — then east to the lowlands and the river-carved passages of Sof Omar, Ethiopia\'s longest cave.',
    includes: [
      'A private 4x4 and a naturalist guide throughout',
      'All national park fees, scouts and cave guides',
      'Lodge accommodation in Bale and near Robe',
      'Full board throughout',
      'Road transfers from Addis Ababa, with a return flight from Robe where available',
    ],
    excludes: [
      'Travel insurance (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'South to Dinsho',
        text: 'The long drive south-east from Addis Ababa to the park headquarters at Dinsho, with mountain nyala grazing the moorland edges at dusk.',
      },
      {
        day: 'Day 2',
        title: 'The Sanetti Plateau',
        text: 'Up onto the Sanetti Plateau above 4,000 metres at dawn, when the Ethiopian wolves are most active, among giant lobelia and Afro-alpine lakes.',
      },
      {
        day: 'Day 3',
        title: 'The Harenna forest',
        text: 'Down the southern escarpment into the Harenna cloud forest, where wild coffee grows in the understorey and colobus monkeys move through the canopy.',
      },
      {
        day: 'Day 4',
        title: 'East to the lowlands',
        text: 'Across to Robe and on east into the dry lowlands, arriving near Sof Omar in the afternoon.',
      },
      {
        day: 'Day 5',
        title: 'Sof Omar Caves',
        text: 'A guided walk through the passages of the Weyib River to the Chamber of Columns, in a cave held sacred by both Muslims and followers of traditional Oromo religion.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'A flight from Robe where schedules allow, or the drive back north to the capital.',
      },
    ],
    places: ['Bale Mountains', 'Sanetti Plateau', 'Harenna Forest', 'Sof Omar Caves'],
  },
  {
    slug: 'borana-wells-salt-and-bushcrows',
    title: 'Borana: Wells, Salt & Bushcrows',
    image: '/images/omo-valley.png',
    days: '5 Days',
    nights: 4,
    style: 'Cultural · Wildlife · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Deep into the far south for the singing wells, the salt crater of El Sod, and a bird that lives nowhere else.',
    summary:
      'A journey to Borana country around Yabelo, some 566 kilometres south of Addis Ababa. We break the drive in the Rift Valley, then spend two full days with the Borana — at a working singing well, on the rim and floor of the El Sod salt crater — and among the acacia where the Ethiopian bushcrow lives.',
    includes: [
      'A private 4x4 and senior driver-guide throughout',
      'A local Borana guide around Yabelo',
      'Community fees for well and village visits',
      'Four nights at the best lodges available en route',
      'Full board in Borana',
    ],
    excludes: [
      'Travel insurance (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Down the Rift Valley',
        text: 'South from Addis Ababa past the Rift Valley lakes, breaking the long drive with a night on the way.',
      },
      {
        day: 'Day 2',
        title: 'On to Yabelo',
        text: 'Further south into Borana cattle country, arriving in Yabelo in the afternoon and meeting our local guide.',
      },
      {
        day: 'Day 3',
        title: 'A singing well & El Sod',
        text: 'A working well where herders pass water up a human chain, singing as they go, then El Sod — the salt lake on the floor of a volcanic crater 1.8 kilometres across.',
      },
      {
        day: 'Day 4',
        title: 'Bushcrows & the road north',
        text: 'An early search in the acacia around Yabelo for the Ethiopian bushcrow, then north again to break the journey.',
      },
      {
        day: 'Day 5',
        title: 'Back to Addis Ababa',
        text: 'The drive back up the Rift Valley to the capital by evening.',
      },
    ],
    places: ['Borana & Yabelo', 'El Sod', 'Yabelo Wildlife Sanctuary'],
  },
  {
    slug: 'jimma-the-coffee-kingdom',
    title: 'Jimma, the Coffee Kingdom',
    image: '/images/coffee-ceremony.png',
    days: '3 Days',
    nights: 2,
    style: 'Cultural · Slow Travel · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'The palace of King Abba Jifar II, and the coffee country that made his kingdom rich.',
    summary:
      'South-west into the green heart of coffee country. Jimma was the capital of the strongest Oromo Gibe kingdom, and its king\'s palace still stands above the town. We pair it with time on local coffee farms and in the forest, and a ceremony in a family home.',
    includes: [
      'A private vehicle and guide from Addis Ababa',
      'Palace and museum entry in Jimma',
      'Visits to local coffee farms with growers',
      'Two nights in Jimma',
      'Lunch daily and a coffee ceremony in a family home',
    ],
    excludes: [
      'Travel insurance (required)',
      'Coffee purchases, drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'South-west to Jimma',
        text: 'The drive of about 353 kilometres from Addis Ababa into the green hills of the south-west, arriving in Jimma for the evening.',
      },
      {
        day: 'Day 2',
        title: 'The palace & the coffee farms',
        text: 'The palace of Abba Jifar II on the hill at Jiren and its museum in the morning, then an afternoon with coffee growers in the surrounding hills, ending with a three-round ceremony in a family home.',
      },
      {
        day: 'Day 3',
        title: 'Market & the road home',
        text: 'Jimma\'s market in the morning, then the drive back to Addis Ababa — or on to the forests of Kafa and Bonga as an extension.',
      },
    ],
    places: ['Jimma', 'Jiren'],
  },
  {
    slug: 'harar-and-the-walled-city',
    title: 'Harar & the Walled City',
    image: '/images/textile.png',
    days: '4 Days',
    nights: 3,
    style: 'Cultural · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'The gates and lanes of Ethiopia\'s only walled city, hyenas at dusk, and the coffee of the eastern highlands.',
    summary:
      'A short flight east to Dire Dawa, and three nights in and around Harar — long enough to walk the old city slowly with a Harari guide, to see the hyena feeding more than once if you wish, and to visit the coffee country in the hills beyond the walls.',
    includes: [
      'Return flights Addis Ababa – Dire Dawa',
      'A private vehicle and a Harari guide throughout',
      'Three nights at a traditional Harari guesthouse or hotel',
      'Entry to the Rimbaud House and old-city sites',
      'The hyena feeding at dusk',
      'Breakfast daily and a traditional Harari dinner',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Other meals, drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Fly east to Harar',
        text: 'A morning flight to Dire Dawa and the drive up into the highlands to Harar. A first walk to the Jugol wall and its gates, and the hyena feeding at dusk.',
      },
      {
        day: 'Day 2',
        title: 'Inside the walls',
        text: 'A full day in the old city with a Harari guide — the lanes and markets, a traditional Harari house, the mosques and shrines seen from the street, and the Rimbaud House with its photographs of Harar a century ago.',
      },
      {
        day: 'Day 3',
        title: 'Coffee country & Dire Dawa',
        text: 'Out into the eastern highlands to meet coffee growers, then down to Dire Dawa, the railway town that grew up on the line to Djibouti.',
      },
      {
        day: 'Day 4',
        title: 'Back to Addis Ababa',
        text: 'A morning in Dire Dawa\'s markets and a flight back to the capital.',
      },
    ],
    places: ['Harar', 'Dire Dawa'],
  },
  {
    slug: 'southern-rift-and-konso',
    title: 'Southern Rift & Konso',
    image: '/images/omo-valley.png',
    days: '6 Days',
    nights: 5,
    style: 'Cultural · Wildlife · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Crocodiles on Lake Chamo, the Dorze weavers of the Gamo Highlands, and the UNESCO terraces of Konso.',
    summary:
      'Fly south to Arba Minch and spend six days in the southern Rift: a boat across Lake Chamo, the plains of Nechisar, the woven bamboo villages of the Dorze, and two days in the terraced, walled world of Konso. It connects naturally to our Omo Valley journey.',
    includes: [
      'Return flights Addis Ababa – Arba Minch',
      'A private 4x4 and senior driver-guide throughout',
      'Local Dorze and Konso guides and all community fees',
      'Boat trip on Lake Chamo and Nechisar park fees',
      'Five nights at lodges above the lakes and in Konso',
      'Full board throughout',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Drinks, gratuities and personal purchases',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Fly to Arba Minch',
        text: 'A morning flight south, the forty springs that give the town its name, and sunset over Lakes Abaya and Chamo from the ridge.',
      },
      {
        day: 'Day 2',
        title: 'Lake Chamo & Nechisar',
        text: 'A boat across Lake Chamo to the Crocodile Market, then the white-grass plains of Nechisar and the Bridge of God between the two lakes.',
      },
      {
        day: 'Day 3',
        title: 'The Dorze & the Gamo Highlands',
        text: 'Up to the cool highlands around Chencha to visit Dorze weavers and their tall woven bamboo houses, with lunch in a Dorze home.',
      },
      {
        day: 'Day 4',
        title: 'South to Konso',
        text: 'Down the Rift to Konso, 87 kilometres from Arba Minch, and an afternoon among the stone terraces.',
      },
      {
        day: 'Day 5',
        title: 'The walled villages',
        text: 'A walled Konso village with a local guide — its gates, meeting houses and generation poles — then the waka grave markers at the Konso Museum.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'The drive back to Arba Minch and a flight to the capital — or onward into the Omo Valley.',
      },
    ],
    places: ['Arba Minch & Nechisar', 'Chencha', 'Konso'],
  },
  {
    slug: 'sidama-and-yirgacheffe-coffee',
    title: 'Sidama & Yirgacheffe Coffee',
    image: '/images/coffee-ceremony.png',
    days: '5 Days',
    nights: 4,
    style: 'Cultural · Slow Travel · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'From cherry to cup in the hills behind two of the world\'s most famous coffees.',
    summary:
      'Five days in the coffee country south of Hawassa: farms and washing stations in Sidama, the UNESCO-listed forest gardens of Gedeo, the ancient stelae of Tuto Fela, and a cupping with growers in Yirgacheffe. Best during the harvest, from October into the new year.',
    includes: [
      'A private vehicle and a coffee-specialist guide',
      'Farm and washing-station visits with growers',
      'A cupping session and a coffee ceremony in a family home',
      'Four nights in Hawassa and the coffee country',
      'Breakfast and dinner daily, lunch on farm days',
    ],
    excludes: [
      'Travel insurance (required)',
      'Coffee purchases and shipping',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'South to Hawassa',
        text: 'The 273-kilometre drive south through the Rift Valley to Hawassa, with an evening on the lakeshore.',
      },
      {
        day: 'Day 2',
        title: 'Sidama farms & washing stations',
        text: 'Into the Sidama hills to walk a smallholder farm and see a washing station at work — pulping, fermenting and drying on raised beds.',
      },
      {
        day: 'Day 3',
        title: 'Gedeo & Tuto Fela',
        text: 'South to Dilla and the Gedeo landscape, where coffee grows beneath enset and shade trees, and the carved stelae of Tuto Fela.',
      },
      {
        day: 'Day 4',
        title: 'Yirgacheffe',
        text: 'A day with growers around Yirgacheffe, a cupping of the season\'s coffees, and a three-round ceremony in a family home.',
      },
      {
        day: 'Day 5',
        title: 'Back to Addis Ababa',
        text: 'The drive north to the capital, with coffee bought directly from the farms we visited.',
      },
    ],
    places: ['Hawassa', 'Sidama & Yirgacheffe', 'Dilla', 'Yirgacheffe'],
  },
  {
    slug: 'the-coffee-road',
    title: 'The Coffee Road',
    image: '/images/coffee-ceremony.png',
    days: '13 Days',
    nights: 12,
    style: 'Cultural · Slow Travel · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Every great coffee region in one journey — wild forest, royal Jimma, Sidama and Yirgacheffe, and Harar in the east.',
    summary:
      'For coffee lovers and professionals: a complete journey through the country where Arabica began. The wild coffee forests of Kafa, the old coffee kingdom of Jimma, the washing stations of Sidama and the gardens of Yirgacheffe, then a flight east to Harar. Ceremonies, cuppings and farm visits all the way.',
    includes: [
      'Domestic flights to Dire Dawa and back',
      'A private vehicle and a coffee-specialist guide throughout',
      'Farm, forest and washing-station visits with growers',
      'Cupping sessions and coffee ceremonies in family homes',
      'Twelve nights at the best available lodges and hotels',
      'Breakfast and dinner daily, lunch on farm days',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Coffee purchases, shipping and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa',
        text: 'Arrival, a cupping in the capital\'s roastery district, and a first ceremony to set the palate.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Jimma, the coffee kingdom',
        text: 'South-west to Jimma and the palace of King Abba Jifar II, whose kingdom grew rich on coffee, then farms in the surrounding hills.',
      },
      {
        day: 'Days 4 – 5',
        title: 'Kafa & the Bonga forest',
        text: 'Into the Kafa Biosphere Reserve, the home of wild Arabica, to walk the forest where coffee still grows without cultivation.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'The long drive back to the capital, with a rest evening.',
      },
      {
        day: 'Days 7 – 8',
        title: 'Sidama',
        text: 'South to Hawassa, then smallholder farms and washing stations in the Sidama hills.',
      },
      {
        day: 'Days 9 – 10',
        title: 'Gedeo & Yirgacheffe',
        text: 'The UNESCO forest gardens of Gedeo, the stelae of Tuto Fela, and a cupping with growers in Yirgacheffe.',
      },
      {
        day: 'Day 11',
        title: 'North & east',
        text: 'The drive back to Addis Ababa and an evening flight to Dire Dawa.',
      },
      {
        day: 'Day 12',
        title: 'Harar',
        text: 'The walled city, its coffee merchants, and the eastern highland farms known for fruity, natural-process coffee — with the hyena feeding at dusk.',
      },
      {
        day: 'Day 13',
        title: 'Departure',
        text: 'A flight back to Addis Ababa for your onward journey.',
      },
    ],
    places: ['Jimma', 'Kafa', 'Sidama & Yirgacheffe', 'Harar'],
  },
  {
    slug: 'ras-dashen-summit-climb',
    title: 'Ras Dashen Summit Climb',
    image: '/images/hero-simien.png',
    days: '7 Days',
    nights: 6,
    style: 'Climbing · Trekking · Small Group',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 10 guests',
    teaser:
      'The fastest sensible route to the roof of Ethiopia: over the Bwahit pass, down to Ambiko, and up at dawn to 4,550 metres.',
    summary:
      'A focused ascent of Ras Dashen for walkers who want the summit without the full ten-day traverse. We drive into the park as far as Chenek, acclimatise there, then cross the Bwahit pass to the base camp at Ambiko with a rest day before the summit. Run as small-group departures, or privately on the dates you choose.',
    includes: [
      'Nights in Gondar at each end of the climb',
      'Road transfers Gondar – Chenek – Gondar',
      'All park fees, an armed park scout and summit permits',
      'Mules, muleteers, a camp cook and full board on the mountain',
      'Four-season tents, mats and a heated mess tent',
      'A senior mountain guide with altitude first-aid training, and daily pulse oximeter checks',
    ],
    excludes: [
      'Flights to and from Gondar',
      'Sleeping bag (hire available in Gondar)',
      'Travel insurance with evacuation cover (required)',
      'Gratuities for scouts, muleteers and cook',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Gondar',
        text: 'Kit check, route briefing and an early night in Gondar.',
      },
      {
        day: 'Day 2',
        title: 'Into the park to Chenek',
        text: 'North to Debark for permits and the scout, then the drive along the escarpment to Chenek at about 3,600 metres. An afternoon acclimatisation walk to watch for walia ibex on the cliffs.',
      },
      {
        day: 'Day 3',
        title: 'Over the Bwahit pass to Ambiko',
        text: 'A tough climb to the Bwahit pass at 4,200 metres and the first view of Ras Dashen, then the long descent into the Mesheha valley and the climb out to camp at Ambiko.',
      },
      {
        day: 'Day 4',
        title: 'Rest & acclimatise',
        text: 'A deliberate rest day at Ambiko, with a short walk above camp and an early night — the single biggest factor in reaching the summit.',
      },
      {
        day: 'Day 5',
        title: 'Summit day · 4,550 m',
        text: 'A pre-dawn start by headlamp, the final scramble up the summit tower, and the view across the whole Simien massif. Back at Ambiko by early afternoon.',
      },
      {
        day: 'Day 6',
        title: 'Back over the pass',
        text: 'The return across the Mesheha valley and the Bwahit pass to Chenek.',
      },
      {
        day: 'Day 7',
        title: 'Chenek to Gondar',
        text: 'A last morning on the escarpment, then the drive back to Gondar for a hot shower and a celebration dinner.',
      },
    ],
    places: ['Gondar', 'Chenek', 'Ambiko', 'Ras Dashen'],
  },
  {
    slug: 'simien-summits-in-comfort',
    title: 'Simien Summits in Comfort',
    image: '/images/luxury-lodge.png',
    days: '5 Days',
    nights: 4,
    style: 'Climbing · Luxury · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'High Simien summits by day, a lodge on the escarpment by night — no tents at all.',
    summary:
      'For climbers who want the altitude without the camping. We base ourselves at a lodge on the Simien rim and use a private vehicle to reach each trailhead, climbing progressively higher — Imet Gogo, the Inatye ridge, and finally the summit of Bwahit at about 4,430 metres — and returning each evening to a fire, a hot shower and a proper bed.',
    includes: [
      'Three nights at an escarpment lodge, one in Gondar',
      'A private 4x4 on standby for every trailhead',
      'A senior mountain guide and an armed park scout',
      'All park fees',
      'Picnic lunches on the mountain, and all meals at the lodge',
      'Daily pulse oximeter checks and a flexible, weather-led plan',
    ],
    excludes: [
      'Flights to and from Gondar',
      'Travel insurance with evacuation cover (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Gondar',
        text: 'Arrival and an easy afternoon among the castles, with a briefing on the climbs ahead.',
      },
      {
        day: 'Day 2',
        title: 'Up to the rim · Imet Gogo',
        text: 'The drive to the escarpment lodge, then a first walk out to Imet Gogo at 3,926 metres for the view across three ridgelines.',
      },
      {
        day: 'Day 3',
        title: 'The Inatye ridge · 4,070 m',
        text: 'A longer day along the ridge to Inatye, among giant lobelia, with the vehicle meeting you at the far end.',
      },
      {
        day: 'Day 4',
        title: 'Bwahit summit · ≈ 4,430 m',
        text: 'From Chenek, a full day up past the 4,200-metre pass to the summit of Bwahit, with the first view of Ras Dashen and a good chance of walia ibex.',
      },
      {
        day: 'Day 5',
        title: 'Back to Gondar',
        text: 'A slow breakfast on the rim, then the drive down to Gondar for your onward flight.',
      },
    ],
    places: ['Gondar', 'Simien Mountains', 'Imet Gogo', 'Bwahit'],
  },
  {
    slug: 'bale-summits-batu-and-tullu-dimtu',
    title: 'Bale Summits: Batu & Tullu Dimtu',
    image: '/images/bale-gelada.png',
    days: '7 Days',
    nights: 6,
    style: 'Climbing · Trekking · Private',
    season: 'Nov – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Two 4,300-metre summits in Ethiopian wolf country, trekked across the Bale moorland from Dinsho.',
    summary:
      'A classic Bale trek with two summits: up the Web and Wasema valleys to Mount Batu, across the Sanetti Plateau past the glacial lake of Garba Guracha, and to the top of Tullu Dimtu, the plateau\'s highest point. Nights in tents with a full camp crew, and some of the best Ethiopian wolf country anywhere.',
    includes: [
      'Road transfers from Addis Ababa, with a return flight from Robe where available',
      'All park fees, scouts and a Bale mountain guide',
      'Horses or mules, handlers and a camp cook',
      'Tents, mats and full board on the trek',
      'A lodge night at Dinsho before the trek',
      'Daily pulse oximeter checks above 3,500 metres',
    ],
    excludes: [
      'Sleeping bag (hire available)',
      'Travel insurance with evacuation cover (required)',
      'Gratuities for guides, handlers and cook',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa to Dinsho',
        text: 'About 400 kilometres south-east to the park headquarters at Dinsho, with mountain nyala on the moorland edge at dusk.',
      },
      {
        day: 'Day 2',
        title: 'The Web valley',
        text: 'Onto the trail through the Web valley to the Finch Abera falls, where the Web and Wolla rivers meet, and on to camp at Mararo.',
      },
      {
        day: 'Day 3',
        title: 'The Wasema valley',
        text: 'Up the Wasema river past a mineral spring to a high camp beneath Mount Batu.',
      },
      {
        day: 'Day 4',
        title: 'Batu summit · 4,307 m',
        text: 'The climb to the summit of Batu, then over onto the Sanetti Plateau and down to camp by the glacial lake of Garba Guracha.',
      },
      {
        day: 'Day 5',
        title: 'Tullu Dimtu summit · 4,377 m',
        text: 'Across the open plateau at dawn, when Ethiopian wolves are most active, to the top of Tullu Dimtu — then down off the plateau to a lodge.',
      },
      {
        day: 'Day 6',
        title: 'The Harenna forest',
        text: 'A rest day on foot and by vehicle in the Harenna cloud forest on the southern slopes.',
      },
      {
        day: 'Day 7',
        title: 'Back to Addis Ababa',
        text: 'A flight from Robe where schedules allow, or the drive north to the capital.',
      },
    ],
    places: ['Bale Mountains', 'Dinsho', 'Mount Batu', 'Tullu Dimtu'],
  },
  {
    slug: 'abune-yosef-ascent',
    title: 'Abune Yosef Ascent',
    image: '/images/hero-lalibela.png',
    days: '4 Days',
    nights: 3,
    style: 'Climbing · Trekking · Small Group',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'A 4,260-metre summit above Lalibela, with community lodges, geladas and wolf country on the way.',
    summary:
      'Most visitors see Lalibela\'s churches and leave. This short climb heads into the Abune Yosef massif about forty kilometres away — among the highest ground in northern Ethiopia — staying in community lodges and reaching the summit on the third day. A natural addition to any Lalibela visit.',
    includes: [
      'A senior guide and local community guides',
      'Two nights in a community lodge, one in Lalibela',
      'Pack animals for luggage',
      'Full board on the mountain',
      'Community and conservation fees',
      'Transfers from and to Lalibela',
    ],
    excludes: [
      'Flights to and from Lalibela',
      'Sleeping bag (hire available)',
      'Travel insurance with evacuation cover (required)',
      'Gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Lalibela',
        text: 'Arrival, the churches in the late afternoon light, and a briefing for the climb.',
      },
      {
        day: 'Day 2',
        title: 'Into the massif',
        text: 'The drive toward Abune Yosef and a walk up through farmland to the community lodge above 3,200 metres.',
      },
      {
        day: 'Day 3',
        title: 'Summit · 4,260 m',
        text: 'The climb to the top of Abune Yosef, among gelada troops and giant lobelia, with a chance of Ethiopian wolves on the high ground. Back to the lodge for the night.',
      },
      {
        day: 'Day 4',
        title: 'Down to Lalibela',
        text: 'The walk back down and the drive to Lalibela for an afternoon flight.',
      },
    ],
    places: ['Lalibela', 'Abune Yosef'],
  },
  {
    slug: 'mount-guna-ascent',
    title: 'Mount Guna Ascent',
    image: '/images/hero-simien.png',
    days: '3 Days',
    nights: 2,
    style: 'Climbing · Hiking · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'A 4,120-metre summit between Lake Tana and Lalibela that few visitors ever climb.',
    summary:
      'Guna rises above the town of Debre Tabor, the highest point of South Gondar and one of the least-visited high summits in the country. From a ridge at around 3,700 metres, a full day\'s walk leads past two false summits to its rocky top. It fits neatly between Bahir Dar and Lalibela on an overland route.',
    includes: [
      'A private vehicle and senior guide',
      'A local guide for the ascent',
      'Two nights in Debre Tabor',
      'Packed lunch on summit day, and breakfast and dinner daily',
    ],
    excludes: [
      'Travel insurance with evacuation cover (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Bahir Dar to Debre Tabor',
        text: 'East from Bahir Dar across the plains of Fogera and up to Debre Tabor, an old royal town, with an evening walk to adjust to the altitude.',
      },
      {
        day: 'Day 2',
        title: 'Guna summit · 4,120 m',
        text: 'An early drive to the trailhead on a broad ridge near 3,700 metres, then the walk across the Afro-alpine slopes, past two false summits, to the distinct rocky top. Back to Debre Tabor for the night.',
      },
      {
        day: 'Day 3',
        title: 'Onward',
        text: 'Back to Bahir Dar, or continue east over the highlands toward Lalibela.',
      },
    ],
    places: ['Bahir Dar', 'Debre Tabor', 'Mount Guna'],
  },
  {
    slug: 'ethiopias-three-high-peaks',
    title: 'Ethiopia\'s Three High Peaks',
    image: '/images/hero-simien.png',
    days: '18 Days',
    nights: 17,
    style: 'Climbing · Expedition · Private',
    season: 'Nov – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Ras Dashen in the Simien, Abune Yosef above Lalibela, and Tullu Dimtu in Bale — with the rock churches in between.',
    summary:
      'Three great massifs, three summits, and the country between them. We climb Ras Dashen first, rest among the churches of Lalibela, climb Abune Yosef, then fly south to the Bale Mountains for Tullu Dimtu on the Sanetti Plateau. Each climb builds on the last, so the altitude arrives gradually. Available with lodge nights between climbs for a more comfortable version.',
    includes: [
      'All domestic flights',
      'A senior mountain guide for the whole expedition',
      'All park fees, scouts, permits and community fees',
      'Full camp crews, mules and cooks on every climb',
      'Hotels and lodges between climbs',
      'Daily pulse oximeter checks above 3,500 metres',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Sleeping bag (hire available)',
      'Travel insurance with evacuation cover (required)',
      'Gratuities for crews',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa',
        text: 'Arrival, kit check, and a short acclimatisation walk on Entoto.',
      },
      {
        day: 'Day 2',
        title: 'Fly to Gondar',
        text: 'A morning flight north and an afternoon among the castles.',
      },
      {
        day: 'Days 3 – 8',
        title: 'Ras Dashen · 4,550 m',
        text: 'Into the Simien to Chenek, over the Bwahit pass to Ambiko, a rest day, then the dawn summit of Ethiopia\'s highest peak and the return to Chenek.',
      },
      {
        day: 'Day 9',
        title: 'Gondar to Lalibela',
        text: 'Down to Gondar and a flight to Lalibela.',
      },
      {
        day: 'Day 10',
        title: 'Lalibela',
        text: 'A rest day among the rock-hewn churches.',
      },
      {
        day: 'Days 11 – 13',
        title: 'Abune Yosef · 4,260 m',
        text: 'Into the massif, community lodge nights, and the summit among geladas and giant lobelia.',
      },
      {
        day: 'Day 14',
        title: 'Fly south',
        text: 'A flight from Lalibela back to Addis Ababa.',
      },
      {
        day: 'Day 15',
        title: 'Addis Ababa to Dinsho',
        text: 'The drive south-east into the Bale Mountains.',
      },
      {
        day: 'Day 16',
        title: 'Tullu Dimtu · 4,377 m',
        text: 'Onto the Sanetti Plateau at dawn for Ethiopian wolves, then the walk to the top of Tullu Dimtu.',
      },
      {
        day: 'Day 17',
        title: 'The Harenna forest',
        text: 'A gentle last day in the cloud forest on Bale\'s southern slopes.',
      },
      {
        day: 'Day 18',
        title: 'Departure',
        text: 'A flight from Robe where schedules allow, or the drive to Addis Ababa for your departure.',
      },
    ],
    places: ['Ras Dashen', 'Lalibela', 'Abune Yosef', 'Bale Mountains', 'Tullu Dimtu'],
  },
  {
    slug: 'run-with-ethiopias-champions',
    title: 'Run with Ethiopia\'s Champions',
    image: '/images/addis-skyline.png',
    days: '6 Days',
    nights: 5,
    style: 'Running · Active · Small Group',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 10 runners',
    teaser:
      'Altitude trails on Entoto, and the highland town of Bekoji that has produced a string of Olympic champions.',
    summary:
      'A running holiday built around the two places that explain Ethiopia\'s dominance of distance running: the forest trails of Entoto above Addis Ababa, around 3,000 metres up, and Bekoji, the small farming town at about 2,800 metres that is the birthplace of Derartu Tulu, Kenenisa Bekele and the Dibaba sisters. In late November it can be timed to the Great Ethiopian Run.',
    includes: [
      'A local running guide throughout, with sessions paced to each runner',
      'A private vehicle between Addis Ababa and Bekoji',
      'Five nights of accommodation',
      'Breakfast daily and post-run meals',
      'An optional race entry for the Great Ethiopian Run, when dates align',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Running kit and personal equipment',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Arrival and an easy shake-out walk — at 2,300 metres the first days are for adjusting, not training hard.',
      },
      {
        day: 'Day 2',
        title: 'Entoto',
        text: 'A dawn run on the eucalyptus trails of Entoto among the city\'s runners, at a pace that suits you, then breakfast and an afternoon at rest.',
      },
      {
        day: 'Day 3',
        title: 'Longer on the high trails',
        text: 'A longer session on Entoto\'s dirt roads with your running guide, and a talk on how Ethiopian runners train.',
      },
      {
        day: 'Day 4',
        title: 'South to Bekoji',
        text: 'About 212 kilometres south through Asella to Bekoji, at around 2,800 metres, with an easy evening run through the farmland.',
      },
      {
        day: 'Day 5',
        title: 'The town of runners',
        text: 'A morning run on the routes around Bekoji, time in the town that has produced so many champions, and the afternoon free.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'A last easy run, the drive north, and an evening departure — or stay on for race day in late November.',
      },
    ],
    places: ['Addis Ababa', 'Entoto', 'Bekoji'],
  },
  {
    slug: 'rift-valley-by-bike',
    title: 'Rift Valley by Bike',
    image: '/images/lake-tana.png',
    days: '5 Days',
    nights: 4,
    style: 'Cycling · Active · Small Group',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 10 riders',
    teaser:
      'A long descent from the highlands into the Great Rift Valley, then lake to lake on quiet roads.',
    summary:
      'Four days of riding with a support vehicle behind you: down from the Gurage highlands into the Rift Valley — a descent of well over a thousand metres — then between Lakes Ziway, Abijata-Shalla and Langano, ending on the lakeshore at Hawassa. E-bikes are available for anyone who wants the views with less effort.',
    includes: [
      'Quality bikes or e-bikes, helmets and repair kits',
      'A cycling guide and a support vehicle throughout',
      'Four nights at lakeside lodges',
      'A boat trip on Lake Ziway',
      'Full board on riding days',
    ],
    excludes: [
      'Travel insurance (required)',
      'Drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Into the Gurage highlands',
        text: 'The drive south-west from Addis Ababa to the Gurage highlands, a bike fitting, and a short ride to loosen the legs.',
      },
      {
        day: 'Day 2',
        title: 'The big descent',
        text: 'From one of the highest ridges in Gurage, a fast descent from about 3,350 to 2,050 metres into the Rift Valley, then on toward Lake Ziway and a boat on the lake.',
      },
      {
        day: 'Day 3',
        title: 'Abijata-Shalla',
        text: 'Into Abijata-Shalla National Park, watching for flamingos — present from October to February — warthogs and ostriches, and the hot springs by Lake Shalla.',
      },
      {
        day: 'Day 4',
        title: 'Lake Langano',
        text: 'An easier day around Lake Langano, one of the few Rift Valley lakes suitable for swimming, with the afternoon on the shore.',
      },
      {
        day: 'Day 5',
        title: 'Hawassa & home',
        text: 'A transfer south to Hawassa for a final ride along its lakeshore, then the drive back to Addis Ababa.',
      },
    ],
    places: ['Gurage Highlands', 'Lake Ziway', 'Abijata-Shalla', 'Lake Langano', 'Hawassa'],
  },
  {
    slug: 'northern-ethiopia-for-families',
    title: 'Northern Ethiopia for Families',
    image: '/images/gondar.png',
    days: '9 Days',
    nights: 8,
    style: 'Family · Cultural · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: 'Families of 3 – 8',
    teaser:
      'Castles, boats, monkeys and churches with tunnels — the north at a pace that works for children.',
    summary:
      'The great northern sites, reshaped for families: domestic flights instead of long drives, lodges rather than tents, and days that mix one big sight with plenty of time to play. Children meet gelada monkeys a few metres away, explore a real castle, ride a boat to an island monastery and walk the tunnels between Lalibela\'s churches.',
    includes: [
      'All domestic flights, so no day has a long drive',
      'A private vehicle and a family-experienced guide',
      'Family rooms or connecting rooms at every lodge',
      'A private boat on Lake Tana',
      'An injera and coffee afternoon with a local family',
      'Breakfast daily and most dinners',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Drinks, snacks and personal spending',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Private transfer and an easy afternoon — then meet Lucy, the 3.2-million-year-old ancestor, at the National Museum.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Bahir Dar & Lake Tana',
        text: 'A short flight north, a private boat to an island monastery, and a walk to the Blue Nile Falls across an old stone bridge.',
      },
      {
        day: 'Day 4',
        title: 'Gondar\'s castles',
        text: 'Up to Gondar to explore the royal enclosure — six castles to run around, and Fasilides\' Bath.',
      },
      {
        day: 'Days 5 – 6',
        title: 'The Simien rim',
        text: 'Two nights at an escarpment lodge, with short walks to watch gelada monkeys graze a few metres away and views over the edge of the world.',
      },
      {
        day: 'Days 7 – 8',
        title: 'Lalibela',
        text: 'A flight to Lalibela, the rock-hewn churches and the trench passages that connect them, and an injera and coffee afternoon with a local family.',
      },
      {
        day: 'Day 9',
        title: 'Departure',
        text: 'A flight back to Addis Ababa for your journey home.',
      },
    ],
    places: ['Addis Ababa', 'Lake Tana', 'Gondar', 'Simien Mountains', 'Lalibela'],
  },
  {
    slug: 'lakes-craters-and-wildlife-for-families',
    title: 'Lakes, Craters & Wildlife for Families',
    image: '/images/danakil.png',
    days: '6 Days',
    nights: 5,
    style: 'Family · Wildlife · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: 'Families of 3 – 8',
    teaser:
      'Crater lakes, oryx on the plains, a waterfall gorge and warm pools under the palms — all close to Addis.',
    summary:
      'A short, easy family journey that never strays far from the capital: volcanic crater lakes at Bishoftu, game drives and hot springs in Awash National Park, a cooking class, and a forest walk. Short drives, comfortable lodges, and something new every day.',
    includes: [
      'A private vehicle and a family-experienced guide',
      'Family rooms at lodges in Bishoftu, Awash and Addis Ababa',
      'Park fees and game drives in Awash',
      'An injera cooking class with a local family',
      'Breakfast daily and most meals on the road',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Drinks, snacks and personal spending',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa',
        text: 'Arrival, the eucalyptus forest and view from Entoto, and Lucy at the National Museum.',
      },
      {
        day: 'Day 2',
        title: 'Bishoftu\'s crater lakes',
        text: 'An hour south-east to the crater lakes, with birds on the shore and a slow lakeside lunch.',
      },
      {
        day: 'Days 3 – 4',
        title: 'Awash National Park',
        text: 'Game drives for oryx and gazelle, Awash Falls tumbling into its gorge, and an afternoon in the warm, palm-shaded pools of the Filwoha hot springs.',
      },
      {
        day: 'Day 5',
        title: 'Back to Addis & a cooking class',
        text: 'The drive back to the capital and an afternoon learning to pour injera with a local family.',
      },
      {
        day: 'Day 6',
        title: 'Menagesha forest & departure',
        text: 'A short walk under the giant junipers of Menagesha, protected for five centuries, before your evening flight.',
      },
    ],
    places: ['Addis Ababa', 'Bishoftu', 'Awash National Park', 'Menagesha Suba Forest'],
  },
  {
    slug: 'the-north-in-style',
    title: 'The North in Style',
    image: '/images/luxury-lodge.png',
    days: '10 Days',
    nights: 9,
    style: 'Luxury · Cultural · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Lake Tana, Gondar, the Simien and Lalibela with private guides, the best lodges on each stop and nothing rushed.',
    summary:
      'Our most comfortable northern journey. Domestic flights between every region, the finest lodge we know at each stop, private guides and vehicles throughout, and days planned around the quiet hours — the churches at dawn, the lake before the day boats, the escarpment at sunset — with long, slow lunches in between.',
    includes: [
      'All domestic flights and private airport transfers',
      'The best available lodge or boutique hotel at every stop',
      'Private specialist guides and vehicles throughout',
      'A private boat on Lake Tana and early access at the churches',
      'All meals, with selected dinners arranged privately',
      'A dedicated trip designer on call around the clock',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Premium drinks and gratuities',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Addis Ababa',
        text: 'Met on arrival, a boutique hotel, and a private evening with dinner and live music.',
      },
      {
        day: 'Days 2 – 3',
        title: 'Lake Tana',
        text: 'A private boat to the island monasteries before the day crowds, the Blue Nile Falls, and an unhurried lakeside lodge.',
      },
      {
        day: 'Day 4',
        title: 'Gondar',
        text: 'The royal enclosure and Debre Berhan Selassie with a historian, and a private dinner in the old city.',
      },
      {
        day: 'Days 5 – 7',
        title: 'The Simien rim',
        text: 'Three nights at an escarpment lodge: gelada troops, Imet Gogo at sunrise, and walks as long or as short as you choose, with a vehicle always close by.',
      },
      {
        day: 'Days 8 – 9',
        title: 'Lalibela',
        text: 'The churches at dawn with a senior guide, Asheton Maryam above the town, and the cave church of Yemrehanna Kristos.',
      },
      {
        day: 'Day 10',
        title: 'Departure',
        text: 'A flight to Addis Ababa, a day room and a farewell lunch before your evening departure.',
      },
    ],
    places: ['Addis Ababa', 'Lake Tana', 'Gondar', 'Simien Mountains', 'Lalibela'],
  },
  {
    slug: 'christmas-to-epiphany',
    title: 'Christmas to Epiphany',
    image: '/images/festival-timkat.png',
    days: '16 Days',
    nights: 15,
    style: 'Festival · Cultural · Private',
    season: 'January only',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Genna at the rock churches of Lalibela, Timkat at the royal bath in Gondar, and the quiet fortnight in between.',
    summary:
      'The north\'s two great festivals in a single journey. Christmas night among the pilgrims at Lalibela, slow days on Lake Tana and the Simien rim, then Epiphany in Gondar. Both dates follow the Ethiopian calendar and move by a day in some years, so we confirm each January\'s dates when you book — and hold rooms a full year ahead.',
    includes: [
      'All domestic flights and a private vehicle with senior driver-guide',
      'An Orthodox Christian scholar as festival guide at Lalibela and Gondar',
      'Reserved vantage points for the Genna vigil and at Fasilides\' Bath',
      'Accommodation held twelve months in advance at every stop',
      'A private boat on Lake Tana and an escarpment lodge in the Simien',
      'Breakfast daily, festival-day catering, and most dinners',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Gratuities and church donations',
    ],
    itinerary: [
      {
        day: 'Day 1 · Jan 5',
        title: 'Arrive Addis Ababa',
        text: 'Private transfer, rest, and a briefing on the Ethiopian liturgical calendar over dinner.',
      },
      {
        day: 'Days 2 – 3 · Jan 6 – 7',
        title: 'Genna in Lalibela',
        text: 'A morning flight north, then the Christmas Eve vigil among thousands of pilgrims in white. At dawn, priests chant from the rock above the churches — the reason we come.',
      },
      {
        day: 'Days 4 – 5 · Jan 8 – 9',
        title: 'Asheton Maryam & Yemrehanna Kristos',
        text: 'Once the pilgrims disperse, the climb to the cliff monastery above town, and the cave church of Yemrehanna Kristos in the hills.',
      },
      {
        day: 'Days 6 – 8 · Jan 10 – 12',
        title: 'Bahir Dar & Lake Tana',
        text: 'A flight west, the island monasteries by private boat, the Zege coffee forest on foot, and the Blue Nile Falls.',
      },
      {
        day: 'Days 9 – 10 · Jan 13 – 14',
        title: 'Gorgora',
        text: 'North along the lake to Debre Sina Maryam and the Jesuit ruins at Maryam Gimb, with two unhurried nights on the water.',
      },
      {
        day: 'Days 11 – 13 · Jan 15 – 17',
        title: 'The Simien rim',
        text: 'Up to an escarpment lodge for gelada troops above Sankaber, Jinbar Falls, and sunrise at Imet Gogo — the quietest days of the trip.',
      },
      {
        day: 'Days 14 – 15 · Jan 18 – 19',
        title: 'Timkat in Gondar',
        text: 'The Ketera eve procession as the tabots are carried to Fasilides\' Bath, an all-night vigil, and the blessing of the water at dawn.',
      },
      {
        day: 'Day 16 · Jan 20',
        title: 'Departure',
        text: 'A flight back to Addis Ababa and an evening departure.',
      },
    ],
    places: ['Lalibela', 'Lake Tana', 'Gorgora', 'Simien Mountains', 'Gondar'],
  },
  {
    slug: 'lalibela-highlands-community-trek',
    title: 'Lalibela Highlands Community Trek',
    image: '/images/hero-lalibela.png',
    days: '5 Days',
    nights: 4,
    style: 'Trekking · Cultural · Small Group',
    season: 'Oct – Mar',
    from: '$1,480 per person',
    group: '2 – 8 guests',
    teaser:
      'Village-owned tukul camps on the rim of the Meket escarpment, then wolf country at Abune Yosef.',
    summary:
      'Gentle walking along a highland escarpment at 2,800 to 3,100 metres, sleeping in thatched tukuls that the villages themselves built and run through the TESFA community trekking programme. Most of the walking is flat or gently graded, horses can be hired for any stretch, and every night\'s fee goes to the community hosting you.',
    includes: [
      'Community camp fees paid directly to the host villages',
      'Local village guides, plus a senior guide from Lalibela throughout',
      'Four nights in community tukul camps and lodges, full board',
      'Pack animals for luggage, and horses on request',
      'All transfers between Lalibela, the trailheads and the airport',
      'A morning at the Lalibela churches before the trek',
    ],
    excludes: [
      'Flights to and from Lalibela',
      'Sleeping bag (hire available in Lalibela)',
      'Travel insurance (required)',
      'Gratuities for village guides and cooks',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Lalibela',
        text: 'Arrival, the northern church cluster in the afternoon, and a briefing on the trek over dinner.',
      },
      {
        day: 'Day 2',
        title: 'Onto the Meket escarpment',
        text: 'A short drive to the trailhead and a walk out to Mequat Mariam — the first TESFA camp to host guests, in 2003 — set on a promontory with the drop on three sides.',
      },
      {
        day: 'Day 3',
        title: 'Along the rim',
        text: 'A full day on the plateau edge, past farmsteads and threshing floors, to the next community camp. Tea in the dining tukul, and a sunset with no other lights in view.',
      },
      {
        day: 'Day 4',
        title: 'Abune Yosef',
        text: 'Back via Lalibela and north into the Abune Yosef massif, some forty kilometres from town, climbing to a community lodge above 3,200 metres.',
      },
      {
        day: 'Day 5',
        title: 'Wolves at dawn & departure',
        text: 'An early walk onto the high plateau for gelada troops and a chance of Ethiopian wolves, then down to Lalibela for an afternoon flight.',
      },
    ],
    places: ['Lalibela', 'Meket Escarpment', 'Mequat Mariam', 'Abune Yosef'],
  },
  {
    slug: 'the-road-north',
    title: 'The Road North',
    image: '/images/bale-gelada.png',
    days: '8 Days',
    nights: 7,
    style: 'Wildlife · Cultural · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Addis to Lalibela by road — Ethiopian wolves on the Guassa Plateau and a thirteenth-century lake monastery on the way.',
    summary:
      'Most guests fly straight to Lalibela and miss everything in between. This route drives it: up onto the community-protected Guassa Plateau for wolves and geladas, down to Lake Hayk and the monastery of Istifanos, then over the highlands to the rock churches. Please note Istifanos admits men only; women are welcome at the nearby nunnery.',
    includes: [
      'Private 4x4 and senior driver-guide from Addis Ababa to Lalibela',
      'Guassa community conservation fees and a local community scout',
      'Two nights at the Guassa community lodge, with our own cook',
      'Lakeside accommodation at Hayk and a lodge in Lalibela',
      'The return flight from Lalibela to Addis Ababa',
      'Full board on the plateau, breakfast and dinner elsewhere',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Gratuities and church donations',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Private transfer and a route briefing over dinner — including warm layers, since Guassa nights fall well below freezing.',
      },
      {
        day: 'Day 2',
        title: 'Up to the Guassa Plateau',
        text: 'North-east through Debre Birhan and onto the Menz highlands, arriving at the community lodge near Mehal Meda for an evening walk among giant lobelia.',
      },
      {
        day: 'Day 3',
        title: 'Wolves & geladas',
        text: 'Out at dawn with a community scout, when the Ethiopian wolves hunt across the open grassland, then gelada troops on the plateau edge and the town of Mehal Meda in the afternoon.',
      },
      {
        day: 'Day 4',
        title: 'Down to Lake Hayk',
        text: 'Off the plateau and north along the highland road past Kombolcha and Dessie, to a lakeside night at 2,030 metres.',
      },
      {
        day: 'Day 5',
        title: 'Istifanos to Lalibela',
        text: 'The monastery and its museum in the morning — among its treasures a gospel book made here in 1280–81 — then over the mountains to Lalibela.',
      },
      {
        day: 'Days 6 – 7',
        title: 'Lalibela',
        text: 'Both church clusters at their best hours, the climb to Asheton Maryam, and the cave church of Yemrehanna Kristos.',
      },
      {
        day: 'Day 8',
        title: 'Addis & Departure',
        text: 'A morning flight back to Addis Ababa and a day room before your evening departure.',
      },
    ],
    places: ['Addis Ababa', 'Guassa Plateau', 'Lake Hayk', 'Lalibela'],
  },
  {
    slug: 'around-lake-tana',
    title: 'Around Lake Tana',
    image: '/images/lake-tana.png',
    days: '6 Days',
    nights: 5,
    style: 'Slow Travel · Cultural · Family · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Monasteries, coffee forest, a village of equals and a forgotten royal lakeshore — the long way from Bahir Dar to Gondar.',
    summary:
      'The classic circuit crosses from Bahir Dar to Gondar in a few hours. This one takes six days over it, circling the lake through the places most itineraries drive past: the Zege coffee forest, the Portuguese bridge below the falls, the weaving cooperative of Awra Amba and the Jesuit ruins at Gorgora.',
    includes: [
      'Private vehicle and senior driver-guide throughout',
      'A private boat for the Zege Peninsula and on the north shore',
      'A night in the Awra Amba community guesthouse',
      'Lakeside lodges at Bahir Dar and Gorgora, a hotel in Gondar',
      'Church, monastery and community entry fees',
      'Breakfast and dinner daily',
    ],
    excludes: [
      'Flights to Bahir Dar and from Gondar',
      'Travel insurance (required)',
      'Gratuities and personal purchases',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Bahir Dar',
        text: 'Met at the airport, the lakefront at sunset, and dinner by the water.',
      },
      {
        day: 'Day 2',
        title: 'The Zege Peninsula',
        text: 'A private boat to Ura Kidane Mehret, then the shaded trails through Zege\'s coffee forest linking its monasteries, and back across the lake in the afternoon.',
      },
      {
        day: 'Day 3',
        title: 'Blue Nile Falls & Awra Amba',
        text: 'The falls in the morning and the seventeenth-century Portuguese bridge below them, then east to Awra Amba for the afternoon and a night in the community guesthouse.',
      },
      {
        day: 'Day 4',
        title: 'North to Gorgora',
        text: 'Morning at the Awra Amba looms, then the road north along the lake to Gorgora and the painted church of Debre Sina Maryam.',
      },
      {
        day: 'Day 5',
        title: 'Maryam Gimb & Gondar',
        text: 'The Jesuit ruins at Maryam Gimb and a last boat on the north shore, then the short drive up to Gondar.',
      },
      {
        day: 'Day 6',
        title: 'Gondar & departure',
        text: 'The royal enclosure at opening hour and Debre Berhan Selassie, before an afternoon flight.',
      },
    ],
    places: ['Bahir Dar', 'Lake Tana', 'Zege Peninsula', 'Awra Amba', 'Gorgora', 'Gondar'],
  },
  {
    slug: 'choke-mountains-trek',
    title: 'Choke Mountains Trek',
    image: '/images/hero-simien.png',
    days: '5 Days',
    nights: 4,
    style: 'Trekking · Small Group',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Village to village onto the moorland that feeds the Blue Nile — the northern trek almost nobody has done.',
    summary:
      'A community-run trek on the Choke massif in Gojjam, recognised by UN Tourism as one of the Best Tourism Villages of 2022. Three days on foot from the farming villages up onto the high moor and back, camping as guests of the ecovillage — simple, uncrowded, and best for walkers who have already done the Simien.',
    includes: [
      'Community ecovillage fees and local guides',
      'A senior trekking guide from our own team throughout',
      'Three nights camping in the high villages, one in Bahir Dar',
      'Tents, mats and full board on the trek',
      'Road transfer from Bahir Dar and on to Addis Ababa',
      'A cook travelling with the group',
    ],
    excludes: [
      'Flight to Bahir Dar',
      'Sleeping bag (hire available in Bahir Dar)',
      'Travel insurance (required)',
      'Gratuities for guides and cook',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Bahir Dar',
        text: 'Met at the airport, a kit check and route briefing, and a night by the lake.',
      },
      {
        day: 'Day 2',
        title: 'To the ecovillage',
        text: 'South into Gojjam and up to the foothills of Choke, where the villagers who host the trek hold a welcome for arriving walkers.',
      },
      {
        day: 'Day 3',
        title: 'Onto the moor',
        text: 'Up through terraced farmland onto the Afro-alpine moor of giant lobelia and tussock grass, where dozens of Blue Nile tributaries begin, to camp in a high village.',
      },
      {
        day: 'Day 4',
        title: 'The high massif',
        text: 'A full day on the upper moor toward the summit ridge above 4,000 metres, watching for the endemic Abyssinian longclaw, then back down to camp.',
      },
      {
        day: 'Day 5',
        title: 'Down to Addis Ababa',
        text: 'A morning descent to the road, then south through Debre Markos and across the Blue Nile gorge to Addis Ababa by evening.',
      },
    ],
    places: ['Bahir Dar', 'Choke Mountains', 'Debre Markos', 'Addis Ababa'],
  },
  {
    slug: 'northern-endemics-birding',
    title: 'Northern Endemics Birding',
    image: '/images/hero-simien.png',
    days: '7 Days',
    nights: 6,
    style: 'Wildlife · Birding · Private',
    season: 'Oct – Apr',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'The Simien\'s highland specialities — thick-billed raven, wattled ibis, lammergeier — with a specialist guide and no detours.',
    summary:
      'Our Rift Valley trip covers the south. This one is built for the northern highlands, where the Simien alone holds around two hundred species, including five Ethiopian endemics and a dozen near-endemics. An ornithologist travels with you from Gondar, and the days are shaped around birds rather than sightseeing.',
    includes: [
      'A specialist bird guide throughout',
      'Return flights Addis Ababa – Gondar',
      'Private 4x4 transfers and all Simien park fees and scouts',
      'Three nights at an escarpment lodge inside the park area',
      'Full board in the mountains, breakfast in Gondar and Addis',
      'A species checklist and daily sightings log',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Personal optics and field guides',
      'The optional Guassa extension',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Private transfer and a briefing with your bird guide on the northern target list.',
      },
      {
        day: 'Day 2',
        title: 'Gondar',
        text: 'A morning flight north, then an afternoon on the wooded edges of the castle grounds and the town\'s church compounds.',
      },
      {
        day: 'Days 3 – 5',
        title: 'Simien Mountains',
        text: 'Three full days from Sankaber to Geech and Chenek: thick-billed raven, wattled ibis, spot-breasted plover and white-collared pigeon on the grassland, and lammergeier riding the escarpment updrafts.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'A final dawn session on the rim, the drive down to Gondar, and an afternoon flight south.',
      },
      {
        day: 'Day 7',
        title: 'Departure',
        text: 'A checklist review over breakfast before your departure — or two more days on the Guassa Plateau for the Ankober serin and blue-winged goose.',
      },
    ],
    places: ['Gondar', 'Simien Mountains', 'Sankaber', 'Chenek'],
  },
  {
    slug: 'highlands-and-wildlife',
    title: 'Highlands & Wildlife',
    image: '/images/bale-gelada.png',
    days: '9 Days',
    nights: 8,
    style: 'Expedition · Private',
    season: 'Nov – Apr',
    from: TAILOR_MADE,
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
    from: TAILOR_MADE,
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
    from: TAILOR_MADE,
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
  },
  {
    slug: 'omo-valley-immersion',
    title: 'Omo Valley Immersion',
    image: '/images/omo-valley.png',
    days: '10 Days',
    nights: 9,
    style: 'Cultural · Private',
    season: 'Jun – Sep, Dec – Mar',
    from: TAILOR_MADE,
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
    places: ['Omo Valley', 'Dorze', 'Turmi', 'Dimeka', 'Mursi Highlands', 'Karo'],
  },
  {
    slug: 'timkat-festival-journey',
    title: 'Timkat Festival Journey',
    image: '/images/festival-timkat.png',
    days: '8 Days',
    nights: 7,
    style: 'Festival · Private',
    season: 'January only',
    from: TAILOR_MADE,
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
  },
  {
    slug: 'ethiopia-through-the-lens',
    title: 'Ethiopia Through the Lens',
    image: '/images/omo-valley.png',
    days: '9 Days',
    nights: 8,
    style: 'Photography · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
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
    from: TAILOR_MADE,
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

// Ethiopia's climbable summits, for the Mountains guide. Heights follow the
// commonly cited figures; where sources differ we round down. Ranking beyond
// Ras Dashen is deliberately left out — published lists disagree.
export type Peak = {
  name: string
  height: number
  // Shown instead of the number where sources disagree on the exact height.
  heightLabel?: string
  range: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous'
  days: string
  season: string
  note: string
  tourSlug?: string
  destinationSlug?: string
}

export const peaks: Peak[] = [
  {
    name: 'Ras Dashen',
    height: 4550,
    range: 'Simien Mountains',
    difficulty: 'Strenuous',
    days: '7 – 10 days',
    season: 'Oct – Feb',
    note: 'Ethiopia\'s highest summit, reached from the base camp at Ambiko after crossing the Mesheha valley. A scramble to the top, not a technical climb.',
    tourSlug: 'ras-dashen-summit-climb',
    destinationSlug: 'ras-dashen',
  },
  {
    name: 'Bwahit',
    height: 4430,
    range: 'Simien Mountains',
    difficulty: 'Challenging',
    days: '1 day from Chenek',
    season: 'Oct – Feb',
    note: 'A full day up from Chenek past the 4,200-metre Bwahit pass, with the first view of Ras Dashen and a good chance of walia ibex.',
    tourSlug: 'simien-summits-in-comfort',
    destinationSlug: 'simien-mountains',
  },
  {
    name: 'Tullu Dimtu',
    height: 4377,
    range: 'Bale Mountains',
    difficulty: 'Moderate',
    days: '1 day on the Sanetti Plateau',
    season: 'Nov – Mar',
    note: 'The high point of the Sanetti Plateau, walked across open moorland — a rough road also climbs close to the top, so it suits mixed-ability groups.',
    tourSlug: 'bale-summits-batu-and-tullu-dimtu',
    destinationSlug: 'bale-mountains',
  },
  {
    name: 'Batu',
    height: 4307,
    range: 'Bale Mountains',
    difficulty: 'Challenging',
    days: '5 – 7 days',
    season: 'Nov – Mar',
    note: 'Reached on foot from Dinsho through the Web and Wasema valleys. Of its two peaks, "Little Batu" is actually the higher.',
    tourSlug: 'bale-summits-batu-and-tullu-dimtu',
    destinationSlug: 'bale-mountains',
  },
  {
    name: 'Abune Yosef',
    height: 4260,
    range: 'Lasta Highlands',
    difficulty: 'Challenging',
    days: '3 – 4 days',
    season: 'Oct – Mar',
    note: 'A remote massif about 40 kilometres from Lalibela, with community lodges, gelada monkeys and a chance of Ethiopian wolves.',
    tourSlug: 'abune-yosef-ascent',
    destinationSlug: 'lalibela',
  },
  {
    name: 'Guna',
    height: 4120,
    range: 'South Gondar',
    difficulty: 'Moderate',
    days: '1 day from Debre Tabor',
    season: 'Oct – Feb',
    note: 'A broad Afro-alpine summit reached from a ridge at around 3,700 metres, past two false summits to a distinct rocky top.',
    tourSlug: 'mount-guna-ascent',
  },
  {
    name: 'Choke',
    height: 4000,
    heightLabel: '4,000 m+',
    range: 'Gojjam',
    difficulty: 'Moderate',
    days: '3 – 5 days',
    season: 'Oct – Feb',
    note: 'The moorland source of dozens of Blue Nile tributaries, walked village to village with a community ecovillage. Summits rise above 4,000 metres.',
    tourSlug: 'choke-mountains-trek',
    destinationSlug: 'choke-mountains',
  },
  {
    name: 'Wechecha',
    height: 3385,
    range: 'Near Addis Ababa',
    difficulty: 'Easy',
    days: 'Half a day',
    season: 'Oct – May',
    note: 'A warm-up summit above the ancient Menagesha forest, an hour from the capital — ideal for acclimatising before a bigger climb.',
    tourSlug: 'addis-and-its-highlands',
    destinationSlug: 'menagesha-suba-forest',
  },
  {
    name: 'Zuqualla',
    height: 3010,
    range: 'Near Addis Ababa',
    difficulty: 'Easy',
    days: 'Half a day',
    season: 'Oct – May',
    note: 'A holy volcanic summit south-east of the capital, with a crater lake and monastery at the top.',
    tourSlug: 'crater-lakes-and-the-holy-mountain',
    destinationSlug: 'bishoftu-zuqualla',
  },
]

// Festival calendar for /festivals. Ethiopian-calendar dates shift by a day
// in some Gregorian years; moveable feasts are marked as such.
export type Festival = {
  slug: string
  name: string
  localName?: string
  when: string
  month: string
  where: string
  unesco?: string
  image: string
  text: string
  tourSlugs: string[]
  destinationSlugs: string[]
}

export const festivals: Festival[] = [
  {
    slug: 'genna',
    name: 'Ethiopian Christmas',
    localName: 'Genna',
    when: 'January 7',
    month: 'January',
    where: 'Lalibela, and churches nationwide',
    image: '/images/lalibela.png',
    text: 'Thousands of pilgrims in white gather at Lalibela\'s rock-hewn churches for an all-night vigil, and at dawn the priests chant from the rock above them. The most atmospheric Christmas on the continent.',
    tourSlugs: ['christmas-to-epiphany'],
    destinationSlugs: ['lalibela'],
  },
  {
    slug: 'timkat',
    name: 'Epiphany',
    localName: 'Timkat',
    when: 'January 19',
    month: 'January',
    where: 'Gondar, Lalibela and Addis Ababa',
    unesco: 'UNESCO Intangible Heritage, 2019',
    image: '/images/festival-timkat.png',
    text: 'On the eve, each church\'s tabot is carried in procession to water — in Gondar, to Fasilides\' Bath — and after an all-night vigil the water is blessed at dawn. Colour, chanting and crowds in white.',
    tourSlugs: ['christmas-to-epiphany', 'timkat-festival-journey'],
    destinationSlugs: ['gondar'],
  },
  {
    slug: 'fichee-chambalaalla',
    name: 'Sidama New Year',
    localName: 'Fichee-Chambalaalla',
    when: 'Moveable — recently in March',
    month: 'Spring',
    where: 'Hawassa and across Sidama',
    unesco: 'UNESCO Intangible Heritage, 2015',
    image: '/images/coffee-ceremony.png',
    text: 'The Sidama New Year, its date set each year by Sidama astronomers who read the moon and stars. Families share buurisame — a dish of enset, milk and butter — and Hawassa fills with song and dance.',
    tourSlugs: ['sidama-and-yirgacheffe-coffee'],
    destinationSlugs: ['sidama-yirgacheffe'],
  },
  {
    slug: 'ashendye',
    name: 'Girls\' festival',
    localName: 'Ashendye · Shadey · Solel',
    when: 'Around August 22 – September 1',
    month: 'August',
    where: 'Lalibela and the northern highlands',
    image: '/images/hero-lalibela.png',
    text: 'At the end of the August fast, girls in their finest dresses and skirts of tall grass move from house to house singing and drumming — a celebration of girlhood known by different names across the north.',
    tourSlugs: [],
    destinationSlugs: ['lalibela'],
  },
  {
    slug: 'enkutatash',
    name: 'Ethiopian New Year',
    localName: 'Enkutatash',
    when: 'September 11',
    month: 'September',
    where: 'Nationwide',
    image: '/images/addis-skyline.png',
    text: 'The start of the Ethiopian year, as the long rains end and the highlands turn yellow with meskel daisies. Families gather, children sing door to door, and the country looks its greenest.',
    tourSlugs: ['addis-ababa-in-depth'],
    destinationSlugs: ['addis-ababa'],
  },
  {
    slug: 'meskel',
    name: 'Finding of the True Cross',
    localName: 'Meskel',
    when: 'September 27',
    month: 'September',
    where: 'Meskel Square, Addis Ababa, and nationwide',
    unesco: 'UNESCO Intangible Heritage, 2013',
    image: '/images/addis-skyline.png',
    text: 'On the eve, a towering bonfire — the Demera — is lit before huge crowds in Meskel Square, decorated with the yellow daisies of the season. Towns across the country light their own.',
    tourSlugs: ['addis-ababa-in-depth', 'addis-and-its-highlands'],
    destinationSlugs: ['addis-ababa'],
  },
  {
    slug: 'irreecha',
    name: 'Oromo Thanksgiving',
    localName: 'Irreecha',
    when: 'The weekend after Meskel',
    month: 'October',
    where: 'Hora Arsadi, Bishoftu, and Addis Ababa',
    image: '/images/lake-tana.png',
    text: 'At the end of the rains, vast crowds in traditional dress gather at the lakeshore to give thanks, touching fresh grass and flowers to the water. One of the largest gatherings in Ethiopia.',
    tourSlugs: ['crater-lakes-and-the-holy-mountain'],
    destinationSlugs: ['bishoftu-zuqualla'],
  },
  {
    slug: 'great-ethiopian-run',
    name: 'Great Ethiopian Run',
    when: 'Late November',
    month: 'November',
    where: 'Addis Ababa',
    image: '/images/addis-skyline.png',
    text: 'A 10-kilometre road race through the capital, founded in 2001 with Haile Gebrselassie, and now one of the largest road races in Africa — tens of thousands of runners, and a carnival atmosphere.',
    tourSlugs: ['run-with-ethiopias-champions'],
    destinationSlugs: ['addis-ababa'],
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
  // Where the idea happens and which journeys carry it, by slug. The first
  // tour is the one we point to first.
  destinationSlugs: string[]
  tourSlugs: string[]
}

export const experiences: Experience[] = [
  {
    slug: 'walk-with-the-people-who-live-there',
    number: '01',
    title: 'Walk with the people who live there',
    tagline: 'Village-run treks where the hosts are the guides',
    image: '/images/hero-lalibela.png',
    gallery: ['/images/hero-lalibela.png', '/images/hero-simien.png'],
    intro:
      'In the northern highlands, some of the best walking is run by the villages themselves — thatched tukul camps on escarpment edges, local guides from the farms you pass, and fees that go straight to the community hosting you.',
    paragraphs: [
      'On the Meket escarpment south of Lalibela, the TESFA community programme has hosted walkers since 2003, when Mequat Mariam became its first camp. The route runs along the plateau rim at 2,800 to 3,100 metres, mostly flat or gently graded, and horses can be hired for any stretch.',
      'Further west, the Choke Mountains ecovillage in Gojjam was named one of UN Tourism\'s Best Tourism Villages in 2022, and north-east of Addis Ababa the Guassa Plateau has been protected by its own communities under the Qero system for around four hundred years.',
      'What these places share is who is in charge. You sleep where the village has chosen to build, eat what the village cooks, and walk with people who know every path because they farm beside it — the difference between visiting a landscape and being welcomed into one.',
    ],
    highlights: [
      'Nights in community-owned tukul camps with the drop on three sides',
      'Local guides from the villages along the route, alongside our own senior guide',
      'Walking that is mostly gentle, with horses available whenever you want them',
      'Fees paid directly to the communities who host you',
    ],
    facts: [
      { label: 'Typical setting', value: 'Meket, Choke, Guassa' },
      { label: 'Altitude', value: '2,800 – 3,700 m' },
      { label: 'Time needed', value: '3 – 5 days' },
      { label: 'Season', value: 'Oct – Mar' },
    ],
    destinationSlugs: ['lalibela', 'choke-mountains', 'guassa-plateau'],
    tourSlugs: ['lalibela-highlands-community-trek', 'choke-mountains-trek', 'the-road-north'],
  },
  {
    slug: 'arrive-for-the-feast-days',
    number: '02',
    title: 'Arrive for the feast days',
    tagline: 'Christmas at the rock churches, Epiphany at the royal bath',
    image: '/images/festival-timkat.png',
    gallery: ['/images/festival-timkat.png', '/images/lalibela.png'],
    intro:
      'Twice each January the north gathers. Pilgrims in white fill the trenches of Lalibela for Genna, Ethiopian Christmas, and twelve days later Gondar carries its tabots to Fasilides\' Bath for Timkat.',
    paragraphs: [
      'Genna falls on January 7th. The night before, thousands of pilgrims keep vigil among Lalibela\'s rock-hewn churches, and at dawn the priests chant from the rock above them. It is a working act of faith rather than a performance, and the best way to see it is quietly, from a place arranged well in advance.',
      'Timkat follows on January 19th. On the eve, the tabots — the consecrated tablets of each church — are carried in procession to Fasilides\' Bath in Gondar; the vigil runs through the night, and at dawn the water is blessed. Both dates follow the Ethiopian calendar and move by a day in some years, so we confirm them when you book.',
      'Rooms and vantage points go early, which is why we plan festival journeys a year ahead — and why we travel with an Orthodox Christian scholar who can explain what is happening, and when to put the camera down.',
    ],
    highlights: [
      'The Genna vigil at Lalibela among pilgrims dressed in white',
      'The Timkat procession and the blessing of the water at Fasilides\' Bath',
      'An Orthodox Christian scholar as your festival guide',
      'Accommodation and viewing positions secured twelve months ahead',
    ],
    facts: [
      { label: 'Typical setting', value: 'Lalibela & Gondar' },
      { label: 'Dates', value: 'Jan 7 & Jan 19' },
      { label: 'Time needed', value: '8 – 16 days' },
      { label: 'Season', value: 'January only' },
    ],
    destinationSlugs: ['lalibela', 'gondar'],
    tourSlugs: ['christmas-to-epiphany', 'timkat-festival-journey'],
  },
  {
    slug: 'rest-at-the-edge-of-the-wild',
    number: '03',
    title: 'Sleep at the edge of the wild',
    tagline: 'Lodges and camps chosen for the view, not the brochure',
    image: '/images/luxury-lodge.png',
    gallery: ['/images/luxury-lodge.png', '/images/hero-simien.png'],
    intro:
      'Each evening ends somewhere chosen for its view and its quiet — a lodge on the Simien rim, a camp above the cloud, a community guesthouse on a plateau where wolves hunt at dawn.',
    paragraphs: [
      'We do not choose where you sleep from a sales sheet. Every lodge we recommend has been stayed in by our team, and judged on a short list: what you see from the room, how the light arrives at both ends of the day, and how the staff treat guests when nobody is watching.',
      'On the Simien escarpment that means waking to a drop of well over a thousand metres, with gelada troops grazing the grass outside and a fire lit before you return from the day\'s walk. On the Guassa Plateau it means a simple community lodge with no mains electricity, a cook we bring ourselves, and a sky with almost no light in it.',
      'The common thread is restraint: comfort that supports the day rather than competing with the landscape for your attention.',
    ],
    highlights: [
      'Lodges personally stayed in by our team before we recommend them',
      'Rooms and camps chosen for their view first, amenities second',
      'A fire, hot water and proper bedding even in remote settings',
      'Family-run places wherever they perform as well as a chain',
    ],
    facts: [
      { label: 'Typical setting', value: 'Simien rim, Guassa' },
      { label: 'Style', value: 'Lodges & serviced camps' },
      { label: 'Time needed', value: '2 nights or more' },
      { label: 'Season', value: 'Oct – May' },
    ],
    destinationSlugs: ['simien-mountains', 'guassa-plateau', 'ras-dashen'],
    tourSlugs: ['gondar-and-the-simien-rim', 'simien-escarpment-trek', 'highlands-and-wildlife'],
  },
  {
    slug: 'light-first-photography',
    number: '04',
    title: 'Work around the light, not the schedule',
    tagline: 'A photographer-guide, not a driver who waits in the car',
    image: '/images/hero-simien.png',
    gallery: ['/images/hero-simien.png', '/images/lalibela.png', '/images/danakil.png'],
    intro:
      'A photographer-guide reads each place for its hour — Imet Gogo at sunrise, the Lalibela trenches at first light, the salt flats as the heat goes — so the camera never fights flat midday sun.',
    paragraphs: [
      'Every stop on a light-led journey is timed to the sun rather than the itinerary. In the Simien that means being on the rim at Imet Gogo before dawn, when three ridgelines stand out of the cloud below you. In Lalibela it means arriving while pilgrims are still gathering, before the light drops into the trench at Bete Maryam.',
      'Your guide is a working photographer first. They know which angle clears the haze, which ridge catches the first light, and when to simply stop because the light will not hold — and they plan the long drives for the flat hours in between.',
      'Portraits are only ever taken with consent, asked for and respected, and never from a moving vehicle. Sending prints back afterwards is often the more meaningful part of the exchange.',
    ],
    highlights: [
      'A working photographer as guide, not a generalist driver-guide',
      'Dawn and dusk built into the schedule at every major site',
      'A vehicle with windows that open, and stops made on request',
      'A clear consent-first approach to every portrait',
    ],
    facts: [
      { label: 'Typical setting', value: 'Simien, Lalibela, Danakil' },
      { label: 'Group size', value: '2 – 4 guests' },
      { label: 'Time needed', value: '5 days or more' },
      { label: 'Season', value: 'Oct – Mar' },
    ],
    destinationSlugs: ['simien-mountains', 'lalibela', 'danakil-depression'],
    tourSlugs: ['ethiopia-through-the-lens', 'simien-escarpment-trek', 'lalibela-beyond-the-churches'],
  },
  {
    slug: 'access-through-relationship',
    number: '05',
    title: 'Arrive as a guest, not a tourist',
    tagline: 'Doors that open through relationship, not a fee',
    image: '/images/textile.png',
    gallery: ['/images/textile.png', '/images/lake-tana.png', '/images/gondar.png'],
    intro:
      'A monk unwrapping an illuminated gospel on Lake Tana. A potter at work in Wolleka, the old Beta Israel village outside Gondar. A weaver at Awra Amba explaining how the community decides everything together. None of it is staged.',
    paragraphs: [
      'The best moments in the north happen when people choose to share something with you, and that depends on who you arrive with. Our guides return to the same monasteries, villages and workshops season after season, and are known there as people rather than as a tour.',
      'On Lake Tana that can mean a monastery\'s manuscripts brought out by the monks who keep them. Outside Gondar it means time at Wolleka with the potters who still work in the village of Gondar\'s Beta Israel community. At Awra Amba, a weaving cooperative founded in 1980 on shared work between men and women, it means an open conversation about how the community runs itself.',
      'We ask one thing of guests: arrive curious, ask before every photograph, and accept a no gracefully. It is the difference between being tolerated and being welcomed.',
    ],
    highlights: [
      'Manuscripts shown by the monks who keep them on Lake Tana',
      'Time with the potters of Wolleka and the weavers of Awra Amba',
      'Guides known by name in the places they take you',
      'A firm ask-before-every-photograph standard, explained before you arrive',
    ],
    facts: [
      { label: 'Typical setting', value: 'Lake Tana, Gondar, Awra Amba' },
      { label: 'Time needed', value: '2 days or more' },
      { label: 'Pace', value: 'Slow, unhurried' },
      { label: 'Season', value: 'Year-round' },
    ],
    destinationSlugs: ['lake-tana', 'gondar', 'awra-amba'],
    tourSlugs: ['around-lake-tana', 'the-historic-route'],
  },
  {
    slug: 'coffee-traced-to-origin',
    number: '06',
    title: 'Follow the bean home',
    tagline: 'Coffee forest walks, and a ceremony done properly',
    image: '/images/coffee-ceremony.png',
    gallery: ['/images/coffee-ceremony.png', '/images/lake-tana.png'],
    intro:
      'Coffee is part of daily life everywhere in Ethiopia, and in the north it grows closer than most visitors expect — under the trees of Lake Tana\'s Zege Peninsula, where shaded trails link the monasteries through a working coffee forest.',
    paragraphs: [
      'On the Zege Peninsula, the coffee forest is the landscape itself: paths wind under the canopy between the monasteries, past the red cherries of trees that local families still harvest. It is an easy half-day on foot, reached by boat from Bahir Dar.',
      'Then comes the ceremony, done the way it is at home rather than in a hotel lobby: green beans roasted over coals in front of you, ground by hand, brewed in a clay jebena and poured in three rounds — abol, tona and baraka, the last meaning blessing. It takes the better part of an hour, and nobody hurries it.',
      'For guests who want to go further, wild Arabica still grows in the forests of Kaffa in the south-west, where the plant is thought to have originated — an extension we can add to any northern journey.',
    ],
    highlights: [
      'A walk through Zege\'s coffee forest between Lake Tana\'s monasteries',
      'A full three-round coffee ceremony in a family home',
      'The chance to buy beans directly from the household that roasted them',
      'An optional extension to the wild coffee forests of Kaffa',
    ],
    facts: [
      { label: 'Typical setting', value: 'Zege Peninsula, Lake Tana' },
      { label: 'Time needed', value: 'Half a day, minimum' },
      { label: 'Extension', value: 'Kaffa forests' },
      { label: 'Season', value: 'Year-round' },
    ],
    destinationSlugs: ['lake-tana'],
    tourSlugs: ['around-lake-tana', 'sacred-waters-and-coffee'],
  },
]

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug)
}

// Short, bookable add-ons that slot into any journey — shown at /experiences.
// (The six guiding ideas that used to live there are now `experiences`
// above, served at /how-we-travel.)
export type ActivityCategory =
  | 'Food & Drink'
  | 'Coffee'
  | 'Active'
  | 'Farm & Community'
  | 'Give Back'

export type Activity = {
  slug: string
  title: string
  // Short label for enquiry-form chips.
  short: string
  category: ActivityCategory
  duration: string
  where: string
  season: string
  image: string
  teaser: string
  intro: string
  paragraphs: string[]
  includes: string[]
  goodToKnow?: string
  destinationSlugs: string[]
  tourSlugs: string[]
}

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

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug)
}

export const journeyStyles = [
  'Luxury',
  'Climbing',
  'Photography',
  'Cultural',
  'Wildlife',
  'Trekking',
  'Festival',
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
