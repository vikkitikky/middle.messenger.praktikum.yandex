import Handlebars from 'handlebars'
import * as Pages from './pages'
import { PageNames } from './pages';
import { mockData } from './mockData.js';

export default class App {
  constructor(root) {
    this.root = root
  }
  getRoute() {
    return location.pathname.replace(/\/$/, '')
  }

  render() {
    const route = this.getRoute()

    let templateName

    switch (route) {
      case '':
      case '/':
      case '/home':
      case '/sign-in':
      case '/sign-up':
        templateName = PageNames.NotFond
        break
      case '/broken':
        templateName = PageNames.SomethingWentWrong
        break
      default:
        templateName = PageNames.NotFond
    }
    const template = Handlebars.compile(Pages[templateName])(mockData[templateName])
    const fragment = this.stringToFragment(template)
    this.root.replaceChildren(fragment)
  }

  stringToFragment(string) {
    const range = document.createRange()
    return range.createContextualFragment(string)
  }
}
