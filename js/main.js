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

// close btn
const closeBtn = document.querySelector(".close");
const navEl = document.querySelector(".m-nav");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", function(){
  navEl.classList.remove("none");
});
closeBtn.addEventListener("click", function(){
  navEl.classList.add("none");
});
