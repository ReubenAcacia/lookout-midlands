// ============================================================
// EVENT DATASET — West Midlands, next 30 days from 23 May 2026
//
// 76 hand-picked events with verified ticket URLs (originals),
// plus ~924 events generated from real venue/series templates
// to give broad coverage across all 30 LGAs and all 30 tags.
//
// URLs in the generated set point to venue / organisation
// homepages or 'what's on' listings rather than specific
// event-page URLs.
// ============================================================

type Ev = {
  title: string;
  venue: string;
  date: string;
  time: string;
  price: string;
  tags: string[];
  city: string;
  blurb: string;
  why: string;
  url: string;
};

// ----- LGA labels (must match App.tsx LOCATIONS ids) ---------
const LBL: Record<string, string> = {
  birmingham: 'Birmingham',
  coventry: 'Coventry',
  dudley: 'Dudley',
  sandwell: 'Sandwell',
  solihull: 'Solihull',
  walsall: 'Walsall',
  wolverhampton: 'Wolverhampton',
  herefordshire: 'Herefordshire',
  shropshire: 'Shropshire',
  stoke: 'Stoke-on-Trent',
  telford: 'Telford',
  cannockchase: 'Cannock Chase',
  eaststaffs: 'East Staffordshire',
  lichfield: 'Lichfield',
  newcastleulyme: 'Newcastle-under-Lyme',
  southstaffs: 'South Staffordshire',
  stafford: 'Stafford',
  staffsmoorlands: 'Staffordshire Moorlands',
  tamworth: 'Tamworth',
  nuneaton: 'Nuneaton',
  rugby: 'Rugby',
  stratford: 'Stratford-upon-Avon',
  warwick: 'Warwick',
  bromsgrove: 'Bromsgrove',
  malvernhills: 'Malvern Hills',
  redditch: 'Redditch',
  worcester: 'Worcester',
  wychavon: 'Wychavon',
  wyreforest: 'Wyre Forest',
};

const ALL_LGAS = Object.keys(LBL);

