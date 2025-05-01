"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, FileText, Users, Info, Mail, Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-red-600 border-b border-red-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-red-600 font-bold mr-2">
              C
            </div>
            <span className="text-white font-bold text-lg">CityUQBank</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`flex items-center text-sm ${
                isActive("/") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
            >
              <Home className="w-4 h-4 mr-1.5" />
              Home
            </Link>
            <Link
              href="/questions"
              className={`flex items-center text-sm ${
                isActive("/questions") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Questions
            </Link>
            <Link
              href="/contributors"
              className={`flex items-center text-sm ${
                isActive("/contributors") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 mr-1.5" />
              Contributors
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-sm ${
                isActive("/about") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
            >
              <Info className="w-4 h-4 mr-1.5" />
              About
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-sm ${
                isActive("/contact") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
            >
              <Mail className="w-4 h-4 mr-1.5" />
              Contact
            </Link>
            <Link
              href="/upload"
              className="text-sm font-medium text-white bg-red-700 hover:bg-red-800 px-3 py-1.5 rounded-md transition-colors"
            >
              Upload PDF
            </Link>
          </nav>

          {/* Right Side - Theme Toggle & Sign In (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Link href="/auth/signin">
              <Button className="bg-white text-red-600 hover:bg-red-50 rounded-full px-5">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-700 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`flex items-center text-sm ${
                isActive("/") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-4 h-4 mr-1.5" />
              Home
            </Link>
            <Link
              href="/questions"
              className={`flex items-center text-sm ${
                isActive("/questions") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Questions
            </Link>
            <Link
              href="/contributors"
              className={`flex items-center text-sm ${
                isActive("/contributors") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users className="w-4 h-4 mr-1.5" />
              Contributors
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-sm ${
                isActive("/about") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="w-4 h-4 mr-1.5" />
              About
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-sm ${
                isActive("/contact") ? "text-white font-medium" : "text-red-100 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-1.5" />
              Contact
            </Link>
            <Link
              href="/upload"
              className="text-sm font-medium text-white bg-red-800 hover:bg-red-900 px-3 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload PDF
            </Link>

            <div className="flex items-center justify-between pt-4 border-t border-red-600">
              <ModeToggle />
              <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-white text-red-600 hover:bg-red-50">Sign In</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
