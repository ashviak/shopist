// Selector Variables
const discountCode = "div[class='discount']";
const discountApplyBtn = "div[class='discount'] div";
const discountErrorMessage = "div[class='discount-toast']";
const productPriceonCart = "div[class='product-description'] div";
const productNameonCart = "div[class='product-description'] div";
const productDescription = "div[class='product-description'] div";
const checkOutBtn = "div[class='checkout']";
const continueShoppingBtn = "div[class='continue-shopping']";
const returnToPage = "div[class='modal-button']";

// Variables
const code = "HAPPYNEWYEAR";
const discountErrorMsg = "Coupon is invalid";

// Validations/Re-Usable methods
class ShopistCartPage {

    getProductDescription() {
        return cy.get(productDescription)
    }
    getProductNameOnCartPage() {
        return cy.get(productNameonCart)
    }
    getProductPriceOnCartPage() {
        return cy.get(productPriceonCart)
    }
    enterDiscountCode() {
        return cy.get(discountCode).type(code)
    }
    clickOnApplyButton() {
        return cy.get(discountApplyBtn).click()
    }
    clickOnCheckOutButton() {
        return cy.get(checkOutBtn).click()
    }
    clickOnContinueShopping() {
        return cy.get(continueShoppingBtn).click()
    }
    clickOnReturnToPage() {
        return cy.get(returnToPage).click()
    }
    getDiscountErrorMessage() {
        return cy.get(discountErrorMessage).then((message) => {
            const errorMessage = message.text()
            cy.log(errorMessage)
        })
    }
    performValidationOnDiscountErrorMessage() {
        this.getDiscountErrorMessage().then((message) => {
            const errorMessage = message.text()
            expect(errorMessage).to.be.equals(discountErrorMsg)
        })
    }
}

export default ShopistCartPage;
