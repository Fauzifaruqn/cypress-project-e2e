class MailPage {
    elements = {
       accountManu: () => cy.get('#accounts-menu'),
       emailtext: () => cy.xpath("//div[contains(@id,'accounts-list')]/descendant::p[contains(@class,'font-medium')]"),
       latestMsg: () => cy.xpath("(//a[contains(@href,'/en/view/')])[1]"),
       btnVerifyAccount: () => cy.xpath("//a[contains(@href,'autobahn.security/login')]")

    };
}

export default MailPage;