export default function UpcomingEvents({ events }) {
  return (
    <div className="relative bg-gray-50 pt-0 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {events.map((event) => (
            <div key={event.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={event.slug} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                    <p className="mt-3 text-base text-gray-500">{event.description}</p>
                  </a>
                </div>
                <div className="flex justify-between content-end">
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a>
                        <span className="sr-only">{event.expositorsCollection.items[0].name}</span>
                        <img className="h-10 w-10 rounded-full" alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a className="hover:underline">
                          {event.expositorsCollection.items[0].name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={event.date}>{event.date}</time>
                        <span aria-hidden="true">&middot;</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-12 text-sm flex-end font-medium text-indigo-600">
                      <a href={event.slug} className="hover:underline">
                        Ir al evento
                      </a>
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
