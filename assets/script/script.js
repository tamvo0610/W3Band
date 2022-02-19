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
    if (header.clientHeight === headerHeight) {
        header.style.height='fit-content'
        document.getElementById("nav_menumobile_show").style.backgroundColor='#ccc'
        document.getElementById("nav_menumobile_show").style.color='black'
    }
    else {
        header.style.height= null
        NavDefault()
    } 
}

//--- HEADER SUB
console.log(header.clientWidth)
function check() {
    var test= document.getElementById('sub_mobile_check').checked;
    if (header.clientWidth < 789){
        if (test){
        document.getElementById('sub_mobile').style.display='block'
        } else {
        document.getElementById('sub_mobile').style.display= 'none'
        }
    } else{
        null
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
