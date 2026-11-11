const menuToggle=document.getElementById('menuToggle');
const navigation=document.getElementById('navigation');
menuToggle.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const scrollLine=document.getElementById('scrollLine');
function updateScroll(){const max=document.documentElement.scrollHeight-window.innerHeight;scrollLine.style.width=(max>0?window.scrollY/max*100:0)+'%';}
window.addEventListener('scroll',updateScroll,{passive:true});updateScroll();
