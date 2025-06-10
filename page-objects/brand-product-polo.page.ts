import { expect, Locator, Page } from "@playwright/test";

export class BrandProductPoloPage {
  private readonly page: Page;

  //locators

  constructor(page: Page) {
    this.page = page;
  }

  async validateBrandProductPoloURL(URL: string): Promise<void> {
    await expect(this.page).toHaveURL(URL);
  }
}
