import { LoginPage } from "../pages/login";
import { RegistationPage } from "../pages/registation";
import { ProductListPage } from "../pages/productList";
import { CartPage } from "../pages/cart";

export class POManager {
  constructor(page) {
    this.page = page;
    this.login = new LoginPage(this.page);
    this.registation = new RegistationPage(this.page);
    this.productList = new ProductListPage(this.page);
    this.cart = new CartPage(this.page);
  }

  getLoginPage() {
    return this.login;
  }

  getRegistationPage() {
    return this.registation;
  }

  getProductListPage() {
    return this.productList;
  }

  getCartPage() {
    return this.cart;
  }
}
// module.exports = { POManager };
