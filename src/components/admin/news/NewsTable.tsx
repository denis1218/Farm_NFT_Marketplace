import * as React from 'react'
import axios from 'axios'
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow
} from '@mui/material'
import { API_ENDPOINT } from 'src/static'

interface Column {
  id: 'no' | 'title' | 'description' | 'options'
  label: string
  minWidth?: number
  align?: 'center'
}

const columns: Column[] = [
  { id: 'no', label: '_NO_', minWidth: 50, align: 'center' },
  { id: 'title', label: 'TITLE', minWidth: 150, align: 'center' },
  {
    id: 'description',
    label: 'DESCRIPTION',
    minWidth: 400,
    align: 'center'
  }
]

interface Data {
  title: string
  content: string
}

// const createData = (
//   title: string,
//   content: string
// ): Data => {
//   return { title, content }
// }

interface PropsType {
  newsInfo: any
  isAddClicked: any
  handleClose: () => void
}

const NewsTable = ({ newsInfo, isAddClicked, handleClose }: PropsType) => {
  const [page, setPage] = React.useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10)
  const [rows, setRows] = React.useState<Data []>([])

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  React.useEffect(() => {
    const tempFunc = async () => {
      if (isAddClicked === true) {
        console.log('adding ')
        const res = await axios.post(`${API_ENDPOINT}news/add`, newsInfo)
        console.log(res)
        setRows([
          ...rows,
          newsInfo
        ])
        handleClose()
      }
    }
    tempFunc()
  }, [isAddClicked])

  React.useEffect(() => {
    const tempFunc = async () => {
      const res = await axios.get(`${API_ENDPOINT}news/get`)
      setRows(res.data.data.data)
    }
    tempFunc()
  }, [])

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 450, height: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {
                columns.map((col, i) => (
                  <TableCell key={i} id={col.id} align={col.align} style={{ minWidth: col.minWidth }}>{col.label}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    <TableCell align='center'>{i + 1}</TableCell>
                    <TableCell align='center'>{row.title}</TableCell>
                    <TableCell align='center'>{row.content}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default NewsTable
