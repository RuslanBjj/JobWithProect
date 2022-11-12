window.addEventListener('DOMContentLoaded', () => {
const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll ('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');
// ------------------------------------------------------------------
function hideTabContent (item){
tabsContent.forEach((item)=>{
item.style.display = "none";
});
tabs.forEach(item => {
item.classList.remove('tabheader__item_active');
});
}
// -------------------------------------------------------------
function showTabContent(i=0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add('tabheader__item_active');
}
    hideTabContent();
    showTabContent();
    // 
    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
     if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item,i)=>{
 if(item==target) {
    hideTabContent();
    showTabContent(i);
 }
        });
     }
    });
    // -------------------------------------------------------------
    const triger = document.querySelector('.btn_white ');
    const modalokno = document.querySelector('.modal');
    const modalclose = document.querySelector('.modal__close');
    modalclose.addEventListener('click',()=>{
        modalokno.style.display = "none";
    });
    triger.addEventListener('click',()=> {
        modalokno.style.display = "block";
    }) ; 
// ---------------------------------------------------------------------

// ----------------------------------------------------

const finishDate = '2022-12-13';
function getTimeOstalos(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t/(1000*60*60*24));
    const hours = Math.floor((t/(1000*60*60)) % 24);
    const minutes = Math.floor((t/(1000*60))%60);
    const seconds = Math.floor((t/1000)%60);
    return {
      'totalSec':t,
      'days': days,
      'hours': hours,
      'minutes' : minutes,
      'seconds': seconds };
    }
function setClock(seceltor,endtime){
   const timer = document.querySelector(seceltor),
   days = timer.querySelector('#days'),
   hours = timer.querySelector('#hours'),
   minutes = timer.querySelector('#minutes'),
   seconds = timer.querySelector('#seconds'),
   timeInterval = setInterval(upDateClock,1000);
   

function upDateClock () {
    const n = getTimeOstalos(endtime);
    days.innerHTML = n.days;
    hours.innerHTML = n.hours;
    minutes.innerHTML = n.minutes;
    seconds.innerHTML = n.seconds;
    if(t.total <= 0) { clearInterval(timeInterval);}
}
}
setClock('.timer',finishDate);
    });