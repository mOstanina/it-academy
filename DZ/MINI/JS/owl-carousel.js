$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4,
        dots: true,
        responsive:{
            0:{
              items:1
            },
            768:{
                height: 200,
            },
            1280:{
              items:3
            }
          }
    });

});



