+function(){
     //карусель которая внизу(где ревью); если сжимать экран то аддаптивности нет, надо перегрузить страницу, тогда все будет...

     var reviesViev = document.querySelector('.reviews .row'); // ширина видимой части карусели
     var reviesDots = document.querySelectorAll('.reviews__slider_dots');
     var reviesButton = document.querySelectorAll('.reviews__button');// кнопки вперед - назад
     var reviesBox = document.querySelector('.reviews__box');  // блок карусели
     var reviesItem = document.querySelectorAll('.reviews__item');
     var width = reviesViev.offsetWidth; //ширина слайдера
     var index = 0;
     var widthIten = reviesItem[0].offsetWidth // ширина одного блока (item)
     var sumWidth = (width) * (reviesItem.length/2); //длинна блока
     reviesBox.style.width = sumWidth + "px"; //добавляем ширину в css
 
   function clickButtons () {
    for(i=0; i <reviesButton.length; i++ ) {
         reviesButton[i].addEventListener('click', shift);
     }
         function shift(e){
             if(this.dataset.target ==='next'){
                 index -= width;
                     if(index < (width - sumWidth )){
                         index = (width - sumWidth );
                     }
                     else {
                         this.style.display = '';
                         reviesBox.style.marginLeft = index + "px"; 
                     };
             }
             else if (this.dataset.target ==='prev'){
                 index+=width
                 if(index > 0) {
                     index = 0;
           
                 reviesBox.style.marginLeft = index + "px";    
                 }
                 else {
                     reviesBox.style.marginLeft = index + "px"
                 }
             }
            
         }
         return index;
     }
     clickButtons();
 
     function clickDots () {
         for(i=0; i <reviesDots.length; i++ ) {
             reviesDots[i].addEventListener('click', shiftDots);
             reviesDots[i].classList.remove('active-dots');
         }
 
             function shiftDots (e) {
                 for(i=0; i < reviesDots.length; i++ ) {
                     reviesDots[i].classList.remove('dots_active');
                 }
                 var num = this.dataset.target;
                 this.classList.add('dots_active');
   
                 index = - (width * num);
                 reviesBox.style.marginLeft = index + "px";
                
             }
             return index;
     }
     clickDots()
 
}()