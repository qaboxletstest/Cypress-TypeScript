declare namespace Cypress {

    interface Chainable {
        /**
         * Login to the website.
         *
         * @see https://www.youtube.com/c/qaboxletstest/playlists
         * @example
         *    cy.login('email', 'password').click()          // Click on button
         */
        login(email: string, password: string): void
    }

}