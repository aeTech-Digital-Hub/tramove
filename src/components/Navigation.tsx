import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-hover"></div>
          <span className="text-xl font-bold text-foreground">Company</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant={location.pathname === link.href ? "default" : "ghost"}
              asChild
              className="transition-all duration-300"
            >
              <Link to={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <Button className="hidden md:inline-flex">
          Get Started
        </Button>

        {/* Mobile menu button - simplified for now */}
        <Button variant="ghost" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Navigation;