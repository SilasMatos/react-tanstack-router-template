import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">MyApp</div>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
