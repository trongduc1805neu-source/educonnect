import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { HANOI_WARDS, SUBJECTS } from '../constants';
import { getSubjectColor } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Nguyễn Hải Đăng',
    subject: 'Toán - Lớp 9',
    rating: 4.9,
    reviews: 124,
    price: '200.000đ/h',
    distance: '2.5 km',
    mode: 'Trực tiếp tại nhà',
    verified: true,
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop',
    tags: ['Ôn thi vào 10', 'Lấy lại căn bản'],
    education: 'ĐH Sư phạm Hà Nội - Khoa Toán',
    experience: '4 năm kinh nghiệm luyện thi',
    achievements: '95% học sinh đỗ NV1 trường công lập'
  },
  {
    id: 3,
    name: 'Lê Minh Khôi',
    subject: 'Lý - Lớp 10',
    rating: 4.8,
    reviews: 56,
    price: '250.000đ/h',
    distance: '1.2 km',
    mode: 'Trực tiếp tại nhà',
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tags: ['Nâng cao', 'Dạy dễ hiểu'],
    education: 'ĐH Bách khoa Hà Nội',
    experience: 'Thủ khoa đầu vào, 2 năm kinh nghiệm',
    achievements: 'Giúp học sinh tăng trung bình 2-3 điểm'
  }
];

