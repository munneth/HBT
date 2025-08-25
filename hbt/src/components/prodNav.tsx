import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function ProdNav() {
  return (
    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 z-50">
      <NavigationMenu>
        <NavigationMenuList className="text-lg font-semibold bg-gray-100 rounded-lg">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="px-6 py-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/resources"
                className="px-6 py-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Resources
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/application"
                className="px-6 py-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Application
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/contact"
                className="px-6 py-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="px-6 py-3 text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
