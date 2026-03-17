import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { HANOI_WARDS, SUBJECTS } from '../constants';

const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    subject: 'Toán - Lớp 9',
    rating: 4.9,
    reviews: 124,
    price: '200.000đ/h',
    distance: '2.5 km',
    mode: 'Trực tiếp tại nhà',
    verified: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    tags: ['Ôn thi vào 10', 'Lấy lại căn bản'],
    education: 'Đại học Sư phạm Hà Nội',
    experience: '5 năm kinh nghiệm',
    achievements: '90% học sinh đỗ NV1'
  },
  {
    id: 3,
    name: 'Lê Hoàng C',
    subject: 'Lý - Lớp 10',
    rating: 4.8,
    reviews: 56,
    price: '250.000đ/h',
    distance: '1.2 km',
    mode: 'Trực tiếp tại nhà',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tags: ['Nâng cao', 'Dạy dễ hiểu'],
    education: 'Đại học Bách khoa Hà Nội',
    experience: 'Thủ khoa đầu vào, 2 năm kinh nghiệm',
    achievements: 'Giúp học sinh tăng 2-3 điểm'
  }
];

export function FindInHomeTutor() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 pb-16">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-64 shrink-0 space-y-6">
        <div className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="border-b-2 border-emerald-800 pb-2 mb-6">
            <h2 className="font-bold text-slate-900 uppercase tracking-wider text-lg">Bộ lọc tìm kiếm</h2>
          </div>
          
          <div className="space-y-6">
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
              <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Khu vực</label>
              <select className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                <option value="">Tất cả khu vực</option>
                {HANOI_WARDS.map((ward) => (
                  <option key={ward} value={ward}>{ward}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-900 mb-2 block uppercase">Mức giá / giờ</label>
              <select className="w-full rounded-sm border border-slate-300 p-2.5 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                <option>Mọi mức giá</option>
                <option>&lt; 150.000đ</option>
                <option>150.000đ - 300.000đ</option>
                <option>&gt; 300.000đ</option>
              </select>
            </div>

            <Button className="w-full mt-4 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Áp dụng bộ lọc</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
            Tìm gia sư dạy kèm tại nhà
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h1>
          <p className="text-lg text-slate-600 font-medium">Đội ngũ gia sư chất lượng cao, sẵn sàng đến tận nhà giảng dạy trong khu vực của bạn.</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm theo môn học, tên gia sư, hoặc khu vực..." 
            className="w-full rounded-sm border border-slate-300 bg-white py-4 px-6 text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Tìm thấy {MOCK_TUTORS.length} gia sư phù hợp</h2>
          
          <div className="grid gap-6">
            {MOCK_TUTORS.map((tutor, idx) => (
              <motion.div 
                key={tutor.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 rounded-sm bg-white p-6 shadow-sm border border-slate-200 hover:border-emerald-700 transition-all"
              >
                <div className="shrink-0">
                  <img src={tutor.image} alt={tutor.name} className="h-32 w-32 rounded-sm object-cover border border-slate-200" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                          {tutor.name}
                          {tutor.verified && (
                            <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                              Đã xác thực
                            </span>
                          )}
                        </h3>
                        <p className="text-emerald-700 font-bold text-lg mt-1">{tutor.subject}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-slate-900">{tutor.price}</div>
                        <div className="text-sm font-bold text-slate-700 mt-1">
                          Đánh giá: <span className="text-emerald-700">{tutor.rating}/5.0</span> <span className="text-slate-500 font-medium">({tutor.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700 mb-4">
                      <div><span className="font-bold text-slate-900">Học vấn:</span> {tutor.education}</div>
                      <div><span className="font-bold text-slate-900">Kinh nghiệm:</span> {tutor.experience}</div>
                      <div><span className="font-bold text-slate-900">Thành tích:</span> {tutor.achievements}</div>
                      <div><span className="font-bold text-slate-900">Hình thức:</span> {tutor.mode}</div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutor.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-sm bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 uppercase tracking-wider border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col justify-end gap-3 mt-auto pt-4 border-t border-slate-100">
                    <Button asChild variant="outline" className="w-full sm:w-auto rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                      <Link to={`/profile/${tutor.id}`}>Xem hồ sơ chi tiết</Link>
                    </Button>
                    <Button className="w-full sm:w-auto rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">
                      Đặt lịch học
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
