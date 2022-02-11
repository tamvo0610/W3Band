 // ---Modal MODAL
function OpenModal(){  // OpenModal
    document.getElementById("js_modal").style.display='flex' 
}
function CloseModal(){ // CloseModal
    document.getElementById("js_modal").style.display='none'
}
 // ---HEADER MOBILE
function NavDefault(){
    document.getElementById("nav_menumobile_show").style.backgroundColor= null
    document.getElementById("nav_menumobile_show").style.color='white'
}
var header = document.getElementById('header')
var headerHeight = header.clientHeight;
function NavMobileMenu(){
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height='fit-content'
        document.getElementById("nav_menumobile_show").style.backgroundColor='#ccc'
        document.getElementById("nav_menumobile_show").style.color='black'
    }
    else {
        header.style.height= null
        NavDefault()
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
            NavDefault()
        }
         else{
            event.preventDefault;
            NavDefault()
        }
    }
}