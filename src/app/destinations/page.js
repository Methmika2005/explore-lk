'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/* =========================================================
   PROVINCES
========================================================= */

const provinces = [
  'All',
  'Western Province',
  'Central Province',
  'Southern Province',
  'Uva Province',
  'Northern Province',
  'Eastern Province',
  'North Western Province',
  'North Central Province',
  'Sabaragamuwa Province',
];

/* =========================================================
   TRAVEL STYLES
========================================================= */

const travelStyles = [
  {
    title: 'All Travel Styles',
    desc: 'Explore every type of destination.',
    icon: '✨',
    categories: [],
  },
  {
    title: 'Adventure & Hiking',
    desc: 'Mountains, hiking and outdoor adventures.',
    icon: '⛰️',
    categories: ['Adventure', 'Nature'],
  },
  {
    title: 'Beaches & Relaxation',
    desc: 'Beaches and relaxing tropical escapes.',
    icon: '🏖️',
    categories: ['Beach'],
  },
  {
    title: 'Wildlife & Safaris',
    desc: 'National parks and wildlife experiences.',
    icon: '🐘',
    categories: ['Wildlife'],
  },
  {
    title: 'History & Culture',
    desc: 'Ancient cities, temples and heritage.',
    icon: '🏛️',
    categories: ['History', 'Culture'],
  },
];

const categoryButtons = [
  { name: 'All', icon: '▦' },
  { name: 'Beaches & Relaxation', icon: '🌊' },
  { name: 'Mountains & Nature', icon: '🏔️' },
  { name: 'Wildlife & Safari', icon: '🐾' },
  { name: 'History & Culture', icon: '🏛️' },
  { name: 'Adventure', icon: '🥾' },
];

/* =========================================================
   DESTINATIONS
========================================================= */

