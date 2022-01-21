import Link from 'next/link';
import React from "react"
import Styles from "../../styles/modules/Layout/Section.module.scss"

type Props = {
  title: string,
  description: string
  cta: string
  children: React.ReactNode
}
const Section: React.FC<Props> = ({ title, description, cta, children }) => {
  return (
    <div>
      <h2 className={Styles.title}>{title}</h2>
      {
        description &&
        <p className={Styles.description}>
          {description}
        </p>
      }
      {children}
      {
        cta &&
        <Link href={"#"}><a className={Styles.cta}>{cta}</a></Link> 
      }
    </div>

  )
}

export default Section