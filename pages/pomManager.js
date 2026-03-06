import { LoginPage } from "../pages/login";
import { RegistationPage } from "../pages/registation";

export class POManager {
  constructor(page) {
    this.page = page;
    this.login = new LoginPage(this.page);
    this.registation = new RegistationPage(this.page);
  }

  getLoginPage() {
    return this.login;
  }

  getRegistationPage() {
    return this.registation;
  }
}
// module.exports = { POManager };
