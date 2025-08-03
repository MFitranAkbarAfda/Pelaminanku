import type { SVGProps } from 'react';
import Link from "next/link";
import { Heart, Instagram, Send } from "lucide-react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 8a2 2 0 0 0-2-2h-3.5a3.5 3.5 0 0 0-3.5 3.5V15a3 3 0 0 1-3 3H7" />
      <path d="M15.5 8.5V15a3 3 0 0 1-3 3H7" />
      <path d="M12 4v8" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
);


export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-foreground">
                Pelaminanku
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
                Wujudkan pernikahan impianmu bersama kami.
            </p>
            <div className="mt-4 flex gap-4">
                <Link href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary"/>
                </Link>
                <Link href="#" aria-label="TikTok">
                    <TikTokIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary"/>
                </Link>
                <Link href="#" aria-label="Telegram">
                    <Send className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary"/>
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-foreground">Navigasi</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#home" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">Tentang</Link></li>
                <li><Link href="#products" className="text-sm text-muted-foreground hover:text-foreground">Vendor</Link></li>
                <li><Link href="#join" className="text-sm text-muted-foreground hover:text-foreground">Jadi Vendor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Syarat & Ketentuan</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Kebijakan Privasi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Bantuan</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Kontak Kami</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pelaminanku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
