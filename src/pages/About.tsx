import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Users } from 'lucide-react';

const TEAM = [
  { id: 1, name: 'Nguyễn Trọng Đức', role: 'Giám đốc Tài chính', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Lê Nguyễn Thu Uyên', role: 'Giám đốc Sản phẩm', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Nguyễn Ngọc Huyền', role: 'Giám đốc Điều hành', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Phan Thúy An', role: 'Giám đốc Marketing', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
  { id: 5, name: 'Nguyễn Ngân Hà', role: 'Giám đốc Pháp lý', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=600&auto=format&fit=crop' },
];

export function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-24 pb-24 px-6 mt-8">
      
      {/* Header - Lời tự sự */}
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-500 mb-6">
          <Sparkles className="w-4 h-4" /> Câu chuyện của chúng tôi
        </div>
        <h1 className="text-5xl lg:text-6xl font-heading text-ink mb-8 leading-tight">
          Giáo dục không phải là lấp đầy một cái thùng, <br/>
          mà là <span className="italic text-primary-700 font-light">thắp lên một ngọn lửa.</span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          EduConnect ra đời từ một niềm tin giản dị: Mỗi học sinh đều xứng đáng có một người dẫn đường thấu cảm. Chúng tôi không chỉ xây dựng một nền tảng công nghệ, chúng tôi đang dệt nên một mạng lưới của sự tin tưởng, minh bạch và khát khao tri thức tại Việt Nam.
        </p>
      </header>

      {/* Tầm nhìn & Sứ mệnh - Editorial Grid */}
      <div className="grid md:grid-cols-3 gap-12 py-16 border-y border-primary-100">
        <motion.div whileHover={{ y: -5 }} className="space-y-4 group">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
            <Target className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-2xl font-heading text-ink">Mục tiêu</h3>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed">
            Kết nối những tâm hồn đồng điệu trong giáo dục. Giúp việc tìm kiếm người dạy trở nên dễ dàng, xóa bỏ những rào cản về chi phí trung gian và nâng tầm chất lượng học tập.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="space-y-4 group">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
            <Compass className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-2xl font-heading text-ink">Tầm nhìn</h3>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed">
            Trở thành không gian giáo dục công nghệ tinh hoa, nơi sự thấu cảm của con người được nâng bước bởi trí tuệ nhân tạo, nhằm cá nhân hóa trọn vẹn hành trình tiếp thu tri thức.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="space-y-4 group">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 mb-6 group-hover:bg-primary-700 group-hover:text-paper transition-colors duration-500">
            <Sparkles className="w-5 h-5 stroke-[1.5]" />
          </div>
          <h3 className="text-2xl font-heading text-ink">Sứ mệnh</h3>
          <p className="text-[15px] text-ink/70 font-light leading-relaxed">
            Kiến tạo một môi trường học tập an toàn tuyệt đối. Nơi tài năng của người dạy được tôn vinh xứng đáng, và quyền lợi của người học được bảo vệ trọn vẹn.
          </p>
        </motion.div>
      </div>

      {/* Đội ngũ sáng lập - Chân dung (Portraits) */}
      <div className="pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-700 mb-4">
              <Users className="w-4 h-4" /> Đội ngũ sáng lập
            </div>
            <h2 className="text-4xl font-heading text-ink mb-4">Những người giữ lửa.</h2>
            <p className="text-ink/60 font-light text-lg">
              Sự kết hợp giữa tư duy công nghệ nhạy bén và trái tim mang nhịp đập của giáo dục thực chứng.
            </p>
          </div>
        </div>
        
        {/* Gallery Grid thay vì trượt ngang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-primary-50 mb-4 relative paper-shadow">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-heading text-6xl text-primary-200">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="font-heading text-lg text-ink group-hover:text-primary-700 transition-colors">{member.name}</h3>
                <p className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
