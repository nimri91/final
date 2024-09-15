import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";
import TagManagementLocators from "../../e2e/locators/tagManagementLocators";
import TagManagementPO from "../../e2e/pageobjects/tagManagementPO";
import tagManagementModel from "../../e2e/models/tagManagementModel";

Then("User should see a list of existing tags", () => {
    TagManagementPO.getInstance().checkListVisability();
});

Then("User click on new tag link", () => {
    TagManagementPO.getInstance().clickTagLink();
});

Then("User enter {string} as tag name", (name: string) => {
    TagManagementPO.getInstance().fillTagName(name);
});

Then("User click on create button", () => {
    TagManagementPO.getInstance().clickCreateBtn();
});

Then("Created successfully flash message should appear", () => {
    TagManagementPO.getInstance().checkFlashMessage();
});

Then("User delete the created tag", () => {
    TagManagementPO.getInstance().clickDestroyTag();
});