import { Block, TBlockChildren, TBlockProps } from '../../core'
import { TChatCardProps } from '../../components/molecules'
import { Sidebar, ChatArea } from '../../components/organisms'
import { chats, messages } from './mock'

type TChatsPageProps = TBlockProps & {
  chats?: TChatCardProps[]
  currentChatId?: string
}

type TChatsPageChildren = TBlockChildren & {
  sidebar: Sidebar
  chat: ChatArea
}

export class ChatsPage extends Block<TChatsPageProps, TChatsPageChildren> {
  constructor(props: TChatsPageProps) {
    super(props)
  }

  protected initChildren() {
    this.children.sidebar = new Sidebar({
      chats: chats,
    })
    if (this.props.currentChatId) {
      this.children.chat = new ChatArea({
        username: chats[Number(this.props.currentChatId) - 1].username,
        messages: this.props.currentChatId === '1' ? messages : [],
      })
    }
  }

  protected componentDidUpdate(prevProps: TChatsPageProps, nextProps: TChatsPageProps): boolean {
    if (prevProps.currentChatId !== nextProps.currentChatId) {
      this.children.chat = new ChatArea({
        username: chats[Number(nextProps.currentChatId) - 1]?.username ?? undefined,
        messages: nextProps.currentChatId === '1' ? messages : [],
      })
      return true
    }
    return false
  }

  render() {
    const template = `
      <div class="page chats-page">
        <div data-component="sidebar"></div>
        ${this.props.currentChatId ? '<div data-component="chat"></div>' : '<div></div>'}
      </div>
    `

    return this.compile(template, this.props)
  }
}
