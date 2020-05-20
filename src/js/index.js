import '../sass/style.scss';
import mySwiper from './Swiper';
import { getMovieByTitle } from './movieSearch';

const SEARCH_BTN = document.querySelector('.search__submit');
const SEARCH_FIELD = document.querySelector('.search__input');

getMovieByTitle('cow');

const searchMovie = (e) => {
  e.preventDefault();
  localStorage.setItem('movieTitle', SEARCH_FIELD.value || 'cow');
  mySwiper.removeAllSlides();

  getMovieByTitle(localStorage.getItem('movieTitle'));
};

SEARCH_BTN.addEventListener('click', (e) => searchMovie(e));
