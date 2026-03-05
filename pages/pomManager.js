import { LoginPage } from '../pages/login';

export class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
  }

 getLoginPage() {
    return this.loginPage;
  }
}
// module.exports = { POManager };
