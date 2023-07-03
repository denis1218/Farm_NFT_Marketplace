import * as React from 'react'
import axios from 'axios'
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow
} from '@mui/material'
import { API_ENDPOINT } from 'src/static'
import UsersModal from 'src/components/admin/users/UsersModal'

interface Column {
  id: 'no' | 'firstname' | 'lastname' | 'email' | 'wallet' | 'ip' | 'country'
  label: string
  minWidth?: number
  align?: 'center'
}

const columns: Column[] = [
  { id: 'no', label: '_NO_', minWidth: 50, align: 'center' },
  { id: 'firstname', label: 'FIRSTNAME', minWidth: 100, align: 'center' },
  {
    id: 'lastname',
    label: 'LASTNAME ',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'email',
    label: 'EMAIL',
    minWidth: 200,
    align: 'center'
  },
  {
    id: 'wallet',
    label: 'WALLET',
    minWidth: 150,
    align: 'center'
  },
  {
    id: 'ip',
    label: 'IP Address',
    minWidth: 80,
    align: 'center'
  },
  {
    id: 'country',
    label: 'Country',
    minWidth: 80,
    align: 'center'
  }
]

interface Data {
  first_name: string
  last_name: string
  email: string
  wallet: string
  ip_address: string
  country: string
}

const Users = () => {
  const [page, setPage] = React.useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10)
  const [rows, setRows] = React.useState<Data []>([])
  const [open, setOpen] = React.useState<boolean>(false)
  const [curUser, SetCurrentUser] = React.useState({})

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  React.useEffect(() => {
    const tempFunc = async () => {
      const res = await axios.get(`${API_ENDPOINT}user/get`)
      setRows(res.data.data.data)
    }
    tempFunc()
  }, [])

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => {
    setOpen(false)
  }

  const userHandle = (id: number) => {
    console.log(id)
    SetCurrentUser(rows[id])
    handleOpen()
  }

  return (
    <>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={i} onClick={() => { userHandle(i) }}>
                      <TableCell align='center'>{i + 1}</TableCell>
                      <TableCell align='center'>{row.first_name}</TableCell>
                      <TableCell align='center'>{row.last_name}</TableCell>
                      <TableCell align='center'>{row.email}</TableCell>
                      <TableCell align='center'>{row.wallet}</TableCell>
                      <TableCell align='center'>{row.ip_address}</TableCell>
                      <TableCell align='center'>{row.country}</TableCell>
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
      <UsersModal open={open} handleClose={handleClose} userInfo={curUser} />
    </>
  )
}

export default Users
