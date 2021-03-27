$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 4,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        height: 200,
      },
      1280: {
        items: 3
      }
    }
  });

});

$('.owl-carousel2').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})

