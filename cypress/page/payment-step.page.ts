class PaymentPage {

    private bankwireBtn: string;
    private confirmBtn: string;
    private orderComplete: string;

    constructor() {
        this.bankwireBtn = ".bankwire";
        this.confirmBtn = "#cart_navigation > button";
        this.orderComplete = ".cheque-indent > strong";
    }

    public validateOrderComplete(message: string): void {
        cy.get(this.bankwireBtn).click();
        cy.get(this.confirmBtn).click();
        cy.get(this.orderComplete).should(
            "have.text", message
        );
    }

}

export { PaymentPage }
