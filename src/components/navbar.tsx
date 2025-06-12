"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pathname !== "/" && (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="px-4 py-2 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}

        {/* ✅ Only show "Characters" if NOT on /characters/[id]/episodes */}
        {!pathname?.startsWith("/characters/") ||
        (pathname?.includes("/characters") &&
          !pathname?.includes("/episodes")) ? (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/characters"
                className="px-4 py-2 hover:text-primary transition-colors"
              >
                Characters
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ) : null}

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/episodes"
              className="px-4 py-2 hover:text-primary transition-colors"
            >
              Episodes
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/locations"
              className="px-4 py-2 hover:text-primary transition-colors"
            >
              Locations
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

