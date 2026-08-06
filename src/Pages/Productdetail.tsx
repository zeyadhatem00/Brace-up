import { Link, useParams } from "react-router-dom";
import { ChevronRight, Award, Droplets, Gift, ShieldCheck } from "lucide-react";
import { getProduct, products } from "../data/products";
import ProductCard from "../components/Productcard";

const perks = [
  { icon: Award, label: "Premium Quality" },
  { icon: Droplets, label: "Water Resistant" },
  { icon: Gift, label: "Luxury Packaging" },
  { icon: ShieldCheck, label: "6 Months Warranty" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug || "");

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-28 text-center">
        <h1 className="font-serif text-4xl text-foreground">Piece not found</h1>
        <p className="mt-4 text-muted">
          The bracelet you are looking htmlFor is no longer available.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-forest px-7 py-3.5 text-sm tracking-wide-sm uppercase text-cream hover:bg-forest-dark"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const gallery = [product.image];
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <nav className="flex items-center gap-2 text-xs tracking-wide-sm uppercase text-muted">
          <Link to="/" className="hover:text-forest">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-forest">
            Bracelets
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-forest">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2 lg:px-8 lg:py-14">
        {/* Gallery */}
        <div className="flex h-fit flex-col-reverse gap-4 sm:flex-row">
          <div className="flex gap-4 sm:flex-col">
            {gallery.map((img, i) => (
              <button
                key={i}
                className="w-20 shrink-0 overflow-hidden border border-border bg-cream-dark transition-colors hover:border-forest"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} view ${i + 1}`}
                  className="aspect-square w-full object-cover"
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden bg-cream-dark">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:pl-6">
          {product.badge && (
            <p className="text-xs tracking-luxe uppercase text-forest-light">
              {product.badge}
            </p>
          )}
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground text-balance lg:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-2xl text-forest">
            EGP {product.price.toLocaleString()}.00
          </p>

          <div className="mt-6 border-t border-border pt-6">
            <p className="max-w-md text-muted leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {perks.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <p.icon className="h-7 w-7 text-forest" strokeWidth={1.25} />
                <span className="text-[10px] tracking-wide-sm uppercase text-muted leading-tight">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          {/* Size */}
          {/* <div className="mt-8">
            <label className="text-xs tracking-wide-sm uppercase text-muted">Size</label>
            <div className="relative mt-2">
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full appearance-none border border-border bg-cream px-4 py-3.5 text-sm text-foreground focus:border-forest focus:outline-none"
              >
                <option>Adjustable</option>
                <option>Small (15–17 cm)</option>
                <option>Medium (17–19 cm)</option>
                <option>Large (19–22 cm)</option>
              </select>
              <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted" />
            </div>
          </div> */}

          {/* Quantity */}
          {/* <div className="mt-6 flex items-center gap-4">
            <span className="text-xs tracking-wide-sm uppercase text-muted">Quantity</span>
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-11 w-11 place-items-center text-forest hover:bg-cream-dark"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                aria-label="Increase quantity"
                className="grid h-11 w-11 place-items-center text-forest hover:bg-cream-dark"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div> */}

          {/* Actions */}
          <div className="mt-8 space-y-3">
            {/* <button
              onClick={handleAdd}
              className="flex w-full items-center justify-center gap-2 bg-forest py-4 text-sm tracking-wide-sm uppercase text-cream transition-colors hover:bg-forest-dark"
            >
              {added ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />}
              {added ? "Added to Bag" : "Add to Bag"}
            </button> */}
            <a href="https://www.instagram.com/braceup.eg/" target="_blank">
              {" "}
              <button className="w-full border cursor-pointer border-forest py-4 text-sm tracking-wide-sm uppercase text-forest transition-colors hover:bg-forest hover:text-cream">
                order throgh instagram
              </button>
            </a>
            {/* <button className="flex w-full items-center justify-center gap-2 py-3 text-sm tracking-wide-sm uppercase text-muted transition-colors hover:text-forest">
              <Heart className="h-5 w-5" strokeWidth={1.5} />
              Add to Wishlist
            </button> */}
          </div>

          {/* Details */}
          <div className="mt-10 border-t border-border pt-6">
            <h3 className="text-xs tracking-luxe uppercase text-foreground">
              Details
            </h3>
            <ul className="mt-4 space-y-2">
              {product.details.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground">
            You may also like
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
