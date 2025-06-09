import { expect, test } from "../fixtures/page-objects.fixtures";
import { FrontPage } from "../page-objects/front.page";

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
  await productDetailsPage.productBlueTopDetails(
    productInformation.price,
    productInformation.name
  );
});

test("Search Product", async ({
  page,
  frontPage,
  dataFactory,
  productsPage,
}) => {
  await frontPage.goto();
  await frontPage.verifiyOnFrontPage();
  await frontPage.gotoProduct();

  const productName = dataFactory.generateAccountInformation();
  await productsPage.fillProductSearchBarTextProductName(
    productName.productName
  );
  await productsPage.clickSearchButton();
  await productsPage.productVerfication(productName.productName);
});

test("Verify Subscription in home page", async ({
  page,
  frontPage,
  dataFactory,
}) => {
  await frontPage.goto();
  await frontPage.verifiyOnFrontPage();

  const textMessage = dataFactory.generateVisibleText();
  const generateAccountInformation = dataFactory.generateAccountInformation();
  await frontPage.validateSubscriptionText(textMessage.subscriptionText);
  await frontPage.fillEmailAddress(generateAccountInformation.email);
  await frontPage.clickArrowButton();
  await frontPage.validateSubscriptionText(
    textMessage.successfulSubscriptionText
  );
});

test("Verify Subscription in CartPage", async ({
  page,
  frontPage,
  dataFactory,
  viewCartPage,
}) => {
  await frontPage.goto();
  await frontPage.verifiyOnFrontPage();
  await frontPage.clickCartButton();

  const textMessage = dataFactory.generateVisibleText();
  const generateAccountInformation = dataFactory.generateAccountInformation();
  await frontPage.validateSubscriptionText(textMessage.subscriptionText);
  await frontPage.fillEmailAddress(generateAccountInformation.email);
  await viewCartPage.clickArrowButton();
  await viewCartPage.validateSubscriptionText(
    textMessage.successfulSubscriptionText
  );
});

test("Verifiy Product quanity in Cart", async ({
  page,
  frontPage,
  dataFactory,
  productDetailsPage,
}) => {
  await frontPage.goto();
  await frontPage.verifiyOnFrontPage();
  await frontPage.clickBlueTopBViewProduct();

  const quantityNumber = dataFactory.generateAccountInformation();
  await productDetailsPage.changeQuantityBox(quantityNumber.quantityNumber);
  await productDetailsPage.clickAddTOCartButton();
  await productDetailsPage.clickviewCartLink();
  await productDetailsPage.validateQaunityNumberVisible(
    quantityNumber.quantityNumber
  );
});

test("Place Order: Register while checkout", async ({
  page,
  frontPage,
  dataFactory,
  viewCartPage,
  productDetailsPage,
  signUpPage,
  accountCreatedPage,
  deleteAccountPage,
  checkOutPage,
  paymentPage,
}) => {
  // setup for the test
  await frontPage.goto();
  await frontPage.clickBlueTopBViewProduct();

  await productDetailsPage.clickAddTOCartButton();
  await productDetailsPage.clickviewCartLink();

  // actual test start here
  await frontPage.goto();
  await frontPage.verifiyOnFrontPage();
  await frontPage.clickCartButton();
  await viewCartPage.validateCartPage();
  await viewCartPage.clickProceedToCheckoutBox();
  await viewCartPage.clickRegisterLoginLink();
  const accountInformation = dataFactory.generateAccountInformation();
  const visibleTextMessage = dataFactory.generateVisibleText();
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
  await frontPage.clickCartButton();
  await viewCartPage.clickProceedToCheckoutBox();
  await checkOutPage.fillCommentTextBox(accountInformation.message);
  await checkOutPage.clickPlaceOrderButton();
  await paymentPage.fillNameOnCardtTextBox(accountInformation.firstName);
  await paymentPage.fillYearTextBox(accountInformation.expirationYear);
  await paymentPage.fillMonthTextBox(accountInformation.expirationMonth);
  await paymentPage.fillCardNumberTextBox(accountInformation.cardNumber);
  await paymentPage.fillCVCTextBoX(accountInformation.CVC);
  await paymentPage.clickPayAndOrderButton();
  await paymentPage.orderValidationMessage(
    visibleTextMessage.successfullOrderText
  );
  await frontPage.clickAccountDeletion();
  await deleteAccountPage.accountDeletion(visibleTextMessage.accountDeleted);
});
