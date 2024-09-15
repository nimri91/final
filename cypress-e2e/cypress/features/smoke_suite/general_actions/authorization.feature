Feature: Authorization

Background:
    Given User navigates to public marketing page


  Scenario: Admin can manage tags
    Given User navigate to the login page
    When User enter "admin@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click on manage tags link
    And User should be redirected to the tag management page

  Scenario: Member cannot manage tags
    Given User navigate to the login page
    When User enter "user_1@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User should not see the Manage Tags link