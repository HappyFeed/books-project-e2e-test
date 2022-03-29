const { faker } = require('@faker-js/faker');

let bookAuthor = faker.commerce.product();

describe('Given I want to register a new book', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');

        cy.get('[data-icon="edit"]').eq(0).click()
        cy.get('#author').click()
        cy.get('#author').clear()
        cy.get('#author').type(bookAuthor)

        // Act
        cy.contains('Save').click();

    })

    it ('The book should be edited and be visible in the list of books', () => {
        //Assert
        
        cy.contains(bookAuthor).should('exist')

    })


})