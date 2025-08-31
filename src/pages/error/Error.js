import Handlebars from 'handlebars'
import ErrorPage from './Error.hbs?raw'
import Link from '../../components/atoms/link/Link.js'

const template = Handlebars.compile(ErrorPage)

export default {
  render: (mockData) => template(mockData),
  init: ({ navigate }) => {
    Link({
      linkId: 'back-to-chats',
      navigate,
    })
  },
}
