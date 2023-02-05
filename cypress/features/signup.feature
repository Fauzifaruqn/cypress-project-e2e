Feature: Signup

    This is scenario about Signup autobahn security web application

    @user_signup_succesfully
    Scenario: as a user should be able to register successfully
      Given user get email from email temporary website
      When user register autobahn security with valid email and "Strong" password
      And the user completes data in the personal data form
      And and the user needs to verify the account via email
      Then the user should be able to successfully login using the account that was created