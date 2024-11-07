import registrationPage from "./registrationPage";

describe("User  Registration Test", () => {
  it("Check the sucessfull sign In", () => {
    registrationPage.visit();
    registrationPage.clickLogin();
    registrationPage.clickRegister();
    registrationPage.fillForm();
    registrationPage.submit();
    registrationPage.verifySuccessMessage();
    registrationPage.clickDropdown();
    registrationPage.clickSignin();
    registrationPage.signIn();
    registrationPage.checkSuccessfullSignin();
  });
});
