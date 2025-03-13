import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// This would be fetched from the database in a real application
const posts = [
  {
    id: 1,
    title: "My Journey Through Southeast Asia",
    excerpt: "Exploring the hidden gems of Thailand, Vietnam, and Cambodia...",
    type: "text",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "alexj",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    likes: 124,
    comments: 32,
  },
  {
    id: 2,
    title: "Summer Sunset Collection",
    excerpt: "A gallery of breathtaking sunset photos from around the world...",
    type: "image",
    author: {
      name: "Sam Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "samr",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    likes: 287,
    comments: 45,
  },
  {
    id: 3,
    title: "Quick Cooking Tips for Busy People",
    excerpt: "Learn how to prepare delicious meals in under 30 minutes...",
    type: "video",
    author: {
      name: "Jamie Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      username: "jamiec",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
    likes: 198,
    comments: 27,
  },
]

export function FeaturedPosts() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`} className="group">
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="p-4 pb-0">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">@{post.author.username}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary">
                  {post.type}
                </div>
                <h3 className="font-semibold group-hover:underline">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
              <div className="flex w-full justify-between">
                <span>{formatDistanceToNow(post.createdAt, { addSuffix: true })}</span>
                <div className="flex gap-3">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

