import { useState, Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServerList from "./components/ServerList";
import Tabs from "./components/Tabs";

// Lazy-load heavy charts to avoid initial white screen if Chart.js has issues
const ChartsPanel = lazy(() => import("./components/ChartsPanel"));

// Simple error boundary to prevent blank screen on runtime errors
import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    // eslint-disable-next-line no-console
    console.error("UI error:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] grid place-items-center rounded-xl border border-amber-500/20 bg-black/50 text-amber-200">
          Something went wrong. Try reloading.
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-amber-50">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <Header onLogin={handleLogin} />

      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        <Hero />

        <section className="mt-6 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <ServerList />
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-48 rounded-xl border border-amber-500/20 bg-black/40 animate-pulse" />
                    <div className="h-48 rounded-xl border border-amber-500/20 bg-black/40 animate-pulse" />
                  </div>
                }
              >
                <ChartsPanel />
              </Suspense>
            </ErrorBoundary>
          </div>
          <div>
            <Tabs />
            {isLoggedIn ? (
              <div className="mt-4 rounded-xl border border-amber-500/20 bg-black/40 p-4 text-amber-200">
                Logged in as Ezz Member. Welcome back!
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-amber-500/20 bg-black/40 p-4 text-amber-300/80">
                You are browsing as guest. Log in to save stats and chat across servers.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-amber-400/60">
        © {new Date().getFullYear()} Ezz Network — Black Ops II Zombies
      </footer>
    </div>
  );
}

export default App;
