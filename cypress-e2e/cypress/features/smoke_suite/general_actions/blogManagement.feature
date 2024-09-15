Feature: Blog Management

  Background:
    Given User navigates to public marketing page

  Scenario: Create a new blog
    Given User navigate to the login page
    When User enter "user_1@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click the new blog link
    And User fill "New Blog Title" as the blog title
    And User fill "This is the body of the new blog" as the blog body
    And User click on funny checkbox
    And User click the create blog button
    And User should see a success message Blog created successfully

  Scenario: Fail to create a blog without a title
    Given User navigate to the login page
    When User enter "user_1@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click the new blog link
    And User fill "This is the body of the new blog" as the blog body
    And User click on funny checkbox
    And User click the create blog button
    And User should see an error message Title can't be blank

  Scenario: Edit a personal blog
    Given User navigate to the login page
    When User enter "user_1@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click on show this blog link
    And User click on edit this blog link
    And User fill "New Blog Title UPDATED" as the blog title
    And User click the create blog button
    And User should see a success message Blog updated successfully

  Scenario: Fail to edit someone else’s blog
    Given User navigate to the login page
    When User enter "user_2@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click on show this blog link
    And User should not be able to edit the blog

  Scenario: Fail to delete a personal blog
    Given User navigate to the login page
    When User enter "user_2@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click on show this blog link
    And User should not be able to delete the blog

  Scenario: Delete a personal blog
    Given User navigate to the login page
    When User enter "user_1@zenhr.com" as the email
    And User enter "password" as the password
    And User click on the login button
    Then User should redirect to the dashboard page
    And User click the create blog link
    And User click on show this blog link
    And User click on distroy this blog
    And User should see a success message Blog deleted successfully



