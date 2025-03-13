"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  // This would be replaced with actual auth state
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">SocialPlatform</span>
        </Link>
        <div className="hidden md:flex md:items-center md:gap-5">
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/" ? "text-foreground font-medium" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link
              href="/explore"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/explore" ? "text-foreground font-medium" : "text-foreground/60"
              }`}
            >
              Explore
            </Link>
            {isLoggedIn && (
              <Link
                href="/create"
                className={`transition-colors hover:text-foreground/80 ${
                  pathname === "/create" ? "text-foreground font-medium" : "text-foreground/60"
                }`}
              >
                Create
              </Link>
            )}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <form className="hidden md:block w-full max-w-sm lg:max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </form>
          <ThemeToggle />
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()

  // This would be replaced with actual auth state
  const isLoggedIn = false

  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">SocialPlatform</span>
      </Link>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <nav className="flex flex-col gap-2">
        <Link
          href="/"
          className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
            pathname === "/" ? "bg-accent font-medium" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/explore"
          className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
            pathname === "/explore" ? "bg-accent font-medium" : ""
          }`}
        >
          Explore
        </Link>
        {isLoggedIn && (
          <Link
            href="/create"
            className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
              pathname === "/create" ? "bg-accent font-medium" : ""
            }`}
          >
            Create
          </Link>
        )}
        {isLoggedIn ? (
          <>
            <Link
              href="/profile"
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                pathname === "/profile" ? "bg-accent font-medium" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                pathname === "/settings" ? "bg-accent font-medium" : ""
              }`}
            >
              Settings
            </Link>
            <Button variant="ghost" className="justify-start px-3">
              Log out
            </Button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                pathname === "/login" ? "bg-accent font-medium" : ""
              }`}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent ${
                pathname === "/signup" ? "bg-accent font-medium" : ""
              }`}
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

