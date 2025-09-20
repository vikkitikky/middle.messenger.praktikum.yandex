import { Block, TBlockProps } from '../../../core'
import { ChatCard, TChatCardProps } from '../../molecules'
import { EInputType, Input, Link } from '../../atoms'
import { EFieldName } from '../../../utils/validators'

type TSidebarProps = TBlockProps & {
  chats: TChatCardProps[]
}

type TSidebarChildren = {
  search: Input
  chatCards: Link[]
}

export class Sidebar extends Block<TSidebarProps, TSidebarChildren> {
  protected initChildren() {
    this.children = {
      search: new Input({
        type: EInputType.SEARCH,
        placeholder: 'Search',
        name: EFieldName.SEARCH,
      }),
      chatCards: this.props.chats.map(
        (chat) =>
          new Link(
            { id: chat.chatId.toString(), path: `/chats/#${chat.chatId}` },
            { content: new ChatCard(chat) },
          ),
      ),
    }
  }

  render(): DocumentFragment {
    const template = `
      <aside class="sidebar">
        <div class="sidebar__header">
          <div data-component="search"></div>
        </div>
        <ul class="sidebar__chat-list scrollable" id="chat-list">
          <div data-component="chatCards"></div>
        </ul>
      </aside>
    `

    return this.compile(template, this.props)
  }
}
