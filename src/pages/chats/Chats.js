import Handlebars from 'handlebars'
import ChatsPage from './Chats.hbs?raw'
import SidebarEl from '../../components/organisms/Sidebar/Sidebar.hbs?raw'
import Chat from '../../components/organisms/Chat/Chat.hbs?raw'
import Sidebar from '../../components/organisms/Sidebar/Sidebar.js'

Handlebars.registerPartial('Sidebar', SidebarEl)
Handlebars.registerPartial('Chat', Chat)
const template = Handlebars.compile(ChatsPage)

export default {
  render: (mockData) => template(mockData),
  init: ({ data, navigate }) => {
    Sidebar({
      chats: (data?.chats || []).sort((a, b) => new Date(b.time) - new Date(a.time)),
      navigate,
    })
  },
}
