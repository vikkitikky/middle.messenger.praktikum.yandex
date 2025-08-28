import App from './App.js'
import { registerPartials } from './helpers/registerPartials.js'
import './main.scss'
import { registerHelpers } from './helpers/registerHelper.js'
import { utils } from './utils/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  registerPartials()
  registerHelpers([
    { name: 'default', fn: utils.defaultValue },
  ])

  const root = document.getElementById('app')
  const app = new App(root)
  app.render()
})
