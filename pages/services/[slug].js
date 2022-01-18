import { gql, useQuery } from '@apollo/client';
import client from '../../apollo-client';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetServices {
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
      }
    `
  })
  const paths = data.serviceCollection.items.map(s => ({
    params: { slug: s.slug }
  }));
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const GET_SERVICE = gql`
    query GetServices($slug: String!) {
      serviceCollection(where: { slug: $slug }) {
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
    }
  `;
  const { data } = await client.query({
    query: GET_SERVICE,
    variables: { slug: params.slug }
  })
  return {
    props: {
      service: data.serviceCollection.items[0]
    }
  }
}

export default function ServiceDetail({ service }) {
  const { name, image } = service
  return (
    <div>
      <h1>{name}</h1>
      <img src={image.url} width={image.width} height={image.height} />
    </div>
  )
}