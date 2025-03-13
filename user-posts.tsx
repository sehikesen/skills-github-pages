import { formatDistanceToNow } from "date-fns"
import { FileImage, FileText, FileVideo, Heart, MessageSquare, Share2 } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for user posts
const posts = [
  {
    id: 1,
    type: "text",
    title: "My Journey Through Southeast Asia",
    content: "Exploring the hidden gems of Thailand, Vietnam, and Cambodia...",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    likes: 124,
    comments: 32,
  },
  {
    id: 2,
    type: "image",
    title: "Summer Sunset Collection",
    content: "A gallery of breathtaking sunset photos from around the world...",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    likes: 287,
    comments: 45,
  },
  {
    id: 3,
    type: "video",
    title: "Quick Cooking Tips for Busy People",
    content: "Learn how to prepare delicious meals in under 30 minutes...",
    videoThumbnail: "/placeholder.svg?height=300&width=500",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
    likes: 198,
    comments: 27,
  },
  {
    id: 4,
    type: "text",
    title: "Reflections on Minimalism",
    content: "How adopting a minimalist lifestyle changed my perspective...",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 7 days ago
    likes: 156,
    comments: 19,
  },
  {
    id: 5,
    type: "image",
    title: "Urban Architecture",
    content: "Exploring the fascinating structures in modern cities...",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10), // 10 days ago
    likes: 210,
    comments: 38,
  },
]

export function UserPosts() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="text">
          <FileText className="mr-2 h-4 w-4" />
          Text
        </TabsTrigger>
        <TabsTrigger value="image">
          <FileImage className="mr-2 h-4 w-4" />
          Images
        </TabsTrigger>
        <TabsTrigger value="video">
          <FileVideo className="mr-2 h-4 w-4" />
          Videos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-6 space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </TabsContent>

      <TabsContent value="text" className="mt-6 space-y-6">
        {posts
          .filter((post) => post.type === "text")
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </TabsContent>

      <TabsContent value="image" className="mt-6 space-y-6">
        {posts
          .filter((post) => post.type === "image")
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </TabsContent>

      <TabsContent value="video" className="mt-6 space-y-6">
        {posts
          .filter((post) => post.type === "video")
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </TabsContent>
    </Tabs>
  )
}

function PostCard({ post }: { post: any }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-primary/10 text-primary">
              {post.type}
            </div>
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-muted-foreground">{post.content}</p>
          </div>

          {post.type === "image" && post.images && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {post.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Image ${index + 1}`}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          )}

          {post.type === "video" && post.videoThumbnail && (
            <div className="relative">
              <img
                src={post.videoThumbnail || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-background/80 p-3">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-6">
        <div className="text-sm text-muted-foreground">{formatDistanceToNow(post.createdAt, { addSuffix: true })}</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{post.comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Share2 className="h-4 w-4" />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

