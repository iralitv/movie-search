const templates = require('../js/tamplateHelper');

it('should be create new div with id', () => {
  const newDOMElement = templates.builtHtmlElement(
    {
      tagName: 'div',
      classList: ['div'],
      attrs: { id: 'div-id' },
    },
  );

  expect(newDOMElement.id).toBe('div-id');
});

describe('---should create a movie card---', () => {
  const movie = {
    Poster: 'https://media.comicbook.com/files/img/default-movie.png',
    Title: 'Room',
    imdbID: '1',
    Year: '1997',
    imdbRating: '8.6',
  };
  const movieCard = templates.buildMovieCard(movie);

  it('creating of a movie container', () => {
    expect(movieCard.children[0].classList[0]).toBe('movie');
  });

  it('correct src of movie poster', () => {
    expect(movieCard.children[0].children[0].src).toBe(movie.Poster);
  });

  it('correct text of movie title', () => {
    expect(movieCard.children[0].children[1].textContent).toBe(movie.Title);
  });
})
