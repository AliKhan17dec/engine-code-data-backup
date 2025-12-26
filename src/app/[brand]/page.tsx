// import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";
//
// type BrandPageProps = {
//   params: Promise<{
//     brand: string;
//   }>;
// };
//
// export async function generateMetadata(
//   props: BrandPageProps,
// ): Promise<Metadata> {
//   const params = await props.params;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === params.brand);
//
//   if (!brand) {
//     return {
//       title: "Brand Not Found",
//       description:
//         "The requested automotive brand could not be found in our database",
//     };
//   }
//
//   return {
//     title: `${brand.name} Engines`,
//     description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
//   };
// }
//
// export default async function BrandPage(props: BrandPageProps) {
//   const params = await props.params;
//   const brandId = params.brand;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === brandId);
//
//   if (!brand) {
//     notFound();
//   }
//
//   const engines = await getEnginesForBrand(brandId);
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-slate-900 mb-4">
//             {brand.name}
//             <span className="text-blue-600"> Engines</span>
//           </h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Discover our complete collection of {brand.engineCount}{" "}
//             high-performance engines
//           </p>
//           <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
//         </div>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {engines.map((engine) => (
//             <Link
//               key={engine.id}
//               href={`/${brandId}/${engine.id}-specs`}
//               className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
//             >
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
//                   {engine.name}
//                 </h2>
//                 <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
//               </div>
//
//               <p className="text-slate-600 mb-4 leading-relaxed">
//                 Detailed specifications and performance data
//               </p>
//
//               <div className="flex items-center gap-4 text-sm text-slate-500">
//                 <div className="flex items-center gap-1">
//                   <Settings className="w-4 h-4" />
//                   <span>Specs</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Gauge className="w-4 h-4" />
//                   <span>Performance</span>
//                 </div>
//               </div>
//
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//             </Link>
//           ))}
//         </div>
//
//         {engines.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Zap className="w-12 h-12 text-slate-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-3">
//               No Engines Available
//             </h3>
//             <p className="text-lg text-slate-600 max-w-md mx-auto">
//               We&apos;re currently updating our {brand.name} engine database.
//               Please check back soon for the latest specifications.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//
// // Generate static params for all brands
// export async function generateStaticParams() {
//   const brands = await getAllBrands();
//   return brands.map((brand) => ({
//     brand: brand.id,
//   }));
// }
// import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";
//
// type BrandPageProps = {
//   params: Promise<{
//     brand: string;
//   }>;
// };
//
// export async function generateMetadata(
//   props: BrandPageProps,
// ): Promise<Metadata> {
//   const params = await props.params;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === params.brand);
//
//   if (!brand) {
//     return {
//       title: "Brand Not Found",
//       description:
//         "The requested automotive brand could not be found in our database",
//     };
//   }
//
//   return {
//     title: `${brand.name} Engines`,
//     description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
//   };
// }
//
// export default async function BrandPage(props: BrandPageProps) {
//   const params = await props.params;
//   const brandId = params.brand;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === brandId);
//
//   if (!brand) {
//     notFound();
//   }
//
//   const engines = await getEnginesForBrand(brandId);
//
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-foreground mb-4">
//             {brand.name}
//             <span className="text-muted-foreground"> Engines</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Discover our complete collection of {brand.engineCount}{" "}
//             high-performance engines
//           </p>
//           <div className="w-24 h-1 bg-muted-foreground/50 mx-auto mt-6 rounded-full"></div>
//         </div>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {engines.map((engine) => (
//             <Link
//               key={engine.id}
//               href={`/${brandId}/${engine.id}-specs`}
//               className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-muted-foreground hover:-translate-y-1"
//             >
//               <div className="flex justify-between">
//                 <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
//                   {engine.name}
//                 </h2>
//                 <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all" />
//               </div>
//
//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 Detailed specifications and performance data
//               </p>
//
//               <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                 <div className="flex items-center gap-1">
//                   <Settings className="w-4 h-4" />
//                   <span>Specs</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Gauge className="w-4 h-4" />
//                   <span>Performance</span>
//                 </div>
//               </div>
//
//               <div className="absolute inset-0 bg-gradient-to-br from-muted/0 to-muted/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//             </Link>
//           ))}
//         </div>
//
//         {engines.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
//               <Zap className="w-12 h-12 text-muted-foreground" />
//             </div>
//             <h3 className="text-2xl font-bold text-foreground mb-3">
//               No Engines Available
//             </h3>
//             <p className="text-lg text-muted-foreground max-w-md mx-auto">
//               We&apos;re currently updating our {brand.name} engine database.
//               Please check back soon for the latest specifications.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//
// // Generate static params for all brands
// export async function generateStaticParams() {
//   const brands = await getAllBrands();
//   return brands.map((brand) => ({
//     brand: brand.id,
//   }));
// }
// import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";
//
// type BrandPageProps = {
//   params: Promise<{
//     brand: string;
//   }>;
// };
//
// export async function generateMetadata(
//   props: BrandPageProps,
// ): Promise<Metadata> {
//   const params = await props.params;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === params.brand);
//
//   if (!brand) {
//     return {
//       title: "Brand Not Found",
//       description:
//         "The requested automotive brand could not be found in our database",
//     };
//   }
//
//   return {
//     title: `${brand.name} Engines`,
//     description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
//   };
// }
//
// export default async function BrandPage(props: BrandPageProps) {
//   const params = await props.params;
//   const brandId = params.brand;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === brandId);
//
//   if (!brand) {
//     notFound();
//   }
//
//   const engines = await getEnginesForBrand(brandId);
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black transition-all duration-500">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             {brand.name}
//             <span className="text-blue-600 dark:text-blue-400"> Engines</span>
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Discover our complete collection of {brand.engineCount}{" "}
//             high-performance engines
//           </p>
//           <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
//         </div>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {engines.map((engine) => (
//             <Link
//               key={engine.id}
//               href={`/${brandId}/${engine.id}-specs`}
//               className="group relative rounded-2xl overflow-hidden
//                          bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-black
//                          p-8 shadow-sm hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-gray-900
//                          border border-gray-200 dark:border-gray-700
//                          transition-all duration-500 hover:-translate-y-1"
//             >
//               <div className="flex justify-between items-start">
//                 <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
//                   {engine.name}
//                 </h2>
//                 <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
//               </div>
//
//               <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed mt-2">
//                 Detailed specifications and performance data
//               </p>
//
//               <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
//                 <div className="flex items-center gap-1">
//                   <Settings className="w-4 h-4" />
//                   <span>Specs</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Gauge className="w-4 h-4" />
//                   <span>Performance</span>
//                 </div>
//               </div>
//
//               {/* Subtle interactive overlay */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50 dark:via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all pointer-events-none rounded-2xl"></div>
//             </Link>
//           ))}
//         </div>
//
//         {engines.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Zap className="w-12 h-12 text-gray-400 dark:text-gray-500" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//               No Engines Available
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
//               We&apos;re currently updating our {brand.name} engine database.
//               Please check back soon for the latest specifications.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//
// export async function generateStaticParams() {
//   const brands = await getAllBrands();
//   return brands.map((brand) => ({
//     brand: brand.id,
//   }));
// }
// import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";
//
// type BrandPageProps = {
//   params: Promise<{
//     brand: string;
//   }>;
// };
//
// export async function generateMetadata(
//   props: BrandPageProps,
// ): Promise<Metadata> {
//   const params = await props.params;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === params.brand);
//
//   if (!brand) {
//     return {
//       title: "Brand Not Found",
//       description:
//         "The requested automotive brand could not be found in our database",
//     };
//   }
//
//   return {
//     title: `${brand.name} Engines`,
//     description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
//   };
// }
//
// export default async function BrandPage(props: BrandPageProps) {
//   const params = await props.params;
//   const brandId = params.brand;
//   const brands = await getAllBrands();
//   const brand = brands.find((b) => b.id === brandId);
//
//   if (!brand) {
//     notFound();
//   }
//
//   const engines = await getEnginesForBrand(brandId);
//
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black transition-colors duration-500">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             {brand.name}
//             <span className="text-blue-600 dark:text-blue-400"> Engines</span>
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Discover our complete collection of {brand.engineCount}{" "}
//             high-performance engines
//           </p>
//           <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-6 rounded-full"></div>
//         </div>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {engines.map((engine) => (
//             <Link
//               key={engine.id}
//               href={`/${brandId}/${engine.id}-specs`}
//               className="group relative rounded-2xl overflow-hidden
//                          bg-gradient-to-br from-white to-gray-50
//                          dark:from-gray-800 dark:to-black
//                          p-8 shadow-sm border border-gray-200 dark:border-gray-700
//                          hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-gray-900
//                          transition-all duration-300 hover:-translate-y-1"
//             >
//               {/* Smooth gradient overlay using pseudo-element (simulated via div) */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 dark:from-blue-900/30 via-blue-100/60 dark:via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
//
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="flex justify-between items-start">
//                   <h2 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
//                     {engine.name}
//                   </h2>
//                   <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1" />
//                 </div>
//
//                 <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed mt-2">
//                   Detailed specifications and performance data
//                 </p>
//
//                 <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
//                   <div className="flex items-center gap-1">
//                     <Settings className="w-4 h-4" />
//                     <span>Specs</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Gauge className="w-4 h-4" />
//                     <span>Performance</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//
//         {engines.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Zap className="w-12 h-12 text-gray-400 dark:text-gray-500" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//               No Engines Available
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
//               We&apos;re currently updating our {brand.name} engine database.
//               Please check back soon for the latest specifications.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//
// export async function generateStaticParams() {
//   const brands = await getAllBrands();
//   return brands.map((brand) => ({
//     brand: brand.id,
//   }));
// }
import { getEnginesForBrand, getAllBrands } from "@/app/lib/engine-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Zap, Settings, Gauge } from "lucide-react";

