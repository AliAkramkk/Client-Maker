import React from 'react'

const SectionCard4 = () => {
  return (
    <>
     <div className="bg-black dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 divide-y text-center dark:divide-gray-700/75 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-white dark:text-white">
                80+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-white  dark:text-white">
                100+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-white dark:text-white">
                10+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
               Services
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionCard4