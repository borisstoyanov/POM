import { Page, Locator } from "@playwright/test";

export class CatalogPage {
    private page: Page;
    private addToBasketButton: Locator;
    private basketCounter: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToBasketButton = page.locator('[data-test="add-to-basket"]'); 
        this.basketCounter = page.locator('[data-test="basket-count"]');
    }

    async goTo() {
        await this.page.goto("https://example.com/catalog");
    }

    async addItemToBasket() {
        await this.addToBasketButton.first().click();
    }

    async getBasketItemCount() {
        return await this.basketCounter.textContent();
    }
}
