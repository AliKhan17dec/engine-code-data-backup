import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center p-4 max-w-7xl mx-auto">
      
      {/* Logo */}
      <div className="flex items-center">
        {/* Light mode logo */}
        <Image
          src="/enginecode-logo-lightmode.png"
          alt="Engine Code"
          width={80}
          height={20}
          priority
          className="block dark:hidden"
        />

        {/* Dark mode logo */}
        <Image
          src="/enginecode-logo-darkmode.png"
          alt="Engine Code"
          width={80}
          height={20}
          priority
          className="hidden dark:block"
        />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-4">
        <Link href="/" className="text-md hover:underline">Home</Link>
        <Link href="/blog" className="text-md hover:underline">Blog</Link>
      </nav>

      {/* Theme toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
