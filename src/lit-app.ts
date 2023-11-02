import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { SimpleGreeting } from './simple-greeting'
@customElement('lit-app')
export class LitApp extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = 'World';

  render() {
    return html`
      <div>
        <p>Hello, ${this.name}!</p>
        <simple-greeting name="Fred"></simple-greeting>
      </div>
    `;
  }
}

customElements.define('simple-greeting', SimpleGreeting);