import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage {
  private readonly page: Page;
  private readonly nameOnCardTextBox: Locator;
  private readonly cardNumberTextBox: Locator;
  private readonly monthTextBox: Locator;
  private readonly yearTextBox: Locator;
  private readonly CVCTextBox: Locator;
  private readonly payAndOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameOnCardTextBox = this.page.locator('input[name="name_on_card"]');
    this.cardNumberTextBox = this.page.locator('input[name="card_number"]');
    this.monthTextBox = this.page.getByRole("textbox", { name: "MM" });
    this.CVCTextBox = this.page.getByRole("textbox", { name: "ex." });
    this.yearTextBox = this.page.getByRole("textbox", { name: "YYYY" });
    this.payAndOrderButton = this.page.getByRole("button", {
      name: "Pay and Confirm Order",
    });
  }

  async clickPayAndOrderButton(): Promise<void> {
    await this.payAndOrderButton.click();
  }
  async fillNameOnCardtTextBox(name: string): Promise<void> {
    await this.nameOnCardTextBox.fill(name);
  }
  async fillCardNumberTextBox(number: string): Promise<void> {
    await this.cardNumberTextBox.fill(number);
  }
  async fillMonthTextBox(month: string): Promise<void> {
    await this.monthTextBox.fill(month);
  }
  async fillCVCTextBoX(CVC: string): Promise<void> {
    await this.CVCTextBox.fill(CVC);
  }
  async fillYearTextBox(year: string): Promise<void> {
    await this.yearTextBox.fill(year);
  }

  async orderValidationMessage(message: string): Promise<void> {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}
