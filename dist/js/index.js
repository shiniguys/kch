// lazysizes

const body = document.getElementsByTagName('BODY')[0],
      header = body.querySelector('.header');


if (header){
  const burger = header.querySelector('.header__burger-btn'),
        navigation = document.querySelector('.navigation');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('aside_visible');
  }) 
  
}


$(".card2__button").click(function(e) {
  e.preventDefault();
  $(".card2__list").toggleClass('active');
  $(".card2__button").toggleClass('active');
})


document.addEventListener('lazyloaded', function(e) {
    var el = e.target;

    if (!el.dataset.bg) {
        el.parentNode.parentNode.classList.add('is-loaded');
    }
});

document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        if (bg == "css") {
            e.target.classList.add("is-load");
        } else {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    }
});

