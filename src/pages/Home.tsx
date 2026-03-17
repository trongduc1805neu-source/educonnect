import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { HANOI_WARDS, SUBJECTS } from '../constants';

const FEATURED_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    subject: 'Toán - Lớp 9',
    rating: 4.9,
    price: '200k/h',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    education: 'Đại học Sư phạm Hà Nội',
    experience: '5 năm kinh nghiệm',
    achievements: '90% học sinh đỗ NV1',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    subject: 'Tiếng Anh - Lớp 12',
    rating: 5.0,
    price: '300k/h',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    education: 'Đại học Ngoại ngữ - ĐHQGHN',
    experience: 'IELTS 8.0, 3 năm kinh nghiệm',
    achievements: 'Nhiều học sinh đạt IELTS 7.0+',
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    subject: 'Lý - Lớp 10',
    rating: 4.8,
    price: '250k/h',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    education: 'Đại học Bách khoa Hà Nội',
    experience: 'Thủ khoa đầu vào, 2 năm kinh nghiệm',
    achievements: 'Giúp học sinh tăng 2-3 điểm',
  }
];

export function Home() {
  return (
    <div className="flex flex-col gap-20 pb-16 px-4">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-sm bg-slate-900 px-6 py-24 text-center text-white sm:px-12 lg:px-16 shadow-sm border border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/95"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-white uppercase"
          >
            Tìm Gia Sư Phù Hợp <br/> <span className="text-emerald-400">Dễ Dàng Hơn Bao Giờ Hết</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed"
          >
            Nền tảng kết nối gia sư an toàn, minh bạch với hàng ngàn giáo viên, sinh viên xuất sắc đã được xác thực danh tính.
          </motion.p>

          {/* Central Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 mx-auto max-w-4xl bg-white rounded-sm p-2 shadow-sm flex flex-col sm:flex-row gap-2 border border-slate-200"
          >
            <div className="flex-1 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
              <select className="w-full bg-transparent text-slate-900 outline-none cursor-pointer font-medium uppercase text-sm tracking-wider">
                <option value="">Chọn môn học</option>
                {SUBJECTS.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
              <select className="w-full bg-transparent text-slate-900 outline-none cursor-pointer font-medium uppercase text-sm tracking-wider">
                <option value="">Khu vực hoặc Online</option>
                <option value="Online">Trực tuyến (Online)</option>
                <optgroup label="Khu vực (Hà Nội)">
                  {HANOI_WARDS.map((ward) => (
                    <option key={ward} value={ward}>{ward}</option>
                  ))}
                </optgroup>
              </select>
            </div>
            <div className="flex-1 flex items-center px-4 py-2">
              <select className="w-full bg-transparent text-slate-900 outline-none cursor-pointer font-medium uppercase text-sm tracking-wider">
                <option value="">Mọi mức giá</option>
                <option value="1">&lt; 150k/h</option>
                <option value="2">150k - 300k/h</option>
                <option value="3">&gt; 300k/h</option>
              </select>
            </div>
            <Button size="lg" className="w-full sm:w-auto shrink-0 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">
              Tìm kiếm
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tutors Section */}
      <section className="mx-auto max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider relative inline-block mb-2">
            Gia sư nổi bật
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1 bg-emerald-700 rounded-full"
            />
          </h2>
          <Link to="/tutors" className="text-emerald-700 font-bold hover:text-emerald-800 uppercase text-sm tracking-wider">
            Xem tất cả &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TUTORS.map((tutor, idx) => (
            <motion.div 
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group bg-white rounded-sm p-6 border border-slate-200 shadow-sm hover:border-emerald-700 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-sm object-cover border border-slate-200" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 uppercase tracking-wide group-hover:text-emerald-700 transition-colors">{tutor.name}</h3>
                  <p className="text-sm font-bold text-emerald-700 mb-1">{tutor.subject}</p>
                  <p className="text-xs text-slate-600 font-medium">{tutor.education}</p>
                </div>
              </div>
              <div className="text-sm text-slate-600 mb-2">
                <span className="font-bold text-slate-900">Kinh nghiệm:</span> {tutor.experience}
              </div>
              <div className="text-sm text-slate-600 mb-4 flex-grow">
                <span className="font-bold text-slate-900">Thành tích:</span> {tutor.achievements}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-1 text-slate-700 font-bold text-sm">
                  Đánh giá: <span className="text-emerald-700">{tutor.rating}/5.0</span>
                </div>
                <div className="font-bold text-slate-900">{tutor.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 uppercase relative inline-block mb-4">
            Đột phá Công nghệ Giáo dục
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h2>
          <p className="mt-2 text-lg text-slate-600 font-medium">Khung kiến trúc tính năng chiến lược được thiết kế riêng cho thị trường Việt Nam.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="mb-4 text-xl font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2">Thanh toán Ký quỹ & E-KYC</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Xóa bỏ mô hình "phí nhận lớp" rủi ro. Tiền được giữ an toàn và chỉ giải ngân sau buổi học. Gia sư được xác thực danh tính sinh trắc học 100%.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li>&bull; Không rủi ro lừa đảo</li>
              <li>&bull; Xác thực CCCD & Thẻ sinh viên</li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="mb-4 text-xl font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2">Tìm kiếm Siêu cục bộ</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Tối ưu hóa thời gian di chuyển với bộ lọc bán kính thông minh, kết hợp bản đồ trực quan cho các lớp học trực tiếp (offline) tại nhà.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li>&bull; Lọc theo bán kính (ví dụ: 5km)</li>
              <li>&bull; Đặt lịch trực quan trên Grid view</li>
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="mb-4 text-xl font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2">AI Lesson Insights</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Tự động ghi âm, chuyển lời nói thành văn bản và tóm tắt lỗi sai kiến thức phổ biến của học sinh, tự động tạo flashcard ôn tập.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li>&bull; Phân tích thời gian nói (Talk Time)</li>
              <li>&bull; Đề xuất bài tập cá nhân hóa</li>
            </ul>
          </motion.div>

          {/* Feature 4 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <h3 className="mb-4 text-xl font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2">Sổ Liên Lạc Điện Tử 2.0</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Biểu mẫu đánh giá nhanh 1 phút cuối giờ. Tự động đẩy thông báo về điện thoại phụ huynh, thỏa mãn tâm lý theo dõi sát sao.
            </p>
            <ul className="space-y-2 text-sm font-medium text-slate-700">
              <li>&bull; Đánh giá chuyên cần & tiếp thu</li>
              <li>&bull; Báo cáo tiến độ trực quan</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
