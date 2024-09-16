import Meteors from '@/components/ui/sf/meteors';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <div className="p-24">
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            welcome to my blog!
          </span>
        </div>
      </div> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <Link
          href="#"
          className="grid place-content-center h-24 w-full border rounded-md"
        >
          test
        </Link>
        <Link
          href="#"
          className="grid place-content-center h-24 w-full border rounded-md"
        >
          test
        </Link>
        <Link
          href="#"
          className="grid place-content-center h-24 w-full border rounded-md"
        >
          test
        </Link>
        <Link
          href="#"
          className="grid place-content-center h-24 w-full border rounded-md"
        >
          test
        </Link>
      </section>
    </main>
  );
}
