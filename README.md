# Helvetic3D — 3D-Webshop (Design-Demo) 🇨🇭

Beispiel-Website für einen Schweizer 3D-Druck-Webshop. **Reines Front-End / Design** —
es gibt bewusst **kein Backend**: Warenkorb, Filter und Formulare funktionieren als
Klick-Demo im Browser, ohne Server, Datenbank oder echten Bezahlvorgang.

## Design
Gestaltet im **Swiss International Style**: strenges Raster, starke Helvetica-Typografie,
viel Weissraum und der klassische Schweizer Rot-Akzent (`#E30613`).

## Features (Design)
- **Startseite** mit animiertem CSS-3D-Würfel, Hero, Kategorien & Bestsellern
- **Shop** mit Kategorie-Filtern und Sortierung
- **Produktdetail** mit Farbauswahl und «Passt dazu»-Empfehlungen
- **Warenkorb-Drawer** (In-Memory) inkl. Mengen, Versandlogik & Zwischensumme
- **Custom-Print-Bereich** (Upload-Attrappe für STL/OBJ/3MF)
- Voll **responsiv**, mobiles Menü, Toast-Meldungen, Scroll-Animationen
- Alle Produktbilder sind **Inline-SVGs** — keine externen Assets nötig

## Struktur
```
index.html      Startseite
shop.html       Produktübersicht mit Filtern
product.html    Produktdetailseite (?id=…)
css/style.css   Design-System
js/data.js      Produktkatalog + SVG-Illustrationen
js/app.js       Warenkorb- & UI-Logik
js/partials.js  Header, Footer, Drawer
```

## Lokal öffnen
Einfach `index.html` im Browser öffnen — oder ein kleiner Server:
```bash
python3 -m http.server 8000
# → http://localhost:8000
```
