import Handlebars from 'handlebars'

export default function (options) {
  const context = options.hash.context || this
  const pageClass = options.hash.className || ''

  return new Handlebars.SafeString(`
    <div class='page ${pageClass}'>
      ${options.fn(context)}
    </div>
  `)
}
