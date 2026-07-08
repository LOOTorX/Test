/* =================================================================
   HELVETIC3D — App-Logik (reines Front-End)
   Warenkorb wird nur im Speicher gehalten — keine Persistenz/Backend
   ================================================================= */

/* ----------------------------- Icons --------------------------- */
const ICON = {
  cart:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.4a1.5 1.5 0 0 0 1.5 1.2h8.7a1.5 1.5 0 0 0 1.5-1.2L22 7H6"/></svg>',
  plus:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>',
  user:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
};

const CHF = n => 'CHF ' + n.toFixed(2).replace('.00', '.–');
const stars = r => '★★★★★☆☆☆☆☆'.slice(5 - Math.round(r), 10 - Math.round(r));

/* --------------------------- Cart State ------------------------ */
let CART = [];

function cartCount() { return CART.reduce((n, i) => n + i.qty, 0); }
function cartTotal() { return CART.reduce((n, i) => n + i.qty * i.price, 0); }

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const line = CART.find(x => x.id === id);
  if (line) line.qty++;
  else CART.push({ ...p, qty: 1 });
  syncCart();
  toast(`«${p.name}» hinzugefügt`);
  openDrawer();
}
function changeQty(id, d) {
  const line = CART.find(x => x.id === id);
  if (!line) return;
  line.qty += d;
  if (line.qty <= 0) CART = CART.filter(x => x.id !== id);
  syncCart();
}
function removeLine(id) { CART = CART.filter(x => x.id !== id); syncCart(); }

function syncCart() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cartCount();
    el.style.display = cartCount() ? 'grid' : 'none';
  });
  renderDrawer();
}

/* --------------------------- Rendering ------------------------- */
function productCard(p) {
  const tag = p.tag
    ? `<span class="tag ${p.tagType === 'new' ? 'new' : p.tagType === 'sale' ? 'sale' : ''}">${p.tag}</span>` : '';
  const price = p.old
    ? `<span class="price"><span class="old">${CHF(p.old)}</span>${CHF(p.price)}</span>`
    : `<span class="price">${CHF(p.price)}</span>`;
  return `
    <article class="card reveal" data-cat="${p.catKey}">
      <a class="card-media" href="product.html?id=${p.id}">
        ${tag}
        <button class="wish" aria-label="Merken">${ICON.heart}</button>
        ${ART[p.art]}
      </a>
      <div class="card-body">
        <span class="card-cat">${p.cat}</span>
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <p class="desc">${p.desc}</p>
        <div class="rating"><span class="stars">${stars(p.rating)}</span> ${p.rating.toFixed(1)} · ${p.reviews}</div>
        <div class="card-foot">
          ${price}
          <button class="add" data-add="${p.id}" aria-label="In den Warenkorb">${ICON.plus}</button>
        </div>
      </div>
    </article>`;
}

function renderProducts(list, mount) {
  const el = document.querySelector(mount);
  if (!el) return;
  el.innerHTML = list.map(productCard).join('');
  bindAdd();
  observeReveal();
}

function renderDrawer() {
  const body = document.getElementById('drawerBody');
  const foot = document.getElementById('drawerFoot');
  if (!body) return;

  if (!CART.length) {
    body.innerHTML = `<div class="drawer-empty">${ICON.cart}<h4>Dein Warenkorb ist leer</h4><p>Entdecke unsere schweizer 3D-Kreationen.</p></div>`;
    foot.style.display = 'none';
    return;
  }
  foot.style.display = 'block';
  body.innerHTML = CART.map(i => `
    <div class="line-item">
      <div class="thumb">${ART[i.art]}</div>
      <div class="li-info">
        <h4>${i.name}</h4>
        <div class="li-cat">${i.cat}</div>
        <div class="qty">
          <button data-dec="${i.id}">−</button><span>${i.qty}</span><button data-inc="${i.id}">+</button>
        </div>
        <div class="li-remove" data-rm="${i.id}">Entfernen</div>
      </div>
      <div class="li-price">${CHF(i.qty * i.price)}</div>
    </div>`).join('');

  const shipping = cartTotal() >= 60 ? 0 : 7.90;
  foot.innerHTML = `
    <div class="summ-row"><span>Zwischensumme</span><span>${CHF(cartTotal())}</span></div>
    <div class="summ-row"><span>Versand ${shipping === 0 ? '(gratis ab CHF 60)' : ''}</span><span>${shipping === 0 ? 'Gratis' : CHF(shipping)}</span></div>
    <div class="summ-total"><span>Total</span><span>${CHF(cartTotal() + shipping)}</span></div>
    <button class="btn btn--red btn--block">Zur Kasse ${ICON.arrow}</button>
    <small>🔒 Demo-Shop · Kein echter Bezahlvorgang</small>`;

  body.querySelectorAll('[data-inc]').forEach(b => b.onclick = () => changeQty(b.dataset.inc, 1));
  body.querySelectorAll('[data-dec]').forEach(b => b.onclick = () => changeQty(b.dataset.dec, -1));
  body.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => removeLine(b.dataset.rm));
}

function bindAdd() {
  document.querySelectorAll('[data-add]').forEach(b => {
    b.onclick = e => { e.preventDefault(); addToCart(b.dataset.add); };
  });
}

/* --------------------------- Drawer / Menu --------------------- */
function openDrawer() {
  document.getElementById('drawer')?.classList.add('open');
  document.getElementById('overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawer')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}
function toggleMenu(open) {
  const m = document.getElementById('mobileMenu');
  if (!m) return;
  m.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

/* ----------------------------- Toast --------------------------- */
let toastTimer;
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `${ICON.check}<span>${msg}</span>`;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ------------------------ Reveal on scroll --------------------- */
let io;
function observeReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  io = io || new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* --------------------------- Header wiring --------------------- */
function wireChrome() {
  document.getElementById('cartBtn')?.addEventListener('click', openDrawer);
  document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
  document.getElementById('overlay')?.addEventListener('click', closeDrawer);
  document.getElementById('burger')?.addEventListener('click', () => toggleMenu(true));
  document.getElementById('menuClose')?.addEventListener('click', () => toggleMenu(false));
  document.querySelectorAll('#mobileMenu nav a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDrawer(); toggleMenu(false); } });
  syncCart();
  observeReveal();
}
