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
    section: ".section",
    sectionName: "section-name",
    interstitialSection: "bottom-scroll",
    // easing: "easeOutCubic",
    scrollSpeed: 1000,
    offset: 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: false,
    // overflowScroll: true,
    updateHash: true,
    touchScroll: true,
  })

  //основной слайдер
  let mainSlider = new Swiper('.main-slider__container', {
    direction: 'horizontal',
    spaceBetween: 0,
    noSwipingSelector: '#main-slider__tablet, .tablet-display',
    fadeEffect: {
      crossFade: true
    },
  })
  //слайдер на дисплее планшета
  let tabletSlider = new Swiper('.tablet-display', {
    direction: 'horizontal',
    spaceBetween: 0,
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
      bulletClass: 'pagination-bullets',
      bulletActiveClass: 'pagination-bullets-active'
    },

  })

  //карусель под слайдером
  let mainCarousel = new Swiper('.main-carousel__container', {
    slidesPerView: 5,
    spaceBetween: 5,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: -30,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },

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