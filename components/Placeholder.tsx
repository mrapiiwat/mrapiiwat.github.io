import { DM_Serif_Display, DM_Mono } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["300", "400"] });

export default function Placeholder() {
  return (
    <div
      className={`${dmMono.className} flex min-h-screen items-center justify-center bg-zinc-50 px-8 py-12 dark:bg-zinc-950`}
    >
      <main className="w-full max-w-md">
        <div className="mb-10 flex items-center gap-3">
          <span className="text-[11px] tracking-[0.18em] text-zinc-400 uppercase dark:text-zinc-600">
            Portfolio — 2026
          </span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <h1
          className={`${dmSerif.className} mb-0 text-[56px] leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50`}
        >
          Under
          <br />
          <em className="text-zinc-400 dark:text-zinc-600">Construction.</em>
        </h1>

        <div className="my-7 h-px w-8 bg-zinc-300 dark:bg-zinc-700" />

        <p className="mb-8 text-[13px] leading-[1.8] font-light text-zinc-500 dark:text-zinc-400">
          กำลังพัฒนา Portfolio เวอร์ชันใหม่อยู่ครับ
          <br />
          ระบบกำลังถูกอัปเกรด — แวะมาใหม่เร็วๆ นี้
        </p>

        <div className="mb-7 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-600" />
          <span className="text-[11px] tracking-widest text-zinc-400 uppercase dark:text-zinc-600">
            In progress
          </span>
        </div>

        <a
          href="https://github.com/mrapiiwat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-sm border border-zinc-300 px-6 py-3.5 text-[12px] tracking-[0.08em] text-zinc-900 uppercase transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          GitHub
        </a>

        <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-6 text-[11px] tracking-[0.06em] text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
          <span>mrapiiwat</span>
          <span>coming soon</span>
        </div>
      </main>
    </div>
  );
}
