import Handlebars from 'handlebars'

const partials = import.meta.glob('../components/atoms/**/*.hbs', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export function registerPartials() {
  Object.entries(partials).forEach(([path, template]) => {
    const name = path.split('/').pop().replace('.hbs', '')

    Handlebars.registerPartial(name, template)
  })
}
