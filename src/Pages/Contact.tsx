import { Mail, Phone, MapPin, Clock } from "lucide-react";

const info = [
  { icon: Mail, title: "Email", value: "hello@Brace up.shop" },
  { icon: Phone, title: "Phone", value: "+20 100 123 4567" },
  { icon: MapPin, title: "Studio", value: "Zamalek, Cairo, Egypt" },
  { icon: Clock, title: "Hours", value: "Sun–Thu, 10am – 6pm" },
];

export default function Contact() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="mx-auto fade max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-20">
          <p className="text-xs tracking-luxe uppercase text-cream/60">
            Get in touch
          </p>
          <h1 className="mt-5 font-serif text-5xl text-balance">
            We're here to help
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-cream/70 leading-relaxed">
            Questions about a piece, an order, or a custom request? Our team
            replies within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto  max-w-7xl  px-5 py-16  lg:px-8 lg:py-20">
        {/* Info */}
        <div className="w-full">
          <h2 className="font-serif text-center text-3xl text-foreground">
            Contact details
          </h2>
          <p className="mt-3 text-center text-muted leading-relaxed">
            Reach us directly, or send a message and we'll get back to you
            shortly.
          </p>
          <div className="mt-8 grid lg:grid-cols-4 mx-auto md:grid-cols-2 gap-6">
            {info.map((i) => (
              <div key={i.title} className="flex md:mx-auto items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-dark text-forest">
                  <i.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs tracking-wide-sm uppercase text-muted">
                    {i.title}
                  </p>
                  <p className="mt-1 text-foreground">{i.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
