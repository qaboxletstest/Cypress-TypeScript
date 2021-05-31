describe('Login Test Suite', function () {

    const login = (email: string, password: string): void => {
        cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }

    it.skip('Login Test Case via JSON - Data Driven', function () {
        cy.fixture("loginData.json").then((loginData) => {
            login(loginData.username, loginData.password)
        })
        cy.contains("No articles are here... yet.").should("be.visible");
    });

    it('Login - Custom Command', () => {
        cy.login("qaboxletstest@gmail.com", "123password123")
    });

    it('File Upload - Plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("loginData.json")
        cy.get("#file-submit").click()
        cy.get("#uploaded-files").should('contain.text', "loginData.json")
    });

    it("CY Task - TypeScript", () => {
        cy.task("noparam").then((txt) => {
            expect(txt).to.eq("OK - This is a failing Test Case");
        });
    });

});