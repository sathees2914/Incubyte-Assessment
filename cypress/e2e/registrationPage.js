// registrationPage.js
class RegistrationPage {
  visit() {
    cy.visit("https://magento.softwaretestingboard.com/");
  }

  clickLogin() {
    cy.get(".panel > .header > .authorization-link > a").click();
  }

  clickRegister() {
    cy.get(
      ".login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action"
    ).click();
  }

  clickDropdown() {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.wait(1000);
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"
    ).click();
  }

  clickSignin() {
    cy.get(".panel > .header > .authorization-link > a").click();
  }

  fillForm() {
    cy.get("#firstname").type(Cypress.env("firstname"));
    cy.get("#lastname").type(Cypress.env("lastname"));
    cy.get("#email_address").type(Cypress.env("email"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#password-confirmation").type(Cypress.env("password"));
  }

  submit() {
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  }

  verifySuccessMessage() {
    cy.get(".message-success > div").should(
      "have.text",
      "Thank you for registering with Main Website Store."
    );
  }

  signIn() {
    cy.get("#email").type(Cypress.env("email"));
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type(Cypress.env("password"));
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
    ).click();
  }
  invalidsignIn() {
    cy.get("#email").type(Cypress.env("wrongemail"));
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type(Cypress.env("wrongpassword"));
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
    ).click();
  }

  checkSuccessfullSignin() {
    cy.get(":nth-child(2) > .greet > .logged-in").should(
      "have.text",
      Cypress.env("successfulword")
    );
  }
}

export default new RegistrationPage();
