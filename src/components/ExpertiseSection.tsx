"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/config/medical-content.json";

export default function ExpertiseSection() {
    const { doctor } = data;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
                    {/* Doctor Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative aspect-[3/4] max-w-md"
                    >
                        <div className="absolute inset-0 border border-secondary/30 translated-x-6 translate-y-6 -z-10" />
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-2 block">
                            Medical Director
                        </span>
                        <h2 className="text-4xl font-serif mb-6 text-primary">
                            {doctor.koreanName} <span className="text-lg text-muted-foreground block mt-1">{doctor.name}</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p className="whitespace-pre-line">{doctor.philosophy}</p>

                            <div className="border-t pt-6 mt-8">
                                <h3 className="text-primary font-semibold mb-4 text-lg">Education & History</h3>
                                <ul className="space-y-2">
                                    {doctor.history.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm">
                                            <span className="text-secondary mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Image
                                src="/images/signature.svg"
                                alt="Signature"
                                width={150}
                                height={60}
                                className="opacity-80 mix-blend-multiply"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