const formatEngineCode = (code: string) =>
  code.replace(/\s+/g, "-").toUpperCase();


type BrandPageProps = {
  params: Promise<{
    brand: string;
  }>;
};

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const brands = await getAllBrands();
  const brand = brands.find((b) => b.id === resolvedParams.brand);

  if (!brand) {
    return {
      title: "Brand Not Found",
      description:
        "The requested automotive brand could not be found in our database",
    };
  }

  return {
    title: `${brand.name} Engines`,
    description: `Explore all ${brand.engineCount} engine models from ${brand.name}`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const resolvedParams = await params;
  const brandId = resolvedParams.brand;
  const brands = await getAllBrands();
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    notFound();
  }

  const engines = await getEnginesForBrand(brandId);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            {brand.name}
            <span className="text-primary"> Engines</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of {brand.engineCount}{" "}
            high-performance engines
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Engine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {engines.map((engine) => (
            <Link
              key={engine.id}
              href={`/${brandId}/${engine.id}-specs`}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300">
  {formatEngineCode(engine.name)}
</h2>

                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-sm text-muted-foreground mt-2 mb-4">
                Detailed specifications and performance data
              </p>

              {/* <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Settings className="w-3 h-3" />
                  <span>Specs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="w-3 h-3" />
                  <span>Performance</span>
                </div>
              </div> */}
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {engines.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              No Engines Available
            </h3>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We&apos;re currently updating our {brand.name} engine database.
              Please check back soon for the latest specifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Static generation
export async function generateStaticParams() {
  const brands = await getAllBrands();
  return brands.map((brand) => ({
    brand: brand.id,
  }));
}
