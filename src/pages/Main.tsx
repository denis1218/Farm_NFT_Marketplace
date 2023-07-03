import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider, CssBaseline } from '@mui/material'
import useThemeMode from 'src/shared/hooks/useThemeMode'
import { type ThemeModeProps } from 'src/types/hooks.types'

import ProtectedRoute from 'src/utils/ProtectRoute'
import AdminLayout from 'src/pages/admin'
import UserLayout from 'src/pages/user'

import { isWallectConnected, loadNfts, loadMyNfts } from 'src/utils'

const Main = () => {
  const { themeMode } = useThemeMode() as ThemeModeProps

  React.useEffect(() => {
    (async () => {
      await isWallectConnected().then(() => { console.log('Blockchain Loaded') })
      await loadNfts()
      await loadMyNfts()
    })()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <React.Suspense fallback={<React.Fragment />}>
          <Routes>
            <Route path="/" element={<UserLayout />} />
            <Route path="/user/*" element={<UserLayout />} />
            <Route path="/admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Main
