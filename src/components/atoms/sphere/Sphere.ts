import { Block } from '../../../core'

export class Sphere extends Block {
  constructor() {
    super()
  }

  render(): DocumentFragment {
    const template = `
    <aside class="sphere-wrapper">
       <div class="sphere"></div>
    </aside>
    `

    return this.compile(template, {})
  }
}
