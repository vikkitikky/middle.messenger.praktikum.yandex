import { EInputType, Link, Sphere, Title, Text } from '../../components/atoms'
import { Form } from '../../components/molecules'
import { SignPageBase } from './SignPageBase'
import { EFieldName } from '../../utils/validators'
import { EPaths } from '../../core'

export class SignUpPage extends SignPageBase {
  constructor() {
    super()
  }

  protected initChildren() {
    this.children.title = new Title({
      text: 'Sign Up',
    })
    this.children.sphere = new Sphere()
    this.children.link = new Link({
      id: 'sign-page_sign-in',
      path: EPaths.SIGN_IN,
    }, {
      content: new Text({
        textContent: 'Sign In',
      }),
    })
    this.children.form = new Form({
      id: 'sign-un',
      className: 'sign-form',
      fields: [
        {
          placeholder: 'First name',
          name: EFieldName.FIRST_NAME,
          type: EInputType.TEXT,
        },
        {
          placeholder: 'Second name',
          name: EFieldName.SECOND_NAME,
          type: EInputType.TEXT,
        },{
          placeholder: 'login',
          name: EFieldName.LOGIN,
          type: EInputType.TEXT,
        },
        {
          placeholder: 'Email',
          name: EFieldName.EMAIL,
          type: EInputType.EMAIL,
        },
        {
          placeholder: 'Password',
          name: EFieldName.PASSWORD,
          type: EInputType.PASSWORD,
        },
        {
          placeholder: 'Phone',
          name: EFieldName.PHONE,
          type: EInputType.TEXT,
        },
      ],
    })
  }
}
