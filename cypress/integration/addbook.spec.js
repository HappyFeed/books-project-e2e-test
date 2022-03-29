const { faker } = require('@faker-js/faker');
const { assert } = require('chai');
const chai = require('chai');


let bookName = faker.animal.type();
let bookAuthor = faker.name.findName();

describe('Given I want to register a new book', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');

        cy.contains('Add').click();
        cy.get('#name').click()
        cy.get('#name').type(bookName);
        cy.get('#author').type(bookAuthor);

        // Act
        cy.contains('Save').click();

        cy.contains('10 / page').click();
        cy.get('[title="50 / page"]').click();
    })

    it ('The book should be visible in the list of books', () => {
        //Assert
        
        cy.contains(bookAuthor).should('exist')

    })

})

/*describe('Given I want to register a new book with an empty name', () => {
    before(() => {
        // Arrange
        cy.visit('http://localhost:4200/dashboard');


    })

    it ('The book should not be visible in the list of books', () => {

            
        
        cy.contains('Add').click();
        cy.get('#name').click()
        cy.get('#name').type('').on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return true
        })/*catch((err) => {
            cy.console.log("error caught");
            //Assert
            assert.isTrue()

        })
        cy.get('#author').type(bookAuthor);
        
        
    })

})*/