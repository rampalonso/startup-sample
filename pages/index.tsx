import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { gql } from '@apollo/client'
import client from '../apollo-client'

import Section from "../components/Layout/Section"
import { UpcomingEvents } from "../components/sections"
import { GetEventsBlock } from '../utils/queries'
import { findItem } from '../utils/array'
import { IEvent, ISection } from '../types'

type Props = {
  sections: { upcomingEvents: ISection },
  events: IEvent[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: gql(GetEventsBlock) });
  return {
    props: {
      sections: {
        upcomingEvents: findItem<ISection>(data.sectionCollection.items, 'slug', 'upcoming-events'),
      },
      events: data.eventCollection.items,
    },
  }
}

const IndexPage: NextPage<Props> = ({ 
  sections, events 
}) => {
  const { upcomingEvents } = sections;
  return (
    <>
      <Section
        title={upcomingEvents.title}
        description={upcomingEvents.description}
        cta={upcomingEvents.cta}>
        <UpcomingEvents events={events} />
      </Section>
    </>
  )
}

export default IndexPage