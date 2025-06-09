import { expect, Locator, Page } from "@playwright/test";

export class ViewCartPage {
  private readonly page: Page;
  private readonly emailAddressTextbox: Locator;
  private readonly arrowButton: Locator;
  private readonly ProceedToCheckoutBox: Locator;
  private readonly registerLogInLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arrowButton = this.page.getByRole("button", { name: "" });
    this.emailAddressTextbox = this.page.getByRole("textbox", {
      name: "Your email address",
    });
    this.ProceedToCheckoutBox = this.page.getByText("Proceed To Checkout");
    this.registerLogInLink = this.page.getByRole("link", {
      name: "Register / Login",
    });
  }

  async clickRegisterLoginLink(): Promise<void> {
    await this.registerLogInLink.click();
  }
  async clickProceedToCheckoutBox(): Promise<void> {
    await this.ProceedToCheckoutBox.click();
  }
  async fillEmailAddress(email: string): Promise<void> {
    await this.emailAddressTextbox.fill(email);
  }
  async clickArrowButton(): Promise<void> {
    await this.arrowButton.click();
  }
  async validateSubscriptionText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }
  async validateSucessfulSubscriptionText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateCartPage(): Promise<void> {
    await expect(this.page).toHaveURL(
      "https://automationexercise.com/view_cart"
    );
  }
}
