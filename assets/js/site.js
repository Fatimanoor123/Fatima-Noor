(function(){
  const s=window.SITE||{name:"Your Name",email:"you@example.com",linkedin:"#",github:"#"};
  const header=`
<header class="sticky top-0 z-30 bg-slate-950/70 backdrop-blur border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    <a href="index.html" class="font-semibold tracking-tight text-lg">${s.name}<span class="text-cyan-300"> · CV/AI</span></a>
    <nav class="hidden sm:flex items-center gap-6 text-sm">
      <a href="projects.html" class="hover:text-white text-neutral-300">Projects</a>
      <a href="services.html" class="hover:text-white text-neutral-300">Services</a>
      <a href="about.html" class="hover:text-white text-neutral-300">About</a>
      <a href="contact.html" class="hover:text-white text-neutral-300">Contact</a>
      <a href="assets/resume.pdf" class="hover:text-white text-neutral-300" target="_blank">Resume</a>
    </nav>
    <a href="contact.html" class="inline-flex items-center gap-2 rounded-2xl px-3.5 py-2 btn-primary text-sm font-medium hover:opacity-90">Get a quote →</a>
  </div>
</header>`;
  const footer=`
<footer class="border-t border-white/10 mt-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex items-center justify-between">
    <div>© ${new Date().getFullYear()} ${s.name}. All rights reserved.</div>
    <div class="flex items-center gap-4">
      ${s.github?`<a class="underline" href="${s.github}" target="_blank">GitHub</a>`:""}
      <a class="underline" href="${s.linkedin}" target="_blank">LinkedIn</a>
      <a class="underline" href="mailto:${s.email}">Email</a>
    </div>
  </div>
</footer>`;
  const he=document.getElementById("site-header"),fe=document.getElementById("site-footer");
  if(he) he.innerHTML=header;
  if(fe) fe.innerHTML=footer;
})();