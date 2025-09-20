import { Block, TBlockProps } from '../../../core'

export enum ETextTag {
  P = 'p',
  SPAN = 'span',
  B = 'b',
}

export type TTextProps = TBlockProps & {
  textContent: string
  tag?: ETextTag
  className?: string
}

export class Text extends Block<TTextProps> {
  constructor(props: TTextProps) {
    super({
      ...props,
      tag: props.tag ?? ETextTag.P,
      className: props.className ?? '',
    })
  }

  render(): DocumentFragment {
    const template = `
      <{{{tag}}} class="text {{className}}">
        {{textContent}}
      </{{{tag}}}>
    `
    return this.compile(template, this.props)
  }
}
