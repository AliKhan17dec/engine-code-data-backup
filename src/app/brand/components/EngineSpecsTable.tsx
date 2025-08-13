import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableData } from "../types";

export interface EngineSpecsTableProps {
  data: TableData; // where TableData is Array<Record<string, string | number | null | undefined>>
}
export function EngineSpecsTable({ data }: EngineSpecsTableProps) {
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="w-full  my-6 mx-auto text-8xl">
      <div className="rounded-2xl shadow-lg border border-border overflow-hidden">
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
    </div>
  );
}
