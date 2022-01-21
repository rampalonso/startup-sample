import React from 'react'
import Styles from '../../styles/modules/Layout/Footer.module.scss'

type Props = {
  
}

const Footer: React.FC<Props> = ()=> {
  return (
    <footer className={Styles.footer}>
      <p>&copy; {new Date().getFullYear()} Start Up, Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer