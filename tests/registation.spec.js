import { test, expect } from "@playwright/test";
import { POManager } from "../pages/pomManager";
// import { registationdata } from "../utils/testdata";
import testdata from "../utils/testdataR.json" with { type: "json" };

// test.describe("TS_01_Registration", () => {
//   for (const dataKey of Object.keys(registationdata)) {
//     test(`TC_Registation with ${dataKey}`, async ({ page }) => {

//       const objPOM = new POManager(page);
//       const objReg = objPOM.getRegistationPage();
//       await objReg.goTo();

//       const data = registationdata[dataKey];

//       await objReg.registation(
//         data.firstName,
//         data.lastName,
//         data.email,
//         data.phone,
//         data.occupation,
//         data.gender,
//         data.password,
//         data.confirmPassword,
//         data.isAbove18,
//       );

//       if (dataKey === "validData") {
//         // success
//         await expect(
//           page.getByRole("heading", { name: "Account Created Successfully" }),
//         ).toBeVisible();
//       } else if (dataKey === "emptyData") {
//         // error
//         await expect(page.getByText('*First Name is required')).toBeVisible();
//         await expect(page.getByText('*Email is required')).toBeVisible();
//         await expect(page.getByText('*Phone Number is required')).toBeVisible();
//         await expect(page.getByText('*Password is required')).toBeVisible();
//         await expect(page.getByText('Confirm Password is required')).toBeVisible();

//       } else if (dataKey === "duplicateData") {
//         // duplicate
//         await expect(page.locator("#toast-container")).toHaveText(
//           "User already exisits with this Email Id!",
//         );
//       }
//     });
//   }
// });

// By using json

test.describe("TS_01_", () => {

  for (const data of testdata) {

    test(`TC_Registaion of ${data.scenario}`, async ({page}) => {

      let objPOM = new POManager(page); // obj - POManager Class.

      let objReg = objPOM.getRegistationPage(); // access the method (getRegistationPage) of POM class obj - RegistationPage class , viva POM methods

      await objReg.goTo(); // navigating the url of registation.

      await objReg.registation(
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.occupation,
        data.gender,
        data.password,
        data.confirmPassword,
        data.isAbove18
      );

      if (data.scenario === "Valid Data") {

        // success
        
        await expect(
          page.getByRole("heading", { name: "Account Created Successfully" }),
        ).toBeVisible();

      } else if (data.scenario === "Empty Data") {

        // error

        await expect(page.getByText('*First Name is required')).toBeVisible();
        await expect(page.getByText('*Email is required')).toBeVisible();
        await expect(page.getByText('*Phone Number is required')).toBeVisible();
        await expect(page.getByText('*Password is required')).toBeVisible();
        await expect(page.getByText('Confirm Password is required')).toBeVisible();
        

      } else if (data.scenario === "Duplicate Data") {

         // duplicate
        await expect(page.locator("#toast-container")).toHaveText(
          "User already exisits with this Email Id!",
        );
      }
    });
  }
});
