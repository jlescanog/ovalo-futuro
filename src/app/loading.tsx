import Link from 'next/link';

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div className={`bg-navy/5 animate-pulse rounded ${className}`} />
  );
}

export default function Loading() {
  return (
    <main className="flex-grow pt-40 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb skeleton */}
        <SkeletonBlock className="h-4 w-48 mb-8" />

        {/* Title skeleton */}
        <SkeletonBlock className="h-14 w-3/4 mb-4" />
        <SkeletonBlock className="h-14 w-1/2 mb-16" />

        {/* Content grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <SkeletonBlock className="h-6 w-full" />
            <SkeletonBlock className="h-6 w-5/6" />
            <SkeletonBlock className="h-6 w-4/5" />

            <div className="mt-12 space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-4 bg-crema p-6 border border-navy/5">
                  <SkeletonBlock className="h-4 w-8 shrink-0" />
                  <SkeletonBlock className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-blanco p-10 border border-navy/5 h-fit space-y-6">
            <SkeletonBlock className="h-6 w-2/3" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <SkeletonBlock className="h-3 w-3 mt-1.5 shrink-0 rounded-full" />
                  <SkeletonBlock className="h-4 w-full" />
                </div>
              ))}
            </div>
            <SkeletonBlock className="h-12 w-full mt-4 bg-coral/20" />
          </div>
        </div>
      </div>
    </main>
  );
}
