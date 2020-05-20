// eslint-disable-next-line import/no-cycle
import { checkMovieData } from './movieSearch';
import { getSearchMovie } from './movieInfo';

const MOVIE_LOADING = document.querySelector('.loading');
// eslint-disable-next-line no-undef,no-unused-vars
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    slideChange() {
      const countAllSlides = mySwiper.slides.length;
      const swiperIndex = mySwiper.realIndex;

      if (countAllSlides - 3 === swiperIndex) {
        const page = Math.ceil(countAllSlides / 10) + 1;

        MOVIE_LOADING.innerHTML = 'Data is loading';
        getSearchMovie(localStorage.getItem('movieTitle'), page)
          .then((data) => checkMovieData(data));
      }
    },
  },
});

export default mySwiper;
