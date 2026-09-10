const games = [
  {id:'supertuxkart',name:'SuperTuxKart',category:'Acción',version:'1.4',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',description:'Carreras de karts con pistas creativas, torneos y personajes del universo libre.',command:'flatpak install flathub net.supertuxkart.SuperTuxKart',youtube:'https://www.youtube.com/results?search_query=SuperTuxKart+Ubuntu+Linux+instalar',rating:'4.8'},
  {id:'0ad',name:'0 A.D.',category:'Estrategia',version:'0.27.0',free:true,method:'APT',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'Estrategia histórica en tiempo real, de código abierto y sin compras dentro del juego.',command:'sudo apt install 0ad',youtube:'https://www.youtube.com/results?search_query=0ad+Linux+Ubuntu+guia',rating:'4.7'},
  {id:'minecraft',name:'Minecraft Java',category:'Aventura',version:'1.21.8',free:false,method:'Oficial',image:'https://images.unsplash.com/photo-1607513746994-51f730a44832?auto=format&fit=crop&w=900&q=80',description:'Construye, explora y sobrevive en el sandbox más reconocible. Launcher nativo para Linux.',command:'flatpak install flathub com.mojang.Minecraft',youtube:'https://www.youtube.com/results?search_query=Minecraft+Java+Ubuntu+Linux+instalacion',rating:'4.9'},
  {id:'steam',name:'Steam',category:'Indie',version:'1.0.0.81',free:true,method:'APT',image:'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80',description:'La biblioteca de PC en Ubuntu: Proton amplía tu catálogo de juegos compatibles.',command:'sudo apt install steam-installer',youtube:'https://www.youtube.com/results?search_query=Steam+Proton+Ubuntu+guia+2026',rating:'4.6'},
  {id:'lutris',name:'Lutris',category:'Indie',version:'0.5.19',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',description:'Organiza y ejecuta tus juegos de Steam, GOG, Epic y emuladores desde un solo lugar.',command:'flatpak install flathub net.lutris.Lutris',youtube:'https://www.youtube.com/results?search_query=Lutris+Ubuntu+Linux+instalar+guia',rating:'4.8'},
  {id:'terraria',name:'Terraria',category:'Aventura',version:'1.4.5',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80',description:'Aventura 2D de exploración, construcción y combate con infinitas posibilidades.',command:'steam steam://rungameid/105600',youtube:'https://www.youtube.com/results?search_query=Terraria+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'wesnoth',name:'The Battle for Wesnoth',category:'Estrategia',version:'1.18.5',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'Campañas de fantasía y batallas tácticas por turnos con una comunidad enorme.',command:'flatpak install flathub org.wesnoth.Wesnoth',youtube:'https://www.youtube.com/results?search_query=Battle+for+Wesnoth+Ubuntu+Linux+instalar',rating:'4.7'},
  {id:'xonotic',name:'Xonotic',category:'Acción',version:'0.8.6',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'Shooter arena rápido y competitivo, libre, multiplataforma y sin cuentas obligatorias.',command:'flatpak install flathub org.xonotic.Xonotic',youtube:'https://www.youtube.com/results?search_query=Xonotic+Ubuntu+Linux+instalar',rating:'4.6'},
  {id:'luanti',name:'Luanti',category:'Aventura',version:'5.10.0',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80',description:'Motor sandbox voxel para explorar mundos, construir y jugar cientos de mods.',command:'flatpak install flathub net.minetest.Minetest',youtube:'https://www.youtube.com/results?search_query=Luanti+Minetest+Ubuntu+Linux+instalar',rating:'4.5'},
  {id:'openttd',name:'OpenTTD',category:'Estrategia',version:'14.1',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',description:'Gestiona rutas, trenes y ciudades en este clásico de transporte de código abierto.',command:'flatpak install flathub org.openttd.OpenTTD',youtube:'https://www.youtube.com/results?search_query=OpenTTD+Ubuntu+Linux+instalar+guia',rating:'4.8'},
  {id:'endless-sky',name:'Endless Sky',category:'Aventura',version:'0.10.8',free:true,method:'APT',image:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',description:'Comercio, exploración y combates espaciales en una aventura abierta y ligera.',command:'sudo apt install endless-sky',youtube:'https://www.youtube.com/results?search_query=Endless+Sky+Ubuntu+Linux+instalar',rating:'4.6'},
  {id:'dota2',name:'Dota 2',category:'Acción',version:'7.39',free:true,method:'Steam',image:'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80',description:'MOBA competitivo gratuito con cientos de héroes y una escena esports activa.',command:'steam steam://rungameid/570',youtube:'https://www.youtube.com/results?search_query=Dota+2+Linux+Ubuntu+Steam+instalar',rating:'4.5'},
  {id:'portal2',name:'Portal 2',category:'Aventura',version:'1.0.0.1',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80',description:'Rompecabezas, humor y una campaña cooperativa inolvidable basada en portales.',command:'steam steam://rungameid/620',youtube:'https://www.youtube.com/results?search_query=Portal+2+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'stardew-valley',name:'Stardew Valley',category:'Indie',version:'1.6.15',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',description:'Cultiva, pesca, explora minas y construye una nueva vida a tu propio ritmo.',command:'steam steam://rungameid/413150',youtube:'https://www.youtube.com/results?search_query=Stardew+Valley+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'celeste',name:'Celeste',category:'Indie',version:'1.4.0.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',description:'Plataformas preciso y una historia íntima sobre superar una montaña imposible.',command:'steam steam://rungameid/504230',youtube:'https://www.youtube.com/results?search_query=Celeste+Linux+Ubuntu+Steam+instalar',rating:'4.9'},
  {id:'hollow-knight',name:'Hollow Knight',category:'Acción',version:'1.5.78',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',description:'Metroidvania dibujado a mano con combates exigentes y un reino subterráneo vasto.',command:'steam steam://rungameid/367520',youtube:'https://www.youtube.com/results?search_query=Hollow+Knight+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'counter-strike-2',name:'Counter-Strike 2',category:'Acción',version:'1.0.0.80',free:true,method:'Steam',image:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',description:'Shooter táctico competitivo con partidas por equipos y soporte nativo de Steam.',command:'steam steam://rungameid/730',youtube:'https://www.youtube.com/results?search_query=Counter+Strike+2+Linux+Ubuntu+Steam+guia',rating:'4.4'}
];

const savedGames = JSON.parse(localStorage.getItem('ubuntu-arcade-community') || '[]');
games.unshift(...savedGames);

const grid = document.querySelector('#game-grid');
const searchInput = document.querySelector('#search-input');
const freeOnly = document.querySelector('#free-only');
const count = document.querySelector('#results-count');
const empty = document.querySelector('#empty-state');
let activeFilter = 'Todos';

function renderGames() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = games.filter(game => {
    const matchesFilter = activeFilter === 'Todos' || game.category === activeFilter;
    const matchesFree = !freeOnly.checked || game.free;
    const matchesQuery = [game.name, game.category, game.method, game.description].join(' ').toLowerCase().includes(query);
    return matchesFilter && matchesFree && matchesQuery;
  });
  count.textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado' : 'resultados'}`;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(game => `
    <article class="game-card">
      <div class="game-cover" style="background-image:url('${game.image}')"><span class="cover-label">${game.method}</span></div>
      <div class="game-body"><div class="game-meta"><span>${game.category}</span>${game.free ? '<span class="free-label">● Gratis</span>' : '<span>De pago</span>'}</div>
      <h3>${game.name}</h3><p class="game-desc">${game.description}</p><div class="card-bottom"><span class="version">v${game.version}</span><button class="detail-button" data-game="${game.id}">Ver instalación <span>↗</span></button></div></div>
    </article>`).join('');
  document.querySelectorAll('[data-game]').forEach(button => button.addEventListener('click', () => openGame(button.dataset.game)));
}

function openGame(id) {
  const game = games.find(item => item.id === id);
  document.querySelector('#modal-content').innerHTML = `<div class="modal-cover" style="background-image:url('${game.image}')"></div><div class="game-meta"><span>${game.category} · ${game.method}</span><span class="free-label">★ ${game.rating}</span></div><h2 id="modal-title">${game.name}</h2><p class="modal-copy">${game.description}</p><div class="modal-command">$ ${game.command}</div><a class="guide-link" href="${game.youtube}" target="_blank" rel="noreferrer">▶ Ver guías en YouTube ↗</a>`;
  showModal('game-modal');
}

function showModal(id) { document.querySelector(`#${id}`).hidden = false; document.body.style.overflow = 'hidden'; }
function closeModals() { document.querySelectorAll('.modal-backdrop').forEach(modal => modal.hidden = true); document.body.style.overflow = ''; }

document.querySelectorAll('.filter-chip').forEach(chip => chip.addEventListener('click', () => { document.querySelectorAll('.filter-chip').forEach(item => item.classList.remove('active')); chip.classList.add('active'); activeFilter = chip.dataset.filter; renderGames(); }));
searchInput.addEventListener('input', renderGames);
freeOnly.addEventListener('change', renderGames);
document.querySelector('#open-submit').addEventListener('click', () => showModal('submit-modal'));
document.querySelector('#community-submit').addEventListener('click', () => showModal('submit-modal'));
document.querySelector('#empty-submit').addEventListener('click', () => showModal('submit-modal'));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', closeModals));
document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target === backdrop) closeModals(); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModals(); });

document.querySelector('#submit-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.target);
  const newGame = { id: `community-${Date.now()}`, name: data.get('name'), category: data.get('category'), version: data.get('version'), free: true, method: 'Comunidad', image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=900&q=80', description: 'Recomendado por la comunidad de Ubuntu Arcade.', command: data.get('command'), youtube: data.get('youtube') || 'https://www.youtube.com/results?search_query=linux+ubuntu+juegos', rating: 'Nuevo' };
  games.unshift(newGame); localStorage.setItem('ubuntu-arcade-community', JSON.stringify([newGame, ...savedGames])); event.target.reset(); closeModals(); renderGames(); document.querySelector('#explorar').scrollIntoView({behavior:'smooth'});
});

renderGames();
