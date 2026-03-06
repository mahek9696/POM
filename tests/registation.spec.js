import { test, expect } from "@playwright/test";
import { POManager } from "../pages/pomManager";
import { registationdata } from "../utils/testdata";

test.describe("TS_01_Registration", () => {
  for (const dataKey of Object.keys(registationdata)) {
    test(`TC_Registation with ${dataKey}`, async ({ page }) => {
      // Initialize POM
      const objPOM = new POManager(page);
      const objReg = objPOM.getRegistationPage();
      await objReg.goTo();

      // Get the test data
      const data = registationdata[dataKey];

      // Call the registration method
      await objReg.registation(
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.occupation,
        data.gender,
        data.password,
        data.confirmPassword,
        data.isAbove18,
      );

      // Add your assertions here based on the data type
      if (dataKey === "validData") {
        // Add success assertions
        await expect(
          page.getByRole("heading", { name: "Account Created Successfully" }),
        ).toBeVisible();
      } else if (dataKey === "emptyData") {
        // Add validation error assertions
      } else if (dataKey === "duplicateData") {
        // Add duplicate error assertions
        await expect(page.locator("#toast-container")).toHaveText(
          "User already exisits with this Email Id!",
        );
      }
    });
  }
});
