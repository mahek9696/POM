import { test, expect } from "@playwright/test";
//direct from the class LoginPage
// const { LoginPage } = require("../pages/login");
// import { LoginPage } from "../pages/login";

//viva from the class POManager
// const { POManager } = require("../pages/pomManager");
import { POManager } from "../pages/pomManager";

test.describe("TS_01", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    loginPage = new LoginPage(page);
  });

  test("TC_01 Validating URL", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Log in" })).toBeVisible();
  });

  test("TC_02 Login with Valid Credentials", async ({ page }) => {
    await loginPage.login("email@example.com", "password");
    await expect(page.getByText("Login Successfully")).toBeVisible();
  });

  test("TC_03 Login with Empty Credentials", async ({ page }) => {
    await loginPage.login("", "");
    await expect(page.getByText("*Email is required")).toBeVisible();
    await expect(page.getByText("*Password is required")).toBeVisible();
  });

  test("TC_04 Login with Invalid Credentials", async ({ page }) => {
    await loginPage.login("invalid@example.com", "wrongpassword");

    await expect(page.getByText("Incorrect email or password.")).toBeVisible();

    await expect(
      page.getByText("Register to sign in with your personal account"),
    ).toBeVisible();
  });
});
