describe("Authentication", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  // The user can log in with the login form with valid credentials
  it("shows a register form", () => {
    cy.get("form#registerForm.modal-content").should("be.visible");
  });

  it("shows a login form when the login button is clicked", () => {
    cy.showLoginForm();
  });

  it("logs in the user with valid credentials", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });

  // The user cannot submit the login form with invalid credentials and is shown a message
  it("shows an error messsage when submitting the form with an invalid user", () => {
    cy.showLoginForm();
    cy.loginWithInvalidUser();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contain(
        "Either your username was not found or your password is incorrect",
      );
    });
  });

  // The user can log out with the logout button
  it("logs the user out with the logout button", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
