import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-grove-gold text-grove-green-dark hover:bg-grove-gold-light hover:shadow-lg hover:shadow-grove-gold/25',
    outline:
      'border-2 border-grove-gold text-grove-gold hover:bg-grove-gold hover:text-grove-green-dark',
    'outline-white':
      'border-2 border-grove-white/60 text-grove-white hover:border-grove-gold hover:text-grove-gold',
    ghost:
      'text-grove-gold hover:bg-grove-gold/10',
  }

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const Component = href ? 'a' : 'button'
  const linkProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : {}

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Component className={classes} onClick={onClick} {...linkProps} {...props}>
        {children}
      </Component>
    </motion.div>
  )
}
