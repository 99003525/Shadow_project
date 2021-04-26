var config = require("config");
var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var {Given, When, Then} =require("cucumber");
var {browser, $, element, ExpectedConditions, by} = require("protractor");
var link = require('../../config/default.json')
const { assert } = require("chai");
const homepage = require("../../page_object/OilAndGas_Dashboard.js")

Given('I navigate to echarts page', async function () {
           homepage.getCharts().click();
           browser.sleep(5000);
           expect(homepage.geteCharts().isPresent()).to.eventually.equal(true);
           await homepage.geteCharts().click();
         });

 When('I click on Line two', async function () {
            expect(homepage.LineGraphsExist().isPresent()).to.eventually.equal(true);
           await homepage.geteCharts().click();
        
         });       

 Then('Correct garph is displayed', async function () {
            expect(homepage.getLineGraph().isPresent()).to.eventually.equal(true);
           await homepage.getLineGraph().click();
           
         });
        