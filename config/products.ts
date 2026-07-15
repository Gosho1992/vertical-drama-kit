/**
 * ============================================================================
 * PRODUCT CONFIGURATION — EDIT THIS FILE ONLY
 * ============================================================================
 * This is the single source of truth for the Featured Collection section.
 * The homepage renders automatically from this array — no component code
 * needs to change when you add, remove, or edit a product.
 *
 * TO REPLACE A POSTER IMAGE:
 *   1. Drop your image into /public/posters/  (e.g. stay-away-from-me.jpg)
 *   2. Set `image: "/posters/stay-away-from-me.jpg"` below.
 *   Recommended: 2:3 portrait ratio, at least 1000x1500px, .jpg/.webp.
 *
 * TO REPLACE A GUMROAD LINK:
 *   Set `gumroad` to your product's Gumroad URL. Both the "View Details"
 *   and "Buy Now" buttons on the card open this URL in a new tab.
 *
 * TO ADD A NEW STORY / PRODUCT KIT:
 *   Copy one object below, give it a new unique `id`, and fill in the fields.
 *   It will automatically appear as a new card — no other file needs editing.
 * ============================================================================
 */

export type Product = {
  /** Unique identifier — must not repeat. */
  id: number;
  /** Product / story title shown on the card. */
  title: string;
  /** Path to the poster image (see /public/posters). */
  image: string;
  /** Gumroad checkout URL for this product. */
  gumroad: string;
  /** Genre tag, e.g. "Mafia Romance", "Enemies to Lovers". */
  genre: string;
  /** Version label, e.g. "Straight (ST) & Boys Love (BL)". */
  version: string;
  /** Short one-line description shown on hover / detail area. */
  tagline?: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Stay Away From Me",
    image: "/posters/stay-away-from-me-straight.jpg",
    gumroad: "https://zainzia.gumroad.com/l/wtrkf",
    genre: "Enemies to Lovers",
    version: "Straight (ST)",
    tagline: "A hate that hides. A heart that remembers.",
  },
  {
    id: 2,
    title: "The Last Promise",
    image: "/posters/the-last-promise-straight.jpg",
    gumroad: "https://zainzia.gumroad.com/l/ieizir",
    genre: "Second Chance Romance",
    version: "Straight (ST)",
    tagline: "Some promises change everything.",
  },
  {
    id: 3,
    title: "Stay Away From Me",
    image: "/posters/stay-away-from-me-boys-love.jpg",
    gumroad: "https://zainzia.gumroad.com/l/tasezu",
    genre: "Enemies to Lovers",
    version: "Boys Love (BL)",
    tagline: "Same roof. Same rules. Different hearts.",
  },
  {
    id: 4,
    title: "The Last Promise",
    image: "/posters/the-last-promise-boys-love.jpg",
    gumroad: "https://zainzia.gumroad.com/l/njfew",
    genre: "Second Chance Romance",
    version: "Boys Love (BL)",
    tagline: "Some promises change everything.",
  },
  {
    id: 5,
    title: "Bound by Contract",
    image: "/posters/bound-by-contract-straight.jpg",
    gumroad: "https://zainzia.gumroad.com/l/txlxnz",
    genre: "Office Romance",
    version: "Straight (ST)",
    tagline: "She was hired to manage his calendar. Not fall for him.",
  },
  {
    id: 6,
    title: "It's Too Big",
    image: "/posters/its-too-big-boys-love.jpg",
    gumroad: "https://zainzia.gumroad.com/l/pxodto",
    genre: "Age Gap Romance",
    version: "Boys Love (BL)",
    tagline: "Some things can't stay professional.",
  },
];
