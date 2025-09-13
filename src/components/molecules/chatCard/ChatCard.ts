import { Block, TBlockChildren, TBlockProps } from '../../../core'
import { Avatar, Text, ETextTag } from '../../atoms'
import { utils } from '../../../utils'

export type TChatCardProps = TBlockProps & {
  chatId: number
  username: string
  initials: string
  avatarColor: string
  lastMessage: string
  time: string
  lastMessageFrom: 'owner' | string
}

export type TChatCardChildren = TBlockChildren & {
  avatar: Avatar
  username: Text
  dateTime: Text
  message: Text
}

export class ChatCard extends Block<TChatCardProps, TChatCardChildren> {
  protected initChildren() {
    this.children = {
      avatar: new Avatar({
        personInitials: this.props.initials,
        color: this.props.avatarColor,
        size: 'sm',
      }),
      username: new Text({
        textContent: this.props.username,
        tag: ETextTag.B,
      }),
      dateTime: new Text({
        textContent: utils.formatDate(this.props.time),
      }),
      message: new Text({
        textContent: this.props.lastMessage,
        className: 'chat-card__message',
      }),
    }
  }

  render(): DocumentFragment {
    const template = `
      <div class="chat-card">
        <div data-component="avatar"></div>
        <div class="chat-card__content">
          <div class="chat-card__header">
             <span>
                <span data-component="username"></span>
             </span>
             <div data-component="dateTime"></div>
          </div>
             <div data-component="message"></div>
         </div>
      </div>
    `

    return this.compile(template, {})
  }
}
