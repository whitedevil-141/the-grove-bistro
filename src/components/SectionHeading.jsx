import { motion } from 'framer-motion'

export default function SectionHeading({ subtitle, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="text-center mb-14 max-w-2xl mx-auto"
    >
      {subtitle && (
        <span className={`text-xs font-semibold tracking-[0.3em] uppercase mb-3 block ${
          light ? 'text-grove-gold-light' : 'text-grove-gold'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-grove-white' : 'text-grove-green-dark'
      }`}>
        {title}
      </h2>
      <div className="gold-divider" />
      {description && (
        <p className={`text-base sm:text-lg mt-4 leading-relaxed ${
          light ? 'text-grove-white/70' : 'text-grove-muted'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
