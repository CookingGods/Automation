import { faker } from "@faker-js/faker";

import blueTop from "../static/products/blue-top.json";
import winterTop from "../static/products/winter-top.json";

// @TODO  create a type for faker and the logins
type popUpText = {
  accountCreationMessage: string;
  existingSignUpMessage: string;
  accountDeleted: string;
  incorrectLogIn: string;
  existingEmailAddressMessage: string;
  newUserSignUpMessage: string;
  usernameLoginMessage: string;
  contactUsMessage: string;
};

type existingProductAndAccount = {
  existingEmailAddress: string;
  existingPassword: string;
  existingName: string;
  tester: string;
  productName: string;

  message: string;
  subject: string;
  fullName: string;
  email: string;
  password: string;
  name: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  phoneNumber: string;
};
export class DataFactory {
  generateVisibleText(): popUpText {
    return {
      accountCreationMessage: "ACCOUNT CREATED",
      existingSignUpMessage: "Email Address already exist!",
      accountDeleted: "ACCOUNT DELETED",
      incorrectLogIn: "Your email or password is incorrect!",
      existingEmailAddressMessage: "Email Address already exist!",
      newUserSignUpMessage: "New User Signup!",
      usernameLoginMessage: "Logged in as johndoe",
      contactUsMessage: "GET IN TOUCH",
    };
  }
  generateAccountInformation() {
    // json obcjet
    return {
      existingEmailAddress: "fake_test@gmail.com",
      existingPassword: "test1",
      existingName: "johndoe",
      tester: "SignUpTester",
      productName: "Winter top",

      message: faker.lorem.paragraph(2),
      subject: faker.lorem.sentence(5).replace(/\.$/, ""),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.internet.displayName(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.buildingNumber(),
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
    };
  }

  getBlueTopProductInformation() {
    return blueTop;
  }

  getWinterTopProuctInformation() {
    return winterTop;
  }
}
