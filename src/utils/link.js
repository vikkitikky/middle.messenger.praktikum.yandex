import Handlebars from 'handlebars'

export default function (options) {
  const path = options.hash.path || '#'
  const className = options.hash.className || ''
  const id = options.hash.id || ''
  const context = options.hash.context || this
  const content = options.fn(context)

  return new Handlebars.SafeString(
    `<a id="${id}" href="${path}" class="${className}">${content}</a>`
  )
}
