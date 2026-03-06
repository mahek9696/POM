export const testdata = {
  validData: { email: "email@example.com", password: "password" },
  emptyData: { email: "", password: "" },
  invalidData: { email: "email@example.comm", password: "passwordd" },
};

export const registationdata = {
  validData: {
    firstName: "Mahek",
    lastName: "Patel",
    email: "mahek2.patel@mail.com",
    phone: "1234567890",
    occupation: "3: Engineer",
    gender: "female",
    password: "Password123!",
    confirmPassword: "Password123!",
    isAbove18: true,
  },
  emptyData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "3: Engineer",
    gender: "male",
    password: "",
    confirmPassword: "",
    isAbove18: true,
  },
  duplicateData: {
    firstName: "Mahek",
    lastName: "Patel",
    email: "mahek2.patel@mail.com",
    phone: "1234567890",
    occupation: "3: Engineer",
    gender: "female",
    password: "Password123!",
    confirmPassword: "Password123!",
    isAbove18: true,
  },
};
