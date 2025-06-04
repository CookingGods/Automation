import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly page: Page;
  private readonly selectingProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectingProduct = this.page
      .locator(".choose > .nav > li > a")
      .first();
  }

  async clickProduct(): Promise<void> {
    await this.selectingProduct.click();
  }

  async productSelection(): Promise<void> {
    await this.clickProduct();
  }
}
