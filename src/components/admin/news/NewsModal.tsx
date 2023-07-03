import * as React from 'react'
import {
  style
} from './styled/NewsModal.styled'

import {
  Modal, Box, Typography, TextField, Grid, Button
} from '@mui/material'

interface NewModalType {
  open: boolean
  handleClose: () => void
  newsInfo: any
  setNewsInfo: any
  setIsAddClicked: any
}

const NewsModal = ({ open, handleClose, newsInfo, setNewsInfo, setIsAddClicked }: NewModalType) => {
  const handleChange = (e: any) => {
    setNewsInfo({
      ...newsInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2">
          Add a News
      </Typography>
      <Grid container>
        <Grid item xs={2}>
          <Typography id="modal-modal-description"> TITLE: </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            variant='outlined'
            placeholder='title'
            name='title'
            onChange={handleChange}
            value={newsInfo.title || ''}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography> CONTENT: </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name='content'
            onChange={handleChange}
            value={newsInfo.content || ''}
            multiline
            rows={4}
            placeholder='content'
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='success' onClick={() => { setIsAddClicked(true) }}>Add</Button>
        </Grid>
      </Grid>
    </Box>
    </Modal>
  )
}

export default NewsModal
