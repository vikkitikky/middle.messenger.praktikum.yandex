export enum EPaths {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SETTINGS = '/settings',
  CHATS = '/chats',
  SOMETHING_WRONG = '/something-wrong',
  NOT_FOUND = '/not-found',
}

type Listener = (path: string) => void

class Router {
  private static _instance: Router | null = null
  private listeners: Listener[] = []

  private constructor() {}

  public static getInstance(): Router {
    if (!this._instance) {
      this._instance = new Router()
    }
    return this._instance
  }

  public go(path: string) {
    window.history.pushState({}, '', path)
    this._notify(path)
  }

  public buildPath(base: EPaths, segment?: string): string {
    return segment ? `${base}/${segment}` : base
  }

  public start() {
    window.addEventListener('popstate', () => {
      this._notify(window.location.pathname + window.location.hash)
    })
    this._notify(window.location.pathname + window.location.hash)
  }

  public onChange(cb: Listener) {
    this.listeners.push(cb)
  }

  private _notify(path: string) {
    this.listeners.forEach((cb) => cb(path))
  }
}

export const router = Router.getInstance()
