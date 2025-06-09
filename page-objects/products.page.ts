import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly page: Page;
  private readonly selectingProduct: Locator;
  //locators
  private readonly searchButton: Locator;
  private readonly productSearchBarText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectingProduct = this.page
      .locator(".choose > .nav > li > a")
      .first();
    this.productSearchBarText = this.page.getByRole("textbox", {
      name: "Search Product",
    });
    this.searchButton = this.page.getByRole("button", { name: "" });
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async fillProductSearchBarTextProductName(
    productName: string
  ): Promise<void> {
    await this.productSearchBarText.fill(productName);
  }

  async clickProduct(): Promise<void> {
    await this.selectingProduct.click();
  }

  async productSelection(): Promise<void> {
    await this.clickProduct();
  }

  async productVerfication(productName: string): Promise<void> {
    await expect(this.page.getByText(productName).nth(1)).toBeVisible();
  }
}
