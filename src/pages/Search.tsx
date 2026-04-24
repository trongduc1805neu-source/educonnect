import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS, SUBJECTS } from '../constants';
import { Search as SearchIcon, MapPin, Award, BookOpen, Star } from 'lucide-react';

// Dữ liệu mẫu mang hơi thở học thuật và bám sát thực tế sinh viên/giáo viên
const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Hải Anh',
    title: 'Giáo viên Toán THCS',
    subject: 'Toán Học - Khối 9',
    rating: 4.9,
    reviews: 124,
    price: '200.000đ',
    distance: 'Cầu Giấy (2.5 km)',
    mode: 'Trực tiếp / Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    tags: ['Tư duy logic', 'Lấy lại căn bản'],
    education: 'Đại học Sư phạm Hà Nội',
    experience: '5 năm kinh nghiệm giảng dạy',
    achievements: '90% học sinh đỗ NV1'
  },
  {
    id: 2,
    name: 'Khánh Lê',
    title: 'Nghiên cứu viên trẻ',
    subject: 'Phân tích Định lượng & SPSS',
    rating: 5.0,
    reviews: 42,
    price: '250.000đ',
    distance: 'Hai Bà Trưng (1.2 km)',
    mode: 'Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    tags: ['Nghiên cứu khoa học', 'Xử lý dữ liệu'],
    education: 'Đại học Kinh tế Quốc dân (NEU)',
    experience: 'Trợ giảng bộ môn Thống kê',
    achievements: 'Giải Nhất NCKH cấp Trường'
  },
  {
    id: 3,
    name: 'Lê Hoàng Minh',
    title: 'Sinh viên xuất sắc',
    subject: 'Vật Lý - Khối 10',
    rating: 4.8,
    reviews: 56,
    price: '220.000đ',
    distance: 'Đống Đa (3.0 km)',
    mode: 'Trực tiếp',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    tags: ['Ôn thi học sinh giỏi', 'Dạy dễ hiểu'],
    education: 'Đại học Bách Khoa Hà Nội',
    experience: 'Cựu học sinh chuyên Lý khối KHTN',
    achievements: 'Giúp học sinh tăng trung bình 2 điểm'
  }
];

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Tất cả hình thức');

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-8">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      
      {/* Tiêu đề trang - Tối giản, tập trung vào text */}
      <header className="mb-16 max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-4 leading-tight">
          Danh bạ <span className="italic text-primary-700">người dẫn đường.</span>
        </h1>
        <p className="text-ink/60 text-lg font-light">
          Khám phá những hồ sơ được tinh tuyển kỹ lưỡng, phù hợp với nhịp độ và mục tiêu học tập của riêng bạn.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Filters - Thiết kế như một biểu mẫu điền tay (Fill-in-the-blank) */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-28 space-y-10">
            <div className="border-b border-primary-200 pb-2">
              <h4 className="text-[11px] font-bold text-ink/40 uppercase tracking-[0.2em] flex items-center gap-2">
                <SearchIcon className="w-4 h-4" /> Tinh chỉnh kết quả
              </h4>
            </div>
            
            <div className="space-y-8">
              {/* Form Input: Chỉ dùng gạch dưới, không dùng viền bao quanh (border-box) */}
              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1 block">Từ khóa</label>
                <input 
                  type="text" 
                  placeholder="Tên, môn học..." 
                  className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/30 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1 block">Môn học</label>
                <select className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer">
                  <option value="">Tất cả lĩnh vực</option>
                  {SUBJECTS.map(subject => <option key={subject} value={subject}>{subject}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1 block">Hình thức học</label>
                <select 
                  className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="Tất cả hình thức">Linh hoạt</option>
                  <option value="Trực tiếp">Trực tiếp (Tại nhà)</option>
                  <option value="Trực tuyến">Trực tuyến (Online)</option>
                </select>
              </div>

              {learningMode !== 'Trực tuyến' && (
                <div>
                  <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-1 block">Khu vực (Hà Nội)</label>
                  <select className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer">
                    <option value="">Khắp thành phố</option>
                    {HANOI_WARDS.map((ward) => <option key={ward} value={ward}>{ward}</option>)}
                  </select>
                </div>
              )}

              <Button className="w-full text-xs tracking-widest shadow-none hover:shadow-md mt-4">
                CẬP NHẬT
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content - Danh sách hiển thị theo dạng "List" trải dài thay vì "Grid Card" */}
        <div className="flex-1 space-y-12">
          {MOCK_TUTORS.map((tutor, idx) => (
            <motion.div 
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-primary-100 last:border-0"
            >
              {/* Hình ảnh */}
              <Link to={`/profile/${tutor.id}`} className="w-full md:w-48 shrink-0 block">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-primary-50 relative paper-shadow">
                  <img 
                    src={tutor.image} 
                    alt={tutor.name} 
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-ink flex items-center gap-1">
                    {tutor.rating} <Star className="w-3 h-3 fill-accent-500 text-accent-500" />
                  </div>
                </div>
              </Link>
              
              {/* Thông tin */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-heading text-ink group-hover:text-primary-700 transition-colors mb-1">
                      <Link to={`/profile/${tutor.id}`}>{tutor.name}</Link>
                    </h3>
                    <p className="text-accent-500 font-semibold text-sm uppercase tracking-widest">{tutor.subject}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-xl font-heading text-primary-700 mb-1">{tutor.price}<span className="text-sm font-sans text-ink/40">/h</span></div>
                    <span className="text-[11px] font-medium text-ink/40 uppercase tracking-wider">{tutor.reviews} Đánh giá</span>
                  </div>
                </div>
                
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-[13px] text-ink/70">
                  <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-ink/40" /> {tutor.distance}</div>
                  <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-ink/40" /> {tutor.mode}</div>
                  {tutor.verified && (
                    <div className="flex items-center gap-1.5 text-primary-700 font-medium">
                      <Award className="w-4 h-4" /> Đã xác thực
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-[13px] text-ink/80 font-light leading-relaxed mb-6">
                  <p><strong className="font-semibold text-ink/50 uppercase text-[10px] tracking-widest mr-2">Học vấn</strong> {tutor.education}</p>
                  <p><strong className="font-semibold text-ink/50 uppercase text-[10px] tracking-widest mr-2">Kinh nghiệm</strong> {tutor.experience}</p>
                </div>

                {/* Tags & Actions */}
                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-primary-50">
                  <div className="flex flex-wrap gap-2">
                    {tutor.tags.map(tag => (
                      <span key={tag} className="inline-block px-3 py-1 bg-primary-50 text-[10px] font-semibold text-primary-900 uppercase tracking-widest rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Link to={`/profile/${tutor.id}`} className="text-[11px] font-bold text-ink/50 hover:text-primary-700 uppercase tracking-widest editorial-link">
                      Xem chi tiết
                    </Link>
                    <Button onClick={() => setIsLoginModalOpen(true)} className="text-[11px] h-9 px-5 tracking-widest">
                      KẾT NỐI NGAY
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
