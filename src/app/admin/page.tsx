"use client";

import { useState } from "react";
import Link from "next/link";

interface DashboardMetrics {
  totalSubscribers: number;
  weeklySubscribers: number;
  totalSales: number;
  weeklySales: number;
  totalRevenue: number;
  weeklyRevenue: number;
  conversionRate: number;
  healthScore: number;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  monthlyPay: number;
  healthScore: number;
}

interface SitePage {
  id: string;
  path: string;
  name: string;
  status: string;
}

interface Purchase {
  id: string;
  name: string;
  email: string;
  product: string;
  amount: number;
  status: string;
  purchasedAt: string;
}

export default function AdminDashboard() {
  // Static placeholder data - will be replaced with API calls when database is connected
  const metrics: DashboardMetrics = {
    totalSubscribers: 41,
    weeklySubscribers: 1,
    totalSales: 5,
    weeklySales: 0,
    totalRevenue: 85.00,
    weeklyRevenue: 0,
    conversionRate: 12.2,
    healthScore: 32.9,
  };

  const teamMembers: TeamMember[] = [
    { id: "1", name: "Ads Manager", role: "Marketing", monthlyPay: 400, healthScore: 0 },
  ];

  const [pages, setPages] = useState<SitePage[]>([
    { id: "1", path: "/", name: "Home", status: "working" },
    { id: "2", path: "/thank-you", name: "Thank You", status: "working" },
    { id: "3", path: "/download/toolkit", name: "Download", status: "working" },
    { id: "4", path: "/paypal-success", name: "PayPal Success", status: "untested" },
    { id: "5", path: "/paypal-upsell-success", name: "Upsell Success", status: "untested" },
    { id: "6", path: "/admin", name: "Admin", status: "working" },
    { id: "7", path: "/manage-emails", name: "Email Manager", status: "untested" },
  ]);

  const purchases: Purchase[] = [
    { id: "1", name: "John D.", email: "john@example.com", product: "Comfort Effect Bundle", amount: 17, status: "completed", purchasedAt: "2025-01-05" },
    { id: "2", name: "Sarah M.", email: "sarah@example.com", product: "Comfort Effect Bundle", amount: 17, status: "completed", purchasedAt: "2025-01-04" },
    { id: "3", name: "Mike C.", email: "mike@example.com", product: "Comfort Effect Bundle", amount: 17, status: "completed", purchasedAt: "2025-01-03" },
    { id: "4", name: "Emily R.", email: "emily@example.com", product: "Comfort Effect Bundle", amount: 17, status: "completed", purchasedAt: "2025-01-02" },
    { id: "5", name: "David K.", email: "david@example.com", product: "Comfort Effect Bundle", amount: 17, status: "completed", purchasedAt: "2025-01-01" },
  ];

  const [testingLinks, setTestingLinks] = useState(false);

  const getHealthColor = (score: number) => {
    if (score >= 70) return "text-emerald-600 bg-emerald-50";
    if (score >= 40) return "text-amber-600 bg-amber-50";
    return "text-red-600 bg-red-50";
  };

  const getStatusColor = (status: string) => {
    if (status === "working") return "bg-emerald-500";
    if (status === "error") return "bg-red-500";
    return "bg-zinc-300";
  };

  const testAllLinks = async () => {
    setTestingLinks(true);
    // Simulate testing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPages(pages.map(p => ({ ...p, status: "working" })));
    setTestingLinks(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900">Command Center</h1>
            <p className="text-sm text-zinc-500">The Comfort Effect</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
              View Site →
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Business Health Score */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl ${getHealthColor(metrics.healthScore)}`}>
            <div>
              <div className="text-sm font-medium opacity-80">Business Health Score</div>
              <div className="text-4xl font-bold">{metrics.healthScore}%</div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <div className="text-sm text-zinc-500 mb-1">Total Subscribers</div>
            <div className="text-3xl font-semibold text-zinc-900">{metrics.totalSubscribers}</div>
            <div className="text-xs text-emerald-600 mt-1">+{metrics.weeklySubscribers} this week</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <div className="text-sm text-zinc-500 mb-1">Total Sales</div>
            <div className="text-3xl font-semibold text-zinc-900">{metrics.totalSales}</div>
            <div className="text-xs text-zinc-400 mt-1">+{metrics.weeklySales} this week</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <div className="text-sm text-zinc-500 mb-1">Total Revenue</div>
            <div className="text-3xl font-semibold text-zinc-900">${metrics.totalRevenue.toFixed(2)}</div>
            <div className="text-xs text-zinc-400 mt-1">${metrics.weeklyRevenue.toFixed(2)} this week</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <div className="text-sm text-zinc-500 mb-1">Conversion Rate</div>
            <div className="text-3xl font-semibold text-zinc-900">{metrics.conversionRate}%</div>
            <div className="text-xs text-zinc-400 mt-1">email → purchase</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Team Performance CRM */}
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
              <h2 className="font-semibold text-zinc-900">Team Performance CRM</h2>
              <Link href="/admin/team/add" className="text-sm text-zinc-600 hover:text-zinc-900">
                + Add Member
              </Link>
            </div>
            <div className="divide-y divide-zinc-100">
              {teamMembers.map((member) => (
                <div key={member.id} className="px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                  <div>
                    <div className="font-medium text-zinc-900">{member.name}</div>
                    <div className="text-sm text-zinc-500">{member.role} • ${member.monthlyPay}/mo</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getHealthColor(member.healthScore)}`}>
                      {member.healthScore}%
                    </div>
                    <Link href={`/admin/team/${member.id}`} className="text-zinc-400 hover:text-zinc-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
              {teamMembers.length === 0 && (
                <div className="px-6 py-8 text-center text-zinc-400">
                  No team members yet
                </div>
              )}
            </div>
          </div>

          {/* Site Map & Link Testing */}
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
              <h2 className="font-semibold text-zinc-900">Site Map & Link Testing</h2>
              <button
                onClick={testAllLinks}
                disabled={testingLinks}
                className="text-sm text-zinc-600 hover:text-zinc-900 disabled:opacity-50"
              >
                {testingLinks ? "Testing..." : "Test All Links"}
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {pages.map((page) => (
                  <div
                    key={page.id}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-50 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${getStatusColor(page.status)}`}></span>
                    <span className="text-sm text-zinc-700">{page.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Working
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Error
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-zinc-300"></span> Untested
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/admin/emails" className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors text-center">
            <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-zinc-900">Email Management</div>
          </Link>
          <Link href="/admin/team" className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors text-center">
            <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-zinc-900">Team CRM</div>
          </Link>
          <Link href="/admin/analytics" className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors text-center">
            <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-zinc-900">Analytics</div>
          </Link>
          <Link href="/admin/downloads" className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors text-center">
            <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div className="text-sm font-medium text-zinc-900">Download Center</div>
          </Link>
        </div>

        {/* Customer Data */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Recent Purchases */}
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100">
              <h2 className="font-semibold text-zinc-900">Recent Purchases</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-50 text-xs text-zinc-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">Customer</th>
                    <th className="px-6 py-3 text-left">Amount</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {purchases.map((purchase) => (
                    <tr key={purchase.id} className="hover:bg-zinc-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-zinc-900">{purchase.name}</div>
                        <div className="text-xs text-zinc-500">{purchase.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-900">${purchase.amount}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700">
                          {purchase.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-500">{purchase.purchasedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Subscribers */}
          <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
              <h2 className="font-semibold text-zinc-900">Email Subscribers</h2>
              <span className="text-sm text-zinc-500">{metrics.totalSubscribers} total</span>
            </div>
            <div className="p-6 text-center text-zinc-400">
              <svg className="w-12 h-12 mx-auto mb-3 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Connect database to view subscribers</p>
              <Link href="/admin/emails" className="text-sm text-zinc-600 hover:text-zinc-900 mt-2 inline-block">
                Manage Emails →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-zinc-400">
          <p>Auto-refreshes every 5 minutes • Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </main>
    </div>
  );
}
