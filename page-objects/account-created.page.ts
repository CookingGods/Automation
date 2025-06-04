import { expect, Locator, Page } from "@playwright/test";

export class AccountCreatedPage {
  private readonly page: Page;
  private readonly url: string;

  // locator
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "/account_created";
    this.continueButton = this.page.getByRole("link", { name: "Continue" });
  }
  // locator function
  async clickContinueButton(): Promise<void> {
    await this.continueButton.click();
  }

  async goToURL(): Promise<void> {
    await this.page.goto(this.url);
  }
  // other function
  async validateAndClickContinue(
    accountCreationMessage: string
  ): Promise<void> {
    await expect(this.page.getByText(accountCreationMessage)).toBeVisible();
    await this.clickContinueButton();
  }
}
