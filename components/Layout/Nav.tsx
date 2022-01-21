import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react'
import Styles from '../../styles/modules/Layout/Nav.module.scss'



const Nav: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const handleShowMenu = (): void => {
    setShowMenu(!showMenu)
  }
  const router = useRouter();

  return (
    <nav className={Styles.navbar}>
      <div onClick={() => router.push('/')} className={Styles.logo}>Start Up</div>
      <ul className={Styles['nav-links']}>
        <label onClick={handleShowMenu} className={Styles.hamburger}>&#9776;</label>
        {
          showMenu &&
          <div className={Styles.menu}>
            <li onClick={() => setShowMenu(false)}><Link href={'/'}><a>Home</a></Link></li>
          </div>
        }
      </ul>
    </nav>
  )
}

export default Nav