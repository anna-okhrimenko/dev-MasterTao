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

    mobileOnlySlider("#slider-advantages", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    }
});


const btnBox = document.querySelectorAll('.btn-box');
btnBox.forEach(item => {
  item.closest('.col-md-6').classList.add('button-group');
});

document.getElementById('fileInput').onchange = function () {
  document.getElementById('file-name').innerHTML = this.files[0].name;
};