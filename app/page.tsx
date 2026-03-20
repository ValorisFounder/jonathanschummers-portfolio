import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold">Portfolio Versions</h1>
      <div className="flex gap-6">
        <Link
          href="/v15"
          className="rounded-lg border border-zinc-700 px-8 py-4 text-lg hover:bg-zinc-800 transition-colors"
        >
          V15 (Light, Grid)
        </Link>
        <Link
          href="/v-ref"
          className="rounded-lg border border-zinc-700 px-8 py-4 text-lg hover:bg-zinc-800 transition-colors"
        >
          V-Ref (Brutalist)
        </Link>
      </div>
    </main>
  );
}
