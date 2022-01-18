import Image from 'next/image';

export default function Services({ services }) {
  return (
    <div className="relative bg-white py-8">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} className="pt-6">
              <div className="flow-root rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 rounded-md">
                      <img className="w-32 h-32 rounded-full lg:w-32 lg:h-32" src={service.image.url} alt="" />
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">{service.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
