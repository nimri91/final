Feature: Tag Management


  Background:
    Given User navigates to public marketing page


  Scenario: List existing tags
    Given User navigate to the login page
    When User enter "admin@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click on manage tags link
    And User should see a list of existing tags

  Scenario: Create a new tag
    Given User navigate to the login page
    When User enter "admin@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click on manage tags link
    And User click on new tag link
    And User enter "Drama" as tag name
    And User click on create button
    And Created successfully flash message should appear
    And User delete the created tag


