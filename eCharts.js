var Charts = function()
{
    this.Line = element(by.xpath("//*[text()='Line']"))
    this.LineGraph = element(by.xpath("(//*[@class='echart'])[3]"))
    this.Line = element(by.xpath("//*[text()='Line']"))
    this.LineGraph = element(by.xpath("(//*[@class='echart'])[3]"))

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

}
module.exports = new Charts();
