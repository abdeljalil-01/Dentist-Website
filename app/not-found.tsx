import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-page px-5 text-center">
      <div className="max-w-xl">
        <p className="eyebrow mx-auto mb-6">404</p>
        <h1 className="heading-2">This page stepped out for a checkup.</h1>
        <p className="mt-5 text-slate-600">
          The page you are looking for is not available. Return to the studio homepage to continue.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </main>
  );
}
