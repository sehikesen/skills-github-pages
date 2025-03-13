import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock data for following
const following = [
  {
    id: 1,
    name: "Robin Williams",
    username: "robinw",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Travel photographer and adventure seeker",
    isFollowing: true,
  },
  {
    id: 2,
    name: "Alex Johnson",
    username: "alexj",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Tech blogger and software engineer",
    isFollowing: true,
  },
  {
    id: 3,
    name: "Morgan Lee",
    username: "morganl",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Fitness coach and nutrition expert",
    isFollowing: true,
  },
  {
    id: 4,
    name: "Jamie Smith",
    username: "jamies",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Food blogger and recipe developer",
    isFollowing: true,
  },
  {
    id: 5,
    name: "Taylor Jordan",
    username: "taylorj",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Music producer and DJ",
    isFollowing: true,
  },
]

export function UserFollowing() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search following..." className="pl-8" />
      </div>

      <div className="space-y-4">
        {following.map((user) => (
          <Card key={user.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-12 w-12 rounded-full" />
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-muted-foreground">@{user.username}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{user.bio}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Following
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

