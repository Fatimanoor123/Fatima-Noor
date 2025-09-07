(function(){
  const exp=window.EXPERIENCE||[], skills=window.SKILLS||{}, edu=window.EDUCATION||[], langs=window.LANGS||[], s=window.SITE||{};
  document.getElementById('about-role').textContent=s.role||"";
  document.getElementById('about-location').textContent=s.location||"";
  document.getElementById('about-email').href="mailto:"+(s.email||"");
  document.getElementById('about-email').textContent=s.email||"";
  document.getElementById('about-linkedin').href=s.linkedin||"#";
  if(s.github) document.getElementById('about-github').href=s.github;

  const expEl=document.getElementById('exp-list');
  expEl.innerHTML=exp.map(e=>`
    <div class="rounded-2xl border border-white/10 p-6 bg-slate-900/60">
      <div class="flex items-center justify-between"><h3 class="font-semibold">${e.role}</h3><span class="text-sm text-neutral-400">${e.dates}</span></div>
      <div class="text-neutral-300 mt-1">${e.company}</div>
      <ul class="text-neutral-300 text-sm mt-3 space-y-1 list-disc list-inside">${(e.bullets||[]).map(b=>`<li>${b}</li>`).join("")}</ul>
    </div>
  `).join("");

  const skillsEl=document.getElementById('skills-list');
  skillsEl.innerHTML=Object.entries(skills).map(([k,arr])=>`
    <div class="rounded-2xl border border-white/10 p-6 bg-slate-900/60">
      <h3 class="font-semibold">${k}</h3>
      <div class="mt-2 flex flex-wrap gap-2 text-sm text-neutral-300">
        ${arr.map(x=>`<span class="rounded-full border border-cyan-400/40 px-2.5 py-1 text-xs text-cyan-200/90 bg-cyan-300/5">${x}</span>`).join("")}
      </div>
    </div>
  `).join("");

  const eduEl=document.getElementById('edu-list');
  eduEl.innerHTML=edu.map(e=>`
    <div class="rounded-2xl border border-white/10 p-6 bg-slate-900/60">
      <h3 class="font-semibold">${e.degree}</h3>
      <div class="text-neutral-300 mt-1">${e.school}</div>
      <div class="text-neutral-400 text-sm">${e.dates} · ${e.details||""}</div>
    </div>
  `).join("");

  const langEl=document.getElementById('lang-list');
  langEl.innerHTML=(langs||[]).map(l=>`<span class="rounded-full border border-cyan-400/40 px-2.5 py-1 text-xs text-cyan-200/90 bg-cyan-300/5">${l.name}: ${l.level}</span>`).join(" ");
})();