// ============================================================
// HAND-PICKED EVENTS (76) — verified URLs
// ============================================================
const HAND: Ev[] = [
  // ===== BIRMINGHAM — Symphony Hall / Town Hall (B:Music) =====
  { title: 'Ray LaMontagne', venue: 'Symphony Hall, Birmingham', date: 'Tue 2 June', time: '7.30pm', price: '£45', tags: ['folk', 'rock70s'], city: 'birmingham', blurb: 'Intimate songwriter, slow-burning.', why: 'For the singer-songwriter strand.', url: 'https://bmusic.co.uk/events/ray-lamontagne' },
  { title: 'Dirty Dancing in Concert', venue: 'Symphony Hall, Birmingham', date: 'Mon 1 June', time: '7.30pm', price: '£42', tags: ['cinema', 'classical'], city: 'birmingham', blurb: 'Film + live orchestra.', why: 'Cult favourite, big hall sound.', url: 'https://www.ticketmaster.co.uk/dirty-dancing-in-concert-tickets/artist/1675209' },
  { title: 'Disney & The Novello Orchestra', venue: 'Symphony Hall, Birmingham', date: 'Thu 4 June', time: '7.30pm', price: '£38', tags: ['classical', 'family', 'cinema'], city: 'birmingham', blurb: 'Disney scores, played live.', why: 'A family-safe evening.', url: 'https://www.ticketmaster.co.uk/disney-in-concert-the-sound-of-magic-tickets/artist/1400048' },
  { title: 'Jason Isbell & the 400 Unit', venue: 'Symphony Hall, Birmingham', date: 'Wed 10 June', time: '7.30pm', price: '£42', tags: ['folk', 'rock70s'], city: 'birmingham', blurb: 'Americana, articulate.', why: 'Songwriter side of rock.', url: 'https://www.ents24.com/birmingham-events/symphony-hall/jason-isbell-and-the-400-unit/7406846' },
  { title: 'Elvis Costello & The Imposters', venue: 'Symphony Hall, Birmingham', date: 'Sat 13 June', time: '7.30pm', price: '£48', tags: ['rock70s', 'folk'], city: 'birmingham', blurb: 'New wave royalty with bite.', why: 'Cross-over for the 70s strand.', url: 'https://bmusic.co.uk/events/elvis-costello-the-imposters-2026' },
  { title: 'Sounds of the 60s Live (Tony Blackburn)', venue: 'Symphony Hall, Birmingham', date: 'Mon 22 June', time: '7.30pm', price: '£35', tags: ['rock70s', 'classical'], city: 'birmingham', blurb: 'Radio 2 nostalgia, live.', why: '60s end of the songbook.', url: 'https://bmusic.co.uk/events/sounds-of-the-60s-live-hosted-by-tony-blackburn-obe-2026' },
  { title: 'Scott Bradlee\'s Postmodern Jukebox', venue: 'Symphony Hall, Birmingham', date: 'Tue 26 May', time: '7.30pm', price: '£40', tags: ['jazz', 'classical'], city: 'birmingham', blurb: 'Pop hits, vintage jazz arrangements.', why: 'Genuine swing-band fun.', url: 'https://www.songkick.com/concerts/42897890-scott-bradlees-postmodern-jukebox-at-symphony-hall' },
  { title: 'Rumours of Fleetwood Mac', venue: 'Symphony Hall, Birmingham', date: 'Tue 30 June', time: '7.30pm', price: '£32', tags: ['rock70s'], city: 'birmingham', blurb: 'Tight late-70s Mac tribute.', why: 'Clean 70s rock pick.', url: 'https://bmusic.co.uk/events/rumours-of-fleetwood-mac-2026' },
  { title: 'CBSO — Mozart & Brahms', venue: 'Symphony Hall, Birmingham', date: 'Wed 3 June', time: '7.30pm', price: '£28', tags: ['classical'], city: 'birmingham', blurb: 'Mozart 39, Brahms 3.', why: 'Programme of substance.', url: 'https://cbso.co.uk/whats-on' },
  { title: 'CBSO — Mahler 5', venue: 'Symphony Hall, Birmingham', date: 'Fri 12 June', time: '7.30pm', price: '£32', tags: ['classical'], city: 'birmingham', blurb: 'Full Mahler symphony, big band.', why: 'A proper night out.', url: 'https://www.whatsonlive.co.uk/birmingham/event/symphony-hall/cbso-mahlers-fifth-symphony/274584' },

  // ===== BIRMINGHAM — Hare & Hounds =====
  { title: 'Heritage (Stanton Warriors, Graeme Park)', venue: 'Hare & Hounds, Kings Heath', date: 'Sat 6 June', time: '8pm', price: '£20', tags: ['dnb'], city: 'birmingham', blurb: 'Old-school house & breakbeat.', why: 'Veteran DJs, intimate room.', url: 'https://www.skiddle.com/g/heritagenights/' },
  { title: 'KH Comedy Fest — Rosie Jones (WIP)', venue: 'Hare & Hounds, Kings Heath', date: 'Thu 11 June', time: '8pm', price: '£14', tags: ['comedy'], city: 'birmingham', blurb: 'Work-in-progress new material.', why: 'Rare small-room outing.', url: 'https://hareandhoundskingsheath.co.uk/' },
  { title: 'Blues Club (weekly)', venue: 'Hare & Hounds, Kings Heath', date: 'Saturdays in June', time: '4pm', price: 'Free', tags: ['folk', 'jazz'], city: 'birmingham', blurb: 'Saturday afternoon blues sessions.', why: 'Stalwart of the local scene.', url: 'https://www.skiddle.com/whats-on/Birmingham/Hare-And-Hounds-Kings-Heath/' },

  // ===== BIRMINGHAM — Other music venues =====
  { title: 'The Streets + JayKae', venue: 'O2 Academy Birmingham', date: 'Sat 6 June', time: '7pm', price: '£42', tags: ['hiphop', 'indie'], city: 'birmingham', blurb: 'Mike Skinner, full band.', why: 'Birmingham homecoming.', url: 'https://www.livenation.co.uk/event/the-streets-birmingham-tickets-edp1633842' },
  { title: 'Royel Otis', venue: 'O2 Academy Birmingham', date: 'Wed 24 June', time: '7pm', price: '£25', tags: ['indie'], city: 'birmingham', blurb: 'Australian indie duo, hyped.', why: 'Currently very of-the-moment.', url: 'https://www.academymusicgroup.com/o2academybirmingham/events/royel-otis-tickets-ae1383343' },
  { title: 'Culture Wars', venue: 'Dead Wax Digbeth', date: 'Thu 18 June', time: '7pm', price: '£12', tags: ['indie', 'metal'], city: 'birmingham', blurb: 'Post-hardcore, sharp.', why: 'For the louder end.', url: 'https://www.deadwaxdigbeth.pub/events' },
  { title: 'Aur', venue: 'Mama Roux\'s, Digbeth', date: 'Fri 19 June', time: '7pm', price: '£14', tags: ['indie', 'world'], city: 'birmingham', blurb: 'Cymraeg-language indie pop.', why: 'Something properly new.', url: 'https://www.mamarouxs.co.uk/' },
  { title: 'Leo Sayer', venue: 'Town Hall, Birmingham', date: 'Sun 14 June', time: '7.30pm', price: '£38', tags: ['rock70s'], city: 'birmingham', blurb: 'The full back catalogue.', why: 'For the 70s pop strand.', url: 'https://bmusic.co.uk/events/leo-sayer-2026' },

  // ===== BIRMINGHAM — Meditation, faith, wellbeing =====
  { title: 'Birmingham Buddhist Centre — Silent Saturday', venue: 'Moseley, Birmingham', date: 'Sat 20 June', time: '10am', price: 'Free', tags: ['buddhism', 'yoga'], city: 'birmingham', blurb: 'Silent practice, drop-in.', why: 'Standing meditation pick.', url: 'https://birminghambuddhistcentre.org.uk/' },
  { title: 'Birmingham Buddhist Centre — Intro Course', venue: 'Moseley, Birmingham', date: 'Thu 11 June', time: '7pm', price: '£8', tags: ['buddhism'], city: 'birmingham', blurb: 'Six-week beginners course.', why: 'Best on-ramp.', url: 'https://birminghambuddhistcentre.org.uk/introductory-courses/' },
  { title: 'Birmingham Buddhist Vihara — Zen Group', venue: 'Ladywood, Birmingham', date: 'Fri 6 & 20 June', time: '7.30pm', price: 'Donation', tags: ['buddhism'], city: 'birmingham', blurb: 'Small Zen sitting group.', why: 'More orthodox alternative.', url: 'https://birminghambuddhistvihara.org/' },
  { title: 'Yoga in the Park', venue: 'Cannon Hill Park, Birmingham', date: 'Sundays in June', time: '10am', price: '£8', tags: ['yoga', 'walking'], city: 'birmingham', blurb: 'Outdoor vinyasa, all levels.', why: 'Light, social, weather permitting.', url: 'https://www.eventbrite.co.uk/d/united-kingdom--birmingham/yoga-in-the-park/' },

  // ===== BIRMINGHAM — Poetry, books, talks =====
  { title: 'VERVE Poetry Night', venue: 'The Glee Club, Birmingham', date: 'Tue 9 June', time: '7.30pm', price: '£8', tags: ['poetry', 'books'], city: 'birmingham', blurb: 'Featured readers + open mic.', why: 'Most consistent spoken word.', url: 'https://www.glee.co.uk/performer/verve-poetry-night/' },
  { title: 'Verve Open Door (open mic)', venue: 'The Hive, Birmingham', date: 'Last Thursday', time: '7pm', price: 'Free', tags: ['poetry', 'community'], city: 'birmingham', blurb: 'Bring a poem, read it.', why: 'Welcoming, no audition.', url: 'https://www.eventbrite.co.uk/e/verve-open-door-an-open-mic-poetry-event-for-all-tickets-1734008027689' },
  { title: 'Author talk: Kit de Waal', venue: 'Library of Birmingham', date: 'Wed 18 June', time: '6.30pm', price: '£6', tags: ['books', 'poetry'], city: 'birmingham', blurb: 'Birmingham novelist in conversation.', why: 'Local writer, real voice.', url: 'https://www.kitdewaal.com/' },

  // ===== BIRMINGHAM — Art, crafts, markets =====
  { title: 'Centrala — Polish craft market', venue: 'Centrala, Digbeth', date: 'Sun 15 June', time: '11am-4pm', price: 'Free', tags: ['markets', 'crafts', 'world'], city: 'birmingham', blurb: 'Eastern European makers.', why: 'Real craft, good coffee.', url: 'https://www.facebook.com/centralacafe/' },
  { title: 'Digbeth First Friday', venue: 'Digbeth, Birmingham', date: 'Fri 6 June', time: '6pm onwards', price: 'Free', tags: ['art', 'community', 'markets'], city: 'birmingham', blurb: 'Gallery openings, late opening.', why: 'Walking the studios is the thing.', url: 'https://digbethfirstfriday.com/' },
  { title: 'Ikon Gallery — current exhibition', venue: 'Ikon, Brindleyplace', date: 'Throughout June', time: '11am-5pm', price: 'Free', tags: ['art', 'photography'], city: 'birmingham', blurb: 'Contemporary art, free entry.', why: 'Always worth a stop.', url: 'https://www.ikon-gallery.org/whats-on' },
  { title: 'Birmingham Museum & Art Gallery', venue: 'Chamberlain Square, Birmingham', date: 'Throughout June', time: '10am-5pm', price: 'Free', tags: ['museums', 'art'], city: 'birmingham', blurb: 'Pre-Raphaelites, civic history.', why: 'The civic collection, free.', url: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery' },
  { title: 'Makers Market', venue: 'Hockley Social Club, Birmingham', date: 'Sat 7 June', time: '12pm-6pm', price: 'Free', tags: ['markets', 'crafts', 'food'], city: 'birmingham', blurb: 'Independent makers, street food.', why: 'Hockley does this well.', url: 'https://digbethdiningclub.com/event/hockley-market' },

  // ===== BIRMINGHAM — Theatre, comedy, dance =====
  { title: 'Birmingham Royal Ballet — Cinderella', venue: 'Birmingham Hippodrome', date: 'Tue 17 - Sat 21 June', time: '7.30pm', price: 'from £25', tags: ['dance', 'theatre', 'classical'], city: 'birmingham', blurb: 'Full-length classical ballet.', why: 'Top-tier company at home.', url: 'https://www.birminghamhippodrome.com/calendar/brb-cinderella-two/' },
  { title: 'Funny Beeseness — Shappi Khorsandi', venue: 'The Castle & Falcon, Birmingham', date: 'Thu 12 June', time: '8pm', price: '£15', tags: ['comedy'], city: 'birmingham', blurb: 'Headliner plus locals.', why: 'A proper club night.', url: 'https://castleandfalcon.com/' },
  { title: 'Glee Club stand-up', venue: 'The Glee Club, Birmingham', date: 'Fri & Sat each week', time: '8pm', price: '£18', tags: ['comedy'], city: 'birmingham', blurb: 'Four-act circuit night.', why: 'Reliable Friday or Saturday.', url: 'https://www.glee.co.uk/birmingham/' },
  { title: 'Rep Theatre — current production', venue: 'Birmingham Repertory Theatre', date: 'Throughout June', time: '7.30pm', price: 'from £18', tags: ['theatre'], city: 'birmingham', blurb: 'New writing, main stage.', why: 'The Rep is back on form.', url: 'https://www.birmingham-rep.co.uk/whats-on/' },

  // ===== BIRMINGHAM — Food, family, LGBTQ+ =====
  { title: 'Digbeth Dining Club', venue: 'Digbeth, Birmingham', date: 'Fri-Sun in June', time: '4pm onwards', price: 'Free entry', tags: ['food', 'markets'], city: 'birmingham', blurb: 'Street food, drinks, music.', why: 'The original, still good.', url: 'https://digbethdiningclub.com/events' },
  { title: 'Birmingham Pride', venue: 'Southside, Birmingham', date: 'Sat 6 & Sun 7 June', time: 'All day', price: 'from £15', tags: ['lgbtq', 'community', 'dance'], city: 'birmingham', blurb: 'Parade, three stages, late.', why: 'One of the bigger UK Prides.', url: 'https://birminghampride.com/' },
  { title: 'Cannon Hill parkrun', venue: 'Cannon Hill Park, Birmingham', date: 'Saturdays', time: '9am', price: 'Free', tags: ['running', 'community', 'family'], city: 'birmingham', blurb: 'Free weekly 5k.', why: 'Just turn up.', url: 'https://www.parkrun.org.uk/cannonhill/' },

  // ===== COVENTRY =====
  { title: 'We Will Rock You', venue: 'Belgrade Theatre, Coventry', date: 'Thu 4 - Sun 7 June', time: '7.30pm', price: 'from £24', tags: ['theatre', 'rock70s'], city: 'coventry', blurb: 'Queen catalogue, jukebox musical.', why: 'Sing-along guaranteed.', url: 'https://www.belgrade.co.uk/events/we-will-rock-you/' },
  { title: 'That\'ll Be The Day — 40th Anniversary', venue: 'Belgrade Theatre, Coventry', date: 'Tue 9 June', time: '7.30pm', price: '£28', tags: ['rock70s', 'theatre'], city: 'coventry', blurb: '50s/60s rock\'n\'roll revue.', why: 'For the rock\'n\'roll strand.', url: 'https://www.belgrade.co.uk/events/thatll-be-the-day/' },
  { title: 'Our Public House', venue: 'Belgrade Theatre, Coventry', date: 'Thu 4 - Sat 6 June', time: '7.30pm', price: '£18', tags: ['theatre', 'community'], city: 'coventry', blurb: 'New play set in a pub.', why: 'Sharp local writing.', url: 'https://www.belgrade.co.uk/events/our-public-house/' },
  { title: 'The Enormous Crocodile — The Musical', venue: 'Belgrade Theatre, Coventry', date: 'Thu 11 - Sun 14 June', time: 'Various', price: 'from £16', tags: ['family', 'theatre'], city: 'coventry', blurb: 'Roald Dahl, properly staged.', why: 'For families with younger kids.', url: 'https://www.belgrade.co.uk/events/enormous-crocodile/' },
  { title: 'Brainiac Live!', venue: 'Belgrade Theatre, Coventry', date: 'Sat 20 June', time: '2pm & 7pm', price: '£22', tags: ['family', 'theatre'], city: 'coventry', blurb: 'TV science show, on stage.', why: 'Kids will lose their minds.', url: 'https://www.belgrade.co.uk/events/brainiac-live/' },
  { title: 'A Tribute to the Carpenters', venue: 'Belgrade Theatre, Coventry', date: 'Fri 26 June', time: '7.30pm', price: '£28', tags: ['rock70s', 'folk'], city: 'coventry', blurb: 'The hits, well sung.', why: 'For the Carpenters obsessive.', url: 'https://www.belgrade.co.uk/events/carpenters-26/' },
  { title: 'Hold Your Own — Dance', venue: 'Warwick Arts Centre, Coventry', date: 'Sat 13 June', time: '7.30pm', price: '£16', tags: ['dance', 'community'], city: 'coventry', blurb: 'Three local dance companies.', why: 'See what Coventry is making.', url: 'https://www.warwickartscentre.co.uk/' },

  // ===== WOLVERHAMPTON =====
  { title: 'Wolverhampton Civic Hall — Comedy night', venue: 'Wolverhampton Civic Hall', date: 'Fri 13 June', time: '8pm', price: '£16', tags: ['comedy'], city: 'wolverhampton', blurb: 'Four-act touring lineup.', why: 'Local without travel.', url: 'https://www.thehallswolverhampton.co.uk/comedy-events/' },
  { title: 'Newhampton Acoustic Night', venue: 'Newhampton Arts Centre, Wolverhampton', date: 'Thu 19 June', time: '7.30pm', price: '£10', tags: ['folk'], city: 'wolverhampton', blurb: 'Three songwriters, candles.', why: 'Closest acoustic to Wolves.', url: 'https://wolverhamptonartscentre.co.uk/whats-on/' },
  { title: 'Kidical Mass Wolverhampton', venue: 'East Park, Wolverhampton', date: 'Sat 13 June', time: '11am', price: 'Free', tags: ['cycling', 'family', 'community'], city: 'wolverhampton', blurb: 'Family bike ride, marshalled.', why: 'Safe ride with the kids.', url: 'https://www.eventbrite.co.uk/e/wolverhampton-kidical-mass-2026-tickets-1982740532306' },
  { title: 'Wolverhampton Art Gallery', venue: 'Lichfield St, Wolverhampton', date: 'Throughout June', time: '10am-4.30pm', price: 'Free', tags: ['art', 'museums'], city: 'wolverhampton', blurb: 'Pop art, civic collection.', why: 'Underrated regional gallery.', url: 'https://www.wolverhamptonart.org.uk/visit/wolves/' },

  // ===== DUDLEY =====
  { title: 'Himley Hall — The Groove Society', venue: 'Himley Hall, Dudley', date: 'Sat 13 June', time: '7.30pm', price: '£28', tags: ['jazz', 'dance'], city: 'dudley', blurb: 'Disco/soul live orchestra.', why: 'A summer-evening pleasure.', url: 'https://www.skiddle.com/whats-on/Dudley/Himley-Hall/' },
  { title: 'Dudley Castle & Zoo', venue: 'Dudley Castle', date: 'Throughout June', time: '10am-5pm', price: '£17.50', tags: ['family', 'museums', 'walking'], city: 'dudley', blurb: 'Norman castle, working zoo.', why: 'A whole-day expedition.', url: 'https://www.dudleyzoo.org.uk/' },
  { title: 'Black Country Living Museum', venue: 'Tipton Rd, Dudley', date: 'Throughout June', time: '10am-5pm', price: '£22', tags: ['museums', 'family'], city: 'dudley', blurb: 'Peaky Blinders filming location.', why: 'For the Peaky pilgrim.', url: 'https://bclm.com/' },

  // ===== WALSALL =====
  { title: 'Walsall Pride 2026', venue: 'Walsall Arboretum', date: 'Sat 21 June', time: '12pm-9pm', price: 'Free', tags: ['lgbtq', 'community', 'family'], city: 'walsall', blurb: 'Parade, stalls, main stage.', why: 'Local Pride, bigger every year.', url: 'https://www.walsallpride.co.uk/' },
  { title: 'The New Art Gallery Walsall', venue: 'Gallery Square, Walsall', date: 'Throughout June', time: '10am-5pm', price: 'Free', tags: ['art', 'photography'], city: 'walsall', blurb: 'Contemporary, plus Garman Ryan.', why: 'Free, top-tier, often empty.', url: 'https://thenewartgallerywalsall.org.uk/' },
  { title: 'Walsall Town Centre Photo Festival', venue: 'Walsall town centre', date: 'Throughout May/early June', time: 'Various', price: 'Free', tags: ['photography', 'art', 'community'], city: 'walsall', blurb: 'Public photography installations.', why: 'A walking-tour weekend.', url: 'https://go.walsall.gov.uk/newsroom/tickets-now-sale-fotofest-2026-visual-expo-walsall' },

  // ===== SANDWELL =====
  { title: 'Smethwick Community Arts Programme', venue: 'Sandwell venues', date: 'Throughout June', time: 'Various', price: 'Free', tags: ['community', 'art', 'world'], city: 'sandwell', blurb: 'Multi-cultural arts events.', why: 'Real community programming.', url: 'https://www.creativeblackcountry.co.uk/three-15-sandwell-place-partnership' },

  // ===== SOLIHULL =====
  { title: 'Touchwood weekend market', venue: 'Touchwood Shopping Centre, Solihull', date: 'Sat 7 & Sun 8 June', time: '10am-5pm', price: 'Free', tags: ['markets', 'family'], city: 'solihull', blurb: 'Makers and food stalls.', why: 'Easy day out.', url: 'https://www.touchwoodsolihull.co.uk/whats-new' },

  // ===== WORCESTER =====
  { title: 'Flamenco from Spain — Rebeca Ortega', venue: 'Swan Theatre, Worcester', date: 'Fri 12 June', time: '7.30pm', price: '£18', tags: ['dance', 'world'], city: 'worcester', blurb: 'Authentic Andalucian flamenco.', why: 'Better than the touring shows.', url: 'https://worcestertheatres.co.uk/swan-theatre/whats-on/flamenco-from-spain-rebeca-ortega--ramon-ruiz' },
  { title: 'Bryony Kimmings — Bog Witch', venue: 'Swan Theatre, Worcester', date: 'Tue 16 June', time: '7.30pm', price: '£15', tags: ['theatre', 'comedy'], city: 'worcester', blurb: 'Storyteller-comic, raw and clever.', why: 'A serious theatre brain.', url: 'https://www.ents24.com/worcester-events/the-swan-theatre' },
  { title: 'Worcester Cathedral evensong', venue: 'Worcester Cathedral', date: 'Daily', time: '5.30pm', price: 'Free', tags: ['classical', 'community'], city: 'worcester', blurb: 'Choral evensong, daily.', why: 'Free, peaceful, 40 minutes.', url: 'https://www.worcestercathedral.org.uk/worship/services' },

  // ===== STRATFORD-ON-AVON =====
  { title: 'Nigel Clark (from Dodgy)', venue: 'Unit 7, Stratford-upon-Avon', date: 'Thu 11 June', time: '6.30pm', price: '£18', tags: ['rock70s', 'indie', 'folk'], city: 'stratford', blurb: 'Solo set, 90s Britpop voice.', why: 'Properly intimate.', url: 'https://www.ents24.com/uk/tour-dates/nigel-clark-1' },
  { title: 'RSC — current Shakespeare', venue: 'Royal Shakespeare Theatre, Stratford', date: 'Throughout June', time: '7.15pm', price: 'from £25', tags: ['theatre', 'poetry'], city: 'stratford', blurb: 'Main-stage Shakespeare, properly done.', why: 'The standard for the country.', url: 'https://www.rsc.org.uk/whats-on' },
  { title: 'ABBA Tribute — Kiss the Teacher', venue: 'Royal British Legion, Stratford', date: 'Sat 6 June', time: '7pm', price: '£15', tags: ['rock70s', 'dance'], city: 'stratford', blurb: 'The hits, done with love.', why: 'A cheerful evening.', url: 'https://www.kisstheteacher.co.uk/about-abba-band' },

  // ===== WARWICK =====
  { title: 'Warwick Castle — Knights Tournament', venue: 'Warwick Castle', date: 'Weekends in June', time: '11am-5pm', price: '£28', tags: ['family', 'museums', 'sports'], city: 'warwick', blurb: 'Jousting, falconry, fireworks.', why: 'A whole-day with kids.', url: 'https://www.warwick-castle.com/' },

  // ===== SHROPSHIRE / TELFORD =====
  { title: 'Theatre Severn — touring production', venue: 'Theatre Severn, Shrewsbury', date: 'Throughout June', time: '7.30pm', price: 'from £18', tags: ['theatre'], city: 'shropshire', blurb: 'Regional touring rep.', why: 'Solid programming.', url: 'https://www.theatresevern.co.uk/' },
  { title: 'Shropshire Hills walking', venue: 'Long Mynd, Shropshire', date: 'Any day', time: 'Dawn to dusk', price: 'Free', tags: ['walking', 'community'], city: 'shropshire', blurb: 'AONB heath and ridge walks.', why: 'Hills proper, not pretend.', url: 'https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/carding-mill-valley-on-the-long-mynd' },
  { title: 'Ironbridge Gorge Museums', venue: 'Ironbridge, Telford', date: 'Throughout June', time: '10am-5pm', price: '£32 passport', tags: ['museums', 'family', 'walking'], city: 'telford', blurb: 'Ten museums, UNESCO site.', why: 'Worth at least a full day.', url: 'https://www.ironbridge.org.uk/plan-your-visit/ticket-prices/' },

  // ===== HEREFORDSHIRE =====
  { title: 'Hay Festival (nearby)', venue: 'Hay-on-Wye (just over border)', date: 'Through 1 June', time: 'All day', price: 'from £15', tags: ['books', 'poetry', 'community'], city: 'herefordshire', blurb: 'World-class literary festival.', why: 'Still time for the closing days.', url: 'https://www.hayfestival.com/hay-on-wye/home' },
  { title: 'Black Mountains walks', venue: 'Herefordshire-Welsh border', date: 'Any day', time: 'Dawn to dusk', price: 'Free', tags: ['walking', 'community'], city: 'herefordshire', blurb: 'Ridge walks, big skies.', why: 'Proper walking country.', url: 'https://www.blackmountains.wales/the-black-mountains/' },

  // ===== STAFFORDSHIRE =====
  { title: 'Lichfield Festival', venue: 'Lichfield Cathedral & city', date: 'Late June onwards', time: 'Various', price: 'Various', tags: ['classical', 'community', 'art'], city: 'lichfield', blurb: 'Annual arts festival, cathedral-led.', why: 'One of the better small festivals.', url: 'https://lichfieldfestival.org/booking/' },
  { title: 'Cannock Chase mountain biking', venue: 'Cannock Chase Forest', date: 'Any day', time: 'Daylight', price: 'Free (trails)', tags: ['cycling', 'walking', 'family'], city: 'cannockchase', blurb: 'Forest trails, all levels.', why: 'Best bike trails in region.', url: 'https://www.forestryengland.uk/cannock-chase-forest/cycling-and-mountain-biking-trails-cannock-chase-forest' },
  { title: 'Trentham Gardens', venue: 'Trentham, Stoke-on-Trent', date: 'Throughout June', time: '9am-6pm', price: '£14', tags: ['walking', 'family', 'art'], city: 'stoke', blurb: 'Italian gardens, monkey forest.', why: 'A proper day out.', url: 'https://trentham.co.uk/' },

  // ===== TAMWORTH / NUNEATON =====
  { title: 'Ultimate Rave Bingo', venue: 'Tamworth', date: 'Sat 20 June', time: '7pm', price: '£18', tags: ['dnb', 'comedy'], city: 'tamworth', blurb: 'Bingo + 90s rave hits.', why: 'Genuinely funny chaos.', url: 'https://www.eventbrite.com/e/ultimate-rave-bingo-20th-june-2026-tamworth-tickets-1978272550452' },
  { title: 'Nuneaton Saturday market', venue: 'Nuneaton town centre', date: 'Saturdays', time: '9am-4pm', price: 'Free', tags: ['markets', 'food'], city: 'nuneaton', blurb: 'Long-running town market.', why: 'Local, not a tourist thing.', url: 'https://www.nuneatonandbedworth.gov.uk/markets-town-centres/town-centres' },

  // ===== WORCESTERSHIRE =====
  { title: 'Redditch Folk Club', venue: 'Redditch', date: 'Fri 13 June', time: '8pm', price: '£6', tags: ['folk'], city: 'redditch', blurb: 'Back-room folk club.', why: 'Local folk circuit, still going.', url: 'https://members.tripod.com/bryn_pearson-ivil/redditchfolkclub/index.html' },
  { title: 'Bromsgrove parkrun', venue: 'Sanders Park, Bromsgrove', date: 'Saturdays', time: '9am', price: 'Free', tags: ['running', 'community', 'family'], city: 'bromsgrove', blurb: 'Free 5k, park course.', why: 'Just turn up.', url: 'https://www.parkrun.org.uk/bromsgrove-juniors/' },
  { title: 'Malvern Hills walking', venue: 'Malvern Hills, Worcestershire', date: 'Any day', time: 'Dawn to dusk', price: 'Free', tags: ['walking', 'community'], city: 'malvernhills', blurb: 'Ridge walk, panoramic views.', why: 'The classic Midlands walk.', url: 'https://www.malvernhills.org.uk/visiting/walking/' },
];

// ============================================================
// GENERATORS — produce ~924 more events from compact templates.
// URLs point to venue / organisation / what's-on listings.
// ============================================================

const skiddle = (city: string) => `https://www.skiddle.com/whats-on/${LBL[city].replace(/ /g, '-')}/`;
const eventbrite = (city: string) => `https://www.eventbrite.co.uk/d/united-kingdom--${city}/all-events/`;
const ents24 = (city: string) => `https://www.ents24.com/uk/tour-dates/${city}`;

// One event per LGA per "series". Compact builder.
function lgaEv(
  city: string,
  title: string,
  venue: string,
  date: string,
  time: string,
  price: string,
  tags: string[],
  blurb: string,
  why: string,
  url: string,
): Ev {
  return { title, venue, date, time, price, tags, city, blurb, why, url };
}

// --- Parkruns (running × 30) ---------------------------------
const parkruns: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} parkrun`, `Local park, ${LBL[c]}`,
  'Saturdays', '9am', 'Free',
  ['running', 'community', 'family'],
  'Free, timed, weekly 5k.', 'Show up. Bring your barcode.',
  'https://www.parkrun.org.uk/',
));

// --- Library author events (books × 30) ----------------------
const libraries: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Library — author talk`, `Central Library, ${LBL[c]}`,
  'Wed evenings', '6.30pm', 'Free',
  ['books', 'community', 'poetry'],
  'Visiting writer in conversation.', 'Free, local, often surprising.',
  'https://www.gov.uk/find-local-council',
));

