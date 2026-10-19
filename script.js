// Formato de fila: nombre|precio|días hábiles|detalle  (campos vacíos permitidos)
const D=[
{id:'acrilicos',t:'Acrílicos',g:[{t:'Prótesis Total / Parcial',r:`Prótesis total|$190.000|3 - 4
Prótesis altoimpacto - Dientes Ivostar - Duratone|$240.000|3 - 4
Prótesis flexible|$350.000|3 - 4
Prótesis parcial|$160.000|3 - 4|1-4 unidades
Acker acrílico|$80.000|2 - 3|1 unidad
Acker flexible|$190.000|3 - 4|1 unidad
Prótesis total inmediata|$200.000|2 - 3
Prótesis parcial inmediata|$170.000|2 - 3|1-4 unidades
Enfilado + acrilado + terminado de prótesis híbrida|$470.000|3 - 4
Cubeta individual|$38.000|1 - 2
Plato base / rodete|$25.000|1 - 2
Rebase - Reparación|$80.000|2 - 3
Malla adicional a prótesis (prefabricada)|$47.000
Gancho Wipla|$37.000
Gancho flexible|$47.000
Barra lingüal|$45.000`}]},
{id:'temporales',t:'Temporales',g:[{t:'Temporales',r:`Temporal tipo Maryland|$58.000|3
Temporal en autocurado|$37.000|2 - 3
Temporal en termocurado|$50.000|2 - 3
Temporal atornillado|$70.000|2 - 3
Refuerzo metálico para temporales|$25.000`}]},
{id:'cadcam',t:'CAD CAM',g:[
{t:'PMMA',r:`Provisionales en PMMA multicapa|$90.000|3 - 4
Provisionales en PMMA monocapa|$90.000|3 - 4`},
{t:'Zirconio',r:`Cofia en zirconio|$170.000|4 - 5
Corona en zirconio monolítico|$310.000|4 - 5
Corona en zirconio con cutback|$330.000|4 - 5
Puente Maryland en zirconio monolítico|$290.000|4 - 5
Incrustación/carilla en zirconio monolítico|$300.000|4 - 5`},
{t:'Disilicato EMAX',r:`Corona en EMAX monolítico|$310.000|4 - 5
Corona en EMAX con cutback|$330.000|4 - 5
Incrustación/carilla en EMAX|$300.000|4 - 5`},
{t:'Metal-cerámica',r:`Corona metal-cerámica|$300.000|4 - 5
Corona metal-cerámica atornillada|$310.000|4 - 5`},
{t:'Impresión 3D - Resina',r:`Modelo 3D hueco|$50.000|1 - 2
Resina de prueba|$8.000 c/u|2 - 3
Corona/carilla/resina calcinable|$15.000 c/u|2 - 3
Provisionales en resina|$60.000|2 - 3`}]},
{id:'aparatologia',t:'Aparatología',g:[
{t:'Retenedores',note:'Todos los aparatos se entregan con su estuche. Desde la recepción de los modelos: 4 días hábiles para ortopedia maxilar, 3 para ortodoncia y 2 para retenedores invisibles. NOTA: Estos aparatos no incluyen dientes, setup o aditamentos adicionales.',foot:'',r:`Retenedor arco continuo|$80.000||Con cinta o sin cinta
Retenedor Hawley clásico|$76.000
Retenedor aligner básico|$66.000
Retenedor fijo higiénico|$57.000||Alambre trenzado
Retenedor fijo|$55.000
Retenedor - Alineador - Essix|$70.000
Retenedor continuo soldado a Adams|$83.000`},
{t:'Aparatos funcionales',r:`Placa confort activada|$170.000
Placa extraconfort activada|$190.000
Placa rígida de bruxismo en acetato|$70.000
Placa blanda de bruxismo en latex|$70.000
Placa o funda blanqueamiento|$70.000
Protector deportivo|$90.000
Placa estética|$76.000||No incluye dientes ni arco
Placa levantadora de mordida|$75.000
Pantalla vestibular|$80.000
Placa SI - Silensor - Apnea del sueño|$390.000
Placa psicofuncional|$90.000
Férula de descarga termopolimerizada|$145.000
Férula neuromiorelajante|$180.000||Acrílico termo
Guía quirúrgica|$70.000
Personalización / Caracterización / Encías|$25.000
Placas color|$5.000||Adicional
Jig de verificación|$50.000`},
{t:'Aparatología fija',foot:'NOTA: Los precios no incluyen tubos, botones, cajuelas, bandas adicionales, brackets y/o dientes.',r:`Barra transpalatina|$71.000||Incluye 2 bandas
Hass|$87.000||Incluye tornillo + 2 bandas
Arco lingual con asas|$71.000||Incluye 2 bandas
Barra palatina con botón de Nance|$76.000||Incluye 2 bandas
Botón palatino de Nance|$71.000||Incluye 2 bandas
Quad Helix, Bihelix|$81.000||Incluye 2 bandas
Mantenedor de espacio|$62.000||Incluye 1 banda
Rejilla lingual|$75.000||Incluye 2 bandas
Hyrax|$118.000||Incluye tornillo + 2 bandas
Hyrax inferior|$170.000||Incluye tornillo + 2 bandas
Hyrax en abanico|$160.000||Incluye tornillo + 2 bandas
McNamara|$130.000||Incluye tornillo
Flipper|$69.000||Incluye 2 bandas, no incluye dientes
Lip bumper soldado|$74.000||Incluye 2 bandas
Péndulo|$93.000||Incluye 2 bandas`},
{t:'Aparatología ortopedia',foot:'NOTA: Los precios se mantienen según diseño original. No incluyen adicionales como equiplan o tornillos.',r:`Activador de Klammt con tornillo o Coffin|$118.000
Progenie|$106.000
Twin block|$144.000
Pistas planas indirectas simples|$156.000
Pistas planas compuestas|$164.000
Simoes Network (SN1, SN3)|$149.000
Simoes Network (SN2)|$132.000
Frankel|$140.000
Bionator|$117.000
Bimler A, B, C|$130.000
Bite jumper|$159.000
Kinetor|$169.000
Monoblock|$112.000
Prostab|$134.000
Plano inclinado|$72.000`},
{t:'Placas de expansión',r:`Placa de expansión con tornillo transversal o bilateral|$87.000
Placa de expansión con tornillo unilateral|$92.000
Placa de expansión con tornillo triple|$80.000||No incluye tornillo
Placa de expansión con tornillo en abanico nacional|$105.000`}]},
{id:'otros',t:'Otros servicios',g:[{t:'Otros servicios',r:`Encerados de diagnóstico|$20.000 c/u
Montaje de cerámica rosada|$30.000 c/u
Personalización de Abutment|$80.000|1 - 2`}]}
];
const norm=s=>s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase();
const root=document.getElementById('catalogo'),chips=document.getElementById('chips'),q=document.getElementById('q'),vacio=document.getElementById('vacio');
let cat='todos';
root.innerHTML=D.map(c=>`<section id="${c.id}" data-cat="${c.id}"><h2>${c.t}</h2>${c.g.map(g=>`<div class="card"><h3><span>${g.t}</span><span class="col">Precio</span>${g.r.split('\n').some(l=>l.split('|')[2])?'<span class="col t">Tiempo</span>':''}</h3>${g.note?`<p class="note">${g.note}</p>`:''}<ul>${g.r.split('\n').map(l=>{const[n,p,d,x]=l.split('|');return `<li data-k="${norm(n+' '+(x||'')+' '+g.t)}"><div class="n">${n}${x?`<small>${x}</small>`:''}</div><span class="p">${p}</span>${d?`<span class="d">${d} días hábiles</span>`:'<span class="d"></span>'}</li>`}).join('')}</ul>${g.foot?`<p class="foot-note">${g.foot}</p>`:''}</div>`).join('')}</section>`).join('');
chips.innerHTML=[['todos','Todos'],...D.map(c=>[c.id,c.t])].map(([id,t])=>`<button type="button" data-id="${id}" aria-pressed="${id==='todos'}">${t}</button>`).join('');
function filtrar(){
  const t=norm(q.value.trim());let total=0;
  // Con texto en el buscador se busca en TODAS las categorías; sin texto aplica la categoría elegida
  const activa=t?'todos':cat;
  chips.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.id===activa));
  root.querySelectorAll('section').forEach(s=>{
    const okCat=activa==='todos'||s.dataset.cat===activa;let vis=0;
    s.querySelectorAll('.card').forEach(card=>{
      let n=0;card.querySelectorAll('li').forEach(li=>{const ok=okCat&&li.dataset.k.includes(t);li.hidden=!ok;if(ok)n++});
      card.hidden=!n;vis+=n});
    s.hidden=!vis;total+=vis});
  vacio.hidden=total>0;
}
chips.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cat=b.dataset.id;q.value='';filtrar()});
q.addEventListener('input',filtrar);
q.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();filtrar();const f=root.querySelector('section:not([hidden])');if(f)f.scrollIntoView({behavior:'smooth'})}});

// Botón flotante de WhatsApp: aparece cuando el botón del hero sale de la pantalla
const wa=document.querySelector('.wa'),fl=wa.cloneNode(true);
fl.classList.add('wa-float');fl.setAttribute('aria-label','Contáctanos por WhatsApp');
document.body.appendChild(fl);
new IntersectionObserver(([e])=>fl.classList.toggle('show',!e.isIntersecting)).observe(wa);
