import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import AuthorizationLocators from "../../e2e/locators/authorizationLocators";
import AuthorizationPO from "../../e2e/pageobjects/authorizationPO";
import TagManagementLocators from "../../e2e/locators/tagManagementLocators";
import TagManagementPO from "../../e2e/pageobjects/tagManagementPO";
import tagManagementModel from "../../e2e/models/tagManagementModel";
import BlogManagementLocators from "../../e2e/locators/blogManagementLocators";
import BlogManagementPO from "../../e2e/pageobjects/blogManagementPO";



Then("User click the create blog link", () => {
    BlogManagementPO.getInstance().clickBlogLink();
});

Then("User click the new blog link", () => {
    BlogManagementPO.getInstance().clickNewBlog();
});

Then("User fill {string} as the blog title", (name: string) => {
    BlogManagementPO.getInstance().fillBlogTitle(name);
});

Then("User fill {string} as the blog body", (name: string) => {
    BlogManagementPO.getInstance().fillBlogBody(name);
});

Then("User click on funny checkbox", () => {
    BlogManagementPO.getInstance().clickFunny();
});

Then("User click on professional checkbox", () => {
    BlogManagementPO.getInstance().clickProfessional();
});

Then("User click the create blog button", () => {
    BlogManagementPO.getInstance().clickSubmitBlog();
});

Then("User should see a success message Blog created successfully", () => {
    BlogManagementPO.getInstance().checkBlogFlashMessageSuccessfully();
});

Then("User should see an error message Title can't be blank", () => {
    BlogManagementPO.getInstance().checkBlogFlashMessageFailer();
});

Then("User click on show this blog link", () => {
    BlogManagementPO.getInstance().clickShowThisBlog();
});

Then("User click on edit this blog link", () => {
    BlogManagementPO.getInstance().clickEditThisBlog();
});

Then("User click on distroy this blog", () => {
    BlogManagementPO.getInstance().clickDistroyThisBlog();
});

Then("User should see a success message Blog updated successfully", () => {
    BlogManagementPO.getInstance().checkBlogFlashMessageUpdated();
});

Then("User should not be able to edit the blog", () => {
    BlogManagementPO.getInstance().checkEditLinkVisability();
});

Then("User should see a success message Blog deleted successfully", () => {
    BlogManagementPO.getInstance().checkBlogFlashMessageDeleted();
});

Then("User should not be able to delete the blog", () => {
    BlogManagementPO.getInstance().checkDeleteBtnVisability();
});