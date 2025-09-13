import { EInputType, Link, Sphere, Text, Title } from '../../components/atoms'
import { Form } from '../../components/molecules'
import { SignPageBase } from './SignPageBase'
import { EFieldName } from '../../utils/validators'
import { EPaths } from '../../core'

export class SignInPage extends SignPageBase {
  protected initChildren() {
    this.children.title = new Title({
      text: 'Sign In',
    })
    this.children.link = new Link({
      id: 'sign-page_sign-up',
      path: EPaths.SIGN_UP,
    }, {
      content: new Text({
        textContent: 'Sign Up',
      }),
    })
    this.children.sphere = new Sphere()
    this.children.form = new Form({
      id: 'sign-in',
      className: 'sign-form',
      fields: [
        {
          placeholder: 'login',
          name: EFieldName.LOGIN,
          type: EInputType.TEXT,
        },
        {
          placeholder: 'password',
          name: EFieldName.PASSWORD,
          type: EInputType.PASSWORD,
        },
      ],
    })
  }
}
