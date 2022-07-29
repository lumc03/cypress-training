class LoginPage {
    private fieldEmail: string;
    private fieldPasswd: string;
    private email: string;
    private passwd: string;
    private btnLogin: string;

    constructor() {
        this.fieldEmail = "#email";
        this.fieldPasswd = "#passwd";
        this.email = "aperdomobo@gmail.com";
        this.passwd = "WorkshopProtractor";
        this.btnLogin = "#SubmitLogin";
    }

    public typeEmail(): void {
        cy.get(this.fieldEmail).type(this.email);
    }

    public typePasswd(): void {
        cy.get(this.fieldPasswd).type(this.passwd);
    }
    
    public submitLogin(): void {
        cy.get(this.btnLogin).click();
    }
}

export { LoginPage }
