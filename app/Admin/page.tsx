import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { ArrowUpRight, Users, CreditCard, DollarSign, ActivitySquare } from "lucide-react"

export default function AdminDashboard() {
  return (
    <></>
    // <div className="space-y-6">
    //   <div>
    //     <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
    //     <p className="text-zinc-500">Welcome to your admin dashboard</p>
    //   </div>

    //   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
    //         <DollarSign className="h-4 w-4 text-zinc-500" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">$45,231.89</div>
    //         <p className="text-xs text-zinc-500">+20.1% from last month</p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
    //         <CreditCard className="h-4 w-4 text-zinc-500" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+2,350</div>
    //         <p className="text-xs text-zinc-500">+180.1% from last month</p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Active Users</CardTitle>
    //         <Users className="h-4 w-4 text-zinc-500" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+12,234</div>
    //         <p className="text-xs text-zinc-500">+19% from last month</p>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between pb-2">
    //         <CardTitle className="text-sm font-medium">Active Now</CardTitle>
    //         <ActivitySquare className="h-4 w-4 text-zinc-500" />
    //       </CardHeader>
    //       <CardContent>
    //         <div className="text-2xl font-bold">+573</div>
    //         <p className="text-xs text-zinc-500">+201 since last hour</p>
    //       </CardContent>
    //     </Card>
    //   </div>

    //   <Tabs defaultValue="overview" className="space-y-4">
    //     <TabsList>
    //       <TabsTrigger value="overview">Overview</TabsTrigger>
    //       <TabsTrigger value="analytics">Analytics</TabsTrigger>
    //       <TabsTrigger value="reports">Reports</TabsTrigger>
    //       <TabsTrigger value="notifications">Notifications</TabsTrigger>
    //     </TabsList>
    //     <TabsContent value="overview" className="space-y-4">
    //       <Card>
    //         <CardHeader>
    //           <CardTitle>Recent Sales</CardTitle>
    //           <CardDescription>
    //             You made 265 sales this month.
    //           </CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="space-y-8">
    //             {Array.from({ length: 5 }).map((_, i) => (
    //               <div key={i} className="flex items-center">
    //                 <div className="w-9 h-9 rounded-full bg-zinc-100 mr-4" />
    //                 <div className="flex-1 space-y-1">
    //                   <p className="text-sm font-medium leading-none">
    //                     Customer {i + 1}
    //                   </p>
    //                   <p className="text-sm text-zinc-500">
    //                     customer{i + 1}@example.com
    //                   </p>
    //                 </div>
    //                 <div className="text-sm font-medium">+${(Math.random() * 1000).toFixed(2)}</div>
    //               </div>
    //             ))}
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </TabsContent>
    //   </Tabs>
    // </div>
  )
}
