import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts'
import { useGlobalState } from '../../../state/state'
import { Grid } from '@mui/material'
// import ApexCharts from 'react-apexcharts'

const Chart = () => {
  const [data] = useGlobalState('chartsData')

  // const series = [{
  //   name: 'XYZ MOTORS',
  //   data: [{
  //     x: 1682998056000,
  //     y: 54
  //   }, {
  //     x: 1682998056000,
  //     y: 66
  //   }]
  // }]
  // const options: ApexCharts.ApexOptions = {
  //   chart: {
  //     type: 'area',
  //     stacked: false,
  //     height: 350,
  //     zoom: {
  //       type: 'x',
  //       enabled: true,
  //       autoScaleYaxis: true
  //     },
  //     toolbar: {
  //       autoSelected: 'zoom'
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   title: {
  //     text: 'Stock Price Movement',
  //     align: 'left'
  //   },
  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       shadeIntensity: 1,
  //       inverseColors: false,
  //       opacityFrom: 0.5,
  //       opacityTo: 0,
  //       stops: [0, 90, 100]
  //     }
  //   },
  //   yaxis: {
  //     title: {
  //       text: 'Price'
  //     }
  //   },
  //   xaxis: {
  //     type: 'datetime'
  //   },
  //   tooltip: {
  //     shared: false
  //   }
  // }

  return (
    <>
      {/* <ApexCharts options={options} series={series} type="area" height={350}/> */}
      <Grid container>
        <Grid item xs = {12} xl = {6}>
          <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data}>
              <XAxis dataKey='date' stroke='#0084d8' label={{ value: 'Date', position: 'insideBottomRight', dy: -30 }}/>
              <YAxis label={{ value: 'Acres', position: 'insideTopLeft', dx: 60 }}/>
              <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
              <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 10, lineHeight: '30px' }} />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <Line dataKey='quantity' fill='#0084d8'/>
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs = {12} xl = {6}>
          <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data}>
              <XAxis dataKey='date' stroke='#a084d8' label={{ value: 'Date', position: 'insideBottomRight', dy: -30 }}/>
              <YAxis label={{ value: 'Acres', position: 'insideTopLeft', dx: 60 }}/>
              <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
              <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 10, lineHeight: '30px' }} />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <Line dataKey='amount' fill='#a084d8' stroke='#a084d8' />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Chart
