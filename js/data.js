/* =================================================================
   HELVETIC3D — Produktdaten & SVG-Illustrationen
   Reine Front-End-Demo · keine Backend-Anbindung
   ================================================================= */

/* ---- Minimalistische 3D-Objekt-Illustrationen (Inline-SVG) ---- */
const ART = {
  printer: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="18" width="80" height="72" rx="3"/>
    <rect x="30" y="70" width="60" height="20" fill="#f3f3f2"/>
    <line x1="30" y1="34" x2="90" y2="34"/>
    <rect x="52" y="40" width="16" height="14" fill="#E30613" stroke="#E30613"/>
    <line x1="60" y1="54" x2="60" y2="66"/>
    <rect x="14" y="90" width="92" height="14" rx="2" fill="#0A0A0A"/>
    <rect x="44" y="76" width="32" height="8" fill="#fff"/>
  </svg>`,

  filament: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="44"/>
    <circle cx="60" cy="60" r="34" stroke="#E30613"/>
    <circle cx="60" cy="60" r="12" fill="#f3f3f2"/>
    <circle cx="60" cy="60" r="4" fill="#0A0A0A" stroke="none"/>
    <path d="M96 46 q14 4 10 18" stroke="#E30613"/>
  </svg>`,

  vase: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 20 h32 l-4 22 q14 12 14 34 q0 26 -26 26 q-26 0 -26 -26 q0 -22 14 -34 z" fill="#f3f3f2"/>
    <path d="M40 60 q20 10 40 0" stroke="#E30613"/>
    <path d="M42 78 q18 9 36 0" stroke="#E30613"/>
    <line x1="44" y1="20" x2="76" y2="20"/>
  </svg>`,

  stand: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 92 h60 l-8 -20 h-30 q-14 -34 -14 -50" fill="#f3f3f2"/>
    <rect x="46" y="26" width="34" height="52" rx="4" transform="rotate(6 60 52)" fill="#E30613" stroke="#E30613"/>
    <line x1="30" y1="92" x2="90" y2="92" stroke-width="5"/>
  </svg>`,

  gear: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 16 l6 10 h-12 z M60 104 l6 -10 h-12 z M16 60 l10 -6 v12 z M104 60 l-10 -6 v12 z
             M29 29 l11 3 -8 8 z M91 91 l-11 -3 8 -8 z M91 29 l-3 11 -8 -8 z M29 91 l3 -11 8 8 z" fill="#0A0A0A"/>
    <circle cx="60" cy="60" r="30" fill="#f3f3f2"/>
    <circle cx="60" cy="60" r="12" stroke="#E30613"/>
  </svg>`,

  figure: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 52 q-10 -8 -6 -22 q10 6 12 16 M80 52 q10 -8 6 -22 q-10 6 -12 16" fill="#f3f3f2"/>
    <circle cx="60" cy="52" r="20" fill="#f3f3f2"/>
    <path d="M46 66 q14 12 28 0 l6 30 h-40 z" fill="#E30613" stroke="#E30613"/>
    <circle cx="53" cy="50" r="2.5" fill="#0A0A0A" stroke="none"/>
    <circle cx="67" cy="50" r="2.5" fill="#0A0A0A" stroke="none"/>
  </svg>`,

  nozzle: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 24 h32 v30 l-12 40 h-8 l-12 -40 z" fill="#f3f3f2"/>
    <line x1="44" y1="38" x2="76" y2="38"/>
    <path d="M54 84 h12 l-4 12 h-4 z" fill="#E30613" stroke="#E30613"/>
    <line x1="40" y1="24" x2="80" y2="24" stroke-width="5"/>
  </svg>`,

  lamp: `<svg class="art" viewBox="0 0 120 120" fill="none" stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 40 h48 l10 44 h-68 z" fill="#f3f3f2"/>
    <line x1="30" y1="84" x2="90" y2="84"/>
    <line x1="44" y1="40" x2="38" y2="84" stroke="#E30613"/>
    <line x1="60" y1="40" x2="60" y2="84" stroke="#E30613"/>
    <line x1="76" y1="40" x2="82" y2="84" stroke="#E30613"/>
    <line x1="60" y1="20" x2="60" y2="40"/>
    <circle cx="60" cy="18" r="4"/>
  </svg>`,
};

/* ---------------------------- Katalog -------------------------- */
const PRODUCTS = [
  { id: 'p1', name: 'Alpine Pro X2',      cat: 'Drucker',    catKey: 'drucker',  price: 899,   old: null,  art: 'printer',  tag: 'Bestseller', tagType: 'default',
    desc: 'Präziser FDM-Drucker, 300×300×400 mm Bauraum.', rating: 4.9, reviews: 214 },
  { id: 'p2', name: 'Filament PLA Set «Prisma»', cat: 'Filament', catKey: 'filament', price: 34.90, old: null, art: 'filament', tag: 'Neu', tagType: 'new',
    desc: '6 Farben · 1.75 mm · Made in Switzerland.', rating: 4.8, reviews: 512 },
  { id: 'p3', name: 'Vase «Aletsch»',     cat: 'Deko',       catKey: 'deko',     price: 49,    old: null,  art: 'vase',     tag: null, tagType: 'default',
    desc: 'Spiralgedruckte Designvase, 22 cm.', rating: 4.7, reviews: 88 },
  { id: 'p4', name: 'Handyhalter «Titlis»', cat: 'Deko',     catKey: 'deko',     price: 24.90, old: 32,    art: 'stand',    tag: '-22%', tagType: 'sale',
    desc: 'Ergonomischer Ständer für Tisch & Nachttisch.', rating: 4.6, reviews: 143 },
  { id: 'p5', name: 'Präzisions-Zahnräder', cat: 'Ersatzteile', catKey: 'ersatz', price: 18.50, old: null, art: 'gear',   tag: null, tagType: 'default',
    desc: 'Technik-Set, verschiedene Module.', rating: 4.9, reviews: 61 },
  { id: 'p6', name: 'Figur «Steinbock»',  cat: 'Deko',       catKey: 'deko',     price: 39,    old: null,  art: 'figure',   tag: null, tagType: 'default',
    desc: 'Detailreiche Sammlerfigur, handbemalt.', rating: 5.0, reviews: 37 },
  { id: 'p7', name: 'Düsen-Set 0.2–0.8 mm', cat: 'Ersatzteile', catKey: 'ersatz', price: 12.90, old: null, art: 'nozzle',  tag: 'Neu', tagType: 'new',
    desc: 'Gehärtete Messingdüsen, 5 Stück.', rating: 4.8, reviews: 205 },
  { id: 'p8', name: 'Lampenschirm «Léman»', cat: 'Deko',     catKey: 'deko',     price: 69,    old: 89,    art: 'lamp',     tag: '-22%', tagType: 'sale',
    desc: 'Geometrisches Lichtspiel, E27-Fassung.', rating: 4.7, reviews: 54 },
];

const CATEGORIES = [
  { key: 'drucker',  name: '3D-Drucker',   sub: 'FDM & Resin für jedes Level', ico: 'printer' },
  { key: 'filament', name: 'Filamente',    sub: 'PLA, PETG & Spezialmaterial', ico: 'filament' },
  { key: 'deko',     name: 'Deko & Design', sub: 'Fertige Objekte für dein Zuhause', ico: 'vase' },
  { key: 'ersatz',   name: 'Ersatzteile',  sub: 'Düsen, Zahnräder & Zubehör', ico: 'gear' },
];
