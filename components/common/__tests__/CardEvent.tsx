import { getByRole, render, screen, waitFor } from '@testing-library/react';
import { IEvent } from '../../../types';
import CardEvent from '../CardEvent';

describe('Card Event Component', () => {
    let component = null
    let props: { event: IEvent, showCTA: boolean } = {
        event: {
            "title": "Next JS & Contentful",
            "slug": "next-js-and-contentful",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut augue et urna egestas pharetra.",
            "date": "2022-01-18T00:00:00.000Z",
            "done": true,
            "expositorsCollection": { "items": [{ "name": "Alonso Moreno" }] }
        },
        showCTA: true
    }
    let tags = {
        "warn": {
            text: 'Finished',
            color: 'rgb(204, 88, 88)'
        },
        "success": {
            text: 'On Going',
            color: 'rgb(107, 187, 107)'
        }
    }
    beforeEach(() => {
        component = render(<CardEvent {...props} />)
    })

    test('Renders component', () => {
        expect(component).toBeDefined()
    })

    test('Event title should be Next JS & Contentful title', async() => {
        await waitFor(() => {
            const element = screen.getByRole('card-title')
            expect(element).toHaveTextContent(props.event.title)
        })
    })

    test('Event should be finished', async() => {
        await waitFor(() => {
            const element = screen.getByRole('card-done')
            expect(element).toHaveTextContent(tags.warn.text)
        })
    })
})