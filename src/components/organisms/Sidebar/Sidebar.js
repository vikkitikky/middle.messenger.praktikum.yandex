import Chat from '../../molecules/chatCard/ChatCard.js'
import Handlebars from 'handlebars'
import ChatCard from '../../molecules/chatCard/ChatCard.hbs?raw'
import Link from '../../atoms/link/Link.js'

Handlebars.registerPartial('ChatCard', ChatCard);

export default function ({ chats, navigate }) {
  chats.forEach((chat) => {
    Chat({
      chatId: chat.chatId,
      navigate,
    })
    Link({
      linkId: 'personalSettings',
      path: '/settings',
      navigate,
    })
  })
}
