
// делала не сама, нашла на форуме каком то, под себя немножко сделала.. но первый работает норм, а при запуске второго я передаю не 4 параметра, а 2 и не работает.....
class Slider {
    // Конструктор класс для инициализаций своиств
    constructor(itemImg, itemPage, itemText, itemBtn){
        this.itemImg = document.querySelectorAll(itemImg);
        this.itemPage = document.querySelectorAll(itemPage);
        this.itemText = document.querySelectorAll(itemText);
        this.itemBtn = document.querySelectorAll(itemBtn);
        this.index = 0;
        this.interval = 5000;
        this.activeImg = null;
        this.activePage = null;
        this.activeText = null;
        this.img = null;
        this.page = null;
        this.text = null;
    }
    // Функция Обертка для изменения класса у обьектов
    inits(obj, style, index){
        obj[index].className = style;
    }
    // Функция задания класс активного для картинок
    classActiveImg(activeImg){
        this.activeImg = activeImg;
    }
    // Функция задания класс активного для кнопок снизу
    classActivePage(activePage){
        this.activePage = activePage;
    }

    classActiveText(activeText) {
        this.activeText = activeText;
    }

    classImg(img){
        this.img = img;
    }

    classPage(page){
        this.page = page;
    }

    classText(text){
        this.text = text;
    }
    // Функция смены время интервала
    mySetInterval(interval){
        this.interval = interval;
    }
    // Функция проверка кнопок нажатия
    nextBtn(e, index, size){
        if(e.dataset.target === "prev"){
            --index;
            if(index < 0)
                index = size-1;
        }else if(e.dataset.target === "next"){
            ++index;
            if(index > size-1)
                index = 0;
        }else {
            index = parseInt(e.dataset.target);
        }
        return index;
    }
    // Функция запуска Слайдера
    start(){
        // Переменные нужны для получение по ссылке обьекта Slider == this
        var inits = this.inits;
        var itemImg = this.itemImg;
        var itemText = this.itemText;
        var itemBtn = this.itemBtn;
        var index = this.index;
        var itemPage = this.itemPage;
        var nextBtn = this.nextBtn;
        var interval = this.interval;
        var activeImg = this.activeImg;
        var activePage = this.activePage;
        var activeText = this.activeText;
        var img = this.img;
        var page = this.page;
        var text = this.text;
        
        // Функция обертка для setInterval
        function move(){
            return window.setInterval(function(){
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                inits(itemText, text, index);
                ++index;
                if(index > itemImg.length-1)
                    index = 0;
                inits(itemImg,  img + " " + activeImg, index);
                inits(itemPage, page + " "  + activePage, index);
                inits(itemText, text + " "  + activeText, index);

            }, interval);
        }
        // Переменная для отмены setInterval
        var intervalMove = move();
        /* ===== События Click ===== */
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("click", function(e){
                e.stopPropagation();
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                inits(itemText, text, index);
                index = nextBtn(this, index);
                inits(itemImg, img + " " +  activeImg, index);
                inits(itemPage, page + " " + activePage, index);
                inits(itemText, text + " "  + activeText, index);
            });

        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                inits(itemImg, img, index);
                inits(itemPage, page, index);
                inits(itemText, text, index);
                index = nextBtn(this, index, itemImg.length);
                inits(itemImg, img + " "  + activeImg, index);
                inits(itemPage, page + " " + activePage, index);
                inits(itemText, text + " "  + activeText, index);
            });
        /* ===== События Click ===== */

        /* ===== События Mouseenter & Mouseout ===== */
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("mouseover", function(){
                clearInterval(intervalMove);
            });
        for(var i = 0; i < this.itemPage.length; i++)
            this.itemPage[i].addEventListener("mouseout", function(){
                intervalMove = move();
            });
        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("mouseover", function(){
               clearInterval(intervalMove);
            });
        for(var i = 0; i < this.itemBtn.length; i++)
            this.itemBtn[i].addEventListener("mouseout", function(){
                intervalMove = move();
            });
        /* ===== События Mouseenter & Mouseout ===== */
    }
}/* ===== Конец класса SLider ===== */

// Конструктор принемает 3 параметра классы Картинок, Кнопок снизу и Боковых кнопок
var slider = new Slider(".header__img", ".header__dots", ".header__text-box");
// по умолчанию в конструкторе 5секунд можна задать другое время
slider.mySetInterval(3000);
// методы для задания активного класса для картинок и кнопок снизу Обезательнно
slider.classImg("header__img");
slider.classPage("header__dots");
slider.classText("header__text-box");
slider.classActiveImg("opacity");
slider.classActivePage("dots_active");
slider.classActiveText("opacity");
// метод для запуска Обьекта slider
slider.start();
var sliderBest = new Slider(".best_slider-img", ".best__slider_dots");

slider.classImg("best_slider-img");
slider.classPage("best__slider_dots");
slider.classActiveImg("opacity");
slider.classActivePage("dots_active");

sliderBest.start();
