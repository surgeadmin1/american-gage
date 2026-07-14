import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-site py-28 text-center">
      <p className="eyebrow">404 · Out of Tolerance</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-navy-900">
        This page didn’t pass calibration.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-steel-600">
        The page you’re looking for doesn’t exist or has moved. Let’s get you back within
        spec.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/capabilities" className="btn-secondary">
          Browse Capabilities
        </Link>
      </div>
    </div>
  );
}
