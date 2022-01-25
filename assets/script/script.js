 // ---TICKET MODAL
 const modal = document.querySelector('.js-modal')
 function showBuyTicket(){
     modal.classList.add('open')
 }
 function hideBuyTicket(){
     modal.classList.remove('open')
 }
 // SHOW
 const buyTickets = document.querySelectorAll('.js-buy-tickets')
 for (const buyTicket of buyTickets){
     buyTicket.addEventListener('click',showBuyTicket)
 }
 // Hide
 const hideTickets = document.querySelectorAll('.js-close-modal')
 for (const hideTicket of hideTickets){
     hideTicket.addEventListener('click',hideBuyTicket)
 }
 // ---HEADER MOBILE
 var header = document.getElementById('header')
 var mobileMenu = document.getElementById('js-mobile-menu')
 var headerHeight = header.clientHeight;
 mobileMenu.onclick = function() {
     var isClose = header.clientHeight === headerHeight;
     if (isClose) {
         header.style.height='fit-content'
     }
     else {
         header.style.height= null
     }
 }
 // ĐÓNG MỞ MENU
 var menuItems = document.querySelectorAll('.header-main li a[href*="#"')
 for (var i = 0; i < menuItems.length; i++){
     var menuItem = menuItems[i];
     menuItem.onclick = function(event){
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('header-sub');
         if (!isParentMenu){
            header.style.height = null;
         }
         else{
             event.preventDefault;
         }
     }
 }