export function FindInHomeTutor() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 pb-20 mt-4">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 shrink-0 space-y-6">
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-zinc-200 shadow-sm">
          <div className="border-b-2 border-zinc-200 pb-4 mb-6">
            <h2 className="font-extrabold text-zinc-900 uppercase tracking-wider text-base sm:text-lg flex items-center gap-2">
              <FontAwesomeIcon icon={['fas', 'filter']} className="text-xl" /> Bộ lọc tìm kiếm
            </h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-zinc-600 mb-2 block uppercase">Môn học</label>
              <select className="w-full rounded-xl border border-zinc-200 p-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-zinc-50/50 text-zinc-900 font-medium transition-all cursor-pointer">
                <option value="" className="text-zinc-500">Tất cả môn học</option>
                {SUBJECTS.map(subject => (
                  <option key={subject} value={subject} className="text-zinc-900">{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-zinc-600 mb-2 block uppercase">Khu vực</label>
              <select className="w-full rounded-xl border border-zinc-200 p-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-zinc-50/50 text-zinc-900 font-medium transition-all cursor-pointer">
                <option value="" className="text-zinc-500">Tất cả khu vực</option>
                {HANOI_WARDS.map((ward) => (
                  <option key={ward} value={ward} className="text-zinc-900">{ward}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-zinc-600 mb-2 block uppercase">Mức giá / giờ</label>
              <select className="w-full rounded-xl border border-zinc-200 p-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 bg-zinc-50/50 text-zinc-900 font-medium transition-all cursor-pointer">
                <option className="text-zinc-500">Mọi mức giá</option>
                <option className="text-zinc-900">&lt; 150.000đ</option>
                <option className="text-zinc-900">150.000đ - 300.000đ</option>
                <option className="text-zinc-900">&gt; 300.000đ</option>
              </select>
            </div>

            <Button className="w-full mt-6 rounded-xl font-bold text-base bg-zinc-900 hover:bg-zinc-800 text-white shadow-sm hover:shadow-sm transition-all py-6">
              Áp dụng bộ lọc
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <div className="mb-10 bg-zinc-50 p-6 sm:p-8 rounded-2xl border border-zinc-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-50"></div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4 relative z-10">
            Tìm gia sư <span className=" ">dạy kèm tại nhà</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-medium relative z-10 max-w-2xl">Đội ngũ gia sư chất lượng cao, sẵn sàng đến tận nhà giảng dạy trong khu vực của bạn.</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Tìm kiếm theo môn học, tên gia sư, hoặc khu vực..." 
            className="w-full rounded-xl border-2 border-zinc-200 bg-white py-4 sm:py-5 px-6 sm:px-8 text-zinc-900 shadow-sm outline-none focus:border-zinc-900 focus:ring-4 focus:ring-zinc-100 transition-all text-base sm:text-lg font-medium pr-16"
          />
          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-zinc-800 transition-colors">
            <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 tracking-tight">Tìm thấy <span className="text-zinc-900">{MOCK_TUTORS.length}</span> gia sư phù hợp</h2>
            <div className="text-sm font-bold text-zinc-500 bg-zinc-100 px-4 py-2 rounded-full self-start sm:self-auto">Sắp xếp theo: Mặc định</div>
          </div>
          
          <div className="grid gap-8">
            {MOCK_TUTORS.map((tutor, idx) => {
              const subjectName = tutor.subject.split(' - ')[0];
              const subjectColor = getSubjectColor(subjectName);
              return (
              <motion.div 
                key={tutor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-2xl bg-white p-6 sm:p-8 border border-zinc-200 shadow-sm hover:shadow-sm transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50     rounded-bl-[4rem] -z-10 transition-transform group-hover:scale-110"></div>
                
                <div className="shrink-0 relative self-center sm:self-start">
                  <img src={tutor.image} alt={tutor.name} className="h-32 w-32 sm:h-40 sm:w-40 rounded-xl object-cover border-4 border-white shadow-sm" />
                  {tutor.verified && (
                    <div className="absolute -bottom-3 -right-3 bg-zinc-1000 text-white w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-sm" title="Đã xác thực">
                      ✓
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight group-hover:text-zinc-900 transition-colors mb-2">
                          {tutor.name}
                        </h3>
                        <span className={`inline-block px-4 py-1.5 rounded-xl text-sm font-bold border ${subjectColor}`}>{tutor.subject}</span>
                      </div>
                      <div className="sm:text-right bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-center sm:text-left">
                        <div className="text-2xl font-extrabold text-blue-600 mb-1">{tutor.price}</div>
                        <div className="flex items-center justify-center sm:justify-end gap-1.5 text-sm font-bold text-zinc-700">
                          <span className="text-zinc-600 text-lg">★</span>
                          <span>{tutor.rating}/5.0</span>
                          <span className="text-zinc-400 font-medium">({tutor.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-zinc-600 mb-6 bg-zinc-50/50 p-4 rounded-2xl border border-zinc-100">
                      <div className="flex items-start gap-2"><span className="text-lg leading-none w-6 text-center"><FontAwesomeIcon icon={['fas', 'graduation-cap']} /></span> <span className="font-medium">{tutor.education}</span></div>
                      <div className="flex items-start gap-2"><span className="text-lg leading-none w-6 text-center"><FontAwesomeIcon icon={['fas', 'briefcase']} /></span> <span className="font-medium">{tutor.experience}</span></div>
                      <div className="flex items-start gap-2"><span className="text-lg leading-none w-6 text-center"><FontAwesomeIcon icon={['fas', 'trophy']} /></span> <span className="font-medium">{tutor.achievements}</span></div>
                      <div className="flex items-start gap-2"><span className="text-lg leading-none w-6 text-center"><FontAwesomeIcon icon={['fas', 'location-dot']} /></span> <span className="font-medium">{tutor.mode} ({tutor.distance})</span></div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
                      {tutor.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-xl bg-zinc-50 px-3 py-1.5 text-xs font-bold text-zinc-900 border border-zinc-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col justify-end gap-4 mt-auto pt-6 border-t border-zinc-200">
                    <Button asChild variant="outline" className="w-full sm:w-auto rounded-xl font-bold text-base border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 py-6 px-8 transition-colors">
                      <Link to={`/profile/${tutor.id}`}>Xem hồ sơ</Link>
                    </Button>
                    <Button className="w-full sm:w-auto rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-sm transition-all py-6 px-8">
                      Liên hệ với giáo viên
                    </Button>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
