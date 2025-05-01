export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-red-950 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-red-50 dark:bg-red-900/50 rounded-lg p-6 border border-red-200 dark:border-red-800 mb-8 animate-pulse shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-red-200 dark:bg-red-800 mb-6 md:mb-0 md:mr-8"></div>
            <div className="flex-1 w-full">
              <div className="h-8 bg-red-200 dark:bg-red-800 rounded mb-4 w-1/3"></div>
              <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-6 w-1/4"></div>
              <div className="h-4 bg-red-200 dark:bg-red-800 rounded mb-6 w-3/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="h-4 bg-red-200 dark:bg-red-800 rounded"></div>
                <div className="h-4 bg-red-200 dark:bg-red-800 rounded"></div>
                <div className="h-4 bg-red-200 dark:bg-red-800 rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="h-6 bg-red-200 dark:bg-red-800 rounded mb-2"></div>
                  <div className="h-3 bg-red-200 dark:bg-red-800 rounded"></div>
                </div>
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="h-6 bg-red-200 dark:bg-red-800 rounded mb-2"></div>
                  <div className="h-3 bg-red-200 dark:bg-red-800 rounded"></div>
                </div>
                <div className="bg-white dark:bg-red-900/30 rounded-lg p-3 border border-red-100 dark:border-red-800">
                  <div className="h-6 bg-red-200 dark:bg-red-800 rounded mb-2"></div>
                  <div className="h-3 bg-red-200 dark:bg-red-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 bg-red-200 dark:bg-red-800 rounded mb-6 w-1/3"></div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-red-50 dark:bg-red-900/50 rounded-lg p-4 border border-red-200 dark:border-red-800 animate-pulse shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-4">
                  <div className="flex items-start">
                    <div className="hidden md:block mr-4">
                      <div className="w-12 h-12 bg-red-200 dark:bg-red-800 rounded-lg"></div>
                    </div>
                    <div className="w-full">
                      <div className="h-5 bg-red-200 dark:bg-red-800 rounded mb-3 w-3/4"></div>
                      <div className="h-3 bg-red-200 dark:bg-red-800 rounded mb-3 w-2/3"></div>
                      <div className="h-3 bg-red-200 dark:bg-red-800 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 w-20 bg-red-200 dark:bg-red-800 rounded"></div>
                  <div className="h-8 w-24 bg-red-200 dark:bg-red-800 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
