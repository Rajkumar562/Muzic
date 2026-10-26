"use client";

import { useEffect, useState } from "react";
import { Appbar } from "../../components/Appbar";

type Song = {
  id: string;
  videoId: string;
  title: string;
  upvotes: number;
  downvotes:number;
  myVote: 1 | -1 | 0;
};

const INITIAL_SONGS: Song[] = [
  { id: "1", videoId: "dQw4w9WgXcQ", title: "Rick Astley - Never Gonna Give You Up", upvotes: 12, downvotes:10,myVote: 0 },
  { id: "2", videoId: "9bZkp7q19f0", title: "PSY - GANGNAM STYLE", upvotes: 8, downvotes:2,myVote: 0 },
  { id: "3", videoId: "kJQP7kiw5Fk", title: "Luis Fonsi - Despacito ft. Daddy Yankee", upvotes: 5, downvotes:4,myVote: 0 },
];

const REFRESH_INTERVAL_MS = 10 *1000;


function extractVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
}

export default function Dashboard() {
  const [songs, setSongs] = useState<Song[]>(INITIAL_SONGS);
  const [current, setCurrent] = useState<Song | null>(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const queue = [...songs].sort((a, b) => b.upvotes - a.upvotes);

  async function RefreshStreams(){

}

  useEffect(()=>{
    RefreshStreams();
    const interval = setInterval(()=>{},REFRESH_INTERVAL_MS)
    }, [])

  function addSong(e: React.FormEvent) {
    e.preventDefault();
    const videoId = extractVideoId(url.trim());
    if (!videoId) {
      setError("Please enter a valid YouTube video URL");
      return;
    }
    if (songs.some((s) => s.videoId === videoId) || current?.videoId === videoId) {
      setError("This song is already in the queue");
      return;
    }
    setSongs((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        videoId,
        title: `YouTube video ${videoId}`,
        upvotes: 0,
        downvotes:0,
        myVote: 0,
      },
    ]);
    setUrl("");
    setError("");
  }

  function vote(id: string, direction: 1 | -1) {
    setSongs((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        // clicking the same direction again removes the vote
        const myVote = s.myVote === direction ? 0 : direction;
        return { ...s, myVote, upvotes: s.upvotes - s.myVote + myVote };
      }),
    );
  }

  function playNext() {
    if (queue.length === 0) {
      setCurrent(null);
      return;
    }
    const [next] = queue;
    setCurrent(next);
    setSongs((prev) => prev.filter((s) => s.id !== next.id));
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Appbar />

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[128px]" />
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-pink-600/15 blur-[128px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 pt-28 pb-16 lg:grid-cols-5">
        {/* Now Playing */}
        <section className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Now Playing</h2>
            <button
              onClick={playNext}
              disabled={queue.length === 0}
              className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Play Next
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="aspect-video w-full bg-black">
              {current ? (
                <iframe
                  key={current.videoId}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${current.videoId}?autoplay=1`}
                  title={current.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-500">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  <p className="text-sm">Nothing playing. Hit “Play Next” to start.</p>
                </div>
              )}
            </div>
            {current && (
              <div className="border-t border-white/10 p-4">
                <p className="font-medium text-white">{current.title}</p>
              </div>
            )}
          </div>
        </section>

        {/* Queue */}
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Add a Song</h2>
          <form onSubmit={addSong} className="flex gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste a YouTube URL"
              className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-purple-500/50"
            />
            <button
              type="submit"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Add
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

          <h2 className="mt-8 mb-4 text-lg font-semibold">
            Up Next{" "}
            <span className="text-sm font-normal text-gray-500">
              ({queue.length})
            </span>
          </h2>

          {queue.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-sm text-gray-500">
              The queue is empty. Add a song above!
            </p>
          ) : (
            <ul className="space-y-3">
              {queue.map((song, i) => (
                <li
                  key={song.id}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-purple-500/20 hover:bg-white/[0.04]"
                >
                  {/* Preview */}
                  <div className="relative shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`}
                      alt={song.title}
                      className="h-16 w-28 rounded-lg object-cover"
                    />
                    {i === 0 && (
                      <span className="absolute top-1 left-1 rounded bg-purple-500 px-1.5 py-0.5 text-[10px] font-semibold uppercase">
                        Next
                      </span>
                    )}
                  </div>

                  <p className="line-clamp-2 min-w-0 flex-1 text-sm text-gray-200">
                    {song.title}
                  </p>

                  {/* Voting */}
                  <div className="flex shrink-0 flex-col items-center">
                    <button
                      onClick={() => vote(song.id, 1)}
                      aria-label="Upvote"
                      className={`rounded p-1 transition-colors ${
                        song.myVote === 1 ? "text-purple-400" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <span className="text-sm font-semibold">{song.upvotes}</span>
                    <button
                      onClick={() => vote(song.id, -1)}
                      aria-label="Downvote"
                      className={`rounded p-1 transition-colors ${
                        song.myVote === -1 ? "text-pink-400" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
