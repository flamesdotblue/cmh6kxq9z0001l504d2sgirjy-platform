import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[72vh] min-h-[520px] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-950/10 via-neutral-950/30 to-neutral-950" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                <Star className="h-3.5 w-3.5 text-yellow-300" />
                3D fintech visuals meet product price intelligence
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Compare prices across stores in seconds
              </h1>
              <p className="mt-4 text-white/80 leading-relaxed">
                Search any product, instantly analyze listings from top e‑commerce sites, and lock the best deal with transparent price history.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#compare" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 hover:brightness-110 transition">
                  Start comparing
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
