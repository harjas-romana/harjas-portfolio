import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ResumeLedger() {
    const [displayText, setDisplayText] = useState("0x4852_MANIFEST");
    const finalTitle = "HARJAS_ROMANA_CV";

    const decodeEffect = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                finalTitle.split("")
                    .map((char, index) => {
                        if (index < iteration) return finalTitle[index];
                        // Randomized Hex-Decryption string
                        return "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
                    })
                    .join("")
            );

            if (iteration >= finalTitle.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 40);
    };

    return (
        <div className="w-full flex justify-center py-20 border-t border-border-subtle bg-bg-base">
            <motion.a
                href="/Harjas-Singh-Resume.pdf" // This matches the file in your /public folder
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={decodeEffect}
                className="group relative flex flex-col items-center cursor-none"
            >
                {/* Technical Metadata Tag */}
                <div className="flex items-center gap-3 mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-[9px] tracking-[0.4em] text-accent font-bold uppercase">
                        Protocol: Secure_Transfer
                    </span>
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span className="font-mono text-[9px] tracking-[0.4em] text-text-muted font-bold uppercase">
                        Status: Encrypted
                    </span>
                </div>

                {/* The Decoding Header */}
                <h2 className="text-2xl md:text-2xl lg:text-4xl font-sans font-bold tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-700 uppercase text-center">
                    {displayText}
                </h2>

                {/* Architectural Footer Line */}
                <div className="mt-10 flex items-center gap-6">
                    <div className="h-[1px] w-8 bg-border-strong group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-text-muted group-hover:text-text-primary uppercase">
                        [ Extract_System_Manifest ]
                    </span>
                    <div className="h-[1px] w-8 bg-border-strong group-hover:w-20 group-hover:bg-accent transition-all duration-700" />
                </div>
            </motion.a>
        </div>
    );
}