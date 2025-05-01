import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export function NavBar() {
  return (
    <nav className="h-20 p-4 border-b-2 flex items-center">
      <Link
        href="/"
        className={cn("text-5xl font-semibold", poppins.className)}
      >
        BizMate
      </Link>
    </nav>
  );
}
