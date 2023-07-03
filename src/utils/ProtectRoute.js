import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useGlobalState } from 'src/state/state'
import { API_ENDPOINT } from 'src/static'

const ProtectedRoute = (props: any) => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(() => {
    if (connectedAccount) {
      (async () => {
        const res = await axios.get(`${API_ENDPOINT}auth/isAdmin/${connectedAccount}`)
        setIsAdmin(res.data.isAdmin)
        if (!res.data.isAdmin) window.location.href = '/'
      })()
    }
  }, [connectedAccount])

  return (
    <React.Fragment>
      { isAdmin && props.children }
    </React.Fragment>
  )
}
export default ProtectedRoute
