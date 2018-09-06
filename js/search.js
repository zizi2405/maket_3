+function(){

    var  searchIcon = document.querySelector('.nav__search_img'); 
    var  menuBox = document.querySelector('.nav_box'); 
    var searchTextBox = document.querySelector('.nav__search_box');
    var search = document.querySelector('.nav__search');
  
  
    searchIcon.addEventListener('click', headerSearch);
  
      function headerSearch () {
          if(search.classList.contains('search-widtch')) {
              menuBox.classList.remove('nav_box-display'); 
              search.classList.remove('search-widtch');
              searchTextBox.classList.remove('search-widtch');
          }
          else {
              menuBox.classList.add('nav_box-display'); 
              search.classList.add('search-widtch');
              searchTextBox.classList.add('search-widtch');
          }
      }



}();