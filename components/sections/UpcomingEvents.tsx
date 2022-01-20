import Link from 'next/link'
export default function UpcomingEvents({ events }) {
  return (
    <>
      {
        events.map((event) => {
          return (
            <div key={event.slug}>
              <h1>{event.title}</h1>
              <Link href={'/events/'+event.slug}><a>Ir al evento</a></Link>
            </div>
          )
        })
      }
    </>
  )
}
