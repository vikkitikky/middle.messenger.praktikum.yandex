import App from './App.js'
import { registerPartials } from './helpers/registerPartials.js'
import './assets/styles/main.scss'
import { registerHelpers } from './helpers/registerHelper.js'

document.addEventListener('DOMContentLoaded', () => {
  registerPartials()
  registerHelpers()

  const root = document.getElementById('app')
  const app = new App(root)
  app.render()
  app.addNavBlock()
})
