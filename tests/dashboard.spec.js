import { test, expect } from "@playwright/test";
import { POManager } from "../pages/pomManager";

test.describe("TS_Product List Page", () => {
  test("TC Fetching the test data", async ({ page }) => {
    let objPOM = new POManager(page);
    let objList = objPOM.getProductListPage();
    let objLogin = objPOM.getLoginPage();

    await objLogin.goTo();
    await objLogin.login("email@example.com", "password");

    // console.log(await objList.getProductsData());
    // const list = await objList.getProductDataFor();

    await objList.viewProductDetails('ZARA COAT 3');
    

    // console.log(list);
  });
});
