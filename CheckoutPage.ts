import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    private page: Page;
    private checkoutButton: Locator;
    private successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.successMessage = page.locator('[data-test="order-success"]');
    }

    async goTo() {
        await this.page.goto("https://example.com/checkout");
    }

    async completeCheckout() {
        await this.checkoutButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}
