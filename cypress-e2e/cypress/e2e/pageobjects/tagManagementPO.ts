import WelcomeLocators from "../locators/WelcomeLocators";
import AuthenticationLocators from "../locators/authenticationLocators";
import AuthorizationLocators from "../locators/authorizationLocators";
import BlogManagementLocators from "../locators/blogManagementLocators";
import TagManagementLocators from "../locators/tagManagementLocators";
// import tagManagementModel from "../../e2e/models/tagManagementModel";


class TagManagementPO {
    public static instance: TagManagementPO;

    public static getInstance(): TagManagementPO {
        if (this.instance == null) {
            this.instance = new TagManagementPO();
        }
        return this.instance;
    }
    private constructor() { }

    public checkListVisability() {
        cy.url().should('include', '/tags');
        cy.get(TagManagementLocators.SHOW_TAG_LINK).contains('Show this tag');
        cy.get(TagManagementLocators.NEW_TAGS_LINK).contains('New tag');
        cy.get(TagManagementLocators.TAG_NAME).contains('Funny');
        
    }

    public clickTagLink() {
        cy.get(TagManagementLocators.NEW_TAGS_LINK).should('be.visible').click();
    }

    public fillTagName (name:string){
        cy.sendTextToElement(TagManagementLocators.TAG_NAME_TESXTBOX, name);
    }

    public clickCreateBtn() {
        cy.get(TagManagementLocators.UPDATE_TAG).should('be.visible').click();
    }

    public checkFlashMessage() {
        cy.contains("Tag was successfully created");
    }

    public clickDestroyTag() {
        cy.get(TagManagementLocators.DESTROY_TAG).should('be.visible').click();
    }

}

export default TagManagementPO;