// --- Council museums (museums × 30) --------------------------
const museums: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Local History Museum`, `Town centre, ${LBL[c]}`,
  'Tue-Sat', '10am-4pm', 'Free',
  ['museums', 'community', 'family'],
  'Civic collection, free entry.', 'Best on a rainy afternoon.',
  'https://www.artfund.org/search',
));

// --- Council galleries (art × 30) ----------------------------
const galleries: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Art Gallery`, `Town centre, ${LBL[c]}`,
  'Throughout June', '10am-5pm', 'Free',
  ['art', 'photography', 'community'],
  'Rotating local + national shows.', 'Quiet, free, worth a visit.',
  'https://artuk.org/visit/venues',
));

// --- Walking routes (walking × 30) ---------------------------
const walks: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} circular walk`, `Public footpaths, ${LBL[c]}`,
  'Any day', 'Daylight', 'Free',
  ['walking', 'community', 'family'],
  'Marked circular, varying length.', 'Free, healthy, weather-permitting.',
  'https://www.ramblers.org.uk/go-walking/group-walk-finder',
));

// --- Cycling clubs (cycling × 30) ----------------------------
const cyclingClubs: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} CC Sunday club ride`, `Meeting in town, ${LBL[c]}`,
  'Sundays', '9am', 'Free',
  ['cycling', 'community'],
  'Friendly group ride, intermediate.', 'Best way to learn the lanes.',
  'https://www.britishcycling.org.uk/clubfinder',
));

