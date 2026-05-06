import React, { useState, useEffect } from 'react';
import { FaSun, FaEnvelope, FaInfoCircle, FaHome, FaArrowRight, FaGithub, FaLinkedin, FaCode, FaPalette, FaCloud } from 'react-icons/fa';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaInfoCircle },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-500/30">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer" onClick={() => setActiveTab('home')}>
            <img src="/logo.png" alt="Verano Innovations" className="h-12 transition-transform group-hover:scale-105" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  activeTab === item.id ? 'text-yellow-400' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setActiveTab('contact')}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-yellow-400 transition-all active:scale-95"
          >
            Start a Project
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* HOME SECTION */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                ACCEPTING NEW CLIENTS
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
                Turning complex ideas into <span className="text-yellow-400 italic">elegant</span> software.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                Verano Innovations is a boutique software studio specializing in high-performance digital products. We partner with forward-thinking brands to build the future of the web.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl flex items-center gap-2 hover:bg-yellow-300 transition-all hover:translate-x-1"
                >
                  Work with us <ht size={20} />
                </button>
                <button 
                  onClick={() => setActiveTab('about')}
                  className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Feature Grid (Vague offerings) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
              {[
                { title: 'Custom Development', desc: 'Bespoke applications tailored specifically to your business logic and user needs.', icon: FaCode },
                { title: 'Product Design', desc: 'User-centric interfaces that blend aesthetic beauty with seamless functionality.', icon: FaPalette },
                { title: 'Cloud Infrastructure', desc: 'Scalable, secure, and reliable hosting solutions for modern web architectures.', icon: FaCloud }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-yellow-500/50 transition-all group">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg mb-6 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Building with Purpose</h2>
            <div className="prose prose-invert prose-lg text-slate-400">
              <p className="mb-6 italic text-yellow-400 text-2xl font-serif">
                "The best software doesn't just work—it feels right."
              </p>
              <p className="mb-6">
                Founded on the principles of clarity, efficiency, and innovation, Verano Innovations is a collective of engineers and designers dedicated to modern craft. We don't believe in one-size-fits-all solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-yellow-500">Our Approach</h4>
                  <p>We work in small, focused sprints. By maintaining a lean structure, we ensure that every line of code written and every pixel placed serves a distinct purpose for your end users.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-yellow-500">Our Vision</h4>
                  <p>In a world of bloated software, we strive for minimalism. We aim to build tools that empower businesses to focus on what they do best, leaving the technical complexities to us.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black">
               <h3 className="text-3xl font-black mb-4">Let's build something remarkable.</h3>
               <p className="font-medium text-black/80 mb-8 max-w-xl">We are currently taking on a limited number of new projects for the upcoming quarter.</p>
               <button 
                 onClick={() => setActiveTab('contact')}
                 className="px-8 py-3 bg-black text-white rounded-full font-bold hover:opacity-80 transition-opacity"
               >
                 Inquire Now
               </button>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeTab === 'contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-slate-400">Have a vision? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl py-8 px-1 shadow-2xl relative overflow-hidden">
              <div className="w-full flex justify-center overflow-hidden h-[720px]">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScnQUTQT04K6xb-8F1RyaZ_fYN_cy7tOoR8qKLpzHs1EOGo3w/viewform?embedded=true" 
                  width="100%" 
                  height="711" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="rounded-lg"
                  scrolling="no"
                >Loading…</iframe>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center gap-8 text-slate-500">
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaGithub size={20} /> GitHub</a>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FaLinkedin size={20} /> LinkedIn</a>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 mt-24 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
             <FaSun className="text-yellow-400 w-5 h-5" />
             <span className="font-bold text-sm tracking-widest uppercase italic">Verano Innovations</span>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Verano Innovations, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
             <button onClick={() => setActiveTab('home')} className="text-xs text-slate-500 hover:text-white">Privacy</button>
             <button onClick={() => setActiveTab('home')} className="text-xs text-slate-500 hover:text-white">Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
