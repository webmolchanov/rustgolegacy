// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ========================================================================

// IBG
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
// ========================================================================


// hamburger menu

// // document.querySelector('.menu-icon-wrapper').onclick = function(){
// //   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// // }

// $(document).ready(function(){
//   $('.menu-icon-wrapper').click(function(event){
//     $('.menu__list').slideToggle();
//     $('body').toggleClass('lock');
//   });
  
// });

// ========================================================================
$(function(){
$('.about__items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});