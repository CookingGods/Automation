import { expect, Locator, Page } from "@playwright/test";

export class SignUpPage {
  private readonly page: Page;
  private readonly url: string;

  // locators
  private readonly nameTextbox: Locator;
  private readonly emailAddressTextbox: Locator;
  private readonly signUpButton: Locator;
  private readonly mrButton: Locator;
  private readonly passwordTextbox: Locator;
  private readonly signUpNewsLetterCheckBox: Locator;
  private readonly signUpSpecialReceiveOfferCheckBox: Locator;
  private readonly firstNameTextbox: Locator;
  private readonly lastNameTextbox: Locator;
  private readonly companyTextbox: Locator;
  private readonly addressTextbox: Locator;
  private readonly address2Textbox: Locator;
  private readonly countrySelections: Locator;
  private readonly stateTextbox: Locator;
  private readonly cityTextbox: Locator;
  private readonly zipCodeTextbox: Locator;
  private readonly mobilePhoneNumberTextbox: Locator;
  private readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/signup";

    // locators definitions
    this.nameTextbox = this.page.getByRole("textbox", { name: "Name" });
    this.emailAddressTextbox = this.page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signUpButton = this.page.getByRole("button", { name: "Signup" });
    this.mrButton = this.page.getByRole("radio", { name: "Mr." });
    this.passwordTextbox = this.page.getByRole("textbox", {
      name: "Password *",
    });
    this.signUpNewsLetterCheckBox = this.page.getByRole("checkbox", {
      name: "Sign up for our newsletter!",
    });
    this.signUpSpecialReceiveOfferCheckBox = this.page.getByRole("checkbox", {
      name: "Receive special offers from",
    });
    this.firstNameTextbox = this.page.getByRole("textbox", {
      name: "First name *",
    });
    this.lastNameTextbox = this.page.getByRole("textbox", {
      name: "Last name *",
    });
    this.companyTextbox = this.page.getByRole("textbox", {
      name: "Company",
      exact: true,
    });
    this.addressTextbox = this.page.getByRole("textbox", {
      name: "Address * (Street address, P.",
    });
    this.address2Textbox = this.page.getByRole("textbox", {
      name: "Address 2",
    });
    this.countrySelections = this.page.getByLabel("Country *");
    this.stateTextbox = this.page.getByRole("textbox", { name: "State *" });
    this.cityTextbox = this.page.getByRole("textbox", {
      name: "City * Zipcode *",
    });
    this.zipCodeTextbox = this.page.locator("#zipcode");
    this.mobilePhoneNumberTextbox = this.page.getByRole("textbox", {
      name: "Mobile Number *",
    });
    this.createAccountButton = this.page.getByRole("button", {
      name: "Create Account",
    });
  }

  // locators function
  async fillNameTextbox(name: string): Promise<void> {
    await this.nameTextbox.fill(name);
  }

  async fillEmailAddressTextbox(email: string): Promise<void> {
    await this.emailAddressTextbox.fill(email);
  }

  async clickSignUpButton(): Promise<void> {
    await this.signUpButton.click();
  }

  async clickMrButton(): Promise<void> {
    await this.mrButton.click();
  }

  async fillPasswordTextbox(password: string): Promise<void> {
    await this.passwordTextbox.fill(password);
  }

  async clickSignUpNewsLetterCheckBox(): Promise<void> {
    await this.signUpNewsLetterCheckBox.click();
  }

  async clickSignUpReceiveSpecialOfferChekBox(): Promise<void> {
    await this.signUpSpecialReceiveOfferCheckBox.click();
  }

  async fillFirstNameTextbox(firstName: string): Promise<void> {
    await this.firstNameTextbox.fill(firstName);
  }

  async fillLasttNameTextbox(lastName: string): Promise<void> {
    await this.lastNameTextbox.fill(lastName);
  }

  async fillCompanyTextbox(company: string): Promise<void> {
    await this.companyTextbox.fill(company);
  }

  async fillAddressTextbox(address: string): Promise<void> {
    await this.addressTextbox.fill(address);
  }

  async fillAddress2Textbox(address2: string): Promise<void> {
    await this.address2Textbox.fill(address2);
  }

  async clickCountrySelections(): Promise<void> {
    await this.countrySelections.click();
  }

  async selectCountrySelections(): Promise<void> {
    await this.countrySelections.selectOption({ label: "United States" });
  }

  async fillStateTextbox(state: string): Promise<void> {
    await this.stateTextbox.fill(state);
  }

  async fillZipcodeTextbox(zipcode: string): Promise<void> {
    await this.zipCodeTextbox.fill(zipcode);
  }

  async fillCityTextbox(city: string): Promise<void> {
    await this.cityTextbox.fill(city);
  }

  async fillMobilePhoneNumberTextbox(number: string): Promise<void> {
    await this.mobilePhoneNumberTextbox.fill(number);
  }

  async clickCreateAccountButton(): Promise<void> {
    await this.createAccountButton.click();
  }

  // other methods
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async validateOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(this.url);
  }

  async completeNewUserSignUpForm(name: string, email: string): Promise<void> {
    await this.fillNameTextbox(name);
    await this.fillEmailAddressTextbox(email);
    await this.clickSignUpButton();
  }

  async fillAllCreateAccountBoxes(
    password: string,
    firstName: string,
    lastName: string,
    company: string,
    address: string,
    address2: string,
    state: string,
    city: string,
    zipcode: string,
    number: string
  ): Promise<void> {
    await this.clickMrButton();
    await this.fillPasswordTextbox(password);
    await this.clickSignUpNewsLetterCheckBox();
    await this.clickSignUpReceiveSpecialOfferChekBox();
    await this.fillFirstNameTextbox(firstName);
    await this.fillLasttNameTextbox(lastName);
    await this.fillCompanyTextbox(company);
    await this.fillAddressTextbox(address);
    await this.fillAddress2Textbox(address2);
    await this.fillStateTextbox(state);
    await this.clickCountrySelections();
    await this.selectCountrySelections();
    await this.fillCityTextbox(city);
    await this.fillZipcodeTextbox(zipcode);
    await this.fillMobilePhoneNumberTextbox(number);
    await this.clickCreateAccountButton();
  }
}
