import { Block, TBlockProps } from '../../../core'
import { type TInputProps, Input, Button, EInputType, EButtonType } from '../../atoms'
import { FormController } from '../../../controllers'
import { EFieldName } from '../../../utils/validators'

export type TFormProps = TBlockProps & {
  id: string
  fields: Array<TInputProps>
  className?: string
  submitLabel?: string
}

export type TFormChild = {
  [key in EFieldName]: Input
} & {
  submitButton: Button
}

export class Form extends Block<TFormProps, TFormChild> {
  private controller = new FormController()

  constructor(props: TFormProps) {
    super(props)
    this.setEvents({
      root: {
        submit: this.handleSubmit, // Block пробиндит
      },
    })
  }

  protected initChildren() {
    this.props.fields.forEach((field) => {
      this.children[field.name] = new Input({
        name: field.name,
        type: field.type ?? EInputType.TEXT,
        placeholder: field.placeholder,
        value: field.value,
        error: field.error,
      })
    })

    this.children.submitButton = new Button({
      text: this.props.submitLabel ?? 'Отправить',
      type: EButtonType.SUBMIT,
    })
  }

  protected handleSubmit(e: Event) {
    e.preventDefault()

    const data: Record<string, string> = {}

    this.props.fields.forEach(({ name }) => {
      const input = this.children[name]
      if (input instanceof Input) {
        data[name] = input.getValue()
      }
    })

    const result = this.controller.handleSubmit(data)

    if (!result.success) {
      Object.entries(result.errors || {}).forEach(([name, error]) => {
        const child = this.children[name as EFieldName]
        if (child instanceof Input) {
          child.setProps({ error })
        }
      })
    }
  }

  render() {
    const template = `
      <form id="{{id}}" class="form {{className}}" novalidate>
        ${this.props.fields.map((f) => `<div data-component="${f.name}"></div>`).join('')}
        <div data-component="submitButton"></div>
      </form>
    `
    return this.compile(template, this.props)
  }
}
