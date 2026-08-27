(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if(!btn) return;
  var label = document.getElementById('themeLabel');
  var dotIcon = document.getElementById('themeDot');

  var sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.4A9 9 0 1 1 11.6 3a7 7 0 0 0 9.4 9.4Z"/></svg>';

  function sync(){
    var isLight = root.getAttribute('data-theme') === 'light';
    if(label) label.textContent = isLight ? 'Light' : 'Dark';
    if(dotIcon) dotIcon.innerHTML = isLight ? sun : moon;
    btn.setAttribute('aria-pressed', String(isLight));
  }
  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try{ localStorage.setItem('site-theme', next); }catch(e){}
    sync();
  });

  try{
    var saved = localStorage.getItem('site-theme');
    if(saved === 'light' || saved === 'dark'){ root.setAttribute('data-theme', saved); }
  }catch(e){}

  sync();
})();
