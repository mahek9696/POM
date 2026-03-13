export class ProductListPage {
  constructor(page) {
    this.page = page;

    this.card = page.locator(".card-body");

    // this.addToCart = page.getByRole("button", { name: " Add To Cart" });

    // this.view = page.getByRole("button", { name: "View" });
  }

  async goTo() {
    await this.page.goto("client/#/dashboard/dash");
  }

  async getProductDataFor() {
    await this.card.first().waitFor(); // wait for the component

    const cards = await this.page.locator(".card-body").all();
    const productData = [];

    for (const card of cards) {
      const name = await card.locator("b").textContent();
      const price = await card.locator("div.text-muted").textContent();

      productData.push({
        productName: name.trim(),
        productPrice: parseInt(price.replace("$", "")),
      });
    }

    return productData;
  }

  async viewProductDetails(productNames) {
    // Ensure productNames is an array even if a single string is passed
    const names = Array.isArray(productNames) ? productNames : [productNames];

    for (const productName of names) {
      // 1. Find the card for this specific product
      const productCard = this.card.filter({ hasText: productName });

      // 2. Chain the button locator to search ONLY inside this card
      await productCard.getByRole("button", { name: "View" }).click();
    }
  }

  async addToCart(productNames) {
    const names = Array.isArray(productNames) ? productNames : [productNames];

    for (const productName of names) {
      const productCard = this.card.filter({
        has: this.page.locator("b").filter({ hasText: productName }),
      });

      // Click the button inside the uniquely identified card
      await productCard.getByRole("button", { name: "Add To Cart" }).click();
    }
  }
}

// async addProductToCart(productName) {}

// async getProductsData() {
//   // Wait for the cards to be attached and visible
//   await this.page.locator(".card-body").first().waitFor();
//   const products = await this.page.$$eval(".card-body", (cards) => {
//     return cards.map((card) => {
//       const name = card.querySelector("b").innerText;
//       const price = card.querySelector("div.text-muted").innerText;

//       return {
//         productName: name.trim(),
//         productPrice: parseInt(price.replace("$", "").trim()),
//       };
//     });
//   });
//   return products;
// }
