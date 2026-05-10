import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target, Landmark, FileText } from 'lucide-react';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  // Define form field classes for marketing feel
  const inputClass = "w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-medium";
  const labelClass = "text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5 block";

  return (
    <div className="relative w-full min-h-screen bg-black selection:bg-blue-600/30 selection:text-white">

      {/* Aggressive Marketing Gradient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
        <div className="absolute top-[-20%] w-[800px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-800/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <header className="py-6 flex flex-col md:flex-row items-center justify-between border-b border-zinc-800/50 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-white text-xl tracking-tight uppercase">Tommy Insara</h1>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Mortgage Professional</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-xs font-bold text-zinc-500 uppercase tracking-wider">
            <div className="flex flex-col"><span className="text-zinc-700">NMLS ID</span><span>Not Available</span></div>
            <div className="flex flex-col"><span className="text-zinc-700">Company</span><span>Not Available</span></div>
          </div>
        </header>

        {/* MAIN CONTENT AREA: Hero + Form Side-by-Side on Desktop */}
        <main className="py-16 lg:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

          {/* LEFT COLUMN: The Hook & Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-blue-600/10 border border-blue-600/30 text-blue-500 text-xs font-black tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                FHA Streamline Review
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-[5rem] font-display font-extrabold text-white leading-[1] tracking-tighter mb-8 uppercase">
                Lower Your <span className="text-blue-500">FHA</span> Monthly Payment.
              </h2>

              <p className="text-lg sm:text-xl text-zinc-400 font-medium mb-12 max-w-xl">
                Tommy Insara helps FHA homeowners review options through a fast, zero-pressure refinance analysis. See if you may qualify in minutes.
              </p>
            </motion.div>

            {/* Simplified Benefits for Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: Target, title: "Built strictly for FHA Loans", desc: "Designed explicitly for current FHA borrowers looking to optimize their terms." },
                { icon: FileText, title: "Streamlined Paperwork", desc: "Our process may require less documentation than standard refinances." },
                { icon: Zap, title: "Clear & Fast Options", desc: "Get a straightforward breakdown of your potential paths forward." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{benefit.title}</h3>
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-12 pt-12 border-t border-zinc-800/50">
              <h4 className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-6">Trusted Professional</h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-zinc-900/40 p-4 rounded border border-zinc-800/50">
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Experience</span>
                    <span className="font-bold text-white text-sm">Not Available</span>
                 </div>
                 <div className="bg-zinc-900/40 p-4 rounded border border-zinc-800/50">
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Licensed In</span>
                    <span className="font-bold text-white text-sm">Not Available</span>
                 </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Lead Form (Action) */}
          <motion.div
            id="form-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-900/10 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl"></div>

            <div className="mb-8">
              <h3 className="text-2xl font-display font-extrabold text-white mb-2 uppercase tracking-tight">Check Your Options</h3>
              <p className="text-sm text-zinc-400 font-medium border-b border-zinc-800/80 pb-6">Free, no-obligation review of your current FHA loan.</p>
            </div>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2 uppercase">Request Received</h4>
                  <p className="text-zinc-400 text-sm font-medium">Thank you. Tommy will review your scenario and contact you shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input required type="text" className={inputClass} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input required type="tel" className={inputClass} placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input required type="email" className={inputClass} placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Loan Type</label>
                      <select className={inputClass}>
                        <option>FHA Loan</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Est. Balance</label>
                      <input type="text" className={inputClass} placeholder="$250,000" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Main Goal</label>
                    <select className={inputClass}>
                      <option>Lower Monthly Payment</option>
                      <option>Lower Interest Rate</option>
                      <option>Review My FHA Options</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-display font-extrabold text-lg py-4 rounded-lg uppercase tracking-wider transition-all disabled:opacity-70 flex justify-center items-center gap-2 mt-4"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Processing
                      </>
                    ) : (
                      <>Get My Review <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>

                  <div className="flex items-start gap-2 mt-4 opacity-70">
                    <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-zinc-400 uppercase tracking-wide leading-relaxed">
                      Submitting does not guarantee approval or savings. Information used solely for reviewing your mortgage options. Subject to guidelines.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </main>

        {/* MINIMAL FAQ */}
        <section className="py-20 border-t border-zinc-800/50">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-extrabold text-white mb-10 text-center uppercase tracking-tight">Questions & Answers</h3>
            <div className="space-y-3">
              {[
                { q: "What is an FHA Streamline refinance?", a: "A tailored program for current FHA borrowers designed to simplify the refinance timeline and potentially lower payments." },
                { q: "Does this guarantee a lower payment?", a: "No. All loans are subject to review, underwriting approval, and current program guidelines." },
                { q: "Is this a commitment to refinance?", a: "No. This is a zero-pressure review to help you explore potential options based on your scenario." },
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-white text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${activeFaq === i ? 'rotate-180 text-blue-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-zinc-400 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-zinc-800/50 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 mb-8 text-xs font-bold uppercase tracking-wider text-zinc-500">
            <div className="space-y-2">
              <p className="text-white mb-4">Tommy Insara</p>
              <p>NMLS ID: Not Available</p>
              <p>Company: Not Available</p>
              <p>Phone: Not Available</p>
              <p>Email: Not Available</p>
            </div>
            <div className="space-y-2">
              <p className="text-white mb-4">Licensing & Disclosures</p>
              <p>Equal Housing Lender: Not Available</p>
              <p>Licensing: Not Available</p>
            </div>
          </div>
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-loose max-w-4xl">
            This website is for informational purposes only and is not a commitment to lend or extend credit. All loans are subject to underwriting approval, program guidelines, and borrower qualification. Rates, terms, and programs are subject to change without notice. &copy; {new Date().getFullYear()} Tommy Insara.
          </p>
        </footer>

      </div>
    </div>
  );
}
