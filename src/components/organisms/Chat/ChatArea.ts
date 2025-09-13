import { Block, TBlockChildren, TBlockProps } from '../../../core'
import { ETitleTag, Title } from '../../atoms'
import { Message } from '../../molecules'
import { FormController } from '../../../controllers'
import { EFieldName } from '../../../utils/validators'

type TChatAreaProps = TBlockProps & {
  username: string
  messages: {
    text: string
    from: 'user' | string
    time: string
  }[]
}

type TChatChildren = {
  username: Title
  messages: Message[]
} & TBlockChildren

export class ChatArea extends Block<TChatAreaProps, TChatChildren> {
  private controller = new FormController()

  protected initChildren() {
    this.children = {
      username: new Title({ text: this.props.username, tag: ETitleTag.H3 }),
      messages: this.props.messages.map(
        (m) =>
          new Message({
            message: m.text,
            time: m.time,
            fromOwner: m.from === 'user',
          }),
      ),
    }
  }

  protected componentDidMount() {
    this.setEvents({
      '.chat__input-area': {
        submit: (e: Event) => {
          e.preventDefault()
          this.handleSubmit()
        },
      },
      'textarea[name="message"]': {
        blur: () => this.validateMessage(),
      },
    })
  }

  private validateMessage(): { valid: boolean; error?: string } {
    const textarea = this.element?.querySelector<HTMLTextAreaElement>('textarea[name="message"]')
    const value = textarea?.value ?? ''

    const result = this.controller.handleFieldBlur(EFieldName.MESSAGE, value)

    if (result.isValid) {
      textarea?.classList.remove('error')
    } else {
      textarea?.classList.add('error')
    }

    const errorEl = this.element?.querySelector<HTMLSpanElement>('.chat__input-error')
    if (errorEl) {
      errorEl.textContent = result.error || ''
      errorEl.style.display = result.error ? 'block' : 'none'
    }

    return { valid: result.isValid, error: result.error }
  }

  private handleSubmit() {
    const textarea = this.element?.querySelector<HTMLTextAreaElement>('textarea[name="message"]')
    const value = textarea?.value ?? ''

    const result = this.validateMessage()
    if (!result.valid) return

    console.log('Отправка сообщения:', value)
    textarea!.value = ''
    this.validateMessage()
  }

  render() {
    const template = `
      <main class="chat">
        <div class="chat__header">
          <div data-component="username"></div>
        </div>
        <div class="chat__lenta scrollable">
          <div data-component="messages"></div>
        </div>
        <form class="chat__input-area">
          <label>
            <textarea name="message" placeholder="Введите сообщение"></textarea>
            <span class="chat__input-error" style="display:none"></span>
          </label>
          <button class="btn btn_primary btn_icon" type="submit" aria-label="Отправить сообщение">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
              <path d="M5.521,19.9h5.322l3.519,3.515a2.035,2.035,0,0,0,1.443.6,2.1,2.1,0,0,0,.523-.067,2.026,2.026,0,0,0,1.454-1.414L23.989,1.425Z"/>
              <path d="M4.087,18.5,22.572.012,1.478,6.233a2.048,2.048,0,0,0-.886,3.42l3.495,3.492Z"/>
            </svg>
          </button>
        </form>
      </main>
    `
    return this.compile(template, this.props)
  }
}
