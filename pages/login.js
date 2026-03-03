class LoginPage {
  constructor(page) {
    // this.page = page;
    this.email = page.getByRole("textbox", { name: "email@example.com" });
    this.password = page.getByPlaceholder("enter your passsword");
    this.submit = page.getByRole("button", { name: "Login" });
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
// module.exports = { LoginPage };
export { LoginPage };
