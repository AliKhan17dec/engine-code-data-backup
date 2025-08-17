import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
export interface EngineSpecsTableProps {
  data: TableData;
}

export function EngineSpecsTable({ data }: EngineSpecsTableProps) {
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="w-full my-6 mx-auto">
      <div
        aria-label="Desktop-Table"
        className="rounded-2xl shadow-lg border border-border overflow-hidden hidden lg:block"
      >
        <Table className="w-full table-fixed">
          <TableHeader className="bg-[#383838]">
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={String(col)}
                  className="font-medium text-[#d0d0d0] px-5 break-words"
                >
                  {String(col).charAt(0).toUpperCase() + String(col).slice(1)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className={`transition-colors ${
                  rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"
                } hover:bg-muted/50`}
              >
                {columns.map((col) => (
                  <TableCell
                    key={String(col)}
                    className={`px-5 break-words ${
                      col === columns[0] ? "font-medium" : ""
                    }`}
                  >
                    {row[col]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div aria-label="Mobile Table" className="lg:hidden space-y-4 mx-auto">
        {data.map((row, rowIndex) => {
          const isSourceColumn =
            columns.length > 0 &&
            (columns[columns.length - 1].toLowerCase() === "source" ||
              columns[columns.length - 1].toLowerCase() === "oem source");
          const displayColumns = isSourceColumn
            ? columns.slice(0, -1)
            : columns;
          // Source value if applicable
          const sourceValue = isSourceColumn
            ? row[columns[columns.length - 1]]
            : null;

          return (
            <Card
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-muted/30" : "bg-background"}
            >
              <CardContent className="p-4">
                <div className="space-y-2">
                  {displayColumns.map((col) => (
                    <div key={String(col)} className="flex">
                      <div className="font-bold text-[#d0d0d0] w-1/3 truncate">
                        {String(col).charAt(0).toUpperCase() +
                          String(col).slice(1)}
                        :
                      </div>
                      <div className="w-2/3 break-words">{row[col]}</div>
                    </div>
                  ))}

                  {isSourceColumn && sourceValue && (
                    <details className="mt-2 pt-2 border-t border-border">
                      <summary className="cursor-pointer flex items-center justify-center text-primary hover:underline list-none">
                        <FileText className="h-4 w-4 mr-1" />
                        View Source
                      </summary>
                      <div className="mt-2 pl-5 text-sm text-muted-foreground break-words text-center">
                        {sourceValue}
                      </div>
                    </details>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
