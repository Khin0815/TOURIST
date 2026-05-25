/* ============================================================
ELYU - La Union Tourism Website
Enhanced JavaScript: Sidebar, Dark Mode, Modal, Map, Carousel
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

/* ============================================================
DATA — Info panel content for modal
============================================================ */
const INFO_DATA = {
beaches: [
{
title: 'San Juan Beach',
category: 'Beach Destination',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format',
desc: 'San Juan is the undisputed surfing capital of Northern Philippines. With consistent swells hitting the shore year-round, it attracts beginners and veteran surfers alike. The vibe here is laid-back and bohemian, with surf shacks, reggae music, and ocean sunsets that never get old.',
facts: ['Best surf months: Oct–Feb', 'Consistent 3–6 ft waves', 'Beginner-friendly breaks', 'Annual surf competitions', 'Night market every weekend'],
rating: 5
},
{
title: 'Bauang Beach',
category: 'Beach Destination',
location: '📍 Bauang, La Union',
image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format',
desc: 'Bauang offers calm, family-friendly waters perfect for swimming and relaxed beach days. Lined with resorts and beach clubs, it\'s ideal for day trips or weekend staycations from Manila. The sunset here is absolutely breathtaking.',
facts: ['Calm swimming waters', 'Multiple beach resorts', '5 hrs drive from Manila', 'Beachfront dining', 'Ideal for families'],
rating: 4
},
{
title: 'Darigayos Cove',
category: 'Hidden Gem',
location: '📍 Luna, La Union',
image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1887&auto=format',
desc: 'Darigayos Cove is a secluded paradise tucked away in Luna. The dramatic rock formations and crystal-clear emerald waters make it feel like a hidden world. It\'s perfect for snorkeling, cliff jumping, and exploring sea caves.',
facts: ['Crystal-clear waters', 'Rock formation snorkeling', 'Sea cave exploration', 'Less crowded', 'Cliff jumping spots'],
rating: 5
},
{
title: 'Pebble Beach',
category: 'Unique Beach',
location: '📍 Santo Tomas, La Union',
image: 'https://images.unsplash.com/photo-1506953829328-01752d5f2e1e?q=80&w=2071&auto=format',
desc: 'Unlike the typical sandy shores, Pebble Beach is covered with smooth, polished stones shaped by years of ocean waves. It\'s a truly unique experience — the sound of waves rolling over pebbles is incredibly soothing and meditative.',
facts: ['Unique pebble shoreline', 'Ideal for photography', 'Calming wave sounds', 'Great for reflection walks', 'Accessible by vehicle'],
rating: 4
},
{
title: 'Luna Beach',
category: 'Peaceful Retreat',
location: '📍 Luna, La Union',
image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format',
desc: 'Luna Beach is the serene escape you never knew you needed. Far from the bustling tourist crowds, it\'s the perfect spot for morning walks, yoga sessions by the water, or simply watching the world slow down.',
facts: ['Quiet & uncrowded', 'Perfect for sunrise walks', 'Near Darigayos Cove', 'Great beach camping', 'Local fishermen vibes'],
rating: 4
}
],
food: [
{
title: 'Baluarte',
category: 'Local Cuisine',
location: '📍 Various spots, La Union',
image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=2070&auto=format',
desc: 'Baluarte is a beloved La Union specialty — grilled meat (usually pork or chicken) marinated in a unique blend of native spices, citrus, and fermented ingredients. It\'s smoky, tangy, and absolutely addictive, best enjoyed with steaming white rice.',
facts: ['Pork or chicken variants', 'Slow-grilled to perfection', 'Best paired with sinanglaw', 'Available in wet markets', 'Ilocano heritage dish'],
rating: 5
},
{
title: 'Pindang',
category: 'Local Cuisine',
location: '📍 San Fernando City, La Union',
image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format',
desc: 'Pindang is salted and dried fish — a staple of the Ilocano breakfast table. Pan-fried to golden crispness and paired with garlic rice and tomatoes, it\'s the ultimate comfort food that locals and tourists crave.',
facts: ['Classic Ilocano breakfast', 'Various fish varieties', 'Best with garlic sinangag', 'Sold in tiangge markets', 'Sun-dried traditional method'],
rating: 4
},
{
title: 'Basi Wine',
category: 'Traditional Drink',
location: '📍 San Fernando City, La Union',
image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format',
desc: 'Basi is an ancient fermented sugarcane wine that dates back to pre-colonial times. It has a unique sweet-sour taste with earthy undertones. The famous Basi Revolt of 1807 was sparked when Spanish colonizers monopolized its production — a testament to how deeply this drink runs in Ilocano culture.',
facts: ['Pre-colonial origin', 'Sugarcane fermented', 'Symbol of Ilocano identity', 'Sparked the Basi Revolt', 'Available in souvenir shops'],
rating: 5
},
{
title: 'Inasin',
category: 'Local Cuisine',
location: '📍 Coastal towns, La Union',
image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2070&auto=format',
desc: 'Inasin is fresh fish rubbed generously with coarse rock salt and grilled over open charcoal flames. The simple preparation lets the natural sweetness of fresh-catch La Union fish shine through. It\'s beach food at its purest.',
facts: ['Fresh local catch', 'Rock salt seasoning only', 'Charcoal-grilled', 'Best eaten beachside', 'Often caught same day'],
rating: 4
}
],
stays: [
{
title: 'The Circle Hostel',
category: 'Surf Hostel',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format',
desc: 'The Circle Hostel is where surf culture meets community living. Located right on the beachfront in San Juan, it offers surf lessons, board rentals, and a vibrant hostel atmosphere that attracts young travelers from all over. The rooftop social area is legendary.',
facts: ['Beachfront location', 'Surf lesson packages', 'Board & gear rental', 'Social rooftop deck', 'Budget-friendly dorms'],
rating: 5
},
{
title: 'Aureo Resort',
category: 'Luxury Resort',
location: '📍 San Fernando City, La Union',
image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format',
desc: 'Aureo is the premium beach resort experience in La Union. With infinity pools overlooking the ocean, spa services, fine dining, and spacious rooms, it\'s the go-to destination for couples and families who want to indulge. Sunsets from the poolside bar are unmatched.',
facts: ['Infinity pool', 'Full-service spa', 'Fine dining restaurant', 'Ocean-view rooms', 'Wedding venue'],
rating: 5
},
{
title: 'San Juan Surf Resort',
category: 'Surf Resort',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format',
desc: 'Built for surfers, by surfers — San Juan Surf Resort combines comfortable accommodations with world-class wave access. Daily surf reports, certified instructors, and equipment rental make it the ultimate hub for anyone wanting to seriously improve their surfing.',
facts: ['Steps from the break', 'Certified surf instructors', 'Daily surf forecasts', 'Longboard & shortboard rental', 'Video surf analysis'],
rating: 4
},
{
title: 'Thunderbird Resort',
category: 'Premium Resort',
location: '📍 Poro Point, San Fernando',
image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format',
desc: 'Thunderbird is a full-scale resort destination featuring a casino, 18-hole golf course, multiple dining venues, and stunning ocean views. It\'s the most complete resort experience in La Union, ideal for corporate events and luxury getaways.',
facts: ['Casino & gaming', '18-hole golf course', 'Multiple restaurants', 'Conference facilities', 'Helipad access'],
rating: 4
}
],
cafes: [
{
title: 'El Union Coffee',
category: 'Specialty Cafe',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format',
desc: 'El Union is arguably the cafe that put La Union on the specialty coffee map. Famous for its dirty horchata — a blend of cold brew and rice milk — and its cool, artsy atmosphere, it draws coffee pilgrims from Manila and beyond. The vibe is bohemian surf-meets-third-wave coffee.',
facts: ['Famous dirty horchata', 'Single-origin pour overs', 'Surf culture aesthetic', 'Alfresco & indoor seating', 'Coffee & merch shop'],
rating: 5
},
{
title: 'Little Yellow House',
category: 'Dessert Cafe',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format',
desc: 'Little Yellow House is a charming dessert cafe that became an Instagram sensation. Their unique creations — from ube lattes to buko pandan waffles — are as beautiful as they are delicious. The yellow facade and fairy lights make it incredibly photogenic.',
facts: ['Instagram-famous spot', 'Creative dessert drinks', 'Ube & local flavor specials', 'Fairy-light ambiance', 'Cute outdoor seating'],
rating: 4
},
{
title: 'Great Northwest',
category: 'View Cafe',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format',
desc: 'Great Northwest offers what might be the most spectacular sunset view in all of La Union. Perched with an unobstructed view of the South China Sea, it\'s the perfect place to end your day with a craft beer or cocktail as the sky transforms into a palette of orange and pink.',
facts: ['Unobstructed sea views', 'Prime sunset seating', 'Craft beers & cocktails', 'Weekend live music', 'Full food menu'],
rating: 5
},
{
title: 'Surftown Cafe',
category: 'All-Day Cafe',
location: '📍 San Juan, La Union',
image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format',
desc: 'Surftown Cafe is the surfer\'s morning ritual spot. Open from early dawn, it serves hearty breakfast burritos, cold brew, and fresh açai bowls to fuel your session in the water. It\'s casual, energetic, and totally unpretentious.',
facts: ['Open from 6AM', 'Post-surf breakfast spot', 'Açai bowls & burritos', 'Cold brew on tap', 'Surf community hangout'],
rating: 4
}
]
};


