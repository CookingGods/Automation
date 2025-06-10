import { expect, Locator, Page } from "@playwright/test";

export class ProductDetailsPage {
  private readonly page: Page;
  private readonly quantityBox: Locator;
  private readonly addToCartButton: Locator;
  private readonly addToCartButtonScrollDown: Locator;
  private readonly viewCartLink: Locator;
  private readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.quantityBox = this.page.locator("#quantity");
    this.addToCartButton = this.page.getByRole("button", {
      name: " Add to cart",
    });
    this.viewCartLink = this.page.getByRole("link", { name: "View Cart" });
    this.addToCartButtonScrollDown = this.page.getByText("Add to cart").nth(1);
    this.cartButton = this.page.getByRole("link", { name: " Cart" });
  }
  async clickCartButton() {
    await this.cartButton.click();
  }
  async clickviewCartLink() {
    await this.viewCartLink.click();
  }
  async clickAddTOCartButton() {
    await this.addToCartButton.click();
  }
  async clickAddTOCartButtonSroll() {
    await this.addToCartButtonScrollDown.click();
  }
  async clickQuantityBox() {
    await this.quantityBox.click();
  }
  async clearQuantityNumberBox() {
    await this.quantityBox.clear();
  }
  async fillQuanityBox(number: string) {
    await this.quantityBox.fill(number);
  }
  async changeQuantityBox(number: string): Promise<void> {
    await this.fillQuanityBox(number);
  }

  async productBlueTopDetails(
    productPrice: string,
    productName: string
  ): Promise<void> {
    await this.validateProductPriceVisible(productPrice);
    await this.validateProductNameVisible(productName);
    await expect(this.page.getByText("Availability")).toBeVisible();
    await expect(this.page.getByText("Condition")).toBeVisible();
    await expect(this.page.getByText("Brand:")).toBeVisible();
    await expect(this.page.getByText("Category:")).toBeVisible();
  }

  async productWinterTopDetails(productPrice: string): Promise<void> {
    await this.validateProductPriceVisible(productPrice);
    await expect(this.page.getByText("Winter Top")).toBeVisible();
    await expect(this.page.getByText("Availability")).toBeVisible();
    await expect(this.page.getByText("Condition")).toBeVisible();
    await expect(this.page.getByText("Brand:")).toBeVisible();
    await expect(this.page.getByText("Category:")).toBeVisible();
  }

  async validateProductPriceVisible(productPrice: string): Promise<void> {
    await expect(this.page.getByText(productPrice)).toBeVisible();
  }
  async validateProductNameVisible2(productName: string): Promise<void> {
    await expect(this.page.getByText(productName).nth(1)).toBeVisible();
  }
  async validateProductNameVisible(productName: string): Promise<void> {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async validateQaunityNumberVisible(quanityNumber: string): Promise<void> {
    await expect(this.page.getByText(quanityNumber)).toBeVisible();
  }
}
