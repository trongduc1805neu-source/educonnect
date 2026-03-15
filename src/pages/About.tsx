import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM = [
  { id: 1, name: 'Nguyễn Trọng Đức', role: 'Founder & CEO', image: '', link: '#' },
  { id: 2, name: 'Lê Nguyễn Thu Uyên', role: 'Co-founder & COO', image: '', link: '#' },
  { id: 3, name: 'Nguyễn Ngọc Huyền', role: 'CMO', image: '', link: '#' },
  { id: 4, name: 'Phan Thúy An', role: 'CTO', image: '', link: '#' },
  { id: 5, name: 'Nguyễn Ngân Hà', role: 'CFO', image: '', link: '#' },
];

export function About() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TEAM.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length);

  const getCardStyles = (index: number) => {
    let diff = index - currentIndex;
    if (diff < -2) diff += TEAM.length;
    if (diff > 2) diff -= TEAM.length;

    const isCenter = diff === 0;
    const x = diff * 140; // horizontal spacing
    const scale = isCenter ? 1 : 1 - Math.abs(diff) * 0.15;
    const zIndex = 10 - Math.abs(diff);
    const opacity = isCenter ? 1 : 1 - Math.abs(diff) * 0.4;
    const rotateY = diff * -15;

    return { x, scale, zIndex, opacity, rotateY };
  };

  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-16 px-4 overflow-hidden">
      <div className="text-center space-y-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading">Về EduConnect</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Nền tảng kết nối gia sư và học viên hàng đầu Việt Nam, mang đến giải pháp học tập an toàn, minh bạch và hiệu quả.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div whileHover={{ y: -5 }} className="rounded-3xl bg-white p-8 shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
            <Target className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900 font-heading">Mục tiêu</h3>
          <p className="text-slate-600 leading-relaxed">
            Tạo ra một hệ sinh thái giáo dục toàn diện, nơi mọi học sinh đều có thể dễ dàng tiếp cận với những gia sư chất lượng cao, phù hợp nhất với nhu cầu và năng lực cá nhân.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="rounded-3xl bg-white p-8 shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
            <Eye className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900 font-heading">Tầm nhìn</h3>
          <p className="text-slate-600 leading-relaxed">
            Trở thành nền tảng công nghệ giáo dục (EdTech) số 1 Đông Nam Á, tiên phong trong việc ứng dụng AI để cá nhân hóa lộ trình học tập và tối ưu hóa trải nghiệm giáo dục.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="rounded-3xl bg-white p-8 shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900 font-heading">Sứ mệnh</h3>
          <p className="text-slate-600 leading-relaxed">
            Xóa bỏ mọi rào cản và rủi ro trong việc tìm kiếm gia sư truyền thống. Xây dựng môi trường minh bạch, bảo vệ quyền lợi tài chính và đảm bảo chất lượng giảng dạy tuyệt đối.
          </p>
        </motion.div>
      </div>

      <div className="rounded-[3rem] bg-slate-900 p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">Đội ngũ của chúng tôi</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-16">
            Những người trẻ đầy nhiệt huyết, kết hợp giữa chuyên môn công nghệ sâu rộng và sự am hiểu tường tận về lĩnh vực giáo dục tại Việt Nam.
          </p>

          {/* 3D Slider */}
          <div className="relative h-[400px] flex items-center justify-center perspective-[1200px]">
            <AnimatePresence mode="popLayout">
              {TEAM.map((member, index) => {
                const styles = getCardStyles(index);
                return (
                  <motion.div
                    key={member.id}
                    initial={false}
                    animate={{
                      x: styles.x,
                      scale: styles.scale,
                      zIndex: styles.zIndex,
                      opacity: styles.opacity,
                      rotateY: styles.rotateY,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-64 h-80 bg-white rounded-3xl shadow-2xl border border-primary-100 flex flex-col items-center p-6"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <a href={member.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full h-full hover:opacity-90 transition-opacity">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary-100 shadow-inner bg-slate-50 flex items-center justify-center">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-4xl font-bold text-primary-300">{member.name.charAt(0)}</span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 text-center mb-2">{member.name}</h3>
                      <div className="px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
                        {member.role}
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Controls */}
            <button 
              onClick={prev}
              className="absolute left-0 md:left-10 z-50 p-3 rounded-full bg-white/10 hover:bg-primary-500 text-white transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 md:right-10 z-50 p-3 rounded-full bg-white/10 hover:bg-primary-500 text-white transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
