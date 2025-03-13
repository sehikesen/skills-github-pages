"use client"

import { useState } from "react"
import { Eye, MoreHorizontal, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for reported comments
const reportedComments = [
  {
    id: 1,
    content: "This is a reported comment with offensive language",
    author: "user123",
    postTitle: "Summer vacation photos",
    reportedBy: "user456",
    reportReason: "Offensive language",
    reportedAt: "2023-06-15",
    status: "pending",
  },
  {
    id: 2,
    content: "This comment contains spam links to external websites",
    author: "user789",
    postTitle: "Recipe sharing thread",
    reportedBy: "user234",
    reportReason: "Spam",
    reportedAt: "2023-06-16",
    status: "pending",
  },
  {
    id: 3,
    content: "Harassing comment targeting another user",
    author: "user345",
    postTitle: "Community discussion",
    reportedBy: "user567",
    reportReason: "Harassment",
    reportedAt: "2023-06-17",
    status: "reviewed",
  },
  {
    id: 4,
    content: "Comment with misleading information about health advice",
    author: "user678",
    postTitle: "Health tips thread",
    reportedBy: "user890",
    reportReason: "Misinformation",
    reportedAt: "2023-06-18",
    status: "removed",
  },
  {
    id: 5,
    content: "Threatening comment that violates community guidelines",
    author: "user901",
    postTitle: "Political discussion",
    reportedBy: "user012",
    reportReason: "Threats",
    reportedAt: "2023-06-19",
    status: "pending",
  },
]

export function AdminCommentModeration() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredComments = reportedComments.filter(
    (comment) =>
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.reportReason.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comment Moderation</CardTitle>
        <CardDescription>Review and moderate reported comments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reported comments..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button>Refresh</Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Comment</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Post</TableHead>
                <TableHead>Reported By</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComments.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell className="font-medium max-w-[200px] truncate">{comment.content}</TableCell>
                  <TableCell>{comment.author}</TableCell>
                  <TableCell className="max-w-[150px] truncate">{comment.postTitle}</TableCell>
                  <TableCell>{comment.reportedBy}</TableCell>
                  <TableCell>{comment.reportReason}</TableCell>
                  <TableCell>{comment.reportedAt}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        comment.status === "pending"
                          ? "outline"
                          : comment.status === "reviewed"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {comment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
                          <DropdownMenuItem>Contact Author</DropdownMenuItem>
                          <DropdownMenuItem>Contact Reporter</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Remove Comment</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

