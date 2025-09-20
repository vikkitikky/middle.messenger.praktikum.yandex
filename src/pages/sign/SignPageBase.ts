import { Block, TBlockChildren, TBlockProps } from '../../core'
import { Link, Sphere, Title } from '../../components/atoms'
import { Form } from '../../components/molecules'

type ISignPageChildren = TBlockChildren & {
  title: Title
  form: Form
  sphere: Sphere
  link: Link
}

export class SignPageBase extends Block<TBlockProps, ISignPageChildren> {
  constructor() {
    super()
  }

  render() {
    const template = `
    <div class="page sign-page">
      <div data-component="sphere"></div>
      <main class="sign-page__content">
        <div class="form-wrapper">
          <div data-component="title"></div>
          <div data-component="form"></div>
          <div data-component="link"></div>
        </div>
      </main>
    </div>
    `
    return this.compile(template, {})
  }
}
