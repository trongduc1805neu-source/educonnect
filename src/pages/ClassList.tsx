import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, MapPin, Clock, BookOpen, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LoginModal } from '../components/LoginModal';

const MOCK_CLASSES = [
  {
    id: 1,
    title: 'Tìm gia sư Toán lớp 9 ôn thi vào 10',
    subject: 'Toán học',
    grade: 'Lớp 9',
    location: 'Quận Cầu Giấy, Hà Nội',
    mode: 'Trực tiếp tại nhà',
    schedule: '2 buổi/tuần (Tối T3, T5)',
    fee: '250.000đ/buổi',
    status: 'Đang tìm gia sư',
    postedAt: '2 giờ trước',
    requirements: 'Cần sinh viên Sư phạm Toán hoặc Bách Khoa, có kinh nghiệm ôn thi vào 10, nhiệt tình, nghiêm khắc.'
  },
  {
    id: 2,
    title: 'Luyện giao tiếp Tiếng Anh cho người đi làm',
    subject: 'Tiếng Anh',
    grade: 'Người đi làm',
    location: 'Học trực tuyến (Online)',
    mode: 'Trực tuyến',
    schedule: '3 buổi/tuần (Lịch linh hoạt)',
    fee: '300.000đ/buổi',
    status: 'Đang tìm gia sư',
    postedAt: '5 giờ trước',
    requirements: 'Yêu cầu phát âm chuẩn, có chứng chỉ IELTS 7.5+ hoặc TOEIC 900+, ưu tiên người có kinh nghiệm làm việc môi trường quốc tế.'
  },
  {
    id: 3,
    title: 'Kèm Hóa lớp 12 luyện thi Đại học khối A',
    subject: 'Hóa học',
    grade: 'Lớp 12',
    location: 'Quận 1, TP.HCM',
    mode: 'Trực tiếp tại nhà',
    schedule: '2 buổi/tuần (Sáng T7, CN)',
    fee: '350.000đ/buổi',
    status: 'Đang tìm gia sư',
    postedAt: '1 ngày trước',
    requirements: 'Cần giáo viên đang giảng dạy tại các trường THPT hoặc sinh viên Y Dược/Bách Khoa điểm thi Đại học môn Hóa > 9.'
  }
];

export function ClassList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để nhận lớp"
        message="Vui lòng đăng nhập với tư cách Gia sư để có thể nhận lớp này."
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Danh sách lớp học mới nhất</h1>
          <p className="text-slate-600 mt-1">Hàng trăm lớp học mới được cập nhật mỗi ngày. Nhận lớp ngay không cần đặt cọc trước!</p>
        </div>
        <Button className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white">
          Đăng ký nhận lớp
        </Button>
      </div>

      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Tìm kiếm lớp học theo môn, khu vực..." 
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6">
        {MOCK_CLASSES.map((cls, idx) => (
          <motion.div 
            key={cls.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
                    {cls.status}
                  </span>
                  <span className="text-sm text-slate-400">{cls.postedAt}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{cls.title}</h3>
                
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">Môn học:</span> {cls.subject} ({cls.grade})
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">Khu vực:</span> {cls.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">Hình thức:</span> {cls.mode}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">Lịch học:</span> {cls.schedule}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-sm font-semibold text-slate-900 mb-1">Yêu cầu:</div>
                  <p className="text-sm text-slate-600">{cls.requirements}</p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <div className="mb-4 md:mb-0">
                  <div className="text-sm text-slate-500 font-medium mb-1">Mức phí dự kiến</div>
                  <div className="text-2xl font-bold text-indigo-600">{cls.fee}</div>
                </div>
                <Button className="w-full md:w-auto" onClick={() => setIsLoginModalOpen(true)}>Nhận lớp ngay</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
