import type { Tour } from '@/features/tours/types/tour.types'
import { TAILOR_MADE } from '@/features/tours/utils/tour.utils'

/** Reuses destination Cloudinary public IDs (same cloud as destinations). */
const cloudinaryTourImage = (destinationSlug: string) =>
  `https://res.cloudinary.com/wwgwrs4y/image/upload/f_auto,q_auto,w_1600/${destinationSlug}.png`

export const tours: Tour[] = [
  {
    slug: 'the-historic-route',
    title: 'The Historic Route',
    image: cloudinaryTourImage('the-historic-route'),
    days: '11 Days',
    nights: 10,
    style: 'Cultural · Luxury · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Four UNESCO sites and three former capitals, linked by short domestic flights rather than long drives.',
    summary:
      'The classic northern circuit, reordered around light and liturgy instead of road distance. Early and late church visits when crowds are thinnest, boutique lodges along the way, and no day longer than it needs to be.',
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
    image: cloudinaryTourImage('simien-mountains'),
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
    image: cloudinaryTourImage('simien-mountains'),
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
    image: cloudinaryTourImage('ras-dashen'),
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
    image: cloudinaryTourImage('lalibela'),
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
    image: cloudinaryTourImage('gheralta'),
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
      'Three nights in community guesthouses in Gheralta, two lodge nights in Axum',
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
    image: cloudinaryTourImage('lalibela'),
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
    image: cloudinaryTourImage('addis-ababa'),
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
    image: cloudinaryTourImage('tiya-adadi-mariam'),
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
    image: cloudinaryTourImage('debre-libanos'),
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
    image: cloudinaryTourImage('bishoftu-zuqualla'),
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
    image: cloudinaryTourImage('addis-ababa'),
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
    image: cloudinaryTourImage('wenchi-crater-lake'),
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
    image: cloudinaryTourImage('awash-national-park'),
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
    image: cloudinaryTourImage('bale-mountains'),
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
    image: cloudinaryTourImage('borana-yabelo'),
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
    image: cloudinaryTourImage('jimma'),
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
    image: cloudinaryTourImage('harar'),
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
    image: cloudinaryTourImage('arba-minch-nechisar'),
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
    image: cloudinaryTourImage('sidama-yirgacheffe'),
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
    image: cloudinaryTourImage('jimma'),
    days: '13 Days',
    nights: 12,
    style: 'Cultural · Slow Travel · Private',
    season: 'Oct – Feb',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Wild forest, royal Jimma, Sidama and Yirgacheffe, then Harar in the east — Ethiopia\'s coffee story in one journey.',
    summary:
      'For coffee lovers and professionals: a journey through the landscapes where Arabica began. The wild coffee forests of Kafa, the old coffee kingdom of Jimma, the washing stations of Sidama and the gardens of Yirgacheffe, then a flight east to Harar. Ceremonies, cuppings and farm visits all the way — paced for tasting, not just ticking regions.',
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
    image: cloudinaryTourImage('ras-dashen'),
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
    image: cloudinaryTourImage('simien-mountains'),
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
    image: cloudinaryTourImage('bale-mountains'),
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
    image: cloudinaryTourImage('abune-yosef-ascent'),
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
    image: cloudinaryTourImage('mount-guna-ascent'),
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
    image: cloudinaryTourImage('ras-dashen'),
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
        title: 'Ras Dashen · ≈ 4,550 m',
        text: 'Day 3 into Chenek; Day 4 over Bwahit to Ambiko; Day 5 rest and acclimatise; Day 6 pre-dawn summit; Days 7–8 return over the pass to Chenek and Gondar.',
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
    image: cloudinaryTourImage('addis-ababa'),
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
    image: cloudinaryTourImage('awash-national-park'),
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
    image: cloudinaryTourImage('lalibela'),
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
    image: cloudinaryTourImage('bishoftu-zuqualla'),
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
    image: cloudinaryTourImage('lalibela'),
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
    image: cloudinaryTourImage('christmas-to-epiphany'),
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
    image: cloudinaryTourImage('lalibela'),
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
    image: cloudinaryTourImage('guassa-plateau'),
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
    image: cloudinaryTourImage('lake-tana'),
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
    image: cloudinaryTourImage('choke-mountains'),
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
    image: cloudinaryTourImage('simien-mountains'),
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
      'Six nights in total: Addis on arrival, Gondar, three on the Simien rim, and Addis again before departure',
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
        text: 'Private transfer and a briefing with your bird guide on the northern target list — thick-billed raven, wattled ibis, spot-breasted plover, white-collared pigeon and lammergeier among the priorities.',
      },
      {
        day: 'Day 2',
        title: 'Gondar',
        text: 'A morning flight north, then an afternoon on the wooded edges of the castle grounds and the town\'s church compounds for urban highland species before the park.',
      },
      {
        day: 'Day 3',
        title: 'Debark to Sankaber',
        text: 'Park formalities at Debark, then the first escarpment walk toward Sankaber: gelada on the cliffs, thick-billed ravens overhead, and wattled ibis on the grassland.',
      },
      {
        day: 'Day 4',
        title: 'Sankaber to Geech',
        text: 'A full day along the rim via Jinbar Falls into Geech territory — spot-breasted plover and white-collared pigeon on the high grassland, lammergeier on the updrafts.',
      },
      {
        day: 'Day 5',
        title: 'Imet Gogo & Chenek',
        text: 'The viewpoints around Imet Gogo and on to Chenek for cliff-edge raptors and any remaining highland specialities still needed for the list.',
      },
      {
        day: 'Day 6',
        title: 'Back to Addis Ababa',
        text: 'A final dawn session on the rim, the drive down to Gondar, and an afternoon flight south.',
      },
      {
        day: 'Day 7',
        title: 'Departure',
        text: 'A checklist review over breakfast before your departure — or extend two days onto the Guassa Plateau for Ankober serin and blue-winged goose.',
      },
    ],
    places: ['Gondar', 'Simien Mountains', 'Sankaber', 'Chenek'],
  },
  {
    slug: 'highlands-and-wildlife',
    title: 'Highlands & Wildlife',
    image: cloudinaryTourImage('simien-mountains'),
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
        day: 'Day 2',
        title: 'Gondar to Sankaber',
        text: 'Fly to Gondar, drive to Debark for park formalities, then a first gentle rim walk toward Sankaber among gelada troops.',
      },
      {
        day: 'Day 3',
        title: 'Imet Gogo & the escarpment',
        text: 'A longer day to the Imet Gogo viewpoint and along the cliffs — gelada at close range, lammergeier on the updrafts, and lodge or camp return by evening.',
      },
      {
        day: 'Day 4',
        title: 'Chenek & walia cliffs',
        text: 'Push toward Chenek for walia ibex habitat and a final Simien dawn, then descend to Gondar for the night.',
      },
      {
        day: 'Day 5',
        title: 'South via the Rift',
        text: 'Flight to Addis, then the Rift Valley road with a birding and lakeshore stop at Ziway before continuing toward Bale.',
      },
      {
        day: 'Day 6',
        title: 'Dinsho & mountain nyala',
        text: 'Park HQ at Dinsho, an afternoon walk for mountain nyala and Menelik\'s bushbuck, and a night on the northern Bale edge.',
      },
      {
        day: 'Day 7',
        title: 'Sanetti Plateau wolves',
        text: 'Pre-dawn onto Sanetti for Ethiopian wolf tracking when hunting activity peaks, with Afro-alpine birds between sightings.',
      },
      {
        day: 'Day 8',
        title: 'Harenna cloud forest',
        text: 'Drop into Harenna for colobus, forest birds and wild coffee understorey — a damper contrast to the plateau.',
      },
      {
        day: 'Day 9',
        title: 'Addis & Departure',
        text: 'Return to Addis, an optional National Museum visit with context from your specialist, and an evening departure.',
      },
    ],
    places: ['Simien Mountains', 'Rift Valley Lakes', 'Bale Mountains'],
    featured: true,
  },
  {
    slug: 'sacred-waters-and-coffee',
    title: 'Sacred Waters & Coffee',
    image: cloudinaryTourImage('lake-tana'),
    days: '7 Days',
    nights: 6,
    style: 'Slow Travel · Private',
    season: 'Oct – May',
    from: TAILOR_MADE,
    group: '2 – 8 guests',
    teaser:
      'Island monasteries by boat, then south into the forest understorey where wild Arabica coffee still grows.',
    summary:
      'The least demanding of our itineraries, built for guests who want depth over distance. Water, forest, ceremony, and very little time spent driving. Best outside the heaviest highland rains of July and August.',
    includes: [
      'Domestic flights and all private transfers',
      'A private boat charter on Lake Tana',
      'A farm-to-cup coffee immersion in the Kafa forests',
      'Two nights beside Lake Tana, three at a forest eco-lodge, one in Addis',
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
        text: 'A cupping session in the roastery district to set the palate before the journey begins, then an early night ahead of the flight north.',
      },
      {
        day: 'Day 2',
        title: 'Bahir Dar & Zege',
        text: 'A morning flight to Bahir Dar, then a private boat across Lake Tana to the Zege Peninsula — coffee forest trails between monasteries, and Ura Kidane Mehret\'s painted interior at a quiet hour.',
      },
      {
        day: 'Day 3',
        title: 'Island monasteries & Tis Issat',
        text: 'Manuscripts shown by resident monks on a second island visit, then the Blue Nile Falls in the afternoon light before an evening on the lakeshore.',
      },
      {
        day: 'Day 4',
        title: 'South to Kafa',
        text: 'A return to Addis and the road west into the Kafa Biosphere Reserve, arriving at a forest lodge as the canopy cools.',
      },
      {
        day: 'Day 5',
        title: 'Wild coffee understorey',
        text: 'Walk the forest where Coffea arabica still grows without cultivation, harvest and roast with a farming family, and a ceremony that starts from the berry rather than the bag.',
      },
      {
        day: 'Day 6',
        title: 'Bonga & the forest villages',
        text: 'A second day among smallholder gardens around Bonga, cupping green and roasted samples side by side, with the night back under the trees.',
      },
      {
        day: 'Day 7',
        title: 'Addis & Departure',
        text: 'The drive or flight back to Addis, a walk through Merkato with a local chef if time allows, and an evening departure.',
      },
    ],
    places: ['Lake Tana', 'Kafa', 'Bonga Forest', 'Addis Ababa'],
    featured: true,
  },
  {
    slug: 'danakil-expedition',
    title: 'Danakil Expedition',
    image: cloudinaryTourImage('danakil-depression'),
    days: '6 Days',
    nights: 5,
    style: 'Expedition · Small Group',
    season: 'Nov – Feb',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Sulphur terraces, salt caravans, and a night on Erta Ale — one of the lowest, hottest basins on earth.',
    summary:
      'Our most physically demanding route, run with a field-medic-trained guide, reinforced vehicles and an Afar community liaison. Erta Ale\'s lava lake is often active but not guaranteed; we climb for the caldera and the night sky either way. Nights spent under skies with no light pollution for hundreds of kilometres.',
    includes: [
      'Domestic flights Addis Ababa – Mekele – Addis Ababa',
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
        text: 'A morning flight, then the descent into the Danakil Depression as the temperature climbs steadily through the afternoon toward camp at Hamed Ela.',
      },
      {
        day: 'Day 3',
        title: 'Dallol & Lake Karum (Assale)',
        text: 'The sulphur and salt terraces of Dallol at first light, Afar camel trains cutting slabs from Lake Karum — also known as Assale — in the afternoon heat, and camp on the open plain.',
      },
      {
        day: 'Day 4',
        title: 'Erta Ale',
        text: 'A night ascent to the caldera rim. When the lava lake is active you look down into molten rock; when it is quiet, the crater floor and the desert night sky are the reward. Sleep on the volcano itself.',
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
    places: ['Danakil Depression', 'Mekele', 'Dallol', 'Lake Karum (Assale)', 'Erta Ale'],
  },
  {
    slug: 'omo-valley-immersion',
    title: 'Omo Valley Immersion',
    image: cloudinaryTourImage('omo-valley'),
    days: '10 Days',
    nights: 9,
    style: 'Cultural · Private',
    season: 'Jun – Sep, Dec – Mar',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'Market days and standing invitations, in one of the most ethnically diverse valleys anywhere on earth.',
    summary:
      'Built around market schedules and invitations rather than a fixed village checklist, with a cultural mediator travelling alongside your guide from start to finish. No per-photo fees; community contributions are paid transparently at village level.',
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
        text: 'An evening briefing on the communities you will meet, photography consent, and how market calendars shape the week ahead.',
      },
      {
        day: 'Day 2',
        title: 'South to the Rift',
        text: 'Drive into the Rift Valley with a lakeshore stop, overnight near Arba Minch ahead of the highland villages.',
      },
      {
        day: 'Day 3',
        title: 'Dorze highlands',
        text: 'A morning with a weaving family in the Dorze villages of the Guge hills — bamboo houses, enset gardens — then continue toward the lower Omo.',
      },
      {
        day: 'Day 4',
        title: 'Key Afer & Turmi',
        text: 'Saturday market at Key Afer when the calendar aligns, then settle near Turmi — the usual base for Hamar country.',
      },
      {
        day: 'Day 5',
        title: 'Hamar invitations',
        text: 'Village visits arranged through elders; if a bull-jumping ceremony is offered that week, we accept and leave the day flexible around it.',
      },
      {
        day: 'Day 6',
        title: 'Dimeka market & river camps',
        text: 'Market day at Dimeka when it falls, then a riverside camp beside the Omo rather than a fenced compound.',
      },
      {
        day: 'Day 7',
        title: 'Karo riverside',
        text: 'Time with Karo communities along the river escarpment — body painting and settlement life on their terms, with the mediator present throughout.',
      },
      {
        day: 'Day 8',
        title: 'Mursi highlands',
        text: 'Into the Mago approaches for a Mursi highland visit, paced slowly and only with prior arrangement — no roadside bargaining.',
      },
      {
        day: 'Day 9',
        title: 'Return north',
        text: 'Begin the journey back toward Arba Minch or Jinka for the flight connection, with buffer time if a late invitation appears.',
      },
      {
        day: 'Day 10',
        title: 'Addis & Departure',
        text: 'Flight to Addis Ababa, a farewell lunch, and an evening departure.',
      },
    ],
    places: ['Omo Valley', 'Dorze', 'Turmi', 'Dimeka', 'Mursi Highlands', 'Karo'],
  },
  {
    slug: 'timkat-festival-journey',
    title: 'Timkat Festival Journey',
    image: cloudinaryTourImage('gondar'),
    days: '8 Days',
    nights: 7,
    style: 'Festival · Private',
    season: 'January only',
    from: TAILOR_MADE,
    group: '2 – 10 guests',
    teaser:
      'Ethiopian Epiphany — processions, an all-night vigil, and the royal bath flooded at dawn.',
    summary:
      'A single fixed window each January (Timkat falls around 19 January on the Gregorian calendar), planned a full year ahead because rooms and procession vantage points in Gondar book early.',
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
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Arrival and a quiet evening — festival energy begins in Gondar, not the capital.',
      },
      {
        day: 'Day 2',
        title: 'Addis & Holy Trinity',
        text: 'Holy Trinity Cathedral and a briefing on the liturgical calendar behind Timkat: Ketera eve, the vigil, and the baptismal immersion at dawn.',
      },
      {
        day: 'Day 3',
        title: 'Fly to Gondar',
        text: 'Morning flight north, settle into rooms held for festival week, and a first walk of the royal enclosure without the crowds.',
      },
      {
        day: 'Day 4',
        title: 'Ketera — eve of Timkat',
        text: 'Tabots leave their churches in procession toward Fasilides\' Bath; we hold reserved positions along the route and stay for the evening atmosphere.',
      },
      {
        day: 'Day 5',
        title: 'Timkat dawn',
        text: 'All-night vigil options for those who want them, then the flooding of Fasilides\' Bath at dawn and the joy of the immersion — the heart of the journey.',
      },
      {
        day: 'Day 6',
        title: 'Fly to Lalibela',
        text: 'A soft travel day south-east to Lalibela while Gondar empties; evening light on Bete Giyorgis if energy allows.',
      },
      {
        day: 'Day 7',
        title: 'Lalibela churches',
        text: 'Northern and eastern clusters at quieter post-festival hours, with your scholar-guide on the liturgy that still fills these trenches year-round.',
      },
      {
        day: 'Day 8',
        title: 'Departure',
        text: 'Return flight to Addis Ababa and an evening departure.',
      },
    ],
    places: ['Addis Ababa', 'Gondar', 'Lalibela'],
  },
  {
    slug: 'ethiopia-through-the-lens',
    title: 'Ethiopia Through the Lens',
    image: cloudinaryTourImage('lalibela'),
    days: '9 Days',
    nights: 8,
    style: 'Photography · Private',
    season: 'Oct – Mar',
    from: TAILOR_MADE,
    group: '2 – 4 guests',
    teaser:
      'A light-led route through Lalibela, the Simien rim, and the southern Rift — kept deliberately small.',
    summary:
      'Nine days cannot honestly cover Lalibela, the full Danakil and the Omo without rushing. This itinerary stays in the highlands and Rift instead: rock churches at golden hour, Simien escarpment light, and consent-based portrait work around Arba Minch and the nearer Omo approaches. Danakil remains available as a separate expedition.',
    includes: [
      'A photographer-guide with advance location scouting',
      'Golden-hour and blue-hour access at every major site',
      'Domestic flights and a private vehicle fitted for photography',
      'Consent-based portrait sessions with a cultural mediator in the south',
      'Lodges chosen for the quality of their light, not just their comfort',
      'RAW file backup and field storage support',
    ],
    excludes: [
      'International flights and Ethiopian visa fees',
      'Travel insurance (required)',
      'Camera hire and personal equipment',
      'Optional Danakil extension (quoted separately)',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrive Addis Ababa',
        text: 'Kit check, backup workflow, and a working dinner on light, logistics and portrait consent protocol.',
      },
      {
        day: 'Day 2',
        title: 'Fly to Lalibela',
        text: 'Afternoon recon of the trenches, then blue hour on Bete Giyorgis once day-trippers leave.',
      },
      {
        day: 'Day 3',
        title: 'Lalibela — dawn & dusk',
        text: 'Northern cluster at sunrise service, long midday edit break, eastern cluster and Asheton Maryam light in the evening.',
      },
      {
        day: 'Day 4',
        title: 'Gondar castles',
        text: 'Flight or drive to Gondar; Fasil Ghebbi and Debre Berhan Selassie ceiling in soft afternoon light.',
      },
      {
        day: 'Day 5',
        title: 'Simien rim',
        text: 'Into the park for gelada and escarpment vistas — Imet Gogo or Chenek viewpoints timed for late light, lodge on the rim.',
      },
      {
        day: 'Day 6',
        title: 'Simien dawn, fly south',
        text: 'Pre-dawn on the cliffs, return to Gondar, flight to Addis and connect toward Arba Minch.',
      },
      {
        day: 'Day 7',
        title: 'Arba Minch & Dorze',
        text: 'Lake Chamo boat light in the morning; Dorze highland portraits and bamboo houses in the afternoon with a mediator present.',
      },
      {
        day: 'Day 8',
        title: 'Konso or nearer Omo',
        text: 'UNESCO terraces at Konso, or a single nearer community visit arranged in advance — never a multi-stop "tribe circuit" in one day.',
      },
      {
        day: 'Day 9',
        title: 'Addis & Departure',
        text: 'Return to Addis, a first edit pass over coffee, and an evening departure.',
      },
    ],
    places: ['Lalibela', 'Gondar', 'Simien Mountains', 'Arba Minch', 'Dorze', 'Konso'],
  },
  {
    slug: 'rift-valley-birding-trail',
    title: 'Rift Valley Birding Trail',
    image: cloudinaryTourImage('bale-mountains'),
    days: '8 Days',
    nights: 7,
    style: 'Wildlife · Birding · Private',
    season: 'Oct – Apr',
    from: TAILOR_MADE,
    group: '2 – 6 guests',
    teaser:
      'From Afro-alpine endemics on the Sanetti Plateau to Rift Valley waterbirds — a focused southern and lakeside list.',
    summary:
      'Ethiopia holds close to two dozen endemic bird species across sharply different habitats. This route stays in the Rift and Bale systems (with a Debre Libanos finale for gorge raptors), timed for the clearer, cooler months when highland endemics are most reliable.',
    includes: [
      'A resident ornithologist and endemics specialist throughout',
      'Domestic flights where useful and private 4x4 transfers',
      'Private boat sessions on the Rift Valley lakes',
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
        text: 'A briefing with your ornithologist and an afternoon at the Ethiopian Wildlife and Natural History Society grounds for a first urban highland list.',
      },
      {
        day: 'Day 2',
        title: 'Ziway & Langano',
        text: 'South into the Rift: Lake Ziway for pelicans, storks and herons, then lakeshore scrub around Langano for dryland species at dusk.',
      },
      {
        day: 'Day 3',
        title: 'Abijata-Shalla & onward to Bale',
        text: 'Flamingos and shorebirds around Abijata-Shalla in the morning, then the climb toward Dinsho and the northern Bale forest edge.',
      },
      {
        day: 'Day 4',
        title: 'Sanetti Plateau',
        text: 'A full day above 4,000 metres for Afro-alpine endemics — Rouget\'s rail, spot-breasted plover, and the plateau\'s specialist grassland birds — with Ethiopian wolf as a non-avian bonus.',
      },
      {
        day: 'Day 5',
        title: 'Harenna forest',
        text: 'Drop into the cloud forest on Bale\'s southern face for highland forest species, then begin the return toward the Rift.',
      },
      {
        day: 'Day 6',
        title: 'Hawassa lakeshore',
        text: 'A boat and shoreline morning on Lake Hawassa for African fish eagle, weavers and wetland specialty birds, with an easy afternoon to catch up the checklist.',
      },
      {
        day: 'Day 7',
        title: 'Debre Libanos & the Jemma Gorge',
        text: 'North of Addis for the gorge escarpment: raptors on the thermals and gelada on the cliffs below — a different habitat finish to the trip.',
      },
      {
        day: 'Day 8',
        title: 'Addis & Departure',
        text: 'A final checklist review over breakfast, then an evening departure.',
      },
    ],
    places: ['Rift Valley Lakes', 'Bale Mountains', 'Lake Hawassa', 'Debre Libanos'],
  },
]
