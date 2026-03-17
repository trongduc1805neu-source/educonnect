import { motion } from 'framer-motion';

const TEAM = [
  { id: 1, name: 'Nguyễn Trọng Đức', role: 'Giám đốc Tài chính', image: 'https://ibb.co/HpBTXssL', link: '#' },
  { id: 2, name: 'Lê Nguyễn Thu Uyên', role: 'Giám đốc Sản phẩm', image: 'https://ibb.co/DDs8j5y6', link: '#' },
  { id: 3, name: 'Nguyễn Ngọc Huyền', role: 'Giám đốc Điều hành', image: 'https://ibb.co/60DH8hxm', link: '#' },
  { id: 4, name: 'Phan Thúy An', role: 'Giám đốc Marketing', image: 'https://ibb.co/Zpy5CX3C', link: '#' },
  { id: 5, name: 'Nguyễn Ngân Hà', role: 'Giám đốc pháp lý', image: 'https://ibb.co/5J8yzNB', link: '#' },
];

export function About() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-16 px-4">
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
          Về EduConnect
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
          />
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Nền tảng kết nối gia sư và học viên hàng đầu Việt Nam, mang đến giải pháp học tập an toàn, minh bạch và hiệu quả.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div whileHover={{ y: -2 }} className="bg-white p-8 shadow-sm border border-slate-200 rounded-sm">
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Mục tiêu</h3>
          </div>
          <p className="text-slate-700 leading-relaxed text-justify">
            Xây dựng một nền tảng kết nối gia sư và học viên hiệu quả, giúp mọi người dễ dàng tìm được người dạy phù hợp, tối ưu chi phí và nâng cao chất lượng học tập.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} className="bg-white p-8 shadow-sm border border-slate-200 rounded-sm">
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Tầm nhìn</h3>
          </div>
          <p className="text-slate-700 leading-relaxed text-justify">
            Trở thành nền tảng giáo dục công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng AI để cá nhân hóa trải nghiệm học tập cho từng người dùng.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -2 }} className="bg-white p-8 shadow-sm border border-slate-200 rounded-sm">
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Sứ mệnh</h3>
          </div>
          <p className="text-slate-700 leading-relaxed text-justify">
            Mang đến môi trường học tập minh bạch, an toàn và đáng tin cậy; nơi học viên và gia sư có thể kết nối nhanh chóng, đảm bảo quyền lợi và chất lượng giảng dạy.
          </p>
        </motion.div>
      </div>

      <div className="bg-white p-8 shadow-sm border border-slate-200 rounded-sm">
        <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-3 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">Đội ngũ lãnh đạo</h2>
        </div>
        
        <p className="text-slate-700 max-w-3xl mb-10 leading-relaxed">
          Những người trẻ đầy nhiệt huyết, kết hợp giữa chuyên môn công nghệ sâu rộng và sự am hiểu tường tận về lĩnh vực giáo dục tại Việt Nam.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col border border-slate-200 rounded-sm overflow-hidden group"
            >
              <div className="aspect-square bg-slate-100 flex items-center justify-center border-b border-slate-200">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <span className="text-6xl font-bold text-slate-300">{member.name.charAt(0)}</span>
                )}
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-emerald-800 uppercase mb-1">{member.name}</h3>
                <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
