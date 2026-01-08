export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              10,000+ People Have Transformed Their Lives
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Stop Letting Fear
              <span className="block gradient-text">Steal Your Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              The proven 21-day system that turns self-doubt into unstoppable confidence.
              No therapy. No mantras. Just <span className="text-yellow-400 font-semibold">real results</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#get-started"
                className="cta-button pulse-cta bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get Instant Access - Only $17
              </a>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                See How It Works
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant Digital Access
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Works in 72 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center stat-item">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
            <div className="text-center stat-item" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center stat-item" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">21</div>
              <div className="text-gray-600">Days to Transform</div>
            </div>
            <div className="text-center stat-item" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You Know That Feeling...
            </h2>
            <p className="text-xl text-gray-600">
              That moment when opportunity knocks, but something inside you freezes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Missed Opportunities</h3>
              <p className="text-gray-600">
                You watch others take the chances you were too afraid to take. Promotions, relationships, adventures — all passing you by.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Constant Self-Doubt</h3>
              <p className="text-gray-600">
                That voice in your head never stops. &ldquo;You&apos;re not good enough.&rdquo; &ldquo;Who do you think you are?&rdquo; It&apos;s exhausting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Playing It Safe</h3>
              <p className="text-gray-600">
                You&apos;ve built a comfortable cage. Safe, but suffocating. Deep down, you know you&apos;re capable of so much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Introducing <span className="gradient-text">The Comfort Effect</span>
            </h2>
            <p className="text-xl text-gray-600">
              A science-backed system that rewires how you respond to fear — turning your biggest obstacle into your greatest advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Identify Your Fear Patterns</h3>
                  <p className="text-gray-600">Discover the hidden triggers that have been holding you back — most people have no idea these exist.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rewire Your Response</h3>
                  <p className="text-gray-600">Use our proven techniques to transform fear signals into action signals. This is where the magic happens.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Build Unstoppable Momentum</h3>
                  <p className="text-gray-600">Stack small wins daily until confidence becomes your default state. In 21 days, you won&apos;t recognize yourself.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold mb-2">First Results in 72 Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Most members report feeling noticeably different within the first 3 days. By day 21, the transformation is undeniable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Bundle Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="get-started">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need to Transform
            </h2>
            <p className="text-xl text-gray-600">
              Get the complete Comfort Effect system — a $532 value — for just $17 today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Product 1 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">📘</div>
                  <span className="text-sm text-gray-400 line-through">$97</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">The Complete Comfort Effect Guide</h3>
                <p className="text-gray-600 text-sm">The core 7-strategy system for building authentic confidence and connection.</p>
              </div>

              {/* Product 2 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">📅</div>
                  <span className="text-sm text-gray-400 line-through">$67</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">21-Day Challenge Workbook</h3>
                <p className="text-gray-600 text-sm">Daily exercises and prompts that make transformation inevitable.</p>
              </div>

              {/* Product 3 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">🎧</div>
                  <span className="text-sm text-gray-400 line-through">$127</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Audio Confidence Course</h3>
                <p className="text-gray-600 text-sm">Listen anywhere — in the car, at the gym, or while you work.</p>
              </div>

              {/* Product 4 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">💬</div>
                  <span className="text-sm text-gray-400 line-through">$47</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Conversation Templates</h3>
                <p className="text-gray-600 text-sm">Word-for-word scripts for high-stakes situations.</p>
              </div>

              {/* Product 5 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">📋</div>
                  <span className="text-sm text-gray-400 line-through">$97</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">30-Day Transformation Planner</h3>
                <p className="text-gray-600 text-sm">Your roadmap to lasting change with built-in accountability.</p>
              </div>

              {/* Product 6 */}
              <div className="product-card bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">⚡</div>
                  <span className="text-sm text-gray-400 line-through">$97</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick Reference Cards</h3>
                <p className="text-gray-600 text-sm">Instant confidence boosts when you need them most.</p>
              </div>
            </div>

            {/* Pricing CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <div className="mb-6">
                <span className="text-white/70 text-lg line-through">$532 Value</span>
                <div className="text-5xl md:text-6xl font-bold">$17</div>
                <p className="text-white/80 mt-2">One-time payment. Lifetime access.</p>
              </div>

              <button className="cta-button bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors mb-6">
                Get Instant Access Now →
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure Checkout
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-Day Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Instant Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real People. Real Transformations.
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who&apos;ve already broken free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="testimonial-card bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;I went from dreading meetings to leading them. My boss asked what changed — I just smiled. This system is the real deal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-purple-600 font-bold">S</div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-gray-500">Marketing Director</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;Day 3 and I already asked for a raise. Got it. The techniques here cut through years of self-sabotage in days.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">M</div>
                <div>
                  <div className="font-semibold">Mike C.</div>
                  <div className="text-sm text-gray-500">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;I finally launched my business after 3 years of &apos;planning.&apos; The Comfort Effect showed me my fear was the plan. Game changer.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 font-bold">J</div>
                <div>
                  <div className="font-semibold">Jessica R.</div>
                  <div className="text-sm text-gray-500">Entrepreneur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions? We&apos;ve Got Answers.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">How is this different from other self-help programs?</h3>
                <p className="text-gray-600">
                  Most programs focus on positive thinking or motivation — which wears off. The Comfort Effect rewires your actual response to fear using neuroscience-backed techniques. You&apos;re not fighting fear anymore; you&apos;re transforming it into fuel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">What if it doesn&apos;t work for me?</h3>
                <p className="text-gray-600">
                  Try it risk-free for 30 days. If you don&apos;t feel a noticeable shift in how you handle fear and self-doubt, email us and we&apos;ll refund every penny. No questions, no hassle.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">How quickly will I see results?</h3>
                <p className="text-gray-600">
                  Most people report feeling different within 72 hours of starting. The full 21-day program creates lasting neural pathways that make confidence your new default.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">Is this just for business/career situations?</h3>
                <p className="text-gray-600">
                  No — the techniques work in any situation where fear holds you back. Relationships, social situations, public speaking, creative projects, health goals — anywhere you need to push past your comfort zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Future Self Is Waiting
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              21 days from now, you could be living the life you&apos;ve been too afraid to pursue. Or you could still be waiting. The choice is yours.
            </p>

            <a
              href="#get-started"
              className="cta-button inline-block bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors mb-6"
            >
              Start Your Transformation - $17
            </a>

            <p className="text-white/60 text-sm">
              30-day money-back guarantee. Instant access. No risk.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xl font-bold gradient-text mb-2">The Comfort Effect</div>
              <p className="text-gray-400 text-sm">By Eula Properties LLC</p>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:info@eulaproperties.com" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2025 Eula Properties LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
