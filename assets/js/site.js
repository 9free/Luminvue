(function(){
  var nav=document.getElementById('nav'),btn=document.getElementById('menuBtn'),links=document.getElementById('navLinks');
  function onScroll(){nav.classList.toggle('scrolled',window.scrollY>20)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function setMenu(open){links.classList.toggle('open',open);nav.classList.toggle('menu-open',open);btn.setAttribute('aria-expanded',open)}
  btn.addEventListener('click',function(){setMenu(!links.classList.contains('open'))});
  links.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

  var hasIO='IntersectionObserver' in window;
  var els=document.querySelectorAll('.reveal');
  if(!hasIO){els.forEach(function(el){el.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el){io.observe(el)});
  }

  // highlight the in-page tab for the section in view
  var tabs=[].slice.call(document.querySelectorAll('.subnav a[href^="#"]'));
  if(tabs.length){
    var secs=tabs.map(function(t){return document.getElementById(t.getAttribute('href').slice(1))});
    var current=null;
    function spy(){
      var idx=-1;
      secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=150)idx=i});
      var t=tabs[idx]||null;
      if(t===current)return;
      if(current)current.classList.remove('active');
      current=t;
      if(t){t.classList.add('active');var w=t.parentNode,a=t.getBoundingClientRect(),b=w.getBoundingClientRect();if(a.left<b.left||a.right>b.right)w.scrollBy({left:a.left-b.left-16,behavior:'smooth'})}
    }
    window.addEventListener('scroll',spy,{passive:true});spy();
  }
})();
