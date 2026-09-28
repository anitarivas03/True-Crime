// Poné en true si Agustín se baja: la diapositiva 4 pasa a Ana y su tarjeta desaparece.
const HAY_BAJA = true;
// Poné en false para silenciar el golpe del sello al cerrar el expediente.
const SONIDO = true;

let nombres = [
  {name:"Leyes Juan", role:"Investigador del fenómeno", q:"¿Qué ethos forjamos cada vez que hacemos scroll?"},
  {name:"Guantay Luciano", role:"Analista de la pulsión", q:"¿Elegimos ver esto o nos arrastra la repetición?"},
  {name:"Rivas Ana", role:"Rastreador del laberinto moral", q:"¿Se puede mirar el crimen desde afuera de la moral?"},
  {name:"Sinchicay Benjamin", role:"Detector de autoengaños", q:"¿Concientizar o disfrutar el morbo?"},
  {name:"Corti Agustin", role:"A cargo del cierre del caso", q:"¿Qué entrenamos cada vez que damos play?"},
];
if(HAY_BAJA){
  nombres = nombres.filter(n=>n.name!=="Sinchicay Benjamin");
  const idxAna= nombres.findIndex(n=> n.name === "Rivas Ana");
  if (idxAna >-1)
    nombres[idxAna]={name:"Rivas Ana", role: "Detector de Autoengaños"}
}
const quien4 = HAY_BAJA ? "Rivas Ana" : "Sinchicay Benjamin";

const slides = [
{type:"welcome", topic:"Acceso restringido · Identifíquese"},
{type:"cover", topic:"Ética Profesional"},
{type:"content", num:1, topic:"El fenómeno del True Crime en redes", integrante:"Leyes, Juan",
  conceptLabel:"CONCEPTO CLAVE — EL ETHOS",
  concept:"Maliandi explica que, etimológicamente, la palabra griega <i>ethos</i> significaba “vivienda”, “morada” o “lugar donde se habita”. Con el tiempo pasó a designar el “carácter” de una persona: algo que no es innato, sino que se forja mediante el hábito y la repetición de nuestras conductas cotidianas.",
  desarrollo:"Hoy series como Dahmer, los TikToks de crímenes reales y el gore viralizado convierten a las plataformas digitales en nuestra nueva “morada” contemporánea. Al consumir por hábito tragedias humanas estetizadas, forjamos —sin darnos cuenta— un nuevo ethos colectivo que normaliza el horror y lo vuelve entretenimiento de consumo rápido.",
  idea:"Las plataformas digitales son la nueva morada donde forjamos, por costumbre, un ethos que normaliza el horror.",
  clip:{tag:"ARCHIVO", date:"Sociedad — Edición digital", h:"La sociedad del clic: cuando el crimen se vuelve entretenimiento", by:"Redacción Sociedad",
    ex:"Especialistas en consumo digital advierten que el fenómeno ya no distingue edades ni plataformas: el contenido de crímenes reales se filtra entre recetas y bailes virales, mezclado con el resto del scroll diario."}},
{type:"content", num:2, topic:"La pulsión de muerte en el ethos prerreflexivo", integrante:"Guantay Luciano",
  conceptLabel:"CONCEPTO CLAVE — INERCIA Y TÁNATOS",
  concept:"El “ethos prerreflexivo” es la aceptación pasiva, inercial y automática de las costumbres de nuestra cultura: actuamos sin cuestionar moralmente lo que hacemos. Freud describe a Tánatos —la pulsión de muerte— y la “compulsión de repetición” como fuerzas que nos empujan a repetir una y otra vez lo mismo, incluso lo doloroso.",
  desarrollo:"Así se explica por qué el espectador hace clic una y otra vez: no elige ver este contenido tras un análisis consciente, sino que es arrastrado por la compulsión de repetición y el diseño adictivo de las plataformas. Consumimos la violencia en “piloto automático”, sin ningún filtro reflexivo o ético.",
  idea:"Cuando el clic es automático, la pulsión de muerte se descarga sin pasar por ningún filtro ético.",
  clip:{tag:"ARCHIVO", date:"Psicología — Notas de interés", h:"“No pude dejar de ver”: la compulsión detrás del binge-watching", by:"Redacción Sociedad",
    ex:"Usuarios consultados reconocen haber visto “toda la temporada de un tirón” sin poder explicar por qué. Los algoritmos, dicen los expertos, están diseñados para que esa pregunta nunca llegue a formularse."}},
{type:"content", num:3, topic:"Identificación con el asesino y el laberinto moral", integrante:"Rivas Ana",
  conceptLabel:"CONCEPTO CLAVE — EL LABERINTO MORAL",
  concept:"Maliandi, apoyándose en Antonio Machado (Juan de Mairena), advierte que el ser humano no puede ser un observador neutral: está inevitablemente atrapado dentro del “laberinto de lo bueno y lo malo”. No existe un lugar “afuera” de la moral desde donde mirar sin quedar implicado.",
  desarrollo:"La pulsión escópica —el placer de mirar— explica la fascinación ambivalente por el asesino serial. A nivel consciente el crimen nos horroriza, pero a nivel inconsciente el criminal nos fascina, porque encarna a quien “se atrevió” a romper la represión pulsional y cruzar los límites que nosotros acatamos.",
  idea:"No miramos desde afuera: estamos atrapados en el mismo laberinto moral que el criminal se atreve a cruzar.",
  clip:{tag:"ARCHIVO", file:true, date:"Sociedad — A fondo", h:"Fans del asesino: la fascinación que incomoda", by:"Redacción Sociedad",
    ex:"En foros y redes, comunidades enteras debaten teorías sobre los criminales más mediáticos, al punto de generar merchandising y fanarts que incomodan a asociaciones de víctimas.Siendo uno de los más conocidos Jeffrey Dahmer "}},
{type:"content", num:4, topic:"La tematización como cura frente a la compulsión", integrante:"Corti Agustin",
  conceptLabel:"CONCEPTO CLAVE — TEMATIZACIÓN DEL ETHOS",
  concept:"La ética se define como la “tematización del ethos”: el esfuerzo racional por frenar la inercia, dejar de actuar por costumbre y convertir nuestra propia conducta en objeto de análisis. Es una “reconstrucción normativa”, un trabajo casi detectivesco.",
  desarrollo:"El True Crime muestra que la sociedad cree haber superado la barbarie, cuando en realidad la monetiza. La solución no es censurar Netflix, sino practicar la tematización: ser detectives de nuestro propio consumo y preguntarnos con honestidad brutal qué estamos entrenando cada vez que damos play.",
  idea:"La salida no es censurar: es hacer de detective de nuestro propio consumo.",
  clip:{tag:"ARCHIVO", date:"Sociedad — Cierre de nota", h:"¿Catarsis o insensibilidad? El debate que deja el True Crime", by:"Redacción Sociedad",
    ex:"Frente al aluvión de contenido, voces del ámbito académico proponen una pausa: preguntarse, antes de dar play, qué lugar ocupa el dolor ajeno en nuestra rutina de entretenimiento."}},
{type:"closing", topic:"Gracias por su atención"},
];

