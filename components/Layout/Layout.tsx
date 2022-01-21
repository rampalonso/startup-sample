import Styles from "../../styles/modules/Layout/Layout.module.scss"
import React from 'react'
import Nav from './Footer'
import Footer from './Nav'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={Styles['main-content']}>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout