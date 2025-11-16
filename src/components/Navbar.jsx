import { useState, useEffect } from 'react'
import { Menu, X, Ship, Leaf, Globe } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur bg-blue-900/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-white/10 border border-white/20">
              <Ship className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-wide">Indigo Exports</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-md font-semibold hover:opacity-90">
              <Leaf className="w-4 h-4" /> Inquire
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-blue-950/80 backdrop-blur border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90 py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-md font-semibold">
              <Globe className="w-4 h-4" /> Inquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
