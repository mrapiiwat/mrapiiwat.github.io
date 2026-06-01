import { DM_Serif_Display, DM_Mono } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["300", "400"] });

export default function Home() {
  return (
    <div
      className={`${dmMono.className} flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-8 py-12`}
    >
      <main className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-600">
            Portfolio — 2026
          </span>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <h1
          className={`${dmSerif.className} text-[56px] leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50 mb-0`}
        >
          Under
          <br />
          <em className="text-zinc-400 dark:text-zinc-600">Construction.</em>
        </h1>

        <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 my-7" />

        <p className="text-[13px] font-light leading-[1.8] text-zinc-500 dark:text-zinc-400 mb-8">
          กำลังพัฒนา Portfolio เวอร์ชันใหม่อยู่ครับ
          <br />
          ระบบกำลังถูกอัปเกรด — แวะมาใหม่เร็วๆ นี้
        </p>

        <div className="flex items-center gap-2 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-pulse" />
          <span className="text-[11px] tracking-widest uppercase text-zinc-400 dark:text-zinc-600">
            In progress
          </span>
        </div>

        <a
          href="https://github.com/mrapiiwat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-[12px] tracking-[0.08em] uppercase text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 px-6 py-3.5 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          GitHub
        </a>

        <div className="flex justify-between items-center mt-16 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-[11px] tracking-[0.06em] text-zinc-400 dark:text-zinc-600">
          <span>mrapiiwat</span>
          <span>coming soon</span>
        </div>
      </main>
    </div>
  );
}