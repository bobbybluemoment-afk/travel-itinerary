const fallback={title:'旅行行程',dateRange:'请填写日期',route:[],days:[],stays:[],checklist:[]};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mapUrl=places=>{const p=places.filter(Boolean);if(!p.length)return'#';if(p.length===1)return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p[0])}`;const origin=encodeURIComponent(p[0]),destination=encodeURIComponent(p.at(-1)),waypoints=p.slice(1,-1).map(encodeURIComponent).join('%7C');return`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypoints?`&waypoints=${waypoints}`:''}`};
function render(data){
 document.title=data.title||'旅行行程';
 document.querySelector('#trip-title').textContent=data.title||'旅行行程';
 document.querySelector('#trip-dates').textContent=data.dateRange||'';
 document.querySelector('#route').innerHTML=(data.route||[]).map(x=>`<span>${esc(x)}</span>`).join('');
 document.querySelector('#route-link').href=mapUrl(data.route||[]);
 document.querySelector('#days').innerHTML=(data.days||[]).map((d,i)=>`<details class="day" ${i===0?'open':''}><summary><span class="date">${esc(d.date?.slice(5)||d.date)}</span><span class="day-title"><h3>${esc(d.city||d.title)}</h3><p>${esc(d.summary)}</p></span><span class="plus">＋</span></summary><div class="items">${(d.items||[]).map(x=>`<article class="item"><time>${esc(x.time)}</time><h4>${esc(x.title)}</h4>${x.meta?`<p>${esc(x.meta)}</p>`:''}${(x.details||[]).map(v=>`<p>${esc(v)}</p>`).join('')}<div class="links">${x.location?`<a href="${mapUrl([x.location])}" target="_blank" rel="noreferrer">地图导航 ↗</a>`:''}${(x.sources||[]).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.title)} ↗</a>`).join('')}</div></article>`).join('')}</div></details>`).join('')||'<p>行程正在整理中。</p>';
 const stays=data.stays||[];
 document.querySelector('#stays-section').hidden=!stays.length;
 document.querySelector('#stays').innerHTML=stays.map(s=>`<article class="stay"><h3>${esc(s.name)}</h3><p>${esc(s.checkIn)} → ${esc(s.checkOut)}</p>${s.location?`<a href="${mapUrl([s.location])}" target="_blank" rel="noreferrer">地图导航 ↗</a>`:''}</article>`).join('');
 const checklist=data.checklist||[];
 document.querySelector('#checklist-section').hidden=!checklist.length;
 document.querySelector('#checklist').innerHTML=checklist.map(x=>`<div>${esc(typeof x==='string'?x:x.label)}</div>`).join('');
}
fetch('itinerary.json').then(r=>r.ok?r.json():Promise.reject()).then(render).catch(()=>render(window.ITINERARY||fallback));
