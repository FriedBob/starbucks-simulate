/*--- USED OPEN-SOURCE LIBRARY ---*/
// Lodash : 함수의 ms단위의 연속실행 제약
// GSAP : js의 애니메이션 처리
// SWIPER : css와 js의 슬라이드 애니메이션 처리
// Iframe Player API : youtube 동영상 첨부 (youtube.js)


const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    // search 검색요소 선택시 동작
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

/*--- badge scroll control ---*/
const badgeEl = document.querySelector('header .badges');

// window = browser window
// Lodash script를 이용하여 fucntion의 ms단위 연속실행 제약
// ._throttle(fucntion(){}, ms)
// GSAP 을 이용한 js 애니메이션 처리
// gasp.to(요소, 지속시간(초), 옵션(객체))

/* opacity속성처럼 숫자값들은 전환효과(css transition, js GASP)를 통해 요소의 전/후 상태를 중간숫자의 값으로
   자연스럽게 만들어 줄 수 있지만, display 속성처럼 값이 숫자가 아닌 속성들은 
   전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환 효과를 적용할 수 없다 */
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // badge hide
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        // badge visible
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

/*--- 메인화면 이미지 페이드인 --*/
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7,  // 몇초마다 실행될것인지
        opacity: 1,
        
    });
});

/*--- SWIPER ---*/
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.promotion .swiper-pagination',    // 페이지 번호 요소 선택자
        clickable: true                         // 시각적 + "제어가능"
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // promotion slide invisible
        promotionEl.classList.add('hide');
    }else{
        // promotion slide visible
        promotionEl.classList.remove('hide');
    }
});