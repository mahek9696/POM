import { test, expect } from "@playwright/test";
import fs from "fs";
import { waitUtils} from "../utils/waitUtils";


test.describe("TS_01 ", () => {

   const waitObj = new waitUtils();
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
      .first()
      .textContent();

    // 2. Now perform the string manipulation
    // const cartTotalValue = parseInt(cartTotal.split("$")[1]);
    const cartTotalValue = parseInt(cartTotal.replace("$", ""));

    console.log(cartTotalValue); // This will now correctly output the number

    console.log(cartTotalValue === total);

    await page.getByRole("button", { name: "Checkout" }).click();
    await expect(page).toHaveURL(/.*\/client\/#\/dashboard\/order.*/);

    //order detail page

    //card details

    //card no, expire date are prefilled

    await page.getByText(/CVV Code /i).click();
    await page.keyboard.press("Tab");
    await page.keyboard.type("123");

    await page.getByText(/Name on Card/i).click();
    await page.keyboard.press("Tab");
    await page.keyboard.type("Test Example");

    await page
      .getByText(/Apply Coupon/i)
      .first()
      .click();
    await page.keyboard.press("Tab");
    await page.keyboard.type("rahulshettyacademy");

    await page.getByRole("button", { name: "Apply Coupon" }).click();
    await expect(page.getByText("* Coupon Applied")).toBeVisible();

    //Shipping addresss

    await page
      .getByPlaceholder("Select Country")
      .pressSequentially("ind", { delay: 100 });
    await page.getByText("India", { exact: true }).click();

    await page.getByText("Place Order ").click();
    await expect(page).toHaveURL(/.*\/client\/#\/dashboard\/thanks.*/);

    // file download page.
    const downloadBtn = page.getByRole("button", {
      name: "Click To Download Order Details in CSV",
    });

    // by using the method of the waitUtil
    await waitObj.waitForElementVisible(downloadBtn);

    const [download] = await Promise.all([
      page.waitForEvent("download",
      ),
      downloadBtn.click(),
    ]);

    await download.saveAs("./downloads/order_details.csv");
    expect(fs.existsSync("./downloads/order_details.csv")).toBeTruthy();

    //getting the order from the thank you page.

    // 1. Target only the labels containing the Order IDs
    const idLocator = page.locator(".em-spacer-1 .ng-star-inserted");

    // 2. Fetch all texts into an array at once (handles the loop for you)
    const rawOrderIds = await idLocator.allInnerTexts();
    console.log(rawOrderIds);

    // 3. Clean the pipes (|) and extra spaces using map
    const orderArr = rawOrderIds.map((id) => id.replace(/\|/g, "").trim().slice(1));
    console.log(orderArr);

    await page.getByText(" Orders History Page ").click();

    await expect(page).toHaveURL(/.*\/client\/#\/dashboard\/myorders.*/);

    // verfiy the order history

    for(const id of orderArr)
    {
      const row = page.locator('tbody tr').filter({hasText : id});
      // console.log(`${row} is founded ! `)

      await expect(row.getByText(id)).toBeVisible();
    }

    //redirected back to home 
    await page.getByRole('button',{name :'HOME'}).click();

    await expect(page).toHaveURL(/.*\/client\/#\/dashboard.*/);

  });
});
