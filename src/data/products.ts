export type Product = {
  id: string
  slug: string
  name: string
  price: number
  category: string
  color: string
  image: string
  badge?: string
  bestSeller?: boolean
  description: string
  details: string[]
}

export const products: Product[] = [
  {
    id: "1",
    slug: "emerald-braided-cord",
    name: "Emerald Braided Cord",
    price: 1299,
    category: "Cord",
    color: "Forest Green",
    image: "/products/green-braided.webp",
    badge: "New Arrival",
    bestSeller: true,
    description:
      "A modern classic. Hand-braided premium cord in deep forest green, finished with polished silver adjustable clasps. Designed for everyday elegance.",
    details: [
      "Premium waxed braided cord",
      "925 sterling silver clasp",
      "Water resistant finish",
      "Adjustable 15–22 cm",
    ],
  },
  {
    id: "2",
    slug: "atelier-silver-chain",
    name: "Atelier Silver Chain",
    price: 1899,
    category: "Chain",
    color: "Silver",
    image: "/products/silver-chain.webp",
    badge: "Signature",
    description:
      "A refined polished silver chain with a minimalist charm. Understated shine that pairs with everything from linen to leather.",
    details: [
      "925 sterling silver",
      "Hypoallergenic finish",
      "Secure lobster clasp",
      "Length 18 cm",
    ],
  },
  {
    id: "3",
    slug: "onyx-stone-beaded",
    name: "Onyx Stone Beaded",
    price: 1149,
    category: "Beaded",
    color: "Matte Black",
    image: "/products/black-beaded.webp",
    bestSeller: true,
    description:
      "Natural matte black stone beads anchored by a single polished silver accent. Grounding, tactile, and effortlessly modern.",
    details: [
      "Natural onyx stone beads",
      "Silver accent bead",
      "Elastic secure fit",
      "One size fits most",
    ],
  },
  {
    id: "4",
    slug: "heritage-tan-leather",
    name: "Heritage Tan Leather",
    price: 1399,
    category: "Leather",
    color: "Tan",
    image: "/products/tan-leather.webp",
    badge: "New Arrival",
    description:
      "Braided full-grain tan leather with a brushed silver magnetic clasp. Warm, characterful, and built to age beautifully.",
    details: [
      "Full-grain braided leather",
      "Brushed silver magnetic clasp",
      "Ages with a natural patina",
      "Length 20 cm",
    ],
  },
  {
    id: "5",
    slug: "midnight-navy-cord",
    name: "Midnight Navy Cord",
    price: 1249,
    category: "Cord",
    color: "Navy",
    image: "/products/navy-cord.webp",
    description:
      "Deep navy braided cord with polished silver adjustable clasps. A quiet alternative to the emerald, equally at home day or night.",
    details: [
      "Premium waxed braided cord",
      "925 sterling silver clasp",
      "Water resistant finish",
      "Adjustable 15–22 cm",
    ],
  },
  {
    id: "6",
    slug: "signature-hero-set",
    name: "Signature Hero Bracelet",
    price: 1499,
    category: "Cord",
    color: "Forest Green",
    image: "/products/hero-bracelet.webp",
    badge: "Best Seller",
    bestSeller: true,
    description:
      "Our defining piece. The emerald braided cord elevated with a sculpted silver centerpiece — the heart of the Aurel collection.",
    details: [
      "Premium waxed braided cord",
      "Sculpted 925 silver centerpiece",
      "Luxury gift packaging",
      "Adjustable 15–22 cm",
    ],
  },
]

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)
