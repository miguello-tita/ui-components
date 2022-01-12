import React from 'react'
import { Graphics } from './index'

export default {
  title: 'Molecules/Graphics',
  componente: Graphics
}

const Template = (args) => <Graphics {...args} />

export const BarChart = Template.bind({})
BarChart.args = {
  width: 600,
  height: 500,
  chartType: 'ColumnChart',
  data: [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000]
  ],
  options: {
    title: 'Population of Largest U.S Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total population',
      minValue: 0
    },
    vAxis: {
      title: 'City'
    }
  }
}

export const AreaChart = Template.bind({})
AreaChart.args = {
  width: '500px',
  height: '300px',
  chartType: 'AreaChart',
  data: [
    ['Yeaar', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120]
  ],
  options: {
    title: 'Company Performance'
  }
}

export const ComboChart = Template.bind({})
ComboChart.args = {
  width: '500px',
  height: '300px',
  chartType: 'ComboChart',
  data: [
    [
      'Month',
      'Bolivia',
      'Ecuador',
      'Madagascar',
      'Papua New Guinea',
      'Rwanda',
      'Averege'
    ],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 391, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/02', 136, 691, 629, 1026, 366, 569.6]
  ],
  options: {
    title: 'Monthyl Coffe Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  }
}
