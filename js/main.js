// Can also be used with $(document).ready()
new Swiper('.image-slider',
   {
      //arrow
      navigation:
      {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      // navigation
      pagination: {
         el: '.swiper-pagination',
         //bulleti
         clickable: true,
         //dinamik bullet
         dynamicBullets: true,
         //castom bullet
         renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
         },
      },
      autoHeight: true,
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      slidesPerColumn:1,
      //centeredSlides:true,
      loop: false,
      freeMode: true,
      //direction: 'horisontal',
      //effect: 'fade',
      //fadeEffect:{
      //   crossfade:true
      //},
});



//$(document).ready(function(){
//   $('.slider').slick({
//     arrows:true,
//		dots:true,
//		slidesToShow:3,
//		//autoplay:true,
//		//speed:1000,
//		//autoplaySpeed:800,
//      responsive:[
//{
//    breakpoint: 768,
//    settings: {
//        slidesToShow:2
//    }
//},
//{
//    breakpoint: 550,
//    settings: {
//        slidesToShow:1
//    }
//}
//]
//      // centerMode: true,
//      //centerPadding:'0px',
//     // prevArrow: "<img src='/img/left-arrow-svgrepo-com.svg' width='20%' class='prev' alt='1'> ",
//     // nextArrow:"<img src='/img/right-arrow-svgrepo-com.svg'  width='20%' class='next' alt='2'> "
//   })
//})