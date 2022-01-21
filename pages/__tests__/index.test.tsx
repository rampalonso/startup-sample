import { render, screen } from '@testing-library/react'
import { IEvent, ISection } from '../../types'
import IndexPage from '../index'

describe('Index Page', () => {
  let component = null
  let props: { sections: { upcomingEvents: ISection }, events: IEvent[] } = {
    sections: {
      upcomingEvents: {
        title: 'Upcoming Events',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue et urna egestas pharetra.',
        cta: 'Ir al evento'
      }
    },
    events: [
      {
        "title": "Next JS & Contentful",
        "slug": "next-js-and-contentful",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue et urna egestas pharetra.",
        "date": "2022-01-18T00:00:00.000Z",
        "done": true,
        "expositorsCollection": {
          "items": [{ "name": "Alonso Moreno" }]
        }
      },
      {
        "title": "JAMStack: getting started",
        "slug": "jamstack-getting-started",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue et urna egestas pharetra.",
        "date": "2022-01-21T00:00:00.000Z",
        "done": false,
        "expositorsCollection": {
          "items": [{ "name": "Cesar Calderon" }]
        }
      },
      {
        "title": "Next.js: Static Site rendering",
        "slug": "next-js-static-site-rendering",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue et urna egestas pharetra.",
        "date": "2022-01-27T00:00:00.000Z",
        "done": false,
        "expositorsCollection": {
          "items": [{ "name": "Alonso Moreno" }]
        }
      }
    ]
  }
  beforeEach(() => {
    component = render(<IndexPage {...props} />)
  })

  test('Renders component', () => {
    expect(component).toBeDefined()
  })
})