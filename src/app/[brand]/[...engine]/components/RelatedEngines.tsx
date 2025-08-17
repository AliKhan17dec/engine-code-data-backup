import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Info } from "lucide-react";
import Link from "next/link";

const RelatedEngines = () => {
  return (
    <Card className="bg-background border border-border shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400 dark:bg-yellow-500 rounded-lg">
            <Info className="h-5 w-5 text-black dark:text-black" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Related Engines
            </h3>
            <p className="text-sm text-muted-foreground">
              BMW N47D20 Series Variants
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            "BMW N47D20B",
            "BMW N47D20C",
            "BMW N47D20D",
            "BMW N47D20O0",
            "BMW N47D20O1",
            "BMW N47D20U0",
            "BMW N47D20U1",
          ].map((engine, idx) => (
            <Link
              key={idx}
              href="#"
              className="flex items-center justify-between p-3 border border-border rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-950/20 hover:border-yellow-300 dark:hover:border-yellow-600 transition-colors duration-300"
            >
              <span className="text-foreground font-medium">{engine} </span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded"> */}
        {/*   <div className="flex items-start gap-2"> */}
        {/*     <Info className="h-4 w-4 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" /> */}
        {/*     <p className="text-sm text-yellow-800 dark:text-yellow-200"> */}
        {/*       These engines share similar specifications and may have compatible */}
        {/*       parts. Always verify compatibility before ordering. */}
        {/*     </p> */}
        {/*   </div> */}
        {/* </div> */}
      </CardContent>
    </Card>
  );
};
export default RelatedEngines;
