/* eslint-disable prettier/prettier */
import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'

const receivedLine = '#0000ff'

const xLegend = {
  s: 'Seconds',
  m: 'Minutes',
  h: 'Hours',
  d: 'Days',
}
// eslint-disable-next-line react/prop-types
const ChartThree = ({ style, title, labels, legend, data }) => {
  const datasets = (() => {
    return [
      {
        label: title,
        backgroundColor: 'transparent',
        borderColor: receivedLine,
        pointHoverBackgroundColor: receivedLine,
        borderWidth: 2,
        data: data,
      },
    ]
  })()

  const options = (() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || ''
              if (label) {
                label += ': '
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + 'MB'
              }
              return label
            },
          },
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: xLegend[legend] || 'Hours',
          },
          grid: {
            drawOnChartArea: false,
          },
          beginAtZero: true,
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'MB',
          },
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    }
  })()
  return (
    <CChartLine
      style={style}
      data={{
        labels: labels,
        datasets,
      }}
      options={options}
    />
  )
}
export default ChartThree
