import { useEffect, useState } from "react";
import { Server, SignalHigh, Users2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mockServers = [
  { id: 1, name: "Ezz Kino der Toten #1", map: "Kino der Toten", players: 14, max: 24, ping: 34, region: "EU" },
  { id: 2, name: "Ezz Origins #2", map: "Origins", players: 22, max: 24, ping: 61, region: "NA" },
  { id: 3, name: "Ezz Mob of the Dead #3", map: "Mob of the Dead", players: 9, max: 24, ping: 48, region: "EU" },
];

export default function ServerList() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    // In a real app, fetch from backend
    setServers(mockServers);
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-md rounded-xl border border-amber-500/20 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-amber-200 flex items-center gap-2">
          <Server size={18} /> Live Servers
        </h2>
        <span className="text-xs text-amber-400/70">Auto-updates</span>
      </div>
      <ul className="space-y-2">
        <AnimatePresence>
          {servers.map((s) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center justify-between rounded-lg border border-amber-500/10 bg-gradient-to-r from-zinc-900/60 to-zinc-900/20 p-3 hover:border-amber-500/30 transition"
            >
              <div>
                <div className="text-amber-100 font-medium">{s.name}</div>
                <div className="text-xs text-amber-400/70">{s.map} • {s.region}</div>
              </div>
              <div className="flex items-center gap-4 text-amber-200">
                <div className="flex items-center gap-1">
                  <Users2 size={16} />
                  <span className="text-sm">{s.players}/{s.max}</span>
                </div>
                <div className="flex items-center gap-1">
                  <SignalHigh size={16} />
                  <span className="text-sm">{s.ping}ms</span>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
