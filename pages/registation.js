export class RegistationPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.email = page.getByRole("textbox", { name: "Email" });
    this.phone = page.getByRole("textbox", { name: "enter your number" });
    this.occupation = page.locator('select[formcontrolname="occupation"]');
    this.gender = page.getByRole("radio", { name: "Female" });
    this.password = page.getByPlaceholder("Passsword", { exact: true });
    this.confirmPassword = page.getByPlaceholder("Confirm Passsword", {
      exact: true,
    });

    this.isAbove18 = page.locator('input[type="checkbox"]');
    this.submit = page.getByRole("button", { name: "Register" });
  }

  async goTo() {
    await this.page.goto("client/#/auth/register");
  }

  async registation(
    firstName,
    lastName,
    email,
    phone,
    occupation,
    gender,
    password,
    confirmPassword,
    isAbove18,
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.phone.fill(phone);
    await this.occupation.selectOption(occupation);

    if (gender == "Female") {
      await this.gender.setChecked(true);
    } else {
      await this.gender.setChecked(false);
    }

    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.isAbove18.setChecked(isAbove18);
    await this.submit.click();
  }
}
// import { test, expect } from "@playwright/test";

// test.describe("Registration Tests", () => {
//   test("should register a new user successfully", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

//     // first name
//     const name = page.getByRole("textbox", { name: "First Name" });
//     await name.fill("Mahek");
//     await expect(name).toHaveValue("Mahek");

//     // last name
//     const lastName = page.getByRole("textbox", { name: "Last Name" });
//     await lastName.fill("Patel");
//     await expect(lastName).toHaveValue("Patel");

//     // email
//     const email = page.getByRole("textbox", { name: "Email" });
//     await email.fill("mahek.patel@example.com");
//     await expect(email).toHaveValue("mahek.patel@example.com");

//     // phone number
//     const phoneNumber = page.getByRole("textbox", {
//       name: "enter your number",
//     }); //here the actual placeholder is "enter your number" (all lowercase) found in the DOM
//     await phoneNumber.fill("1234567890");
//     await expect(phoneNumber).toHaveValue("1234567890");

//     // the option with value "3: Engineer"
//     const occupation = page.locator('select[formcontrolname="occupation"]');
//     await occupation.selectOption("3: Engineer");
//     await expect(occupation).toHaveValue("3: Engineer");

//     // gender
//     await page.getByRole("radio", { name: "Female" }).check();

//     // password and confirm password
//     const password = page.getByPlaceholder("Passsword", { exact: true }); //actual placeholder "Passsword" (3 's's)
//     await password.fill("Password123!");
//     await expect(password).toHaveValue("Password123!");

//     const confirmPassword = page.getByPlaceholder("Confirm Passsword", {
//       exact: true,
//     });
//     await confirmPassword.fill("Password123!");
//     await expect(confirmPassword).toHaveValue("Password123!");

//     // above 18 checkbox has a lot of extra spaces find it
//     // await page
//     //   .getByRole("checkbox", { name: " I am 18 year or Older " })
//     //   .check();
//     await page.locator('input[type="checkbox"]').check();

//     await page.getByRole("button", { name: "Register" }).click();

//     await expect(
//       page.getByRole("heading", { name: "Account Created Successfully" }),
//     ).toBeVisible();
//   });

//   test("should show error for existing email", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

//     // first name
//     const name = page.getByRole("textbox", { name: "First Name" });
//     await name.fill("Mahek");
//     await expect(name).toHaveValue("Mahek");

//     // last name
//     const lastName = page.getByRole("textbox", { name: "Last Name" });
//     await lastName.fill("Patel");
//     await expect(lastName).toHaveValue("Patel");

//     // email
//     const email = page.getByRole("textbox", { name: "Email" });
//     await email.fill("mahek3.patel@example.com");
//     await expect(email).toHaveValue("mahek3.patel@example.com");

//     // phone number
//     const phoneNumber = page.getByRole("textbox", {
//       name: "enter your number",
//     }); //here the actual placeholder is "enter your number" (all lowercase) found in the DOM
//     await phoneNumber.fill("1234567890");
//     await expect(phoneNumber).toHaveValue("1234567890");

//     // the option with value "3: Engineer"
//     const occupation = page.locator('select[formcontrolname="occupation"]');
//     await occupation.selectOption("3: Engineer");
//     await expect(occupation).toHaveValue("3: Engineer");

//     // gender
//     await page.getByRole("radio", { name: "Female" }).check();

//     // password and confirm password
//     const password = page.getByPlaceholder("Passsword", { exact: true }); //actual placeholder "Passsword" (3 's's)
//     await password.fill("Password123!");
//     await expect(password).toHaveValue("Password123!");

//     const confirmPassword = page.getByPlaceholder("Confirm Passsword", {
//       exact: true,
//     });
//     await confirmPassword.fill("Password123!");
//     await expect(confirmPassword).toHaveValue("Password123!");

//     // above 18 checkbox has a lot of extra spaces find it
//     await page.locator('input[type="checkbox"]').check();

//     await page.getByRole("button", { name: "Register" }).click();

//     // toast to appear
//     await expect(page.locator("#toast-container")).toHaveText(
//       "User already exisits with this Email Id!",
//     );
//   });
// });
