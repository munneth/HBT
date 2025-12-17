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
      <NavigationMenuList className="text-xl font-semibold bg-gray-100 py-2 px-32 w-full" style={{ clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)' }}>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-24 py-2 text-xl font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/resources"
              className="px-24 py-2 text-xl font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Resources
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="px-24 py-2 text-xl font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/apply"
              className="px-24 py-2 text-xl font-semibold text-black hover:text-gray-600 transition-colors"
            >
              Apply
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
