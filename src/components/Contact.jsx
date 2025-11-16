import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Fake submit for demo
    await new Promise(r=>setTimeout(r, 800))
    setStatus('Thank you! We will get back shortly.')
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Request a Quote</motion.h2>
          <p className="text-white/70 mt-2">Share your product requirements and destination port — our team will reply within 24 hours.</p>
          <div className="mt-6 space-y-3 text-white/80">
            <div>WhatsApp: +91‑90000‑00000</div>
            <div>Email: hello@indigoexports.in</div>
            <div>Location: Rajkot, Gujarat • Mumbai, Maharashtra</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
          </div>
          <input placeholder="Company" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Product (e.g., Groundnuts)" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
            <input placeholder="Destination Port" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
          </div>
          <textarea rows="4" placeholder="Quantity, specs, packaging, shipment timeline..." className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 ring-white/40"/>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:shadow-lg">Send Request</button>
            <div className="text-white/80">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}
