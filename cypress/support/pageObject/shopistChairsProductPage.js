import ShopistCartPage from "./shopistCartPage";

// Selector variables
const productContainer = "div[class='product-card-container']";
const itemName = "div[class='description'] div:nth-child(1)";
const itemPrice = "div[class='description'] div:nth-child(2)";
const itemAvailabilityStatus = "div[class*='status']";
const itemImage = "div[class='product-card'] img";
const addToCartBtn = "div[class='purchase-button']";
const itemNameOnViewPage = "div[class= 'description'] div div:nth-child(1)"
const itemPriceOnViewPage = "div[class= 'description'] div div:nth-child(2)"

// variables
var proName;
var proPrice;
var proStatus;
var productName;
var productPrice;
var name;
var price;

//
const shopistCartPage = new ShopistCartPage();

// Validations/Re-Usable methods
class ShopistChairsProductPage extends ShopistCartPage {

    getProductContainer() {
        return cy.get(productContainer)
    }
    getProductName() {
        return cy.get(itemName)
    }
    getProductPrice() {
        return cy.get(itemPrice)
    }
    getProductNameOnViewItemPage() {
        return cy.get(itemNameOnViewPage).then((pName) => {
            productName = pName.text()
            cy.log("Product Name in View Product page: " + productName)
        })
    }
    getProductPriceOnViewItemPage() {
        return cy.get(itemPriceOnViewPage).then((pPrice) => {
            productPrice = pPrice.text()
            cy.log("Product price in View Product page: " + productPrice)
        })
    }
    getProductAvailabilityStatus() {
        return cy.get(itemAvailabilityStatus)
    }
    clickOnProduct() {
        return cy.get(itemImage)
    }
    clickOnAddToCartButton() {
        return cy.get(addToCartBtn)
    }

    selectProduct() {
        this.getProductContainer().each(($el, index, $list) => {
            proName = $el.find(itemName).text()
            proPrice = $el.find(itemPrice).text()
            proStatus = $el.find(itemAvailabilityStatus).text()
            cy.log("Product Name: " + proName + ", product Status: " + proStatus)
            if (proName.includes("White Shell Chair")) {
                if (proStatus.includes("In stock")) {
                    cy.log("Product Name: " + proName + ", product Status: " + proStatus)
                    cy.log("Status availability: " + proStatus)
                    this.clickOnProduct().eq(index).click()
                    this.getProductNameOnViewItemPage()
                    this.getProductPriceOnViewItemPage()
                    this.clickOnAddToCartButton().click()
                } else {
                    cy.log("Out of Stock!!!")
                }
            }
            else {
                cy.log("This is not the Product you are looking for")
            }
        })
    }
    performValidationOnProductName() {
        shopistCartPage.getProductNameOnCartPage().then((nameOnCart) => {
            name = nameOnCart.text().split("(")[0].trim()
            expect(productName, 'Product you added and in cart has same Name').includes(name)
        })
    }
    performValidationOnProductPrice() {
        shopistCartPage.getProductPriceOnCartPage().then((priceOnCart) => {
            price = priceOnCart.text().split("(")[1].split(")")[0]
            expect(productPrice, 'Product you added and in cart has same price').includes(price)
        })
    }
}
export default ShopistChairsProductPage;


