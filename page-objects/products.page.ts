import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
  private readonly page: Page;
  private readonly selectingProduct: Locator;
  //locators
  private readonly searchButton: Locator;
  private readonly productSearchBarText: Locator;
  private readonly brandPoloLink: Locator;
  private readonly blueTopOverLayShoppingCart: Locator;
  private readonly viewProductButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.viewProductButton = this.page
      .locator(".choose > .nav > li > a")
      .first();
    this.blueTopOverLayShoppingCart = this.page
      .locator(".overlay-content > .btn")
      .first();
    this.selectingProduct = this.page
      .locator(".choose > .nav > li > a")
      .first();
    this.productSearchBarText = this.page.getByRole("textbox", {
      name: "Search Product",
    });
    this.searchButton = this.page.getByRole("button", { name: "" });
    this.brandPoloLink = this.page.getByRole("link", { name: "(6) Polo" });
  }

  async clickViewProductButton() {
    await this.viewProductButton.click();
  }
  async clickBlueTopOverLayShoppingCart() {
    await this.blueTopOverLayShoppingCart.click();
  }

  async clickBrandPolo() {
    await this.brandPoloLink.click();
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
  async productText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }
  async validateBrandURL(URL: string): Promise<void> {
    await expect(this.page).toHaveURL(URL);
  }
  async validateProductPageURL(URL: string): Promise<void> {
    await expect(this.page).toHaveURL(URL);
  }
}
