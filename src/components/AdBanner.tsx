import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AdBannerProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

export function AdBanner({ imageUrl, linkUrl, altText }: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-sm group mb-8">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto object-cover max-h-[200px] transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-bold bg-zinc-900/80 px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
            Tìm hiểu thêm
          </span>
        </div>
      </a>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Đóng quảng cáo"
      >
        <FontAwesomeIcon icon={["fas", "xmark"]} />
      </button>
      <div className="absolute top-2 left-2 bg-[#FDFBF7]/80 backdrop-blur-sm text-zinc-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
        Quảng cáo
      </div>
    </div>
  );
}
