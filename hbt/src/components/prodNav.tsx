import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function ProdNav() {
  return (
    <NavigationMenu className="w-full">
      {/* Dark bar similar to the reference design */}
      <NavigationMenuList
        className="text-base md:text-lg font-semibold bg-gray-800 py-3 px-10 w-full flex items-stretch justify-between gap-8"
        style={{
          clipPath:
            "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
        }}
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-12 py-4 text-base md:text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/resources"
              className="px-12 py-4 text-base md:text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Resources
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="px-12 py-4 text-base md:text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Apply button */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/apply"
              className="px-12 py-4 text-base md:text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Apply
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
