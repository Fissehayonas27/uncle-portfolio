"use client";
import Image from "next/image";
import melakuImg from "../public/melaku.jpg";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  Dumbbell, 
  Apple, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Share2, 
  ArrowUpRight 
} from "lucide-react";

export default function MelakuPortfolio() {

  // Always scroll to top on page refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: "Master Culinary Chef",
      icon: <UtensilsCrossed className="w-6 h-6 text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/5",
      borderColor: "hover:border-amber-500/40",
      description: "Crafting exceptional culinary experiences that feed both body and soul. Specialized in wholesome, nutrient-rich dishes that elevate dining into a mindful art form."
    },
    {
      title: "Personal Trainer",
      icon: <Dumbbell className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "hover:border-emerald-500/40",
      description: "Assessing physical strengths and weaknesses to build customized workout plans. Providing physical and mental guidance while ensuring safe, progress-driven movement."
    },
    {
      title: "Holistic Nutritionist",
      icon: <Apple className="w-6 h-6 text-lime-400" />,
      color: "from-lime-500/20 to-emerald-500/5",
      borderColor: "hover:border-lime-500/40",
      description: "Expert guidance in using food and targeted nutrition to promote peak vitality, support longevity, and assist you in reaching specific health and performance goals."
    },
    {
      title: "Mindset & Life Coach",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-indigo-500/5",
      borderColor: "hover:border-purple-500/40",
      description: "Providing grounded, moral, and structured guidance to help individuals clarify their life values, build mental discipline, and overcome personal challenges with wisdom and faith."
    }
  ];

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 overflow-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-emerald-500/10 to-purple-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/60 bg-[#090b10]/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20">
              ME
            </div>
            <span className="font-extrabold text-lg tracking-tight">MIKE ENDALE</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Pillars</a>
            <a href="#philosophy" className="hover:text-amber-400 transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]"
          >
            Connect Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Based in Sweden
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-[1.1]">
              Nourishing Body, Mind & Soul.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl font-light">
              Hi, I’m <span className="text-slate-200 font-semibold">Mike Endale</span>. I synthesize culinary arts, physical fitness, biological nutrition, and spiritual coaching to help individuals achieve holistic harmony and peak personal fulfillment.
            </p>

            <div className="flex flex-wrap gap-4 w-full">
              <a 
                href="#services" 
                className="px-7 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.25)]"
              >
                Explore Services <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Profile Photo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm rounded-3xl p-3 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl">
              <div className="w-full h-[420px] rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden group">
                
                {/* Real Profile Image */}
                <img 
                  src="/melaku.jpg" 
                  alt="Melaku Endale" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                />

                {/* Glassmorphic Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md flex justify-around text-xs font-medium text-slate-200 shadow-lg">
                  <span className="flex items-center gap-1.5"><UtensilsCrossed className="w-3.5 h-3.5 text-amber-400"/> Chef</span>
                  <span className="flex items-center gap-1.5"><Dumbbell className="w-3.5 h-3.5 text-emerald-400"/> Trainer</span>
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-purple-400"/> Coach</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section id="philosophy" className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 block">Core Philosophy</span>
            <blockquote className="text-xl md:text-2xl font-serif italic text-slate-200 leading-relaxed mb-6">
              "The strongest factor for success is self-esteem—believing you can do it, believing you deserve it, and believing you will get it."
            </blockquote>
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">— Melaku Endale</p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight mb-3">Four Pillars of Transformation</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
  A unified approach to wellness combining gourmet nutrition, physical conditioning, and mindset coaching.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-gradient-to-b ${item.color} bg-slate-900/60 border border-slate-800/80 ${item.borderColor} transition-all relative overflow-hidden flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-300 gap-1">
                <span>Learn More</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Social Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="p-10 md:p-14 rounded-3xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's Connect</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Whether you are looking for personalized meal planning, one-on-one personal training, spiritual guidance, or culinary collaboration in Växjö, feel free to reach out.
              </p>

              <div className="space-y-4 text-sm font-medium">
                <a href="tel:0046700392952" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400"><Phone className="w-4 h-4" /></div>
                  +46 700 392 952
                </a>
                <a href="mailto:melka29@hotmail.com" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400"><Mail className="w-4 h-4" /></div>
                  melka29@hotmail.com
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400"><MapPin className="w-4 h-4" /></div>
                   Sweden
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-amber-400" /> Social Channels
              </h3>
              <p className="text-xs text-slate-500 mb-6">Connect across social media for daily motivation, nutrition tips, and culinary inspiration.</p>

              <div className="grid grid-cols-2 gap-3">
  <a 
    href="https://t.me/August_Boy_888" 
    target="_blank" 
    rel="noreferrer"
    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-all"
  >
    <Send className="w-4 h-4 text-cyan-400 shrink-0" />
    <span>Telegram</span>
  </a>

  <a 
    href="https://www.facebook.com/share/1GDvq5nJhB/" 
    target="_blank" 
    rel="noreferrer"
    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-all"
  >
    <div className="w-4 h-4 rounded bg-blue-500 text-slate-950 font-black text-[10px] flex items-center justify-center shrink-0">
      f
    </div>
    <span>Facebook</span>
  </a>

<a
  href="https://instagram.com/miko_miko_1"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
>
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
  <span>Instagram</span>
</a>



</div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
  <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
    <p>© {new Date().getFullYear()} Mike Endale. All rights reserved.</p>
    
    {/* Creator Credit */}
    <p className="flex items-center gap-1.5 text-slate-400 font-medium">
      Designed & Built by{" "}
      <a 
        href="https://github.com/Fissehayonas27" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-amber-400 hover:underline font-semibold"
      >
        Fisseha
      </a>
    </p>
  </div>
</footer>
    
    </div>
  );
}