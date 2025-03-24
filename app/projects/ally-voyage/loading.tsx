export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 w-full border-b bg-gray-100"></div>

      <main className="flex-1 container mx-auto py-12">
        {/* Hero section skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="h-12 w-3/4 bg-gray-200 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded-lg mx-auto mb-8"></div>
          <div className="flex justify-center gap-4">
            <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Cards section skeleton */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6">
              <div className="h-8 w-3/4 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-24 w-full bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-10 w-1/2 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Features section skeleton */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <div className="h-10 w-1/2 bg-gray-200 rounded-lg mx-auto mb-8"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg mb-2"></div>
                <div className="h-16 w-full bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="h-40 w-full bg-gray-800"></div>
    </div>
  )
}

