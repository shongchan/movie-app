import { Component } from '../core/heropy.js';
import aboutStore from '../store/about.js';


export default class About extends Component {
  render() {
    const { photo, name, email, github, blog } = aboutStore.state

    this.el.classList.add('container', 'about');
    this.el.innerHTML = /* html */ `
      <div style="background-image: url(${photo})" class="photo"></div>
      <p class="name">${name}</p>
      <p><a href="http://mail.google.com/main/?view=cm&fs=1&to=${email}" target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${blog}" target="_blank">Blog</a></p>
    `;
  }
}