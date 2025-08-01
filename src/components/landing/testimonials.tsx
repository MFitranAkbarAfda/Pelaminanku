import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aulia",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman smiling",
    comment: "Pesan kue ulang tahun untuk anakku jadi gampang banget! Pilihannya banyak dan kuenya enak. Recommended!",
    position: "self-start",
  },
  {
    name: "Budi Santoso",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    comment: "Sebagai seller, platform ini sangat membantu jangkauan pasar saya. Omzet meningkat sejak gabung di sini.",
    position: "self-end",
  },
  {
    name: "Citra Lestari",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    comment: "Suka banget sama fitur pengiriman terjadwal. Kue datang tepat waktu untuk acara spesial saya. Terima kasih CakeVerse!",
    position: "self-start",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dengarkan cerita dari para pelanggan dan mitra seller kami yang puas.
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`flex items-start gap-4 ${testimonial.position === 'self-end' ? 'flex-row-reverse' : ''}`}>
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Card className={`max-w-md ${testimonial.position === 'self-end' ? 'bg-accent/50' : 'bg-card'}`}>
                <CardContent className="p-4">
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                  <p className="mt-2 text-sm font-bold text-foreground text-right">~ {testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
