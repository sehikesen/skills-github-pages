import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock data for followers
const followers = [
  {
    id: 1,
    name: "Jamie Chen",
    username: "jamiec",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Food blogger and cooking enthusiast",
    isFollowing: true,
  },
  {
    id: 2,
    name: "Sam Rivera",
    username: "samr",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Photographer | Travel lover | Coffee addict",
    isFollowing: false,
  },
  {
    id: 3,
    name: "Taylor Swift",
    username: "tswift",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Music lover and aspiring songwriter",
    isFollowing: true,
  },
  {
    id: 4,
    name: "Jordan Lee",
    username: "jlee",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Tech enthusiast and software developer",
    isFollowing: true,
  },
  {
    id: 5,
    name: "Casey Morgan",
    username: "cmorgan",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Digital artist and illustrator",
    isFollowing: false,
  },
]

export function UserFollowers() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search followers..." className="pl-8" />
      </div>

      <div className="space-y-4">
        {followers.map((follower) => (
          <Card key={follower.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={follower.avatar || "/placeholder.svg"}
                    alt={follower.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{follower.name}</h4>
                    <p className="text-sm text-muted-foreground">@{follower.username}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{follower.bio}</p>
                  </div>
                </div>
                <Button variant={follower.isFollowing ? "outline" : "default"} size="sm">
                  {follower.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