const rawDestinations = [
  /* ================= WESTERN ================= */

  ['Galle Face Green', 'Western Province', 'Colombo District', 'Culture'],
  ['Gangaramaya Temple', 'Western Province', 'Colombo District', 'Culture'],
  ['Colombo National Museum', 'Western Province', 'Colombo District', 'History'],
  ['Independence Memorial Hall', 'Western Province', 'Colombo District', 'History'],
  ['Viharamahadevi Park', 'Western Province', 'Colombo District', 'Nature'],
  ['Colombo Lotus Tower', 'Western Province', 'Colombo District', 'Culture'],
  ['Pettah Floating Market', 'Western Province', 'Colombo District', 'Culture'],
  ['Kelaniya Raja Maha Vihara', 'Western Province', 'Gampaha District', 'Culture'],
  ['Bellanwila Raja Maha Vihara', 'Western Province', 'Colombo District', 'Culture'],
  ['Mount Lavinia Beach', 'Western Province', 'Colombo District', 'Beach'],
  ['Negombo Beach', 'Western Province', 'Gampaha District', 'Beach'],
  ['Negombo Lagoon', 'Western Province', 'Gampaha District', 'Nature'],
  ['Muthurajawela Wetland', 'Western Province', 'Gampaha District', 'Wildlife'],
  ['Henarathgoda Botanical Garden', 'Western Province', 'Gampaha District', 'Nature'],
  ['Kalutara Bodhiya', 'Western Province', 'Kalutara District', 'Culture'],
  ['Richmond Castle', 'Western Province', 'Kalutara District', 'History'],
  ['Brief Garden', 'Western Province', 'Kalutara District', 'Nature'],
  ['Beruwala Beach', 'Western Province', 'Kalutara District', 'Beach'],
  ['Bentota Beach', 'Western Province', 'Kalutara District', 'Beach'],
  ['Diyatha Uyana', 'Western Province', 'Colombo District', 'Nature'],

  /* ================= CENTRAL ================= */

  ['Sigiriya Rock Fortress', 'Central Province', 'Matale District', 'History'],
  ['Dambulla Cave Temple', 'Central Province', 'Matale District', 'Culture'],
  ['Pidurangala Rock', 'Central Province', 'Matale District', 'Adventure'],
  ['Knuckles Mountain Range', 'Central Province', 'Matale District', 'Adventure'],
  ['Temple of the Sacred Tooth Relic', 'Central Province', 'Kandy District', 'Culture'],
  ['Royal Botanical Gardens Peradeniya', 'Central Province', 'Kandy District', 'Nature'],
  ['Ambuluwawa Tower', 'Central Province', 'Kandy District', 'Adventure'],
  ['Nuwara Eliya Tea Plantations', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Horton Plains National Park', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Gregory Lake', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Hakgala Botanical Garden', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Victoria Park Nuwara Eliya', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Aberdeen Falls', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Laxapana Falls', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Devon Falls', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ["St. Clair's Falls", 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Ramboda Falls', 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Galboda Falls', 'Central Province', 'Kandy District', 'Nature'],
  ['Sera Ella', 'Central Province', 'Matale District', 'Nature'],
  ['Bambarakiri Ella', 'Central Province', 'Matale District', 'Nature'],
  ['Huluganga Falls', 'Central Province', 'Kandy District', 'Nature'],
  ["Baker's Falls", 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ["Lover's Leap Waterfall", 'Central Province', 'Nuwara Eliya District', 'Nature'],
  ['Wasgamuwa National Park', 'Central Province', 'Matale District', 'Wildlife'],

  /* ================= SOUTHERN ================= */

  ['Galle Fort', 'Southern Province', 'Galle District', 'History'],
  ['Galle Lighthouse', 'Southern Province', 'Galle District', 'History'],
  ['Unawatuna Beach', 'Southern Province', 'Galle District', 'Beach'],
  ['Jungle Beach Unawatuna', 'Southern Province', 'Galle District', 'Beach'],
  ['Hikkaduwa Beach', 'Southern Province', 'Galle District', 'Beach'],
  ['Hikkaduwa Coral Sanctuary', 'Southern Province', 'Galle District', 'Wildlife'],
  ['Koggala Lake', 'Southern Province', 'Galle District', 'Nature'],
  ['Koggala Beach', 'Southern Province', 'Galle District', 'Beach'],
  ['Mirissa Beach', 'Southern Province', 'Matara District', 'Beach'],
  ['Coconut Tree Hill Mirissa', 'Southern Province', 'Matara District', 'Nature'],
  ['Secret Beach Mirissa', 'Southern Province', 'Matara District', 'Beach'],
  ['Weligama Beach', 'Southern Province', 'Matara District', 'Beach'],
  ['Polhena Beach', 'Southern Province', 'Matara District', 'Beach'],
  ['Dondra Head Lighthouse', 'Southern Province', 'Matara District', 'History'],
  ['Hiriketiya Beach', 'Southern Province', 'Matara District', 'Beach'],
  ['Tangalle Beach', 'Southern Province', 'Hambantota District', 'Beach'],
  ['Yala National Park', 'Southern Province', 'Hambantota District', 'Wildlife'],
  ['Bundala National Park', 'Southern Province', 'Hambantota District', 'Wildlife'],
  ['Tissamaharama', 'Southern Province', 'Hambantota District', 'History'],
  ['Kirinda Temple', 'Southern Province', 'Hambantota District', 'Culture'],
  ['Mulkirigala Rock Temple', 'Southern Province', 'Hambantota District', 'Culture'],
  ['Rekawa Beach', 'Southern Province', 'Hambantota District', 'Beach'],
  ['Sinharaja Rainforest', 'Southern Province', 'Galle District', 'Nature'],
  ['Kanneliya Rainforest', 'Southern Province', 'Galle District', 'Nature'],
  ['Handunugoda Tea Estate', 'Southern Province', 'Galle District', 'Nature'],

  /* ================= UVA ================= */

  ['Nine Arch Bridge', 'Uva Province', 'Badulla District', 'History'],
  ['Ella Rock', 'Uva Province', 'Badulla District', 'Adventure'],
  ["Little Adam's Peak", 'Uva Province', 'Badulla District', 'Adventure'],
  ['Ravana Falls', 'Uva Province', 'Badulla District', 'Nature'],
  ['Ravana Cave', 'Uva Province', 'Badulla District', 'Adventure'],
  ['Diyaluma Falls', 'Uva Province', 'Badulla District', 'Nature'],
  ['Dunhinda Falls', 'Uva Province', 'Badulla District', 'Nature'],
  ['Bambarakanda Falls', 'Uva Province', 'Badulla District', 'Nature'],
  ["Lipton's Seat", 'Uva Province', 'Badulla District', 'Nature'],
  ['Adisham Bungalow', 'Uva Province', 'Badulla District', 'History'],
  ['Haputale Viewpoint', 'Uva Province', 'Badulla District', 'Nature'],
  ['Ella Gap', 'Uva Province', 'Badulla District', 'Nature'],
  ['Demodara Railway Loop', 'Uva Province', 'Badulla District', 'History'],
  ['Dowa Rock Temple', 'Uva Province', 'Badulla District', 'Culture'],
  ['Muthiyangana Raja Maha Vihara', 'Uva Province', 'Badulla District', 'Culture'],
  ['Bogoda Wooden Bridge', 'Uva Province', 'Badulla District', 'History'],
  ['Buduruwagala Temple', 'Uva Province', 'Monaragala District', 'Culture'],
  ['Maligawila Buddha Statue', 'Uva Province', 'Monaragala District', 'Culture'],
  ['Govinda Hela', 'Uva Province', 'Monaragala District', 'Adventure'],
  ["Madulsima Mini World's End", 'Uva Province', 'Badulla District', 'Adventure'],
  ['Narangala Mountain', 'Uva Province', 'Badulla District', 'Adventure'],
  ['Pilkington Point', 'Uva Province', 'Monaragala District', 'Nature'],
  ['Senanayake Samudraya', 'Uva Province', 'Monaragala District', 'Nature'],
  ['Gal Oya National Park', 'Uva Province', 'Monaragala District', 'Wildlife'],
  ['Nil Diya Pokuna', 'Uva Province', 'Badulla District', 'Adventure'],

  /* ================= NORTHERN ================= */

  ['Jaffna Fort', 'Northern Province', 'Jaffna District', 'History'],
  ['Nallur Kandaswamy Temple', 'Northern Province', 'Jaffna District', 'Culture'],
  ['Jaffna Public Library', 'Northern Province', 'Jaffna District', 'History'],
  ['Delft Island', 'Northern Province', 'Jaffna District', 'Adventure'],
  ['Nagadeepa', 'Northern Province', 'Jaffna District', 'Culture'],
  ['Casuarina Beach', 'Northern Province', 'Jaffna District', 'Beach'],
  ['Keerimalai Springs', 'Northern Province', 'Jaffna District', 'Nature'],
  ['Dambakola Patuna', 'Northern Province', 'Jaffna District', 'History'],
  ['Point Pedro', 'Northern Province', 'Jaffna District', 'Nature'],
  ['Jaffna Archaeological Museum', 'Northern Province', 'Jaffna District', 'History'],
  ['Kadurugoda Temple', 'Northern Province', 'Jaffna District', 'History'],
  ['Chundikulam National Park', 'Northern Province', 'Kilinochchi District', 'Wildlife'],
  ['Elephant Pass', 'Northern Province', 'Kilinochchi District', 'History'],
  ['Mannar Fort', 'Northern Province', 'Mannar District', 'History'],
  ['Madhu Church', 'Northern Province', 'Mannar District', 'Culture'],
  ['Talaimannar Pier', 'Northern Province', 'Mannar District', 'History'],
  ["Adam's Bridge", 'Northern Province', 'Mannar District', 'Nature'],
  ['Mannar Baobab Tree', 'Northern Province', 'Mannar District', 'Nature'],
  ['Vankalai Sanctuary', 'Northern Province', 'Mannar District', 'Wildlife'],
  ['Thiruketheeswaram Temple', 'Northern Province', 'Mannar District', 'Culture'],

  /* ================= EASTERN ================= */

  ['Nilaveli Beach', 'Eastern Province', 'Trincomalee District', 'Beach'],
  ['Uppuveli Beach', 'Eastern Province', 'Trincomalee District', 'Beach'],
  ['Pigeon Island National Park', 'Eastern Province', 'Trincomalee District', 'Wildlife'],
  ['Koneswaram Temple', 'Eastern Province', 'Trincomalee District', 'Culture'],
  ['Fort Frederick', 'Eastern Province', 'Trincomalee District', 'History'],
  ['Marble Beach', 'Eastern Province', 'Trincomalee District', 'Beach'],
  ['Trincomalee Harbour', 'Eastern Province', 'Trincomalee District', 'Nature'],
  ['Kanniya Hot Springs', 'Eastern Province', 'Trincomalee District', 'Nature'],
  ['Pasikuda Beach', 'Eastern Province', 'Batticaloa District', 'Beach'],
  ['Kalkudah Beach', 'Eastern Province', 'Batticaloa District', 'Beach'],
  ['Batticaloa Fort', 'Eastern Province', 'Batticaloa District', 'History'],
  ['Batticaloa Lagoon', 'Eastern Province', 'Batticaloa District', 'Nature'],
  ['Kallady Bridge', 'Eastern Province', 'Batticaloa District', 'History'],
  ['Arugam Bay', 'Eastern Province', 'Ampara District', 'Adventure'],
  ['Pottuvil Point', 'Eastern Province', 'Ampara District', 'Beach'],
  ['Elephant Rock Arugam Bay', 'Eastern Province', 'Ampara District', 'Adventure'],
  ['Whiskey Point', 'Eastern Province', 'Ampara District', 'Beach'],
  ['Peanut Farm Beach', 'Eastern Province', 'Ampara District', 'Beach'],
  ['Kumana National Park', 'Eastern Province', 'Ampara District', 'Wildlife'],
  ['Lahugala Kitulana National Park', 'Eastern Province', 'Ampara District', 'Wildlife'],
  ['Kudumbigala Monastery', 'Eastern Province', 'Ampara District', 'Culture'],
  ['Okanda Devalaya', 'Eastern Province', 'Ampara District', 'Culture'],
  ['Buddhangala Monastery', 'Eastern Province', 'Ampara District', 'Culture'],

  /* ================= NORTH WESTERN ================= */

  ['Wilpattu National Park', 'North Western Province', 'Puttalam District', 'Wildlife'],
  ['Kalpitiya Peninsula', 'North Western Province', 'Puttalam District', 'Beach'],
  ['Kalpitiya Lagoon', 'North Western Province', 'Puttalam District', 'Nature'],
  ['Kalpitiya Dutch Fort', 'North Western Province', 'Puttalam District', 'History'],
  ['Bar Reef Marine Sanctuary', 'North Western Province', 'Puttalam District', 'Wildlife'],
  ['Kudawa Beach', 'North Western Province', 'Puttalam District', 'Beach'],
  ['Anawilundawa Wetland Sanctuary', 'North Western Province', 'Puttalam District', 'Wildlife'],
  ['Munneswaram Temple', 'North Western Province', 'Puttalam District', 'Culture'],
  ['Chilaw Beach', 'North Western Province', 'Puttalam District', 'Beach'],
  ['Puttalam Lagoon', 'North Western Province', 'Puttalam District', 'Nature'],
  ['Yapahuwa Rock Fortress', 'North Western Province', 'Kurunegala District', 'History'],
  ['Panduwasnuwara Ancient Kingdom', 'North Western Province', 'Kurunegala District', 'History'],
  ['Dambadeniya Ancient Kingdom', 'North Western Province', 'Kurunegala District', 'History'],
  ['Ridi Viharaya', 'North Western Province', 'Kurunegala District', 'Culture'],
  ['Athugala Rock', 'North Western Province', 'Kurunegala District', 'Adventure'],
  ['Kurunegala Lake', 'North Western Province', 'Kurunegala District', 'Nature'],
  ['Arankele Monastery', 'North Western Province', 'Kurunegala District', 'Culture'],
  ['Dolukanda Mountain', 'North Western Province', 'Kurunegala District', 'Adventure'],
  ['Deduru Oya Reservoir', 'North Western Province', 'Kurunegala District', 'Nature'],
  ['Panavitiya Ambalama', 'North Western Province', 'Kurunegala District', 'History'],

  /* ================= NORTH CENTRAL ================= */

  ['Anuradhapura Ancient City', 'North Central Province', 'Anuradhapura District', 'History'],
  ['Jaya Sri Maha Bodhi', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Ruwanwelisaya', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Abhayagiri Stupa', 'North Central Province', 'Anuradhapura District', 'History'],
  ['Jetavanaramaya', 'North Central Province', 'Anuradhapura District', 'History'],
  ['Mihintale', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Isurumuniya Temple', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Kuttam Pokuna', 'North Central Province', 'Anuradhapura District', 'History'],
  ['Samadhi Buddha Statue', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Thuparamaya', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Ritigala Monastery', 'North Central Province', 'Anuradhapura District', 'History'],
  ['Aukana Buddha Statue', 'North Central Province', 'Anuradhapura District', 'Culture'],
  ['Polonnaruwa Ancient City', 'North Central Province', 'Polonnaruwa District', 'History'],
  ['Gal Vihara', 'North Central Province', 'Polonnaruwa District', 'Culture'],
  ['Parakrama Samudra', 'North Central Province', 'Polonnaruwa District', 'Nature'],
  ['Rankoth Vehera', 'North Central Province', 'Polonnaruwa District', 'History'],
  ['Polonnaruwa Vatadage', 'North Central Province', 'Polonnaruwa District', 'History'],
  ['Minneriya National Park', 'North Central Province', 'Polonnaruwa District', 'Wildlife'],
  ['Kaudulla National Park', 'North Central Province', 'Polonnaruwa District', 'Wildlife'],
  ['Somawathiya National Park', 'North Central Province', 'Polonnaruwa District', 'Wildlife'],
  ['Medirigiriya Vatadage', 'North Central Province', 'Polonnaruwa District', 'History'],
  ['Angammedilla National Park', 'North Central Province', 'Polonnaruwa District', 'Wildlife'],
  ['Maduru Oya National Park', 'North Central Province', 'Polonnaruwa District', 'Wildlife'],
  ['Hurulu Eco Park', 'North Central Province', 'Anuradhapura District', 'Wildlife'],
  ['Kala Wewa', 'North Central Province', 'Anuradhapura District', 'Nature'],

  /* ================= SABARAGAMUWA ================= */

  ["Adam's Peak Sri Pada", 'Sabaragamuwa Province', 'Ratnapura District', 'Adventure'],
  ['Sinharaja Forest Reserve', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Udawalawe National Park', 'Sabaragamuwa Province', 'Ratnapura District', 'Wildlife'],
  ['Bopath Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Katugas Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Kirindi Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Rajanawa Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Alupola Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Duwili Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Surathali Ella', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Pahanthudawa Waterfall', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Samanalawewa Reservoir', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Sabaragamuwa Maha Saman Devalaya', 'Sabaragamuwa Province', 'Ratnapura District', 'Culture'],
  ['Ratnapura National Museum', 'Sabaragamuwa Province', 'Ratnapura District', 'History'],
  ['Batadombalena Cave', 'Sabaragamuwa Province', 'Ratnapura District', 'History'],
  ['Belilena Cave', 'Sabaragamuwa Province', 'Kegalle District', 'History'],
  ['Pinnawala Elephant Orphanage', 'Sabaragamuwa Province', 'Kegalle District', 'Wildlife'],
  ['Kitulgala', 'Sabaragamuwa Province', 'Kegalle District', 'Adventure'],
  ['Makandawa Forest Reserve', 'Sabaragamuwa Province', 'Kegalle District', 'Nature'],
  ['Asupini Ella', 'Sabaragamuwa Province', 'Kegalle District', 'Nature'],
  ['Nalagana Ella', 'Sabaragamuwa Province', 'Kegalle District', 'Nature'],
  ['Maduwanwela Walawwa', 'Sabaragamuwa Province', 'Ratnapura District', 'History'],
  ['Waulpane Cave', 'Sabaragamuwa Province', 'Ratnapura District', 'Adventure'],
  ['Chandrika Lake', 'Sabaragamuwa Province', 'Ratnapura District', 'Nature'],
  ['Kitulgala Rafting Area', 'Sabaragamuwa Province', 'Kegalle District', 'Adventure'],
];

/* =========================================================
   REAL DESTINATION PHOTOS (VERIFIED HIGH QUALITY CDN)
========================================================= */

const destinationPhotos = {
  "Galle Face Green": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/f0/Colombo_-_Galle_Face.jpg&w=800&q=80&output=webp",
  "Gangaramaya Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9a/Gangaramaya_Temple.JPG&w=800&q=80&output=webp",
  "Colombo National Museum": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/bb/SL_Colombo_asv2020-01_img10_National_Museum.jpg&w=800&q=80&output=webp",
  "Independence Memorial Hall": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d7/Independence_Commemoration_Hall.jpg&w=800&q=80&output=webp",
  "Viharamahadevi Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/48/Viharamahadevi_Park_incl._Town_Hall.jpg&w=800&q=80&output=webp",
  "Colombo Lotus Tower": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/b/bf/Lotus_tower_and_Beira_lake_at_night_2023.jpg&w=800&q=80&output=webp",
  "Pettah Floating Market": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/50/Pettah_Floating_Market_2.jpg&w=800&q=80&output=webp",
  "Kelaniya Raja Maha Vihara": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2c/Kelaniya_AS1.JPG&w=800&q=80&output=webp",
  "Bellanwila Raja Maha Vihara": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e4/Bellanwila_Vihara.jpg&w=800&q=80&output=webp",
  "Mount Lavinia Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/31/Dehiwala-Mount_Lavania.jpg&w=800&q=80&output=webp",
  "Negombo Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9a/Negombo_Beach_resort_pool_(Unsplash).jpg&w=800&q=80&output=webp",
  "Negombo Lagoon": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/57/Negombo_Lagoon_natural_harbour.jpg&w=800&q=80&output=webp",
  "Muthurajawela Wetland": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/53/Muthurajawela_marsh.jpg&w=800&q=80&output=webp",
  "Henarathgoda Botanical Garden": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/88/Henarathgoda_Botanical_Garden.jpg&w=800&q=80&output=webp",
  "Kalutara Bodhiya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2a/Kalautara_Bodhiya_1.jpg&w=800&q=80&output=webp",
  "Richmond Castle": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/dd/Richmond_Castle_Kalutara.jpg&w=800&q=80&output=webp",
  "Brief Garden": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2b/Frontyard_.jpg&w=800&q=80&output=webp",
  "Beruwala Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2f/Ketchimalai_Mosque-_Beruwala%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Bentota Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Sri_Lanka%2C_Bentota%2C_beach_(2).JPG&w=800&q=80&output=webp",
  "Diyatha Uyana": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/eb/Fountain_at_Diyatha_Uyana.JPG&w=800&q=80&output=webp",
  "Sigiriya Rock Fortress": "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
  "Dambulla Cave Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/34/Dambulla-buddhastupa.jpg&w=800&q=80&output=webp",
  "Pidurangala Rock": "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=800&q=80",
  "Knuckles Mountain Range": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9d/Knuckles_Range.JPG&w=800&q=80&output=webp",
  "Temple of the Sacred Tooth Relic": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/eb/SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg&w=800&q=80&output=webp",
  "Royal Botanical Gardens Peradeniya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/98/Botanical_Garden_of_Peradeniya_03.jpg&w=800&q=80&output=webp",
  "Ambuluwawa Tower": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/0e/Torre_d%27Ambuluwawa.jpg&w=800&q=80&output=webp",
  "Nuwara Eliya Tea Plantations": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  "Horton Plains National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4a/Srilankamountainforest.jpg&w=800&q=80&output=webp",
  "Gregory Lake": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4f/UG-LK_Photowalk_-_2018-03-25_-_Lake_Gregory_(1).jpg&w=800&q=80&output=webp",
  "Hakgala Botanical Garden": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/37/Hakgala_Botanical_Garden.jpg&w=800&q=80&output=webp",
  "Victoria Park Nuwara Eliya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/05/Victoria_Park%2C_Nuwara_Eliya.jpg&w=800&q=80&output=webp",
  "Aberdeen Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/6e/Aberdeen_falls_sri_lanka.JPG&w=800&q=80&output=webp",
  "Laxapana Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9f/Laxapana_falls_1.JPG&w=800&q=80&output=webp",
  "Devon Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a6/UG-LK_Photowalk_-_2018-03-25_-_Devon_Falls_(2).jpg&w=800&q=80&output=webp",
  "St. Clair's Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/7b/UG-LK_Photowalk_-_2018-03-25_-_St_Clairs_Falls_(1).jpg&w=800&q=80&output=webp",
  "Ramboda Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1d/SL_NuwaraEDistrict_asv2020-01_img08_Lower_Ramboda_Falls.jpg&w=800&q=80&output=webp",
  "Galboda Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/fb/Galboda_Waterfalls.jpg&w=800&q=80&output=webp",
  "Sera Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e4/Sera_Ella_Falls.jpg&w=800&q=80&output=webp",
  "Bambarakiri Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Bambarakiri_Ella.jpg&w=800&q=80&output=webp",
  "Huluganga Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/35/Huluganga_fall.JPG&w=800&q=80&output=webp",
  "Baker's Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/bc/SL_Horton_Plains_NP_asv2020-01_img11.jpg&w=800&q=80&output=webp",
  "Lover's Leap Waterfall": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/59/Hawks_Nest.JPG&w=800&q=80&output=webp",
  "Wasgamuwa National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b1/WasgamuwaNationalPark-September2014_(1).JPG&w=800&q=80&output=webp",
  "Galle Fort": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/77/Galle_Fort.jpg&w=800&q=80&output=webp",
  "Galle Lighthouse": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/54/SL_Galle_Fort_asv2020-01_img24.jpg&w=800&q=80&output=webp",
  "Unawatuna Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/83/Unawatuna.jpg&w=800&q=80&output=webp",
  "Jungle Beach Unawatuna": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b2/Jungle_Beach_Unawatuna.jpg&w=800&q=80&output=webp",
  "Hikkaduwa Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/27/Hikkaduwa3.JPG&w=800&q=80&output=webp",
  "Hikkaduwa Coral Sanctuary": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Hikkaduwa_coral.jpg&w=800&q=80&output=webp",
  "Koggala Lake": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/09/Koggala.JPG&w=800&q=80&output=webp",
  "Koggala Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/fb/Stilt_fishing_in_Koggala.jpg&w=800&q=80&output=webp",
  "Mirissa Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a5/Mirissa-Plage_(3).jpg&w=800&q=80&output=webp",
  "Coconut Tree Hill Mirissa": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
  "Secret Beach Mirissa": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ed/Coconut_Tree_Hill%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Weligama Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/da/Weligama_Beach_in_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Polhena Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b8/Polhena_beach.jpg&w=800&q=80&output=webp",
  "Dondra Head Lighthouse": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/fc/Dondra_Head_Lighthouse_-_ATennakoon.jpg&w=800&q=80&output=webp",
  "Hiriketiya Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/90/Hiriketiya_bay.jpg&w=800&q=80&output=webp",
  "Tangalle Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/23/TangalleBeach.JPG&w=800&q=80&output=webp",
  "Yala National Park": "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=800&q=80",
  "Bundala National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e6/Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Tissamaharama": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/5a/Tissamaharama_dagoba.jpg&w=800&q=80&output=webp",
  "Kirinda Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/6f/Kirinda_Temple_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Mulkirigala Rock Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Mulkirigala_Rock_Temple.JPG&w=800&q=80&output=webp",
  "Rekawa Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4e/Rekawa_Turtle_Beach.jpg&w=800&q=80&output=webp",
  "Sinharaja Rainforest": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/58/20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_(25674474901).jpg&w=800&q=80&output=webp",
  "Kanneliya Rainforest": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Kanneliya_rain_forest.jpg&w=800&q=80&output=webp",
  "Handunugoda Tea Estate": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/18/Handunugoda_Tea_Estate.jpg&w=800&q=80&output=webp",
  "Nine Arch Bridge": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
  "Ella Rock": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/5e/Ella_Rock_View.jpg&w=800&q=80&output=webp",
  "Little Adam's Peak": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1b/Little_Adam%27s_Peak_Ella.jpg&w=800&q=80&output=webp",
  "Ravana Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/05/SL_Ella_asv2020-01_img01_Ravana_Falls.jpg&w=800&q=80&output=webp",
  "Ravana Cave": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c3/Ravana_Ella_Cave.jpg&w=800&q=80&output=webp",
  "Diyaluma Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b6/Diyaluma_Falls_1.jpg&w=800&q=80&output=webp",
  "Dunhinda Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/f8/Dunhinda.jpg&w=800&q=80&output=webp",
  "Bambarakanda Falls": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/cb/Bambarakanda_Waterfall.jpg&w=800&q=80&output=webp",
  "Lipton's Seat": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4e/Liptons_Seat_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Adisham Bungalow": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2d/Adisham_Bungalow.JPG&w=800&q=80&output=webp",
  "Haputale Viewpoint": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/f0/Ella%2C_Sri_Lanka%2C_Mountains_in_clouds%2C_Panorama.jpg&w=800&q=80&output=webp",
  "Ella Gap": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/47/Ella_Gap_View.jpg&w=800&q=80&output=webp",
  "Demodara Railway Loop": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/28/Demodara_Railway_Station.jpg&w=800&q=80&output=webp",
  "Dowa Rock Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/fa/SL_Ella_asv2020-01_img27_Dhowa_Temple.jpg&w=800&q=80&output=webp",
  "Muthiyangana Raja Maha Vihara": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e3/SL_Badulla_asv2020-01_img15_Muthiyangana_Temple.jpg&w=800&q=80&output=webp",
  "Bogoda Wooden Bridge": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/73/Bogoda_wooden_bridge_1.JPG&w=800&q=80&output=webp",
  "Buduruwagala Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/67/Buduruwagala_Museum_2.jpg&w=800&q=80&output=webp",
  "Maligawila Buddha Statue": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Maligawila_Buddha_Statue.jpg&w=800&q=80&output=webp",
  "Govinda Hela": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/7b/Govinda_Hela.jpg&w=800&q=80&output=webp",
  "Madulsima Mini World's End": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/87/Madulsima_View.jpg&w=800&q=80&output=webp",
  "Narangala Mountain": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/df/Narangala_Peak.jpg&w=800&q=80&output=webp",
  "Pilkington Point": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/14/Poonagala_Hills.jpg&w=800&q=80&output=webp",
  "Senanayake Samudraya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/f3/Gal_Oya_National_Park_(Senanayake_Samudhraya).JPG&w=800&q=80&output=webp",
  "Gal Oya National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/f3/Gal_Oya_National_Park_(Senanayake_Samudhraya).JPG&w=800&q=80&output=webp",
  "Nil Diya Pokuna": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/91/Nil_Diya_Pokuna_Cave.jpg&w=800&q=80&output=webp",
  "Jaffna Fort": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/79/Jaffna_Fort_(1).jpg&w=800&q=80&output=webp",
  "Nallur Kandaswamy Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/61/Nallur_Kandasamy_front_entrance.jpg&w=800&q=80&output=webp",
  "Jaffna Public Library": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/ad/Public_Library%2C_Jaffna.JPG&w=800&q=80&output=webp",
  "Delft Island": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/99/Delft_Island_Horses.jpg&w=800&q=80&output=webp",
  "Nagadeepa": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/15/Nagadeepa_Temple.jpg&w=800&q=80&output=webp",
  "Casuarina Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/88/Casuarina_Beach_1.jpg&w=800&q=80&output=webp",
  "Keerimalai Springs": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/df/Keerimalai_Pond.jpg&w=800&q=80&output=webp",
  "Dambakola Patuna": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/23/Dambakola_Patuna_Temple.jpg&w=800&q=80&output=webp",
  "Point Pedro": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/be/Kottuvasal.jpg&w=800&q=80&output=webp",
  "Jaffna Archaeological Museum": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/0f/Archaeological_Museum%2C_Jaffna.JPG&w=800&q=80&output=webp",
  "Kadurugoda Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/97/Kadurugoda_Vihara_Stupas.jpg&w=800&q=80&output=webp",
  "Chundikulam National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/8c/Chundikulam_Sanctuary.jpg&w=800&q=80&output=webp",
  "Elephant Pass": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d6/Elephant_Pass_Memorial_And_Tree2.jpg&w=800&q=80&output=webp",
  "Mannar Fort": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c8/Mannar_Fort_Entrance.jpg&w=800&q=80&output=webp",
  "Madhu Church": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d6/Madhu_Church_(Madu_Church).jpg&w=800&q=80&output=webp",
  "Talaimannar Pier": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/93/%E0%B6%AD%E0%B6%BD%E0%B7%99%E0%B6%BA%E0%B7%92%E0%B6%B8%E0%B6%B1%E0%B7%8A%E0%B6%B1%E0%B7%8F%E0%B6%BB%E0%B6%B8_%E0%B6%A2%E0%B7%90%E0%B6%A7%E0%B7%92%E0%B6%BA.jpg&w=800&q=80&output=webp",
  "Adam's Bridge": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ea/Adams_Bridge_aerial.jpg&w=800&q=80&output=webp",
  "Mannar Baobab Tree": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/f/fe/Mannar_Baobab_Tree.jpg&w=800&q=80&output=webp",
  "Vankalai Sanctuary": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/98/Vankalai_Sanctuary.jpg&w=800&q=80&output=webp",
  "Thiruketheeswaram Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/77/Ketheeswaram_temple.jpg&w=800&q=80&output=webp",
  "Nilaveli Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/39/Nillaveli_Beach.JPG&w=800&q=80&output=webp",
  "Uppuveli Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/88/Uppveli_Beach_in_Trincomalee%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Pigeon Island National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/5f/Pigeon_Island_National_Park%2C_Trincomalee.jpg&w=800&q=80&output=webp",
  "Koneswaram Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/36/Spiritual_16.jpg&w=800&q=80&output=webp",
  "Fort Frederick": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Fort_Fredrick%2C_entrance.JPG&w=800&q=80&output=webp",
  "Marble Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/05/Marmo_z17.JPG&w=800&q=80&output=webp",
  "Trincomalee Harbour": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/92/Sri_Lanka_Navy_troop_transport_catamaran.JPG&w=800&q=80&output=webp",
  "Kanniya Hot Springs": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/63/Kanniya_hot_springs.jpg&w=800&q=80&output=webp",
  "Pasikuda Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/22/Pasikuda_Beach.jpg&w=800&q=80&output=webp",
  "Kalkudah Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/88/Kalkudah_Beach.jpg&w=800&q=80&output=webp",
  "Batticaloa Fort": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/41/Sea_Fishing%2C_Batticaloa.jpg&w=800&q=80&output=webp",
  "Batticaloa Lagoon": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/7b/Batticaloa_Lagoon.jpg&w=800&q=80&output=webp",
  "Kallady Bridge": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/0a/Kallady_Bridge_Batticaloa.jpg&w=800&q=80&output=webp",
  "Arugam Bay": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/2c/Beach_of_Arugam_Bay.jpg&w=800&q=80&output=webp",
  "Pottuvil Point": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/dc/Arugam_Point%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Elephant Rock Arugam Bay": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/27/Elephant_Rock_Arugam_Bay.jpg&w=800&q=80&output=webp",
  "Whiskey Point": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9c/Whiskey_Point_Pottuvil.jpg&w=800&q=80&output=webp",
  "Peanut Farm Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/41/Peanut_Farm_Beach_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Kumana National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/58/Kumana_National_Park_(Kudumbigala_Sanctuary).JPG&w=800&q=80&output=webp",
  "Lahugala Kitulana National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b3/Lahugala_Tank.jpg&w=800&q=80&output=webp",
  "Kudumbigala Monastery": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1f/Kudumbigala_Monastery.jpg&w=800&q=80&output=webp",
  "Okanda Devalaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b2/Okanda_Devalaya_Temple.jpg&w=800&q=80&output=webp",
  "Buddhangala Monastery": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/82/Buddhangala_Stupa.jpg&w=800&q=80&output=webp",
  "Wilpattu National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/99/WilpattuNationalPark-April2014_(3).JPG&w=800&q=80&output=webp",
  "Kalpitiya Peninsula": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/ce/KalpitiyaPeninsula-January2012-01.JPG&w=800&q=80&output=webp",
  "Kalpitiya Lagoon": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/49/SL_Kalpitiya_asv2020-01_img6_Dutch_fort.jpg&w=800&q=80&output=webp",
  "Kalpitiya Dutch Fort": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/19/SL_Kalpitiya_asv2020-01_img4_Fishery_harbour.jpg&w=800&q=80&output=webp",
  "Bar Reef Marine Sanctuary": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/15/Bar_Reef_Kalpitiya.jpg&w=800&q=80&output=webp",
  "Kudawa Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/30/Kudawa_Beach_Kalpitiya.jpg&w=800&q=80&output=webp",
  "Anawilundawa Wetland Sanctuary": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/87/Anawilundawa_Wetland.jpg&w=800&q=80&output=webp",
  "Munneswaram Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Munneswaram.jpg&w=800&q=80&output=webp",
  "Chilaw Beach": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/35/Chilaw_Beach_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Puttalam Lagoon": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/ce/KalpitiyaPeninsula-January2012-01.JPG&w=800&q=80&output=webp",
  "Yapahuwa Rock Fortress": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/65/Yapahuwa_Lion.jpg&w=800&q=80&output=webp",
  "Panduwasnuwara Ancient Kingdom": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/df/Panduwasnuwara_Kingdom.jpg&w=800&q=80&output=webp",
  "Dambadeniya Ancient Kingdom": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/8b/Dambadeniya_Rock.jpg&w=800&q=80&output=webp",
  "Ridi Viharaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/cb/Ridi_Viharaya_3.JPG&w=800&q=80&output=webp",
  "Athugala Rock": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/3f/Kurunegala_City_from_the_Sky.jpg&w=800&q=80&output=webp",
  "Kurunegala Lake": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/3f/Kurunegala_City_from_the_Sky.jpg&w=800&q=80&output=webp",
  "Arankele Monastery": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/9e/Arankele_Monastery_Path.jpg&w=800&q=80&output=webp",
  "Dolukanda Mountain": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4e/Dolukanda_Sanctuary.jpg&w=800&q=80&output=webp",
  "Deduru Oya Reservoir": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ea/DeduruOya-January2012-01.JPG&w=800&q=80&output=webp",
  "Panavitiya Ambalama": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b2/%E0%B6%B4%E0%B6%B1%E0%B7%8F%E0%B7%80%E0%B7%92%E0%B6%A7%E0%B7%92%E0%B6%BA_%E0%B6%85%E0%B6%B8%E0%B7%8A%E0%B6%B6%E0%B6%BD%E0%B6%B8_(%E0%B6%89%E0%B6%AF%E0%B7%92%E0%B6%BB%E0%B7%92%E0%B6%B4%E0%B7%83%E0%B7%92%E0%B6%B1%E0%B7%8A)_2019-11-09.jpg&w=800&q=80&output=webp",
  "Anuradhapura Ancient City": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/65/Ruwanweli_Maha_Saaya.jpg&w=800&q=80&output=webp",
  "Jaya Sri Maha Bodhi": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/92/Photograph_of_Jaya_Sri_Maha_Bodhi_Anuradhapura_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Ruwanwelisaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/0/04/SL_Anuradhapura_asv2020-01_img11_Ruwanwelisaya_Stupa.jpg&w=800&q=80&output=webp",
  "Abhayagiri Stupa": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/aa/Ruwanwelisaya.jpg&w=800&q=80&output=webp",
  "Jetavanaramaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/46/Jetavanaramaya_Stupa_profile.jpg&w=800&q=80&output=webp",
  "Mihintale": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/aa/Mihintale_Rock.jpg&w=800&q=80&output=webp",
  "Isurumuniya Temple": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b9/ISURUMUNIYA_ROCK_TEMPLE.JPG&w=800&q=80&output=webp",
  "Kuttam Pokuna": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/79/SL_Anuradhapura_asv2020-01_img29_Kuttam_Pokuna.jpg&w=800&q=80&output=webp",
  "Samadhi Buddha Statue": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Samadhi_Buddha_Statue_Anuradhapura.jpg&w=800&q=80&output=webp",
  "Thuparamaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ef/SL_Anuradhapura_asv2020-01_img34_Thuparamaya_Stupa.jpg&w=800&q=80&output=webp",
  "Ritigala Monastery": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/8d/Ritigala.jpg&w=800&q=80&output=webp",
  "Aukana Buddha Statue": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/3c/Buda_de_Avukana_-_03.jpg&w=800&q=80&output=webp",
  "Polonnaruwa Ancient City": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d1/Polonnaruwa_01.jpg&w=800&q=80&output=webp",
  "Gal Vihara": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/92/%E0%B6%8B%E0%B6%AD%E0%B7%8A%E0%B6%AD%E0%B6%BB%E0%B7%8F%E0%B6%BB%E0%B7%8F%E0%B6%B8%E0%B6%BA_%E0%B6%9A%E0%B7%85%E0%B7%94_%E0%B6%9C%E0%B6%BD_%E0%B6%B1%E0%B7%99%E0%B6%BD%E0%B7%8F.jpg&w=800&q=80&output=webp",
  "Parakrama Samudra": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ed/Polonnaruwa-panta.jpg&w=800&q=80&output=webp",
  "Rankoth Vehera": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/22/Rankoth_Vehera%2C_Ancient_City_of_Polonnaruwa%2C_Sri_Lanka_(5).jpg&w=800&q=80&output=webp",
  "Polonnaruwa Vatadage": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/ef/Vatadage.jpg&w=800&q=80&output=webp",
  "Minneriya National Park": "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
  "Kaudulla National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/41/Kaudulla_Elephants.jpg&w=800&q=80&output=webp",
  "Somawathiya National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/48/Somawathiya_National_Park%2C_Sri_Lanka.jpg&w=800&q=80&output=webp",
  "Medirigiriya Vatadage": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e0/Medirigiriya_watadageya_1.jpg&w=800&q=80&output=webp",
  "Angammedilla National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Angammedilla_Park.jpg&w=800&q=80&output=webp",
  "Maduru Oya National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b5/A_Hill_in_Maduru_Oya.jpg&w=800&q=80&output=webp",
  "Hurulu Eco Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/75/Hurulu_Eco_Park_Elephant.jpg&w=800&q=80&output=webp",
  "Kala Wewa": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/ac/General_View_of_Kala_Wewa.jpg&w=800&q=80&output=webp",
  "Adam's Peak Sri Pada": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Sri_Pada.JPG&w=800&q=80&output=webp",
  "Sinharaja Forest Reserve": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/58/20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_(25674474901).jpg&w=800&q=80&output=webp",
  "Udawalawe National Park": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/8c/Udawalawe_National_Park_(Udawalawa_Reservoir).jpg&w=800&q=80&output=webp",
  "Bopath Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/50/Bopath_Ella_Waterfall.jpg&w=800&q=80&output=webp",
  "Katugas Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/4e/Katugas_Ella_Waterfall.jpg&w=800&q=80&output=webp",
  "Kirindi Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/72/Kirindi_Ella_Falls.jpg&w=800&q=80&output=webp",
  "Rajanawa Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/18/Rajanawa_Ella_Waterfall.jpg&w=800&q=80&output=webp",
  "Alupola Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/22/Alupola_Falls.jpg&w=800&q=80&output=webp",
  "Duwili Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/d7/Duvili_Ella_Falls.jpg&w=800&q=80&output=webp",
  "Surathali Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Surathali_Ella_Waterfall.jpg&w=800&q=80&output=webp",
  "Pahanthudawa Waterfall": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/6f/Pahanthudawa_Waterfall.jpg&w=800&q=80&output=webp",
  "Samanalawewa Reservoir": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/39/UG-LK_Photowalk_-_2018-03-25_-_Samanala_Dam_(2).jpg&w=800&q=80&output=webp",
  "Sabaragamuwa Maha Saman Devalaya": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b8/Saman_Devalaya_Ratnapura.jpg&w=800&q=80&output=webp",
  "Ratnapura National Museum": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/87/Ratnapura_National_Museum.jpg&w=800&q=80&output=webp",
  "Batadombalena Cave": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/77/Batadombalena_Cave.jpg&w=800&q=80&output=webp",
  "Belilena Cave": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Belilena_Cave_Kitulgala.jpg&w=800&q=80&output=webp",
  "Pinnawala Elephant Orphanage": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/50/Pinnawala_01.jpg&w=800&q=80&output=webp",
  "Kitulgala": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1c/SL01kitulgala.jpg&w=800&q=80&output=webp",
  "Makandawa Forest Reserve": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/4/41/Makandawa_Rainforest.jpg&w=800&q=80&output=webp",
  "Asupini Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/70/Ahupni_Ella.jpg&w=800&q=80&output=webp",
  "Nalagana Ella": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/d/df/Nalagana_Ella_Waterfall.jpg&w=800&q=80&output=webp",
  "Maduwanwela Walawwa": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/e/e6/Royal_Palace_Maduwanwela_Walawwa_-_%E0%B6%B8%E0%B6%A9%E0%B7%94%E0%B7%80%E0%B6%B1%E0%B7%8A%E0%B7%80%E0%B7%99%E0%B6%BD_%E0%B7%80%E0%B6%BD%E0%B7%80%E0%B7%8A%E0%B7%80_2012_-_panoramio.jpg&w=800&q=80&output=webp",
  "Waulpane Cave": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Waulpane_Cave.jpg&w=800&q=80&output=webp",
  "Chandrika Lake": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/7/7d/Chandrika_Lake_Embilipitiya.jpg&w=800&q=80&output=webp",
  "Kitulgala Rafting Area": "https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1c/SL01kitulgala.jpg&w=800&q=80&output=webp",
};

const westernPhotos = {
  'Galle Face Green': '/destinations/place.avif',
  'Gangaramaya Temple': '/destinations/caption.jpg',
  'Colombo National Museum': '/destinations/colombo-national-museum.jpg',
  'Independence Memorial Hall': '/destinations/1.jpg',
  'Viharamahadevi Park': '/destinations/images.jpg',
  'Colombo Lotus Tower': '/destinations/wp6830758-lotus-tower-wallpapers-1.jpg',
  'Pettah Floating Market': '/destinations/images (1).jpg',
  'Kelaniya Raja Maha Vihara': '/destinations/images (2).jpg',
  'Bellanwila Raja Maha Vihara': '/destinations/Bellanwila_Vihara.jpg',
  'Mount Lavinia Beach': '/destinations/images (3).jpg',
  'Negombo Beach': '/destinations/Negombo-Beach-During-Sunset.webp',
  'Negombo Lagoon': '/destinations/images (4).jpg',
  'Muthurajawela Wetland': '/destinations/images (5).jpg',
  'Henarathgoda Botanical Garden': '/destinations/images (6).jpg',
  'Kalutara Bodhiya': '/destinations/40adb867b3b9073cf180c3934e508265.avif',
  'Richmond Castle': '/destinations/richmond-castle-at-palatota.jpg',
  'Brief Garden': '/destinations/images (7).jpg',
  'Beruwala Beach': '/destinations/images (8).jpg',
  'Bentota Beach': '/destinations/gallery_Bentota_Beach_Sri_Lanka.jpg',
  'Diyatha Uyana': '/destinations/Fountain_at_Diyatha_Uyana.jpg',
};

/* =========================================================
   HELPERS
========================================================= */

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getPhoto(name) {
  if (destinationPhotos[name]) {
    return destinationPhotos[name];
  }

  if (westernPhotos[name]) {
    return westernPhotos[name];
  }

  return `/destinations/${slugify(name)}.jpg`;
}

function getIcon(category) {
  switch (category) {
    case 'Beach':
      return '🏖️';

    case 'Wildlife':
      return '🐘';

    case 'History':
      return '🏛️';

    case 'Culture':
      return '🛕';

    case 'Adventure':
      return '🥾';

    default:
      return '🏔️';
  }
}

function getDescription(name, category) {
  switch (category) {
    case 'Beach':
      return `Enjoy the tropical coastline, beautiful ocean views and relaxing atmosphere of ${name}.`;

    case 'Wildlife':
      return `Discover Sri Lanka's incredible wildlife and natural environment at ${name}.`;

    case 'History':
      return `Explore the fascinating history, architecture and heritage surrounding ${name}.`;

    case 'Culture':
      return `Experience the cultural, religious and historical importance of ${name}.`;

    case 'Adventure':
      return `Enjoy outdoor adventure, spectacular scenery and unforgettable experiences at ${name}.`;

    default:
      return `Discover beautiful natural scenery and unique landscapes surrounding ${name}.`;
  }
}

/* =========================================================
   DESTINATION OBJECTS
========================================================= */

const destinations = rawDestinations.map(
  ([name, province, district, category], index) => ({
    id: index + 1,
    name,
    province,
    district,
    category,
    icon: getIcon(category),
    description: getDescription(name, category),
    image: getPhoto(name),
  })
);

/* =========================================================
   CATEGORY MATCH
========================================================= */

function categoryMatches(filter, category) {
  if (filter === 'All') {
    return true;
  }

  if (filter === 'Beaches & Relaxation') {
    return category === 'Beach';
  }

  if (filter === 'Mountains & Nature') {
    return category === 'Nature';
  }

  if (filter === 'Wildlife & Safari') {
    return category === 'Wildlife';
  }

  if (filter === 'History & Culture') {
    return category === 'History' || category === 'Culture';
  }

  if (filter === 'Adventure') {
    return category === 'Adventure';
  }

  return true;
}

/* =========================================================
   IMAGE COMPONENT
========================================================= */

function DestinationImage({ item }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#07574d] via-emerald-700 to-teal-500 px-5 text-center text-white">
        <div className="text-5xl">
          {item.icon}
        </div>

        <p className="mt-3 text-lg font-black">
          {item.name}
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-emerald-100">
          Explore Sri Lanka
        </p>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={`${item.name}, Sri Lanka`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Destinations() {
  const [province, setProvince] = useState('All');
  const [provinceOpen, setProvinceOpen] = useState(false);

  const [selectedStyle, setSelectedStyle] = useState(
    travelStyles[0]
  );

  const [styleOpen, setStyleOpen] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState('All');

  const [search, setSearch] = useState('');

  const [favorites, setFavorites] = useState([]);

  /* ================= FILTER ================= */

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return destinations.filter((item) => {
      const provinceMatch =
        province === 'All' ||
        item.province === province;

      const styleMatch =
        selectedStyle.categories.length === 0 ||
        selectedStyle.categories.includes(item.category);

      const categoryMatch = categoryMatches(
        activeCategory,
        item.category
      );

      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.province.toLowerCase().includes(query) ||
        item.district.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return (
        provinceMatch &&
        styleMatch &&
        categoryMatch &&
        searchMatch
      );
    });
  }, [
    province,
    selectedStyle,
    activeCategory,
    search,
  ]);

  /* ================= CLEAR ================= */

  function clearFilters() {
    setProvince('All');
    setSelectedStyle(travelStyles[0]);
    setActiveCategory('All');
    setSearch('');
    setProvinceOpen(false);
    setStyleOpen(false);
  }

  /* ================= FAVORITES ================= */

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className="min-h-screen bg-[#f7faf9] text-slate-900">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm md:px-12">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-xl shadow-md">
            🌴
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Explore{' '}
              <span className="text-emerald-600">
                LK
              </span>
            </h1>

            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              DISCOVER • EXPLORE • EXPERIENCE
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">

          <Link
            href="/"
            className="transition hover:text-emerald-600"
          >
            🏠 Home
          </Link>

          <Link
            href="/destinations"
            className="border-b-2 border-emerald-600 pb-1 font-semibold text-emerald-600"
          >
            📍 Destinations
          </Link>

          <Link
            href="/ai-planner"
            className="transition hover:text-emerald-600"
          >
            ✨ AI Planner
          </Link>

          <Link
            href="/map"
            className="transition hover:text-emerald-600"
          >
            🗺️ Map
          </Link>

          <Link
            href="/calculator"
            className="transition hover:text-emerald-600"
          >
            🧮 Cost Calculator
          </Link>

        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="hidden text-sm font-semibold text-slate-700 sm:block"
          >
            👤 Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-700"
          >
            ✨ Register
          </Link>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="relative mx-4 mt-5 overflow-visible rounded-[28px] bg-[#07384b] text-white shadow-xl md:mx-12">

        <div className="absolute inset-0 overflow-hidden rounded-[28px]">

          <img
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=80"
            alt="Explore Sri Lanka"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#062e3d]/95 via-[#073c49]/85 to-black/30" />

        </div>

        <div className="relative z-10 px-7 pb-9 pt-11 md:px-14 md:pb-11">

          <p className="text-sm italic text-emerald-300">
            Discover Amazing
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-6xl">
            Sri Lanka{' '}
            <span className="text-emerald-400">
              Destinations
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
            Explore golden beaches, misty mountains,
            waterfalls, wildlife, ancient cities and
            unforgettable destinations across Sri Lanka.
          </p>

          {/* ================= FILTER BOX ================= */}

          <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl bg-white/95 p-3 text-slate-900 shadow-2xl lg:grid-cols-[1fr_1fr_1.4fr]">

            {/* PROVINCE */}

            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setProvinceOpen(!provinceOpen);
                  setStyleOpen(false);
                }}
                className="flex min-h-[68px] w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 text-left hover:border-emerald-400"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
                    📍
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Province
                    </p>

                    <p className="text-sm font-bold text-slate-800">
                      {province === 'All'
                        ? 'Select Province (All)'
                        : province}
                    </p>

                  </div>

                </div>

                <span>
                  ▼
                </span>

              </button>

              {provinceOpen && (

                <div className="absolute left-0 right-0 top-full z-[300] mt-2 max-h-[320px] overflow-y-auto rounded-2xl border bg-white p-2 shadow-2xl">

                  {provinces.map((item) => (

                    <button
                      type="button"
                      key={item}
                      onClick={() => {
                        setProvince(item);
                        setProvinceOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm ${
                        province === item
                          ? 'bg-emerald-50 font-bold text-emerald-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >

                      {item === 'All'
                        ? 'All Provinces'
                        : item}

                      {province === item && (
                        <span>
                          ✓
                        </span>
                      )}

                    </button>

                  ))}

                </div>

              )}

            </div>

            {/* TRAVEL STYLE */}

            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setStyleOpen(!styleOpen);
                  setProvinceOpen(false);
                }}
                className="flex min-h-[68px] w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 text-left hover:border-emerald-400"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
                    {selectedStyle.icon}
                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Travel Style
                    </p>

                    <p className="text-sm font-bold">
                      {selectedStyle.title}
                    </p>

                  </div>

                </div>

                <span>
                  ▼
                </span>

              </button>

              {styleOpen && (

                <div className="absolute left-0 right-0 top-full z-[300] mt-2 rounded-2xl border bg-white p-2 shadow-2xl">

                  {travelStyles.map((style) => (

                    <button
                      type="button"
                      key={style.title}
                      onClick={() => {
                        setSelectedStyle(style);
                        setStyleOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left ${
                        selectedStyle.title === style.title
                          ? 'bg-emerald-50'
                          : 'hover:bg-slate-50'
                      }`}
                    >

                      <span className="text-xl">
                        {style.icon}
                      </span>

                      <div>

                        <p className="text-sm font-bold">
                          {style.title}
                        </p>

                        <p className="text-[10px] text-slate-400">
                          {style.desc}
                        </p>

                      </div>

                    </button>

                  ))}

                </div>

              )}

            </div>

            {/* SEARCH */}

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search Sigiriya, Ella, Mirissa..."
                className="min-h-[68px] w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm outline-none focus:border-emerald-500"
              />

              {search && (

                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400"
                >
                  ×
                </button>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CATEGORY BUTTONS ================= */}

      <section className="mx-auto mt-7 w-[94%] max-w-[1450px]">

        <div className="flex flex-wrap items-center gap-3">

          {categoryButtons.map((item) => (

            <button
              type="button"
              key={item.name}
              onClick={() =>
                setActiveCategory(item.name)
              }
              className={`rounded-full px-5 py-3 text-sm font-semibold shadow-sm ${
                activeCategory === item.name
                  ? 'bg-emerald-600 text-white'
                  : 'border bg-white text-slate-600 hover:bg-emerald-50'
              }`}
            >

              {item.icon}{' '}
              {item.name}

            </button>

          ))}

          <button
            type="button"
            onClick={clearFilters}
            className="ml-auto rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700"
          >
            View All Destinations →
          </button>

        </div>

      </section>

      {/* ================= TITLE ================= */}

      <section className="mx-auto mt-9 w-[94%] max-w-[1450px]">

        <p className="text-xs font-bold uppercase tracking-[2px] text-emerald-600">
          Explore Sri Lanka
        </p>

        <h2 className="mt-1 text-2xl font-black text-[#153d59]">

          {province === 'All'
            ? 'All Destinations'
            : province}

        </h2>

        <p className="mt-1 text-sm text-slate-400">

          {filteredDestinations.length}{' '}

          {filteredDestinations.length === 1
            ? 'destination'
            : 'destinations'}{' '}

          found

        </p>

      </section>

      {/* ================= CARDS ================= */}

      <section className="mx-auto w-[94%] max-w-[1450px] py-6">

        {filteredDestinations.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredDestinations.map((item) => {

              const favorite =
                favorites.includes(item.id);

              const slug =
                slugify(item.name);

              return (

                <Link
                  key={item.id}
                  href={`/destinations/${slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div className="relative h-[195px] overflow-hidden bg-slate-200">

                    <DestinationImage item={item} />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

                    {/* CATEGORY */}

                    <div className="absolute left-3 top-3 rounded-full bg-[#07574d]/90 px-3 py-1.5 text-[11px] font-bold text-white">

                      {item.icon}{' '}
                      {item.category}

                    </div>

                    {/* FAVORITE */}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                      className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-xl backdrop-blur ${
                        favorite
                          ? 'bg-white text-red-500'
                          : 'bg-black/30 text-white'
                      }`}
                    >
                      {favorite ? '♥' : '♡'}
                    </button>

                  </div>

                  {/* CONTENT */}

                  <div className="p-4">

                    <h3 className="text-[16px] font-extrabold text-[#153d59]">
                      {item.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 min-h-[40px] text-xs leading-5 text-[#6a8092]">
                      {item.description}
                    </p>

                    <p className="mt-3 text-[10px] text-slate-400">
                      {item.district}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">

                      <span className="truncate text-[11px] font-semibold text-emerald-700">
                        📍 {item.province}
                      </span>

                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-2 text-[10px] font-bold text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white">
                        View Details →
                      </span>

                    </div>

                  </div>

                </Link>

              );

            })}

          </div>

        ) : (

          <div className="rounded-3xl bg-white py-20 text-center shadow-sm">

            <div className="text-5xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-black text-[#153d59]">
              No destinations found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try another destination, province,
              category or travel style.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
            >
              Show All Destinations
            </button>

          </div>

        )}

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="mt-10 bg-[#07384b] py-9">

        <div className="text-center">

          <h3 className="text-xl font-black text-white">
            Explore
            <span className="text-emerald-400">
              LK
            </span>
          </h3>

          <p className="mt-2 text-xs text-white/60">
            Discover • Explore • Experience Sri Lanka
          </p>

          <p className="mt-4 text-xs text-white/40">
            © 2026 ExploreLK. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}