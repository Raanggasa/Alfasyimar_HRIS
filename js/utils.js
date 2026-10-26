(function(A){'use strict';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function safeUrl(v){const s=String(v||'').trim();if(/[\u0000-\u0020]/.test(s))return '';if(/^#\/[\w/?=&%+.-]*$/.test(s)||/^#[\w-]+$/.test(s)||/^assets\/[\w/.-]+$/.test(s)&&!s.includes('..'))return s;try{const u=new URL(s);return ['http:','https:','tel:','mailto:'].includes(u.protocol)&&!u.username&&!u.password?s:'';}catch{return '';}}
const date=v=>new Intl.DateTimeFormat('id-ID',{dateStyle:'long',timeZone:'Asia/Jakarta'}).format(new Date(v+'T12:00:00Z'));
function today(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
const stale=v=>Date.now()-new Date(v+'T12:00:00Z').getTime()>30*86400000;
const qs=(s,r=document)=>r.querySelector(s),qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
function hash(path,query={}){const q=new URLSearchParams(Object.entries(query).filter(([,v])=>v!==''&&v!=null));return '#'+path+(q.size?'?'+q.toString():'');}
function matches(v,q){return normalize(q).split(/\s+/).every(t=>normalize(v).includes(t));}
function filterDoctors(list,q={}){return list.filter(d=>(!q.q||matches(d.name+' '+d.specialty,q.q))&&(!q.clinic||d.clinics.includes(q.clinic))&&(!q.day||d.schedule[q.day]?.length));}
function paginate(list,page=1,size=12){const total=Math.max(1,Math.ceil(list.length/size)),current=Math.min(total,Math.max(1,Number(page)||1));return {items:list.slice((current-1)*size,current*size),current,total,count:list.length};}
function debounce(fn,ms=200){let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms);};}
Object.assign(A.utils,{esc,normalize,safeUrl,date,today,stale,qs,qsa,hash,matches,filterDoctors,paginate,debounce,rupiah:n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n),initials:n=>n.replace(/^(dr\.|drg\.|Psikolog)\s*/,'').split(' ').slice(0,2).map(x=>x[0]).join(''),tel:n=>'tel:'+String(n).replace(/[^+\d]/g,''),wa:n=>'https://wa.me/'+String(n).replace(/\D/g,'')+'?text='+encodeURIComponent('Halo, saya ingin informasi layanan. Saya memahami ini nomor demo.'),clinic:s=>A.data.clinics.find(x=>x.slug===s),doctor:id=>A.data.doctors.find(x=>x.id===id),sundayDoctors:()=>A.data.doctors.filter(d=>d.schedule.minggu.length),reduced:()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches});
})(window.Alfa);
