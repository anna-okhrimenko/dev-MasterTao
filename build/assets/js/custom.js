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


const btnBox = document.querySelectorAll('.btn-box');
btnBox.forEach(item => {
  item.closest('.col-md-6').classList.add('button-group');
});

document.getElementById('fileInput').onchange = function () {
  document.getElementById('file-name').innerHTML = this.files[0].name;
};