import { EPaths, router } from './core'
import { ErrorPage, ChatsPage, SignInPage, SignUpPage, SettingsPage } from './pages'
import { NavBlock } from './components/organisms'

type TPage =
  | SignInPage
  | SignUpPage
  | SettingsPage
  | ChatsPage
  | ErrorPage

export function initApp() {
  const root = document.querySelector('#app')
  if (!root) throw new Error('Root not found')

  const navBlock = new NavBlock()
  root.appendChild(navBlock.element!)

  let currentPage: TPage | null = null

  const renderPage = (path: string) => {
    cleanupCurrentPage()

    if (isChatPage(path)) {
      const currentChatId = getCurrentChatId(path)
      currentPage = new ChatsPage({ currentChatId })
    } else {
      switch (path) {
      case EPaths.SIGN_UP:
        currentPage = new SignUpPage()
        break
      case EPaths.SIGN_IN:
        currentPage = new SignInPage()
        break
      case EPaths.SETTINGS:
        currentPage = new SettingsPage()
        break
      case EPaths.SOMETHING_WRONG:
        currentPage = new ErrorPage({ code: '500', message: 'Something went wrong' })
        break
      default:
        currentPage = new ErrorPage({ code: '404', message: 'Page not found' })
      }
    }

    appendCurrent()
  }

  const isChatPage = (path: string) =>
    path === EPaths.CHATS || path.startsWith(EPaths.CHATS + '/')

  const getCurrentChatId = (path: string) => {
    const hashIndex = path.indexOf('#')
    return hashIndex !== -1 ? path.slice(hashIndex + 1) || undefined : undefined
  }

  const appendCurrent = () => {
    if (!currentPage?.element) throw new Error('Current page does not exist')
    root.appendChild(currentPage.element)
  }

  const cleanupCurrentPage = () => {
    if (!currentPage) return
    currentPage.destroy()
    currentPage.element?.remove()
    currentPage = null
  }

  router.onChange(renderPage)
  router.start()
}
