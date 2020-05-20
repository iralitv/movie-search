import { getMovieData, getSearchMovie, getTranslation } from './movieInfo';
// eslint-disable-next-line import/no-cycle
import mySwiper from './Swiper';
import { buildMovieCard } from './tamplateHelper';

const MOVIE_NOTIFICATION = document.querySelector('.notification');
const MOVIE_LOADING = document.querySelector('.loading');

const checkMovieData = (data) => {
  if (data) {
    data.forEach((item) => {
      getMovieData(item.imdbID)
        .then((movieInfo) => mySwiper.appendSlide(buildMovieCard(movieInfo)));
    });
    MOVIE_LOADING.textContent = '';
  } else {
    MOVIE_NOTIFICATION.textContent = `No results for ${localStorage.getItem('movieTitle')}`;
    MOVIE_LOADING.textContent = '';
  }
};

const getMovieByTitle = (title, page = 1) => {
  MOVIE_LOADING.textContent = 'Data is loading';
  getTranslation(title)
    .then((res) => {
      MOVIE_NOTIFICATION.textContent = '';
      if (title !== res.toString()) {
        MOVIE_NOTIFICATION.textContent = `Title was translated from "${title}"`;
      }
      localStorage.setItem('movieTitle', res.toString());


      return getSearchMovie(localStorage.getItem('movieTitle'), page);
    })
    .then((data) => checkMovieData(data));
};

export { checkMovieData, getMovieByTitle };
