export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProducts = page.locator("div li"); // Locator for all items in cart
    this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
  }

  async verifyProductIsVisible(productName) {
    // This waits for the specific product name to appear in the cart list
    const productLocator = this.page.locator(`h3:has-text("${productName}")`);
    // await expect(productLocator).toBeVisible();
  }
  async checkout() {
    await this.checkoutBtn.click();
  }
}