/* ============================================================
TEAM DATA
============================================================ */
const TEAM = [
{ name: 'Alex Rivera', role: 'Project Lead', emoji: '🌊', desc: 'Oversees the entire ELYU project, ensuring the vision of La Union comes to life through design and content.' },
{ name: 'Mia Santos', role: 'UI/UX Designer', emoji: '🎨', desc: 'Crafted the sunset-inspired visual identity and ensured every pixel reflects the beauty of La Union.' },
{ name: 'Kai Reyes', role: 'Web Developer', emoji: '💻', desc: 'Built the interactive features, smooth animations, and responsive layout powering this tourism website.' },
{ name: 'Lea Domingo', role: 'Content Writer', emoji: '✍️', desc: 'Researched and wrote the cultural histories, food descriptions, and travel guides you find throughout this site.' },
{ name: 'Marco Cruz', role: 'Photo Curator', emoji: '📸', desc: 'Sourced and curated every image, ensuring they authentically capture the soul of La Union.' }
];

/* ============================================================
HELPERS
============================================================ */
const $ = id => document.getElementById(id);

/* ============================================================
1. SIDEBAR TOGGLE (Collapse / Expand)
============================================================ */
const sidebar = $('sidebar');
const mainEl = $('main');
const toggleBtn = $('sidebarToggle');
const toggleIcon = $('toggleIcon');
const toggleLabel = $('toggleLabel');
let isCollapsed = false;

