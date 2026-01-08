import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center p-4 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl font-bold">Engine Code</h1>
      </div>

      <nav className="flex justify-center gap-4">
        <Link href="/" className="text-md hover:underline">Home</Link>
        <Link href="/blog" className="text-md hover:underline">Blog</Link>
      </nav>

      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
