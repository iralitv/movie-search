const builtHtmlElement = ({ tagName, classList = [], attrs = {} }) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(...classList);
  Object.keys(attrs).forEach((key) => newElement.setAttribute(key, attrs[key]));
  return newElement;
};

const buildMovieCard = (movie) => {
  const movieCard = builtHtmlElement({
    tagName: 'div',
    classList: ['swiper-slide'],
  });

  const noDataValue = 'N/A';
  const defaultPosterUrl = 'https://media.comicbook.com/files/img/default-movie.png';
  let { Poster } = movie;
  const {
    Title,
    imdbID,
    Year,
    imdbRating,
  } = movie;

  Poster = Poster !== noDataValue ? Poster : defaultPosterUrl;

  movieCard.innerHTML = `
    <div class="movie">
      <img class="movie__poster" src="${Poster}" alt="">
      <a href="https://www.imdb.com/title/${imdbID}/" target="_blank" class="movie__title">${Title}</a>
      <p class="movie__year">${Year}</p>
      <p class="movie__rating">${imdbRating}</p>
    </div>
  `;
  return movieCard;
};

module.exports = {
  builtHtmlElement,
  buildMovieCard,
};


