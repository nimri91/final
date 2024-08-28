
import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import WelcomeLocators from "../../e2e/locators/WelcomeLocators";
import WelcomePO from "../../e2e/pageobjects/WelcomePO";

Given("User navigates to public marketing page", () => {
    WelcomePO.getInstance().navigate();
});

Then("I should see welcome message", () => {
    cy.get(WelcomeLocators.WELCOME_HEADER).should('be.visible').click();
});