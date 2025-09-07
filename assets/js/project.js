(function(){
  function qs(name){ const u=new URL(window.location.href); return u.searchParams.get(name); }
  const slug=qs('slug');
  const p=(window.PROJECTS||[]).find(x=>x.slug===slug);
  const titleEl=document.getElementById('proj-title');
  const metaEl=document.getElementById('proj-meta');
  const tagsEl=document.getElementById('proj-tags');
  const bodyEl=document.getElementById('proj-body');
  const linksEl=document.getElementById('proj-links');
  if(!p){ titleEl.textContent="Project not found"; bodyEl.innerHTML="<p class='text-neutral-300'>No project by that slug.</p>"; return; }
  titleEl.textContent=p.title;
  metaEl.innerHTML=p.yolo?`<span class="rounded-full border border-cyan-400/40 px-2.5 py-1 text-xs text-cyan-200/90 bg-cyan-300/5">YOLO${p.yolo.toUpperCase()}</span>`:"";
  tagsEl.innerHTML=(p.tags||[]).map(t=>`<span class="rounded-full border border-cyan-400/40 px-2.5 py-1 text-xs text-cyan-200/90 bg-cyan-300/5">${t}</span>`).join(" ");
  bodyEl.innerHTML=`<p class="text-neutral-300">${p.summary}</p>` + (p.metrics?.length?`<div class="mt-4 flex flex-wrap gap-2">${p.metrics.map(m=>`<span class="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-300">${m.k}: ${m.v}</span>`).join('')}</div>`:"");
  linksEl.innerHTML=p.links?.code?`<a class="underline" target="_blank" href="${p.links.code}">Code</a>`:"";
})();