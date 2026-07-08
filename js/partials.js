/* =================================================================
   HELVETIC3D — Gemeinsame Bausteine (Header · Footer · Drawer)
   Werden per JS injiziert, damit jede Seite konsistent bleibt.
   ================================================================= */

function mountChrome(active = '') {
  const nav = [
    { href: 'index.html',   label: 'Home',    key: 'home' },
    { href: 'shop.html',    label: 'Shop',    key: 'shop' },
    { href: 'shop.html#custom', label: 'Custom Print', key: 'custom' },
    { href: 'index.html#about', label: 'Über uns', key: 'about' },
  ];
  const links = nav.map(n =>
    `<a href="${n.href}" class="${n.key === active ? 'active' : ''}">${n.label}</a>`).join('');

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
        <a href="index.html" class="brand"><span class="mark"></span>Helvetic<b>3D</b></a>
        <nav class="nav-links">${links}</nav>
        <div class="nav-actions">
          <button class="icon-btn" aria-label="Suche">${ICON.search}</button>
          <button class="icon-btn" aria-label="Konto">${ICON.user}</button>
          <button class="icon-btn" id="cartBtn" aria-label="Warenkorb">
            ${ICON.cart}<span class="cart-count">0</span>
          </button>
          <button class="icon-btn burger" id="burger" aria-label="Menü">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
      <div class="mm-head">
        <a href="index.html" class="brand"><span class="mark"></span>Helvetic<b>3D</b></a>
        <button class="close" id="menuClose" aria-label="Schliessen">${ICON.close}</button>
      </div>
      <nav>${nav.map(n => `<a href="${n.href}">${n.label}</a>`).join('')}</nav>
      <div class="mm-foot">Gratis Versand ab CHF 60.– · Klimaneutral gedruckt in der Schweiz 🇨🇭</div>
    </div>`);

  // Drawer + overlay am Ende des Body
  document.body.insertAdjacentHTML('beforeend', `
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Warenkorb">
      <div class="drawer-head">
        <h3>Warenkorb</h3>
        <button class="close" id="drawerClose" aria-label="Schliessen">${ICON.close}</button>
      </div>
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
            <div class="foot-social">
              ${social.map(s => `<a href="#" aria-label="${s}"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg></a>`).join('')}
            </div>
          </div>
          <div class="foot-col">
            <h5>Shop</h5>
            <a href="shop.html">3D-Drucker</a>
            <a href="shop.html">Filamente</a>
            <a href="shop.html">Deko & Design</a>
            <a href="shop.html">Ersatzteile</a>
          </div>
          <div class="foot-col">
            <h5>Service</h5>
            <a href="shop.html#custom">Custom Print</a>
            <a href="#">Versand & Retouren</a>
            <a href="#">Materialguide</a>
            <a href="#">Kontakt</a>
          </div>
          <div class="foot-col">
            <h5>Unternehmen</h5>
            <a href="index.html#about">Über uns</a>
            <a href="#">Nachhaltigkeit</a>
            <a href="#">Jobs</a>
            <a href="#">AGB & Datenschutz</a>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 Helvetic3D GmbH · Zürich</span>
          <span class="made-in"><span class="swiss-flag"></span> Designed &amp; gedruckt in der Schweiz</span>
          <span class="pay"><span>TWINT</span><span>VISA</span><span>MASTERCARD</span><span>PostFinance</span></span>
        </div>
      </div>
    </footer>`);
}
