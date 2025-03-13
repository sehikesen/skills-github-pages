import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Share Your Story with the World
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create, connect, and engage with a community of like-minded individuals. Share your thoughts, photos,
              videos, and more.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/explore">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

