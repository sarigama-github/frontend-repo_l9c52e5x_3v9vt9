import { useState } from "react";
import { Trophy, MessageSquare, BarChart3, Users } from "lucide-react";

export default function Tabs() {
  const [active, setActive] = useState("stats");

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        {[
          { id: "stats", label: "Stats", icon: BarChart3 },
          { id: "chats", label: "Chats", icon: MessageSquare },
          { id: "records", label: "Records", icon: Trophy },
          { id: "profiles", label: "Profiles", icon: Users },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 transition ${
              active === t.id
                ? "border-amber-400 bg-amber-400/10 text-amber-200"
                : "border-amber-500/20 bg-black/40 text-amber-300 hover:border-amber-400/40"
            }`}
          >
            <t.icon size={16} />
            <span className="text-sm">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-amber-500/20 bg-black/40 p-4 min-h-[180px]">
        {active === "stats" && (
          <div className="text-amber-100">
            <p className="mb-2 font-semibold">Top Players</p>
            <ul className="space-y-1 text-sm text-amber-200/90">
              <li>#1 • Nova • 214,900 XP</li>
              <li>#2 • Vex • 201,420 XP</li>
              <li>#3 • Ghost • 198,310 XP</li>
            </ul>
          </div>
        )}
        {active === "chats" && (
          <div className="text-amber-100 space-y-2 text-sm">
            <div className="opacity-80">[Kino #1] Razor: Anyone up for EE?</div>
            <div className="opacity-80">[Origins #2] Luna: Need Maxis side</div>
            <div className="opacity-80">[Mob #3] Hex: BRUTUS DOWN!</div>
          </div>
        )}
        {active === "records" && (
          <div className="text-amber-100 text-sm space-y-2">
            <div>Origins High Round: 152 • Player: Zero</div>
            <div>Kino EE Speedrun: 28:14 • Squad: Rush</div>
            <div>Mob High Round: 132 • Player: Lyric</div>
          </div>
        )}
        {active === "profiles" && (
          <div className="text-amber-100 text-sm">
            <p className="mb-2 font-semibold">Featured Profile</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
              <div>
                <div className="font-medium">Nova</div>
                <div className="text-xs text-amber-400/70">Prestige 7 • Origins main</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
