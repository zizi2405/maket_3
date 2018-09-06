+function(){
    
    //menu которое открывается при нажатии кнопки которая для мобильного меню
    // menu 
    var mobButton = document.querySelector('.mob__menu_buttom');
    var mobMenuItem = document.querySelectorAll('.mob__menu-item');
    var mobMenu = document.querySelector('.mob__menu_box');

        mobButton.addEventListener('click', mobMenuDown);

        function mobMenuDown () {
            if(mobMenu.classList.contains('mob__menu_box_active')) {
                mobMenu.classList.remove('mob__menu_box_active');
                    for(i=0; i < mobMenuItem.length; i++ ) {
                        mobMenuItem[i].classList.remove('mob__menu-item-active');
                    }

            }
            else {
                mobMenu.classList.add('mob__menu_box_active');
                for(i=0; i < mobMenuItem.length; i++ ) {
                    mobMenuItem[i].classList.add('mob__menu-item-active');
                   
                }
            }

        }
    //открытие подменю в моб версии

    var menuItem = document.querySelectorAll('.menu-down');

    for(var i=0; i < menuItem.length; i++ ) {
        menuItem[i].addEventListener ('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.nextElementSibling.classList.toggle("mob__hide-menu-active");
        })
    }  

}()




// пыталась сделать класс не получилось((


//class Menu {
//     constructor (menuItem, menuHide, icon) {
//         this.menuItem = document.querySelectorAll(menuItem);
//         this.menuHide = document.querySelectorAll(menuHide);
//         this.icon = document.querySelectorAll(icon);
//         this.menuHideActive = null;
//         this.iconActive = null;
//         console.log(this.icon)

//     }

//     classIconActive(iconActive) {
//        this.iconActive = iconActive;  
//        console.log(this.iconActive) 
//     }

//     classMenuHideActive(menuHideActive){
//         this.menuHideActive = menuHideActive;
//         console.log(this.menuHideActive)
//     }
    
   
//     start() {

//         for(var i=0; i < this.menuItem.length; i++ ) {
//         this.menuItem[i].addEventListener ('click', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
//             console.log(this.nextElementSibling)
//             console.log(this.firstElementChild)
//             console.log(this.menuHideActive)
//             console.log(this.iconActive)

//             this.nextElementSibling.classList.toggle(this.menuHideActive);
//             console.log(this.icon)
//             this.icon.classList.toggle(this.iconActive);
//         })
//     }
                
//     }
// }

// var mobMenu = new Menu(".menu-down", '.mob__hide-menu', '.fa-angle-down');
// mobMenu.classIconActive('mob-menu__icon-active');
// mobMenu.classMenuHideActive("mob__hide-menu-active");


// mobMenu.start();