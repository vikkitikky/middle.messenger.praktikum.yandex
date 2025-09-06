import Handlebars from 'handlebars'

export default function (options) {
  const context = options.hash.context || this
  const pageClass = options.hash.className || ''
  const tag = options.hash.tag || 'div'

  return new Handlebars.SafeString(`
    <${tag} class='page ${pageClass}'>
      ${options.fn(context)}
    </${tag}>
  `)
}
