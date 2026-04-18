import { motion } from 'framer-motion'

export default function MenuCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group bg-grove-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
        transition-shadow duration-500 border border-grove-cream-dark/50"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading text-lg font-semibold text-grove-green-dark group-hover:text-grove-green transition-colors duration-300">
                {item.name}
              </h3>
              {item.bestseller && (
                <span className="px-2 py-0.5 bg-grove-gold/15 text-grove-gold-dark text-[10px] font-bold
                  uppercase tracking-wider rounded-full border border-grove-gold/30">
                  Best Seller
                </span>
              )}
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="font-heading text-xl font-bold text-grove-gold">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-grove-muted leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Bottom Accent */}
        <div className="mt-4 pt-4 border-t border-grove-cream-dark/40">
          <button className="text-xs font-semibold text-grove-green-light uppercase tracking-wider
            hover:text-grove-gold transition-colors duration-300 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add to Order
          </button>
        </div>
      </div>
    </motion.div>
  )
}
