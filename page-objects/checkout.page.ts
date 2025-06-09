import { expect, Locator, Page } from "@playwright/test";

export class CheckOutPage {
  private readonly page: Page;
  private readonly commentTextBox: Locator;
  private readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentTextBox = this.page.locator('textarea[name="message"]');
    this.placeOrderButton = this.page.getByRole("link", {
      name: "Place Order",
    });
  }

  async fillCommentTextBox(comment: string): Promise<void> {
    await this.commentTextBox.fill(comment);
  }

  async clickPlaceOrderButton(): Promise<void> {
    await this.placeOrderButton.click();
  }
}
