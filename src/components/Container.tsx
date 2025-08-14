import { cn } from "@/app/lib/utils"; // adjust path as needed
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  dark?: boolean;
}

const Container = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn("w-11/12 md:w-10/12 2xl:w-8/12 mx-auto py-16", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
