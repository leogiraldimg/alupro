Cypress.Commands.add("getToast", () => {
    return cy.get(".Toastify__toast", { timeout: 10000 }).its("0");
});

Cypress.Commands.add("getToastByText", (text) => {
    return cy
        .get(".Toastify__toast", { timeout: 10000 })
        .contains(text)
        .its("0");
});
