"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function VendorWalletPage() {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/vendors/wallet", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}`,
          },
        });
        const data = await res.json();
        if (res.ok) setBalance(data.balance ?? 0);
        else toast.error(data?.message || "Failed to load wallet");
      } catch (e: any) {
        toast.error(e.message || "Error loading wallet");
      }
    })();
  }, []);

  const withdraw = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/vendors/wallet", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("bearer_token") || ""}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed");
      setBalance(data.balance);
      toast.success("Withdrawal requested");
    } catch (e:any) {
      toast.error(e.message || "Error");
    } finally { setLoading(false); }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <h1 className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>Vendor Wallet</h1>
      <Card>
        <CardHeader><CardTitle>Balance</CardTitle></CardHeader>
        <CardContent className="flex items-end justify-between">
          <p className="text-4xl font-semibold">₹ {balance.toLocaleString()}</p>
          <Button onClick={withdraw} disabled={loading}>{loading?"Processing...":"Withdraw"}</Button>
        </CardContent>
      </Card>
    </main>
  );
}