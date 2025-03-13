"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AdminAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>View platform statistics and user engagement metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="Total Users" value="1,234" change="+12%" />
              <MetricCard title="New Posts" value="432" change="+8%" />
              <MetricCard title="Daily Active Users" value="789" change="+18%" />
              <MetricCard title="Comments" value="2,567" change="+15%" />
              <MetricCard title="Likes" value="8,901" change="+22%" />
              <MetricCard title="Avg. Session Duration" value="4m 32s" change="+5%" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ChartPlaceholder title="User Growth" height={300} />
              <ChartPlaceholder title="Content Creation" height={300} />
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="New Users" value="87" change="+12%" />
              <MetricCard title="Active Users" value="789" change="+18%" />
              <MetricCard title="Returning Users" value="456" change="+7%" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ChartPlaceholder title="User Demographics" height={300} />
              <ChartPlaceholder title="User Retention" height={300} />
            </div>

            <ChartPlaceholder title="User Activity by Time of Day" height={300} />
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard title="Total Posts" value="3,456" change="+9%" />
              <MetricCard title="Text Posts" value="1,234" change="+7%" />
              <MetricCard title="Image Posts" value="1,567" change="+12%" />
              <MetricCard title="Video Posts" value="655" change="+15%" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ChartPlaceholder title="Content by Type" height={300} />
              <ChartPlaceholder title="Popular Categories" height={300} />
            </div>

            <ChartPlaceholder title="Content Creation Trends" height={300} />
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="Total Likes" value="45,678" change="+22%" />
              <MetricCard title="Total Comments" value="12,345" change="+15%" />
              <MetricCard title="Avg. Engagement Rate" value="8.7%" change="+3%" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ChartPlaceholder title="Engagement by Content Type" height={300} />
              <ChartPlaceholder title="Engagement by Time of Day" height={300} />
            </div>

            <ChartPlaceholder title="Top Performing Content" height={300} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function MetricCard({ title, value, change }: { title: string; value: string; change: string }) {
  const isPositive = change.startsWith("+")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}>{change} from last month</p>
      </CardContent>
    </Card>
  )
}

function ChartPlaceholder({ title, height }: { title: string; height: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 flex items-center justify-center rounded-md" style={{ height: `${height}px` }}>
          <p className="text-muted-foreground">Chart will appear here</p>
        </div>
      </CardContent>
    </Card>
  )
}

