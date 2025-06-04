import { expect, Page } from "@playwright/test";

export class ProductDetailsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async productDetails(productPrice: string): Promise<void> {
    await this.validateProductPriceVisible(productPrice);
    await expect(this.page.getByText("Blue Top")).toBeVisible();
    await expect(this.page.getByText("Availability")).toBeVisible();
    await expect(this.page.getByText("Condition")).toBeVisible();
    await expect(this.page.getByText("Brand:")).toBeVisible();
    await expect(this.page.getByText("Category:")).toBeVisible();
  }

  async validateProductPriceVisible(productPrice: string): Promise<void> {
    await expect(this.page.getByText(productPrice)).toBeVisible();
  }
}
