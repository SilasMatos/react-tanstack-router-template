const sidebarItems = [
  { label: 'Dashboard', icon: '🏠' },
  { label: 'Profile', icon: '👤' },
  { label: 'Settings', icon: '⚙️' },
  { label: 'Logout', icon: '🚪' }
]

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        MyApp
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map(item => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
