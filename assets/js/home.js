(function(){
  const projects=(window.PROJECTS||[]).slice(0,3);
  const projEl=document.getElementById('recent-projects');
  if(!projEl) return;
  projEl.innerHTML = projects.map(p => {
    const artTop = p.image ? `<img src="${p.image}" alt="" class="h-36 w-full object-cover">`
                           : `<div class="h-36 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(34,211,238,.2),rgba(167,139,250,.15))] flex items-center justify-center text-5xl">${p.badge||'📷'}</div>`;
    return `
    <article class="rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/70 transition overflow-hidden">
      ${artTop}
      <div class="p-5">
        <div class="flex items-center justify-between gap-3">
          <h3 class="font-semibold text-lg"><a class="hover:underline" href="project.html?slug=${encodeURIComponent(p.slug)}">${p.title}</a></h3>
          ${p.yolo?`<span class="rounded-full border border-cyan-400/40 px-2.5 py-1 text-xs text-cyan-200/90 bg-cyan-300/5">YOLO${p.yolo.toUpperCase()}</span>`:''}
        </div>
        <p class="text-neutral-300 mt-1">${p.summary}</p>
        <div class="mt-3 flex flex-wrap gap-2">${p.tags.map(window.helpers.chip).join('')}</div>
      </div>
    </article>`;
  }).join('');
})();