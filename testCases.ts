import { test, expect } from "@playwright/test";
import { CatalogPage } from "../pages/catalogPage";
import { BasketPage } from "../pages/basketPage";
import { CheckoutPage } from "../pages/checkoutPage";

test("Add item to basket and verify", async ({ page }) => {
    const catalog = new CatalogPage(page);
    const basket = new BasketPage(page);

    await catalog.goTo();
    await catalog.addItemToBasket();
    
    await basket.goTo();
    const itemCount = await basket.getBasketItemCount();
    
    expect(itemCount).toBe(1);
});

test("Remove item from basket and check inventory", async ({ page }) => {
    const basket = new BasketPage(page);

    await basket.goTo();
    await basket.removeItem();

    const itemCount = await basket.getBasketItemCount();
    expect(itemCount).toBe(0);

    const inventoryCount = await basket.getInventoryCount();
    expect(inventoryCount).toBe("10");  // Example inventory value after restocking
});

test("Checkout basket and finish order", async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.goTo();
    await checkout.completeCheckout();

    const successMsg = await checkout.getSuccessMessage();
    expect(successMsg).toContain("Order completed successfully");
});
