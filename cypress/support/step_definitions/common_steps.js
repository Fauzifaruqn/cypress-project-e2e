/// <reference types="cypress" />

import {
    Given,
    When,
    Then,
    Before,
    And,
  } from "cypress-cucumber-preprocessor/steps";

import MailPage from "../page/mail_page.js";
import SignUpPage from "../page/signup_page.js";

const mail = new MailPage();
const signup = new SignUpPage();

Given('user get email from email temporary website', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      
    cy.visit('https://mail.tm/en/');
    mail.elements.accountManu().should('be.visible').click()
    mail.elements.emailtext().then(($el) => {
        cy.wrap($el).invoke('text').then((textValue) => {
          cy.wrap(textValue.trim()).as('textElementValue');
        });
    });
})

When(/^user register autobahn security with valid email and "(.*)" password$/, (typePassword) => {
    cy.visit('/signup');
    
    cy.contains('Start a free 14-day trial')
    cy.wait(3000)
    cy.get('@textElementValue').then((value) => {
        signup.fillInFormRegister(value,typePassword)
        
    });
    cy.wait(3000)
})

And('the user completes data in the personal data form', () => {
    signup.fillInFormDetail()
})

And('and the user needs to verify the account via email', () => {
    cy.visit('https://mail.tm/en/');
    mail.elements.latestMsg().should('be.visible').click()
    cy.wait(6000)

    cy.get('iframe:eq(1)').then(($iframe) => {
        const iframe = $iframe.get(0).contentDocument;
        cy.log(iframe)
        cy.wrap(iframe.body).find("a[href*='autobahn.security/login']").then(($el) => {
          // Perform actions on the element
          cy.wrap($el).should('be.visible').click()

        });
    });
})


Then('the user should be able to successfully login using the account that was created', () => {
    cy.visit('https://autobahn.security/home')

    cy.get('@textElementValue').then((value) => {
        signup.elements.emailField().should('be.visible').type(value)
        
    });
    cy.get('.password-input > .input-set > .form-control').should('be.visible').type('StrongPassword!233')
    cy.get('.custom-button').should('be.visible').click()
    cy.wait(10000)
    cy.get('#cyber-fitness').contains('Cyber Fitness')
})