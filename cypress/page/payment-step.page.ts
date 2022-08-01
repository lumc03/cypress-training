class PaymentPage {

    private bankwireBtn: string;
    private confirmBtn: string;
    private orderComplete: string;

    constructor() {
        this.bankwireBtn = ".bankwire";
        this.confirmBtn = "#cart_navigation > button";
        this.orderComplete = ".cheque-indent > strong";
    }

    public bankwirePayment(): void {
        cy.get(this.bankwireBtn).click()
    }
    public confirmOrder(): void {
        cy.get(this.confirmBtn).click()
    }

    public verificationStep(): void {
        cy.get(this.orderComplete).should(
            "have.text",
            "Your order on My Store is complete.",
        );

    }
}

export { PaymentPage }
