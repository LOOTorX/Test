/* =================================================================
   HELVETIC3D — Single-Page-Preview (Hash-Router)
   Fasst Home / Shop / Produkt in einer Datei zusammen.
   Nutzt data.js + app.js (ICON, ART, PRODUCTS, CHF, stars, renderProducts …)
   ================================================================= */

/* --------------------------- Chrome --------------------------- */
function mountChrome() {
  const nav = [
    { href: '#/home',    label: 'Home',         key: 'home' },
    { href: '#/shop',    label: 'Shop',         key: 'shop' },
    { href: '#/custom',  label: 'Custom Print', key: 'custom' },
    { href: '#/about',   label: 'Über uns',     key: 'about' },
  ];
  const links = nav.map(n => `<a href="${n.href}" data-nav="${n.key}">${n.label}</a>`).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="topbar">
      <div class="wrap">
        <span class="swiss">✦ Schweizer Qualität</span>
        <span class="hide-sm">Gratis Versand ab CHF 60.–</span>
        <span class="hide-sm">Klimaneutraler Druck</span>
      </div>
    </div>
    <header class="nav">
      <div class="wrap">
        <a href="#/home" class="brand"><span class="mark"></span>Helvetic<b>3D</b></a>
        <nav class="nav-links">${links}</nav>
        <div class="nav-actions">
          <button class="icon-btn" aria-label="Suche">${ICON.search}</button>
          <button class="icon-btn" aria-label="Konto">${ICON.user}</button>
          <button class="icon-btn" id="cartBtn" aria-label="Warenkorb">${ICON.cart}<span class="cart-count">0</span></button>
          <button class="icon-btn burger" id="burger" aria-label="Menü">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mm-head">
        <a href="#/home" class="brand"><span class="mark"></span>Helvetic<b>3D</b></a>
        <button class="close" id="menuClose" aria-label="Schliessen">${ICON.close}</button>
      </div>
      <nav>${nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}</nav>
      <div class="mm-foot">Gratis Versand ab CHF 60.– · Klimaneutral gedruckt in der Schweiz 🇨🇭</div>
    </div>
    <main id="app"></main>`);

  document.body.insertAdjacentHTML('beforeend', `
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Warenkorb">
      <div class="drawer-head"><h3>Warenkorb</h3><button class="close" id="drawerClose" aria-label="Schliessen">${ICON.close}</button></div>
      <div class="drawer-body" id="drawerBody"></div>
      <div class="drawer-foot" id="drawerFoot"></div>
    </aside>`);
}

function mountFooter() {
  const social = ['Instagram', 'YouTube', 'LinkedIn', 'Pinterest'];
  document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer">
      <div class="wrap">
        <div class="foot-top">
          <div>
            <div class="brand"><span class="mark"></span>Helvetic<b>3D</b></div>
            <p class="foot-about">Dein Schweizer 3D-Druck-Atelier. Wir gestalten, drucken und veredeln Objekte mit Präzision — vom Prototyp bis zur Kleinserie.</p>
            <div class="foot-social">${social.map(s => `<a href="#/home" aria-label="${s}"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg></a>`).join('')}</div>
          </div>
          <div class="foot-col"><h5>Shop</h5><a href="#/shop">3D-Drucker</a><a href="#/shop">Filamente</a><a href="#/shop">Deko & Design</a><a href="#/shop">Ersatzteile</a></div>
          <div class="foot-col"><h5>Service</h5><a href="#/custom">Custom Print</a><a href="#/home">Versand & Retouren</a><a href="#/home">Materialguide</a><a href="#/home">Kontakt</a></div>
          <div class="foot-col"><h5>Unternehmen</h5><a href="#/about">Über uns</a><a href="#/home">Nachhaltigkeit</a><a href="#/home">Jobs</a><a href="#/home">AGB & Datenschutz</a></div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 Helvetic3D GmbH · Zürich</span>
          <span class="made-in"><span class="swiss-flag"></span> Designed &amp; gedruckt in der Schweiz</span>
          <span class="pay"><span>TWINT</span><span>VISA</span><span>MASTERCARD</span><span>PostFinance</span></span>
        </div>
      </div>
    </footer>`);
}

