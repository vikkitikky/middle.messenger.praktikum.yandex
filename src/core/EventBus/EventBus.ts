type Handler<TArgs extends unknown[]> = (...args: TArgs) => void

export class EventBus<TEvents extends Record<string, unknown[]>> {
  private listeners: {
    [K in keyof TEvents]?: Handler<TEvents[K]>[]
  } = {}

  on<K extends keyof TEvents>(event: K, callback: Handler<TEvents[K]>): void {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event]!.push(callback)
  }

  off<K extends keyof TEvents>(event: K, callback: Handler<TEvents[K]>): void {
    if (!this.listeners[event]) return
    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    )
  }

  emit<K extends keyof TEvents>(event: K, ...args: TEvents[K]): void {
    if (!this.listeners[event]) return
    this.listeners[event]!.forEach((listener) => listener(...args))
  }

  clear<K extends keyof TEvents>(event?: K): void {
    if (event) {
      delete this.listeners[event]
    } else {
      this.listeners = {}
    }
  }
}