toggleBtn.addEventListener('click', function () {
isCollapsed = !isCollapsed;
sidebar.classList.toggle('collapsed', isCollapsed);
mainEl.classList.toggle('shifted', isCollapsed);
toggleIcon.textContent = isCollapsed ? '▶' : '◀';
toggleLabel.textContent = isCollapsed ? 'Expand' : 'Collapse';
});

/* ============================================================
2. DARK MODE TOGGLE
============================================================ */
const darkToggle = $('darkToggle');
const darkIcon = $('darkIcon');
const darkLabel = $('darkLabel');
let isDark = false;

// Restore from localStorage
if (localStorage.getItem('elyu-dark') === 'true') {
isDark = true;
document.body.classList.add('dark-mode');
darkIcon.textContent = '☀️';
darkLabel.textContent = 'Light Mode';
}

darkToggle.addEventListener('click', function () {
isDark = !isDark;
document.body.classList.toggle('dark-mode', isDark);
darkIcon.textContent = isDark ? '☀️' : '🌙';
darkLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
localStorage.setItem('elyu-dark', isDark);
});

/* ============================================================
3. SMOOTH NAV & ACTIVE HIGHLIGHT
============================================================ */
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('section');

function setActiveLink(id) {
navLinks.forEach(link => {
const href = link.getAttribute('href').substring(1);
if (href === id) {
link.style.background = 'var(--sunset-orange)';
link.style.color = 'white';
link.style.transform = 'translateX(8px)';
} else {
link.style.background = 'rgba(255,255,255,0.06)';
link.style.color = 'var(--ocean-mist)';
link.style.transform = 'translateX(0)';
}
});
}

