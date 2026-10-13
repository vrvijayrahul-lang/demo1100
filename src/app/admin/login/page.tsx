"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Lock, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";
import { ButtonInButton } from "@/components/ButtonInButton";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!password) {
      setErrorMsg("Please enter the administrator password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      // Successful login
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-20 px-4 bg-ivory-100/50">
      <div className="w-full max-w-md p-2 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-white to-gold/20 border border-gold/30 shadow-luxury">
        <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-10 shadow-inner-light">
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-burgundy text-champagne border border-gold/30 flex items-center justify-center mb-4 shadow-md">
              <Lock className="w-6 h-6" strokeWidth={1.5} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-700 block mb-1">
              VSM Events Management
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy">
              Administrator Portal
            </h1>

            <p className="text-xs text-obsidian/60 mt-2">
              Enter master credentials to access bookings, inquiries & website settings.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-obsidian/80 mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-gold/30 focus:border-gold-600 focus:outline-none bg-ivory-50/50"
              />
            </div>

            <div className="p-3 rounded-xl bg-ivory-100/80 border border-gold/20 text-[11px] text-obsidian/70">
              <div className="flex items-center gap-1.5 font-semibold text-burgundy mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                <span>Authorized Access Only</span>
              </div>
              <p>Default admin password: <code className="bg-white px-1.5 py-0.5 rounded font-mono text-burgundy font-bold">vsm@luxury2025</code></p>
            </div>

            <ButtonInButton
              type="submit"
              variant="burgundy"
              size="md"
              disabled={loading}
              className="w-full justify-between"
            >
              {loading ? "Authenticating..." : "Sign In to Admin Dashboard"}
            </ButtonInButton>
          </form>

          <div className="mt-8 pt-4 border-t border-gold/15 text-center">
            <Link
              href="/"
              className="text-xs text-obsidian/60 hover:text-burgundy transition-colors"
            >
              ← Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
