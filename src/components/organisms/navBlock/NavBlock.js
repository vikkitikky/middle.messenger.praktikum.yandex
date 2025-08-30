import Handlebars from 'handlebars'
import NavBlock from './NavBlock.hbs?raw'
import Link from '../../atoms/link/Link.js';

const template = Handlebars.compile(NavBlock)

export default {
  render: (mockData) => template(mockData),
  init: ({ data, navigate }) => {
    data.forEach((item) => {
      Link({
        linkId: item.id,
        navigate,
      })
    })
  },
}
