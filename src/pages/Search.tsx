import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, MapPin, Star, ShieldCheck, Filter, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS } from '../constants';

const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    subject: 'Toán học - Lớp 9',
    rating: 4.9,
    reviews: 124,
    price: '200.000đ/h',
    distance: '2.5 km',
    mode: 'Trực tiếp / Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    tags: ['Ôn thi vào 10', 'Lấy lại căn bản'],
  },
  {
    id: 2,
    name: 'Trần Thị B',
    subject: 'Tiếng Anh - IELTS',
    rating: 5.0,
    reviews: 89,
    price: '300.000đ/h',
    distance: '5.0 km',
    mode: 'Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    tags: ['IELTS 7.5+', 'Giao tiếp'],
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    subject: 'Vật lý - Lớp 12',
    rating: 4.8,
    reviews: 56,
    price: '250.000đ/h',
    distance: '1.2 km',
    mode: 'Trực tiếp',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tags: ['Luyện thi Đại học', 'Nâng cao'],
  }
];

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Tất cả hình thức');

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để đặt lịch"
        message="Vui lòng đăng nhập để có thể đặt lịch học với gia sư này."
      />
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 shrink-0 space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 font-bold text-slate-900">
            <Filter className="h-5 w-5" />
            Bộ lọc tìm kiếm
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Môn học</label>
              <select className="w-full rounded-lg border border-slate-200 p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                <option>Tất cả môn học</option>
                <option>Toán học</option>
                <option>Tiếng Anh</option>
                <option>Vật lý</option>
                <option>Hóa học</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Hình thức học</label>
              <select 
                className="w-full rounded-lg border border-slate-200 p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                value={learningMode}
                onChange={(e) => setLearningMode(e.target.value)}
              >
                <option value="Tất cả hình thức">Tất cả hình thức</option>
                <option value="Trực tiếp (Tại nhà)">Trực tiếp (Tại nhà)</option>
                <option value="Trực tuyến (Online)">Trực tuyến (Online)</option>
              </select>
            </div>

            {learningMode !== 'Trực tuyến (Online)' && (
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Khu vực</label>
                <select className="w-full rounded-lg border border-slate-200 p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option value="">Tất cả khu vực</option>
                  {HANOI_WARDS.map((ward) => (
                    <option key={ward} value={ward}>{ward}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Mức giá / giờ</label>
              <select className="w-full rounded-lg border border-slate-200 p-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                <option>Mọi mức giá</option>
                <option>&lt; 150.000đ</option>
                <option>150.000đ - 300.000đ</option>
                <option>&gt; 300.000đ</option>
              </select>
            </div>

            <Button className="w-full mt-2">Áp dụng bộ lọc</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm theo môn học, tên gia sư, hoặc khu vực..." 
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Tìm thấy {MOCK_TUTORS.length} gia sư phù hợp</h2>
          
          <div className="grid gap-4">
            {MOCK_TUTORS.map((tutor, idx) => (
              <motion.div 
                key={tutor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-accent-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <img src={tutor.image} alt={tutor.name} className="h-24 w-24 rounded-xl object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                          {tutor.name}
                          {tutor.verified && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                              <ShieldCheck className="h-3 w-3" /> E-KYC
                            </span>
                          )}
                        </h3>
                        <p className="text-indigo-600 font-medium mt-1">{tutor.subject}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-900">{tutor.price}</div>
                        <div className="flex items-center justify-end gap-1 text-sm text-amber-500 font-medium mt-1">
                          <Star className="h-4 w-4 fill-current" />
                          {tutor.rating} <span className="text-slate-400 font-normal">({tutor.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Cách bạn {tutor.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutor.mode}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {tutor.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col justify-end gap-2 shrink-0">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link to={`/profile/${tutor.id}`}>Xem hồ sơ</Link>
                  </Button>
                  <Button className="w-full sm:w-auto" onClick={() => setIsLoginModalOpen(true)}>Yêu cầu học thử</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
