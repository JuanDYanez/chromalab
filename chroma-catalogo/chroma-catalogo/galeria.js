// Las fotos se leen del HTML (galeria.html): cada <li> trae miniatura, foto grande (data-full), título y descripción.
const $=id=>document.getElementById(id),grid=$('grid'),lb=$('lb'),img=$('lb-img'),cnt=$('lb-count'),th=$('lb-thumbs'),ttl=$('lb-title'),dsc=$('lb-desc');
const lis=[...grid.querySelectorAll('li')];
const items=lis.map((li,k)=>{const b=li.querySelector('button'),i=li.querySelector('img');b.dataset.i=k;
  return{full:b.dataset.full,thumb:i.getAttribute('src'),alt:i.alt,title:li.querySelector('strong').textContent,desc:li.querySelector('figcaption span').textContent}});
const N=items.length;let cur=0,tok=0,opener=null;
th.innerHTML=items.map((it,k)=>`<button type="button" data-i="${k}" aria-label="Foto ${k+1}"><img src="${it.thumb}" alt="" loading="lazy"></button>`).join('');

// Datos estructurados (SEO): galería de imágenes generada a partir del HTML
const abs=u=>new URL(u,location.href).href,ld=document.createElement('script');ld.type='application/ld+json';
ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'ImageGallery',name:document.title,url:location.href.split('#')[0],
  image:items.map(it=>({'@type':'ImageObject',contentUrl:abs(it.full),thumbnailUrl:abs(it.thumb),name:it.title,description:it.desc,caption:it.alt}))});
document.head.appendChild(ld);

// Aparición suave al hacer scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
lis.forEach(li=>io.observe(li));

function show(i){
  cur=(i+N)%N;const it=items[cur],t=++tok;img.classList.add('load');
  const p=new Image();p.onload=()=>{if(t!==tok)return;img.src=p.src;img.alt=it.alt;img.classList.remove('load')};p.src=it.full;
  cnt.textContent=`${cur+1} / ${N}`;ttl.textContent=it.title;dsc.textContent=it.desc;
  [...th.children].forEach((b,k)=>b.setAttribute('aria-current',k===cur));
  th.children[cur].scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  [cur-1,cur+1].forEach(k=>{new Image().src=items[(k+N)%N].full});
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
