import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-amber-500/20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/s8b0yOt9mG6zHkUG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/60 to-transparent pointer-events-none" />
      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400"
        >
          Ezz • Black Ops II Zombies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 max-w-xl text-amber-200/80"
        >
          A premium network for chill runs, record hunts, and cross-server chat — all synced in real-time.
        </motion.p>
      </div>
    </section>
  );
}
