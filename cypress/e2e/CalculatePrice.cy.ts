import { read, utils } from "xlsx";

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

    it("should export prices to XLSX when export button is clicked", () => {
        cy.visit("/#/calculate-price");

        cy.get("#thickness").type("100");
        cy.get("#width").type("200");
        cy.get("#length").type("300");
        cy.get("#pricePerKilo").type("50");

        cy.get("#submit-button").click();

        cy.get("#export-button").click();

        const downloadFolder = Cypress.config("downloadsFolder");
        cy.readFile(`${downloadFolder}/precos.xlsx`, "binary").then(
            (fileContent) => {
                const workbook = read(fileContent, { type: "binary" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const data: string[][] = utils.sheet_to_json(worksheet, {
                    header: 1,
                });

                expect(data[0][0]).to.equal("Espessura (mm)");
                expect(data[0][1]).to.equal("Largura");
                expect(data[0][2]).to.equal("Comprimento");
                expect(data[0][3]).to.equal("Preco por Kilo");
                expect(data[0][4]).to.equal("Peso (kg)");
                expect(data[0][5]).to.equal("Preco");

                expect(data[1][0]).to.equal(100);
                expect(data[1][1]).to.equal(200);
                expect(data[1][2]).to.equal(300);
                expect(data[1][3]).to.equal("50");
                expect(data[1][4]).to.equal("16.26");
                expect(data[1][5]).to.equal("813.00");
            }
        );
    });

    it("should show error message when export button is clicked but there are no prices", () => {
        cy.visit("/#/calculate-price");

        cy.get("#export-button").click();

        cy.getToastByText(
            "É necessário adicionar um preço de barra chata antes de exportar"
        ).should("exist");
    });
});
