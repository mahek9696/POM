class POManager {
  constructor(page) {
    this.page = page;
    const { LoginPage } = require("../pages/login.js");
    this.loginPage = new LoginPage(this.page);
  }

  async getLoginPage() {
    return this.loginPage;
  }
}
// module.exports = { POManager };
export { POManager };
