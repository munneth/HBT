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
        <NavigationMenuList className="text-lg font-semibold">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="px-6 py-3 text-lg font-semibold">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/resources"
                className="px-6 py-3 text-lg font-semibold"
              >
                Resources
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/application"
                className="px-6 py-3 text-lg font-semibold"
              >
                Application
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className="px-6 py-3 text-lg font-semibold">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className="px-6 py-3 text-lg font-semibold">
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
