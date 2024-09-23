import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const BlogsSec = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 10 }).map((_, idx) => (
        <CardSpotlight
          key={idx}
          className="w-full min-h-64 h-full rounded bg-white p-4"
        >
          <Link
            href={'/'}
            className="flex flex-col justify-between h-full w-full relative z-10"
          >
            <div className="space-y-1">
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Badge
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm border-black"
                  >
                    Secondary {idx + 4}
                  </Badge>
                ))}
              </div>
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                eYoga
              </h3>
            </div>
            <div className="inline-flex">
              <small className="text-sm text-gray-600 dark:text-neutral-400 p-0 bg-white/20 backdrop-blur-sm">
                September 12, 2022
              </small>
            </div>
          </Link>
        </CardSpotlight>
      ))}
    </section>
  );
};

export default BlogsSec;
