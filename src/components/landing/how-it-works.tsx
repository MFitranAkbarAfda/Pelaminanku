import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Store } from "lucide-react";

const buyerSteps = [
  { title: "Cari Kue", description: "Jelajahi kategori atau gunakan pencarian untuk menemukan kue impian Anda.", image: "https://placehold.co/300x300.png", hint: "searching online" },
  { title: "Pesan", description: "Pilih kue, tentukan jumlah, dan tambahkan ke keranjang belanja Anda.", image: "https://placehold.co/300x300.png", hint: "online shopping" },
  { title: "Bayar", description: "Selesaikan pembayaran dengan metode yang aman dan mudah.", image: "https://placehold.co/300x300.png", hint: "secure payment" },
  { title: "Dikirim", description: "Duduk manis dan tunggu kue lezat Anda diantar langsung ke depan pintu.", image: "https://placehold.co/300x300.png", hint: "delivery package" },
];

const sellerSteps = [
  { title: "Daftar Toko", description: "Buat akun seller dan daftarkan toko kue Anda dalam beberapa menit.", image: "https://placehold.co/300x300.png", hint: "store registration" },
  { title: "Upload Produk", description: "Unggah foto dan deskripsi kue-kue terbaik Anda ke etalase digital.", image: "https://placehold.co/300x300.png", hint: "uploading photos" },
  { title: "Terima Pesanan", description: "Dapatkan notifikasi instan untuk setiap pesanan yang masuk.", image: "https://placehold.co/300x300.png", hint: "order notification" },
  { title: "Kirim & Dapatkan Ulasan", description: "Kirimkan pesanan tepat waktu dan bangun reputasi toko Anda.", image: "https://placehold.co/300x300.png", hint: "shipping box" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Cara Kerjanya
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sangat mudah untuk membeli atau berjualan kue di CakeVerse.
          </p>
        </div>
        <Tabs defaultValue="buyer" className="mt-12 w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="buyer"><User className="mr-2 h-4 w-4" /> Untuk Pembeli</TabsTrigger>
            <TabsTrigger value="seller"><Store className="mr-2 h-4 w-4" /> Untuk Penjual</TabsTrigger>
          </TabsList>
          <TabsContent value="buyer" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {buyerSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Image src={step.image} alt={step.title} width={150} height={150} className="mx-auto rounded-lg" data-ai-hint={step.hint}/>
                    <CardTitle className="mt-4 font-headline text-xl">{step.title}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="seller" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {sellerSteps.map((step, index) => (
                 <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-2xl font-bold text-primary">
                        {index + 1}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Image src={step.image} alt={step.title} width={150} height={150} className="mx-auto rounded-lg" data-ai-hint={step.hint}/>
                      <CardTitle className="mt-4 font-headline text-xl">{step.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
