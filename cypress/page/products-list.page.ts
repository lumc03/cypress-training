class ProductListPage {
    private tshirtBuy: string;
    private checkoutBtn: string

    constructor() {
        this.tshirtBuy = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.checkoutBtn = "[style*='display: block;'] .button-container > a";
    }

    public addToCart(): void {
        cy.get(this.tshirtBuy).click()
    }

    public goToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { ProductListPage }
