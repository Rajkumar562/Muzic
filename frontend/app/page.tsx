import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Appbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Gradient Blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[128px]" />
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-pink-600/20 blur-[128px]" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[128px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            Let your fans choose the music
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your Fans Pick the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Music
            </span>
            ,{" "}
            <br className="hidden sm:block" />
            You Feel the{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Vibe
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Muzic connects creators and their audience through music. Fans
            upvote the songs they want to hear — the top-voted track plays next.
            It&apos;s democracy, but for your playlist.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3.5 text-base font-semibold text-white shadow-2xl shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
            >
              Start Your Stream
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="mt-1 text-sm text-gray-500">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="mt-1 text-sm text-gray-500">Songs Voted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="mt-1 text-sm text-gray-500">Streams Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                engage
              </span>{" "}
              your audience
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-purple-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5">
                <svg
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Upvote & Downvote
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Your audience votes on which song plays next. The
                highest-voted track automatically moves to the top of the queue.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-pink-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5">
                <svg
                  className="h-6 w-6 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Live Streaming
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Seamlessly integrate with your live streams. Your fans vote in
                real-time while you create, game, or just hang out.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-blue-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5">
                <svg
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                YouTube Integration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Paste any YouTube link. We fetch the details automatically so
                your fans can preview and vote on music they love.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-green-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5">
                <svg
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Fan Engagement
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Build a deeper connection with your audience. Let them shape the
                vibe of your stream and keep them coming back.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-yellow-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5">
                <svg
                  className="h-6 w-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Smart Queue
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Songs are automatically ranked by votes. When the current song
                ends, the next most popular one starts playing.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-orange-500/20 hover:bg-white/[0.04]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                <svg
                  className="h-6 w-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Secure & Private
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Sign in with Google. One vote per user per song ensures fair
                voting — no bots, no spam, just your real fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[128px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Three steps to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                fan-powered
              </span>{" "}
              music
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-purple-500/30">
                1
              </div>
              <h3 className="text-xl font-semibold text-white">
                Create a Stream
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Sign in as a creator, set up your music stream, and share the
                link with your fans.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-2xl font-bold text-white shadow-lg shadow-pink-500/30">
                2
              </div>
              <h3 className="text-xl font-semibold text-white">
                Fans Submit & Vote
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Your audience adds YouTube songs and upvotes or downvotes the
                ones already in the queue.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-2xl font-bold text-white shadow-lg shadow-orange-500/30">
                3
              </div>
              <h3 className="text-xl font-semibold text-white">
                Top Song Plays
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                The most upvoted song plays next — your fans decide the vibe.
                Rinse and repeat!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators CTA Section */}
      <section id="creators" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-gray-900 to-pink-500/10 p-12 text-center sm:p-20">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[100px]" />

            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-5xl">
                Ready to let your fans{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  set the mood
                </span>
                ?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
                Join thousands of creators who are building stronger connections
                with their audience — one song at a time.
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-2xl shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
                >
                  Get Started — It&apos;s Free
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">Muzic</span>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Muzic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
