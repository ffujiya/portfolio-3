const burger = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.menu__link')

burger.addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
})

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

const swiper = new Swiper('.swiper', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});