const TOTAL_EV = 5;
let i = 0, twTimer = null;
const deck = document.getElementById("deck");

const SILHOUETTE = `<svg class="silhouette" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="50" cy="24" rx="30" ry="7" fill="var(--ink)"/>
  <path d="M22 24 Q50 2 78 24 L74 30 Q50 16 26 30 Z" fill="var(--ink)"/>
  <circle cx="50" cy="42" r="14" fill="var(--ink)"/>
  <path d="M28 128 L32 74 Q50 58 68 74 L72 128 L58 128 L56 96 L50 108 L44 96 L42 128 Z" fill="var(--ink)"/>
</svg>`;

function clipHTML(c, seed){
  const sx = 15 + (seed*37)%55, sy = 15 + (seed*53)%40;
  const sx2 = 55 + (seed*29)%40, sy2 = 55 + (seed*41)%35;
  return `<div class="clip-wrap"><div class="clip" style="--sx:${sx}%;--sy:${sy}%;--sx2:${sx2}%;--sy2:${sy2}%">
    <span class="tag">${c.tag}</span>
    <div class="dateline">${c.date}</div>
    <h3 class="serif">${c.h}</h3>
    <div class="byline">Por ${c.by}</div>
    <div class="exwrap">
      <div class="excerpt">${c.ex}</div>
      <div class="redact"><b>CENSURADO</b><small>TOCAR PARA REVELAR</small></div>
    </div>
    ${c.file?'<button class="more" data-file="dahmer">VER EXPEDIENTE ADJUNTO ▸</button>':''}
    ${SILHOUETTE}
  </div></div>`;
}

const ROT = [-4,3,-2,5,-3];
function agentsHTML(archived){
  return nombres.map((n,ai)=>`<div class="agent${archived?' archived':''}" style="transform:rotate(${ROT[ai%5]}deg);--ax:${20+ai*17}%;--ay:${15+ai*11}%;--n:${ai}">
    <div class="pin"></div>
    <div class="inner">
      <div class="face front"><div class="no">EXPEDIENTE N.º ${String(ai+1).padStart(2,'0')}</div>
        <div class="aname">${n.name}</div><div class="role">${n.role}</div></div>
      <div class="face back"><div class="qlab">PREGUNTA CLAVE</div><div class="q">${n.q}</div></div>
    </div></div>`).join("");
}

