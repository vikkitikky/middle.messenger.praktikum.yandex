import Handlebars from 'handlebars'
import SettingsPage from './Settings.hbs?raw'
import inputHandler from '../../components/atoms/input/inputHandler.js'
import buttonHandler from '../../components/atoms/button/buttonHandler.js'

const template = Handlebars.compile(SettingsPage)

export default {
  render: (mockData) => template(mockData),
  init: ({ data }) => {
    data.inputs.forEach((input) => {
      inputHandler({ name: input.name, onChange: () => {} })
    })
    buttonHandler({
      name: data.buttonName,
      onClick: () => alert(`${data.buttonName} button clicked!`)
    })
  },
}
