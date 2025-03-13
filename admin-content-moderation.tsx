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

// Mock data for reported content
const reportedContent = [
  {
    id: 1,
    title: "Inappropriate post",
    type: "post",
    author: "user123",
    reportedBy: "user456",
    reportReason: "Offensive content",
    reportedAt: "2023-06-15",
    status: "pending",
  },
  {
    id: 2,
    title: "Spam advertisement",
    type: "post",
    author: "user789",
    reportedBy: "user234",
    reportReason: "Spam",
    reportedAt: "2023-06-16",
    status: "pending",
  },
  {
    id: 3,
    title: "Copyright violation",
    type: "image",
    author: "user345",
    reportedBy: "user567",
    reportReason: "Copyright infringement",
    reportedAt: "2023-06-17",
    status: "reviewed",
  },
  {
    id: 4,
    title: "Misleading information",
    type: "post",
    author: "user678",
    reportedBy: "user890",
    reportReason: "Misinformation",
    reportedAt: "2023-06-18",
    status: "removed",
  },
  {
    id: 5,
    title: "Violent content",
    type: "video",
    author: "user901",
    reportedBy: "user012",
    reportReason: "Violence",
    reportedAt: "2023-06-19",
    status: "pending",
  },
]

export function AdminContentModeration() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredContent = reportedContent.filter(
    (content) =>
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.reportReason.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Moderation</CardTitle>
        <CardDescription>Review and moderate reported content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reported content..."
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
                <TableHead>Content</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Reported By</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContent.map((content) => (
                <TableRow key={content.id}>
                  <TableCell className="font-medium">{content.title}</TableCell>
                  <TableCell>{content.type}</TableCell>
                  <TableCell>{content.author}</TableCell>
                  <TableCell>{content.reportedBy}</TableCell>
                  <TableCell>{content.reportReason}</TableCell>
                  <TableCell>{content.reportedAt}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        content.status === "pending"
                          ? "outline"
                          : content.status === "reviewed"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {content.status}
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
                          <DropdownMenuItem className="text-destructive">Remove Content</DropdownMenuItem>
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

