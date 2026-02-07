"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import data from "@/config/medical-content.json";

export default function MedicalServiceGrid() {
    const { services } = data;

    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif mb-6 text-primary tracking-tight"
                    >
                        Specialized Care
                    </motion.h2>
                    <p className="text-slate-500 font-light text-lg">
                        정교한 분석과 섬세한 기술로 완성하는 아름다움
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white border border-transparent hover:border-secondary/20 p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <h3 className="text-xl font-serif mb-2 text-primary group-hover:text-secondary transition-colors">
                                {service.koreanTitle}
                            </h3>
                            <p className="text-xs text-muted-foreground tracking-wider uppercase mb-4">
                                {service.title}
                            </p>

                            <p className="text-sm text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
                                {service.description}
                            </p>

                            <div className="space-y-2 text-xs text-muted-foreground border-t pt-4">
                                <div className="flex justify-between">
                                    <span>수술시간</span>
                                    <span className="font-medium text-primary">{service.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>회복기간</span>
                                    <span className="font-medium text-primary">{service.recovery}</span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                Detail View <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
