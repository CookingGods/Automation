import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  url: string; // this is for the URL for the login page

  // locators
  private readonly signUpAndLogInLink: Locator;
  private readonly nameTextBox: Locator;
  private readonly emailAddressTextbox: Locator;
  private readonly emailAddressTextboxSignUp: Locator;
  private readonly passwordTextbox: Locator;

  private readonly logInButton: Locator;
  private readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/login";
    this.signUpAndLogInLink = this.page.getByRole("link", {
      name: " Signup / Login",
    });
    this.nameTextBox = this.page.getByRole("textbox", { name: "Name" });
    this.emailAddressTextbox = this.page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
    this.passwordTextbox = this.page.getByRole("textbox", { name: "Password" });
    this.logInButton = this.page.getByRole("button", { name: "Login" });
    this.emailAddressTextboxSignUp = this.page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.signUpButton = this.page.getByRole("button", { name: "Signup" });
  }

  // locators function
  async clickSignUpButton(): Promise<void> {
    await this.signUpButton.click();
  }
  async fillemailAddressTextBoxSignUp(
    existingEmailAddress: string
  ): Promise<void> {
    await this.emailAddressTextboxSignUp.fill(existingEmailAddress);
  }
  async fillemailAddressTextBox(existingEmailAddress: string): Promise<void> {
    await this.emailAddressTextbox.fill(existingEmailAddress);
  }

  async fillPasswordTextBox(existingPassword: string): Promise<void> {
    await this.passwordTextbox.fill(existingPassword);
  }

  async clickLoginInButton(): Promise<void> {
    await this.logInButton.click();
  }

  async clickSignUpandLogInLink(): Promise<void> {
    await this.signUpAndLogInLink.click();
  }

  async fillNameTextBox(existingName: string): Promise<void> {
    await this.nameTextBox.fill(existingName);
  }

  // other function
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async validateOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(this.url);
  }

  async signupUpExitsingUser(
    newUserSignUpMessage: string,
    existingName: string,
    existingEmailAddress: string
  ): Promise<void> {
    await this.clickSignUpandLogInLink();
    await expect(this.page.getByText(newUserSignUpMessage)).toBeVisible();
    await this.fillNameTextBox(existingName);
    await this.fillemailAddressTextBoxSignUp(existingEmailAddress);
    await this.clickSignUpButton();
  }

  async fillIncorrectLogInUser(email: string, password: string): Promise<void> {
    await this.fillemailAddressTextBox(email);
    await this.fillPasswordTextBox(password);
    await this.clickLoginInButton();
  }

  async fillLogInUser(
    existingEmailAddress: string,
    existingPassword: string
  ): Promise<void> {
    await this.fillemailAddressTextBox(existingEmailAddress);
    await this.fillPasswordTextBox(existingPassword);
    await this.clickLoginInButton();
  }
  async validateIncorrectLogInUser(incorrectMessage: string): Promise<void> {
    await expect(this.page.getByText(incorrectMessage)).toBeVisible();
  }
  async validateSignup(existingSignUpMessage: string): Promise<void> {
    await expect(this.page.getByText(existingSignUpMessage)).toBeVisible();
  }
}
