import { Link } from "react-router-dom";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-cream-dark">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-forest px-3 py-1 text-[10px] tracking-wide-sm uppercase text-cream">
            {product.badge}
          </span>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={1000}
          height={1000}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-forest py-3 text-center text-xs tracking-luxe uppercase text-cream transition-transform duration-300 group-hover:translate-y-0">
          View Details
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[11px] tracking-wide-sm uppercase text-muted">
          {product.category}
        </p>
        <h3 className="mt-1 font-serif text-lg text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-forest">
          EGP {product.price.toLocaleString()}.00
        </p>
      </div>
    </Link>
  );
}
