class AdressPage {

    private checkoutBtn: string

    constructor() {
        this.checkoutBtn = "[name='processAddress']";
    }


    public proceedToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { AdressPage }
