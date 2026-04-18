import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-grove-green-dark grain-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-grove-green-dark via-grove-green to-grove-green-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs font-semibold tracking-[0.3em] uppercase text-grove-gold mb-3 block">
            Reach Out
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-grove-white mb-4">
            Contact Us
          </motion.h1>
          <div className="gold-divider" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-grove-white/60 mt-4 text-lg max-w-xl mx-auto">
            We'd love to hear from you. Drop us a message or visit us in person.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-grove-cream relative grain-texture">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-grove-green-dark mb-2">
                Send a Message
              </h2>
              <div className="gold-divider !ml-0 !my-4" />
              <p className="text-grove-muted mb-8">
                Have a question, suggestion, or just want to say hello? Fill out the form and we'll get back to you soon.
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-grove-green-light/10 border border-grove-green-light/30 text-grove-green-dark text-sm"
                >
                  ✓ Thank you! Your message has been received. We'll be in touch shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-grove-green-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-grove-white border border-grove-cream-dark
                      focus:border-grove-gold focus:ring-2 focus:ring-grove-gold/20 outline-none
                      transition-all duration-300 text-grove-charcoal placeholder:text-grove-muted/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-grove-green-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-grove-white border border-grove-cream-dark
                      focus:border-grove-gold focus:ring-2 focus:ring-grove-gold/20 outline-none
                      transition-all duration-300 text-grove-charcoal placeholder:text-grove-muted/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-grove-green-dark mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-5 py-3.5 rounded-xl bg-grove-white border border-grove-cream-dark
                      focus:border-grove-gold focus:ring-2 focus:ring-grove-gold/20 outline-none
                      transition-all duration-300 text-grove-charcoal placeholder:text-grove-muted/50 resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>,
                    label: 'Visit Us',
                    value: '42 Oakwood Avenue, Downtown District, Metro City',
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                    label: 'Call Us',
                    value: '+1 (555) 234-5678',
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
                    label: 'Email Us',
                    value: 'hello@thegrovebistro.com',
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    label: 'Hours',
                    value: 'Mon–Fri: 7am–11pm | Sat: 8am–12am | Sun: 9am–10pm',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 bg-grove-white rounded-xl border border-grove-cream-dark/40
                      hover:border-grove-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-grove-gold/10 flex items-center justify-center text-grove-gold shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-grove-gold uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm text-grove-charcoal">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Twitter', 'WhatsApp'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-11 h-11 rounded-full border border-grove-cream-dark hover:border-grove-gold
                      bg-grove-white flex items-center justify-center hover:bg-grove-gold/10
                      transition-all duration-300 group"
                    aria-label={s}
                  >
                    <span className="text-xs font-bold text-grove-muted group-hover:text-grove-gold transition-colors duration-300">
                      {s[0]}
                    </span>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-grove-cream-dark/40 h-64 sm:h-80">
                <iframe
                  title="The Grove Bistro Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.987!3d40.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI1LjIiTiA3M8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
