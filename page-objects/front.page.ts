import { expect, Locator, Page } from "@playwright/test";
export class FrontPage {
  private readonly page: Page;
  private readonly url: string;

  // locator
  private readonly accountDeletionButton: Locator;
  private readonly logOutText: Locator;
  private readonly contactUsLink: Locator;
  private readonly productsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = "";
    this.accountDeletionButton = this.page.getByRole("link", {
      name: " Delete Account",
    });
    this.logOutText = this.page.getByRole("link", { name: " Logout" });
    this.contactUsLink = this.page.getByRole("link", { name: " Contact us" });
    this.productsLink = this.page.getByRole("link", { name: " Products" });
  }

  // locator function

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
    await this.page.waitForLoadState();
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
}
