import WelcomeLocators from "../locators/WelcomeLocators";
import AuthenticationLocators from "../locators/authenticationLocators";
import AuthorizationLocators from "../locators/authorizationLocators";
import BlogManagementLocators from "../locators/blogManagementLocators";
import TagManagementLocators from "../locators/tagManagementLocators";
import AuthenticationModel from "../models/authenticationModel";

class AuthenticationPO {
    public static instance: AuthenticationPO;

    public static getInstance(): AuthenticationPO {
        if (this.instance == null) {
            this.instance = new AuthenticationPO();
        }
        return this.instance;
    }
    private constructor() { }

    public navigateToLoginPage (){
        cy.get(WelcomeLocators.LOGIN).should('be.visible').click();
    }

    public fillEmail (email:string){
        cy.sendTextToElement(AuthenticationLocators.EMAIL, email);
    }

    public fillPassword (password:string){
        cy.sendTextToElement(AuthenticationLocators.PASSWORD, password);
    }

    public clickLoginBtn (){
        cy.get(AuthenticationLocators.LOGIN_BOTTON).click();
    }

    public checkDashboard() {
        cy.get(AuthenticationLocators.DASHBOARD).contains('ZenHR Automation Graduation Project');
    }

    public checkFalseAlert() {
        cy.get(AuthenticationLocators.FALSEALERT).contains('false');
    }

}

export default AuthenticationPO;