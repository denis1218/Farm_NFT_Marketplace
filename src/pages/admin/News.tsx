import * as React from 'react'
import {
  Button
} from '@mui/material'
import tagStyled from 'styled-components'
import NewsModal from 'src/components/admin/news/NewsModal'
import NewsTable from 'src/components/admin/news/NewsTable'

const News = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [newsInfo, setNewsInfo] = React.useState<any>({})
  const [isAddClicked, setIsAddClicked] = React.useState<boolean>(false)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => {
    setOpen(false)
    setIsAddClicked(false)
  }

  return (
    <MainDiv>
      <Button variant='contained' color='success' style={{ marginBottom: 30 }} onClick={handleOpen}>ADD</Button>
      <NewsTable newsInfo={newsInfo} isAddClicked={isAddClicked} handleClose={handleClose} />
      <NewsModal open={open} handleClose={handleClose} newsInfo={newsInfo} setNewsInfo={setNewsInfo} setIsAddClicked={setIsAddClicked} />
    </MainDiv>
  )
}

export const MainDiv = tagStyled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    .MuiButton-root {
        width: 5rem;
        margin-right: 1rem;
    }
`

export default News
