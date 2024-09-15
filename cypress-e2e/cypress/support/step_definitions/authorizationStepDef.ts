import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";
import TagManagementLocators from "../../e2e/locators/tagManagementLocators";


When("User click on manage tags link", () => {
    AuthorizationPO.getInstance().clickLManageTagsLink();
});

Then("User should be redirected to the tag management page", () => {
    AuthorizationPO.getInstance().checktagPage();
});

Then("User should not see the Manage Tags link", () => {
    AuthorizationPO.getInstance().checkManagetagVisability();
});