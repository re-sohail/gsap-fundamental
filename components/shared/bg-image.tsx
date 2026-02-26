import { cn } from "@/lib/utils";
import Image from "next/image";

interface BgImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const BgImage: React.FC<BgImageProps> = ({ src, alt, className }) => {
  const imageSrc = src || "/img/dotted-bg.webp";
  const imageAlt = alt || "dotted-bg";
  return (
    <div className="absolute inset-0">
      <Image src={imageSrc} alt={imageAlt} className={cn("", className)} fill />
    </div>
  );
};

export default BgImage;
