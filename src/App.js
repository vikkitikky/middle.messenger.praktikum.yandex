import { mockData, PageNames } from './mockData.js';
import NavBlock from './components/organisms/navBlock/NavBlock.js'

export default class App {
  constructor(root) {
    this.root = root
    this.pageNames = {
      NotFound: 'NotFoundPage',
      SomethingWentWrong: 'SomethingWentWrongPage',
      SignIn: 'SignIn',
      Chats: 'Chats',
      SignUp: 'SignUp',
      Settings: 'Settings',
    }

    window.addEventListener('popstate', () => {
      this.render()
    })
  }

  async navigate(e, path) {
    e.preventDefault()
    history.pushState({}, '', path)
    await this.render()
  }

  getRoute() {
    return location.pathname.replace(/\/$/, '')
  }

  async render() {
    const route = this.getRoute()

    let pageName
    let pageModule

    switch (route) {
      case '':
      case '/':
      case '/sign-in':
        pageModule = await import('./pages/sign/Sign.js')
        pageName = PageNames.SignIn
        break
      case '/sign-up':
        pageModule = await import('./pages/sign/Sign.js')
        pageName = PageNames.SignUp
        break
      case '/settings':
        pageModule = await import('./pages/settings/Settings.js')
        pageName = PageNames.Settings
        break
      case '/chats':
        pageModule = await import('./pages/chats/Chats.js')
        pageName = PageNames.Chats
        break
      case '/broken':
        pageModule = await import('./pages/error/Error.js')
        pageName = PageNames.SomethingWentWrong
        break
      default:
        pageModule = await import('./pages/error/Error.js')
        pageName = PageNames.NotFound
    }

    const page = pageModule.default
    const fragment = this.stringToFragment(page.render(mockData[pageName]))
    this.root.replaceChildren(fragment)

    page.init({ pageName, navigate: this.navigate.bind(this), data: mockData[pageName] })
  }

  stringToFragment(string) {
    const range = document.createRange()
    return range.createContextualFragment(string)
  }

  addNavBlock() {
    const bodyEl = document.querySelector('body')
    const navFragment = this.stringToFragment(NavBlock.render({ links: mockData.Links }))
    bodyEl.appendChild(navFragment)

    NavBlock.init({ data: mockData.Links, navigate: this.navigate.bind(this) })
  }
}
