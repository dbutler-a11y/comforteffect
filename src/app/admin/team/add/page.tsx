"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddTeamMember() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    monthlyPay: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would save to database when connected
    alert("Team member would be saved when database is connected.");
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900">Add Team Member</h1>
            <p className="text-sm text-zinc-500">The Comfort Effect</p>
          </div>
          <Link href="/admin" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-zinc-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-zinc-700 mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                placeholder="Ads Manager"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="monthlyPay" className="block text-sm font-medium text-zinc-700 mb-2">
                Monthly Pay ($)
              </label>
              <input
                type="number"
                id="monthlyPay"
                value={formData.monthlyPay}
                onChange={(e) => setFormData({ ...formData, monthlyPay: e.target.value })}
                className="w-full px-4 py-3 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                placeholder="500"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-zinc-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
              >
                Add Team Member
              </button>
              <Link
                href="/admin"
                className="px-6 py-3 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
