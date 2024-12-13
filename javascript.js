// Меню бургер для ПК-версии header
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if(headerBurger) {
   headerBurger.addEventListener('click', function(e) {
      headerMenu.classList.toggle('activeOnePc');
      headerBurger.classList.toggle('activeOnePc');
      document.body.classList.toggle('lock')
   })
}
// Прокрутка в меню бургер
const headerLinks = document.querySelectorAll('.header__menuLink[data-header]');
if(headerLinks.length > 0) {
   headerLinks.forEach(headerLink => {
      headerLink.addEventListener('click', oneHeaderLinlClick);
   })

   function oneHeaderLinlClick(e) {
      const headerLink = e.target;
      if(headerLink.dataset.header && document.querySelector(headerLink.dataset.header)) {
         const headerBlock = document.querySelector(headerLink.dataset.header);
         const headerBlockValue = headerBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__nav').offsetHeight;

         if(headerBurger.classList.contains('activeOnePc')) {
            headerMenu.classList.remove('activeOnePc');
            headerBurger.classList.remove('activeOnePc');
            document.body.classList.remove('lock')
         }

         window.scrollTo({
            top: headerBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      };
   };
};

//Определение устройства пользователя 
const isMobile = {
   Android: function () {
     return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
     return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
     return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
     return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
     return (
       isMobile.Android() ||
       isMobile.BlackBerry() ||
       isMobile.iOS() ||
       isMobile.Opera() ||
       isMobile.Windows()
     );
   },
 };

if(isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}