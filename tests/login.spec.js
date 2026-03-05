import { test, expect } from "@playwright/test";
import { POManager } from "../pages/pomManager";
// import { testdata } from "../utils/testdata";
import testdata from "../utils/testdata.json" with { type: "json" }; //ESM
// const testdata = JSON.parse(JSON.stringify(require('../utils/testdata.json'))) //commonJS

test.describe("TS_01", () => {
  let loginPOManager;
  let loginPage;

  test.beforeEach(async ({ page }) => {
    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    loginPOManager = new POManager(page); // now the make the object of the POManager.
    loginPage = loginPOManager.getLoginPage();

    // The page object handles its own navigation
    await loginPage.goTo();
  });

  test("TC_01 Validating URL", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Log in" })).toBeVisible();
  });

  for (let data of testdata) 
    {
    test(`TC_${data.scenario}`, async ({ page }) => {
      // await loginPage.login(testdata.validData.email, testdata.validData.password);
      await loginPage.login(data.email, data.password);
      await expect(page.getByText("Login Successfully")).toBeVisible();
    });
  }

  // test("TC_03 Login with Empty Credentials", async ({ page }) => {
  //   await loginPage.login(testdata.emptyData.email, testdata.emptyData.password);
  //   await expect(page.getByText("*Email is required")).toBeVisible();
  //   await expect(page.getByText("*Password is required")).toBeVisible();
  // });

  // test("TC_04 Login with Invalid Credentials", async ({ page }) => {
  //   await loginPage.login(testdata.invalidData.email, testdata.invalidData.password);

  //   await expect(page.getByText("Incorrect email or password.")).toBeVisible();

  //   await expect(
  //     page.getByText("Register to sign in with your personal account"),
  //   ).toBeVisible();
  // });
});
//https://rahulshettyacademy.com/client/#/auth/register
//https://rahulshettyacademy.com/client/#/auth/login
//https://rahulshettyacademy.com/client/#/dashboard/dash
