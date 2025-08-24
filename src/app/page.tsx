import { getAllBrands } from "@/app/lib/engine-data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engine Database - All Brands",
  description:
    "Browse our comprehensive database of automotive engines by manufacturer",
};

const BrandsPage = async () => {
  const brands = await getAllBrands();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Engine Database
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/${brand.id}`}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-foreground capitalize">
                {brand.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {brand.engineCount}{" "}
                {brand.engineCount === 1 ? "engine" : "engines"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
