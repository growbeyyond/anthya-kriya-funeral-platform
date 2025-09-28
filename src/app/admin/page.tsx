"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold" style={{ color: "var(--primary)" }}>Admin Dashboard</h1>
        <Badge className="bg-[var(--accent)] text-[var(--accent-foreground)]">Live</Badge>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>SLA - Avg Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">14m</p>
            <p className="text-xs text-muted-foreground">Target: &lt; 20m</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">27</p>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vendors Online</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">58</p>
            <p className="text-xs text-muted-foreground">Across 6 cities</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Vendor Management</h2>
          <Button variant="secondary">Add Vendor</Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ratings</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[{name:"Sharma Rituals", city:"Bengaluru", status:"Verified", rating:4.7},{name:"Al-Falah Services", city:"Hyderabad", status:"Pending KYC", rating:4.2},{name:"Grace Funeral Care", city:"Mumbai", status:"Verified", rating:4.8}].map((v)=> (
                <TableRow key={v.name}>
                  <TableCell>{v.name}</TableCell>
                  <TableCell>{v.city}</TableCell>
                  <TableCell>
                    <Badge variant={v.status.includes("Verified")?"default":"secondary"}>{v.status}</Badge>
                  </TableCell>
                  <TableCell>{v.rating.toFixed(1)}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      <Separator />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bookings by Faith (Week)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 grid grid-cols-7 gap-2 items-end">
              {[12,9,14,7,11,13,10].map((h,i)=> (
                <div key={i} className="bg-[var(--accent)]/70" style={{ height: `${h * 6}px` }} />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Mock chart for overview</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Operational Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Vehicle shortage - East Zone</span>
              <Badge variant="destructive">High</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Priest availability - Tomorrow AM</span>
              <Badge>Medium</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Slot booking latency</span>
              <Badge variant="secondary">Low</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}