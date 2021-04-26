const { element, browser } = require("protractor");
var chai =require("chai").use(require("chai-as-promised"));
 
var smartTable = function()
{
    this.sideOptionTable = element(by.className('menu-title ng-tns-c108-46'))
    this.sTable = element(by.className('menu-title ng-tns-c108-47'))
    //this.vsmartTable = element(by.xpath("//*[text()=' Smart Table ']"))
    this.vsmartTable = element(by.className("menu-title ng-tns-c108-48"))
    this.firstName = element(by.xpath("//*[@placeholder='First Name']"))
    this.details = element.all(by.className('ng-star-inserted'))
    this.lastName = element(by.xpath("//*[@placeholder='Last Name']"))
   //this.thirdEditOption = element(by.xpath("(//*[@class='nb-edit'])[3]"))
    this.thirdEditOption = element(by.className("ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"))
    this.ThirdFirstName = element(by.xpath("(//*[@placeholder='First Name'])[2]"))
    this.ThirdLastName = element(by.xpath("(//*[@placeholder='Last Name'])[2]"))
    this.confirmEdit = element(by.className('nb-checkmark'))
    this.getSideOption = function()
    {
        return this.sideOptionTable;
    }
    this.getSmartTable = function()
    {
        return this.sTable;
    }
    this.verifySmartTable = function()
    {
        return this.vsmartTable;
    }
    this.getFirstName = function()
    {
        return this.firstName;
    }
    this.verifyDetails = function()
    {           
        return this.details;
    }
    this.getLastName = function()
    {
        return this.lastName;
    }
    this.returnThirdEditOption = function()
    {
        return this.thirdEditOption;
    }
    this.editThirdFirstName = function()
    {
        return this.ThirdFirstName;
    }
    this.editThirdLastName = function()
    {
        return this.ThirdLastName;
    }
    this.returnConfirmEdit = function()
    {
        return this.confirmEdit;
    }
}
module.exports = new smartTable();