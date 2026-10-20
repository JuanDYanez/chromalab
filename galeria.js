// Fotos: [archivo, descripción]. Los archivos están en galeria/full y galeria/thumbs.
const FOTOS=[
['01','Prótesis inferior con encía rosada sobre su modelo'],
['02','Corona en un molar sobre modelo de yeso, sostenido con guantes'],
['03','Dientes anteriores trabajados sobre modelo con marcas de color'],
['04','Coronas posteriores sobre modelo, vista oclusal'],
['05','Prótesis total superior en acrílico, vista lateral'],
['06','Prótesis total superior en acrílico, vista frontal'],
['07','Dientes anteriores con encía rosada personalizada sobre modelo'],
['08','Prótesis superior con dos orificios sobre su modelo'],
['09','Prótesis total inferior sobre modelo de yeso'],
['10','Prótesis inferior sobre modelo con pilar metálico'],
['11','Modelo impreso en 3D con estructuras parciales'],
['12','Prótesis total superior sobre modelo con su antagonista'],
['13','Prótesis parcial en acrílico, vista oclusal'],
['14','Prótesis parcial con diente posterior sobre modelo'],
['15','Corona en un molar, vista oclusal'],
['16','Puente de tres dientes anteriores sobre modelo'],
['17','Prótesis parcial anterior con encía rosada sobre modelo'],
['18','Puente de dientes anteriores'],
['19','Coronas posteriores sobre modelo rosado']
];
const $=id=>document.getElementById(id),grid=$('grid'),lb=$('lb'),img=$('lb-img'),cnt=$('lb-count'),th=$('lb-thumbs');
const N=FOTOS.length,full=i=>`galeria/full/${FOTOS[i][0]}.webp`,thumb=i=>`galeria/thumbs/${FOTOS[i][0]}.webp`;
let cur=0,tok=0,opener=null;

grid.innerHTML=FOTOS.map((f,i)=>`<li><button type="button" data-i="${i}"><img src="${thumb(i)}" alt="${f[1]}" width="640" height="640" loading="lazy" decoding="async"></button></li>`).join('');
th.innerHTML=FOTOS.map((f,i)=>`<button type="button" data-i="${i}" aria-label="Foto ${i+1}"><img src="${thumb(i)}" alt="" loading="lazy"></button>`).join('');

// Aparición suave al hacer scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
grid.querySelectorAll('li').forEach(li=>io.observe(li));

function show(i){
  cur=(i+N)%N;const t=++tok;img.classList.add('load');
  const p=new Image();p.onload=()=>{if(t!==tok)return;img.src=p.src;img.alt=FOTOS[cur][1];img.classList.remove('load')};p.src=full(cur);
  cnt.textContent=`${cur+1} / ${N}`;
  [...th.children].forEach((b,k)=>b.setAttribute('aria-current',k===cur));
  th.children[cur].scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  [cur-1,cur+1].forEach(k=>{new Image().src=full((k+N)%N)});
}
function openLb(i,el){opener=el;lb.hidden=false;document.body.style.overflow='hidden';show(i);lb.querySelector('.lb-close').focus()}
function closeLb(){lb.hidden=true;document.body.style.overflow='';if(opener)opener.focus()}

grid.addEventListener('click',e=>{const b=e.target.closest('button');if(b)openLb(+b.dataset.i,b)});
lb.addEventListener('click',e=>{
  const t=e.target;
  if(t.closest('.lb-close'))closeLb();
  else if(t.closest('.prev'))show(cur-1);
  else if(t.closest('.next'))show(cur+1);
  else if(t.closest('#lb-thumbs button'))show(+t.closest('button').dataset.i);
  else if(t.classList.contains('lb-stage')||t===lb)closeLb();
});
document.addEventListener('keydown',e=>{
  if(lb.hidden)return;
  if(e.key==='Escape')closeLb();
  else if(e.key==='ArrowLeft')show(cur-1);
  else if(e.key==='ArrowRight')show(cur+1);
  else if(e.key==='Tab'){
    const f=[...lb.querySelectorAll('button')],a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
    else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}
  }
});
// Deslizar con el dedo
let x0=null;const st=lb.querySelector('.lb-stage');
st.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
st.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>50)show(cur+(d<0?1:-1))});

// Botón flotante de WhatsApp (aparece al salir del botón del hero)
const wa=document.querySelector('.wa'),fl=wa.cloneNode(true);
fl.classList.add('wa-float');fl.setAttribute('aria-label','Contáctanos por WhatsApp');
document.body.appendChild(fl);
new IntersectionObserver(([e])=>fl.classList.toggle('show',!e.isIntersecting)).observe(wa);
