class ProductListPage {
    private tshirtBuy: string;
    private checkoutBtn: string

    constructor() {
        this.tshirtBuy = ".button-container [title='Add to cart']";
        this.checkoutBtn = ".button-container [title='Proceed to checkout']";
    }

    public addToCart(): void {
        cy.get(this.tshirtBuy).click()
    }

    public goToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { ProductListPage }
