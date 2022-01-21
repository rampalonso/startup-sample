import { NextPage } from "next"
import React from "react"

type Props = {
  title: string,
  description: string
  cta: string
  children: React.ReactNode
}
const Section: NextPage<Props> = ({ title, description, cta, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {
        description &&
        <p>
          {description}
        </p>
      }
      {children}
      {
        cta &&
        <a href="#">{cta}</a>
      }
    </div>

  )
}

export default Section