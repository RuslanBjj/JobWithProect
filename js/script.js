window.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
	
function hideTabContent () {
    tabsContent.forEach((item)=>{
item.style.display="none";
    });
    tabs.forEach((item)=>{
item.classList.remove('tabheader__item_active');
    });
}
function showTabContent (i){
    tabsContent[i].style.display="block";
    tabs[i].classList.add('tabheader__item_active');
}
hideTabContent ();
showTabContent(0);
tabsParent.addEventListener('click',(event)=>{
const target=event.target;
if(target&&target.classList.contains('tabheader__item')){
    tabs.forEach((item,i)=>{
if(target==item){
    hideTabContent ();
    showTabContent(i);
}
    });
}
});
// // ------------------------------------------------------------------
// const finishDate = '2023-01-27';
// function getRaznizaTime (vrema) {
//     const itogTime = Date.parse(vrema) - Date.parse(new Date());
//         const getDay = Math.floor (itogTime/(1000*60*60*24) );
//         const getHour = Math.floor (itogTime/(1000*60*60)%24);
//         const getMinute = Math.floor (itogTime/(1000*60)%60);
//         const getSecond = (Math.floor (itogTime/1000) %60);
//         return {
//             'total':itogTime,
//             'dni':getDay,
//             'chasi':getHour,
//             'minyti':getMinute,
//             'sekyndi':getSecond
//         };
// }
// getRaznizaTime(finishDate);

// function setTime(selector,andTime) {
// const timer = document.querySelector(selector);

// const day = timer.querySelector('#days');
// const hour = timer.querySelector('#hours');
// const minute = timer.querySelector('#minutes');
// const second = timer.querySelector('#seconds');
// timeInterval = setInterval(updateClock,1000);

// function updateClock(){
//     const itogTime = getRaznizaTime(finishDate);
// day.innerHTML = itogTime.dni;
// hour.innerHTML = itogTime.chasi;
// minute.innerHTML = itogTime.minyti;
// second.innerHTML = itogTime.sekyndi ;
// }


// }
// setTime('.timer',finishDate);


const finishDate = "2023-08-26";

function getRaznizaTime ( vrema) {
    const t = Date.parse(vrema) - Date.parse(new Date());
   const day = Math.floor(t/(1000*60*60*24));
   const hour = Math.floor(t/(1000*60*60)%24);
   const minute = Math.floor(t/(1000*60)%60);
   const second = Math.floor((t/1000)%60);

   return {
'total':t,
'day':day,
'hour':hour,
'minute':minute,
'second':second

   }; }
   function getZero(num) {
    if (num >= 0 && num <10) {
        return `0${num}`;
    } else  {
        return num;}
   }
   function setTime (selector,endTime){
    const timer = document.querySelector(selector);
    const dayy = timer.querySelector('#days');
    const hourr = timer.querySelector('#hours');
    const minutee = timer.querySelector('#minutes');
    const secondd = timer.querySelector('#seconds');
    updateClock();
    const interval = setInterval(updateClock,1000);
    function updateClock(){
        const togo = getRaznizaTime(endTime);
        dayy.innerHTML = getZero (togo.day);
        hourr.innerHTML=togo.hour;
        minutee.innerHTML=togo.minute;
        secondd.innerHTML=togo.second;
        if (togo.total <=0) {
            clearInterval(interval);
        }
    }
   }
  
   
setTime('.timer',finishDate); 
        //   ------------------------------------------------------

        const callWhithUs = document.querySelectorAll('[data-mod]');
        const modalWind = document.querySelector('.modal');
        const modalClose = document.querySelector('[data-close]');
        // --------------------------------------------------------------
 function closeOkno () {
            modalWind.style.display="none";
            document.body.style.overflow="";
        }
function showOkno (){
    modalWind.style.display="block";
    document.body.style.overflow="hidden";
}
 callWhithUs.forEach((item)=>{
            item.addEventListener('click', ()=>{
            showOkno();
});
        });
modalClose.addEventListener('click',()=>{ 
    closeOkno();   });
 document.addEventListener('keydown',(e)=>{
        if (e.code==="Escape") {
    closeOkno();
}    
        });

      
        // -------------------------------------------------------------
class Karta {
    constructor(img,h1,p,price,parentSelector,...res) {
            this.img = img;
            this.h1=h1;
            this.p=p;
            this.price=price;
            this.parent = document.querySelector(parentSelector);
            this.clas=res;
    }
    plusKart(){
            const element = document.createElement('div');
            if(this.clas.length===0){
                element.classList.add('menu__item');
            } else {   this.clas.forEach(item=>{
                element.classList.add(item);
                            });}
         
            element.innerHTML = ` <div>
        <img src=${this.img} alt="vegy">
        <h3 class="menu__item-subtitle">${this.h1}</h3>
        <div class="menu__item-descr">${this.p}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>`;
        this.parent.append(element);
    }
}
 new Karta (
    "img/tabs/vegy.jpg",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    '395',
    '.menu .container',
    
).plusKart();
new Karta (
    "img/tabs/elite.jpg",
    'Меню "Премиум"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    '780',
    '.menu .container',
   
).plusKart();
new Karta (
    "img/tabs/post.jpg",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    '410',
    '.menu .container',
    
).plusKart();
 
        // ----------------------------------------------------------------
const forms = document.querySelectorAll('form');
forms.forEach(item=>{
postData(item);
});

function postData(form) {
    form.addEventListener('submit',(e)=>{
            e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST','js/server.php');
        request.setRequestHeader('Content-type', 'application/json');

        const formaData = new FormData(form);
         const object = {};
         formaData.forEach(function(key,val){
            object[val]=key;
         });
 const json = JSON.stringify(object);

        request.send(json);
      
       request.addEventListener('load',()=>{
if(request.status === 200) { console.log(request.response);}
       });
    });
}


// ------------------------------------------------------------        
});
// ----------------------------------------------


