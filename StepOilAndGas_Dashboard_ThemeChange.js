var config = require("config");
var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var {Given, When, Then} =require("cucumber");
var {browser, $, element, ExpectedConditions, by} = require("protractor");
var link = require('../../config/default.json')
const { assert } = require("chai");
const homepage = require("../../page_object/OilAndGas_Dashboard.js");

Given('The dropdown for changing theme is present',async function(){
    await expect(homepage.changeThemeToCosmic().isPresent()).to.eventually.equal(true);
    await homepage.changeThemeToCosmic().click();
})
When('I select LTTS cosmic',async function(){
    expect(homepage.getThemeCosmic().isPresent()).to.eventually.equal(true);
    await homepage.getThemeCosmic().click();
})
Then('Background Color changes to violet',async function(){
    await expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(27, 27, 56, 1)');
}) 

Given('The dropdown for changing theme from cosmic is present',async function(){
    await expect(homepage.changeThemeToLight().isPresent()).to.eventually.equal(true);
    await homepage.changeThemeToLight().click();
})

When('I select LTTS light',async function(){
    expect(homepage.getThemeLight().isPresent()).to.eventually.equal(true);
    await homepage.getThemeLight().click();   
})
Then('Background Color changes to white',function(){
    expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(237, 241, 247, 1)');   
})

Given('The dropdown for changing theme from light is present',async function(){
    
    await expect(homepage.changeThemeToCorporate().isPresent()).to.eventually.equal(true);  
    await homepage.changeThemeToCorporate().click()      
    
})
When('I select LTTS Corporate',async function(){
    await expect(homepage.getThemeCorporate().isPresent()).to.eventually.equal(true);
    await homepage.getThemeCorporate().click();
   
    
})
Then('Background Color changes to white shade',async function(){
    await expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(237, 241, 247, 1)'); 
    
})

Given ('The dropdown for changing theme from Corporate is present',async function(){
    await expect(homepage.changeThemeToMaterialLight().isPresent()).to.eventually.equal(true); 
    await homepage.changeThemeToMaterialLight().click();
})
When ('I select LTTS Material Light',async function(){
    await expect(homepage.getThemeMaterialLight().isPresent()).to.eventually.equal(true);
    await homepage.getThemeMaterialLight().click();
    
})
Then('Background Color changes to violet white shade',async function(){
    await expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(250, 250, 250, 1)');
}) 

Given ('The dropdown for changing theme from LTTS Material Light is present',async function(){
    await expect(homepage.changeThemeToMaterialDark().isPresent()).to.eventually.equal(true); 
    await homepage.changeThemeToMaterialDark().click();
})
When ('I select LTTS Material Dark',async function(){
    await expect(homepage.getThemeMaterialDark().isPresent()).to.eventually.equal(true);
    await homepage.getThemeMaterialDark().click();
})
Then ('Background Color changes to black yellow shade',async function(){
    await  expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(48, 48, 48, 1)');
    
})

Given ('The dropdown for changing theme from LTTS Material Dark is present',async function(){
    await expect(homepage.changeThemeToDark().isPresent()).to.eventually.equal(true); 
    await homepage.changeThemeToDark().click();
})
When('I select LTTS Dark',async function(){
    await expect(homepage.getThemeDark().isPresent()).to.eventually.equal(true);
    await homepage.getThemeDark().click();
    
})
Then ('Background Color changes blue shade',async function(){
    await expect(element(by.css('div.layout')).getCssValue('background-color')).to.eventually.equal('rgba(21, 26, 48, 1)');
})


