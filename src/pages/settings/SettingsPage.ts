import { Block, TBlockProps } from '../../core'
import { Form } from '../../components/molecules'
import { Avatar, EInputType } from '../../components/atoms'
import { EFieldName } from '../../utils/validators'

type TSettingsChildren = {
  avatar: Avatar
  form: Form
}

export class SettingsPage extends Block<TBlockProps, TSettingsChildren> {
  constructor() {
    super()
  }

  protected initChildren() {
    this.children.avatar = new Avatar({ personInitials: 'AB', size: 'lg' })

    this.children.form = new Form({
      id: 'settings',
      className: 'settings-form',
      fields: [
        { placeholder: 'First name', name: EFieldName.FIRST_NAME, type: EInputType.TEXT },
        { placeholder: 'Second name', name: EFieldName.SECOND_NAME, type: EInputType.TEXT },
        { placeholder: 'Login', name: EFieldName.LOGIN, type: EInputType.TEXT },
        { placeholder: 'Email', name: EFieldName.EMAIL, type: EInputType.EMAIL },
        { placeholder: 'Password', name: EFieldName.PASSWORD, type: EInputType.PASSWORD },
        { placeholder: 'Phone', name: EFieldName.PHONE, type: EInputType.TEXT },
      ],
    })
  }

  protected componentDidMount() {
    const fileInput = this.element?.querySelector<HTMLInputElement>('#avatar-upload')
    fileInput?.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        console.log('Avatar selected:', file.name)
      }
    })
  }

  render(): DocumentFragment {
    const template = `
      <main class="page settings-page">
        <div class="settings__avatar">
          <label for="avatar-upload">
            <div data-component="avatar"></div>
            <input
              type="file"
              id="avatar-upload"
              name="avatar"
              accept="image/*"
              hidden
            />
          </label>
        </div>
        <div data-component="form"></div>
      </main>
    `
    return this.compile(template, {})
  }
}
