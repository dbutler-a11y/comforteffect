"use client";

import { useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import CoachingModal from "@/components/CoachingModal";
import CountdownTimer from "@/components/CountdownTimer";
import PayPalProvider from "@/components/PayPalProvider";
import PayPalButton from "@/components/PayPalButton";

export default function Home() {
  const [isCoachingModalOpen, setIsCoachingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-tight">The Comfort Effect</div>
          <a
            href="#get-started"
            className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="badge mb-8 mx-auto">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            10,000+ lives transformed
          </div>

          {/* Main Headline */}
          <h1 className="heading-xl text-zinc-900 mb-6">
            Stop letting fear
            <span className="block text-zinc-400">steal your future</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-2xl mx-auto mb-10">
            The proven 21-day system that transforms self-doubt into
            unstoppable confidence. No therapy. No mantras. Just results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#get-started"
              className="btn-primary px-8 py-4 rounded-full text-base font-medium"
            >
              Get Instant Access — $17
            </a>
            <a
              href="#video"
              className="btn-secondary px-6 py-4 rounded-full text-base font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch How It Works
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 mb-16">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              30-day guarantee
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Instant access
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Results in 72 hours
            </div>
          </div>

          {/* Free Lead Magnet - Email Capture */}
          <div className="max-w-md mx-auto">
            <div className="card-elevated rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="badge mb-4 mx-auto">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Free Download
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  Get the Comfort Zone Breakthrough Blueprint
                </h3>
                <p className="text-sm text-zinc-500">
                  The 5-step framework to overcome fear and take action today. Delivered instantly to your inbox.
                </p>
              </div>
              <EmailCaptureForm
                source="hero-lead-magnet"
                buttonText="Get Your Free Blueprint"
                successMessage="Check your inbox! Your Comfort Zone Breakthrough Blueprint is on the way."
                variant="compact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-zinc-900 number-highlight mb-1">10K+</div>
              <div className="text-sm text-zinc-500">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-zinc-900 number-highlight mb-1">98%</div>
              <div className="text-sm text-zinc-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-zinc-900 number-highlight mb-1">21</div>
              <div className="text-sm text-zinc-500">Days to Transform</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-zinc-900 number-highlight mb-1">4.9</div>
              <div className="text-sm text-zinc-500">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-zinc-50" id="video">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              See the transformation
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Watch how real people overcame their fears and transformed their lives.
            </p>
          </div>

          <div className="video-container aspect-video">
            <video
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/videos/testimonial_2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding" id="how-it-works">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-zinc-900 mb-4">
              You know that feeling...
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              That moment when opportunity knocks, but something inside you freezes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 rounded-2xl">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Missed Opportunities</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                You watch others take the chances you were too afraid to take. Promotions, relationships, adventures — all passing you by.
              </p>
            </div>

            <div className="card-elevated p-8 rounded-2xl">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Constant Self-Doubt</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                That voice in your head never stops. &ldquo;You&apos;re not good enough.&rdquo; &ldquo;Who do you think you are?&rdquo; It&apos;s exhausting.
              </p>
            </div>

            <div className="card-elevated p-8 rounded-2xl">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">Playing It Safe</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                You&apos;ve built a comfortable cage. Safe, but suffocating. Deep down, you know you&apos;re capable of so much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge mb-6 mx-auto">
              <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></span>
              The Solution
            </div>
            <h2 className="heading-lg text-zinc-900 mb-4">
              Introducing The Comfort Effect
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              A science-backed system that rewires how you respond to fear — turning your biggest obstacle into your greatest advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Identify Your Fear Patterns</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Discover the hidden triggers that have been holding you back — most people have no idea these exist.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Rewire Your Response</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Use our proven techniques to transform fear signals into action signals. This is where the magic happens.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Build Unstoppable Momentum</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">Stack small wins daily until confidence becomes your default state. In 21 days, you won&apos;t recognize yourself.</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-zinc-900 mb-3">First Results in 72 Hours</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Most members report feeling noticeably different within the first 3 days. By day 21, the transformation is undeniable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Bundle Section */}
      <section className="section-padding" id="get-started">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              Everything you need to transform
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Get the complete system — a $532 value — for just $17 today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "📘", title: "Complete Comfort Effect Guide", desc: "The core 7-strategy system for building authentic confidence.", price: "$97" },
              { icon: "📅", title: "21-Day Challenge Workbook", desc: "Daily exercises and prompts that make transformation inevitable.", price: "$67" },
              { icon: "🎧", title: "Audio Confidence Course", desc: "Listen anywhere — in the car, at the gym, or while you work.", price: "$127" },
              { icon: "💬", title: "Conversation Templates", desc: "Word-for-word scripts for high-stakes situations.", price: "$47" },
              { icon: "📋", title: "30-Day Transformation Planner", desc: "Your roadmap to lasting change with built-in accountability.", price: "$97" },
              { icon: "⚡", title: "Quick Reference Cards", desc: "Instant confidence boosts when you need them most.", price: "$97" },
            ].map((product, i) => (
              <div key={i} className="product-card p-5 rounded-xl bg-white">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl">{product.icon}</span>
                  <span className="text-xs text-zinc-400 line-through">{product.price}</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1">{product.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing CTA */}
          <div className="card-elevated rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <span className="text-sm text-zinc-400 line-through">$532 Value</span>
              <div className="text-5xl md:text-6xl font-semibold text-zinc-900 mb-2">$17</div>
              <p className="text-zinc-500 text-sm">One-time payment. Lifetime access.</p>
            </div>

            {/* PayPal Payment Button */}
            <div className="mb-6">
              <PayPalProvider>
                <PayPalButton amount="17.00" productName="Comfort Effect Toolkit" />
              </PayPalProvider>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secure Checkout
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Instant Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Course Section */}
      <section className="section-padding bg-zinc-50" id="audio-course">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="badge mb-6 mx-auto">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Bonus Included
            </div>
            <h2 className="heading-lg text-zinc-900 mb-4">
              90-Minute Audio Companion
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Listen anywhere, anytime. Perfect for your commute, workout, or focused learning sessions.
            </p>
          </div>

          <AudioPlayer
            src="/audio/confidence-course.mp3"
            title="The Comfort Effect Audio Course"
          />

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              90 minutes of content
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for offline
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              Professional audio quality
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              Real people. Real results.
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Hear from people who&apos;ve transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="video-container aspect-video">
              <video
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/testimonial_2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="video-container aspect-video">
              <video
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/testimonial_1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="testimonial-card card-elevated p-6 rounded-2xl">
              <div className="flex gap-0.5 text-zinc-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-zinc-900" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                &ldquo;I went from dreading meetings to leading them. My boss asked what changed — I just smiled.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 text-sm font-medium">S</div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">Sarah M.</div>
                  <div className="text-xs text-zinc-400">Marketing Director</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card card-elevated p-6 rounded-2xl">
              <div className="flex gap-0.5 text-zinc-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-zinc-900" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                &ldquo;Day 3 and I already asked for a raise. Got it. The techniques here cut through years of self-sabotage.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 text-sm font-medium">M</div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">Mike C.</div>
                  <div className="text-xs text-zinc-400">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card card-elevated p-6 rounded-2xl">
              <div className="flex gap-0.5 text-zinc-300 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-zinc-900" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                &ldquo;Finally launched my business after 3 years of &apos;planning.&apos; The Comfort Effect showed me my fear was the plan.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 text-sm font-medium">J</div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">Jessica R.</div>
                  <div className="text-xs text-zinc-400">Entrepreneur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Upsell Section */}
      <section className="section-padding bg-zinc-900" id="coaching">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-zinc-300 font-medium">Limited Spots Available</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
              Ready for Accelerated Results?
            </h2>

            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              For those who want faster, deeper transformation, our 1:1 Coaching program
              delivers personalized guidance and accountability that multiplies your results.
            </p>

            {/* Program Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Personal Attention</h3>
                <p className="text-zinc-400 text-sm">Weekly 1-on-1 sessions tailored to your specific challenges and goals.</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">4-Week Sprint</h3>
                <p className="text-zinc-400 text-sm">Intensive program designed to compress months of growth into weeks.</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Proven Results</h3>
                <p className="text-zinc-400 text-sm">95% of coaching clients report breakthrough results within the first 2 weeks.</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <CountdownTimer
                durationMinutes={30}
                label="Special application pricing expires in:"
                storageKey="coaching_offer_timer"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsCoachingModalOpen(true)}
              className="group inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-medium text-base hover:bg-zinc-100 transition-all hover:scale-105 shadow-lg shadow-black/20"
            >
              Apply Now
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-sm text-zinc-500 mt-4">
              Only 5 spots available this month
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              Questions & Answers
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is this different from other self-help programs?",
                a: "Most programs focus on positive thinking or motivation — which wears off. The Comfort Effect rewires your actual response to fear using neuroscience-backed techniques. You're not fighting fear anymore; you're transforming it into fuel."
              },
              {
                q: "What if it doesn't work for me?",
                a: "Try it risk-free for 30 days. If you don't feel a noticeable shift in how you handle fear and self-doubt, email us and we'll refund every penny. No questions, no hassle."
              },
              {
                q: "How quickly will I see results?",
                a: "Most people report feeling different within 72 hours of starting. The full 21-day program creates lasting neural pathways that make confidence your new default."
              },
              {
                q: "Is this just for business/career situations?",
                a: "No — the techniques work in any situation where fear holds you back. Relationships, social situations, public speaking, creative projects, health goals — anywhere you need to push past your comfort zone."
              }
            ].map((faq, i) => (
              <div key={i} className="card-elevated p-6 rounded-xl">
                <h3 className="text-base font-semibold text-zinc-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-zinc-900 mb-4">
            Your future self is waiting
          </h2>
          <p className="body-lg max-w-xl mx-auto mb-10">
            21 days from now, you could be living the life you&apos;ve been too afraid to pursue. Or you could still be waiting.
          </p>

          <a
            href="#get-started"
            className="btn-primary inline-block px-10 py-4 rounded-full text-base font-medium mb-6"
          >
            Start Your Transformation — $17
          </a>

          <p className="text-sm text-zinc-400">
            30-day money-back guarantee. Instant access. No risk.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-base font-semibold text-zinc-900 mb-1">The Comfort Effect</div>
              <p className="text-xs text-zinc-400">By Eula Properties LLC</p>
            </div>

            <div className="flex gap-6 text-xs text-zinc-400">
              <a href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
              <a href="mailto:support@comforteffect.com" className="hover:text-zinc-900 transition-colors">Contact</a>
            </div>
          </div>

          <div className="divider my-8"></div>

          <div className="text-center text-xs text-zinc-400">
            © 2025 Eula Properties LLC. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Coaching Modal */}
      <CoachingModal
        isOpen={isCoachingModalOpen}
        onClose={() => setIsCoachingModalOpen(false)}
      />
    </main>
  );
}
