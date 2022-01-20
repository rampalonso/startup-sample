import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { GetEvents, GetEventBySlug } from '../../utils/queries'

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql(GetEvents)
  })
  const paths = data.eventCollection.items.map(e => ({
    params: { slug: e.slug }
  }));
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql(GetEventBySlug),
    variables: { slug: params.slug }
  })
  return {
    props: {
      events: data.eventCollection.items[0]
    }
  }
}

export default function ServiceDetail({ events }) {
  const { title, description } = events
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}