import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function ProdNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-lg font-semibold bg-gray-100 rounded-lg py-2">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-12 py-2 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/resources"
              className="px-12 py-2 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Resources
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="px-12 py-2 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="px-12 py-2 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            >
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/application"
              className="px-12 py-2 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Apply
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
