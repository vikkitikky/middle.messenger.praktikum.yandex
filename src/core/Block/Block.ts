import Handlebars from 'handlebars'
import { EventBus } from '../EventBus'

type DOMEventHandlers = {
  [K in keyof HTMLElementEventMap]?: (e: HTMLElementEventMap[K]) => void
}
type EventsMap = Record<string, DOMEventHandlers>

export type TBlockProps = Record<string, unknown>
export type TRenderableChild = {
  key: string
  element: HTMLElement | null
  destroy: () => void
}
export type TBlockChildren = Record<string, TRenderableChild | TRenderableChild[]>

type BlockEventMap<GProps> = {
  init: []
  render: []
  mount: []
  update: [prevProps: GProps, nextProps: GProps]
  unmount: []
}

export abstract class Block<
  GProps extends TBlockProps = TBlockProps,
  GChildren extends TBlockChildren = TBlockChildren
> {
  private static id = 0

  private _events: EventsMap = {}
  private _boundEvents: { element: Element; type: string; handler: EventListener }[] = []
  public element: HTMLElement | null = null

  protected props: GProps
  protected children: GChildren
  private readonly eventBus: EventBus<BlockEventMap<GProps>>
  public readonly key: string

  protected constructor(
    props: GProps = {} as GProps,
    children: GChildren = {} as GChildren,
  ) {
    this.eventBus = new EventBus<BlockEventMap<GProps>>()
    this.props = this._makePropsProxy(props)
    this.children = children
    this.key = `block-${this.constructor.name}-${++Block.id}`

    this._registerEvents()
    this.initChildren()
    this.eventBus.emit('init')
  }

  protected componentDidMount() {}
  protected componentDidUpdate(_prevProps: GProps, _nextProps: GProps): boolean {
    return true
  }
  protected componentWillUnmount() {}
  protected initChildren(): void {}

  public abstract render(): DocumentFragment

  public setProps(nextProps: Partial<GProps>) {
    if (!nextProps) return
    Object.assign(this.props, nextProps)
  }

  public setEvents(eventMap: EventsMap) {
    this._removeEventListeners()
    this._events = eventMap
    this._addEventListeners()
  }

  public destroy(): void {
    this._unmount()
  }

  protected compile(template: string, context: object): DocumentFragment {
    const htmlString = Handlebars.compile(template)(context)
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    Object.entries(this.children).forEach(([key, child]) => {
      const stub = doc.body.querySelector(`[data-component="${key}"]`)
      if (!stub) return

      if (Array.isArray(child)) {
        const frag = document.createDocumentFragment()
        child.forEach((c) => c.element && frag.appendChild(c.element))
        stub.replaceWith(frag)
      } else if (child.element) {
        stub.replaceWith(child.element)
      }
    })

    const fragment = document.createDocumentFragment()
    Array.from(doc.body.childNodes).forEach((node) => fragment.appendChild(node))
    return fragment
  }

  private _registerEvents() {
    this.eventBus.on('init', this._init.bind(this))
    this.eventBus.on('render', this._render.bind(this))
    this.eventBus.on('mount', this._mount.bind(this))
    this.eventBus.on('update', this._update.bind(this))
    this.eventBus.on('unmount', this._componentWillUnmount.bind(this))
  }

  private _init() {
    this.eventBus.emit('render')
  }

  private _render() {
    this._removeEventListeners()
    const fragment = this.render()
    const newElement = fragment.firstElementChild as HTMLElement | null
    if (!newElement) {
      throw new Error(`${this.key}: render() result is empty`)
    }

    if (this.element) {
      this.element.replaceWith(newElement)
    }
    this.element = newElement

    this.eventBus.emit('mount')
  }

  private _mount() {
    this._addEventListeners()
    this.componentDidMount()
  }

  private _update(prevProps: GProps, newProps: GProps) {
    if (this.componentDidUpdate(prevProps, newProps)) {
      this.eventBus.emit('render')
    }
  }

  private _componentWillUnmount() {
    this._removeEventListeners()
    this.componentWillUnmount()
    this.eventBus.clear()
  }

  private _unmount() {
    this._removeEventListeners()
    Object.values(this.children ?? {}).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((c) => c.destroy?.())
      } else {
        child.destroy?.()
      }
    })

    this.eventBus.emit('unmount')
    if (this.element?.parentNode) {
      this.element.parentNode.removeChild(this.element)
    }
    this.element = null
  }

  private _makePropsProxy(props: GProps): GProps {
    return new Proxy<GProps>(props, {
      set: (target, prop, value) => {
        if (target[prop as keyof GProps] === value) return true

        const prevProps = structuredClone(target)
        target[prop as keyof GProps] = value
        this.eventBus.emit('update', prevProps, target)
        return true
      },
      deleteProperty: () => {
        throw new Error('Not allowed')
      },
    })
  }

  private _addEventListeners() {
    const eventsMap = this._events ?? {}
    Object.entries(eventsMap).forEach(([selector, events]) => {
      const target = selector === 'root' ? this.element : this.element?.querySelector(selector)
      if (!target) return
      Object.entries(events).forEach(([eventType, handler]) => {
        const boundHandler = handler.bind(this) as EventListener
        target.addEventListener(eventType, boundHandler)
        this._boundEvents.push({ element: target, type: eventType, handler: boundHandler })
      })
    })
  }

  private _removeEventListeners() {
    this._boundEvents.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler)
    })
    this._boundEvents = []
  }
}
