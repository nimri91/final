import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthenticationLocators from "../../e2e/locators/authenticationLocators";
import AuthenticationModel from "../../e2e/models/authenticationModel";
import AuthenticationPO from "../../e2e/pageobjects/authenticationPO";


Given("User navigate to the login page", () => {
    AuthenticationPO.getInstance().navigateToLoginPage();
});

When("User enter {string} as the email", (email: string) => {
    AuthenticationPO.getInstance().fillEmail(email);
});

When("User enter {string} as the password", (password: string) => {
    AuthenticationPO.getInstance().fillPassword(password);
});

When("User click on the login button", () => {
    AuthenticationPO.getInstance().clickLoginBtn();
});

Then("User should redirect to the dashboard page", () => {
    AuthenticationPO.getInstance().checkDashboard();
})

Then("User should be redirected to the login page", () => {
    AuthenticationPO.getInstance().checkFalseAlert();
})