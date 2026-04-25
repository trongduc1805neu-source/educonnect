import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Users, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MOCK_TUTORS } from '../data/tutors';

const INITIAL_TEAM = [
  { id: 1, name: 'Nguyễn Trọng Đức', role: 'Giám đốc Tài chính', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Lê Nguyễn Thu Uyên', role: 'Giám đốc Sản phẩm', image: 'https://i.ibb.co/SF32x32/649080250-1480301896998131-8534730828073620253-n.jpg' },
  { id: 3, name: 'Nguyễn Ngọc Huyền', role: 'Giám đốc Điều hành', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Phan Thúy An', role: 'Giám đốc Marketing', image: 'https://i.ibb.co/TqhHK8Lw/image.png' },
  { id: 5, name: 'Nguyễn Ngân Hà', role: 'Giám đốc Pháp lý', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=600&auto=format&fit=crop' },
];

const TEAM = INITIAL_TEAM.map(member => {
  const findTutor = MOCK_TUTORS.find(t => t.name === member.name);
  return {
    ...member,
    image: findTutor?.photoURL || member.image,
  };
});

export function About() {
  const [activeIndex, setActiveIndex] = useState(2);

  const nextTeam = () => {
    setActiveIndex((prev) => (prev + 1) % TEAM.length);
  };

  const prevTeam = () => {
    setActiveIndex((prev) => (prev - 1 + TEAM.length) % TEAM.length);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-24 pb-24 px-6 mt-8">
      
      {/* Header - Lời tự sự */}
      <header className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <h1 className="text-5xl lg:text-6xl font-heading text-ink mb-8 leading-tight">
            Giáo dục không phải là lấp đầy một cái thùng, <br/>
            mà là <span className="italic text-primary-700 font-light">thắp lên một ngọn lửa.</span>
          </h1>
          <p className="text-lg text-ink/70 font-light leading-relaxed">
            EduConnect ra đời từ một niềm tin giản dị: Mỗi học sinh đều xứng đáng có một người dẫn đường thấu cảm. Chúng tôi không chỉ xây dựng một nền tảng công nghệ, chúng tôi đang dệt nên một mạng lưới của sự tin tưởng, minh bạch và khát khao tri thức tại Việt Nam.
          </p>
        </div>
        <div className="relative hidden lg:block lg:mt-6 z-0">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden paper-shadow">
            <img 
              src="https://i.ibb.co/9kQFLCjS/thiet-ke-van-phong-giao-duc.jpg" 
              alt="Office workspace" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-10 -left-16 bg-[#FDFBF7] p-7 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] w-[300px] z-10 border border-primary-50"
          >
            <p className="text-[15px] italic text-ink/80 leading-relaxed mb-6 font-medium">
              "Tại EduConnect, chúng tôi xem giáo dục là hành trình kết nối những trái tim thấu cảm để kiến tạo những khối óc tinh hoa."
            </p>
            <div className="text-[10px] font-bold text-primary-700 uppercase tracking-widest">
              — Đội ngũ Founder
            </div>
          </motion.div>
        </div>
      </header>

      {/* Tầm nhìn & Sứ mệnh - Editorial Grid */}
      <div className="grid md:grid-cols-3 gap-12 py-16 border-y border-primary-100">
        <motion.div whileHover={{ y: -5 }} className="space-y-4 group flex flex-col">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
              <Target className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-heading text-ink">Mục tiêu</h3>
          </div>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed text-justify">
            Kết nối những tâm hồn đồng điệu trong giáo dục. Giúp việc tìm kiếm người dạy trở nên dễ dàng, xóa bỏ những rào cản về chi phí trung gian và nâng tầm chất lượng học tập.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="space-y-4 group flex flex-col">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
              <Eye className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-heading text-ink">Tầm nhìn</h3>
          </div>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed text-justify">
            Trở thành không gian giáo dục công nghệ tinh hoa, nơi sự thấu cảm của con người được nâng bước bởi trí tuệ nhân tạo, nhằm cá nhân hóa trọn vẹn hành trình tiếp thu tri thức.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="space-y-4 group flex flex-col">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
              <Rocket className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-2xl font-heading text-ink">Sứ mệnh</h3>
          </div>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed text-justify">
            Kiến tạo một môi trường học tập an toàn tuyệt đối. Nơi tài năng của người dạy được tôn vinh xứng đáng, và quyền lợi của người học được bảo vệ trọn vẹn.
          </p>
        </motion.div>
      </div>

      {/* Đội ngũ sáng lập - Chân dung (Portraits) */}
      <div className="pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-heading text-ink mb-4">Những người giữ lửa.</h2>
            <p className="text-ink/60 font-light text-lg">
              Sự kết hợp giữa tư duy công nghệ nhạy bén và trái tim mang nhịp đập của giáo dục thực chứng.
            </p>
          </div>
        </div>
        
        {/* 3D Carousel */}
        <div className="relative h-[450px] md:h-[550px] w-full flex justify-center items-center overflow-visible mt-10">
          <div className="absolute z-50 flex items-center justify-between w-full max-w-5xl px-4 pointer-events-none">
            <button 
              onClick={prevTeam} 
              className="w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur paper-shadow flex items-center justify-center text-primary-700 pointer-events-auto hover:bg-primary-700 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTeam} 
              className="w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur paper-shadow flex items-center justify-center text-primary-700 pointer-events-auto hover:bg-primary-700 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {TEAM.map((member, index) => {
            // Determine relative position
            let offset = index - activeIndex;
            // Support wrapping around if needed, but for 5 items, normal offset works
            if (offset < -2) offset += TEAM.length;
            if (offset > 2) offset -= TEAM.length;

            const isCenter = offset === 0;
            const absoluteOffset = Math.abs(offset);

            // Hide cards that are too far away
            if (absoluteOffset > 2) return null;

            return (
              <motion.div 
                key={member.id}
                className="absolute w-[240px] md:w-[320px] cursor-pointer"
                animate={{
                  x: `calc(${offset * 60}px + ${offset * 9}vw)`,
                  scale: isCenter ? 1 : 1 - absoluteOffset * 0.2,
                  opacity: absoluteOffset === 2 ? 0.2 : (isCenter ? 1 : 0.6),
                  zIndex: 10 - absoluteOffset,
                  filter: isCenter ? 'grayscale(0%) blur(0px)' : 'grayscale(100%) blur(3px)',
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-primary-50 paper-shadow relative group">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-heading text-6xl text-primary-200">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  {/* Overlay for center block to show text over image if preferred, but below we have it outside */}
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <motion.div 
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCenter ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-xl md:text-2xl text-ink">{member.name}</h3>
                  <p className="text-[10px] md:text-xs font-bold text-accent-500 uppercase tracking-widest mt-2">{member.role}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
