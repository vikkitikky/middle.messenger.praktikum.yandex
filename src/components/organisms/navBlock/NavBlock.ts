import { Block, EPaths, TBlockProps } from '../../../core'
import { Link, Text } from '../../atoms'

type TNavBlockChildren = {
  [key: string]: Link
}

export class NavBlock extends Block<TBlockProps, TNavBlockChildren> {
  constructor() {
    super()
  }

  protected initChildren() {
    this.children = Object.values(EPaths).reduce((acc, path) => {
      acc[path] = new Link(
        { id: path, path },
        { content: new Text({ textContent: path }) },
      )
      return acc
    }, {} as TNavBlockChildren)
  }

  render() {
    const items = Object.keys(this.children)
      .map((key) => `<li class="nav-block__item"><span data-component="${key}"></span></li>`)
      .join('')

    const template = `
      <nav class="nav-block-wrapper">
        <ul class="nav-block">
          ${items}
        </ul>
      </nav>
    `
    return this.compile(template, {})
  }
}
