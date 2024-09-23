'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Meteors from '@/components/ui/sf/meteors';

const items = [{}];

const CarouselSec = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, idx) => (
            <CarouselItem key={idx}>
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-6 bg-black">
                  <Meteors number={30} />
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b py-2 from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent ">
                    Welcome to my blog!
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/40 backdrop-blur-sm text-black border" />
        <CarouselNext className="right-4 bg-white/40 backdrop-blur-sm text-black border" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default CarouselSec;
