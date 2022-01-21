import Link from 'next/link'
import React from "react";
import Styles from "../../styles/modules/Components/CardEvent.module.scss"
import { IEvent } from '../../types'

type Props = {
  event: IEvent,
  showCTA?: boolean,
}

const CardEvent: React.FC<Props> = ({ event, showCTA = true }) => {
  const { slug, title, description, date, done } = event
  return (
    <div key={slug} className={Styles.card}>
      <div className={Styles.card_details}>
        <div className={Styles.title}>{title}</div>
        <p className={Styles.description}>{description}</p>
        <div className={Styles.tags_wrapper}>
          <span className={Styles.date}>{date}</span>
          <span className={`${Styles.done} ${done ? Styles.done_finished : Styles.done_ongoing}`}>{done ? 'Finished' : 'On Going'}</span>
        </div>
        {
          showCTA &&
          <Link href={'/events/' + slug}><a className={Styles.cta}>Ir al evento</a></Link>
        }

      </div>
    </div>
  )
}

export default CardEvent