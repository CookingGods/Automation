import { expect, Locator, Page } from "@playwright/test";
export class FrontPage {
  private readonly page: Page;
  private readonly url: string;

  // locator
  private readonly accountDeletionButton: Locator;
  private readonly logOutText: Locator;
  private readonly contactUsLink: Locator;
  private readonly productsLink: Locator;
  private readonly emailAddressTextbox: Locator;
  private readonly arrowButton: Locator;
  private readonly cartButton: Locator;
  private readonly blueTopViewProduct: Locator;
  private readonly womenText: Locator;
  private readonly dressText: Locator;
  private readonly addToCartButton: Locator;
  private readonly viewCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "";

    this.viewCart = this.page.getByRole("link", { name: "View Cart" });
    this.addToCartButton = this.page.locator(
      "div:nth-child(2) > div:nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn"
    );
    this.dressText = this.page.getByRole("link", { name: "Dress" });
    this.womenText = this.page.getByRole("link", { name: " Women" });
    this.accountDeletionButton = this.page.getByRole("link", {
      name: " Delete Account",
    });
    this.logOutText = this.page.getByRole("link", { name: " Logout" });
    this.contactUsLink = this.page.getByRole("link", { name: " Contact us" });
    this.productsLink = this.page.getByRole("link", { name: " Products" });
    this.emailAddressTextbox = this.page.getByRole("textbox", {
      name: "Your email address",
    });
    this.arrowButton = this.page.getByRole("button", { name: "" });
    this.cartButton = this.page.getByRole("listitem").filter({
      hasText: "Cart",
    });
    this.blueTopViewProduct = this.page
      .locator(".choose > .nav > li > a")
      .first();
  }

  // locator function

  async clickViewCart() {
    await this.viewCart.click();
  }
  async clickAddTOCartButton(): Promise<void> {
    await this.addToCartButton.click();
  }

  async clickMenText(): Promise<void> {
    await this.clickMenText;
  }
  async clickDressText(): Promise<void> {
    await this.dressText.click();
  }

  async clickWomenText(): Promise<void> {
    await this.womenText.click();
  }
  async clickBlueTopBViewProduct(): Promise<void> {
    await this.blueTopViewProduct.click();
  }
  async clickCartButton(): Promise<void> {
    await this.cartButton.click();
  }
  async clickArrowButton(): Promise<void> {
    await this.arrowButton.click();
  }
  async fillEmailAddress(email: string): Promise<void> {
    await this.emailAddressTextbox.fill(email);
  }
  async clickContactUsLink(): Promise<void> {
    await this.contactUsLink.click();
  }

  async clickProductLink(): Promise<void> {
    await this.productsLink.click();
  }
  async clickAccountDeletion(): Promise<void> {
    await this.accountDeletionButton.click();
  }

  // other function
  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async verifiyOnFrontPage(): Promise<void> {
    await expect(this.page).toHaveURL("https://automationexercise.com");
  }
  async validateUsername(existingUsername: string): Promise<void> {
    await expect(this.page.getByText(existingUsername)).toBeVisible();
  }
  async validateExistingUsers(name: string): Promise<void> {
    await expect(this.page.getByText(name)).toBeVisible();
  }

  async logOut(): Promise<void> {
    await this.logOutText.click();
    await expect(this.page).toHaveURL("https://automationexercise.com/login");
  }
  async gotoContact(message: string): Promise<void> {
    await this.clickContactUsLink();
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async gotoProduct(): Promise<void> {
    await this.clickProductLink();
    await expect(this.page).toHaveURL(
      "https://automationexercise.com/products"
    );
  }

  async validateSubscriptionText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateSucessfulSubscriptionText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateCategorySection(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateBrandText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async validateRecommendItemText(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}
