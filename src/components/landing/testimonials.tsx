import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rina & Doni",
    avatar: "https://placehold.co/100x100.png",
    hint: "happy couple",
    comment: "NikahYuk bikin persiapan nikahan jadi gampang banget! Nemu WO dan vendor lain tanpa ribet. Semuanya profesional!",
    position: "self-start",
  },
  {
    name: "Adelia (Adel Decoration)",
    avatar: "https://placehold.co/100x100.png",
    hint: "florist smiling",
    comment: "Sejak join NikahYuk, bisnis dekorasi saya makin dikenal. Banyak klien baru yang saya dapat dari platform ini. Mantap!",
    position: "self-end",
  },
  {
    name: "Bimo & Sarah",
    avatar: "https://placehold.co/100x100.png",
    hint: "couple portrait",
    comment: "Fitur checklist dan budget plannernya sangat membantu kami yang awam. Pernikahan kami berjalan lancar. Terima kasih NikahYuk!",
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
            Dengarkan cerita dari para pasangan bahagia dan vendor sukses kami.
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
