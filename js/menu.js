+function(){
            
    var hideMenu =  document.querySelectorAll('.nav_box li');

    for( var i=0; i <hideMenu.length; i++ ) {
        hideMenu[i].addEventListener('mouseover', menuDown);
        hideMenu[i].addEventListener('mouseout', menuUp);
    }
        function menuDown() {
            if(this.children.length>1) {
            this.children[1].style.opacity = "1";
            }
            else {return false};
        }
        function menuUp() {
            if(this.children.length>1) {
            this.children[1].style.opacity = "0"; 
            }
            else {return false};
        }

}()