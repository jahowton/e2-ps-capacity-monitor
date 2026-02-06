"use client";

import { useState } from "react";

function Confetti() {
  const pieces = Array.from({ length: 40 });
  const colors = [
    "#ff0",
    "#f0f",
    "#0ff",
    "#f00",
    "#0f0",
    "#00f",
    "#ff8800",
    "#ff00aa",
  ];
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            fontSize: `${Math.random() * 12 + 8}px`,
            color: colors[i % colors.length],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        >
          {["🎉", "🎊", "✨", "⭐", "💫", "🌟", "🥳", "🎈"][i % 8]}
        </span>
      ))}
    </div>
  );
}

function CryingRain() {
  const drops = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {drops.map((_, i) => (
        <span
          key={i}
          className="absolute animate-rain text-2xl opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 1.5 + 1}s`,
          }}
        >
          💧
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans dark:from-gray-950 dark:via-black dark:to-indigo-950">
      {response === "yes" && <Confetti />}
      {response === "no" && <CryingRain />}

      <main className="relative z-10 flex w-full max-w-lg flex-col items-center gap-10 px-6 py-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-5xl">📊</div>
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            E2 PS Capacity Monitor
          </h1>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Monitoring made simple
          </p>
        </div>

        {/* Prompt Card */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          {response === null && (
            <div className="flex flex-col items-center gap-6">
              <div className="text-4xl">🤔</div>
              <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-gray-100">
                Are you enjoying this application?
              </h2>
              <div className="flex w-full gap-4">
                <button
                  onClick={() => setResponse("yes")}
                  className="flex-1 cursor-pointer rounded-xl bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg active:translate-y-0"
                >
                  Yes! 👍
                </button>
                <button
                  onClick={() => setResponse("no")}
                  className="flex-1 cursor-pointer rounded-xl bg-red-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg active:translate-y-0"
                >
                  No 👎
                </button>
              </div>
            </div>
          )}

          {response === "yes" && (
            <div className="flex animate-fade-in flex-col items-center gap-4">
              <div className="text-8xl animate-bounce">🥳</div>
              <h2 className="text-center text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                Awesome! We&apos;re thrilled!
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Your support means the world to us! Keep on monitoring! 🚀
              </p>
              <div className="mt-2 flex gap-2 text-4xl">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>🎊</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>🏆</span>
                <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>🎊</span>
              </div>
              <button
                onClick={() => setResponse(null)}
                className="mt-4 cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                Back
              </button>
            </div>
          )}

          {response === "no" && (
            <div className="flex animate-fade-in flex-col items-center gap-4">
              <div className="relative">
                <div className="text-8xl">😭</div>
                <div className="absolute -right-3 -top-3 text-3xl animate-pulse">💔</div>
              </div>
              <h2 className="text-center text-2xl font-bold text-red-600 dark:text-red-400">
                We&apos;re devastated...
              </h2>
              <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                <p className="text-center text-5xl leading-relaxed">
                  😢😢😢
                </p>
                <p className="mt-2 text-center text-xs italic text-gray-500 dark:text-gray-400">
                  * Actual footage of our dev team right now *
                </p>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">
                We&apos;ll try harder... we promise! 😿
              </p>
              <button
                onClick={() => setResponse(null)}
                className="mt-4 cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                Give us another chance
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
