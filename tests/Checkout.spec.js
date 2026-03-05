import { test, expect } from "@playwright/test";

test.describe("TS_01 ", () => {
  test("TC_01 Validate the end-to-end checkout.", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await expect(page.getByRole("heading", { name: "Log in" })).toBeVisible();

    await page.getByPlaceholder("email@example.com").fill("email@example.com");
    await expect(page.getByPlaceholder("email@example.com")).toHaveValue(
      "email@example.com",
    );

    await page.getByPlaceholder("enter your passsword").fill("password");
    await expect(page.getByPlaceholder("enter your passsword")).toHaveValue(
      "password",
    );

    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(
      "https://rahulshettyacademy.com/client/#/dashboard/dash",
    );

    // await page.pause();

    // Cart all the product whic is pressent on the screeen
    const products = ["ADIDAS ORIGINAL", "ZARA COAT 3", "iphone 13 pro"];

    let countCart = 0;
    let total = 0;

    for (const product of products) {
      // targeting the button with its title.
      await page
        .locator(".card-body")
        .filter({ hasText: `${product}` })
        .getByRole("button", { name: " Add To Cart" })
        .click();

      // 1. Await the text content first to get the string "$ 11500"
      const rawPrice = await page
        .locator(".card-body")
        .filter({ hasText: product })
        .locator("div.text-muted")
        .textContent();

      // 2. Now you can safely use .split() on the string
      const priceValue = parseInt(rawPrice.split(" ")[1]);
      

      console.log(priceValue); // Output: 11500

      countCart++;

      await expect(
        page.getByRole("button", { name: `Cart ${countCart}` }),
      ).toBeVisible();

      total = total + priceValue;
    }
    console.log(total);

    //moving towards the cart

    await page.getByRole("button", { name: `Cart ${countCart}` }).click();
    await expect(page).toHaveURL(
      "https://rahulshettyacademy.com/client/#/dashboard/cart",
    );

    // 1. Await the text content to get the string from the browser
    const cartTotal = await page
      .getByRole("listitem")
      .locator(".value")
      .first().textContent();

    // 2. Now perform the string manipulation
    // const cartTotalValue = parseInt(cartTotal.split("$")[1]);
    const cartTotalValue = parseInt(cartTotal.replace("$",""));

    console.log(cartTotalValue); // This will now correctly output the number

    console.log(cartTotalValue === total);

    await page.getByRole('button',{name:'Checkout'}).click();
    

    
  });
});
