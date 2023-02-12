import $ from 'jquery'
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination, Autoplay, Thumbs])
// Paysys slider
$(() => {
  const [paginationElem] = $('.paysys__pagination')
  sliderGen('.paysys__slider.swiper', optionsPaysys(paginationElem))
})

const sliderGen = (block, option) => new Swiper(block, option)

const optionsPaysys = (pagination) => ({
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  pagination: {
    el: pagination,
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    // when window width is >= 640px
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    994: {
      slidesPerView: 3.5,
    },
    1100: {
      slidesPerView: 4,
    },
    1439: {
      slidesPerView: 6,
    },
  },
})
const optionsPosition = (prev, next) => ({
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: next || null,
    prevEl: prev || null,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    994: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})
