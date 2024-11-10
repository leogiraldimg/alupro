/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getToast(): Chainable<Element>;
        getToastByText(text: string): Chainable<Element>;
    }
}
