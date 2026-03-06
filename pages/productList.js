export class ProductListPage {
  constructor(page) {
    this.page = page;

    this.addToCart = page.getByRole("button", { name: " Add To Cart" });

    this.view = page.getByRole("button", { name: "View" });
  }

  async goTo() {
    await this.page.goto("client/#/dashboard/dash");
  }

  async getProductDataFor() {
    await this.page.locator(".card-body").first().waitFor(); // wait for the component

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

  async viewProductDetails(productName) {
    await this.page.locator(".card-body").first().waitFor();

    const cards = await this.page.locator(".card-body").all();

    for (const card of cards) {
      const name = await card.locator("b").textContent();

      if (productName == productName) {

        await card.view.click();
      }
    }
  }

  //   async addProductToCart(productName)
  //   {

  //   }

  // async getProductsData()
  //   {
  //     // Wait for the cards to be attached and visible
  //     await this.page.locator('.card-body').first().waitFor();
  //     const products = await this.page.$$eval('.card-body',(cards) =>{
  //         return cards.map(card => {
  //             const name = card.querySelector('b').innerText;
  //             const price = card.querySelector('div.text-muted').innerText;

  //             return {productName : name.trim(),
  //                 productPrice : parseInt(price.replace("$","").trim())
  //             }
  //         })
  //     })
  //     return products;
  //   }
}
