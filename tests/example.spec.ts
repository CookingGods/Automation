import { test } from "../fixtures/page-objects.fixtures";

test("Register User", async ({
  page,
  signUpPage,
  accountCreatedPage,
  frontPage,
  deleteAccountPage,
  dataFactory,
}) => {
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();

  await signUpPage.goto();
  await signUpPage.completeNewUserSignUpForm(
    accountInformation.tester,
    accountInformation.email
  );
  await signUpPage.validateOnPage();
  await signUpPage.fillAllCreateAccountBoxes(
    accountInformation.password,
    accountInformation.firstName,
    accountInformation.lastName,
    accountInformation.company,
    accountInformation.address,
    accountInformation.address,
    accountInformation.state,
    accountInformation.city,
    accountInformation.zipcode,
    accountInformation.phoneNumber
  );
  await accountCreatedPage.validateAndClickContinue(
    visibleTextMessage.accountCreationMessage
  );
  await frontPage.validateExistingUsers(accountInformation.tester);
  await frontPage.clickAccountDeletion();
  await deleteAccountPage.accountDeletion(visibleTextMessage.accountDeleted);
});

test("Login User with correct email and password", async ({
  page,
  frontPage,
  loginPage,
  dataFactory,
}) => {
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();

  await loginPage.goto();
  await loginPage.fillLogInUser(
    accountInformation.existingEmailAddress,
    accountInformation.existingPassword
  );
  await frontPage.validateExistingUsers(
    visibleTextMessage.usernameLoginMessage
  );
});
test("Login User with incorrect email and password", async ({
  page,
  loginPage,
  dataFactory,
}) => {
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();

  await loginPage.goto();
  await loginPage.fillIncorrectLogInUser(
    accountInformation.email,
    accountInformation.password
  );
  await loginPage.validateIncorrectLogInUser(visibleTextMessage.incorrectLogIn);
});

test("Logout User", async ({ page, frontPage, loginPage, dataFactory }) => {
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();

  await loginPage.goto();
  await loginPage.fillLogInUser(
    accountInformation.existingEmailAddress,
    accountInformation.existingPassword
  );
  await frontPage.validateExistingUsers(
    visibleTextMessage.usernameLoginMessage
  );
  await frontPage.logOut();
});

test("Register User with existing email", async ({
  page,
  loginPage,
  dataFactory,
}) => {
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();

  await loginPage.goto();
  await loginPage.validateOnPage();
  await loginPage.signupUpExitsingUser(
    visibleTextMessage.newUserSignUpMessage,
    accountInformation.existingName,
    accountInformation.existingEmailAddress
  );
  await loginPage.validateSignup(visibleTextMessage.existingSignUpMessage);
});

// figure out how to to input file
test("contact form", async ({ page, frontPage, contactPage, dataFactory }) => {
  const generateContactInformation = dataFactory.generateAccountInformation();
  const generateVisibleText = dataFactory.generateVisibleText();
  await frontPage.goto();
  await frontPage.gotoContact(generateVisibleText.contactUsMessage);
  await contactPage.fillBoxes(
    generateContactInformation.fullName,
    generateContactInformation.email,
    generateContactInformation.subject,
    generateContactInformation.message
  );
});

test("Verify Test Cases Page", async ({ page, testPage }) => {
  await testPage.goto();
  await testPage.validateOnPage();
});

test("Verify All Product and product detail page", async ({
  page,
  productDetailsPage,
  productsPage,
  frontPage,
  dataFactory,
}) => {
  await frontPage.goto();
  await frontPage.gotoProduct();
  await productsPage.productSelection();

  const productInformation = dataFactory.getBlueTopProductInformation();
  await productDetailsPage.productDetails(productInformation.price);
});
