import WelcomeLocators from "../locators/WelcomeLocators";

class WelcomePO {
    public static instance: WelcomePO;

    public static getInstance(): WelcomePO {
        if (this.instance == null) {
            this.instance = new WelcomePO();
        }
        return this.instance;
    }
    private constructor() { }

    public navigate() {
        cy.visit("/")
    }

    public verifyWelcomeMessageExists (){
        cy.get(WelcomeLocators.WELCOME_HEADER).should("be.visible")
    }

}

export default WelcomePO;