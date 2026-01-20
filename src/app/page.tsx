import React from 'react';
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RegionConfig } from '@/types';

const FORM_URL = "https://docs.google.com/forms/d/1APjjjCIwgtKGcLpnVFC8ptH4Eb5tKzzkq1e_PHxSw28/viewform";

const Regions: RegionConfig[] = [
  { id: 'us', label: 'United States', flag: '🇺🇸', desc: 'Connect with our US network' },
  { id: 'uk', label: 'United Kingdom', flag: '🇬🇧', desc: 'Connect with our UK network' },
  { id: 'eu', label: 'Europe', flag: '🇪🇺', desc: 'Connect with our EU network' },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#010101] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
        <div className="space-y-4">
          {/* Clean Title without chromatic effects */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase relative inline-block">
            <span className="relative z-10">Seller🤝Affiliate</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl max-w-lg mx-auto leading-relaxed font-medium">
            Join our premium curated network. <br />
            <span className="text-white font-bold">
              TikTok Affiliate Partner (TAP) launch Q2!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Regions.map((region) => (
            <a 
              href={FORM_URL} 
              key={region.id} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <Card className="border-[#222] bg-[#121212]/80 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:-translate-y-3 group-hover:border-white/30 ring-1 ring-white/5">
                <CardContent className="p-10 flex flex-col items-center">
                  <div className="relative mb-6">
                     <span className="text-7xl relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {region.flag}
                    </span>
                  </div>
                  
                  <h2 className="font-bold text-2xl text-white tracking-tight">{region.label}</h2>
                  <p className="text-sm text-slate-500 mt-2 mb-8 group-hover:text-slate-300 transition-colors">
                    {region.desc}
                  </p>
                  
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <footer className="pt-12">
  <a 
    href={FORM_URL} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block px-6 py-2 rounded-md bg-white text-black font-black uppercase text-sm tracking-tighter hover:bg-gray-200 transition-colors"
  >
    Secure Your Spot
  </a>
</footer>
      </div>
    </main>
  );
}