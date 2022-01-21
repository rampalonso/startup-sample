import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { IEvent } from '../../types';
import { GetEvents, GetEventBySlug } from '../../utils/queries'
import CardEvent from '../../components/common/CardEvent';

type Props = {
  event: IEvent
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { data } = await client.query({
    query: gql(GetEventBySlug),
    variables: { slug: params.slug }
  })
  return {
    props: {
      event: data.eventCollection.items[0]
    }
  }
}

const EventDetail: NextPage<Props> = ({ event }) => {
  return (
    <>
    <Head>
      <title>{event.title}</title>
    </Head>
      <CardEvent showCTA={false} event={event} />
    </>
  )
}
export default EventDetail