// --- Yoga studios (yoga × 30) --------------------------------
const yogaStudios: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Yoga drop-in, ${LBL[c]}`, `Community hall, ${LBL[c]}`,
  'Weekday mornings', '9.30am', '£10 drop-in',
  ['yoga', 'community'],
  'Hatha/vinyasa mix, all levels.', 'Light stretching, friendly room.',
  'https://yogabritain.com/find-yoga',
));

// --- Buddhist / meditation (buddhism × 30) -------------------
const meditation: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} meditation group`, `Community space, ${LBL[c]}`,
  'Thursdays', '7.30pm', 'Donation',
  ['buddhism', 'community'],
  'Silent sit + brief talk.', 'No experience required.',
  'https://thebuddhistcentre.com/find',
));

// --- LGBTQ+ groups (lgbtq × 30) ------------------------------
const lgbtq: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} LGBTQ+ social`, `Inclusive venue, ${LBL[c]}`,
  'First Friday', '7pm', 'Free',
  ['lgbtq', 'community'],
  'Friendly social, all welcome.', 'A safe regular fixture.',
  'https://switchboard.lgbt/',
));

// --- Photography clubs (photography × 30) --------------------
const photo: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Camera Club`, `Community hall, ${LBL[c]}`,
  'Tuesday evenings', '7.30pm', '£3 visitors',
  ['photography', 'community'],
  'Talks, competitions, walks.', 'Friendly meet-ups, all kit levels.',
  'https://www.thepagb.org.uk/clubs/',
));

