export const url = 'http://api.tvmaze.com/search/shows?q=star%20wars';
fetch(url)
  .then((data) => data.json())
  .then((results) => {
    console.log(results);
  });
