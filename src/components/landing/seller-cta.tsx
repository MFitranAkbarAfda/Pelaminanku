import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SellerCTA() {
  return (
    <section id="join" className="relative py-20 sm:py-32 overflow-hidden">
        <Image
            src="https://placehold.co/1920x600.png"
            alt="Bakery kitchen background"
            fill
            className="object-cover"
            data-ai-hint="bakery kitchen"
        />
        <div className="absolute inset-0 bg-background/80" />
      <div className="container relative mx-auto px-4 text-center md:px-6">
        <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
          Mulai Jualan Kue Online Tanpa Ribet!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Jangkau lebih banyak pelanggan dan kembangkan bisnis kue Anda bersama kami.
          Daftar gratis sekarang juga.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-14 px-10 text-lg animate-glow">
            <Link href="#">Daftar Jadi Seller</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
