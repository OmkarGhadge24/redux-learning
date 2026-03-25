import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0f172a] via-[#0b1121] to-[#020617] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 backdrop-blur-lg bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold tracking-tight">Media Search</h1>
          <nav className="flex gap-2">
            <Link
              to="/"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800 transition"
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="rounded-lg border border-slate-700 bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition"
            >
              Collection
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto px-6 pb-12 pt-8 md:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App