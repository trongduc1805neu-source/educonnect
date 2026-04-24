import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';

const BANNERS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Khuyến mãi mùa tựu trường',
    description: 'Giảm 20% học phí cho tháng đầu tiên khi đăng ký qua EduConnect.',
    link: '/classes',
    color: 'bg-zinc-900',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Gia sư Tiếng Anh IELTS',
    description: 'Đội ngũ gia sư 8.0+ IELTS sẵn sàng đồng hành cùng bạn.',
    link: '/tutors',
    color: 'bg-zinc-900',
  }
];

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const currentBanner = BANNERS[currentBannerIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentBanner.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`relative w-full overflow-hidden ${currentBanner.color} text-white`}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src={currentBanner.imageUrl} 
            alt="Banner background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 py-3 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-bold text-sm sm:text-base uppercase tracking-wider bg-white/20 px-2 py-1 rounded">
              {currentBanner.title}
            </span>
            <span className="text-sm sm:text-base text-white/90">
              {currentBanner.description}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={currentBanner.link}
              className="text-sm font-semibold bg-white text-zinc-900 px-4 py-1.5 rounded-full hover:bg-zinc-100 transition-colors whitespace-nowrap"
            >
              Xem ngay
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Đóng quảng cáo"
            >
              <FontAwesomeIcon icon={['fas', 'xmark']} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
