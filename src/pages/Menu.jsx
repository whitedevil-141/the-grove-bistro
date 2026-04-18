import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import MenuCard from '../components/MenuCard'
import { menuItems } from '../data/menuData'

const tabs = [
  { id: 'all', label: 'All Items' },
  { id: 'coffee', label: 'Coffee & Espresso' },
  { id: 'cold-drinks', label: 'Cold Drinks' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'shawarma', label: 'Shawarma & Wraps' },
  { id: 'burgers', label: 'Burgers & Rolls' },
]

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeTab, setActiveTab] = useState(initialCategory)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && tabs.some((t) => t.id === cat)) {
      setActiveTab(cat)
    }
  }, [searchParams])

  const filteredItems =
    activeTab === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: tabId })
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-grove-green-dark grain-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-grove-green-dark via-grove-green to-grove-green-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-grove-gold mb-3 block"
          >
            Discover Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-grove-white mb-4"
          >
            Our Menu
          </motion.h1>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-grove-white/60 mt-4 text-lg max-w-xl mx-auto"
          >
            Each item is thoughtfully crafted with premium ingredients and a passion for flavor.
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-grove-cream relative grain-texture" id="menu-items-section">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase
                  transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-grove-green-dark'
                      : 'text-grove-muted hover:text-grove-green-dark'
                  }`}
                id={`tab-${tab.id}`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-grove-gold rounded-full shadow-lg shadow-grove-gold/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Items Count */}
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-grove-muted mb-8"
          >
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </motion.p>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-grove-green-dark text-center relative grain-texture">
        <div className="relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-grove-white font-bold mb-4">
              Craving Something?
            </h2>
            <p className="text-grove-white/50 mb-8 text-lg">
              Order your favorites now via WhatsApp — fast, easy, and delicious.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-grove-gold text-grove-green-dark text-sm font-semibold
                rounded-full hover:bg-grove-gold-light hover:shadow-lg hover:shadow-grove-gold/20
                transition-all duration-300 tracking-wide uppercase"
            >
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
