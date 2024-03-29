new WOW().init();

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

  $('.multiple-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});


const btnBox = document.querySelectorAll('.btn-box');
btnBox.forEach(item => {
  item.closest('.col-md-6').classList.add('button-group');
});

document.getElementById('fileInput').onchange = function () {
  document.getElementById('file-name').innerHTML = this.files[0].name;
};

//анимация заголовков//

const elements = document.querySelectorAll('.animate-title');
elements.forEach((element) => {
  element.classList.add('animate__animated', 'wow');
  if (element.classList.contains('template-title-left')) {
    element.classList.add('animate__fadeInTopLeft');
  } else {
    element.classList.add('animate__fadeInUp');
  }
});

//переход по ссылке в хедере на секцию//

const navLinks = document.querySelectorAll('.nav-link[data-goto]');
if (navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", onNavLinkClick);
  });
  function onNavLinkClick(e) {
    const navLink = e.target;
    const dataGoto = navLink.dataset.goto;
    if (dataGoto && document.querySelectorAll(dataGoto)) {
      const gotoBlock = document.querySelector(dataGoto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}


const media = {
  queryList: {
    mobile: window.matchMedia('(min-width: 0px) and (max-width: 768px)'),
    tablet: window.matchMedia('(min-width: 768px) and (max-width: 992px)'),
    desktop: window.matchMedia('(min-width: 992px)'),
  },
  queryIf(func, type) {
    if (this.queryList[type].matches) func();
  },
  query(type, func) {
    this.queryIf(func, type);
    this.queryList[type].addEventListener('change', () => this.queryIf(func, type));
  },
};

const removeBlock = document.querySelectorAll('.block-remove_responsiv')
removeBlock.forEach((element) => {
  media.query('mobile', () => element.classList.add('d-none'));
  media.query('tablet', () => element.classList.add('d-none'));
  media.query('desktop', () => element.classList.remove('d-none'));
  
});

const installAccordion = function() {
  const acordion = document.querySelectorAll('.acordion-title');
  acordion.forEach(function (title) {
      title.onclick = function() {
          title.closest('.acordion-item').classList.toggle('active');
      }
  });
}
installAccordion()


  

