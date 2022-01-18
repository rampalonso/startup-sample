
export default function Section({ title, description, cta, children }) {
    return (
        <div className='bg-white'>
            <div className="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
                        {
                            description &&
                            <p className="text-xl text-gray-500">
                                {description}
                            </p>
                        }

                        {children}

                        {
                            cta &&
                            <div className="mt-3 flex justify-center lg:mt-0 lg:flex-shrink-0">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        {cta}
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
