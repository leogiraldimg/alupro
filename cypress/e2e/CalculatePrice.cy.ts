describe("CalculatePrice::e2e", () => {
    it("should calculate and register the total price", () => {
        cy.visit("/#/calculate-price");

        cy.get("#thickness").type("100");
        cy.get("#width").type("200");
        cy.get("#length").type("300");
        cy.get("#pricePerKilo").type("50");

        cy.get("#submit-button").click();

        cy.get("#price-table tbody tr").should("have.length", 1);
        cy.get("#price-table tbody tr").within(() => {
            cy.get("td").eq(0).should("contain", "100");
            cy.get("td").eq(1).should("contain", "200");
            cy.get("td").eq(2).should("contain", "300");
            cy.get("td").eq(3).should("contain", "R$ 50");
            cy.get("td").eq(4).should("contain", "16.26");
            cy.get("td").eq(5).should("contain", "R$ 813.00");
        });
    });

    it("should maintain the per kilo price input value after submitting", () => {
        cy.visit("/#/calculate-price");

        cy.get("#thickness").type("100");
        cy.get("#width").type("200");
        cy.get("#length").type("300");
        cy.get("#pricePerKilo").type("50");

        cy.get("#submit-button").click();

        cy.get("#pricePerKilo").should("have.value", "50");
    });

    it("should add multiple prices", () => {
        cy.visit("/#/calculate-price");

        cy.get("#thickness").type("100");
        cy.get("#width").type("200");
        cy.get("#length").type("300");
        cy.get("#pricePerKilo").type("50");

        cy.get("#submit-button").click();

        cy.get("#thickness").type("100");
        cy.get("#width").type("200");
        cy.get("#length").type("300");
        cy.get("#pricePerKilo").clear();
        cy.get("#pricePerKilo").type("50");

        cy.get("#submit-button").click();

        cy.get("#price-table tbody tr").should("have.length", 2);
        cy.get("#price-table tbody tr")
            .eq(0)
            .within(() => {
                cy.get("td").eq(0).should("contain", "100");
                cy.get("td").eq(1).should("contain", "200");
                cy.get("td").eq(2).should("contain", "300");
                cy.get("td").eq(3).should("contain", "R$ 50");
                cy.get("td").eq(4).should("contain", "16.26");
                cy.get("td").eq(5).should("contain", "R$ 813.00");
            });
        cy.get("#price-table tbody tr")
            .eq(1)
            .within(() => {
                cy.get("td").eq(0).should("contain", "100");
                cy.get("td").eq(1).should("contain", "200");
                cy.get("td").eq(2).should("contain", "300");
                cy.get("td").eq(3).should("contain", "R$ 50");
                cy.get("td").eq(4).should("contain", "16.26");
                cy.get("td").eq(5).should("contain", "R$ 813.00");
            });
    });
});
