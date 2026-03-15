import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, BrainCircuit, BookOpen, ArrowRight, CheckCircle2, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { HANOI_WARDS } from '../constants';

const FEATURED_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    subject: 'Toán học - Lớp 9',
    rating: 4.9,
    price: '200k/h',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Trần Thị B',
    subject: 'Tiếng Anh - IELTS',
    rating: 5.0,
    price: '300k/h',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    subject: 'Vật lý - Lớp 12',
    rating: 4.8,
    price: '250k/h',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  }
];

export function Home() {
  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-24 text-center text-white sm:px-12 lg:px-16 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-white"
          >
            Tìm Gia Sư Phù Hợp <br/> <span className="text-primary-400">Dễ Dàng Hơn Bao Giờ Hết</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
          >
            Nền tảng kết nối gia sư an toàn, minh bạch với hàng ngàn giáo viên, sinh viên xuất sắc đã được xác thực danh tính.
          </motion.p>

          {/* Central Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 mx-auto max-w-3xl bg-white rounded-2xl p-2 shadow-xl flex flex-col sm:flex-row gap-2"
          >
            <div className="flex-1 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-100">
              <BookOpen className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input type="text" placeholder="Môn học (VD: Toán, Tiếng Anh...)" className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400" />
            </div>
            <div className="flex-1 flex items-center px-4 py-2 border-b sm:border-b-0 sm:border-r border-slate-100">
              <MapPin className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <select className="w-full bg-transparent text-slate-900 outline-none cursor-pointer">
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
              <span className="text-slate-400 mr-3 font-medium">₫</span>
              <select className="w-full bg-transparent text-slate-900 outline-none cursor-pointer">
                <option value="">Mọi mức giá</option>
                <option value="1">&lt; 150k/h</option>
                <option value="2">150k - 300k/h</option>
                <option value="3">&gt; 300k/h</option>
              </select>
            </div>
            <Button size="lg" className="w-full sm:w-auto shrink-0 rounded-xl">
              <Search className="w-5 h-5 sm:mr-2" />
              <span className="hidden sm:inline">Tìm kiếm</span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Tutors Section */}
      <section className="mx-auto max-w-6xl w-full px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-bold text-slate-900">Gia sư nổi bật</h2>
          <Link to="/tutors" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
            Xem tất cả <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TUTORS.map((tutor, idx) => (
            <motion.div 
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent-400 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={tutor.image} alt={tutor.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-50" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary-700 transition-colors">{tutor.name}</h3>
                  <p className="text-sm text-slate-500">{tutor.subject}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-1 text-accent-500 font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  {tutor.rating}
                </div>
                <div className="font-bold text-slate-900">{tutor.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section - Phase 1 & 2 */}
      <section className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Đột phá Công nghệ Giáo dục</h2>
          <p className="mt-4 text-lg text-slate-600">Khung kiến trúc tính năng chiến lược được thiết kế riêng cho thị trường Việt Nam.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Feature 1 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">Thanh toán Ký quỹ (Escrow) & E-KYC</h3>
            <p className="text-slate-600 mb-4">
              Xóa bỏ mô hình "phí nhận lớp" rủi ro. Tiền được giữ an toàn và chỉ giải ngân sau buổi học. Gia sư được xác thực danh tính sinh trắc học 100%.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500"/> Không rủi ro lừa đảo</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500"/> Xác thực CCCD & Thẻ sinh viên</li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">Tìm kiếm Siêu cục bộ (Hyper-local)</h3>
            <p className="text-slate-600 mb-4">
              Tối ưu hóa thời gian di chuyển với bộ lọc bán kính thông minh, kết hợp bản đồ trực quan cho các lớp học trực tiếp (offline) tại nhà.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500"/> Lọc theo bán kính (ví dụ: 5km)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500"/> Đặt lịch trực quan trên Grid view</li>
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">AI Lesson Insights</h3>
            <p className="text-slate-600 mb-4">
              Tự động ghi âm, chuyển lời nói thành văn bản và tóm tắt lỗi sai kiến thức phổ biến của học sinh, tự động tạo flashcard ôn tập.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500"/> Phân tích thời gian nói (Talk Time)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-500"/> Đề xuất bài tập cá nhân hóa</li>
            </ul>
          </motion.div>

          {/* Feature 4 */}
          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">Sổ Liên Lạc Điện Tử 2.0</h3>
            <p className="text-slate-600 mb-4">
              Biểu mẫu đánh giá nhanh 1 phút cuối giờ. Tự động đẩy thông báo (push notification) về điện thoại phụ huynh, thỏa mãn tâm lý theo dõi sát sao.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500"/> Đánh giá chuyên cần & tiếp thu</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-500"/> Báo cáo tiến độ trực quan</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
