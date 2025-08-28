import App from './App.js';
import { registerPartials } from './helpers/registerPartials.js';

document.addEventListener('DOMContentLoaded', () => {
  registerPartials()
  const root = document.getElementById('app');
  const app = new App(root)
  app.render()
})
