import Handlebars from 'handlebars'
import SignInPage from './Sign.hbs?raw'
import inputHandler from '../../components/atoms/input/inputHandler.js'
import buttonHandler from '../../components/atoms/button/buttonHandler.js'
import Link from '../../components/atoms/link/Link.js';

const template = Handlebars.compile(SignInPage)

export default {
  render: (mockData) => template(mockData),
  init: ({ data, navigate }) => {
    data.inputs.forEach((input) => {
      inputHandler({ name: input.name, onChange: () => {} })
    })
    buttonHandler({
      name: data.buttonName,
      onClick: () => alert(`${data.buttonName} button clicked!`)
    })
    Link({
      linkId: data.linkId,
      navigate,
    })
  },
}
