import { validateField, validateForm } from '../../services'

export class FormController {
  handleFieldBlur(name: string, value: string) {
    return validateField(name, value)
  }

  handleSubmit(formData: Record<string, string>) {
    const errors = validateForm(formData)
    console.log('Form data:', formData)

    if (Object.keys(errors).length) {
      return { success: false, errors }
    }

    return { success: true }
  }
}
