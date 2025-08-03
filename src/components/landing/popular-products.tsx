import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const popularProducts = [
  { name: "Wedding Organizer", image: "https://placehold.co/400x500.png", hint: "wedding planner" },
  { name: "Venue", image: "https://placehold.co/400x500.png", hint: "wedding venue" },
  { name: "Katering", image: "https://placehold.co/400x500.png", hint: "wedding catering" },
  { name: "Dekorasi & Bunga", image: "https://placehold.co/400x500.png", hint: "wedding decoration" },
  { name: "Foto & Video", image: "https://placehold.co/400x500.png", hint: "wedding photographer" },
  { name: "Gaun & Jas", image: "https://placehold.co/400x500.png", hint: "wedding dress" },
];

export default function PopularProducts() {
  return (
    <section id="products" className="bg-primary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Kategori Vendor Populer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Temukan vendor terbaik untuk setiap kebutuhan di hari spesial Anda.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-16 w-full"
        >
          <CarouselContent className="-ml-4">
            {popularProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="relative flex aspect-[4/5] items-end justify-center p-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={product.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <h3 className="relative z-10 p-6 font-headline text-3xl font-bold text-white">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform sm:left-[-1.5rem]" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform sm:right-[-1.5rem]" />
        </Carousel>
      </div>
    </section>
  );
}
