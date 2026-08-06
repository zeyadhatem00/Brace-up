import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/Productcard";

const categories = ["All", "Cord", "Chain", "Beaded", "Leather"];

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active],
  );

  return (
    <>
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs tracking-luxe uppercase text-cream/60">Shop</p>
          <h1 className="mt-4 font-serif text-5xl text-balance">
            All Bracelets
          </h1>
          <p className="mt-4 max-w-xl text-cream/70 leading-relaxed">
            Every piece is hand-finished in premium materials and polished
            silver. Find the one that becomes yours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`border px-5 py-2 text-xs tracking-wide-sm uppercase transition-colors ${
                active === c
                  ? "border-forest bg-forest text-cream"
                  : "border-border bg-cream text-muted hover:border-forest hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-xs tracking-wide-sm uppercase text-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
