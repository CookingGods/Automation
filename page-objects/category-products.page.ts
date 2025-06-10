import { expect, Locator, Page } from "@playwright/test";

export class CategoryProductsPage {
  private readonly page: Page;
  private readonly menText: Locator;
  private readonly menJeanText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menText = this.page.getByRole("link", { name: " Men" });
    this.menJeanText = this.page.getByRole("link", { name: "Jeans" });
  }

  async clickMenText(): Promise<void> {
    await this.menText.click();
  }

  async clickMenJeanText(): Promise<void> {
    await this.menJeanText.click();
  }
  async validateWomenDressProductText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateMenDressURL(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}
