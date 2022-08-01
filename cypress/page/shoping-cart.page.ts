class ShopingCartPage {
    private checkoutBtn: string

    constructor() {
        this.checkoutBtn = ".cart_navigation [title='Proceed to checkout']";
    }


    public proceedToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { ShopingCartPage }
