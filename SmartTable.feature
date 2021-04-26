Feature: Search functionality validation in smart tables
Feature Description : Verifying search functionality in Smart Tables of LTTS Tool kit webpage
 
Scenario: Verify Search by first name
Given I select tables in side menu bar 
When I select smart table
Then Text box for first name is present
When I type some first name
Then All the details of matching persons should be displayed
Then Verify First Name
Then Verify Last name
Then Verify UserName
Then Verify Mail
Then Verify Age
 
Scenario: Verify Search by last name
Given Text box for last name is present
When I type some last name
Then All details of matching person should be displayed
Then Verify the First Name
Then Verify the Last name
Then Verify the UserName
Then Verify the Mail
Then Verify the Age
 
Scenario: Edit the table data
Given An option to edit
When I edit the values
Then Contents of smart table are updated
Then Verify the Persons First Name
Then Verify the Persons Last name
Then Verify the Persons UserName
Then Verify the Persons Mail
Then Verify the Persons Age
