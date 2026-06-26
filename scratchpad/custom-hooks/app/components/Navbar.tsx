export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">GitHub Viewer</h1>
          <p className="text-xs text-gray-400">CPRG 306 Web Development 2</p>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Week 4 · Hooks
        </span>
      </div>
    </header>
  );
}
