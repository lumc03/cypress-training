class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string;
    private dressesMenu: string;

    constructor() {
        this.tShirtMenu = "li:nth-child(3) >[title='T-shirts']";
        this.menuContentPageURL = "http://automationpractice.com/";
        this.dressesMenu =".sf-menu > li:nth-child(2) [title=Dresses]";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressMenu(): void {
        cy.get(this.dressesMenu).click();
    }
}

export { MenuContentPage }
