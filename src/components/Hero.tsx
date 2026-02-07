"use strict";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/config/medical-content.json";

export default function Hero() {
    const { clinic } = data;

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg" // High-quality Unsplash image
                    alt="Clinic Ambience"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-secondary text-sm md:text-base font-serif tracking-widest uppercase mb-4">
                        {clinic.name}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight font-serif tracking-tighter">
                        {clinic.slogan}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
                        {clinic.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12"
                >
                    <div className="h-16 w-[1px] bg-white/50 mx-auto animate-pulse" />
                    <span className="text-white/70 text-xs tracking-widest mt-2 block uppercase">Scroll</span>
                </motion.div>
            </div>
        </section>
    );
}
