class Login {
    private email: string = "input[type=email]";
    private password: string = "input[type=password]";
    private submit: string = "button[type=submit]";

    get Email() {
        return cy.get(this.email);
    }

    get Password() {
        return cy.get(this.password);
    }

    get SubmitButton() {
        return cy.get(this.submit);
    }
}

export const loginObj = new Login();