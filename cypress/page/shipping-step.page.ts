class ShippingPage {

    private checkoutBtn: string;
    private termsBtn: string;

    constructor() {
        this.checkoutBtn = "[name='processCarrier']";
        this.termsBtn = "#cgv";
    }

    public acceptTermsOfService(): void {
        cy.get(this.termsBtn).click()
    }
    public proceedToCheckout(): void {
        cy.get(this.checkoutBtn).click()
    }
}

export { ShippingPage }
