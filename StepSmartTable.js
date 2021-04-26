var config = require("config");
var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var {Given, When, Then} =require("cucumber");
var {browser, $, element, ExpectedConditions, by} = require("protractor");
var link = require('../../config/default.json')
const { assert } = require("chai");
const smartTable = require("../../page_object/SmartTable");
const { getLastName } = require("../../page_object/SmartTable");
//var tabledata =  element(by.xpath("//*[@class = 'ng2-smart-row selected ng-star-inserted']/td[2]"));
 
Given('I select tables in side menu bar', async function () {
await smartTable.getSmartTable().click();
browser.sleep(5000);
});
 
When('I select smart table', async function () {
await smartTable.verifySmartTable().click();
});
 
Then('Text box for first name is present', async function () {
await expect(smartTable.getFirstName().isPresent()).to.eventually.equal(true);
});
 
When('I type some first name', async function () {
await smartTable.getFirstName().sendKeys("Jack");
});
 
Then('All the details of matching persons should be displayed', async function () {
//   for(i=1;i<7;i++){
//     var path = `//*[@class='ng2-smart-row selected ng-star-inserted']/td[${i}]`
// var tabledata =  element(by.xpath(path));
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[2]"));
tabledata.getText().then(function(celldata){console.log("ID =",celldata);});  
tabledata.getText().then(function(celldata){expect(celldata).to.equal("5");});
});

Then('Verify First Name',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[3]"));
tabledata.getText().then(function(celldata){console.log("First Name=",celldata);});
tabledata.getText().then(function(celldata){expect(celldata).to.equal("Jack");});
});

Then('Verify Last name',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[4]"));
tabledata.getText().then(function(celldata){console.log("Last Name=",celldata);}); 
tabledata.getText().then(function(celldata){expect(celldata).to.equal("Sparrow");});
});

Then('Verify UserName',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[5]"));
tabledata.getText().then(function(celldata){console.log("User Name=",celldata);}); 
tabledata.getText().then(function(celldata){expect(celldata).to.equal("@jack");});
});

Then('Verify Mail',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[6]"));
tabledata.getText().then(function(celldata){console.log("Mail ID=",celldata);});
tabledata.getText().then(function(celldata){expect(celldata).to.equal("jack@yandex.ru");});
});

Then('Verify Age',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[7]"));
tabledata.getText().then(function(celldata){console.log("Age=",celldata);});
tabledata.getText().then(function(celldata){expect(celldata).to.equal("30");});
});
 


Given('Text box for last name is present', async function () {
  smartTable.getFirstName().clear();
  //browser.sleep(5000);
  await expect(smartTable.getLastName().isPresent()).to.eventually.equal(true);
  });
   
  When('I type some last name', async function () {
  // browser.sleep(5000);
  await smartTable.getLastName().sendKeys("Sparrow");
  });
   
  Then('All details of matching person should be displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[2]"));
    tabledata.getText().then(function(celldata){console.log("ID =",celldata);});  
    tabledata.getText().then(function(celldata){expect(celldata).to.equal("5");});

  });
  
  Then('Verify the First Name',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[3]"));
  tabledata.getText().then(function(celldata){console.log("First Name=",celldata);});
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("Jack");});
  });
  
  Then('Verify the Last name',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[4]"));
  tabledata.getText().then(function(celldata){console.log("Last Name=",celldata);}); 
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("Sparrow");});
  });
  
  Then('Verify the UserName',async function (){
    var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[5]"));
    tabledata.getText().then(function(celldata){console.log("User Name=",celldata);}); 
    tabledata.getText().then(function(celldata){expect(celldata).to.equal("@jack");});
    });
  
  Then('Verify the Mail',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[6]"));
  tabledata.getText().then(function(celldata){console.log("Mail ID=",celldata);});
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("jack@yandex.ru");});
  });
  
 Then('Verify the Age',async function (){
var tabledata =  element(by.xpath("//*[@class='ng2-smart-row selected ng-star-inserted']/td[7]"));
tabledata.getText().then(function(celldata){console.log("Age=",celldata);});
 tabledata.getText().then(function(celldata){expect(celldata).to.equal("30");});
});

Given('An option to edit', async function () {
  await browser.sleep(5000);
  await smartTable.returnThirdEditOption().click();
  });
 
When('I edit the values', async function () {
  await smartTable.editThirdFirstName().clear();
  await smartTable.editThirdFirstName().sendKeys("Roronoa");
  await smartTable.editThirdLastName().clear();
  await smartTable.editThirdLastName().sendKeys("Zoro");
  await smartTable.returnConfirmEdit().click();
  });

  Then('Contents of smart table are updated', function () {
   browser.sleep(5000);
    // Write code here that turns the phrase above into concrete actions
   // var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted selected']/td[2]/ng2-smart-table-cell/table-cell-view-mode/div/div"));
   var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[2]//div[@class='ng-star-inserted']"));
   //var tabledata = element(by.xpath("//*[@class ='ng-star-inserted']/div/div"));
   tabledata.getText().then(function(celldata){console.log("ID =",celldata);});  
    tabledata.getText().then(function(celldata){expect(celldata).to.equal("5");});

  });
 
  Then('Verify the Persons First Name',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[3]//div[@class='ng-star-inserted']"));
  tabledata.getText().then(function(celldata){console.log("First Name=",celldata);});
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("Roronoa");});
  });
  
  Then('Verify the Persons Last name',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[4]//div[@class='ng-star-inserted']"));
  tabledata.getText().then(function(celldata){console.log("Last Name=",celldata);}); 
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("Zoro");});
  });
  
  Then('Verify the Persons UserName',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[5]//div[@class='ng-star-inserted']"));
  tabledata.getText().then(function(celldata){console.log("User Name=",celldata);}); 
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("@jack");});
  });
  
  Then('Verify the Persons Mail',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[6]//div[@class='ng-star-inserted']"));
  tabledata.getText().then(function(celldata){console.log("Mail ID=",celldata);});
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("jack@yandex.ru");});
  });
  
  Then('Verify the Persons Age',async function (){
  var tabledata =  element(by.xpath("//*[@class='ng2-smart-row ng-star-inserted']/td[7]//div[@class='ng-star-inserted']"));
  tabledata.getText().then(function(celldata){console.log("Age =",celldata);});
  tabledata.getText().then(function(celldata){expect(celldata).to.equal("30");});
});
