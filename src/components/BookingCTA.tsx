"use client";

import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import data from "@/config/medical-content.json";

export default function BookingCTA() {
    const { contact } = data.clinic;
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, [scrollY]);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 px-6 md:px-12 shadow-2xl"
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="hidden md:block">
                    <p className="text-sm font-serif text-primary">
                        <span className="font-bold mr-2">진료시간</span>
                        {contact.hours}
                    </p>
                </div>

                <div className="flex w-full md:w-auto gap-3">
                    <a
                        href={`tel:${contact.phone}`}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium">전화상담</span>
                    </a>

                    <a
                        href={contact.naverBooking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#03C75A] text-white px-6 py-3 rounded-full hover:bg-[#02b351] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">네이버 예약</span>
                    </a>

                    <a
                        href={`https://kakao.com/${contact.kakao}`} // Example link
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#FAE100] text-[#371D1E] px-6 py-3 rounded-full hover:bg-[#ebd300] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">카카오톡</span>
                    </a>
                </div>

            </div>
        </motion.div>
    );
}
