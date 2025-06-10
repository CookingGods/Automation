import { SignUpPage } from "../page-objects/signup.page";
import { AccountCreatedPage } from "../page-objects/account-created.page";
import { FrontPage } from "../page-objects/front.page";
import { DeleteAccountPage } from "../page-objects/delete.account.page";
import { DataFactory } from "../utils/data.factory";
import { test as base, expect } from "@playwright/test";
import { TestPage } from "../page-objects/test.page";
import { LoginPage } from "../page-objects/login.page";
import { ContactPage } from "../page-objects/contact.page";
import { ProductsPage } from "../page-objects/products.page";
import { ProductDetailsPage } from "../page-objects/product.details.page";
import { ViewCartPage } from "../page-objects/view-cart.page";
import { CheckOutPage } from "../page-objects/checkout.page";
import { PaymentPage } from "../page-objects/payment.page";
import { CategoryProductsPage } from "../page-objects/category-products.page";
import { BrandProductPoloPage } from "../page-objects/brand-product-polo.page";

type pageObject = {
  signUpPage: SignUpPage;
  accountCreatedPage: AccountCreatedPage;
  frontPage: FrontPage;
  deleteAccountPage: DeleteAccountPage;
  testPage: TestPage;
  loginPage: LoginPage;
  contactPage: ContactPage;
  productsPage: ProductsPage;
  productDetailsPage: ProductDetailsPage;
  viewCartPage: ViewCartPage;
  checkOutPage: CheckOutPage;
  paymentPage: PaymentPage;
  dataFactory: DataFactory;
  categoryProductsPage: CategoryProductsPage;
  brandProductPoloPage: BrandProductPoloPage;
};
const test = base.extend<pageObject>({
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  accountCreatedPage: async ({ page }, use) => {
    await use(new AccountCreatedPage(page));
  },
  frontPage: async ({ page }, use) => {
    await use(new FrontPage(page));
  },
  deleteAccountPage: async ({ page }, use) => {
    await use(new DeleteAccountPage(page));
  },
  testPage: async ({ page }, use) => {
    await use(new TestPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dataFactory: async ({}, use) => {
    await use(new DataFactory());
  },
  viewCartPage: async ({ page }, use) => {
    await use(new ViewCartPage(page));
  },
  checkOutPage: async ({ page }, use) => {
    await use(new CheckOutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  categoryProductsPage: async ({ page }, use) => {
    await use(new CategoryProductsPage(page));
  },
  brandProductPoloPage: async ({ page }, use) => {
    await use(new BrandProductPoloPage(page));
  },
});

export { test, expect };
