"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function TeamMemberDetail() {
  const params = useParams();
  const memberId = params.id;

  // Mock data - would be fetched from database
  const member = {
    id: memberId,
    name: "Ads Manager",
    role: "Marketing",
    email: "ads@comforteffect.com",
    monthlyPay: 400,
    healthScore: 0,
    hiredAt: "August 2025",
    tasksCompleted: 0,
    tasksTotal: 0,
    notes: "Managing Facebook and Instagram ad campaigns.",
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-zinc-900">{member.name}</h1>
            <p className="text-sm text-zinc-500">{member.role}</p>
          </div>
          <Link href="/admin" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Name</label>
                <p className="text-zinc-900">{member.name}</p>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Role</label>
                <p className="text-zinc-900">{member.role}</p>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Email</label>
                <p className="text-zinc-900">{member.email}</p>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Hired</label>
                <p className="text-zinc-900">{member.hiredAt}</p>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Performance</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Health Score</label>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${member.healthScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-900">{member.healthScore}%</span>
                </div>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Tasks Completed</label>
                <p className="text-zinc-900">{member.tasksCompleted} / {member.tasksTotal}</p>
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase tracking-wider">Monthly Pay</label>
                <p className="text-zinc-900">${member.monthlyPay}</p>
              </div>
            </div>
          </div>

          {/* Notes Card */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6 md:col-span-2">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">Notes</h2>
            <p className="text-zinc-600">{member.notes || "No notes yet."}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            Edit Member
          </button>
          <button className="px-4 py-2 border border-zinc-200 text-zinc-600 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors">
            Add Task
          </button>
        </div>
      </main>
    </div>
  );
}