function render(){
  deck.innerHTML = slides.map((s,idx)=>{
    if(s.type==="welcome"){
      return `<div class="slide welcome" data-i="${idx}"><div class="glow"></div>
        <div class="tape"><span>ACCESO RESTRINGIDO · SOLO PERSONAL AUTORIZADO</span></div>
        <div class="stamp">Confidencial<small>Expediente reservado</small></div>
        <h1 class="serif">BIENVENIDOS AL EXPEDIENTE ÉTICO</h1>
        <p class="sub">Un caso sobre morbo, pulsión y consumo digital</p>
        <button class="open-btn pulse" onclick="go(1)">ABRIR EXPEDIENTE</button>
        <div class="tape bottom"><span>NO PASAR · EN INVESTIGACIÓN</span></div></div>`;
    }
    if(s.type==="cover"){
      return `<div class="slide cover" data-i="${idx}"><div class="glow"></div>
        <div class="tape"><span>EXPEDIENTE ÉTICO · NO PASAR · EN INVESTIGACIÓN</span></div>
        <div class="case-no">EXPEDIENTE N.º <b>001</b> — TRUE CRIME Y ÉTICA</div>
        <h1 class="serif">ÉTICA PROFESIONAL</h1>
        <p class="sub">El ethos del True Crime: morbo, pulsión y consumo digital</p>
        <p class="hint">Tocá una ficha para ver su pregunta clave</p>
        <div class="agents">${agentsHTML(false)}</div></div>`;
    }
    if(s.type==="closing"){
      return `<div class="slide closing" data-i="${idx}"><div class="glow"></div>
        <div class="stamp">Caso cerrado<small>Investigación finalizada</small></div>
        <h1 class="serif">GRACIAS POR SU ATENCIÓN</h1>
        <p class="sub">Ética Profesional — El ethos del True Crime</p>
        <div class="agents">${agentsHTML(true)}</div>
        <div class="tape bottom"><span>EXPEDIENTE ARCHIVADO · CASO CERRADO · FIN DE LA INVESTIGACIÓN</span></div>
        </div>`;
    }
    return `<div class="slide" data-i="${idx}">
      <div class="head"><div class="badge">${s.num}</div>
        <div class="headtxt"><h2>${s.topic}</h2><p>Integrante a cargo: ${s.integrante}</p></div></div>
      <div class="body">
        <div class="col"><div class="card"><div class="label">${s.conceptLabel}</div><p>${s.concept}</p></div></div>
        <div class="col">
          <div class="card" style="flex:0 0 auto;"><div class="label">DESARROLLO</div><p>${s.desarrollo}</p></div>
          ${clipHTML(s.clip, s.num)}
        </div>
      </div>
      <div class="idea"><b>IDEA CENTRAL</b><span>${s.idea}</span></div>
    </div>`;
  }).join("");
  document.getElementById("progress").innerHTML = Array.from({length:TOTAL_EV},()=>"<i></i>").join("");
  document.getElementById("dots").innerHTML = slides.map((_,idx)=>`<span class="${idx===i?'on':''}"></span>`).join("");
}

function typewrite(text){
  clearInterval(twTimer);
  const el = document.getElementById("tw-text");
  el.textContent = "";
  let j = 0;
  twTimer = setInterval(()=>{
    el.textContent = text.slice(0, j+1);
    j++;
    if(j>=text.length) clearInterval(twTimer);
  }, 32);
}

function evidencias(){
  const s = slides[i];
  if(s.type==="content") return s.num;
  return s.type==="closing" ? TOTAL_EV : 0;
}

function show(){
  document.querySelectorAll(".slide").forEach(el=>el.classList.remove("active"));
  const el = deck.querySelector(`.slide[data-i="${i}"]`);
  if(el) el.classList.add("active");
  document.querySelectorAll("#dots span").forEach((d,idx)=>d.classList.toggle("on", idx===i));
  const ev = evidencias();
  document.querySelectorAll("#progress i").forEach((b,idx)=>b.classList.toggle("on", idx<ev));
  document.getElementById("prev").disabled = i===0;
  document.getElementById("next").disabled = i===slides.length-1;
  document.getElementById("count").textContent = "Evidencia "+ev+" / "+TOTAL_EV;
  typewrite(slides[i].topic);
  // golpe sonoro + vibración sincronizados con el impacto del sello
  if(slides[i].type==="closing"){
    setTimeout(()=>{ if(slides[i].type==="closing"){ thump(); navigator.vibrate?.(80); } },940);
  }
}

