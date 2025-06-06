// 基礎路由實作
class SimpleRouter {
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Creates a new instance of SimpleRouter.
   * @param {string} outletId - The ID of the element that will serve as the outlet for the router.
   */
  /*******  0ca95863-1673-441a-93b7-ec0a6c1d9730  *******/
  constructor(outletId) {
    this.routes = new Map();
    this.outlet = document.getElementById(outletId);
    window.addEventListener("hashchange", () => this.resolve());
  }

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Adds a route to the router.
   * @param {string} path - The path for the route.
   * @param {string} component - The component associated with the path.
   */

  /*******  84ea8df4-1488-4cf0-9f25-10e87195b36d  *******/
  addRoute(path, component) {
    this.routes.set(path, component);
  }

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Resolves the route based on the current hash value.
   * If no matching route is found, it will render the component associated with the "*" path.
   * @returns {void}
   */
  /*******  c590f5cf-602a-410a-b459-ad3621a221df  *******/
  resolve() {
    const path = window.location.hash.slice(1) || "/";
    const Component = this.routes.get(path) || this.routes.get("*");
    this.outlet.innerHTML = `<${Component}></${Component}>`;
  }
}

// 頁面組件定義
class HomePage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          background: #f0f0f0;
        }
        h1 {
          color: #333;
          border-bottom: 2px solid #666;
        }
      </style>
      <h1>首頁</h1>
      <p>歡迎來到首頁內容</p>
    `;
  }
}

class AboutPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          background: #fff3e0;
        }
        h1 {
          color: #e65100;
        }
      </style>
      <h1>關於我們</h1>
      <p>公司簡介與聯絡資訊</p>
    `;
  }
}

// 導航組件
class AppNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        nav {
          background: #333;
          padding: 1rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 1rem;
        }
        a {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background 0.3s;
        }
        a:hover {
          background: #555;
        }
      </style>
      <nav>
        <ul>
          <li><a href="#/">首頁</a></li>
          <li><a href="#/about">關於</a></li>
        </ul>
      </nav>
    `;
  }
}

// 組件註冊
customElements.define("app-nav", AppNav);
customElements.define("home-page", HomePage);
customElements.define("about-page", AboutPage);

// 路由初始化
const router = new SimpleRouter("outlet");
router.addRoute("/", "home-page");
router.addRoute("/about", "about-page");
router.addRoute("*", "home-page");
router.resolve();
