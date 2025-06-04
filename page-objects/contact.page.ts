import { expect, Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import path from "path";

export class ContactPage {
  private readonly page: Page;

  private readonly nameTextbox: Locator;
  private readonly emailTextbox: Locator;
  private readonly subjextTextbox: Locator;
  private readonly messageTextbox: Locator;
  private readonly submitButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.nameTextbox = this.page.getByRole("textbox", { name: "Name" });
    this.emailTextbox = this.page.getByRole("textbox", {
      name: "Email",
      exact: true,
    });
    this.subjextTextbox = this.page.getByRole("textbox", { name: "Subject" });
    this.messageTextbox = this.page.getByRole("textbox", {
      name: "Your Message Here",
    });
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
  }

  async fillNameTextbox(fullName: string): Promise<void> {
    await this.nameTextbox.fill(fullName);
  }

  async fillEmailTextbox(email: string): Promise<void> {
    await this.emailTextbox.fill(email);
  }

  async fillSubjectTextbox(sentences: string): Promise<void> {
    await this.subjextTextbox.fill(sentences);
  }

  async fillMessageTextbox(message: string): Promise<void> {
    await this.messageTextbox.fill(message);
  }

  async clickSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }

  async fillBoxes(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<void> {
    await this.fillNameTextbox(name);
    await this.fillEmailTextbox(email);
    await this.fillSubjectTextbox(subject);
    await this.fillMessageTextbox(message);
    const filePath = path.resolve(
      "C:/Users/Administrator/OneDrive/Desktop/Automation/image0.jpg"
    ); // talk to dom
    await this.page.setInputFiles('input[type="file"]', filePath);
    await this.clickSubmitButton();
  }
}
