Feature: Login to Twitter
  I as a Twitter user
  I want to log in to my account successfully
  So that I can carry out a new publication

  Background: Access homepage
    Given I access homepage

  Scenario: Successfully login
    And I enter my access credentials
      | user      | password      |
      | YOUR_USER | YOUR_PASSWORD |
    Then I see "O que está acontecendo?"
