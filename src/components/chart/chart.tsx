"use client"
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'

export default function Chart() {
    const options = {
        title: {
            text: 'My Chart'
        },
        series: [{
            data: [4, 2, 3]
        }],
        accessibility: {
            enabled: false
        }
    }

    if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}