/* ---------------------- Wiederverwendbare Blöcke ---------------- */
function customSection() {
  return `
  <section class="custom section-pad" id="customSec">
    <div class="grid-bg"></div>
    <div class="wrap">
      <div>
        <span class="eyebrow">Custom Print Service</span>
        <h2>Du entwirfst.<br>Wir drucken.</h2>
        <p>Lade dein 3D-Modell hoch und erhalte in Minuten einen Richtpreis. Wir kümmern uns um Material, Qualität und Versand.</p>
        <div class="steps">
          <div class="step"><span class="n">1</span><div><h4>Modell hochladen</h4><p>STL, OBJ oder 3MF — bis 200 MB.</p></div></div>
          <div class="step"><span class="n">2</span><div><h4>Material &amp; Farbe wählen</h4><p>Über 30 Materialien und Farben verfügbar.</p></div></div>
          <div class="step"><span class="n">3</span><div><h4>Geliefert in 48 h</h4><p>Klimaneutraler Versand in der ganzen Schweiz.</p></div></div>
        </div>
        <a href="#/shop" class="btn btn--red">Angebot berechnen ${ICON.arrow}</a>
      </div>
      <div class="upload" id="uploadZone">
        <div class="up-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M8 8l4-4 4 4"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg></div>
        <h4>Datei hierher ziehen</h4>
        <p>oder klicken zum Auswählen</p>
        <button class="btn btn--red btn--sm">Datei wählen</button>
        <div class="formats">Unterstützt: STL · OBJ · 3MF · STEP</div>
      </div>
    </div>
  </section>`;
}

/* ------------------------------ Views -------------------------- */
function viewHome() {
  const cats = CATEGORIES.map((c, i) => `
    <a class="cat reveal" href="#/shop">
      <span class="idx">0${i + 1}</span>
      <div class="cat-ico">${ART[c.ico]}</div>
      <h3>${c.name}</h3><p>${c.sub}</p>
      <span class="go">Entdecken ${ICON.arrow}</span>
    </a>`).join('');

  return `
  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <span class="eyebrow">3D-Druck aus der Schweiz</span>
        <h1>Ideen werden<br><span class="out">greifbar.</span></h1>
        <p>Vom digitalen Modell zum realen Objekt — Helvetic3D druckt Design, Technik und Prototypen mit Schweizer Präzision.</p>
        <div class="hero-cta">
          <a href="#/shop" class="btn btn--red">Shop entdecken <span class="arrow">→</span></a>
          <a href="#/custom" class="btn btn--ghost">Eigenes Modell drucken</a>
        </div>
        <div class="hero-stats">
          <div><div class="num">12'400+</div><div class="lbl">Gedruckte Objekte</div></div>
          <div><div class="num">0.05 mm</div><div class="lbl">Schichtpräzision</div></div>
          <div><div class="num">48 h</div><div class="lbl">Ø Lieferzeit</div></div>
        </div>
      </div>
      <div class="stage">
        <div class="grid-bg"></div>
        <span class="stage-badge b1"><b>●</b>&nbsp; Live-Druck</span>
        <span class="stage-badge b2">100% recyceltes PLA</span>
        <div class="cube-scene"><div class="cube">
          <div class="face front"><span>3D</span></div><div class="face back"><span>CH</span></div>
          <div class="face right"><span>+</span></div><div class="face left"><span>◆</span></div>
          <div class="face top"><span>H3</span></div><div class="face bottom"><span>✦</span></div>
        </div></div>
      </div>
    </div>
  </section>

  <div class="marquee"><div class="marquee-track">
    <span>PLA · PETG · RESIN · TPU · HOLZ-FILAMENT · CARBON · METALL-OPTIK · PRÄZISION 0.05 MM · KLIMANEUTRAL</span>
    <span>PLA · PETG · RESIN · TPU · HOLZ-FILAMENT · CARBON · METALL-OPTIK · PRÄZISION 0.05 MM · KLIMANEUTRAL</span>
  </div></div>

  <section class="section-pad">
    <div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Sortiment</span><h2 style="margin-top:16px">Für Maker &amp;<br>Design-Fans</h2></div>
        <p>Vier Welten rund um den 3D-Druck — von der Maschine bis zum fertigen Objekt.</p>
      </div>
      <div class="cat-grid">${cats}</div>
    </div>
  </section>

  <section class="section-pad" style="padding-top:0">
    <div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Beliebt</span><h2 style="margin-top:16px">Bestseller diese Woche</h2></div>
        <a href="#/shop" class="btn btn--ghost btn--sm">Alle Produkte <span class="arrow">→</span></a>
      </div>
      <div class="prod-grid" id="featured"></div>
    </div>
  </section>

  ${customSection()}

  <section class="section-pad" id="aboutSec">
    <div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Warum Helvetic3D</span><h2 style="margin-top:16px">Schweizer Standards</h2></div>
        <p>Qualität, Nachhaltigkeit und Service — so drucken wir seit 2019 in Zürich.</p>
      </div>
      <div class="feat-grid">
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 2.5 1-6.3L3 8.9 9 8z"/></svg><div><h4>Präzision 0.05 mm</h4><p>Feinste Details dank kalibrierter High-End-Drucker.</p></div></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9M12 3v4M7 21c1-4 9-4 10 0"/><circle cx="12" cy="12" r="3"/></svg><div><h4>Klimaneutral</h4><p>Recycelte Materialien &amp; CO₂-kompensierter Versand.</p></div></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 18l6 3M21 18l-6 3M12 4v14"/></svg><div><h4>Gratis Versand</h4><p>Kostenlos ab CHF 60.– in die ganze Schweiz.</p></div></div>
        <div class="feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg><div><h4>Support vor Ort</h4><p>Persönliche Beratung im Atelier in Zürich.</p></div></div>
      </div>
    </div>
  </section>

  <section class="news section-pad">
    <div class="wrap">
      <span class="eyebrow" style="color:#fff;justify-content:center">Newsletter</span>
      <h2 style="margin-top:16px">Neue Designs, zuerst bei dir.</h2>
      <p>Erhalte monatlich frische Modelle, Material-Tipps und exklusive Rabatte.</p>
      <form class="news-form" onsubmit="event.preventDefault(); this.reset(); toast('Danke fürs Abonnieren!');">
        <input type="email" placeholder="deine@email.ch" required>
        <button class="btn" type="submit">Abonnieren</button>
      </form>
      <small>Kein Spam. Jederzeit abbestellbar. (Demo — keine Daten werden gesendet.)</small>
    </div>
  </section>`;
}

