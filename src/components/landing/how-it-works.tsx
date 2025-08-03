import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Store } from "lucide-react";

const buyerSteps = [
  { title: "Cari Vendor", description: "Jelajahi kategori atau gunakan pencarian untuk menemukan vendor impian Anda.", image: "https://placehold.co/300x300.png", hint: "couple searching" },
  { title: "Hubungi & Book", description: "Hubungi vendor, diskusikan detail, dan lakukan pemesanan.", image: "https://placehold.co/300x300.png", hint: "couple planning" },
  { title: "Pembayaran Aman", description: "Selesaikan pembayaran dengan metode yang aman dan mudah.", image: "https://placehold.co/300x300.png", hint: "secure transaction" },
  { title: "Hari Bahagia Tiba", description: "Nikmati hari pernikahan Anda dengan tenang, semua sudah teratasi!", image: "https://placehold.co/300x300.png", hint: "wedding couple" },
];

const sellerSteps = [
  { title: "Daftar Akun", description: "Buat akun vendor dan lengkapi profil bisnis Anda dalam beberapa menit.", image: "https://placehold.co/300x300.png", hint: "vendor profile" },
  { title: "Buat Portofolio", description: "Unggah foto, video, dan layanan terbaik Anda ke etalase digital.", image: "https://placehold.co/300x300.png", hint: "portfolio gallery" },
  { title: "Dapatkan Klien", description: "Terima permintaan dan pesan dari calon pengantin yang tertarik.", image: "https://placehold.co/300x300.png", hint: "chat notification" },
  { title: "Berikan Servis Terbaik", description: "Wujudkan mimpi mereka dan dapatkan ulasan positif untuk reputasi Anda.", image: "https://placehold.co/300x300.png", hint: "happy client" },
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
            Sangat mudah untuk merencanakan pernikahan atau menjadi vendor di NikahYuk.
          </p>
        </div>
        <Tabs defaultValue="buyer" className="mt-12 w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="buyer"><Heart className="mr-2 h-4 w-4" /> Untuk Calon Pengantin</TabsTrigger>
            <TabsTrigger value="seller"><Store className="mr-2 h-4 w-4" /> Untuk Vendor</TabsTrigger>
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
