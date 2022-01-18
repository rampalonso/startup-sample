import { Banner, Services, UpcomingEvents, TechTraining, OurTeam, SocialMedia } from "../components/sections";
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Section from "../components/Layout/Section";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query GetAllData {
      sectionCollection {
        items {
          title
          slug
          description
          cta
        }
      }
      serviceCollection {
        items {
          name
          slug
          image {
            url
            width
            height
          }
        }
      }
      eventCollection {
        items {
          title
          slug
          description
          date
          expositorsCollection {
            items {
              name
            }
          }
        }
      }
      teamCollection {
        items {
          name
          slug
          image {
            url
            width
            height
          }
        }
      }
      socialCollection {
        items {
          name
          slug
          logo {
            url
            width
            height
          }
          link
        }
      }
    }
    
    `,
  });
  return {
    props: {
      sections: {
        banner: findItem(data.sectionCollection.items, 'slug', 'startup-team-a'),
        services: findItem(data.sectionCollection.items, 'slug', 'services'),
        upcomingEvents: findItem(data.sectionCollection.items, 'slug', 'upcoming-events'),
        techTraining: findItem(data.sectionCollection.items, 'slug', 'tech-training'),
        ourTeam: findItem(data.sectionCollection.items, 'slug', 'our-team'),
        socialMedia: findItem(data.sectionCollection.items, 'slug', 'social-media'),
      },
      services: data.serviceCollection.items,
      events: data.eventCollection.items,
      team: data.teamCollection.items,
      social: data.socialCollection.items,
    },
  };
}

const findItem = (arr, key, filter) => arr.find(item => item[key] === filter)

export default function Home({ sections, services, events, team, social }) {
  const { banner, services: servicesSection, upcomingEvents, techTraining, ourTeam, socialMedia } = sections;
  return (
    <>
      <Section
        title={banner.title}
        description={banner.description}>
        <Banner />
      </Section>
      <Section
        title={servicesSection.title}
        cta={servicesSection.cta}>
        <Services services={services}/>
      </Section>
      <Section
        title={upcomingEvents.title}
        cta={upcomingEvents.cta}>
        <UpcomingEvents events={events}/>
      </Section>
      <Section
        title={techTraining.title}
        description={techTraining.description}
        cta={techTraining.cta}>
      </Section>
      <Section
        title={ourTeam.title}
        description={ourTeam.description}
        cta={ourTeam.cta}>
        <OurTeam team={team}/>
      </Section>
      <Section
        title={socialMedia.title}
        description={socialMedia.description}
        cta={socialMedia.cta}>
        <SocialMedia social={social} />
      </Section>
    </>
  )
}