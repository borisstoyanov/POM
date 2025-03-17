import { Page, Locator } from "@playwright/test";

export class BasketPage {
    private page: Page;
    private basketItem: Locator;
    private removeButton: Locator;
    private inventoryCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basketItem = page.locator('[data-test="basket-item"]');
        this.removeButton = page.locator('[data-test="remove-item"]');
        this.inventoryCount = page.locator('[data-test="inventory-count"]');
    }

    async goTo() {
        await this.page.goto("https://example.com/basket");
    }

    async removeItem() {
        await this.removeButton.click();
    }

    async getBasketItemCount() {
        return await this.basketItem.count();
    }

    async getInventoryCount() {
        return await this.inventoryCount.textContent();
    }
}
