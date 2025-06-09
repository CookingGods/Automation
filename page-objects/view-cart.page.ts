import { expect, Locator, Page } from "@playwright/test";

export class ViewCartPage {
  private readonly page: Page;
  private readonly emailAddressTextbox: Locator;
  private readonly arrowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arrowButton = this.page.getByRole("button", { name: "" });
    this.emailAddressTextbox = this.page.getByRole("textbox", {
      name: "Your email address",
    });
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
}
