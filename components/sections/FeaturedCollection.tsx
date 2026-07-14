"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/config/products";

export default function FeaturedCollection() {
  return (
    <section id="collection" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-studio-navy/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Four Complete Production Kits"
          description="Each kit is a full, standalone AI Vertical Drama package — story to screen. Click any poster to view it on Gumroad."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
