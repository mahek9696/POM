export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByRole("textbox", { name: "email@example.com" });
    this.password = page.getByPlaceholder("enter your passsword");
    this.submit = page.getByRole("button", { name: "Login" });
  }

  // New method to navigate using the Base URL
  async goTo() {
    await this.page.goto("/client/#/auth/login");
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
// module.exports = { LoginPage };
// export { LoginPage };
