import Handlebars from 'handlebars'

export default function (options) {
  const context = options.hash.context || this
  const id = options.hash.id || ''
  const modalWrapperClassName = options.hash.wrapperClassName || ''
  const modalContentClassName = options.hash.contentClassName || ''

  return new Handlebars.SafeString(`
    <div class="modal-wrapper ${modalWrapperClassName}" id="${id}">
      <div class="modal-content ${modalContentClassName}">
        ${options.fn(context)}
      </div>
    </div>
  `)
}
