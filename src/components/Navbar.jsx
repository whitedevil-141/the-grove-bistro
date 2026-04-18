import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-grove-green-dark/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-grove-gold/20 border border-grove-gold/40 flex items-center justify-center group-hover:bg-grove-gold/30 transition-colors duration-300">
            <span className="text-grove-gold font-heading text-lg font-bold">G</span>
          </div>
          <div>
            <h1 className="font-heading text-grove-white text-lg sm:text-xl font-semibold tracking-wide leading-tight">
              The Grove
            </h1>
            <span className="text-grove-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-body">
              Bistro
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-grove-gold'
                  : 'text-grove-white/80 hover:text-grove-gold'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-grove-gold"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-grove-gold text-grove-green-dark text-sm font-semibold rounded-full
              hover:bg-grove-gold-light hover:shadow-lg hover:shadow-grove-gold/20
              transition-all duration-300 tracking-wide uppercase"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-grove-white origin-center transition-colors"
          />
          <motion.span
            animate={isMobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="block w-6 h-[2px] bg-grove-white"
          />
          <motion.span
            animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-grove-white origin-center transition-colors"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-grove-green-dark/98 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-heading font-semibold tracking-wide transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-grove-gold'
                        : 'text-grove-white/80 hover:text-grove-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-8 py-3 bg-grove-gold text-grove-green-dark text-lg font-semibold
                    rounded-full hover:bg-grove-gold-light transition-all duration-300 tracking-wide uppercase"
                >
                  Order Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
