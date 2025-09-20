import { Block, TBlockChildren, TBlockProps } from '../../../core'
import { ETextTag, Text } from '../../atoms'

type TMessageProps = TBlockProps & {
  message: string
  time: string
  fromOwner: boolean
}

type TMessageChildren = TBlockChildren & {
  message: Text
  time: Text
}

export class Message extends Block<TMessageProps, TMessageChildren> {
  protected initChildren() {
    this.children = {
      message: new Text({
        textContent: this.props.message,
      }),
      time: new Text({
        textContent: this.props.time,
        tag: ETextTag.SPAN,
        className: 'message__time',
      }),
    }
  }

  render() {
    const template = `
    <div class="message message_${this.props.fromOwner ? 'right' : 'left'}">
      <div data-component="message"></div>
      <div data-component="time"></div>
    </div>
    `

    return this.compile(template, this.props)
  }
}
