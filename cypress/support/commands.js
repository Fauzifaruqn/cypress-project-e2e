/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js


Cypress.Commands.add("generateDataPersonal", () => {
  const { faker } = require('@faker-js/faker');

  cy.writeFile('cypress/fixtures/data/personal_info.json', {
    'user': Cypress._.times(1, () => {
      return {
        'first_name': `${faker.name.firstName()}`,
        'last_name': `${faker.name.lastName()}`,
        'phone_number': `8${faker.random.numeric(8)}`
      }
    })
  })
})