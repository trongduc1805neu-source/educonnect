import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS, SUBJECTS } from '../constants';
import { Search as SearchIcon, MapPin, Award, BookOpen, Star } from 'lucide-react';

// Dữ liệu mẫu mang hơi thở học thuật và bám sát thực tế sinh viên/giáo viên
import { MOCK_TUTORS } from '../data/tutors';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Tất cả hình thức');
  const navigate = useNavigate();

  const filteredTutors = MOCK_TUTORS.filter(tutor => {
    // keyword
    if (searchTerm && !tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) && !tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // learning mode
    if (learningMode !== 'Tất cả hình thức' && !tutor.mode.toLowerCase().includes(learningMode.toLowerCase())) {
      return false;
    }
    return true;
  });

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
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-28 bg-[#FDFBF7] rounded-[32px] p-8 border border-primary-100 shadow-xl shadow-primary-900/5 space-y-8">
            <div className="border-b border-primary-100 pb-4 mb-2">
              <h4 className="text-[12px] font-bold text-ink uppercase tracking-[0.2em] flex items-center gap-2">
                <SearchIcon className="w-4 h-4 text-primary-700" /> Tinh chỉnh kết quả
              </h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Từ khóa</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tên, môn học..." 
                    className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 placeholder:text-ink/30 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Môn học</label>
                <select className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all">
                  <option value="">Tất cả lĩnh vực</option>
                  {SUBJECTS.map(subject => <option key={subject} value={subject}>{subject}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Hình thức học</label>
                <select 
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
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
                  <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Khu vực (Hà Nội)</label>
                  <select className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all">
                    <option value="">Khắp thành phố</option>
                    {HANOI_WARDS.map((ward) => <option key={ward} value={ward}>{ward}</option>)}
                  </select>
                </div>
              )}

              <div className="pt-2">
                <Button className="w-full h-12 text-xs tracking-widest shadow-md">
                  ÁP DỤNG BỘ LỌC
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Danh sách hiển thị theo dạng "List" trải dài thay vì "Grid Card" */}
        <div className="flex-1 space-y-12">
          {filteredTutors.map((tutor, idx) => (
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
                    src={tutor.photoURL} 
                    alt={tutor.name} 
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-3 right-3 bg-[#FDFBF7]/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-ink flex items-center gap-1">
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
                    <div className="text-xl font-heading text-primary-700 mb-1">{tutor.fee}<span className="text-sm font-sans text-ink/40">/h</span></div>
                    <span className="text-[11px] font-medium text-ink/40 uppercase tracking-wider">{tutor.reviews} Đánh giá</span>
                  </div>
                </div>
                
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-[13px] text-ink/70">
                  <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-ink/40" /> {tutor.distance}</div>
                  <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-ink/40" /> {tutor.mode}</div>
                  {tutor.isVerified && (
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
                    <Button onClick={() => navigate('/payment', { state: { type: 'tutor', data: tutor } })} className="text-[11px] h-9 px-5 tracking-widest">
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