function go(d){
  if(fileEl.classList.contains("open")) return; // no navegar con el adjunto abierto
  i = Math.max(0, Math.min(slides.length-1, i+d));
  show();
}

function toggleFS(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen?.().catch(()=>{});
  } else {
    document.exitFullscreen?.();
  }
}
document.addEventListener("fullscreenchange",()=>{
  document.getElementById("fs").textContent = document.fullscreenElement ? "⤢" : "⛶";
});

// ===== EXPEDIENTE ADJUNTO: DAHMER =====
document.body.insertAdjacentHTML("beforeend",'<div id="file"></div>');
const fileEl = document.getElementById("file");

const DAHMER = `<div class="folder">
  <div class="stamp">Evidencia adjunta</div>
  <div class="fno">EXPEDIENTE ADJUNTO N.º 003-A</div>
  <h2>JEFFREY DAHMER</h2>
  <p class="fsub">El caso que volvió a poner al asesino en el centro de la pantalla</p>

  <div class="timeline">
    <div class="tl" style="--n:0"><b>1978</b><span>Primer asesinato</span></div>
    <div class="tl" style="--n:1"><b>1991</b><span>Detenido en Milwaukee</span></div>
    <div class="tl" style="--n:2"><b>1992</b><span>Condenado a 15 cadenas perpetuas</span></div>
    <div class="tl" style="--n:3"><b>1994</b><span>Asesinado en prisión</span></div>
    <div class="tl" style="--n:4"><b>2022</b><span>Serie en Netflix</span></div>
  </div>

  <div class="fgrid">
    <div class="fbox"><h4>LOS HECHOS</h4>
      <ul>
        <li>Asesino serial estadounidense: 17 víctimas, hombres y jóvenes, entre 1978 y 1991.</li>
        <li>Su caso es uno de los más mediáticos de la historia del True Crime.</li>
        <li>Las víctimas casi nunca son el centro del relato.</li>
      </ul></div>
    <div class="fbox"><h4>LA SERIE Y LA POLÉMICA</h4>
      <ul>
        <li>En 2022 Netflix estrenó una serie sobre su vida y fue un fenómeno de audiencia.</li>
        <li>Familiares de las víctimas denunciaron que revivió su dolor y que se lucró con él.</li>
        <li>Se viralizaron tendencias, disfraces y ediciones en redes.</li>
      </ul></div>
    <div class="fbox"><h4>LECTURA ÉTICA</h4>
      <p>Es el ejemplo perfecto de nuestro marco teórico:</p>
      <div class="chips"><span>Ethos por hábito (1)</span><span>Compulsión de repetición (2)</span>
      <span>Pulsión escópica (3)</span><span>Autoengaño (4)</span></div></div>
    <div class="fbox"><h4>PREGUNTA PARA LA SALA</h4>
      <p>¿Cuántos nombres de víctimas recordamos, y cuántas veces vimos el rostro del asesino?</p></div>
  </div>
  <button class="fclose" onclick="closeFile()">CERRAR ADJUNTO ✕</button>
</div>`;

function openFile(){ fileEl.innerHTML = DAHMER; fileEl.scrollTop = 0; fileEl.classList.add("open"); }
function closeFile(){ fileEl.classList.remove("open"); }

// golpe de sello (sonido sintetizado, sin archivos)
function thump(){
  if(!SONIDO) return;
  try{
    const a = new (window.AudioContext||window.webkitAudioContext)();
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.type = "sine";
    o.frequency.setValueAtTime(140,t); o.frequency.exponentialRampToValueAtTime(40,t+.25);
    g.gain.setValueAtTime(.7,t); g.gain.exponentialRampToValueAtTime(.001,t+.3);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t+.32);
  }catch(e){}
}

// tocar: abrir adjunto / girar ficha de agente / revelar recorte censurado
deck.addEventListener("click",e=>{
  if(e.target.closest("[data-file]")){ openFile(); return; }
  const ag = e.target.closest(".agent");
  if(ag) ag.classList.toggle("flip");
  const ex = e.target.closest(".exwrap");
  if(ex) ex.classList.toggle("open");
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeFile();
  if(e.key==="ArrowRight") go(1);
  if(e.key==="ArrowLeft") go(-1);
  if(e.key==="Enter" && i===0) go(1);
  if(e.key==="f" || e.key==="F") toggleFS();
});
let touchX=null;
document.addEventListener("touchstart",e=>touchX=e.touches[0].clientX);
document.addEventListener("touchend",e=>{
  if(touchX===null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if(Math.abs(dx)>50) go(dx<0?1:-1);
  touchX=null;
});

render();
show();