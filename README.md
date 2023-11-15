# UI Automation
### Table of Contents
- Installation
- Implement Cucumber
- Implement Page Object Model
- Implement Generate Date with Faker JS
- Implement Cucumber Reporter
- Run Ui Automation


#### 1. Installation
To install Cypress with Yarn, you can use the following command in your terminal or command prompt:

`
$ yarn add cypress --dev
`
To install the dependencies specified in a package.json file, you can use the following command in your terminal or command prompt:
`
yarn install
`
#### 2. Implement Cucumber

Cypress Cucumber is a tool that allows you to write your Cypress end-to-end tests using the Cucumber syntax. Cucumber is a popular tool for writing human-readable acceptance tests, and by using Cypress Cucumber, in this project use dependency "cypress-cucumber-preprocessor" , https://www.npmjs.com/package/cypress-cucumber-preprocessor

Example : 
```
Feature: Signup

    This is scenario about Signup autobahn security web application

    @user_signup_succesfully @positve_case
    Scenario: as a user should be able to register successfully
      Given user get email from email temporary website
      When user register autobahn security with valid email and "Strong" password
      And the user completes data in the personal data form
      And and the user needs to verify the account via email
      Then the user should be able to successfully login using the account that was created
```

#### 3. Implement Page Object Model
Page Object Model (POM) is a design pattern that is commonly used in software testing to represent a page or a section of a page in a web application. The idea behind POM is to encapsulate the details of the page or section into an object, making the code easier to maintain

Example

* Signup_page.js
```
class SignUpPage {
    elements = {
        emailField: () => cy.xpath("//input[contains(@name,'email')]"),
        passwordField: () => cy.xpath("//input[contains(@name,'password')]"),
        btnSignup: () => cy.xpath("//a[contains(@class,'btn primary button-large')]"),
    }
    fillInFormRegister(email,typePassword) {
        this.elements.emailField().should('be.visible').type(email)
        this.elements.passwordField().should('be.visible').type('StrongPassword!233')
        cy.get('.input-set.active').contains(typePassword)
        this.elements.btnSignup().should('be.visible').click()
    } 
  }

export default SignUpPage
```

In this example, we have a SignUpPage class that encapsulates the details of the register page in our application. The class provides methods to interact with the page, such as visiting the page, filling in the username and password fields, and submitting the form.

Here's an example of how we can use the SignUpPage in our tests:

```
When(/^user register autobahn security with valid email and "(.*)" password$/, (typePassword) => {
    cy.visit('/signup');
    
    cy.contains('Start a free 14-day trial')
    cy.wait(3000)
    cy.get('@textElementValue').then((value) => {
        signup.fillInFormRegister(value,typePassword)
        
    });
    cy.wait(3000)
})
```

#### 4. Implement Generate Data with Faker JS
Faker.js is a JavaScript library that generates fake data for you, such as names, addresses, dates, and more. It can be useful when you need to generate test data for your application

example :
* commands.js
```
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
```
Here's an example of how we can use faker in our tests:

```
    fillInFormDetail() {
        cy.generateDataPersonal()
        cy.wait(2000)
        cy.fixture('data/personal_info.json').then((testdata) => {
            this.elements.firstName().type(testdata['user'][0].first_name)
            this.elements.lastName().type(testdata['user'][0].last_name)
            this.elements.industry().should('be.visible').click()
            this.elements.firstIndustry().should('be.visible').click()
            this.elements.phoneNumberArrow().click()
            this.elements.indonesiaCodeNumber().scrollIntoView().click()
            this.elements.phoneNumberField().type(testdata['user'][0].phone_number)
            this.elements.btnStart().should('be.visible').click()

            cy.wait(3000)
            cy.get('#create-new-account-btn > .btn').should('be.visible').click()
        })
    }
```


#### 5. Implement Cucumber Reporter

multiple-cucumber-html-reporter is a library for generating HTML reports for CucumberJS tests. It aggregates the results of multiple CucumberJS test runs into a single HTML report

`node cypress/html-reporter.js' or `npm run make-report`



#### 6. Running Cypress

you can run your Cypress application by using the following command:
`npx cypress open`
This command will open the Cypress Test Runner in a new window, where you can select and run individual tests. The Cypress Test Runner provides a browser-based interface for running and debugging your tests, and it displays the results of the tests in real-time.

You can also run your Cypress tests from the command line using the following command:
`npx cypress run`

