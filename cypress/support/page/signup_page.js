class SignUpPage {
    elements = {
        emailField: () => cy.xpath("//input[contains(@name,'email')]"),
        passwordField: () => cy.xpath("//input[contains(@name,'password')]"),
        btnSignup: () => cy.xpath("//a[contains(@class,'btn primary button-large')]"),
        firstName: () => cy.xpath("//input[contains(@name,'first-name')]"),
        lastName: () =>  cy.xpath("//input[contains(@name,'last-name')]"),
        industry: () => cy.xpath("//div[contains(@name,'industry')]"),
        firstIndustry: () => cy.xpath("(//div[contains(@name,'industry')]/following-sibling::div/div)[1]"),
        phoneNumberArrow: () => cy.xpath("//div[contains(@class,'iti__arrow')]"),
        listCountry: () => cy.xpath("//ul[contains(@id,'country-listbox')]"),
        indonesiaCodeNumber: () => cy.xpath("//li[contains(@data-dial-code,'62') and contains(@data-country-code,'id')]"),
        phoneNumberField: () => cy.xpath("//input[contains(@name,'phone-number')]"),
        btnStart: () => cy.xpath("//a[contains(@class,'btn primary button-large active')]/p[contains(text(),'Start using Autobahn')]"),
        btnSignupDisabled: () => cy.xpath("//div[contains(@class,'custom-button')]/descendant::a[contains(@class,'disabled')]")
    }
    fillInFormRegister(email,typePassword) {
        this.elements.emailField().should('be.visible').type(email)
        this.elements.passwordField().should('be.visible').type('StrongPassword!233')
        cy.get('.input-set.active').contains(typePassword)
        this.elements.btnSignup().should('be.visible').click()
    } 

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

    feedbackSuggestion(msg) {
        cy.xpath(`//div[contains(@class,'feedback-suggestion')]/descendant::ul/li[not(contains(@class,'is-fulfilled')) and normalize-space(.)='${msg}']`).should('be.visible')
    }

}

export default SignUpPage