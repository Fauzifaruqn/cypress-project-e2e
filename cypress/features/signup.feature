Feature: Signup

    This is scenario about Signup autobahn security web application

    @user_signup_succesfully @positve_case
    Scenario: as a user should be able to register successfully
      Given user get email from email temporary website
      When user register autobahn security with valid email and "Strong" password
      And the user completes data in the personal data form
      And and the user needs to verify the account via email
      Then the user should be able to successfully login using the account that was created

    @user_signup_failed_invalid_email @negative_case
    Scenario: as a user should not be able to register with invalid email
      Given user get email from email temporary website
      When user register autobahn security with invalid email
      Then an error message will appear Must be a valid email
      And the signup button will be disabled

    @user_signup_failed_password_less_8_char
    Scenario: as a  user cannot register if using a password that is less than 8 characters
      Given user get email from email temporary website
      When user register autobahn security with invalid password "Fauzi1!" need "At least 8 characters"
      Then password will be considered as "Weak"
      And the signup button will be disabled

    @user_signup_failed_password_not_uppercase
    Scenario: as a  user cannot register if using a password that does not contain uppercase
      Given user get email from email temporary website
      When user register autobahn security with invalid password "fauzi12!" need "One uppercase letter"
      Then password will be considered as "Weak"
      And the signup button will be disabled

    @user_signup_failed_password_not_lowercase
    Scenario: as a  user cannot register if using a password that does not contain lowercase
      Given user get email from email temporary website
      When user register autobahn security with invalid password "FAUZI12!" need "One lowercase letter"
      Then password will be considered as "Weak"
      And the signup button will be disabled

    @user_signup_failed_password_not_number
    Scenario: as a  user cannot register if using a password that does not contain number
      Given user get email from email temporary website
      When user register autobahn security with invalid password "Fauzifn!" need "One number"
      Then password will be considered as "Weak"
      And the signup button will be disabled
  
    @user_signup_failed_password_not_special_char
    Scenario: as a  user cannot register if using a password that does not contain special chracters
      Given user get email from email temporary website
      When user register autobahn security with invalid password "Fauzifn1" need "One special character"
      Then password will be considered as "Weak"
      And the signup button will be disabled

    @user_signup_failed_password_space
    Scenario: as a  user cannot register if using a password that does contain space
      Given user get email from email temporary website
      When user register autobahn security with invalid password "fu 13!BA" need "No empty space"
      Then password will be considered as "Average"
      And the signup button will be disabled