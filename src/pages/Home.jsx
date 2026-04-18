import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Lightbox from '../components/Lightbox'
import { categories, menuItems, testimonials, galleryImages } from '../data/menuData'
import heroBg from '../assets/images/hero-bg.png'
import aboutInterior from '../assets/images/about-interior.png'

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const bestsellers = menuItems.filter((item) => item.bestseller)

  /* Auto-rotate testimonials */
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden" id="hero-section">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 -top-20"
        >
          <img
            src={heroBg}
            alt="The Grove Bistro interior"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-grove-green-dark/70 via-grove-green-dark/50 to-grove-green-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-grove-green-dark/40 to-transparent" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-grove-gold text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            >
              A pan-European bistro
            </motion.span>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-grove-white leading-[0.95] mb-4"
            >
              The Grove
              <br />
              <span className="text-grove-gold">Bistro</span>
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} className="gold-divider !ml-0 !my-6" />

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-lg sm:text-xl text-grove-white/80 font-light mb-8 max-w-lg leading-relaxed"
            >
              Where Taste Meets Elegance — specialty coffee, artisan cuisine, and an ambiance that turns every visit into a cherished memory.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/menu">
                Explore Menu
              </Button>
              <Button variant="outline-white" size="lg" href="https://wa.me/1234567890">
                Order Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-grove-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-grove-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-grove-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ FEATURED CATEGORIES ═══════════ */}
      <section className="section-padding bg-grove-cream relative grain-texture" id="categories-section">
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Curated for Your Palate"
            description="From handcrafted coffees to gourmet bites — explore the flavors that define The Grove."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  to={`/menu?category=${cat.id}`}
                  className="group block rounded-2xl overflow-hidden relative h-72 sm:h-80"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grove-green-dark/80 via-grove-green-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl text-grove-white font-semibold mb-1 group-hover:text-grove-gold transition-colors duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-grove-white/60">{cat.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-grove-gold text-xs font-semibold uppercase tracking-wider
                      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Menu
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="section-padding bg-grove-white" id="about-preview-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutInterior}
                  alt="The Grove Bistro elegant interior"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-grove-gold/30 rounded-2xl -z-10 hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-grove-gold/10 rounded-2xl -z-10 hidden lg:block" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-grove-gold mb-3 block">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-grove-green-dark mb-4 leading-tight">
                Crafted with Passion,{' '}
                <span className="text-grove-gold">Served with Love</span>
              </h2>
              <div className="gold-divider !ml-0 !my-6" />
              <p className="text-grove-muted leading-relaxed mb-4">
                Nestled in the heart of the city, The Grove Bistro was born from a dream to create a space
                where exceptional food, artisan coffee, and timeless elegance converge. Every detail — from our
                hand-sourced beans to our vintage-inspired interiors — reflects our commitment to an unforgettable experience.
              </p>
              <p className="text-grove-muted leading-relaxed mb-8">
                We believe dining is more than sustenance; it's an art form. Our chefs and baristas pour
                creativity into every dish and cup, ensuring that each visit to The Grove is a journey of flavors.
              </p>
              <Button variant="outline" href="/about">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ BEST SELLERS ═══════════ */}
      <section className="section-padding bg-grove-green-dark relative grain-texture" id="bestsellers-section">
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Crowd Favorites"
            title="Our Best Sellers"
            description="The dishes and drinks our guests can't stop ordering — tried, loved, and coming back for more."
            light
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {bestsellers.slice(0, 8).map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                custom={i}
                className="bg-grove-white/5 backdrop-blur-sm border border-grove-white/10 rounded-2xl p-6
                  hover:bg-grove-white/10 hover:border-grove-gold/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-grove-gold font-semibold uppercase tracking-wider px-2 py-0.5
                    bg-grove-gold/10 rounded-full border border-grove-gold/20">
                    ★ Best Seller
                  </span>
                </div>
                <h3 className="font-heading text-lg text-grove-white font-semibold mb-2 group-hover:text-grove-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-grove-white/50 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-bold text-grove-gold">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="text-xs font-semibold text-grove-white/60 uppercase tracking-wider
                    hover:text-grove-gold transition-colors duration-300">
                    + Add
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline-white" href="/menu">
              View Full Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-padding bg-grove-cream relative grain-texture" id="testimonials-section">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeading
            subtitle="What People Say"
            title="Guest Experiences"
          />

          <div className="relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: i === testimonialIndex ? 1 : 0,
                  y: i === testimonialIndex ? 0 : 20,
                  position: i === testimonialIndex ? 'relative' : 'absolute',
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`text-center w-full ${i !== testimonialIndex ? 'top-0 left-0 pointer-events-none' : ''}`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-grove-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-heading text-xl sm:text-2xl text-grove-green-dark italic leading-relaxed mb-8 px-4">
                  "{t.text}"
                </blockquote>

                <div>
                  <p className="font-semibold text-grove-green-dark">{t.name}</p>
                  <p className="text-sm text-grove-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === testimonialIndex
                    ? 'bg-grove-gold w-8'
                    : 'bg-grove-green-dark/20 hover:bg-grove-gold/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="section-padding bg-grove-white" id="gallery-section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Visual Delights"
            title="From Our Kitchen"
            description="A glimpse into the artistry behind every plate and cup at The Grove."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square"
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true) }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-grove-green-dark/0 group-hover:bg-grove-green-dark/40
                  transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-grove-gold/20 backdrop-blur-sm border border-grove-gold/40
                      flex items-center justify-center">
                      <svg className="w-5 h-5 text-grove-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="py-20 sm:py-28 bg-grove-green-dark relative overflow-hidden" id="cta-section">
        <div className="absolute inset-0 opacity-5">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-grove-green-dark/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-grove-white font-bold mb-4">
              Ready to Experience{' '}
              <span className="text-grove-gold">The Grove?</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-grove-white/60 mt-4 mb-10 text-lg">
              Reserve your table or order ahead for a seamless gourmet experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" href="https://wa.me/1234567890">
                Order via WhatsApp
              </Button>
              <Button variant="outline-white" size="lg" href="/contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
