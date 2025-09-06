import Handlebars from 'handlebars'

export default function (options) {
  const context = options.hash.context || this
  const id = options.hash.id || ''

  return new Handlebars.SafeString(`
    <form id="${id}" class="form">
      ${options.fn(context)}
    </form>
  `)
}
