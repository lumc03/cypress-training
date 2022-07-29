class ShopingCartPage {
    private checkoutBtn: string

    constructor() {
        this.checkoutBtn = ".cart_navigation span";
    }


    public proceedToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { ShopingCartPage }
