import { Block, router, TBlockProps, TRenderableChild } from '../../../core'

type ILinkProps = TBlockProps & {
  id: string
  path: string
  className?: string
  onClick?: () => void
}

type TLinkChildren = {
  content: TRenderableChild
}

export class Link extends Block<ILinkProps, TLinkChildren> {
  constructor(props: ILinkProps, children: TLinkChildren) {
    super(props, children)
  }

  protected componentDidMount() {
    this.setEvents({
      root: {
        click: this._handleClick,
      },
    })
  }

  private _handleClick(e: MouseEvent) {
    e.preventDefault()
    this.props.onClick?.()
    router.go(this.props.path)
  }

  render() {
    const template = `
      <a id="{{id}}" href="{{path}}" class="link {{className}}">
        <div data-component="content"></div>
      </a>
    `
    return this.compile(template, this.props)
  }
}
