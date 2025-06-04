import { expect, Page } from "@playwright/test";

export class TestPage {
  private readonly page: Page;
  private readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = "/test_cases";
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async validateOnPage(): Promise<void> {
    await expect(this.page).toHaveURL(this.url);
  }
}
