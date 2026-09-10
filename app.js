import { trackEvent } from './firebase-config.js';

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
  {id:'counter-strike-2',name:'Counter-Strike 2',category:'Acción',version:'1.0.0.80',free:true,method:'Steam',image:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',description:'Shooter táctico competitivo con partidas por equipos y soporte nativo de Steam.',command:'steam steam://rungameid/730',youtube:'https://www.youtube.com/results?search_query=Counter+Strike+2+Linux+Ubuntu+Steam+guia',rating:'4.4'},
  {id:'warzone-2100',name:'Warzone 2100',category:'Estrategia',version:'4.5.5',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'Estrategia en tiempo real de ciencia ficción con campaña, escaramuzas y multijugador.',command:'flatpak install flathub net.wz2100.wz2100',youtube:'https://www.youtube.com/results?search_query=Warzone+2100+Ubuntu+Linux+instalar',rating:'4.6'},
  {id:'freeciv',name:'Freeciv',category:'Estrategia',version:'3.1.4',free:true,method:'APT',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'Construye una civilización desde la antigüedad hasta la era espacial en partidas por turnos.',command:'sudo apt install freeciv-client-gtk',youtube:'https://www.youtube.com/results?search_query=Freeciv+Ubuntu+Linux+instalar',rating:'4.4'},
  {id:'openra',name:'OpenRA',category:'Estrategia',version:'20231010',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80',description:'Estrategia clásica reinventada con campañas y multijugador para Command & Conquer.',command:'flatpak install flathub net.openra.OpenRA',youtube:'https://www.youtube.com/results?search_query=OpenRA+Ubuntu+Linux+instalar',rating:'4.7'},
  {id:'mindustry',name:'Mindustry',category:'Estrategia',version:'7.0',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'Defiende tu base, automatiza fábricas y combate en un sandbox de estrategia.',command:'flatpak install flathub com.github.Anuken.Mindustry',youtube:'https://www.youtube.com/results?search_query=Mindustry+Ubuntu+Linux+instalar',rating:'4.7'},
  {id:'hedgewars',name:'Hedgewars',category:'Acción',version:'1.0.2',free:true,method:'APT',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',description:'Batallas por turnos con erizos, armas extravagantes y mapas destructibles.',command:'sudo apt install hedgewars',youtube:'https://www.youtube.com/results?search_query=Hedgewars+Ubuntu+Linux+instalar',rating:'4.4'},
  {id:'teeworlds',name:'Teeworlds',category:'Acción',version:'0.7.5',free:true,method:'APT',image:'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80',description:'Shooter 2D multijugador con partidas rápidas, ganchos y una estética pixel art.',command:'sudo apt install teeworlds',youtube:'https://www.youtube.com/results?search_query=Teeworlds+Ubuntu+Linux+instalar',rating:'4.5'},
  {id:'red-eclipse',name:'Red Eclipse',category:'Acción',version:'2.0.1',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80',description:'FPS arena de código abierto con parkour, acrobacias y combates veloces.',command:'flatpak install flathub net.redeclipse.RedEclipse',youtube:'https://www.youtube.com/results?search_query=Red+Eclipse+Linux+Ubuntu+instalar',rating:'4.3'},
  {id:'sauerbraten',name:'Cube 2: Sauerbraten',category:'Acción',version:'2020.12.27',free:true,method:'APT',image:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',description:'FPS clásico con editor de mapas integrado y modos de juego multijugador.',command:'sudo apt install sauerbraten',youtube:'https://www.youtube.com/results?search_query=Sauerbraten+Ubuntu+Linux+instalar',rating:'4.2'},
  {id:'urban-terror',name:'Urban Terror',category:'Acción',version:'4.3.4',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80',description:'Shooter táctico gratuito con parkour, equipos y modos competitivos.',command:'flatpak install flathub net.urbanterror.UrbanTerror',youtube:'https://www.youtube.com/results?search_query=Urban+Terror+Ubuntu+Linux+instalar',rating:'4.1'},
  {id:'assaultcube',name:'AssaultCube',category:'Acción',version:'1.3.0.2',free:true,method:'APT',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'Shooter ligero que funciona en equipos modestos y ofrece partidas rápidas por equipos.',command:'sudo apt install assaultcube',youtube:'https://www.youtube.com/results?search_query=AssaultCube+Ubuntu+Linux+instalar',rating:'4.0'},
  {id:'supertux',name:'SuperTux',category:'Aventura',version:'0.6.3',free:true,method:'APT',image:'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',description:'Plataformas clásico protagonizado por Tux, con mundos coloridos y niveles secretos.',command:'sudo apt install supertux',youtube:'https://www.youtube.com/results?search_query=SuperTux+Ubuntu+Linux+instalar',rating:'4.3'},
  {id:'neverball',name:'Neverball',category:'Indie',version:'1.6.0',free:true,method:'APT',image:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80',description:'Controla una pelota por plataformas flotantes y supera desafíos de precisión.',command:'sudo apt install neverball',youtube:'https://www.youtube.com/results?search_query=Neverball+Ubuntu+Linux+instalar',rating:'4.2'},
  {id:'armagetron',name:'Armagetron Advanced',category:'Acción',version:'0.2.9.1.0',free:true,method:'APT',image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',description:'Combates de motos de luz inspirados en Tron con arenas locales y online.',command:'sudo apt install armagetronad',youtube:'https://www.youtube.com/results?search_query=Armagetron+Advanced+Ubuntu+Linux',rating:'4.1'},
  {id:'frozen-bubble',name:'Frozen Bubble',category:'Indie',version:'2.2.1',free:true,method:'APT',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',description:'Puzzle arcade de burbujas con más de cien niveles y modo multijugador.',command:'sudo apt install frozen-bubble',youtube:'https://www.youtube.com/results?search_query=Frozen+Bubble+Ubuntu+Linux+instalar',rating:'4.2'},
  {id:'gnome-mahjongg',name:'GNOME Mahjongg',category:'Indie',version:'49.0',free:true,method:'APT',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'Mahjongg clásico para partidas tranquilas, incluido en el ecosistema GNOME.',command:'sudo apt install gnome-mahjongg',youtube:'https://www.youtube.com/results?search_query=GNOME+Mahjongg+Ubuntu+instalar',rating:'4.0'},
  {id:'quake',name:'Quake',category:'Acción',version:'1.09',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80',description:'El shooter arena que definió una generación, con soporte nativo para Steam en Linux.',command:'steam steam://rungameid/2310',youtube:'https://www.youtube.com/results?search_query=Quake+Linux+Ubuntu+Steam+instalar',rating:'4.8'},
  {id:'the-dark-mod',name:'The Dark Mod',category:'Aventura',version:'2.12',free:true,method:'AppImage',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',description:'Aventura de sigilo en primera persona inspirada en los clásicos de ladrones.',command:'flatpak install flathub com.thedarkmod.TheDarkMod',youtube:'https://www.youtube.com/results?search_query=The+Dark+Mod+Linux+Ubuntu+instalar',rating:'4.5'},
  {id:'dcss',name:'Dungeon Crawl Stone Soup',category:'Aventura',version:'0.33.1',free:true,method:'APT',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',description:'Roguelike profundo y gratuito con mazmorras generadas y cientos de criaturas.',command:'sudo apt install crawl-tiles',youtube:'https://www.youtube.com/results?search_query=Dungeon+Crawl+Stone+Soup+Ubuntu+Linux',rating:'4.6'},
  {id:'cataclysm-dda',name:'Cataclysm: Dark Days Ahead',category:'Aventura',version:'0.G',free:true,method:'Flatpak',image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',description:'Supervivencia postapocalíptica extremadamente detallada y generada de forma procedural.',command:'flatpak install flathub com.cataclysmdda.CataclysmDDA',youtube:'https://www.youtube.com/results?search_query=Cataclysm+DDA+Ubuntu+Linux+instalar',rating:'4.5'},
  {id:'factorio',name:'Factorio',category:'Estrategia',version:'2.0.24',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',description:'Diseña fábricas automatizadas, optimiza cadenas de producción y defiende tu planeta.',command:'steam steam://rungameid/427520',youtube:'https://www.youtube.com/results?search_query=Factorio+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'rimworld',name:'RimWorld',category:'Estrategia',version:'1.6.4633',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'Gestiona una colonia espacial y sus historias imprevisibles en este simulador narrativo.',command:'steam steam://rungameid/294100',youtube:'https://www.youtube.com/results?search_query=RimWorld+Linux+Ubuntu+instalar',rating:'4.8'},
  {id:'euro-truck',name:'Euro Truck Simulator 2',category:'Indie',version:'1.58',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',description:'Recorre Europa, entrega mercancías y construye tu propia empresa de transporte.',command:'steam steam://rungameid/227300',youtube:'https://www.youtube.com/results?search_query=Euro+Truck+Simulator+2+Linux+Ubuntu',rating:'4.8'},
  {id:'no-mans-sky',name:"No Man's Sky",category:'Aventura',version:'5.75',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',description:'Explora un universo procedural, descubre planetas y construye bases entre las estrellas.',command:'steam steam://rungameid/275850',youtube:'https://www.youtube.com/results?search_query=No+Mans+Sky+Linux+Ubuntu+Proton',rating:'4.5'},
  {id:'valheim',name:'Valheim',category:'Aventura',version:'0.221.4',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',description:'Supervivencia cooperativa en un purgatorio vikingo con construcción y jefes míticos.',command:'steam steam://rungameid/892970',youtube:'https://www.youtube.com/results?search_query=Valheim+Linux+Ubuntu+Proton+instalar',rating:'4.7'},
  {id:'project-zomboid',name:'Project Zomboid',category:'Aventura',version:'Build 42',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80',description:'Sobrevive al apocalipsis zombi con gestión de recursos, sigilo y multijugador.',command:'steam steam://rungameid/108600',youtube:'https://www.youtube.com/results?search_query=Project+Zomboid+Linux+Ubuntu+instalar',rating:'4.7'},
  {id:'dont-starve',name:"Don't Starve Together",category:'Aventura',version:'604001',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',description:'Colabora o compite para sobrevivir en un mundo oscuro, extraño y lleno de peligros.',command:'steam steam://rungameid/322330',youtube:'https://www.youtube.com/results?search_query=Dont+Starve+Together+Linux+Ubuntu',rating:'4.7'},
  {id:'risk-of-rain-2',name:'Risk of Rain 2',category:'Acción',version:'1.3.9',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'Combate hordas alienígenas en partidas roguelike cada vez más intensas.',command:'steam steam://rungameid/632360',youtube:'https://www.youtube.com/results?search_query=Risk+of+Rain+2+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'dead-cells',name:'Dead Cells',category:'Acción',version:'35.3',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80',description:'Roguelite de acción y plataformas con combates rápidos y exploración no lineal.',command:'steam steam://rungameid/588650',youtube:'https://www.youtube.com/results?search_query=Dead+Cells+Linux+Ubuntu+instalar',rating:'4.8'},
  {id:'hades',name:'Hades',category:'Acción',version:'1.38290',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80',description:'Escapa del inframundo en este roguelike de acción con narrativa mitológica.',command:'steam steam://rungameid/1145360',youtube:'https://www.youtube.com/results?search_query=Hades+Linux+Ubuntu+Proton+instalar',rating:'4.9'},
  {id:'cuphead',name:'Cuphead',category:'Acción',version:'1.3.4',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',description:'Jefes desafiantes, animación dibujada a mano y música de jazz en una aventura cooperativa.',command:'steam steam://rungameid/268910',youtube:'https://www.youtube.com/results?search_query=Cuphead+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'undertale',name:'Undertale',category:'Indie',version:'1.08',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',description:'RPG independiente donde tus decisiones cambian el destino de cada personaje.',command:'steam steam://rungameid/391540',youtube:'https://www.youtube.com/results?search_query=Undertale+Linux+Ubuntu+instalar',rating:'4.9'},
  {id:'disco-elysium',name:'Disco Elysium',category:'Aventura',version:'2021.07.15',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',description:'RPG detectivesco con diálogos profundos, decisiones complejas y una ciudad inolvidable.',command:'steam steam://rungameid/632470',youtube:'https://www.youtube.com/results?search_query=Disco+Elysium+Linux+Ubuntu',rating:'4.8'},
  {id:'witcher-3',name:'The Witcher 3',category:'Aventura',version:'4.04',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'RPG de mundo abierto con monstruos, decisiones y una enorme aventura fantástica.',command:'steam steam://rungameid/292030',youtube:'https://www.youtube.com/results?search_query=Witcher+3+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'divinity-2',name:'Divinity: Original Sin 2',category:'Estrategia',version:'3.6.117.3735',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'RPG táctico por turnos con cooperativo, libertad de decisiones y sistemas elementales.',command:'steam steam://rungameid/435150',youtube:'https://www.youtube.com/results?search_query=Divinity+Original+Sin+2+Linux+Ubuntu',rating:'4.9'},
  {id:'baldurs-gate-3',name:"Baldur's Gate 3",category:'Aventura',version:'4.1.1.6116',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'RPG épico basado en Dungeons & Dragons con campaña cooperativa y decisiones profundas.',command:'steam steam://rungameid/1086940',youtube:'https://www.youtube.com/results?search_query=Baldurs+Gate+3+Linux+Ubuntu+Proton',rating:'4.9'},
  {id:'elden-ring',name:'Elden Ring',category:'Acción',version:'1.16.1',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',description:'Explora las Tierras Intermedias y supera combates exigentes en un mundo abierto.',command:'steam steam://rungameid/1245620',youtube:'https://www.youtube.com/results?search_query=Elden+Ring+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'sekiro',name:'Sekiro: Shadows Die Twice',category:'Acción',version:'1.06',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80',description:'Acción y sigilo en el Japón fantástico con duelos precisos y una historia intensa.',command:'steam steam://rungameid/814380',youtube:'https://www.youtube.com/results?search_query=Sekiro+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'monster-hunter-world',name:'Monster Hunter: World',category:'Acción',version:'15.23',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',description:'Caza criaturas gigantes, fabrica equipo y juega en equipo en un ecosistema vivo.',command:'steam steam://rungameid/582010',youtube:'https://www.youtube.com/results?search_query=Monster+Hunter+World+Linux+Ubuntu+Proton',rating:'4.6'},
  {id:'deep-rock-galactic',name:'Deep Rock Galactic',category:'Acción',version:'1.40',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',description:'Entra en cuevas alienígenas destructibles y trabaja en equipo como enano espacial.',command:'steam steam://rungameid/548430',youtube:'https://www.youtube.com/results?search_query=Deep+Rock+Galactic+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'left-4-dead-2',name:'Left 4 Dead 2',category:'Acción',version:'2.2.2.9',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80',description:'Cooperativo de supervivencia zombi con campañas intensas y una comunidad activa.',command:'steam steam://rungameid/550',youtube:'https://www.youtube.com/results?search_query=Left+4+Dead+2+Linux+Ubuntu+instalar',rating:'4.8'},
  {id:'borderlands-2',name:'Borderlands 2',category:'Acción',version:'1.8.5',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',description:'Shooter RPG cooperativo con botín, humor y un planeta lleno de enemigos.',command:'steam steam://rungameid/49520',youtube:'https://www.youtube.com/results?search_query=Borderlands+2+Linux+Ubuntu+Proton',rating:'4.7'},
  {id:'bioshock-infinite',name:'BioShock Infinite',category:'Aventura',version:'1.0.164',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',description:'Aventura narrativa en una ciudad flotante con combates y una historia memorable.',command:'steam steam://rungameid/8870',youtube:'https://www.youtube.com/results?search_query=BioShock+Infinite+Linux+Ubuntu+Proton',rating:'4.6'},
  {id:'batman-arkham-city',name:'Batman: Arkham City',category:'Acción',version:'1.1.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',description:'Conviértete en Batman en una aventura de acción, investigación y combate.',command:'steam steam://rungameid/200260',youtube:'https://www.youtube.com/results?search_query=Batman+Arkham+City+Linux+Ubuntu+Proton',rating:'4.7'},
  {id:'deus-ex',name:'Deus Ex: Human Revolution',category:'Aventura',version:'2.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'Ciencia ficción, sigilo y decisiones en una conspiración tecnológica global.',command:'steam steam://rungameid/28050',youtube:'https://www.youtube.com/results?search_query=Deus+Ex+Human+Revolution+Linux+Ubuntu',rating:'4.6'},
  {id:'trackmania',name:'TrackMania Nations Forever',category:'Acción',version:'2.11.26',free:true,method:'Lutris',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',description:'Carreras arcade gratuitas con circuitos imposibles, récords y editor de pistas.',command:'lutris install trackmania-nations-forever',youtube:'https://www.youtube.com/results?search_query=Trackmania+Nations+Forever+Linux+Lutris',rating:'4.5'},
  {id:'rocket-league',name:'Rocket League',category:'Acción',version:'1.0',free:true,method:'Lutris',image:'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80',description:'Fútbol con coches y partidas competitivas rápidas mediante Heroic o Lutris.',command:'flatpak install flathub com.heroicgameslauncher.hgl',youtube:'https://www.youtube.com/results?search_query=Rocket+League+Linux+Ubuntu+Heroic',rating:'4.6'},
  {id:'fall-guys',name:'Fall Guys',category:'Indie',version:'11.5',free:true,method:'Lutris',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',description:'Compite en pruebas caóticas y coloridas con decenas de jugadores.',command:'flatpak install flathub com.heroicgameslauncher.hgl',youtube:'https://www.youtube.com/results?search_query=Fall+Guys+Linux+Ubuntu+Heroic+Lutris',rating:'4.3'},
  {id:'genshin-impact',name:'Genshin Impact',category:'Aventura',version:'6.0',free:true,method:'Lutris',image:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',description:'RPG de acción y exploración de mundo abierto ejecutable en Ubuntu con herramientas de compatibilidad.',command:'flatpak install flathub net.lutris.Lutris',youtube:'https://www.youtube.com/results?search_query=Genshin+Impact+Linux+Ubuntu+Lutris',rating:'4.2'},
  {id:'league-of-legends',name:'League of Legends',category:'Estrategia',version:'26.16',free:true,method:'Lutris',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'MOBA competitivo gratuito disponible en Linux mediante Lutris y Wine.',command:'flatpak install flathub net.lutris.Lutris',youtube:'https://www.youtube.com/results?search_query=League+of+Legends+Linux+Ubuntu+Lutris',rating:'4.1'},
  {id:'vampire-survivors',name:'Vampire Survivors',category:'Indie',version:'1.14.306',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80',description:'Sobrevive oleadas infinitas, desbloquea armas y descubre secretos en partidas cortas.',command:'steam steam://rungameid/1794680',youtube:'https://www.youtube.com/results?search_query=Vampire+Survivors+Linux+Ubuntu',rating:'4.8'},
  {id:'inscryption',name:'Inscryption',category:'Indie',version:'1.0.7',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80',description:'Cartas, puzzles y horror psicológico en una experiencia que reinventa sus propias reglas.',command:'steam steam://rungameid/1092790',youtube:'https://www.youtube.com/results?search_query=Inscryption+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'ori-will-of-wisps',name:'Ori and the Will of the Wisps',category:'Aventura',version:'1.0.0.10',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',description:'Plataformas y exploración en un bosque pintado a mano con una banda sonora emotiva.',command:'steam steam://rungameid/1057090',youtube:'https://www.youtube.com/results?search_query=Ori+Will+of+the+Wisps+Linux+Ubuntu',rating:'4.8'},
  {id:'slay-the-spire',name:'Slay the Spire',category:'Estrategia',version:'2.3.15',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',description:'Construye tu mazo, escala la torre y combina cartas en este roguelike estratégico.',command:'steam steam://rungameid/646570',youtube:'https://www.youtube.com/results?search_query=Slay+the+Spire+Linux+Ubuntu',rating:'4.8'},
  {id:'civilization-vi',name:'Sid Meier’s Civilization VI',category:'Estrategia',version:'1.0.12.9',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',description:'Lidera una civilización desde la primera piedra hasta la era espacial.',command:'steam steam://rungameid/289070',youtube:'https://www.youtube.com/results?search_query=Civilization+VI+Linux+Ubuntu+Steam',rating:'4.6'},
  {id:'age-of-empires-iv',name:'Age of Empires IV',category:'Estrategia',version:'15.2.6970',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',description:'Construye imperios, investiga tecnologías y libra batallas históricas en tiempo real.',command:'steam steam://rungameid/1466860',youtube:'https://www.youtube.com/results?search_query=Age+of+Empires+IV+Linux+Ubuntu+Proton',rating:'4.5'},
  {id:'the-long-dark',name:'The Long Dark',category:'Aventura',version:'2.41',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',description:'Sobrevive al frío y a la soledad de un territorio canadiense tras un desastre global.',command:'steam steam://rungameid/305620',youtube:'https://www.youtube.com/results?search_query=The+Long+Dark+Linux+Ubuntu+Proton',rating:'4.6'},
  {id:'subnautica',name:'Subnautica',category:'Aventura',version:'2.0.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',description:'Explora un océano alienígena, fabrica herramientas y descubre qué ocurrió en el planeta.',command:'steam steam://rungameid/264710',youtube:'https://www.youtube.com/results?search_query=Subnautica+Linux+Ubuntu+Proton',rating:'4.8'},
  {id:'among-us',name:'Among Us',category:'Indie',version:'2025.6.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',description:'Cooperación, engaño y deducción social para grupos de amigos.',command:'steam steam://rungameid/945360',youtube:'https://www.youtube.com/results?search_query=Among+Us+Linux+Ubuntu+Steam',rating:'4.3'},
  {id:'palworld',name:'Palworld',category:'Aventura',version:'0.6.0',free:false,method:'Steam',image:'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80',description:'Captura criaturas, construye una base y sobrevive en un mundo abierto con amigos.',command:'steam steam://rungameid/1623730',youtube:'https://www.youtube.com/results?search_query=Palworld+Linux+Ubuntu+Proton',rating:'4.3'}
];

const additionalGames = [
  ['apex-legends','Apex Legends','Acción','2.0',true,'Steam','steam steam://rungameid/1172470'],
  ['warframe','Warframe','Acción','2026.1',true,'Steam','steam steam://rungameid/230410'],
  ['destiny-2','Destiny 2','Acción','2026.1',true,'Steam','steam steam://rungameid/1085660'],
  ['path-of-exile','Path of Exile','Acción','3.27',true,'Steam','steam steam://rungameid/238960'],
  ['path-of-exile-2','Path of Exile 2','Acción','0.4',true,'Steam','steam steam://rungameid/2694490'],
  ['war-thunder','War Thunder','Acción','2.47',true,'Steam','steam steam://rungameid/236390'],
  ['team-fortress-2','Team Fortress 2','Acción','1.0',true,'Steam','steam steam://rungameid/440'],
  ['paladins','Paladins','Acción','1.0',true,'Steam','steam steam://rungameid/444090'],
  ['brawlhalla','Brawlhalla','Acción','10.2',true,'Steam','steam steam://rungameid/291550'],
  ['pubg','PUBG: Battlegrounds','Acción','1.0',true,'Steam','steam steam://rungameid/578080'],
  ['the-finals','THE FINALS','Acción','8.9',true,'Steam','steam steam://rungameid/2073850'],
  ['halo-infinite','Halo Infinite','Acción','1.0',true,'Steam','steam steam://rungameid/1240440'],
  ['battlebit-remastered','BattleBit Remastered','Acción','2.2',false,'Steam','steam steam://rungameid/671860'],
  ['hunt-showdown','Hunt: Showdown 1896','Acción','2.7',false,'Steam','steam steam://rungameid/594650'],
  ['insurgency-sandstorm','Insurgency: Sandstorm','Acción','1.17',false,'Steam','steam steam://rungameid/581320'],
  ['payday-2','PAYDAY 2','Acción','1.143',false,'Steam','steam steam://rungameid/218620'],
  ['dying-light','Dying Light','Acción','1.49',false,'Steam','steam steam://rungameid/239140'],
  ['dying-light-2','Dying Light 2','Acción','1.22',false,'Steam','steam steam://rungameid/534380'],
  ['the-forest','The Forest','Aventura','1.12',false,'Steam','steam steam://rungameid/242760'],
  ['sons-of-the-forest','Sons of the Forest','Aventura','1.0',false,'Steam','steam steam://rungameid/1326470'],
  ['raft','Raft','Aventura','1.09',false,'Steam','steam steam://rungameid/648800'],
  ['green-hell','Green Hell','Aventura','2.4',false,'Steam','steam steam://rungameid/815370'],
  ['astroneer','Astroneer','Aventura','1.36',false,'Steam','steam steam://rungameid/361420'],
  ['grounded','Grounded','Aventura','1.4',false,'Steam','steam steam://rungameid/962130'],
  ['enshrouded','Enshrouded','Aventura','0.9',false,'Steam','steam steam://rungameid/1203620'],
  ['core-keeper','Core Keeper','Aventura','1.1',false,'Steam','steam steam://rungameid/1621690'],
  ['starbound','Starbound','Aventura','1.4.4',false,'Steam','steam steam://rungameid/211820'],
  ['dont-starve','Don’t Starve','Aventura','1.20',false,'Steam','steam steam://rungameid/219740'],
  ['raft-survival','Stranded Deep','Aventura','1.0',false,'Steam','steam steam://rungameid/313120'],
  ['greenlight','The Planet Crafter','Aventura','1.0',false,'Steam','steam steam://rungameid/1284190'],
  ['astroneer-dlc','Astroneer: Glitchwalkers','Aventura','1.0',false,'Steam','steam steam://rungameid/361420'],
  ['outer-wilds','Outer Wilds','Aventura','1.1',false,'Steam','steam steam://rungameid/753640'],
  ['firewatch','Firewatch','Aventura','1.1',false,'Steam','steam steam://rungameid/383870'],
  ['kentucky-route-zero','Kentucky Route Zero','Aventura','1.0',false,'Steam','steam steam://rungameid/231200'],
  ['life-is-strange','Life is Strange','Aventura','1.0',false,'Steam','steam steam://rungameid/319630'],
  ['life-is-strange-2','Life is Strange 2','Aventura','1.0',false,'Steam','steam steam://rungameid/895390'],
  ['telltale-walking-dead','The Walking Dead','Aventura','1.0',false,'Steam','steam steam://rungameid/207610'],
  ['oxenfree','Oxenfree','Aventura','2.0',false,'Steam','steam steam://rungameid/388880'],
  ['what-remains-edith-finch','What Remains of Edith Finch','Aventura','1.0',false,'Steam','steam steam://rungameid/501300'],
  ['return-of-the-obra-dinn','Return of the Obra Dinn','Aventura','1.0',false,'Steam','steam steam://rungameid/653530'],
  ['outer-worlds','The Outer Worlds','Aventura','1.0',false,'Steam','steam steam://rungameid/578650'],
  ['kingdom-come','Kingdom Come: Deliverance','Aventura','1.9',false,'Steam','steam steam://rungameid/379430'],
  ['assassins-creed-odyssey','Assassin’s Creed Odyssey','Aventura','1.6',false,'Steam','steam steam://rungameid/812140'],
  ['horizon-zero-dawn','Horizon Zero Dawn','Aventura','1.0',false,'Steam','steam steam://rungameid/1151640'],
  ['death-stranding','DEATH STRANDING','Aventura','1.0',false,'Steam','steam steam://rungameid/1190460'],
  ['control','Control','Acción','1.30',false,'Steam','steam steam://rungameid/870780'],
  ['doom-2016','DOOM','Acción','6.66',false,'Steam','steam steam://rungameid/379720'],
  ['doom-eternal','DOOM Eternal','Acción','6.66',false,'Steam','steam steam://rungameid/782330'],
  ['wolfenstein-new-order','Wolfenstein: The New Order','Acción','1.0',false,'Steam','steam steam://rungameid/201810'],
  ['metro-exodus','Metro Exodus','Acción','2.0',false,'Steam','steam steam://rungameid/412020'],
  ['prey','Prey','Acción','1.0',false,'Steam','steam steam://rungameid/480490'],
  ['dishonored-2','Dishonored 2','Acción','1.77',false,'Steam','steam steam://rungameid/403640'],
  ['deathloop','DEATHLOOP','Acción','1.0',false,'Steam','steam steam://rungameid/1252330'],
  ['doom-3','DOOM 3','Acción','1.3',false,'Steam','steam steam://rungameid/208200'],
  ['shadow-warrior-2','Shadow Warrior 2','Acción','1.1',false,'Steam','steam steam://rungameid/324800'],
  ['serious-sam-4','Serious Sam 4','Acción','1.10',false,'Steam','steam steam://rungameid/257420'],
  ['devil-may-cry-5','Devil May Cry 5','Acción','1.0',false,'Steam','steam steam://rungameid/601150'],
  ['street-fighter-6','Street Fighter 6','Acción','1.22',false,'Steam','steam steam://rungameid/1364780'],
  ['tekken-8','TEKKEN 8','Acción','2.04',false,'Steam','steam steam://rungameid/1778820'],
  ['mortal-kombat-11','Mortal Kombat 11','Acción','1.0',false,'Steam','steam steam://rungameid/976310'],
  ['dragon-ball-fighterz','DRAGON BALL FighterZ','Acción','1.35',false,'Steam','steam steam://rungameid/678950'],
  ['sifu','Sifu','Acción','1.0',false,'Steam','steam steam://rungameid/2138710'],
  ['nier-automata','NieR:Automata','Acción','1.0',false,'Steam','steam steam://rungameid/524220'],
  ['metal-gear-rising','METAL GEAR RISING: REVENGEANCE','Acción','1.0',false,'Steam','steam steam://rungameid/235460'],
  ['bayonetta','Bayonetta','Acción','1.0',false,'Steam','steam steam://rungameid/460790'],
  ['tunic','TUNIC','Aventura','1.0',false,'Steam','steam steam://rungameid/553420'],
  ['death-door','Death’s Door','Aventura','1.0',false,'Steam','steam steam://rungameid/894020'],
  ['the-pathless','The Pathless','Aventura','1.0',false,'Steam','steam steam://rungameid/1492680'],
  ['a-short-hike','A Short Hike','Indie','1.0',false,'Steam','steam steam://rungameid/1055540'],
  ['spiritfarer','Spiritfarer','Indie','1.15',false,'Steam','steam steam://rungameid/972660'],
  ['graveyard-keeper','Graveyard Keeper','Indie','1.5',false,'Steam','steam steam://rungameid/599140'],
  ['cult-of-the-lamb','Cult of the Lamb','Indie','1.4',false,'Steam','steam steam://rungameid/1313140'],
  ['dave-the-diver','DAVE THE DIVER','Indie','1.0',false,'Steam','steam steam://rungameid/1868140'],
  ['cocoon','COCOON','Indie','1.0',false,'Steam','steam steam://rungameid/1497440'],
  ['the-case-of-the-golden-idol','The Case of the Golden Idol','Indie','1.0',false,'Steam','steam steam://rungameid/1677770'],
  ['papers-please','Papers, Please','Indie','1.4',false,'Steam','steam steam://rungameid/239030'],
  ['returnal','Returnal','Acción','1.0',false,'Steam','steam steam://rungameid/1649240'],
  ['ghostrunner','Ghostrunner','Acción','1.0',false,'Steam','steam steam://rungameid/1139900'],
  ['ghostrunner-2','Ghostrunner 2','Acción','1.0',false,'Steam','steam steam://rungameid/2144740'],
  ['neon-white','Neon White','Acción','1.0',false,'Steam','steam steam://rungameid/1533420'],
  ['ultrakill','ULTRAKILL','Acción','5.0',false,'Steam','steam steam://rungameid/1229490'],
  ['boomerang-x','Boomerang X','Acción','1.0',false,'Steam','steam steam://rungameid/1170060'],
  ['enter-the-gungeon','Enter the Gungeon','Acción','2.1.9',false,'Steam','steam steam://rungameid/311690'],
  ['wizard-of-legend','Wizard of Legend','Acción','1.24',false,'Steam','steam steam://rungameid/445980'],
  ['loop-hero','Loop Hero','Estrategia','1.155',false,'Steam','steam steam://rungameid/1282730'],
  ['into-the-breach','Into the Breach','Estrategia','1.2.83',false,'Steam','steam steam://rungameid/590380'],
  ['frostpunk','Frostpunk','Estrategia','1.6',false,'Steam','steam steam://rungameid/323190'],
  ['frostpunk-2','Frostpunk 2','Estrategia','1.0',false,'Steam','steam steam://rungameid/1601580'],
  ['surviving-mars','Surviving Mars','Estrategia','1.0',false,'Steam','steam steam://rungameid/464920'],
  ['surviving-the-aftermath','Surviving the Aftermath','Estrategia','1.0',false,'Steam','steam steam://rungameid/684450'],
  ['oxygen-not-included','Oxygen Not Included','Estrategia','686972',false,'Steam','steam steam://rungameid/457140'],
  ['prison-architect','Prison Architect','Estrategia','1.0',false,'Steam','steam steam://rungameid/233450'],
  ['two-point-hospital','Two Point Hospital','Estrategia','1.0',false,'Steam','steam steam://rungameid/535930'],
  ['parkitect','Parkitect','Estrategia','1.11',false,'Steam','steam steam://rungameid/453090'],
  ['dorfromantik','Dorfromantik','Estrategia','1.1',false,'Steam','steam steam://rungameid/1455840'],
  ['against-the-storm','Against the Storm','Estrategia','1.7',false,'Steam','steam steam://rungameid/1336490'],
  ['anno-1800','Anno 1800','Estrategia','17.0',false,'Lutris','lutris install anno-1800'],
  ['total-war-warhammer-3','Total War: WARHAMMER III','Estrategia','6.2',false,'Steam','steam steam://rungameid/1142710'],
  ['starcraft-2','StarCraft II','Estrategia','5.0',true,'Lutris','lutris install starcraft-2'],
  ['heroes-of-the-storm','Heroes of the Storm','Estrategia','2.0',true,'Lutris','lutris install heroes-of-the-storm'],
  ['age-of-empires-ii-de','Age of Empires II: Definitive Edition','Estrategia','26.7',false,'Steam','steam steam://rungameid/813780'],
  ['company-of-heroes-2','Company of Heroes 2','Estrategia','4.0',false,'Steam','steam steam://rungameid/231430'],
  ['xcom-2','XCOM 2','Estrategia','1.0',false,'Steam','steam steam://rungameid/268500'],
  ['shadowrun-returns','Shadowrun Returns','Estrategia','1.2',false,'Steam','steam steam://rungameid/234650'],
  ['pillars-of-eternity','Pillars of Eternity','Aventura','3.07',false,'Steam','steam steam://rungameid/291650'],
  ['pathfinder-wrath','Pathfinder: Wrath of the Righteous','Aventura','2.5',false,'Steam','steam steam://rungameid/1184370'],
  ['solasta','Solasta: Crown of the Magister','Estrategia','1.6',false,'Steam','steam steam://rungameid/1096530'],
  ['yakuza-like-a-dragon','Yakuza: Like a Dragon','Aventura','1.0',false,'Steam','steam steam://rungameid/1235140'],
  ['persona-5-royal','Persona 5 Royal','Aventura','1.0',false,'Steam','steam steam://rungameid/1687950'],
  ['final-fantasy-xiv','FINAL FANTASY XIV Online','Aventura','7.4',false,'Steam','steam steam://rungameid/39210'],
  ['elder-scrolls-online','The Elder Scrolls Online','Aventura','10.2',false,'Steam','steam steam://rungameid/306130'],
  ['guild-wars-2','Guild Wars 2','Aventura','1.0',true,'Lutris','lutris install guild-wars-2'],
  ['albion-online','Albion Online','Aventura','1.0',true,'Flatpak','flatpak install flathub com.albiononline.AlbionOnline'],
  ['black-desert','Black Desert','Aventura','1.0',false,'Steam','steam steam://rungameid/582660'],
  ['terraria-tmodloader','tModLoader','Indie','2024.11',true,'Steam','steam steam://rungameid/1281930'],
  ['geometry-dash','Geometry Dash','Indie','2.2',false,'Steam','steam steam://rungameid/322170'],
  ['limbo','LIMBO','Indie','1.3',false,'Steam','steam steam://rungameid/48000'],
  ['inside','INSIDE','Indie','1.0',false,'Steam','steam steam://rungameid/304430'],
  ['little-nightmares','Little Nightmares','Aventura','1.0',false,'Steam','steam steam://rungameid/424840'],
  ['little-nightmares-2','Little Nightmares II','Aventura','1.0',false,'Steam','steam steam://rungameid/860510'],
  ['the-sims-4','The Sims 4','Indie','1.0',true,'Lutris','lutris install the-sims-4'],
  ['cities-skylines','Cities: Skylines','Estrategia','1.19',false,'Steam','steam steam://rungameid/255710'],
  ['cities-skylines-2','Cities: Skylines II','Estrategia','1.4',false,'Steam','steam steam://rungameid/949230'],
  ['kerbal-space-program','Kerbal Space Program','Estrategia','1.12',false,'Steam','steam steam://rungameid/220200'],
  ['space-engineers','Space Engineers','Estrategia','1.206',false,'Steam','steam steam://rungameid/244850'],
  ['surviving-mars-green','Surviving Mars: Relaunched','Estrategia','1.0',false,'Steam','steam steam://rungameid/1591520'],
  ['football-manager','Football Manager 2026','Estrategia','26.1',false,'Steam','steam steam://rungameid/3551340'],
  ['f1-25','F1 25','Acción','1.0',false,'Steam','steam steam://rungameid/3059520'],
  ['dirt-rally-2','DiRT Rally 2.0','Acción','1.16',false,'Steam','steam steam://rungameid/690790'],
  ['art-of-rally','art of rally','Indie','1.5',false,'Steam','steam steam://rungameid/550320'],
  ['wreckfest','Wreckfest','Acción','1.0',false,'Steam','steam steam://rungameid/228380'],
  ['snowrunner','SnowRunner','Aventura','30.0',false,'Steam','steam steam://rungameid/1465360'],
  ['beamng-drive','BeamNG.drive','Acción','0.36',false,'Steam','steam steam://rungameid/284160'],
  ['american-truck-simulator','American Truck Simulator','Indie','1.58',false,'Steam','steam steam://rungameid/270880'],
  ['wreckfest-2','Wreckfest 2','Acción','0.1',false,'Steam','steam steam://rungameid/1203190'],
  ['hotline-miami','Hotline Miami','Acción','1.0',false,'Steam','steam steam://rungameid/219150'],
  ['hotline-miami-2','Hotline Miami 2','Acción','1.0',false,'Steam','steam steam://rungameid/274170'],
  ['katana-zero','Katana ZERO','Acción','1.0',false,'Steam','steam steam://rungameid/460950'],
  ['my-friend-pedro','My Friend Pedro','Acción','1.0',false,'Steam','steam steam://rungameid/557340'],
  ['broforce','Broforce','Acción','1.0',false,'Steam','steam steam://rungameid/274190'],
  ['castle-crashers','Castle Crashers','Acción','1.0',false,'Steam','steam steam://rungameid/204360'],
  ['brothers-tale','Brothers: A Tale of Two Sons','Aventura','1.0',false,'Steam','steam steam://rungameid/225080'],
  ['the-witness','The Witness','Aventura','1.0',false,'Steam','steam steam://rungameid/210970'],
  ['baba-is-you','Baba Is You','Indie','1.0',false,'Steam','steam steam://rungameid/736260'],
  ['human-fall-flat','Human Fall Flat','Indie','1.0',false,'Steam','steam steam://rungameid/477160'],
  ['gang-beasts','Gang Beasts','Indie','1.0',false,'Steam','steam steam://rungameid/285900'],
  ['unrailed','Unrailed!','Indie','3.0',false,'Steam','steam steam://rungameid/1016920'],
  ['overcooked-2','Overcooked! 2','Indie','1.0',false,'Steam','steam steam://rungameid/728880'],
  ['moving-out','Moving Out','Indie','1.0',false,'Steam','steam steam://rungameid/996770'],
  ['trine-4','Trine 4: The Nightmare Prince','Aventura','1.0',false,'Steam','steam steam://rungameid/690640'],
  ['rayman-legends','Rayman Legends','Aventura','1.0',false,'Lutris','lutris install rayman-legends'],
  ['beyond-good-and-evil','Beyond Good & Evil','Aventura','1.0',false,'Lutris','lutris install beyond-good-and-evil'],
  ['prince-of-persia','Prince of Persia: The Sands of Time','Aventura','1.0',false,'Lutris','lutris install prince-of-persia-sands-of-time']
].map(([id, name, category, version, free, method, command]) => ({
  id, name, category, version, free, method, command,
  image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80',
  description: `${name}: una experiencia recomendada para jugar en Ubuntu mediante ${method}.`,
  youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} Ubuntu Linux instalar`)}`,
  rating: 'Nuevo'
}));
games.push(...additionalGames.slice(0, 100));

const savedGames = JSON.parse(localStorage.getItem('ubuntu-arcade-community') || '[]');
games.unshift(...savedGames);

const grid = document.querySelector('#game-grid');
const searchInput = document.querySelector('#search-input');
const count = document.querySelector('#results-count');
const empty = document.querySelector('#empty-state');
let activeFilter = 'Todos';
let activeSource = 'Todos';
const knownSteamIds = { supertuxkart: '90400', '0ad': '597280', wesnoth: '599390', 'endless-sky': '404410', openttd: '1536610', mindustry: '1127400', hedgewars: '321360', teeworlds: '380840', supertux: '15700' };

function getGameImage(game) {
  const steamId = game.command.match(/steam:\/\/rungameid\/(\d+)/)?.[1] || knownSteamIds[game.id];
  if (steamId) return `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/header.jpg`;
  return `https://placehold.co/900x500/17212b/e8f54a?text=${encodeURIComponent(game.name)}`;
}

function renderGames() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = games.filter(game => {
    const matchesFilter = activeFilter === 'Todos' || game.category === activeFilter;
    const matchesSource = activeSource === 'Todos' || (activeSource === 'Gratis' && game.free) || (activeSource === 'De pago' && !game.free) || game.method === activeSource;
    const matchesQuery = [game.name, game.category, game.method, game.description].join(' ').toLowerCase().includes(query);
    return matchesFilter && matchesSource && matchesQuery;
  });
  count.textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado' : 'resultados'}`;
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(game => `
    <article class="game-card">
      <div class="game-cover" style="background-image:url('${getGameImage(game)}')"><span class="cover-label">${game.method}</span></div>
      <div class="game-body"><div class="game-meta"><span>${game.category}</span>${game.free ? '<span class="free-label">● Gratis</span>' : '<span>De pago</span>'}</div>
      <h3>${game.name}</h3><p class="game-desc">${game.description}</p><div class="card-bottom"><span class="version">v${game.version}</span><button class="detail-button" data-game="${game.id}">Ver instalación <span>↗</span></button></div></div>
    </article>`).join('');
  document.querySelectorAll('[data-game]').forEach(button => button.addEventListener('click', () => openGame(button.dataset.game)));
}

function openGame(id) {
  const game = games.find(item => item.id === id);
  trackEvent('view_game', { game_name: game.name, install_method: game.method });
  document.querySelector('#modal-content').innerHTML = `<div class="modal-cover" style="background-image:url('${getGameImage(game)}')"></div><div class="game-meta"><span>${game.category} · ${game.method}</span><span class="free-label">★ ${game.rating}</span></div><h2 id="modal-title">${game.name}</h2><p class="modal-copy">${game.description}</p><div class="modal-command">$ ${game.command}</div><a class="guide-link" href="${game.youtube}" target="_blank" rel="noreferrer">▶ Ver guías en YouTube ↗</a>`;
  showModal('game-modal');
}

function showModal(id) { document.querySelector(`#${id}`).hidden = false; document.body.style.overflow = 'hidden'; }
function closeModals() { document.querySelectorAll('.modal-backdrop').forEach(modal => modal.hidden = true); document.body.style.overflow = ''; }

document.querySelectorAll('[data-filter]').forEach(chip => chip.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active')); chip.classList.add('active'); activeFilter = chip.dataset.filter; renderGames(); }));
document.querySelectorAll('[data-source]').forEach(chip => chip.addEventListener('click', () => { document.querySelectorAll('[data-source]').forEach(item => item.classList.remove('active')); chip.classList.add('active'); activeSource = chip.dataset.source; renderGames(); }));
searchInput.addEventListener('input', () => {
  renderGames();
  if (searchInput.value.trim()) trackEvent('search_catalog', { search_term: searchInput.value.trim().slice(0, 80) });
});
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
  games.unshift(newGame); localStorage.setItem('ubuntu-arcade-community', JSON.stringify([newGame, ...savedGames])); trackEvent('submit_game', { game_name: newGame.name, category: newGame.category }); event.target.reset(); closeModals(); renderGames(); document.querySelector('#explorar').scrollIntoView({behavior:'smooth'});
});

renderGames();
