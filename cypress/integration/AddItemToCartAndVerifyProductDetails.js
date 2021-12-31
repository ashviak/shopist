/// <reference types= "Cypress" />

// Imports
import ShopistCartPage from '../support/pageObject/shopistCartPage';
import ShopistChairsProductPage from '../support/pageObject/shopistChairsProductPage';
import ShopistMainPage from '../support/pageObject/shopistMainPage';

// Instances
const shopistCartPage = new ShopistCartPage();
const shopistChairsProductPage = new ShopistChairsProductPage();
const shopistMainPage = new ShopistMainPage();

// Test Case - To verify the item name, price and invalid discount code error message
describe("Test Case - To verify the item name, item price and invalid discount code error message", function () {
    before(function () {
        cy.clearCookies()
    })
    it('Step [1]: Visit Shopify Website', function () {
        cy.visit(Cypress.env("url"))
        cy.log("Website launched successfully")
    });
    it('Step [2]: Navigate to Chair Product Page', function () {
        shopistMainPage.getMenuList()
        shopistMainPage.clickOnChairMenu()
    });
    it('Step [3]: Select product and Navigate to cart', function () {
        shopistChairsProductPage.selectProduct()
        shopistMainPage.getMenuList()
        shopistMainPage.clickOnCartMenu()
    });
    it('Step [4]: Verify item and price in Cart', function () {
        shopistChairsProductPage.performValidationOnProductName()
        shopistChairsProductPage.performValidationOnProductPrice()
    });
    it('Step [5]: Enter Discount Code', function () {
        shopistCartPage.enterDiscountCode()
        shopistCartPage.clickOnApplyButton()
    });
    it('Step [6]: Get and Verify the Error message', function () {
        shopistCartPage.getDiscountErrorMessage()
        shopistCartPage.performValidationOnDiscountErrorMessage()
    });
    it('Step [7]: Check Out the product', function () {
        shopistCartPage.clickOnCheckOutButton()
    });

})