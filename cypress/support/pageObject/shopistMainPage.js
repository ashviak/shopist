// Selector variables
const menu = "div[class='hamburger']";
const chairMenuOption = "div[class='navbar-small-menu'] a[href*='chairs']";
const cartMenuOption = "div[class='navbar-small-menu'] a[href*='cart']";

// Validations/Re-Usable methods
class ShopistMainPage {

    getMenuList() {
        return cy.get(menu).click()
    }
    clickOnChairMenu() {
        return cy.get(chairMenuOption).click()
    }
    clickOnCartMenu() {
        return cy.get(cartMenuOption).click()
    }
}

export default ShopistMainPage;
