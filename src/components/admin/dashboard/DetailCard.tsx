import { Paper, Typography } from '@mui/material'
import * as React from 'react'

const DetailCard = (props: any) => {
  return (
    <Paper sx={{ backgroundColor: 'white', textAlign: 'center', p: 3, m: 2 }}>
        <Typography fontSize={28}> {props.title} </Typography>
        <Typography fontSize={28}> {props.value} </Typography>
    </Paper>
  )
}

export default DetailCard
