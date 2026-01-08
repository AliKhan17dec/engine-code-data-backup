import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Info } from "lucide-react";
import Link from "next/link";
import { getEnginesForBrand } from "@/app/lib/engine-data";

type Props = {
  brand: string;
  engine: string;
};

function formatEngineId(id: string) {
  // ensure no spaces, use hyphens and uppercase
  return id.replace(/\s+/g, "-").toUpperCase();
}

function titleCase(str: string) {
  return str
    .split(/[\s-]+/)
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : ""))
    .join(" ");
}

const RelatedEngines = async ({ brand, engine }: Props) => {
  const engines = await getEnginesForBrand(brand);

  const index = engines.findIndex((e) => e.id === engine);

  // If current engine not found, just show first 7
  if (index === -1) {
    const fallback = engines.slice(0, 7);
    return (
      <Card className="bg-gradient-to-br from-white via-yellow-50 to-yellow-100 dark:from-gray-900 dark:via-yellow-950/30 dark:to-yellow-900 border border-border shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-lg">
              <Info className="h-5 w-5 text-black dark:text-black" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Related Engines
              </h3>
              <p className="text-sm text-muted-foreground">{titleCase(brand)}</p>
            </div>
          </div>

          <div className="space-y-2">
            {fallback.map((item) => (
              <Link
                key={item.id}
                href={`/${brand}/${item.id}-specs`}
                className="flex items-center justify-between p-3 border border-border rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-950/20 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors duration-300"
              >
                <span className="text-foreground font-medium">{`${titleCase(brand)} ${formatEngineId(item.id)}`}</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // desired behaviour: 3 engines before the current, and 4 engines after (exclude current)
  const prevStart = Math.max(0, index - 3);
  const prev = engines.slice(prevStart, index); // up to 3 before
  const next = engines.slice(index + 1, index + 1 + 4); // up to 4 after (exclude current)

  let related = [...prev, ...next];

  // If we don't have 7, try to fill by preferring after, then before
  let left = prevStart - 1; // index of one before prevStart
  let right = index + 1 + 4; // next index after the slice we took
  while (related.length < 7 && (right < engines.length || left >= 0)) {
    if (right < engines.length) {
      related.push(engines[right]);
      right++;
      continue;
    }
    if (left >= 0) {
      related.unshift(engines[left]);
      left--;
      continue;
    }
  }

  // ensure uniqueness and limit to 7
  const uniqueRelated = Array.from(new Map(related.map((r) => [r.id, r])).values()).slice(0, 7);

  return (
    <Card className="bg-gradient-to-br from-white via-yellow-50 to-yellow-100 dark:from-gray-900 dark:via-yellow-950/30 dark:to-yellow-900 border border-border shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-lg">
            <Info className="h-5 w-5 text-black dark:text-black" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Related Engines
            </h3>
            <p className="text-sm text-muted-foreground">{titleCase(brand)}</p>
          </div>
        </div>

        <div className="space-y-2">
          {uniqueRelated.map((item) => (
            <Link
              key={item.id}
              href={`/${brand}/${item.id}-specs`}
              className="flex items-center justify-between p-3 border border-border rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-950/20 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors duration-300"
            >
              <span className="text-foreground font-medium">{`${titleCase(brand)} ${formatEngineId(item.id)}`}</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedEngines;
