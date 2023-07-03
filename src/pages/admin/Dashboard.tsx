import { Grid, FormControl, Select, MenuItem } from '@mui/material'
import * as React from 'react'
import { useState, useEffect } from 'react'
import Chart from 'src/components/admin/dashboard/Chart'
import DetailCard from 'src/components/admin/dashboard/DetailCard'
import { useGlobalState } from 'src/state/state'
import { getIncome } from 'src/utils/getIncome'
import { fetchChartsData } from 'src/utils/fetchChartsData'
// import { withdraw } from 'src/utils'

const Dashboard = () => {
  const [todayIncome, setTodayIncome] = useState(0)
  const [monthIncome, setMonthIncome] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [data]: any = useGlobalState('chartsData')
  const [chartType, setChartType] = useState('day')

  const handleChange = (event: any) => {
    setChartType(event.target.value as string)
  }

  useEffect(() => {
    if (data.length) {
      let totalSum = 0
      data.map((d: any) => (totalSum += d.amount))
      setTotalIncome(totalSum)
    }
  }, [data])

  useEffect(() => {
    (async () => {
      try {
        const res = await getIncome()
        setTodayIncome(res.today)
        setMonthIncome(res.month)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    if (chartType !== '') {
      fetchChartsData(chartType)
    }
  }, [chartType])

  // const withdrawHandle = () => {
  //   withdraw()
  // }

  return (
    <>
      <Grid container>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Today's Income" value={todayIncome} />
        </Grid>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Month's Income" value={monthIncome} />
        </Grid>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <DetailCard title="Total Income" value={totalIncome} />
        </Grid>
        <Grid item xs = {12} sx={{ textAlign: 'right', mt: 8 }}>
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chartType}
              onChange={handleChange}
            >
              <MenuItem value={'day'}>Day</MenuItem>
              <MenuItem value={'month'}>Month</MenuItem>
              <MenuItem value={'year'}>Year</MenuItem>
            </Select>
          </FormControl>
          {/* <Button onClick={withdrawHandle}>Withdraw</Button> */}
        </Grid>
        <Grid item xs = {12}>
          <Chart />
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
