import { Block, EPaths, TBlockChildren, TBlockProps } from '../../core'
import { Link, Sphere } from '../../components/atoms'
import { Title, Text, ETitleTag, ETextTag } from '../../components/atoms'

type TErrorPageProps = TBlockProps & {
  code: string
  message: string
}

type TErrorPageChildren = TBlockChildren & {
  title: Title
  text: Text
  link: Link
  sphere: Sphere
}

export class ErrorPage extends Block<TErrorPageProps, TErrorPageChildren> {
  constructor(props: TErrorPageProps) {
    super(props)
  }

  protected initChildren() {
    this.children['link'] =  new Link({
      id: 'back-to-chats',
      path: EPaths.CHATS,
      className: 'error-page__go-back',
    }, {
      content: new Text({
        tag: ETextTag.SPAN,
        textContent: 'Back to chats',
      }),
    })
    this.children.title = new Title({
      text: this.props.code,
      tag: ETitleTag.H2,
    })
    this.children.sphere = new Sphere()
  }

  render(): DocumentFragment {
    const ErrorPageTemplate = `
    <div class="page error-page">
      <div data-component="sphere"></div>
      <main class="error-page__content">
        <div data-component="title"></div>
        <p class="error-page__message">{{message}}</p>
        <div data-component="link"></div>
      </main>
    </div>`

    return this.compile(ErrorPageTemplate, this.props)
  }
}
