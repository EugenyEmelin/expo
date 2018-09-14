$(document).ready(function() {
  //постраничная прокрутка
  // $('#pagepiling').pagepiling({
  //   menu: null,
  //   direction: 'vertical',
  //   verticalCentered: false,
  //   sectionsColor: [],
  //   anchors: [],
  //   scrollingSpeed: 20,
  //   easing: 'easeInOutCubic',
  //   loopBottom: false,
  //   loopTop: false,
  //   css3: true,
  //   navigation: {
  //     'textColor': '#000',
  //     'bulletsColor': '#fff',
  //     'position': 'right',
  //     'tooltips': ['section1', 'section2', 'section3', 'section4']
  //   },
  //   normalScrollElements: null,
  //   normalScrollElementTouchThreshold: 5,
  //   touchSensitivity: 5,
  //   keyboardScrolling: true,
  //   sectionSelector: '.section',
  //   animateAnchor: false,
  //
  //   //events
  //   onLeave: function(index, nextIndex, direction){},
  //   afterLoad: function(anchorLink, index){},
  //   afterRender: function(){},
  // })

  $.scrollify({
    section: '.section',
    scrollSpeed: 1100,
  })

  //основной слайдер
  new Swiper('.main-slider__container', {
    direction: 'horizontal',
    spaceBetween: 0,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.main-slider__pagination'
    }
  })

  //карусель под слайдером
  let mainCarousel = new Swiper('.main-carousel__container', {
    slidesPerView: 5,
    spaceBetween: 5,
  })
  //календарь событий
  let eventsCarousel = new Swiper('.events-container', {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
      el: '.events-pagination',
      bulletElement: 'div',
      clickable: true,
      bulletClass: 'pagination-bullets',
      bulletActiveClass: 'pagination-bullets-active'
    }
  })
})