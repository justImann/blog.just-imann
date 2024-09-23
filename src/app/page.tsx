import Link from 'next/link';
import CarouselSec from './includes/carousel-sec';
import BlogsSec from './includes/blogs-sec';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CarouselSec />

      <section>
        <div className="inline-flex gap-2 flex-wrap">
          <Link href="#" className="px-2 py-1 border rounded-md">
            test
          </Link>
        </div>
      </section>

      <BlogsSec />
    </main>
  );
}
