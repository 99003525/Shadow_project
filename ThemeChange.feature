Feature: Theme Validation
Feature Description : Verfiy different theme in LTTS tool kit web page

Scenario: Validate LTTS Cosmic theme
Given The dropdown for changing theme is present
When I select LTTS cosmic
Then Background Color changes to violet

Scenario: Validate LTTS Light theme
Given The dropdown for changing theme from cosmic is present
When I select LTTS light
Then Background Color changes to white

Scenario: Validate LTTS Corporate theme
Given The dropdown for changing theme from light is present
When I select LTTS Corporate
Then Background Color changes to white shade

Scenario: Validate LTTS Material Light theme
Given The dropdown for changing theme from Corporate is present
When I select LTTS Material Light
Then Background Color changes to violet white shade

Scenario: Validate LTTS Material Dark theme
Given The dropdown for changing theme from LTTS Material Light is present
When I select LTTS Material Dark
Then Background Color changes to black yellow shade

Scenario: Validate LTTS Dark theme
Given The dropdown for changing theme from LTTS Material Dark is present
When I select LTTS Dark
Then Background Color changes blue shade