function initHome() {
  renderProducts(PRODUCTS.slice(0, 4), '#featured');
  document.getElementById('uploadZone')?.addEventListener('click', () => toast('Demo — Upload ist deaktiviert.'));
}

let shopState = { cat: 'all', sort: 'pop' };
function viewShop() {
  return `
  <section class="shop-head">
    <div class="wrap">
      <div class="crumbs"><a href="#/home">Home</a> / <b>Shop</b></div>
      <h1>Der ganze Shop</h1>
      <p>Maschinen, Material und fertige Objekte — alles aus unserem Atelier in Zürich.</p>
    </div>
  </section>
  <section class="section-pad" style="padding-top:40px">
    <div class="wrap">
      <div class="toolbar">
        <div class="filters" id="filters"></div>
        <span class="count" id="count"></span>
        <select class="sort" id="sort">
          <option value="pop">Beliebtheit</option>
          <option value="asc">Preis aufsteigend</option>
          <option value="desc">Preis absteigend</option>
          <option value="rating">Beste Bewertung</option>
        </select>
      </div>
      <div class="prod-grid" id="grid"></div>
    </div>
  </section>
  ${customSection()}`;
}

function initShop() {
  const FILTERS = [
    { key: 'all', label: 'Alle' }, { key: 'drucker', label: '3D-Drucker' },
    { key: 'filament', label: 'Filamente' }, { key: 'deko', label: 'Deko & Design' },
    { key: 'ersatz', label: 'Ersatzteile' },
  ];
  const sortSel = document.getElementById('sort');
  sortSel.value = shopState.sort;

  function draw() {
    document.getElementById('filters').innerHTML = FILTERS.map(f =>
      `<button class="chip ${f.key === shopState.cat ? 'active' : ''}" data-f="${f.key}">${f.label}</button>`).join('');
    document.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { shopState.cat = b.dataset.f; update(); });
  }
  function update() {
    let list = PRODUCTS.filter(p => shopState.cat === 'all' || p.catKey === shopState.cat);
    if (shopState.sort === 'asc') list.sort((a, b) => a.price - b.price);
    else if (shopState.sort === 'desc') list.sort((a, b) => b.price - a.price);
    else if (shopState.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else list.sort((a, b) => b.reviews - a.reviews);
    document.getElementById('count').textContent = `${list.length} Produkte`;
    draw();
    renderProducts(list, '#grid');
  }
  sortSel.addEventListener('change', e => { shopState.sort = e.target.value; update(); });
  document.getElementById('uploadZone')?.addEventListener('click', () => toast('Demo — Upload ist deaktiviert.'));
  update();
}

