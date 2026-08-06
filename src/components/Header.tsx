import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const nav = [
  { label: "Home", to: "/" },
  { label: "Bracelets", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm tracking-wide-sm uppercase transition-colors ${
      isActive ? "text-forest" : "text-muted hover:text-forest"
    } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-forest after:transition-all ${
      isActive ? "after:w-full" : "after:w-0"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-cream/90 backdrop-blur border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={linkClass}
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle menu"
              className="text-forest lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-6 w-6 cursor-pointer" strokeWidth={1.5} />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        <nav
          className={`border-t border-border px-5 ${open ? "max-h-96  py-4" : "max-h-0"} overflow-hidden transition-all duration-300  bg-cream  lg:hidden`}
        >
          <ul className="flex flex-col gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-sm tracking-wide-sm uppercase ${
                      isActive
                        ? "bg-forest text-cream"
                        : "text-forest hover:bg-cream-dark"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
