"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  icon: string;
  title: string;
  description: string;
  format: string;
  size: string;
  downloadUrl: string;
}

export default function ToolkitDownloadPage() {
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());

  const products: Product[] = [
    {
      id: "guide",
      icon: "book",
      title: "Complete Comfort Effect Guide",
      description:
        "The core 7-strategy system for building authentic confidence. This comprehensive guide walks you through the psychology of fear and how to transform it.",
      format: "PDF",
      size: "4.2 MB",
      downloadUrl: "/downloads/comfort-effect-guide.pdf",
    },
    {
      id: "workbook",
      icon: "calendar",
      title: "21-Day Challenge Workbook",
      description:
        "Daily exercises and prompts that make transformation inevitable. Complete one exercise each day and track your progress.",
      format: "PDF",
      size: "2.8 MB",
      downloadUrl: "/downloads/21-day-workbook.pdf",
    },
    {
      id: "audio",
      icon: "headphones",
      title: "Audio Confidence Course",
      description:
        "Listen anywhere - in the car, at the gym, or while you work. 8 audio lessons totaling over 3 hours of content.",
      format: "MP3",
      size: "187 MB",
      downloadUrl: "/downloads/audio-course.zip",
    },
    {
      id: "templates",
      icon: "chat",
      title: "Conversation Templates",
      description:
        "Word-for-word scripts for high-stakes situations including negotiations, difficult conversations, and public speaking.",
      format: "PDF",
      size: "1.5 MB",
      downloadUrl: "/downloads/conversation-templates.pdf",
    },
    {
      id: "planner",
      icon: "clipboard",
      title: "30-Day Transformation Planner",
      description:
        "Your roadmap to lasting change with built-in accountability. Plan your journey and track milestones along the way.",
      format: "PDF",
      size: "3.1 MB",
      downloadUrl: "/downloads/transformation-planner.pdf",
    },
    {
      id: "cards",
      icon: "lightning",
      title: "Quick Reference Cards",
      description:
        "Instant confidence boosts when you need them most. Print these cards or save them to your phone for quick access.",
      format: "PDF",
      size: "890 KB",
      downloadUrl: "/downloads/quick-reference-cards.pdf",
    },
  ];

  const handleDownload = (productId: string) => {
    setDownloadedItems((prev) => new Set([...prev, productId]));
  };

  const downloadedCount = downloadedItems.size;
  const totalProducts = products.length;
  const progressPercentage = (downloadedCount / totalProducts) * 100;

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      book: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      calendar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      headphones: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      chat: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      clipboard: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      lightning: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.book;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            The Comfort Effect
          </Link>
          <a
            href="mailto:support@comforteffect.com"
            className="btn-secondary px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Need Help?
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="badge mb-6 mx-auto">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Your Downloads
            </div>

            <h1 className="heading-lg text-zinc-900 mb-4">
              Your Comfort Effect Toolkit
            </h1>

            <p className="body-lg max-w-xl mx-auto">
              Download all 6 products in your bundle. We recommend starting with
              the Complete Guide, then the 21-Day Workbook.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="card-elevated rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-zinc-900">
                Download Progress
              </h2>
              <span className="text-sm text-zinc-500">
                {downloadedCount} of {totalProducts} downloaded
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Checklist Icons */}
            <div className="flex items-center gap-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    downloadedItems.has(product.id)
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-zinc-100 text-zinc-400"
                  }`}
                >
                  {downloadedItems.has(product.id) ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-xs font-medium">{products.indexOf(product) + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Cards Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid gap-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`card-elevated rounded-xl p-6 transition-all duration-300 ${
                  downloadedItems.has(product.id)
                    ? "bg-emerald-50/50 border-emerald-100"
                    : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon and Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        downloadedItems.has(product.id)
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {getIcon(product.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-zinc-400 font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base font-semibold text-zinc-900 truncate">
                          {product.title}
                        </h3>
                        {downloadedItems.has(product.id) && (
                          <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Downloaded
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-zinc-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          {product.format}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                          {product.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="flex-shrink-0 md:ml-4">
                    <a
                      href={product.downloadUrl}
                      download
                      onClick={() => handleDownload(product.id)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        downloadedItems.has(product.id)
                          ? "btn-secondary"
                          : "btn-primary"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {downloadedItems.has(product.id) ? "Download Again" : "Download"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download All Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                products.forEach((p) => handleDownload(p.id));
              }}
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Download All Files
            </button>
          </div>
        </div>
      </section>

      {/* Getting Started Tips */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              Getting Started
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Here&apos;s the recommended order to maximize your results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elevated p-6 rounded-xl text-center">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                1
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">
                Read the Guide
              </h3>
              <p className="text-sm text-zinc-500">
                Start with the Complete Comfort Effect Guide to understand the
                core principles and 7 strategies.
              </p>
            </div>

            <div className="card-elevated p-6 rounded-xl text-center">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                2
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">
                Begin Day 1
              </h3>
              <p className="text-sm text-zinc-500">
                Open the 21-Day Workbook and complete the Day 1 exercise.
                Set aside 15-20 minutes each morning.
              </p>
            </div>

            <div className="card-elevated p-6 rounded-xl text-center">
              <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                3
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">
                Listen & Practice
              </h3>
              <p className="text-sm text-zinc-500">
                Use the audio course during commutes and the quick reference
                cards when you need a confidence boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-elevated rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-zinc-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Having Trouble Downloading?
            </h3>
            <p className="text-sm text-zinc-500 mb-4 max-w-md mx-auto">
              If you&apos;re experiencing any issues with your downloads or have
              questions about the materials, our support team is here to help.
            </p>
            <a
              href="mailto:support@comforteffect.com"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-base font-semibold text-zinc-900 mb-1">
                The Comfort Effect
              </div>
              <p className="text-xs text-zinc-400">By Eula Properties LLC</p>
            </div>

            <div className="flex gap-6 text-xs text-zinc-400">
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Terms of Service
              </a>
              <a
                href="mailto:support@comforteffect.com"
                className="hover:text-zinc-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="divider my-8"></div>

          <div className="text-center text-xs text-zinc-400">
            &copy; 2025 Eula Properties LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