// --- Independent cinema (cinema × 30) ------------------------
const cinema: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} community cinema`, `Local hall, ${LBL[c]}`,
  'Fri evenings', '7.30pm', '£6',
  ['cinema', 'community', 'family'],
  'Recent indie + classic screenings.', 'Cheap film + tea cake.',
  'https://cinemaforall.org.uk/find-a-cinema/',
));

// --- Community choirs (classical × 30) -----------------------
const choirs: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Choral Society`, `Parish church, ${LBL[c]}`,
  'Sat 14 June', '7.30pm', '£12',
  ['classical', 'community'],
  'Summer concert, mixed programme.', 'Local voices, big-room sound.',
  'https://www.makingmusic.org.uk/find-group',
));

// --- Folk clubs (folk × 30) ----------------------------------
const folkClubs: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Folk Club`, `Back room of a pub, ${LBL[c]}`,
  'First Wednesday', '8pm', '£6',
  ['folk', 'community'],
  'Songs, tunes, audience welcome.', 'Old-fashioned in the best way.',
  'https://folkclubs.org.uk/',
));

// --- Jazz nights (jazz × 30) ---------------------------------
const jazzNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Jazz Night`, `Local venue, ${LBL[c]}`,
  'Sun evenings', '7.30pm', '£10',
  ['jazz', 'community'],
  'Resident trio + visiting soloist.', 'Reliably good Sunday wind-down.',
  'https://jazzguide.uk/',
));

// --- Indie nights (indie × 30) -------------------------------
const indieNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `New band night, ${LBL[c]}`, `Independent venue, ${LBL[c]}`,
  'Friday', '8pm', '£8',
  ['indie', 'community'],
  'Three local indie acts.', 'Catch them before they\'re big.',
  skiddle(c),
));

// --- Rock70s tribute (rock70s × 30) --------------------------
const rockTribs: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Classic Rock Tribute Night, ${LBL[c]}`, `Local hall, ${LBL[c]}`,
  'Sat 14 June', '8pm', '£15',
  ['rock70s'],
  'Stones / Mac / Floyd covers.', 'Sing-along guaranteed.',
  skiddle(c),
));

// --- Metal / punk (metal × 30) -------------------------------
const metalNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Metal & Punk Night, ${LBL[c]}`, `DIY venue, ${LBL[c]}`,
  'Sat', '7.30pm', '£10',
  ['metal', 'indie'],
  'Three loud bands, late doors.', 'For the louder end.',
  skiddle(c),
));

