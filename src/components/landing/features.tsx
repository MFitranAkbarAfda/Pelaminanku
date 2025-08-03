import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Sparkles, CalendarCheck } from "lucide-react";

const featuresData = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Vendor Terlengkap",
    description: "Temukan ribuan vendor pernikahan, mulai dari WO, MUA, hingga katering terbaik."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Perencanaan Mudah",
    description: "Atur semua kebutuhan pernikahan Anda dalam satu platform yang intuitif dan cerdas."
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-primary" />,
    title: "Transaksi Aman",
    description: "Proses booking dan pembayaran vendor terjamin aman dan terpercaya."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Kenapa Memilih Pelaminanku?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kami membantu mewujudkan pernikahan impian Anda menjadi kenyataan.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card key={index} className="transform-gpu text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 font-headline text-2xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
