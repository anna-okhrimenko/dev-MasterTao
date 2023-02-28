$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        appendArrows: $('.slider-arrows'),
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false
              }
            }
        ]
    })
});