function viewProduct(id) {
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const colors = ['#0A0A0A', '#E30613', '#f3f3f2', '#0a7d33', '#1d4ed8'];
  const priceHtml = p.old
    ? `<span class="old" style="color:var(--gray-300);text-decoration:line-through;font-size:20px;margin-right:10px">${CHF(p.old)}</span>${CHF(p.price)}`
    : CHF(p.price);
  return `
  <section class="pdp">
    <div class="wrap">
      <div class="crumbs" style="margin-bottom:26px;font-size:13px;color:var(--gray-500)">
        <a href="#/home">Home</a> / <a href="#/shop">Shop</a> / <b>${p.name}</b>
      </div>
      <div class="pdp-grid">
        <div class="pdp-media">${ART[p.art]}</div>
        <div class="pdp-info">
          <span class="card-cat">${p.cat}</span>
          <h1>${p.name}</h1>
          <div class="rating"><span class="stars">${stars(p.rating)}</span> ${p.rating.toFixed(1)} · ${p.reviews} Bewertungen</div>
          <div class="pdp-price">${priceHtml}</div>
          <p class="pdp-desc">${p.desc} Gefertigt in unserem Atelier in Zürich mit einer Schichtpräzision von 0.05 mm — für saubere Kanten und feine Details. Jedes Objekt wird von Hand geprüft, bevor es klimaneutral versendet wird.</p>
          <div class="pdp-opts">
            <label>Farbe</label>
            <div class="swatches" id="swatches">${colors.map((c, i) => `<span class="swatch ${i === 0 ? 'on' : ''}" style="background:${c}"></span>`).join('')}</div>
          </div>
          <div class="pdp-actions">
            <button class="btn btn--red" style="flex:1" data-add="${p.id}">In den Warenkorb · ${CHF(p.price)}</button>
            <button class="btn btn--ghost" aria-label="Merken">♡</button>
          </div>
          <div class="pdp-meta">
            <div><b>Material</b><span>${p.catKey === 'filament' ? 'PLA · 1.75 mm' : 'PLA / PETG (wählbar)'}</span></div>
            <div><b>Lieferzeit</b><span>2–4 Werktage · gratis ab CHF 60.–</span></div>
            <div><b>Herkunft</b><span>Gedruckt in Zürich 🇨🇭</span></div>
            <div><b>Garantie</b><span>30 Tage Rückgaberecht</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-pad" style="padding-top:0">
    <div class="wrap">
      <div class="sec-head">
        <div><span class="eyebrow">Passt dazu</span><h2 style="margin-top:16px;font-size:clamp(26px,3.4vw,40px)">Das könnte dir gefallen</h2></div>
        <a href="#/shop" class="btn btn--ghost btn--sm">Zum Shop <span class="arrow">→</span></a>
      </div>
      <div class="prod-grid" id="related"></div>
    </div>
  </section>`;
}

function initProduct(id) {
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  document.querySelectorAll('#swatches .swatch').forEach(s =>
    s.onclick = () => { document.querySelectorAll('#swatches .swatch').forEach(x => x.classList.remove('on')); s.classList.add('on'); });
  renderProducts(PRODUCTS.filter(x => x.id !== p.id).slice(0, 4), '#related');
}

/* ------------------------------ Router ------------------------- */
function setActiveNav(key) {
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === key));
}

function router() {
  const app = document.getElementById('app');
  const hash = location.hash.replace(/^#\/?/, '');   // "", "home", "shop", "product/p3", "custom", "about"
  const [route, param] = hash.split('/');
  window.scrollTo(0, 0);

  if (route === 'shop') { app.innerHTML = viewShop(); initShop(); setActiveNav('shop'); }
  else if (route === 'product') { app.innerHTML = viewProduct(param); initProduct(param); setActiveNav('shop'); }
  else if (route === 'custom') { app.innerHTML = viewHome(); initHome(); setActiveNav('custom'); document.getElementById('customSec')?.scrollIntoView(); }
  else if (route === 'about') { app.innerHTML = viewHome(); initHome(); setActiveNav('about'); document.getElementById('aboutSec')?.scrollIntoView(); }
  else { app.innerHTML = viewHome(); initHome(); setActiveNav('home'); }

  observeReveal();
}

/* ------------------------------ Boot --------------------------- */
mountChrome();
mountFooter();
wireChrome();
window.addEventListener('hashchange', router);
router();