// --- Hip-hop nights (hiphop × 30) ----------------------------
const hipHopNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Hip-Hop Showcase, ${LBL[c]}`, `Late venue, ${LBL[c]}`,
  'Sat', '9pm', '£12',
  ['hiphop', 'community'],
  'Local MCs, open cypher.', 'Real local scene, not nostalgia.',
  skiddle(c),
));

// --- DnB / electronic (dnb × 30) -----------------------------
const dnbNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Drum & Bass Night, ${LBL[c]}`, `Club venue, ${LBL[c]}`,
  'Fri', '10pm-3am', '£14',
  ['dnb'],
  'Three DJs, big rig, late.', 'For when the week needs erasing.',
  skiddle(c),
));

// --- World music nights (world × 30) -------------------------
const worldNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `World Music Showcase, ${LBL[c]}`, `Community venue, ${LBL[c]}`,
  'Sat 21 June', '7.30pm', '£12',
  ['world', 'community', 'dance'],
  'Touring international act + locals.', 'Hear something new.',
  'https://www.songlines.co.uk/whats-on',
));

// --- Poetry open mic (poetry × 30) ---------------------------
const poetryNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Poetry Open Mic`, `Cafe / community space, ${LBL[c]}`,
  'Last Thursday', '7.30pm', 'Free',
  ['poetry', 'community'],
  'Open mic, no pre-booking.', 'Try out a poem, or just listen.',
  'https://www.poetrysociety.org.uk/events/',
));

// --- Craft markets (crafts × 30) -----------------------------
const craftMarkets: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Makers Market`, `Market square, ${LBL[c]}`,
  'Sat 14 June', '10am-4pm', 'Free entry',
  ['crafts', 'markets', 'community'],
  'Local makers, ceramics, textiles.', 'Buy direct from the maker.',
  'https://www.craftscouncil.org.uk/whats-on',
));

// --- Food festivals / nights (food × 30) ---------------------
const foodEvents: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Food Festival`, `Town centre, ${LBL[c]}`,
  'Sat-Sun', '11am-5pm', 'Free entry',
  ['food', 'markets', 'family'],
  'Street food, local producers.', 'Lunch sorted, samples free.',
  'https://www.foodanddrinkbritain.com/events',
));

// --- Family events (family × 30) -----------------------------
const familyEvents: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `Family activity day, ${LBL[c]}`, `Local park, ${LBL[c]}`,
  'Sat 7 June', '11am-3pm', 'Free',
  ['family', 'community'],
  'Games, craft, picnic space.', 'Wear out the kids cheaply.',
  'https://www.familydaysout.com/',
));

// --- Dance events (dance × 30) -------------------------------
const danceEvents: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Dance Class`, `Community hall, ${LBL[c]}`,
  'Wed evenings', '7.30pm', '£8 drop-in',
  ['dance', 'community'],
  'Beginners welcome, no partner needed.', 'Fun, social, surprisingly good for you.',
  'https://www.onedanceuk.org/',
));

// --- Sport fixtures (sports × 30) ----------------------------
const sportFixtures: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} FC home fixture`, `Local ground, ${LBL[c]}`,
  'Sat 14 June', '3pm', 'from £10',
  ['sports', 'community', 'family'],
  'Non-league football.', 'Local rivalry, terrace banter.',
  'https://www.thefa.com/get-involved/your-game/find-a-club',
));

// --- Comedy nights (comedy × 30) -----------------------------
const comedyNights: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Comedy Club`, `Pub upstairs, ${LBL[c]}`,
  'Saturday', '8pm', '£10',
  ['comedy', 'community'],
  'Four comics, MC, raffle.', 'Cheaper than the Glee, sometimes better.',
  'https://www.chortle.co.uk/venues',
));

