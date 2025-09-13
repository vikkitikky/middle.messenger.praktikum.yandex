import { Block, TBlockProps } from '../../../core'

export type TAvatarProps = TBlockProps & {
  personInitials?: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export class Avatar extends Block<TAvatarProps> {
  constructor(props: TAvatarProps) {
    super({
      ...props,
      size: props.size ?? 'md',
      className: props.className ?? '',
    })
  }

  render() {
    const template = `
      {{#if src}}
        <img
          src="{{src}}"
          alt="User avatar"
          class="avatar avatar--{{size}} {{className}}"
        />
      {{else}}
        <span
          class="avatar avatar--{{size}} {{className}}"
          role="img"
          aria-label="User avatar"
        >
          {{personInitials}}
        </span>
      {{/if}}
    `
    return this.compile(template, this.props)
  }
}
