import { Component } from '../core/heropy.js';
import movieStore from '../store/movie.js';
import MovieItem from './MovieItem.js';


export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe('movies', () => {
      this.render();
    });
    movieStore.subscribe('loading', () => {
      this.render();
    });
    movieStore.subscribe('message', () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
      ${movieStore.state.message
      ? `<div class='message'>${movieStore.state.message}</div>`
      : '<div class="movies"></div>'}
      <div class='the-loader hide'></div>
    `;

    const moviesEl = this.el.querySelector('.movies');
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie// movie: movie 생략(속성과 데이터의 이름이 같은 경우)
      }).el
      )
    );

    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading ? loaderEl.classList.remove('hide') : loaderEl.classList.add('hide');
  }
}