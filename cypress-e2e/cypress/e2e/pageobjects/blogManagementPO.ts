import WelcomeLocators from "../locators/WelcomeLocators";
import AuthenticationLocators from "../locators/authenticationLocators";
import AuthorizationLocators from "../locators/authorizationLocators";
import BlogManagementLocators from "../locators/blogManagementLocators";
import TagManagementLocators from "../locators/tagManagementLocators";

class BlogManagementPO {
    public static instance: BlogManagementPO;

    public static getInstance(): BlogManagementPO {
        if (this.instance == null) {
            this.instance = new BlogManagementPO();
        }
        return this.instance;
    }
    private constructor() { }

    public clickBlogLink() {
        cy.get(BlogManagementLocators.BLOGS_LINK).should('be.visible').click();
    }

    public clickNewBlog() {
        cy.get(BlogManagementLocators.NEW_BLOG).should('be.visible').click();
    }

    public fillBlogTitle (name:string){
        cy.sendTextToElement(BlogManagementLocators.BLOG_TITLE, name);
    }

    public fillBlogBody (name:string){
        cy.sendTextToElement(BlogManagementLocators.BLOG_BODY, name);
    }
    
    public clickFunny() {
        cy.get(BlogManagementLocators.FUNNY_CHECKBOX).should('be.visible').click();
    }

    public clickProfessional() {
        cy.get(BlogManagementLocators.PROFESSIONALCHECKBOX).should('be.visible').click();
    }

    public clickSubmitBlog() {
        cy.get(BlogManagementLocators.BLOG_SUBMIT).should('be.visible').click();
    }

    public checkBlogFlashMessageSuccessfully() {
        cy.contains("Blog was successfully created");
    }

    public checkBlogFlashMessageFailer() {
        cy.contains("Title can't be blank");
    }

    public clickShowThisBlog() {
        cy.get(BlogManagementLocators.SHOW_THIS_BLOG).last().click();
    }

    public clickEditThisBlog() {
        cy.get(BlogManagementLocators.EDIT_THIS_BLOG).should('be.visible').click();
    }

    public clickDistroyThisBlog() {
        cy.get(BlogManagementLocators.DESTROY_THIS_BLOG).should('be.visible').click();
    }

    public checkBlogFlashMessageUpdated() {
        cy.contains("Blog was successfully updated");
    }

    public checkEditLinkVisability() {
        cy.get(BlogManagementLocators.EDIT_THIS_BLOG).should('not.exist')
    }

    public checkBlogFlashMessageDeleted() {
        cy.contains("Blog was successfully destroyed");
    }

    public checkDeleteBtnVisability() {
        cy.get(BlogManagementLocators.DESTROY_THIS_BLOG).should('not.exist')
    }

}

export default BlogManagementPO;