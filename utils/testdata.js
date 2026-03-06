export const testdata = {
  validData: { email: "email@example.com", password: "password" },
  emptyData: { email: "", password: "" },
  invalidData: { email: "email@example.comm", password: "passwordd" },
};

export const registationdata = {
  validData: {
    firstName: "Mahek",
    lastName: "Patel",
    email: "mahek.patel@mail.com",
    phone: "1234567890",
    occupation: "3: Engineer",
    gender: "female",
    password: "password",
    confirmPassword: "password",
    isAbove18: true,
  },
  emptyData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "",
    gender: "",
    password: "",
    confirmPassword: "",
    isAbove18: "",
  },
  duplicateData: {
    firstName: "Mahek",
    lastName: "Patel",
    email: "mahek.patel@mail.com",
    phone: "1234567890",
    occupation: "3: Engineer",
    gender: "female",
    password: "password",
    confirmPassword: "password",
    isAbove18: true,
  },
};
