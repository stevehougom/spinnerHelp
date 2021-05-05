// Import the LitElement base class and html helper function
import { LitElement, css, html } from "lit-element";
import { MyComponent } from "./my-component";

// Extend the LitElement base class
export default class MyDescription extends MyComponent {
  static get styles(){
    return css`
      span{
        font-size: 14px;
        margin-bottom: 4px;
        margin-top: 3px;
      }
    `
  }

    constructor() {
        super();
      }
      render() {
        return html`
          <span>${this.label}</span>
        `;
      }
    }
// Register the new element with the browser.
customElements.define("my-description", MyDescription);
export { MyDescription };
