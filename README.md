# 🛒 Playwright Test Automation for Shopping Website  

This project is an **automated test suite** for a simple shopping website using **Playwright** with the **Page Object Model (POM)** pattern. It covers key user interactions such as adding items to the basket, removing them, and completing the checkout process.

## 🚀 Features  
- **Page Object Model (POM)** for better test structure and maintainability.  
- **Three test cases** covering core shopping functionalities.  
- **Playwright + TypeScript** for modern and efficient testing.  
- **Assertions using Playwright’s built-in expect library** for robust validation.  
- **Reusable methods** for better test scalability.  

## 📂 Project Structure  

📦 playwright-shopping-tests
┣ 📂 pages
┃ ┣ 📜 catalogPage.ts      # Page Object for catalog interactions
┃ ┣ 📜 basketPage.ts       # Page Object for basket interactions
┃ ┗ 📜 checkoutPage.ts     # Page Object for checkout interactions
┣ 📂 tests
┃ ┗ 📜 shopping.test.ts    # Test cases using the POM structure
┣ 📜 README.md             # Project documentation
┣ 📜 playwright.config.ts  # Playwright test configuration
┗ 📜 package.json          # Dependencies and scripts


Test Scenarios

✅ 1. Add Item to Basket and Verify
	1.	Navigate to the Catalog Page.
	2.	Add an item to the basket.
	3.	Navigate to the Basket Page and verify the item appears.

✅ 2. Remove Item from Basket and Check Inventory
	1.	Navigate to the Basket Page.
	2.	Remove an item from the basket.
	3.	Verify that the basket is empty.
	4.	Check if the inventory count is restored.

✅ 3. Checkout Basket and Finish Order
	1.	Navigate to the Checkout Page.
	2.	Complete the checkout process.
	3.	Verify that the order confirmation message appears.
