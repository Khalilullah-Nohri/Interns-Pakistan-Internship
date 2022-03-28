import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

export default function WidgetBar(props) {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Widget Bar 3D",    //Set the chart caption
        // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
        xAxisName: "Sources",           //Set the x-axis name
        yAxisName: "Ranges",  //Set the y-axis name
        // numberSuffix: "K",
        theme: "fusion",                 //Set the theme for your chart
        bgColor: "#2a2a2a"
      },
      // Chart Data - from step 2
      data: props.data
    }
  };
  return (

    <div>
      <div className='widgetWrap'>
        <div className='widgetTitle'>
          {props.title}
        </div>
        <div className='widgetValue'>
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    </div>
  )
}
