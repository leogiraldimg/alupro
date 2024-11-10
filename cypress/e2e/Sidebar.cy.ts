describe("Sidebar::e2e", () => {
    it("should redirect to /home when Home is clicked", () => {
        cy.visit("/#/");
        cy.get("a").contains("Home").click();
        cy.url().should("include", "/#/");
    });

    it("should redirect to /calculate-price when Calculo preço chato is clicked", () => {
        cy.visit("/#/");
        cy.get("a").contains("Calculo preço chato").click();
        cy.url().should("include", "/calculate-price");
    });
});
