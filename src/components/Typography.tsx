import * as React from "react";
import { cn } from "@/lib/utils";

type SHProps = React.ComponentProps<"p">;
const SH = React.forwardRef<HTMLHeadingElement, SHProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-muted-foreground mb-8 text-lg leading-relaxed",
        className,
      )}
      {...props}
    />
  ),
);
SH.displayName = "Sh";

// H1
type H1Props = React.ComponentProps<"h1">;
const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "text-4xl md:text-5xl font-bold text-foreground text-center mb-6",
        className,
      )}
      {...props}
    />
  ),
);
H1.displayName = "H1";

// H2
type H2Props = React.ComponentProps<"h2">;
const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "text-3xl md:text-4xl font-semibold leading-tight",
        className,
      )}
      {...props}
    />
  ),
);
H2.displayName = "H2";

// H3
type H3Props = React.ComponentProps<"h3">;
const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl md:text-3xl font-semibold", className)}
      {...props}
    />
  ),
);
H3.displayName = "H3";

// H4
type H4Props = React.ComponentProps<"h4">;
const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn("text-xl md:text-2xl font-medium", className)}
      {...props}
    />
  ),
);
H4.displayName = "H4";

// H5
type H5Props = React.ComponentProps<"h5">;
const H5 = React.forwardRef<HTMLHeadingElement, H5Props>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("text-lg md:text-xl font-medium", className)}
      {...props}
    />
  ),
);
H5.displayName = "H5";

// H6
type H6Props = React.ComponentProps<"h6">;
const H6 = React.forwardRef<HTMLHeadingElement, H6Props>(
  ({ className, ...props }, ref) => (
    <h6
      ref={ref}
      className={cn("text-base font-medium", className)}
      {...props}
    />
  ),
);
H6.displayName = "H6";

// P
type PProps = React.ComponentProps<"p">;
const P = React.forwardRef<HTMLParagraphElement, PProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  ),
);
P.displayName = "P";

// Span
type SpanProps = React.ComponentProps<"span">;
const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn("", className)} {...props} />
  ),
);
Span.displayName = "Span";

// Small
type SmallProps = React.ComponentProps<"small">;
const Small = React.forwardRef<HTMLElement, SmallProps>(
  ({ className, ...props }, ref) => (
    <small
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
);
Small.displayName = "Small";

// Blockquote
type BlockquoteProps = React.ComponentProps<"blockquote">;
const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("border-l-4 pl-4 italic text-muted-foreground", className)}
      {...props}
    />
  ),
);
Blockquote.displayName = "Blockquote";

// Ul
type UlProps = React.ComponentProps<"ul">;
const Ul = React.forwardRef<HTMLUListElement, UlProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("list-disc list-inside space-y-2", className)}
      {...props}
    />
  ),
);
Ul.displayName = "Ul";

// Ol
type OlProps = React.ComponentProps<"ol">;
const Ol = React.forwardRef<HTMLOListElement, OlProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("list-decimal list-inside space-y-2", className)}
      {...props}
    />
  ),
);
Ol.displayName = "Ol";

// Li
type LiProps = React.ComponentProps<"li">;
const Li = React.forwardRef<HTMLLIElement, LiProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  ),
);
Li.displayName = "Li";

// Code
type CodeProps = React.ComponentProps<"code">;
const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "px-1 py-0.5 bg-muted rounded text-sm font-mono",
        className,
      )}
      {...props}
    />
  ),
);
Code.displayName = "Code";

// Strong
type StrongProps = React.ComponentProps<"strong">;
const Strong = React.forwardRef<HTMLElement, StrongProps>(
  ({ className, ...props }, ref) => (
    <strong
      ref={ref}
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  ),
);
Strong.displayName = "Strong";

// Em
type EmProps = React.ComponentProps<"em">;
const Em = React.forwardRef<HTMLElement, EmProps>(
  ({ className, ...props }, ref) => (
    <em ref={ref} className={cn("italic", className)} {...props} />
  ),
);
Em.displayName = "Em";

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  SH,
  P,
  Span,
  Small,
  Blockquote,
  Ul,
  Ol,
  Li,
  Code,
  Strong,
  Em,
};
