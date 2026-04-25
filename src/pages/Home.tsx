import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { HANOI_WARDS, SUBJECTS } from '../constants';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

// Dữ liệu mẫu được viết lại với những câu quote truyền cảm hứng
const FEATURED_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Hải Anh',
    subject: 'Toán Học - Khối 9',
    rating: 4.9,
    price: '200.000đ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    education: 'Đại học Sư phạm Hà Nội',
    quote: '"Học toán là cách rèn luyện tư duy logic, không phải học thuộc lòng công thức."',
  },
  {
    id: 2,
    name: 'Trần Phương Ly',
    subject: 'Ngữ Văn - Khối 12',
    rating: 5.0,
    price: '250.000đ',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    education: 'Đại học KHXH&NV',
    quote: '"Văn chương giúp các em hiểu rõ chính mình và trân trọng thế giới xung quanh."',
  },
  {
    id: 3,
    name: 'Lê Hoàng Minh',
    subject: 'Vật Lý - Khối 10',
    rating: 4.8,
    price: '220.000đ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    education: 'Đại học Bách khoa Hà Nội',
    quote: '"Vật lý không nằm trên giấy, nó hiện hữu trong từng chuyển động của cuộc sống."',
  },
  {
    id: 4,
    name: 'Phạm Tuấn Anh',
    subject: 'Tiếng Anh - IELTS',
    rating: 4.9,
    price: '300.000đ',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=600&auto=format&fit=crop',
    education: 'Đại học Ngoại Thương',
    quote: '"Ngôn ngữ mở ra thế giới, điểm số chỉ là trạm dừng chân."',
  }
];