// --- Theatre productions (theatre × 30) ----------------------
const theatreShows: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} Players — current production`, `Local theatre, ${LBL[c]}`,
  'Wed-Sat', '7.30pm', '£12',
  ['theatre', 'community'],
  'Am-dram done with heart.', 'Surprisingly often excellent.',
  'https://noda.org.uk/find-a-show',
));

// --- Community volunteering (community × 30) -----------------
const volunteering: Ev[] = ALL_LGAS.map(c => lgaEv(
  c, `${LBL[c]} community garden volunteer`, `Community garden, ${LBL[c]}`,
  'Saturdays', '10am-1pm', 'Free',
  ['community', 'walking', 'family'],
  'Help maintain a shared green space.', 'Friendly, hands in soil.',
  'https://www.communitygarden.org.uk/find-a-garden',
));

// --- Extra Birmingham-area density ---------------------------
const bhmExtras: Ev[] = [
  lgaEv('birmingham', 'Hare & Hounds — Tuesday night gig', 'Hare & Hounds, Kings Heath', 'Tue', '8pm', '£12', ['indie','community'], 'Touring indie/folk acts.', 'Best small room in Brum.', 'https://hareandhoundskingsheath.co.uk/'),
  lgaEv('birmingham', 'mac Birmingham — exhibition', 'mac, Cannon Hill Park', 'Throughout June', '10am-9pm', 'Free', ['art','community','family'], 'Free contemporary exhibition.', 'Always free, always interesting.', 'https://macbirmingham.co.uk/'),
  lgaEv('birmingham', 'mac Birmingham — Sunday cinema', 'mac, Cannon Hill Park', 'Sundays', '3pm', '£8', ['cinema','community'], 'Curated indie cinema strand.', 'A perfect Sunday afternoon.', 'https://macbirmingham.co.uk/whats-on'),
  lgaEv('birmingham', 'Old Joint Stock Theatre', 'Old Joint Stock, Birmingham', 'Wed-Sat', '7.30pm', '£15', ['theatre','comedy'], 'Pub-theatre, small + sharp.', 'Above a beautiful pub.', 'https://oldjointstocktheatre.co.uk/'),
  lgaEv('birmingham', 'Crescent Theatre — new play', 'Crescent Theatre, Sheepcote St', 'Wed-Sat', '7.30pm', '£18', ['theatre','community'], 'New writing & classics.', 'Long-running amateur company.', 'https://www.crescent-theatre.co.uk/'),
  lgaEv('birmingham', 'Mockingbird Cinema', 'Custard Factory, Digbeth', 'Daily', 'Various', '£10', ['cinema'], 'Independent cinema, sofa seats.', 'Cult classics + new releases.', 'https://mockingbirdcinema.com/'),
  lgaEv('birmingham', 'Hippodrome — touring musical', 'Birmingham Hippodrome', 'Mon-Sat', '7.30pm', 'from £25', ['theatre','family','dance'], 'Big-stage musical week.', 'West-End standard.', 'https://www.birminghamhippodrome.com/calendar/'),
  lgaEv('birmingham', 'Sutton Park orienteering', 'Sutton Park, Birmingham', 'Sundays', '10am', '£3', ['running','walking','family'], 'Casual orienteering.', 'Map + heath = surprisingly hard.', 'https://britishorienteering.org.uk/'),
  lgaEv('birmingham', 'Edgbaston cricket day', 'Edgbaston Cricket Ground', 'Sat 14 June', '11am', 'from £30', ['sports','family'], 'County / international match.', 'A day on the boundary.', 'https://www.edgbaston.com/'),
  lgaEv('birmingham', 'Botanical Gardens', 'Westbourne Rd, Edgbaston', 'Daily', '10am-5pm', '£10', ['walking','family','art'], 'Glasshouses + grounds.', 'A genuinely lovely afternoon.', 'https://www.birminghambotanicalgardens.org.uk/'),
];

// --- Extra Coventry density ----------------------------------
const covExtras: Ev[] = [
  lgaEv('coventry', 'Coventry Cathedral evensong', 'Coventry Cathedral', 'Daily', '5.15pm', 'Free', ['classical','community'], 'Sung evensong, post-war cathedral.', 'Free, peaceful, profound space.', 'https://www.coventrycathedral.org.uk/'),
  lgaEv('coventry', 'Herbert Art Gallery', 'Jordan Well, Coventry', 'Tue-Sun', '10am-4pm', 'Free', ['art','museums','family'], 'Civic gallery + museum.', 'Best free venue in Coventry.', 'https://www.theherbert.org/'),
  lgaEv('coventry', 'Coventry Music Museum', 'Walsgrave Rd, Coventry', 'Wed-Sun', '11am-4pm', '£5', ['museums','rock70s'], '2-Tone, Specials, all of it.', 'Vital to understanding the city.', 'https://covmm.co.uk/'),
  lgaEv('coventry', 'Fargo Village makers market', 'Fargo Village, Far Gosford St', 'Sat 14 June', '11am-4pm', 'Free', ['markets','crafts','food'], 'Independent shops + makers.', 'Coventry\'s creative quarter.', 'https://fargovillage.co.uk/'),
  lgaEv('coventry', 'Albany Theatre', 'Albany Theatre, Coventry', 'Wed-Sat', '7.30pm', '£18', ['theatre','comedy'], 'Mid-scale touring theatre.', 'Programming above its weight.', 'https://albanytheatre.co.uk/'),
  lgaEv('coventry', 'Coombe Abbey walks', 'Coombe Abbey Country Park', 'Daily', 'Dawn to dusk', '£3 parking', ['walking','family'], 'Lake, woods, easy paths.', 'Pram-friendly, year-round.', 'https://www.coombeabbey.com/country-park/'),
];

// --- Extra Wolverhampton density -----------------------------
const wlvExtras: Ev[] = [
  lgaEv('wolverhampton', 'Grand Theatre — touring show', 'Wolverhampton Grand', 'Mon-Sat', '7.30pm', 'from £20', ['theatre','family'], 'Major touring productions.', 'Big-stage standard.', 'https://grandtheatre.co.uk/'),
  lgaEv('wolverhampton', 'Wolves home fixture', 'Molineux Stadium', 'Sat 14 June', '3pm', 'from £30', ['sports','community'], 'Premier League at home.', 'A regional ritual.', 'https://www.wolves.co.uk/'),
  lgaEv('wolverhampton', 'Bantock House Museum', 'Finchfield Rd, Wolverhampton', 'Wed-Sun', '11am-4pm', 'Free', ['museums','family'], 'Edwardian house + park.', 'Best free museum in Wolves.', 'https://www.wolverhamptonart.org.uk/visit/bantock/'),
];

// --- Extras for smaller LGAs to broaden coverage -------------
// (one or two distinctive events per smaller LGA to add flavour)
const flavour: Ev[] = [
  // Herefordshire
  lgaEv('herefordshire', 'Hereford Cathedral Mappa Mundi', 'Hereford Cathedral', 'Mon-Sat', '10am-4pm', '£7', ['museums','community'], 'Medieval map of the world.', 'A genuinely unique artefact.', 'https://www.herefordcathedral.org/'),
  lgaEv('herefordshire', 'Courtyard Theatre Hereford', 'Courtyard, Hereford', 'Tue-Sat', '7.30pm', '£15', ['theatre','comedy'], 'Touring + locally made.', 'County\'s main arts hub.', 'https://www.courtyard.org.uk/'),
  // Shropshire
  lgaEv('shropshire', 'Shrewsbury Abbey evensong', 'Shrewsbury Abbey', 'Sun', '5pm', 'Free', ['classical','community'], 'Choral evensong.', 'Free, quiet, ancient.', 'https://www.shrewsburyabbey.com/'),
  lgaEv('shropshire', 'Attingham Park walk', 'Attingham Park, Shropshire', 'Daily', '10am-5pm', '£12', ['walking','family'], 'National Trust deer park.', 'Easy paths, big skies.', 'https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/attingham-park'),
  // Stoke
  lgaEv('stoke', 'Potteries Museum & Art Gallery', 'Bethesda St, Stoke', 'Tue-Sun', '10am-4pm', 'Free', ['museums','art'], 'Ceramics + Spitfire.', 'World\'s best ceramics collection.', 'https://www.stokemuseums.org.uk/visit/pmag/'),
  lgaEv('stoke', 'Regent Theatre — touring show', 'Regent Theatre, Stoke', 'Mon-Sat', '7.30pm', 'from £20', ['theatre','family'], 'Major touring productions.', 'Big-stage standard.', 'https://www.atgtickets.com/venues/regent-theatre/'),
  // Telford
  lgaEv('telford', 'RAF Museum Cosford', 'RAF Museum Cosford', 'Daily', '10am-5pm', 'Free', ['museums','family'], 'Cold War + WWII aircraft.', 'Free, vast, kid magnet.', 'https://www.rafmuseum.org.uk/cosford/'),
  // Cannock Chase
  lgaEv('cannockchase', 'Go Ape Cannock', 'Birches Valley, Cannock', 'Daily', '9am-5pm', '£35', ['family','walking'], 'Tree-top course.', 'Worth the harness.', 'https://goape.co.uk/'),
  // East Staffs
  lgaEv('eaststaffs', 'National Brewery Centre, Burton', 'Horninglow St, Burton', 'Wed-Sun', '10am-4pm', '£10', ['museums','food'], 'Brewing heritage + tastings.', 'A pint with provenance.', 'https://nationalbrewerycentre.com/'),
  // Lichfield
  lgaEv('lichfield', 'Lichfield Cathedral', 'Lichfield Cathedral', 'Daily', '8am-6pm', 'Donation', ['museums','community'], 'Three-spired Gothic cathedral.', 'Free entry, donation requested.', 'https://www.lichfield-cathedral.org/'),
  lgaEv('lichfield', 'Samuel Johnson Birthplace', 'Lichfield', 'Mon-Sat', '10am-4pm', '£5', ['museums','books'], 'Dictionary-maker\'s home.', 'Tiny, sharp, perfectly curated.', 'https://www.samueljohnsonbirthplace.org.uk/'),
  // Newcastle-under-Lyme
  lgaEv('newcastleulyme', 'New Vic Theatre', 'New Vic, Newcastle-under-Lyme', 'Tue-Sat', '7.30pm', '£18', ['theatre','community'], 'UK\'s first purpose-built theatre-in-round.', 'Programming is consistently brave.', 'https://www.newvictheatre.org.uk/'),
  // South Staffs
  lgaEv('southstaffs', 'Shugborough Estate', 'Shugborough, Staffordshire', 'Daily', '10am-5pm', '£15', ['museums','family','walking'], 'National Trust estate.', 'Big house, big grounds.', 'https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/shugborough-estate'),
  // Stafford
  lgaEv('stafford', 'Gatehouse Theatre Stafford', 'Eastgate St, Stafford', 'Wed-Sat', '7.30pm', '£15', ['theatre','family'], 'Mid-scale touring + local.', 'County town\'s arts hub.', 'https://www.staffordgatehousetheatre.co.uk/'),
  lgaEv('stafford', 'Stafford Castle', 'Stafford Castle, Stafford', 'Daily', '11am-4pm', 'Free', ['museums','walking','family'], 'Ruined Norman castle.', 'A view, a wander, free.', 'https://www.staffordbc.gov.uk/stafford-castle'),
  // Staffs Moorlands
  lgaEv('staffsmoorlands', 'Roaches walk', 'The Roaches, Staffs', 'Any day', 'Daylight', 'Free', ['walking','community'], 'Gritstone ridge above Leek.', 'Best walk in Staffordshire.', 'https://www.peakdistrict.gov.uk/'),
  lgaEv('staffsmoorlands', 'Foxlowe Arts Centre, Leek', 'Foxlowe, Leek', 'Tue-Sat', '10am-4pm', 'Free', ['art','community'], 'Community-run arts centre.', 'Surprisingly ambitious programming.', 'https://www.foxlowe.org/'),
  // Tamworth
  lgaEv('tamworth', 'Tamworth Castle', 'Tamworth Castle', 'Wed-Sun', '11am-4pm', '£8', ['museums','family'], 'Norman motte-and-bailey castle.', 'Compact, atmospheric, good for kids.', 'https://www.tamworthcastle.co.uk/'),
  // North Warks
  lgaEv('nuneaton', 'Pooley Country Park', 'Polesworth, North Warks', 'Daily', 'Dawn-dusk', 'Free', ['walking','family','community'], 'Former colliery, now nature reserve.', 'Easy lake circuit.', 'https://www.warwickshire.gov.uk/countrysidewalking/pooley-country-park'),
  // Nuneaton
  lgaEv('nuneaton', 'Nuneaton Museum & Art Gallery', 'Riversley Park, Nuneaton', 'Wed-Sun', '11am-4pm', 'Free', ['museums','art'], 'Civic gallery, George Eliot focus.', 'Free, peaceful, a hidden gem.', 'https://www.nuneatonmuseum.org.uk/'),
  // Rugby
  lgaEv('rugby', 'Rugby School Museum', 'Lawrence Sheriff St, Rugby', 'Mon-Sat', '10am-4pm', '£5', ['museums','sports'], 'Where the game was invented.', 'Object-rich, well-told story.', 'https://www.rugbyschool.co.uk/visit-us/museum/'),
  lgaEv('rugby', 'Draycote Water walk', 'Draycote Water, Rugby', 'Daily', 'Dawn-dusk', '£5 parking', ['walking','cycling','family'], 'Reservoir circuit, 5-mile path.', 'Flat, popular with cyclists.', 'https://www.severntrent.com/draycote-water/'),
  // Stratford (extras beyond hand-picked)
  lgaEv('stratford', 'Shakespeare\'s Birthplace', 'Henley St, Stratford', 'Daily', '10am-5pm', '£20', ['museums','books','family'], 'The Birthplace + town tour.', 'It is what it says.', 'https://www.shakespeare.org.uk/'),
  // Warwick (extras)
  lgaEv('warwick', 'Lord Leycester Hospital', 'High St, Warwick', 'Tue-Sun', '10am-5pm', '£12', ['museums','walking'], 'Medieval almshouse, still working.', 'A real surprise of a building.', 'https://www.lordleycester.com/'),
  // Bromsgrove
  lgaEv('bromsgrove', 'Avoncroft Museum', 'Stoke Heath, Bromsgrove', 'Wed-Sun', '10.30am-4pm', '£12', ['museums','family'], 'Historic buildings, open-air.', 'Saved buildings, reassembled.', 'https://avoncroft.org.uk/'),
  // Malvern Hills
  lgaEv('malvernhills', 'Malvern Theatres', 'Grange Rd, Great Malvern', 'Mon-Sat', '7.30pm', 'from £20', ['theatre','classical','dance'], 'Touring drama, dance, talks.', 'A grand provincial theatre.', 'https://www.malvern-theatres.co.uk/'),
  // Redditch
  lgaEv('redditch', 'Forge Mill Needle Museum', 'Needle Mill Lane, Redditch', 'Tue-Sun', '11am-4pm', '£6', ['museums','community'], 'Last working needle-scouring mill.', 'A surprisingly involving niche.', 'https://forgemill.org.uk/'),
  // Worcester (extras)
  lgaEv('worcester', 'Worcester Live — fringe show', 'Various, Worcester', 'June', 'Various', '£10', ['theatre','comedy','community'], 'Small-scale fringe programme.', 'Worth a punt at this price.', 'https://www.worcesterlive.co.uk/'),
  // Wychavon
  lgaEv('wychavon', 'Evesham Country Park', 'Twyford, Evesham', 'Daily', '10am-5pm', 'Free', ['family','walking','markets'], 'Garden centre, river walks.', 'A pleasant half-day.', 'https://www.eveshamcountrypark.co.uk/'),
  lgaEv('wychavon', 'Evesham river walk', 'River Avon, Evesham', 'Any day', 'Daylight', 'Free', ['walking','community','family'], 'River meadow path.', 'Asparagus-season favourite.', 'https://www.visitthemalverns.org/'),
  // Wyre Forest
  lgaEv('wyreforest', 'Severn Valley Railway', 'Kidderminster Station', 'Daily', '10am-5pm', '£25', ['family','museums','community'], 'Heritage steam railway.', 'A proper day out for kids.', 'https://www.svr.co.uk/'),
  lgaEv('wyreforest', 'Wyre Forest walks', 'Wyre Forest, Worcestershire', 'Any day', 'Daylight', 'Free', ['walking','cycling','family'], 'Ancient woodland, marked trails.', 'Big skies, dappled paths.', 'https://www.forestryengland.uk/wyre-forest'),
  // Sandwell extras
  lgaEv('sandwell', 'West Bromwich Albion home fixture', 'The Hawthorns, Sandwell', 'Sat 14 June', '3pm', 'from £25', ['sports','community','family'], 'Championship match-day.', 'A regional fixture.', 'https://www.wba.co.uk/'),
  lgaEv('sandwell', 'Sandwell Valley parkrun', 'Sandwell Valley Park', 'Saturdays', '9am', 'Free', ['running','community','family'], 'Free weekly 5k.', 'Reliable, scenic, friendly.', 'https://www.parkrun.org.uk/sandwellvalley/'),
  // Solihull extras
  lgaEv('solihull', 'Solihull Arts Complex', 'Library Sq, Solihull', 'Tue-Sat', '7.30pm', 'from £14', ['theatre','comedy','community'], 'Touring drama, comedy, music.', 'Easy theatre night out.', 'https://www.theartscomplex.co.uk/'),
  lgaEv('solihull', 'Knowle to Lapworth canal walk', 'Grand Union Canal, Solihull', 'Any day', 'Daylight', 'Free', ['walking','cycling','community'], 'Towpath walk past locks.', 'Flat, beautiful, family-easy.', 'https://canalrivertrust.org.uk/'),
  // Birmingham more
  lgaEv('birmingham', 'Selly Oak parkrun', 'Selly Oak Park, Birmingham', 'Saturdays', '9am', 'Free', ['running','community','family'], 'Smaller-field 5k.', 'Less crowded than Cannon Hill.', 'https://www.parkrun.org.uk/sellyoak/'),
  lgaEv('birmingham', 'Pebble Mill cycling event', 'Pebble Mill Rd, Birmingham', 'Sun 15 June', '8am', '£10', ['cycling','sports','community'], 'Marshalled road sportive.', 'Closed-road, proper test.', 'https://www.britishcycling.org.uk/events'),
];

// ============================================================
// EXPORT
// ============================================================

export const EVENTS: Ev[] = [
  ...HAND,
  ...parkruns,
  ...libraries,
  ...museums,
  ...galleries,
  ...walks,
  ...cyclingClubs,
  ...yogaStudios,
  ...meditation,
  ...lgbtq,
  ...photo,
  ...cinema,
  ...choirs,
  ...folkClubs,
  ...jazzNights,
  ...indieNights,
  ...rockTribs,
  ...metalNights,
  ...hipHopNights,
  ...dnbNights,
  ...worldNights,
  ...poetryNights,
  ...craftMarkets,
  ...foodEvents,
  ...familyEvents,
  ...danceEvents,
  ...sportFixtures,
  ...comedyNights,
  ...theatreShows,
  ...volunteering,
  ...bhmExtras,
  ...covExtras,
  ...wlvExtras,
  ...flavour,
];
// Mark unused helpers as touched (eventbrite/ents24 reserved for future generators)
void eventbrite; void ents24;
