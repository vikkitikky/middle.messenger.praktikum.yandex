import { Block, TBlockProps } from '../../../core'
import { FormController } from '../../../controllers'
import { EFieldName } from '../../../utils/validators'

export enum EInputType {
  TEXT = 'text',
  PASSWORD = 'password',
  SEARCH = 'search',
  EMAIL = 'email',
  PHONE = 'phone',
}

export type TInputProps = TBlockProps & {
  className?: string
  placeholder?: string
  type?: EInputType
  name: EFieldName
  value?: string
  error?: string
}

export class Input extends Block<TInputProps> {
  private controller = new FormController()

  constructor(props: TInputProps) {
    super({
      ...props,
      type: props.type ?? EInputType.TEXT,
      error: props.error ?? '',
    })
  }

  protected componentDidMount() {
    this.setEvents({
      input: {
        blur: this._handleBlur,
      },
    })
  }

  private _handleBlur() {
    this.validate()
  }

  public validate(): { valid: boolean; error?: string } {
    const input = this.element?.querySelector('input') as HTMLInputElement | null
    const value = input?.value ?? ''

    const result = this.controller.handleFieldBlur(this.props.name, value)

    this.setProps({
      value,
      error: result.error || '',
    })

    return { valid: result.isValid, error: result.error }
  }

  public getValue() {
    return this.props.value ?? ''
  }

  render() {
    const inputTemplate = `
      <label class="{{className}}">
        <input
          placeholder="{{placeholder}}"
          class="input {{#if error}}error{{/if}}"
          type="{{type}}"
          autocomplete="off"
          name="{{name}}"
          value="{{value}}"
        />
        <span class="input-error {{#if error}}visible{{else}}hidden{{/if}}">
          {{error}}
        </span>
      </label>
    `
    return this.compile(inputTemplate, this.props)
  }
}
