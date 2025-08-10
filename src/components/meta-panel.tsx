"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, Tags } from "lucide-react";
import { useState } from "react";

type MetaPanelProps = {
  title?: string;
  description?: string;
};

export default function MetaPanel({
  title = "N47D20A Engine Review 2025 | HP, Torque, Common Issues",
  description = "Complete database & guide to BMW N47D20A: specs, compatible models (1 Series, 3 Series, X3), common problems. Known for fuel efficiency & tuning potential.",
}: MetaPanelProps) {
  const [copied, setCopied] = useState<"title" | "desc" | null>(null);

  const copyToClipboard = async (text: string, kind: "title" | "desc") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <Card className="flex items-center gap-2 rounded-xl p-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          variant="outline"
          size="sm"
          className="justify-center gap-2 bg-transparent"
          onClick={() => copyToClipboard(title, "title")}
        >
          {copied === "title" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          Meta Title
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="justify-center gap-2 bg-transparent"
          onClick={() => copyToClipboard(description, "desc")}
        >
          {copied === "desc" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          Meta Description
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="justify-center gap-2"
          title="SEO helpers"
        >
          <Tags className="h-4 w-4" />
          SEO
        </Button>
      </div>
    </Card>
  );
}
