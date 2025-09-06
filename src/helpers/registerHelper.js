import Handlebars from 'handlebars'
import { utils } from '../utils/utils.js'

export function registerHelpers() {
  for (const [name, fn] of Object.entries(utils)) {
    if (typeof name === 'string' && typeof fn === 'function') {
      Handlebars.registerHelper(name, fn)
    }
  }
}
