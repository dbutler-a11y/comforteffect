"use client";

import Link from "next/link";

export default function EmailManagement() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900">Email Management</h1>
            <p className="text-sm text-zinc-500">The Comfort Effect</p>
          </div>
          <Link href="/admin" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-zinc-200 p-12 text-center">
          <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">Email Management</h2>
          <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
            Connect your database to manage email subscribers, send campaigns, and track engagement.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-lg text-sm text-zinc-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Requires database connection
          </div>
        </div>
      </main>
    </div>
  );
}