navLinks.forEach(link => {
link.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
const targetSection = document.getElementById(targetId);
if (targetSection) {
targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
setActiveLink(targetId);
});
});

// Highlight on scroll
window.addEventListener('scroll', function () {
let current = '';
const scrollPos = window.scrollY + 200;
sections.forEach(sec => {
if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.clientHeight) {
current = sec.getAttribute('id');
}
});
if (current) setActiveLink(current);
});

// Initial highlight
setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

/* ============================================================
4. INFO MODAL
============================================================ */
const modal = $('infoModal');
const modalBanner = $('modalBanner');
const modalCategory = $('modalCategory');
const modalTitle = $('modalTitle');
const modalLocation = $('modalLocation');
const modalDesc = $('modalDesc');
const modalFacts = $('modalFacts');
const modalRating = $('modalRating');
const modalClose = $('modalClose');

function openModal(type, index) {
const data = INFO_DATA[type][index];
if (!data) return;

// Populate
modalBanner.style.cssText = `
background-image: url('${data.image}');
background-size: cover;
background-position: center;
height: 260px;
width: 100%;
`;
modalCategory.textContent = data.category;
modalTitle.textContent = data.title;
modalLocation.textContent = data.location;
modalDesc.textContent = data.desc;

// Facts
modalFacts.innerHTML = data.facts
.map(f => `<span class="fact-tag">${f}</span>`)
.join('');

// Stars
const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
modalRating.innerHTML = `<span class="stars">${stars}</span> ${data.rating}.0 / 5.0 &nbsp;·&nbsp; Highly Recommended`;

// Show
modal.classList.add('active');
document.body.style.overflow = 'hidden';
}

function closeModal() {
modal.classList.remove('active');
document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', function (e) {
if (e.target === modal) closeModal();
});

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') closeModal();
});

// Attach click on beach slides
document.querySelectorAll('.slides li').forEach(li => {
li.addEventListener('click', function () {
const type = this.dataset.info;
const index = parseInt(this.dataset.index);
openModal(type, index);
});
});

// Attach click on gallery cards
document.querySelectorAll('.gallery-card').forEach(card => {
card.addEventListener('click', function () {
const type = this.dataset.info;
const index = parseInt(this.dataset.index);
openModal(type, index);
});
});

/* ============================================================
6. TEAM CAROUSEL
============================================================ */
const teamTrack = $('teamTrack');
const prevBtn = $('prevBtn');
const nextBtn = $('nextBtn');
const dotsContainer = $('carouselDots');

let carouselIndex = 0;
let autoSlideInterval;
const VISIBLE_CARDS = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

// Build team cards
TEAM.forEach((member, i) => {
const card = document.createElement('div');
card.className = 'team-card';
card.innerHTML = `
<div class="team-avatar">${member.emoji}</div>
<div class="team-name">${member.name}</div>
<div class="team-role">${member.role}</div>
<div class="team-desc">${member.desc}</div>
`;
teamTrack.appendChild(card);

// Build dot
const dot = document.createElement('div');
dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
dot.addEventListener('click', () => goTo(i));
dotsContainer.appendChild(dot);
});

function updateDots(index) {
document.querySelectorAll('.carousel-dot').forEach((d, i) => {
d.classList.toggle('active', i === index);
});
}

function goTo(index) {
const cards = teamTrack.querySelectorAll('.team-card');
const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 244;
const maxIndex = Math.max(0, TEAM.length - VISIBLE_CARDS());
carouselIndex = Math.max(0, Math.min(index, maxIndex));
teamTrack.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
updateDots(carouselIndex);
}

prevBtn.addEventListener('click', () => { goTo(carouselIndex - 1); resetAutoSlide(); });
nextBtn.addEventListener('click', () => { goTo(carouselIndex + 1); resetAutoSlide(); });

function startAutoSlide() {
autoSlideInterval = setInterval(() => {
const max = Math.max(0, TEAM.length - VISIBLE_CARDS());
goTo(carouselIndex < max ? carouselIndex + 1 : 0);
}, 4000);
}

function resetAutoSlide() {
clearInterval(autoSlideInterval);
startAutoSlide();
}

startAutoSlide();
window.addEventListener('resize', () => goTo(carouselIndex));

}); // end DOMContentLoaded
