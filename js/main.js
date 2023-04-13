/* main */
new Swiper('.main-content .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});