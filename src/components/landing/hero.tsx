import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Beautifully decorated cakes in a bakery display"
        fill
        className="object-cover"
        priority
        data-ai-hint="bakery cakes"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="animate-in fade-in slide-in-from-top-5 duration-700 font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Marketplace Kue No.1 di Indonesia
          </h1>
          <p className="mt-6 max-w-2xl animate-in fade-in slide-in-from-top-10 duration-700 text-lg text-neutral-200 md:text-xl">
            Temukan & Jual Kue dari Toko Terbaik di Sekitarmu
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto transition-transform hover:scale-105 hover:animate-bubble-burst"
            >
              <Link href="#products">Lihat Kue</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto transition-transform hover:scale-105 hover:animate-bubble-burst"
            >
              <Link href="#join">Gabung Sekarang</Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
