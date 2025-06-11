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
  private readonly firstProduct: Locator;
  private readonly secondProduct: Locator;
  private readonly secondAddToCartButton: Locator;
  private readonly addToCartButton: Locator;
  private readonly continueShoppingButton: Locator;
  private readonly viewCartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.viewCartButton = this.page.getByRole("link", { name: "View Cart" });
    this.secondProduct = this.page.locator(".product-image-wrapper").nth(1);
    this.secondAddToCartButton = this.secondProduct.locator(
      ".overlay-content .btn"
    );

    this.viewProductButton = this.page
      .locator(".choose > .nav > li > a")
      .first();
    this.firstProduct = this.page.locator(".product-image-wrapper").first();
    this.addToCartButton = this.firstProduct.locator(".overlay-content .btn");
    this.selectingProduct = this.page
      .locator(".choose > .nav > li > a")
      .first();
    this.productSearchBarText = this.page.getByRole("textbox", {
      name: "Search Product",
    });
    this.searchButton = this.page.getByRole("button", { name: "" });
    this.brandPoloLink = this.page.getByRole("link", { name: "(6) Polo" });
    this.continueShoppingButton = this.page.getByRole("button", {
      name: "Continue Shopping",
    });
  }
  async clickViewCartButton(): Promise<void> {
    await this.viewCartButton.click();
  }

  async hoverAndClickAddToCartSecondProduct(): Promise<void> {
    // Hover over the overlay area to reveal the "Add to cart" button
    await this.secondProduct.hover();
    await this.secondAddToCartButton.waitFor({ state: "visible" });
    await this.secondAddToCartButton.click();
  }
  async hoverAndClickAddToCart(): Promise<void> {
    await this.firstProduct.hover();

    await this.addToCartButton.waitFor({ state: "visible" });
    await this.addToCartButton.click();
  }
  async clickContinueShoppingButton(): Promise<void> {
    await this.continueShoppingButton.click();
  }
  async clickViewProductButton(): Promise<void> {
    await this.viewProductButton.click();
  }

  async clickBrandPolo(): Promise<void> {
    await this.brandPoloLink.click();
  }
  async clickSearchButton(): Promise<void> {
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
