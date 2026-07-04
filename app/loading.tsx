export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-page">
      <div className="grid gap-5 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-blue-100 border-t-brand-blue" />
        <p className="text-sm font-semibold text-slate-500">Preparing your visit</p>
      </div>
    </main>
  );
}
