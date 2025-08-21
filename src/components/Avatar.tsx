import Image from "next/image";

export default function Avatar({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="w-40 sm:w-48 md:w-56 lg:w-64 mx-auto">
            <Image src={src} alt={alt} width={512} height={512} priority className="h-auto w-full" />
        </div>
    );
}
