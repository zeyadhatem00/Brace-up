import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import craftWorkshop from "../assets/craft-workshop.webp";
const values = [
  {
    title: "Materials that last",
    body: "We source waxed cord, full-grain leather, and 925 sterling silver — chosen to wear beautifully For years, not seasons.",
  },
  {
    title: "Made by hand",
    body: "Every bracelet is braided, set, and finished by our artisans. No two are exactly alike, and that's the point.",
  },
  {
    title: "Designed to be worn",
    body: "Water resistant, adjustable, and built For daily life. Brace up pieces are meant to live on your wrist, not in a box.",
  },
];

const stats = [
  { value: "2026", label: "Founded" },
  { value: "100+", label: "Bracelets shipped" },
  { value: "6 mo", label: "Warranty" },
  { value: "4.9", label: "Avg. rating" },
];

export default function About() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-xs tracking-luxe uppercase text-cream/60">
            Our Story
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-balance lg:text-6xl">
            Craftsmanship you can wear every day
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-cream/70 leading-relaxed">
            Brace up began with a single braided cord and a simple belief: fine
            jewelry should be lived in. Today we make bracelets that balance
            quiet luxury with everyday durability.
          </p>
        </div>
      </section>

      {/* Craft image + intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        <img
          src={craftWorkshop}
          alt="Artisan braiding a bracelet at a workbench"
          className="h-full w-full object-cover"
        />
        <div className="px-6 py-16 lg:px-16">
          <p className="text-xs tracking-luxe uppercase text-muted">
            The Atelier
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance">
            From a small workshop to your wrist
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Each piece passes through the hands of a single artisan — braided,
            polished, and inspected before it ever reaches its box. We keep our
            runs small and our standards high, so every Brace up bracelet feels
            considered.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-cream-dark">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-3 lg:px-8 lg:py-20">
          {values.map((v, i) => (
            <div key={v.title}>
              <span className="font-serif text-3xl text-forest/40">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-foreground">
                {v.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-5xl text-forest">{s.value}</p>
              <p className="mt-2 text-xs tracking-wide-sm uppercase text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-center lg:flex-row lg:px-8 lg:text-left">
          <h2 className="font-serif text-4xl text-balance">
            Find the piece that becomes yours
          </h2>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-cream px-8 py-4 text-sm tracking-wide-sm uppercase text-forest transition-colors hover:bg-silver-light"
          >
            Shop Bracelets
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
