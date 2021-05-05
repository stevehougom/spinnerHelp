import { LitElement, css, html } from "lit-element";
import { MyComponent } from "./my-component";
import { default as SignaturePad } from "signature_pad";

// Extend the LitElement base class
export default class MySignaturePad extends MyComponent {
  static get styles() {
    return css`
      .signature-pad {
        background-color: white;
      }
    `;
  }

  static get properties() {
    return {
      signaturePad: {
        type: SignaturePad,
        reflect: true,
      },
      value: {
        type: String,
      },
      width: {
        type: String,
        reflect: true,
      },
      height: {
        type: String,
        reflect: true,
      },
    };
  }

  get value() {
    return this.signaturePad.toDataURL("image/svg+xml");
  }

  constructor() {
    super();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    var canvas = this.shadowRoot.querySelector("canvas");
    this.signaturePad = new SignaturePad(canvas);
    this.shadowRoot.querySelector("#clear").signaturePad = this.signaturePad;
    this.shadowRoot
      .querySelector("#clear")
      .addEventListener("click", this.clear);
    this.resizeCanvas();
  }

  clear() {
    this.signaturePad.clear();
  }

  resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  }

  render() {
    return html`
      <label for="${this.name}"> ${this.label} </label>
      <canvas
        id="${this.name}"
        class="signature-pad"
        width="${this.width}"
        height="${this.height}"
      ></canvas>
      <button id="clear">Clear</button>
    `;
  }
}

customElements.define("my-signaturepad", MySignaturePad);

//?required=${this.myvalidation &&
//  this.myvalidation.localeCompare("true") == 0}
export { MySignaturePad };
