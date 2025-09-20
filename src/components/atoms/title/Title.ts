import { Block, TBlockProps } from '../../../core'

export enum ETitleTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type TTitleProps = TBlockProps & {
  tag?: ETitleTag
  text: string
}

export class Title extends Block<TTitleProps> {
  constructor(props: TTitleProps) {
    super({
      ...props,
      tag: props.tag ?? ETitleTag.H2,
    })
  }

  render() {
    const template = `
      <{{{tag}}}>
        {{text}}
      </{{{tag}}}>
    `
    return this.compile(template, this.props)
  }
}
