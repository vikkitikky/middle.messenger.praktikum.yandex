export enum EFieldName {
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
  LOGIN = 'login',
  EMAIL = 'email',
  PASSWORD = 'password',
  PHONE = 'phone',
  MESSAGE = 'message',
  SEARCH = 'search',
}

export const validators: Record<string, RegExp> = {
  [EFieldName.FIRST_NAME]: /^[A-ZА-Я][A-Za-zА-Яа-я-]+$/,
  [EFieldName.SECOND_NAME]: /^[A-ZА-Я][A-Za-zА-Яа-я-]+$/,
  [EFieldName.LOGIN]: /^(?!\d+$)[A-Za-z0-9_-]{3,20}$/,
  [EFieldName.EMAIL]: /^[a-zA-Z0-9._-]+@(?=[a-zA-Z0-9-]*[a-zA-Z][a-zA-Z0-9-]*\.)[a-zA-Z0-9-._]+\.[a-zA-Z]+$/,
  [EFieldName.PASSWORD]: /^(?=.*[A-Z])(?=.*\d)[\S]{8,40}$/,
  [EFieldName.PHONE]: /^\+?\d{10,15}$/,
  [EFieldName.MESSAGE]: /^(?!\s*$).+$/,
}
