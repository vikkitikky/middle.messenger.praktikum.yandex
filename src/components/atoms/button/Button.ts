import { Block } from '../../../core'
import { TBlockProps } from '../../../core'

export enum EButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
}

export type TButtonProps = TBlockProps & {
  text: string
  onClick?: (e?: MouseEvent) => void
  type?: EButtonType
}

export class Button extends Block<TButtonProps> {
  private _handleClick(e: MouseEvent) {
    this.props.onClick?.(e)
  }

  protected componentDidMount() {
    this.setEvents({
      root: {
        click: this._handleClick,
      },
    })
  }

  render() {
    const template = `
      <button type="{{type}}" class="btn" name="{{name}}">
        {{text}}
      </button>
    `

    return this.compile(template, {
      ...this.props,
      type: this.props.type ?? EButtonType.BUTTON,
    })
  }
}
