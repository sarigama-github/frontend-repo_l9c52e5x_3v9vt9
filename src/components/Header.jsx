import { User, Settings, LogIn, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({ onLogin }) {
  return (
    <header className="relative w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="h-11 w-11 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 grid place-items-center shadow-[0_0_20px_rgba(249,115,22,0.5)]"
          >
            <Flame className="text-black" size={24} />
          </motion.div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-orange-200">
              Ezz
            </h1>
            <p className="text-xs uppercase tracking-widest text-amber-400/70">
              BO2 Zombies Network
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-md border border-amber-500/30 bg-black/40 px-3 py-2 text-amber-200 hover:bg-amber-500/10 transition"
            aria-label="Settings"
          >
            <Settings size={18} />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <button
            onClick={onLogin}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-2 font-semibold text-black shadow-lg hover:shadow-orange-500/30 transition"
          >
            <LogIn size={18} />
            <span>Login</span>
          </button>
          <div className="ml-2 hidden sm:flex items-center gap-2 text-amber-300/80">
            <User size={18} />
            <span className="text-sm">Guest</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-24 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
    </header>
  );
}
