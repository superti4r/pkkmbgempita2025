"use client";

import Image from "next/image";

export default function Avatar({ src, alt }: { src: string; alt: string }) {
    return (
        <div
            className="w-40 sm:w-48 md:w-56 lg:w-64 mx-auto select-none"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
        >
            <Image
                src={src}
                alt={alt}
                width={512}
                height={512}
                priority
                className="h-auto w-full pointer-events-none select-none"
                draggable={false}
            />
        </div>
    );
}
