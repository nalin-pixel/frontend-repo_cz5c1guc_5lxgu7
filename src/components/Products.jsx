import { motion } from 'framer-motion'
import { Leaf, Package, IndianRupee, Flame } from 'lucide-react'

const items = [
  {
    name: 'Groundnuts (Peanuts)',
    desc: 'Bold & Java varieties • HPS & In-shell • Roasted & Blanched',
    tag: 'Flagship',
  },
  {
    name: 'Whole & Ground Spices',
    desc: 'Cumin, Coriander, Turmeric, Chilli, Mustard, Fennel & more',
    tag: 'Spices',
  },
  {
    name: 'Pulses & Lentils',
    desc: 'Chickpeas, Pigeon Pea (Toor), Moong, Masoor, Urad',
    tag: 'Pulses',
  },
  {
    name: 'Cold‑Pressed Oils',
    desc: 'Groundnut, Sesame, Mustard — small‑batch, chemical‑free',
    tag: 'Oils',
  },
]

export default function Products(){
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Products</motion.h2>
        <p className="text-white/70 mt-2 max-w-2xl">All products are sourced directly from farms, processed at certified units, and inspected by our in‑house QA team.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05*idx }} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-cyan-400/10 to-white/0" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/10">
                  <Package className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wide text-white/60">{it.tag}</div>
              </div>
              <div className="mt-4 text-xl font-semibold">{it.name}</div>
              <div className="mt-2 text-white/70 text-sm">{it.desc}</div>
              <div className="mt-6 flex items-center justify-between text-sm text-white/70">
                <div className="inline-flex items-center gap-2"><Leaf className="w-4 h-4"/> Non‑GMO</div>
                <div className="inline-flex items-center gap-2"><IndianRupee className="w-4 h-4"/> Competitive</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
