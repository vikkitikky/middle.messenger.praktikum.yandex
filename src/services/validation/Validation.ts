import { utils } from '../../utils'

export type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export function validateField(name: string, value: string): ValidationResult {
  const rule = utils.validators[name]
  if (!rule) return { isValid: true }

  const isValid = rule.test(value)

  return {
    isValid,
    error: isValid ? undefined : `Поле "${name}" заполнено некорректно`,
  }
}

export function validateForm(formData: Record<string, string>) {
  const errors: Record<string, string> = {}

  for (const [name, value] of Object.entries(formData)) {
    const result = validateField(name, value)
    if (!result.isValid && result.error) {
      errors[name] = result.error
    }
  }

  return errors
}
