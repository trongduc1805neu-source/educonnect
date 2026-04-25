import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Search, MapPin, Calendar, Users, ArrowRight, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MOCK_CLASSES = [
  {
    id: 1,
    title: 'Luyện đề Toán 12 - Trọng điểm hình học',
    subject: 'Toán Học',
    tutor: 'Thầy Nguyễn Hải Anh',
    tutorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    schedule: 'Tối Thứ 3 & Thứ 6 (19:30 - 21:00)',
    location: 'Quận Đống Đa, Hà Nội',
    mode: 'Trực tiếp',
    price: '150.000đ',
    enrolled: 3,
    capacity: 5,
    startDate: '15/11/2026',
    tags: ['Luyện đề', 'Mục tiêu 8+']
  },
  {
    id: 2,
    title: 'Phân tích định lượng SPSS cơ bản',
    subject: 'Nghiên cứu khoa học',
    tutor: 'Nghiên cứu viên Khánh Lê',
    tutorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    schedule: 'Sáng Chủ Nhật (08:30 - 11:30)',
    location: 'Google Meet',
    mode: 'Trực tuyến',
    price: '200.000đ',
    enrolled: 8,
    capacity: 10,
    startDate: '20/11/2026',
    tags: ['SPSS', 'Sinh viên đại học']
  },
  {
    id: 3,
    title: 'Ngữ Văn Khối 10 - Cảm thụ văn học',
    subject: 'Ngữ Văn',
    tutor: 'Cô Trần Phương Ly',
    tutorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    schedule: 'Tối Thứ 4 (18:00 - 20:00)',
    location: 'Quận Cầu Giấy, Hà Nội',
    mode: 'Trực tiếp',
    price: '180.000đ',
    enrolled: 2,
    capacity: 4,
    startDate: '01/12/2026',
    tags: ['Xây gốc', 'Học sinh mới']
  }
];

export function FindClass() {
  const [searchTerm, setSearchTerm] = useState('');
  const [learningMode, setLearningMode] = useState('');
  const [availability, setAvailability] = useState('');
  const navigate = useNavigate();

  const filteredClasses = MOCK_CLASSES.filter(cls => {
    if (searchTerm && !cls.title.toLowerCase().includes(searchTerm.toLowerCase()) && !cls.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (learningMode) {
      if (learningMode === 'offline' && cls.mode !== 'Trực tiếp') return false;
      if (learningMode === 'online' && cls.mode !== 'Trực tuyến') return false;
    }
    if (availability) {
      if (availability === 'available' && cls.enrolled >= cls.capacity) return false;
      if (availability === 'full' && cls.enrolled < cls.capacity) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-8">
      
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-6 leading-tight">
          Giảng đường <span className="italic text-primary-700 font-normal">thu nhỏ.</span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          Tham gia vào các không gian học tập nhóm được thiết kế tỉ mỉ. Tối ưu hóa chi phí, nhân đôi nguồn cảm hứng từ những người bạn đồng hành.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Bộ lọc */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-28 bg-[#FDFBF7] rounded-[32px] p-8 border border-primary-100 shadow-xl shadow-primary-900/5 space-y-8">
            <div className="border-b border-primary-100 pb-4 mb-2">
              <h4 className="text-[12px] font-bold text-ink uppercase tracking-[0.2em] flex items-center gap-2">
                <Search className="w-4 h-4 text-primary-700" /> Tìm kiếm lớp
              </h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Tên lớp / Môn học</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Nhập từ khóa..." 
                    className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 placeholder:text-ink/30 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Không gian học</label>
                <select 
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="">Tất cả hình thức</option>
                  <option value="offline">Trực tiếp (Tại nhà)</option>
                  <option value="online">Trực tuyến (Online)</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">Tình trạng chỗ</label>
                <select 
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  <option value="available">Đang mở đăng ký (Còn chỗ)</option>
                  <option value="full">Đã đủ học viên</option>
                </select>
              </div>

              <div className="pt-2">
                <Button className="w-full h-12 text-xs tracking-widest shadow-md">
                  ÁP DỤNG BỘ LỌC
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Danh sách lớp học */}
        <div className="flex-1 space-y-12">
          {filteredClasses.map((cls, idx) => (
            <motion.div 
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-primary-100 last:border-0"
            >
              {/* Lịch & Sĩ số (Khối thông tin bên trái) */}
              <div className="w-full md:w-40 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Khai giảng</div>
                  <div className="text-xl font-heading text-ink">{cls.startDate}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Sĩ số</div>
                  <div className="text-xl font-heading text-primary-700">
                    {cls.enrolled}<span className="text-sm text-ink/30">/{cls.capacity}</span>
                  </div>
                  <div className="text-[10px] text-accent-500 font-medium mt-1">Còn {cls.capacity - cls.enrolled} chỗ</div>
                </div>
              </div>

              {/* Chi tiết lớp học */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-2 py-1 rounded">
                    {cls.subject}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-heading text-ink">{cls.price}</div>
                    <div className="text-[10px] text-ink/40 uppercase tracking-widest">/ buổi</div>
                  </div>
                </div>

                <h3 className="text-2xl font-heading text-ink mb-4 group-hover:text-primary-700 transition-colors">
                  <Link to={`/class/${cls.id}`}>{cls.title}</Link>
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <img src={cls.tutorImage} alt="Tutor" className="w-5 h-5 rounded-full object-cover" />
                    Giảng viên: <span className="font-medium text-ink">{cls.tutor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <Calendar className="w-4 h-4 text-primary-700" />
                    {cls.schedule}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <MapPin className="w-4 h-4 text-primary-700" />
                    {cls.mode} — {cls.location}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-primary-50">
                  <div className="flex gap-2">
                    {cls.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold text-ink/50 uppercase tracking-widest border border-primary-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button onClick={() => navigate('/payment', { state: { type: 'class', data: cls } })} className="w-full sm:w-auto text-[11px] h-10 px-6 tracking-widest">
                    ĐĂNG KÝ HỌC <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
