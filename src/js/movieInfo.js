function memoize(method) {
  const cache = {};

  return async function memoizedFunc(...rest) {
    const args = JSON.stringify(rest);
    cache[args] = cache[args] || method.apply(this, rest);

    return cache[args];
  };
}

const getSearchMovie = memoize(async (movieTitle = 'dream', page) => {
  try {
    const API_KEY = '4c9a6917';
    const url = `https://www.omdbapi.com/?s=${movieTitle}&page=${page}&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.Search;
  } catch (e) {
    return e;
  }
});

const getMovieData = memoize(async (imdbID) => {
  try {
    const API_KEY = '4c9a6917';
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    return e;
  }
});

const getTranslation = memoize(async (ruWord) => {
  try {
    const API_KEY = 'trnsl.1.1.20200424T060744Z.2252b23703addec2.e0bbc25dbcd8eb6b4f823d9a15c8c99ee6e03aeb';
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${ruWord}&lang=ru-en`;
    const res = await fetch(url);
    const data = await res.json();

    return data.text;
  } catch (e) {
    return e;
  }
});

export { getSearchMovie, getMovieData, getTranslation };
