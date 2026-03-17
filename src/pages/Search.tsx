import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS, SUBJECTS } from '../constants';

const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    title: 'Giáo viên Toán THCS & THPT',
    subject: 'Toán - Lớp 9',
    rating: 4.9,
    reviews: 124,
    price: '200.000đ/h',
    distance: '2.5 km',
    mode: 'Trực tiếp / Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    tags: ['Ôn thi vào 10', 'Lấy lại căn bản'],
    education: 'Đại học Sư phạm Hà Nội - Sư phạm Toán',
    experience: '5 năm kinh nghiệm giảng dạy',
    achievements: '90% học sinh đỗ NV1'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    title: 'Giảng viên Tiếng Anh',
    subject: 'Tiếng Anh - Lớp 12',
    rating: 5.0,
    reviews: 89,
    price: '300.000đ/h',
    distance: '5.0 km',
    mode: 'Trực tuyến',
    verified: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    tags: ['Luyện thi Đại học', 'Giao tiếp'],
    education: 'Đại học Ngoại Ngữ - Ngôn ngữ Anh',
    experience: 'IELTS 8.0, 3 năm kinh nghiệm',
    achievements: 'Nhiều học sinh đạt IELTS 7.0+'
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    title: 'Sinh viên xuất sắc',
    subject: 'Lý - Lớp 10',
    rating: 4.8,
    reviews: 56,
    price: '250.000đ/h',
    distance: '1.2 km',
    mode: 'Trực tiếp',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tags: ['Nâng cao', 'Dạy dễ hiểu'],
    education: 'Đại học Bách Khoa Hà Nội',
    experience: 'Giải Nhất HSG Quốc gia môn Lý',
    achievements: 'Giúp học sinh tăng 2-3 điểm'
  }
];

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Tất cả hình thức');

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto pb-16">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để đặt lịch"
        message="Vui lòng đăng nhập để có thể đặt lịch học với gia sư này."
      />
      
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 shrink-0 space-y-6">
        <div className="bg-white p-6 shadow-sm border border-slate-200 rounded-sm">
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-6">
            <h4 className="text-lg font-bold text-slate-900 uppercase">Bộ lọc tìm kiếm</h4>
          </div>
          
          <div className="space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Môn học</label>
              <select className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                <option value="">Tất cả môn học</option>
                {SUBJECTS.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Hình thức học</label>
              <select 
                className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
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
                <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Khu vực</label>
                <select className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                  <option value="">Tất cả khu vực</option>
                  {HANOI_WARDS.map((ward) => (
                    <option key={ward} value={ward}>{ward}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Mức giá / giờ</label>
              <select className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                <option>Mọi mức giá</option>
                <option>&lt; 150.000đ</option>
                <option>150.000đ - 300.000đ</option>
                <option>&gt; 300.000đ</option>
              </select>
            </div>

            <Button className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-sm uppercase font-bold tracking-wider">
              Áp dụng bộ lọc
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-4 relative inline-block">
            Danh sách Gia sư
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h1>
          <p className="text-slate-600 mt-2">Tìm thấy {MOCK_TUTORS.length} hồ sơ gia sư phù hợp với yêu cầu của bạn.</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm theo môn học, tên gia sư, hoặc khu vực..." 
            className="w-full rounded-sm border border-slate-300 bg-white py-4 px-6 text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {MOCK_TUTORS.map((tutor, idx) => (
            <motion.div 
              key={tutor.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 shadow-sm border border-slate-200 rounded-sm flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-32 shrink-0">
                <img src={tutor.image} alt={tutor.name} className="w-full h-auto object-cover aspect-[3/4] bg-slate-100" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-800 uppercase mb-1">
                        {tutor.name}
                      </h3>
                      <p className="text-slate-900 font-bold text-lg">{tutor.title}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-xl font-bold text-emerald-700">{tutor.price}</div>
                      <div className="text-sm text-slate-600 font-medium mt-1">
                        Đánh giá: {tutor.rating}/5 ({tutor.reviews} nhận xét)
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-0.5 w-full bg-slate-200 mb-4"></div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm text-slate-700 mb-4">
                    <div><span className="font-bold">Môn dạy:</span> {tutor.subject}</div>
                    <div><span className="font-bold">Hình thức:</span> {tutor.mode}</div>
                    <div><span className="font-bold">Khoảng cách:</span> {tutor.distance}</div>
                    <div><span className="font-bold">Xác thực:</span> {tutor.verified ? 'Đã xác thực hồ sơ (E-KYC)' : 'Chưa xác thực'}</div>
                    <div className="sm:col-span-2"><span className="font-bold">Học vấn:</span> {tutor.education}</div>
                    <div className="sm:col-span-2"><span className="font-bold">Kinh nghiệm:</span> {tutor.experience}</div>
                    <div className="sm:col-span-2"><span className="font-bold">Thành tích:</span> {tutor.achievements}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tutor.tags.map(tag => (
                      <span key={tag} className="inline-block border border-slate-300 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-100">
                  <Button asChild variant="outline" className="rounded-sm uppercase font-bold tracking-wider border-slate-300 text-slate-700 hover:bg-slate-50">
                    <Link to={`/profile/${tutor.id}`}>Xem hồ sơ</Link>
                  </Button>
                  <Button className="rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white" onClick={() => setIsLoginModalOpen(true)}>
                    Yêu cầu học thử
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
