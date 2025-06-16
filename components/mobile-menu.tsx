"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-transparent hover:text-cyan-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMenu}
              className="text-white hover:bg-transparent hover:text-cyan-500"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <a
              href="#experience"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Education
            </a>
            <a
              href="#achievements"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Achievements
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-xl font-medium text-white hover:text-cyan-500 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
