"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">Muzic</span>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#creators"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            For Creators
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {session.data?.user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-gray-400 sm:inline">
                {session.data.user.name ?? session.data.user.email}
              </span>
              <button
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
              onClick={() => signIn()}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
