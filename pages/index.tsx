import { UpcomingEvents } from "../components/sections";
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Section from "../components/Layout/Section";
import { GetEventsBlock } from '../utils/queries';
import { findItem } from '../utils/array';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql(GetEventsBlock),
  });
  return {
    props: {
      sections: {
        upcomingEvents: findItem(data.sectionCollection.items, 'slug', 'upcoming-events'),
      },
      events: data.eventCollection.items,
    },
  };
}

export default function Home({ sections, events }) {
  const { upcomingEvents } = sections;
  return (
    <>
      <Section
        title={upcomingEvents.title}
        description={upcomingEvents.description}
        cta={upcomingEvents.cta}>
        <UpcomingEvents events={events}/>
      </Section>
    </>
  )
}