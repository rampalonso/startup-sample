import { NextPage } from 'next'
import React from 'react'
import Nav from './Footer'
import Footer from './Nav'

type Props = {
  children: React.ReactNode
}

 const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Footer />
      <div className="page-content">
        {children}
      </div>
      <Nav />
    </>
  )
}

export default Layout