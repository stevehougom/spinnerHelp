// Import the LitElement base class and html helper function
import { LitElement, css, html } from "lit-element";
import { MyComponent } from "./my-component";

// Extend the LitElement base class
export default class MyCaption extends MyComponent {
  static get styles(){
    return css`
      h2{
        font-size: 18px;
        font-weight: 800;
        color: #113c66;
        margin-bottom: 8px;
        margin-top: 8px;
      }
    `
  }

    constructor() {
        super();
      }
      render() {
        return html`
          <h2>${this.label}</h2>
        `;
      }
    }
// Register the new element with the browser.
customElements.define("my-caption", MyCaption);
export { MyCaption };
