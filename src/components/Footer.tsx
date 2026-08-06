import { Link } from "react-router-dom";
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";
import Logo from "./Logo";

const perks = [
  { icon: Truck, title: "Free Delivery", sub: "On orders over EGP 999" },
  { icon: RotateCcw, title: "Easy Returns", sub: "Within 14 days" },
  { icon: ShieldCheck, title: "Safe Payment", sub: "100% secure" },
  { icon: Headphones, title: "Customer Support", sub: "We're here to help" },
];

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-border bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 lg:grid-cols-4 lg:px-8">
          {perks.map((p) => (
            <div key={p.title} className="flex items-center gap-3">
              <p.icon
                className="h-7 w-7 shrink-0 text-forest"
                strokeWidth={1.25}
              />
              <div>
                <p className="text-sm font-medium text-foreground">{p.title}</p>
                <p className="text-xs text-muted">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Handcrafted bracelets in braided cord, leather, and polished
              silver — made For everyday elegance.
            </p>
          </div>

          <FooterCol
            title="Shop"
            links={[
              {
                label: "All Bracelets",
                to: "/products",
                onClick: () => window.scrollTo(0, 0),
              },
              {
                label: "Cord",
                to: "/products",
                onClick: () => window.scrollTo(0, 0),
              },
              {
                label: "Silver",
                to: "/products",
                onClick: () => window.scrollTo(0, 0),
              },
              {
                label: "Leather",
                to: "/products",
                onClick: () => window.scrollTo(0, 0),
              },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              {
                label: "About Us",
                to: "/about",
                onClick: () => window.scrollTo(0, 0),
              },
              {
                label: "Contact",
                to: "/contact",
                onClick: () => window.scrollTo(0, 0),
              },
              {
                label: "Bracelets",
                to: "/products",
                onClick: () => window.scrollTo(0, 0),
              },
            ]}
          />

          <div>
            <h4 className="text-xs tracking-luxe uppercase text-cream/60">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-cream/70">
              Follow us on insgtram For new drops.
            </p>
            <div className="mt-4">
              <a href="https://www.instagram.com/braceup.eg/" target="_blank">
                <i className="fa-brands fa-instagram hover:text-white transition-all duration-200 fa-xl text-[#b3bdb4]"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row lg:px-8">
            <p>
              © {new Date().getFullYear()} Brace up Bracelets. All rights
              reserved.
            </p>
            <p className="tracking-wide-sm uppercase">Handcrafted in Egypt</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string; onClick?: () => void }[];
}) {
  return (
    <div>
      <h4 className="text-xs tracking-luxe uppercase text-cream/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              onClick={l.onClick}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
