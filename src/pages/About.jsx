import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { teamMembers } from '../data/menuData'
import aboutInterior from '../assets/images/about-interior.png'
import heroBg from '../assets/images/hero-bg.png'
import gallery1 from '../assets/images/gallery-1.png'
import gallery3 from '../assets/images/gallery-3.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }

const values = [
  { title: 'Quality First', desc: 'We source premium, ethically traded ingredients ensuring every bite is exceptional.' },
  { title: 'Always Fresh', desc: 'Pastries baked at dawn, produce arrives daily, coffee roasted in small batches weekly.' },
  { title: 'Memorable Experience', desc: 'From the warm greeting to the last sip — every moment is designed to feel special.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-grove-green-dark grain-texture overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={heroBg} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-grove-green-dark/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-semibold tracking-[0.3em] uppercase text-grove-gold mb-3 block">Our Story</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-grove-white mb-4">About The Grove</motion.h1>
          <div className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-grove-white/60 mt-4 text-lg max-w-xl mx-auto">A labor of love, seven years in the making.</motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-grove-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-grove-gold mb-3 block">Since 2019</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-grove-green-dark mb-4 leading-tight">Born from a Love of <span className="text-grove-gold">Good Taste</span></h2>
            <div className="gold-divider !ml-0 !my-6" />
            <div className="space-y-4 text-grove-muted leading-relaxed">
              <p>The Grove Bistro began as a simple vision: a place where specialty coffee meets the warmth of a neighborhood gathering spot. Founded in 2019 by food lovers and coffee enthusiasts, we created something different — a premium café that doesn't compromise on soul.</p>
              <p>Inspired by classic European bistros and Melbourne café culture, every element — from custom-roasted beans to handcrafted interiors — reflects our dedication to quality and authenticity.</p>
              <p>What started as a single location has grown into a beloved destination for coffee connoisseurs and foodies who believe a meal should be an experience.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl"><img src={aboutInterior} alt="Interior" className="w-full h-64 object-cover" /></div>
              <div className="rounded-2xl overflow-hidden shadow-xl mt-8"><img src={gallery1} alt="Breakfast" className="w-full h-64 object-cover" /></div>
              <div className="rounded-2xl overflow-hidden shadow-xl col-span-2"><img src={gallery3} alt="Sandwiches" className="w-full h-48 object-cover" /></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-grove-gold/30 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-grove-cream relative grain-texture">
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading subtitle="What Drives Us" title="Our Core Values" description="Three pillars that guide everything we do." />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} variants={fadeUp} custom={i} className="bg-grove-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-grove-cream-dark/40 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-grove-green-dark/5 flex items-center justify-center mx-auto mb-6 text-grove-gold group-hover:bg-grove-gold group-hover:text-grove-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-grove-green-dark mb-3">{v.title}</h3>
                <p className="text-sm text-grove-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={aboutInterior} alt="Ambiance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-grove-green-dark/60 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center px-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-grove-white mb-4">Step Into <span className="text-grove-gold">Elegance</span></h2>
            <p className="text-grove-white/70 text-lg max-w-lg mx-auto">Vintage charm meets modern comfort — every corner is designed to inspire.</p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-grove-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading subtitle="The People Behind the Flavor" title="Meet Our Team" description="Passionate artisans who bring The Grove experience to life." />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div key={m.id} variants={fadeUp} custom={i} className="text-center group">
                <div className="w-28 h-28 rounded-full bg-grove-cream border-2 border-grove-gold/30 mx-auto mb-5 flex items-center justify-center group-hover:border-grove-gold transition-colors duration-300">
                  <span className="font-heading text-3xl font-bold text-grove-gold">{m.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-grove-green-dark mb-1">{m.name}</h3>
                <p className="text-sm text-grove-gold font-semibold uppercase tracking-wider mb-3">{m.role}</p>
                <p className="text-sm text-grove-muted leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-grove-green-dark text-center relative grain-texture">
        <div className="relative z-10 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl sm:text-4xl text-grove-white font-bold mb-4">Come Visit <span className="text-grove-gold">The Grove</span></h2>
            <p className="text-grove-white/50 mb-8 text-lg max-w-md mx-auto">We'd love to welcome you. Find us in the heart of the city.</p>
            <Button variant="primary" size="lg" href="/contact">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
