class MyWebComponent extends HTMLElement {
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Creates a new instance of MyWebComponent.
   * Initializes the component with Tailwind CSS styles.
   * @returns {void}
   */
  /*******  a9b22fdb-8842-4ab6-9441-39805450c0e4  *******/
  constructor() {
    super();
    this.innerHTML = `
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-2">My Web Component</h1>
        <p class="text-gray-600">This is an example web component with Tailwind CSS.</p>
      </div>
    `;
  }
}
customElements.define("my-web-component", MyWebComponent);
