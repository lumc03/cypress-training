class LoginPage {
    private fieldEmail: string;
    private fieldPasswd: string;
    private btnLogin: string;

    constructor() {
        this.fieldEmail = "#email";
        this.fieldPasswd = "#passwd";
        this.btnLogin = "#SubmitLogin";
    }

    public login(email:string, password:string): void {
        cy.get(this.fieldEmail).type(email);
        cy.get(this.fieldPasswd).type(password);
        cy.get(this.btnLogin).click();
    }

}

export { LoginPage }
