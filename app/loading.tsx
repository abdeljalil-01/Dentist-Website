import Image from "next/image";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-ink">
      <div className="grid justify-items-center gap-5 text-center">
        <Image
          src="/lumine-logo-small.png"
          alt="Lumine Dental Studio"
          width={168}
          height={150}
          priority
          className="h-auto w-40"
        />
        <div className="h-1 w-28 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-blue" />
        </div>
        <p className="text-sm font-semibold text-slate-300">Preparing your visit</p>
      </div>
    </main>
  );
}
