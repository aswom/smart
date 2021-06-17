$(document).ready(function(){
   $(".slides").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive:[
{
    breakpoint: 768,
    settings: {
        slidesToShow:2
    }
},
{
    breakpoint: 550,
    settings: {
        slidesToShow:1
    }
}
]
      // centerMode: true,
      //centerPadding:'0px',
     // prevArrow: "<img src='/img/left-arrow-svgrepo-com.svg' width='20%' class='prev' alt='1'> ",
     // nextArrow:"<img src='/img/right-arrow-svgrepo-com.svg'  width='20%' class='next' alt='2'> "
   })
})