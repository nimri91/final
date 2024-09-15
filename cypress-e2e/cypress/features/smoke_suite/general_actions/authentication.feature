Feature: Authentication

  Background:
    Given User navigates to public marketing page

  Scenario: Successful login with valid credentials
    Given User navigate to the login page
    When User enter "admin@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page

    Scenario: Failed login with invalid credentials
    Given User navigate to the login page
    When User enter "admin@zenhr.com" as the email
    And User enter "wrongPassword" as the password
    And User click on the login button
    And User should be redirected to the login page