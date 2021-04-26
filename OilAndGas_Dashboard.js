const { element, browser } = require("protractor");

var chai =require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
const genericFunctions = require('../features/steps/GenericFunctions.js')
  var Homepage = function()
  {
    this.theme_Cosmic = element(by.id('nb-option-5')),
    this.theme_Light = element(by.id('nb-option-3')),
    this.theme_Corporate = element(by.id('nb-option-6')),
    this.theme_MaterialLight = element(by.id('nb-option-7')),
    this.theme_MaterialDark = element(by.id('nb-option-8')),
    this.theme_dark = element(by.id('nb-option-4'))

    this.ThemeToCosmic = element(by.xpath("//*[text()='LTTS Material Dark']"))
    this.ThemeToLight = element(by.xpath("//*[text()='LTTS Cosmic']"))
    this.ThemeToCorporate = element(by.xpath("//*[text()='LTTS Light']"))
    this.ThemeToMaterialLight = element(by.xpath("//*[text()='LTTS Corporate']"))
    this.ThemeToMaterialDark = element(by.xpath("//*[text()='LTTS Material Light']"))
    this.ThemeToDark = element(by.xpath("//*[text()='LTTS Material Dark']"))

    this.scroll = element(by.className('created-by'))
    this.visitedDate = element.all(by.className('visited-date'))
    //this.byWeek = element(by.id("nb-option-0"))
    this.byWeek = element(by.id("nb-option-0"))
    this.changeOption = element(by.xpath("(//*[@class='select-button'])[2]"))
    this.byYear = element(by.id("nb-option-2"))

    this.sideMenuOption = element(by.xpath('//*[@data-name="menu"]'))
    this.adminDashboard = element(by.className('menu-title ng-tns-c108-1'))
    this.IOTDashboard = element(by.className('menu-title ng-tns-c108-2'))
    //this.charts = element(by.className('ng-tns-c108-6 ng-star-inserted'))
    this.charts = element(by.xpath("//*[@title='Charts']"))
    //this.echarts = element(by.className('ng-tns-c108-7 ng-star-inserted'))
    this.echarts = element(by.xpath("//*[@title='Echarts']"))
    this.Line = element(by.xpath("//*[text()='Line']"))
    this.LineGraph = element(by.xpath("(//*[@class='echart'])[3]"))
    
    
    this.changeThemeToCosmic = function()
    {
        return this.ThemeToCosmic;
    }
    this.getThemeCosmic = function()
    {
         return this.theme_Cosmic;
    }

    this.changeThemeToLight = function()
    {
        return this.ThemeToLight;
    }
    this.getThemeLight = function()
    {
        return this.theme_Light;
    }

    this.changeThemeToCorporate = function()
    {
        return this.ThemeToCorporate;
    }
    this.getThemeCorporate = function()
    {
        return this.theme_Corporate;
    }
    
    this.changeThemeToMaterialLight = function()
    {
        return this.ThemeToMaterialLight;
    }
    this.getThemeMaterialLight = function()
    {
        return this.theme_MaterialLight;
    }

    this.changeThemeToMaterialDark = function()
    {
        return this.ThemeToMaterialDark;
    }
    this.getThemeMaterialDark = function()
    {
        return this.theme_MaterialDark;
    }

    this.changeThemeToDark = function()
    {
        return this.ThemeToDark;
    }
    this.getThemeDark = function()
    {
        return this.theme_dark;
    }  
    this.scrollTo = function()
    {
        genericFunctions.scrollToElement(this.scroll)
    }
    this.getVisitedDate = function()
    {
        return this.visitedDate;
    }
    this.getProductionVolume = function()
    {
        return this.productionVolume;
    }
    this.getByWeek = function()
    {
        return this.byWeek;
    }
    this.getChangeOption = function()
    {
        return this.changeOption;
    }
    this.getByYear = function()
    {
        return this.byYear;
    }
    this.getSideMenuOption = function()
    {
        return this.sideMenuOption;
    }
    
    this.getAdminDashboard = function()
    {
        return this.adminDashboard;
    }
    this.getIOTDashboard = function()
    {
        return this.IOTDashboard;
    }
    this.getCharts = function()
    {
        return this.charts;
    }
    this.geteCharts = function()
    {
        return this.echarts;
    }
    this.LineGraphsExist = function()
    {
        return this.Line;
    }
    this.getLineGraph = function()
    {
        return this.LineGraph;
    }
};
module.exports = new Homepage();