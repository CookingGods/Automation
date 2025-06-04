import { expect, Locator, Page } from "@playwright/test";

export class DeleteAccountPage {
  private readonly page: Page;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = this.page.getByRole("link", { name: "Continue" });
  }

  async accountDeletion(accountDeletedText: string): Promise<void> {
    await expect(this.page.getByText(accountDeletedText)).toBeVisible();
    await this.continueButton.click();
  }
}
