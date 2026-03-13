import { test, expect } from "@playwright/test";
import { POManager } from "../pages/pomManager";

test.describe("Cart", () => {
  test("Tessting", async ({ page }) => {
    const objPOM = new POManager(page);
    const objLogin = objPOM.getLoginPage();
    const objList = objPOM.getProductListPage();
    const objCart = objPOM.getCartPage();

    // Login
    await objLogin.goTo();
    await objLogin.login("email@example.com", "password");

    // List
    const productName = "ZARA COAT 3";
    await objCart.verifyProductIsVisible(productName);
    await objCart.checkout();
  });
});
