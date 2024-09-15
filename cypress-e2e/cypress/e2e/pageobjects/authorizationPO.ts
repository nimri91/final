import WelcomeLocators from "../locators/WelcomeLocators";
import AuthenticationLocators from "../locators/authenticationLocators";
import AuthorizationLocators from "../locators/authorizationLocators";
import BlogManagementLocators from "../locators/blogManagementLocators";
import TagManagementLocators from "../locators/tagManagementLocators";

class AuthorizationPO {
    public static instance: AuthorizationPO;

    public static getInstance(): AuthorizationPO {
        if (this.instance == null) {
            this.instance = new AuthorizationPO();
        }
        return this.instance;
    }
    private constructor() { }

    public clickLManageTagsLink (){
        cy.get(AuthorizationLocators.MANAGE_TAGS_LINK).should('be.visible').click();
    }

    public checktagPage() {
        cy.get(TagManagementLocators.SHOW_TAG_LINK).contains('Show this tag');
        cy.url().should('include', '/tags');
    }

    public checkManagetagVisability() {
        cy.get(AuthorizationLocators.MANAGE_TAGS_LINK).should('not.exist')
    }

}

export default AuthorizationPO;