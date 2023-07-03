import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from 'src/components/user/layouts/Header'
import Landing from 'src/pages/user/Landing'
import Register from 'src/pages/user/Register'
import BuyNft from 'src/pages/user/BuyNft'
import MyCollection from 'src/pages/user/MyCollection'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/*' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/buynft' element={<BuyNft />} />
        <Route path='/mycollection' element={<MyCollection />} />
      </Routes>
    </>
  )
}

export default UserLayout
