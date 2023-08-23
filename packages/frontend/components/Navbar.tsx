import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="border-b sticky top-0">
      <div className="flex h-16 items-center px-4 sticky">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary`}
          >
            Home
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Customers
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline">Sign in</Button>
        </div>
      </div>
    </div>
  );
}
export default MainNav;
