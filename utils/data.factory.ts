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
  subscriptionText: string;
  successfulSubscriptionText: string;
  successfullOrderText: string;
  categorySectionText: string;
  womanCategoryText: string;
  menJeanCategoryText: string;
  menJeanCategoryURL: string;
  brandText: string;
  brandURL: string;
  brandProductPoloURl: string;
  productPageURL: string;
  thankYouMessage: string;
  recommendedItem: string;
  productOneName: string;
  productOnePrices: string;
  productOneQuantity: string;
  productOneTotalPrice: string;
  productTwoName: string;
  productTwoPrices: string;
  productTwoQuantity: string;
  productTwoTotalPrice: string;
};

export class DataFactory {
  generateVisibleText(): popUpText {
    return {
      categorySectionText: "CATEGORY",
      accountCreationMessage: "ACCOUNT CREATED",
      existingSignUpMessage: "Email Address already exist!",
      accountDeleted: "ACCOUNT DELETED",
      incorrectLogIn: "Your email or password is incorrect!",
      existingEmailAddressMessage: "Email Address already exist!",
      newUserSignUpMessage: "New User Signup!",
      usernameLoginMessage: "Logged in as johndoe",
      contactUsMessage: "GET IN TOUCH",
      subscriptionText: "SUBSCRIPTION",
      successfulSubscriptionText: "You have been successfully",
      successfullOrderText: "ORDER PLACED!",
      womanCategoryText: "Women - Dress Products",
      menJeanCategoryText: "Men - Jeans Products",
      menJeanCategoryURL: "https://automationexercise.com/category_products/6",
      brandText: "Brands",
      brandURL: "https://automationexercise.com/products",
      brandProductPoloURl: "https://automationexercise.com/brand_products/Polo",
      productPageURL: "https://automationexercise.com/products",
      thankYouMessage: "Thank you for your review.",
      recommendedItem: "RECOMMENDED ITEMS",
      productOneName: "Blue Top",
      productOnePrices: "500",
      productOneQuantity: "1",
      productOneTotalPrice: "Rs. 500",
      productTwoName: "Men Tshirt",
      productTwoPrices: "400",
      productTwoQuantity: "1",
      productTwoTotalPrice: "Rs. 400",
    };
  }
  generateAccountInformation() {
    // json obcjet
    return {
      existingEmailAddress: "fake_test@gmail.com",
      existingAddress: "fakeAddress Texas 10508-0684",
      existingPassword: "test1",
      existingName: "johndoe",
      tester: "SignUpTester",
      productName: "Winter top",
      quantityNumber: "4",

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
      cardNumber: faker.finance.creditCardNumber(),
      CVC: faker.finance.creditCardCVV(),
      expirationMonth: "06",
      expirationYear: "2025",
    };
  }

  getBlueTopProductInformation() {
    return blueTop;
  }

  getWinterTopProuctInformation() {
    return winterTop;
  }
}