export function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let animationFrameId: number;

    const updateCards = () => {
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll('.tutor-card-3d');
        const centerX = window.innerWidth / 2;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(centerX - cardCenterX);
          
          // Max distance considered for scaling
          const maxDist = window.innerWidth / 2;
          
          // Calculate scale (1 at center, ~0.75 at edges)
          let scale = 1 - (distance / maxDist) * 0.3;
          if (scale < 0.7) scale = 0.7;
          
          // Calculate rotation based on side
          const signedDistance = cardCenterX - centerX;
          // Rotate towards the center
          const rotateYClamped = Math.max(-30, Math.min(30, (signedDistance / maxDist) * 30));
          
          const zIndex = Math.round(100 - distance);
          const isHovered = card.getAttribute('data-hovered') === 'true';

          if (isHovered) {
            (card as HTMLElement).style.transform = `perspective(1200px) rotateY(0deg) scale(1.1) translateZ(50px)`;
            (card as HTMLElement).style.zIndex = '200';
            (card as HTMLElement).style.opacity = '1';
          } else {
            // Apply scale, rotation and slight opacity drop for side elements
            (card as HTMLElement).style.transform = `perspective(1200px) rotateY(${rotateYClamped}deg) scale(${scale})`;
            (card as HTMLElement).style.zIndex = zIndex.toString();
            (card as HTMLElement).style.opacity = Math.max(0.4, 1 - (distance / maxDist) * 0.6).toString();
          }
        });
      }
      animationFrameId = requestAnimationFrame(updateCards);
    };

    updateCards();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <div className="flex flex-col gap-32 pb-24">
      
      {/* 1. HERO SECTION - Phong cách trang bìa tạp chí */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="lg:col-span-6 space-y-8 z-10 pr-4 lg:pr-12"
          >
            {/* Tagline nhỏ, tinh tế */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
              <span className="w-8 h-[1px] bg-accent-500"></span>
              Nền tảng giáo dục tinh hoa
            </div>
            
            {/* Headline dùng font Serif, kết hợp chữ nghiêng nghệ thuật */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-heading text-ink leading-[1.05] tracking-tight">
              Gặp gỡ <br />
              <span className="italic text-primary-700 font-normal">người dẫn đường</span> <br />
              tiếp theo của bạn.
            </h1>
            
            <p className="text-lg text-ink/70 max-w-lg leading-relaxed">
              Chúng tôi kết nối những tâm hồn hiếu tri với đội ngũ gia sư xuất sắc, kiến tạo một hành trình học tập cá nhân hóa, minh bạch và đầy cảm hứng.
            </p>

            {/* Thanh tìm kiếm Minimalist - Thoát khỏi giao diện Form nhàm chán */}
            <div className="mt-10 bg-[#FDFBF7] p-2 rounded-xl border border-primary-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col sm:flex-row gap-2 max-w-2xl relative z-20">
              <div className="flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-primary-50 text-center">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Môn học</label>
                <select className="w-full bg-transparent text-ink outline-none cursor-pointer text-sm font-semibold appearance-none text-center">
                  <option value="">Chọn môn học</option>
                  {SUBJECTS.map(subject => <option key={subject} value={subject}>{subject}</option>)}
                </select>
              </div>
              <div className="flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-primary-50 text-center">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Vị trí</label>
                <select className="w-full bg-transparent text-ink outline-none cursor-pointer text-sm font-semibold appearance-none text-center">
                  <option value="">Khu vực học</option>
                  <optgroup label="Hà Nội">
                    {HANOI_WARDS.map((ward) => <option key={ward} value={ward}>{ward}</option>)}
                  </optgroup>
                </select>
              </div>
              <Button size="lg" className="w-full sm:w-auto shrink-0 self-center mx-auto text-center bg-primary-700 text-white rounded-lg px-10">
                TÌM KIẾM
              </Button>
            </div>
          </motion.div>

          {/* Hero Image - Cắt cúp nghệ thuật (Editorial Crop) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-primary-50">
              <img 
                src="https://i.ibb.co/GfVkb056/GV-Yeu-TV-3407-1632217612.jpg" 
                alt="GV-Yeu-TV-3407-1632217612" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
              />
              {/* Lớp phủ mờ nhẹ để tạo chiều sâu */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Box trích dẫn bay (Floating Quote) */}
            <div className="absolute -bottom-8 -left-8 bg-[#FDFBF7] p-6 rounded-xl border border-primary-100 shadow-xl max-w-[240px]">
              <div className="flex gap-1 mb-3 text-accent-500 text-xs">★★★★★</div>
              <p className="text-[13px] font-medium text-ink/80 italic leading-relaxed">
                "Hành trình học tập của con tôi đã thay đổi hoàn toàn nhờ sự thấu hiểu từ gia sư EduConnect."
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-ink/40">— Phụ huynh tại Cầu Giấy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED TUTORS - "Những Gương Mặt Tiêu Biểu" */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-primary-100 pb-8">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-heading text-ink mb-4">Những Gương Mặt Tiêu Biểu</h2>
            <p className="text-ink/60 text-lg">Tuyển tập những nhà giáo dục và sinh viên xuất sắc, được minh chứng qua hàng trăm giờ học thực tế.</p>
          </div>
          <Link to="/tutors" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-700 editorial-link">
            Xem toàn bộ hồ sơ 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="w-full relative overflow-hidden py-10 my-4" style={{ perspective: '1200px' }} ref={carouselRef}>
          {/* Blend edges for depth */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[0, 1, 2].map((setIndex) => (
              <div key={setIndex} className="flex gap-8 pr-8">
                {FEATURED_TUTORS.map((tutor, idx) => (
                  <div 
                    key={`${tutor.id}-${idx}`}
                    className="tutor-card-3d w-[280px] sm:w-[320px] shrink-0 group cursor-pointer relative"
                    style={{ 
                      transformStyle: 'preserve-3d', 
                      transform: 'rotateY(-10deg) scale(0.95)',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.setAttribute('data-hovered', 'true');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.setAttribute('data-hovered', 'false');
                    }}
                  >
                    {/* Hình ảnh đen trắng xám, khi hover sẽ hiện màu thật (Kỹ thuật tạp chí thời trang) */}
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-5 relative bg-primary-50 shadow-2xl shadow-primary-900/10">
                      <img 
                        src={tutor.image} 
                        alt={tutor.name} 
                        className="w-full h-full object-cover filter grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 ease-out" 
                      />
                      <div className="absolute top-4 right-4 bg-[#FDFBF7]/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-ink flex items-center gap-1 shadow-sm">
                        {tutor.rating} <span className="text-accent-500">★</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 bg-[#FDFBF7] p-6 rounded-2xl border border-primary-100 paper-shadow group-hover:border-primary-300 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <Link to={`/profile/${tutor.id}`}>
                          <h3 className="font-heading text-xl text-ink group-hover:text-primary-700 transition-colors truncate">{tutor.name}</h3>
                        </Link>
                      </div>
                      
                      <div className="flex items-center justify-between border-b border-primary-100 pb-3">
                        <p className="text-[11px] font-bold text-accent-500 uppercase tracking-widest">{tutor.subject}</p>
                        <span className="text-xs font-semibold text-ink/60 shrink-0">{tutor.price}/h</span>
                      </div>
                      
                      <p className="text-ink/70 text-sm italic leading-relaxed pt-1 line-clamp-3">
                        {tutor.quote}
                      </p>
                      
                      <div className="pt-2 text-[10px] font-bold text-primary-700 uppercase tracking-widest truncate">
                        {tutor.education}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. NARRATIVE FEATURES - Triết lý giáo dục thay vì "Tính năng phần mềm" */}
      <section className="w-full my-12">
        <div className="bg-primary-900 rounded-3xl p-10 lg:p-20 text-paper relative overflow-hidden">
          {/* Vòng sáng nền mờ tạo chiều sâu */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-700 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading mb-8 leading-[1.15]">
                Triết lý giáo dục <br/> <span className="italic text-primary-200 font-normal">chạm đến từng chi tiết.</span>
              </h2>
              <p className="text-paper/80 text-lg mb-12 leading-relaxed">
                Chúng tôi không đơn thuần là một trạm ghép nối. EduConnect xây dựng một hệ sinh thái nuôi dưỡng tri thức, nơi sự minh bạch, công nghệ thấu cảm và sự tận tâm cùng hòa quyện.
              </p>
              
              <div className="space-y-10 border-t border-paper/10 pt-10">
                <div className="flex gap-5">
                  <div className="mt-1 bg-paper/5 p-3 rounded-xl h-fit text-accent-500 border border-paper/10">
                    <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold mb-3">Bảo chứng niềm tin</h4>
                    <p className="text-paper/60 leading-relaxed">Xóa bỏ hoàn toàn rủi ro với cơ chế ký quỹ học phí an toàn. Hồ sơ người dạy được thẩm định khắt khe qua cả danh tính và thực lực học thuật.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="mt-1 bg-paper/5 p-3 rounded-xl h-fit text-accent-500 border border-paper/10">
                    <Sparkles className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold mb-3">Thấu hiểu qua dữ liệu</h4>
                    <p className="text-paper/60 leading-relaxed">Công nghệ phân tích không phán xét, chỉ tinh tế nhận ra những khoảng trống kiến thức học sinh còn do dự, từ đó gợi ý lộ trình phù hợp nhất.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="mt-1 bg-paper/5 p-3 rounded-xl h-fit text-accent-500 border border-paper/10">
                    <BookOpen className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold mb-3">Nhịp cầu kết nối</h4>
                    <p className="text-paper/60 leading-relaxed">Báo cáo sau mỗi buổi học không là những con số khô khan. Đó là câu chuyện về sự tiến bộ, được gửi trọn vẹn đến gia đình mỗi ngày.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Hình ảnh triết lý - Sắc thái tối, trầm mặc */}
              <div className="aspect-[4/5] bg-primary-800 rounded-2xl border border-paper/10 overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                  alt="Không gian học tập"
                  className="w-full h-full object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
