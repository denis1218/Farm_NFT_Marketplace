// import tagStyled from 'styled-components'

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  '& .MuiGrid-container': {
    marginTop: 5,
    '& .MuiGrid-grid-xs-2': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: 5
    },
    '& .MuiGrid-grid-xs-10': {
      '& .MuiTextField-root': {
        width: '100%'
      }
    },
    '& .MuiGrid-grid-xs-12': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: 5
    },
    '& .MuiGrid-item': {
      marginBottom: 3
    }
  }
}
