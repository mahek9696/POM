import { LoginPage } from "../pages/login";
import { RegistationPage } from "../pages/registation";
import { ProductListPage } from '../pages/productList';

export class POManager {
  constructor(page) {
    this.page = page;
    this.login = new LoginPage(this.page);
    this.registation = new RegistationPage(this.page);
    this.productList = new ProductListPage(this.page);

  }

  getLoginPage() {
    return this.login;
  }

  getRegistationPage() {
    return this.registation;
  }

  getProductListPage()
  {
    return this.productList;
  }
}
// module.exports = { POManager };
