import { Link } from "react-router-dom";
import { ArrowRight, Award, Droplets, Gift, ShieldCheck } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/Productcard";

const features = [
  { icon: Award, title: "Premium Quality", sub: "925 sterling silver" },
  { icon: Droplets, title: "Water Resistant", sub: "Wear it every day" },
  { icon: Gift, title: "Luxury Packaging", sub: "Gift ready" },
  { icon: ShieldCheck, title: "6 Months Warranty", sub: "On every piece" },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="fadein">
            <p className="text-xs tracking-luxe uppercase text-cream/60">
              The Brace Collection
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
              Bracelets made for everyday elegance
            </h1>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              Hand-braided cord, full-grain leather, and polished silver.
              Timeless pieces crafted to be worn, layered, and lived in.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-cream px-7 py-3.5 text-sm tracking-wide-sm uppercase text-forest transition-colors hover:bg-silver-light"
              >
                Shop Bracelets
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-cream/40 px-7 py-3.5 text-sm tracking-wide-sm uppercase text-cream transition-colors hover:bg-cream/10"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="../assets/hero-bracelet.webp"
                alt="Emerald braided cord bracelet with polished silver clasp"
                className="w-full object-cover"
                width={1600}
                height={1600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden bg-cream px-6 py-4 text-forest sm:block">
              <p className="font-serif text-3xl">EGP 1,499</p>
              <p className="text-[11px] tracking-wide-sm uppercase text-muted">
                Signature Hero
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4 lg:px-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <f.icon
                className="h-8 w-8 shrink-0 text-forest"
                strokeWidth={1.25}
              />
              <div>
                <p className="text-sm font-medium text-foreground">{f.title}</p>
                <p className="text-xs text-muted">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-luxe uppercase text-muted">
              Best Sellers
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground text-balance">
              Loved by our community
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-2 text-sm tracking-wide-sm uppercase text-forest hover:text-forest-light sm:inline-flex"
          >
            View all <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Lifestyle band */}
      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
          <img
            src="../assets/lifestyle-wrist.webp"
            alt="Wrist wearing a forest green braided bracelet"
            className="h-full w-full object-cover"
            width={1600}
            height={1600}
            loading="lazy"
            decoding="async"
          />
          <div className="px-6 py-16 lg:px-16">
            <p className="text-xs tracking-luxe uppercase text-muted">
              The Signature
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground text-balance lg:text-5xl">
              One iconic piece. Endless ways to wear it.
            </h2>
            <p className="mt-6 max-w-md text-muted leading-relaxed">
              The Emerald Braided Cord is where Brace began — a deep forest
              green braid finished in polished silver. Layer it, stack it, or
              let it stand alone.
            </p>
            <Link
              to="/products/emerald-braided-cord"
              className="mt-8 inline-flex items-center gap-2 bg-forest px-7 py-3.5 text-sm tracking-wide-sm uppercase text-cream transition-colors hover:bg-forest-dark"
            >
              Shop the Signature
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
        <p className="text-xs tracking-luxe uppercase text-muted">
          Join the Brace Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl text-foreground text-balance">
          Be first to see new arrivals
        </h2>
        <p className="mt-4 text-muted">
          Early access, private drops, and 10% off your first order.
        </p>
      </section>
    </>
  );
}
