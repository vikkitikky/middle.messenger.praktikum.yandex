import Handlebars from 'handlebars'

export function registerHelpers(helpers = []) {
  Handlebars.registerHelper('default', (value, defaultValue) => {
    return value != null ? value : defaultValue;
  });
  helpers.forEach(helper => {
    Handlebars.registerHelper(helper.name, helper.fn)
  })
}
