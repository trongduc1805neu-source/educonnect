import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS, SUBJECTS, GRADES } from '../constants';

const MOCK_MATCHING_CLASSES = [
  {
    id: 1,
    subject: 'Toán - Lớp 10',
    currentStudents: 2,
    maxStudents: 4,
    location: 'Phường Dịch Vọng, Quận Cầu Giấy',
    schedule: 'Tối Thứ 3, Thứ 5 (19:00 - 21:00)',
    tuitionPerStudent: '100.000đ/buổi',
    description: 'Nhóm đang có 2 bạn học lực khá, cần tìm thêm 1-2 bạn để học ghép giảm học phí. Mục tiêu ôn thi Đại học.',
    author: 'Phụ huynh bé Minh',
    type: 'Tìm bạn học ghép'
  },
  {
    id: 2,
    subject: 'Tiếng Anh - Lớp 12',
    currentStudents: 1,
    maxStudents: 3,
    location: 'Học trực tuyến (Zoom)',
    schedule: 'Sáng Thứ 7, Chủ Nhật (09:00 - 10:30)',
    tuitionPerStudent: '150.000đ/buổi',
    description: 'Mình là học sinh lớp 12 cần tìm bạn học ghép tiếng Anh luyện thi Đại học để có môi trường luyện tập chung.',
    author: 'Học viên Lan Anh',
    type: 'Tìm bạn học ghép'
  },
  {
    id: 3,
    subject: 'Hóa - Lớp 10',
    currentStudents: 3,
    maxStudents: 5,
    location: 'Phường Láng Thượng, Quận Đống Đa',
    schedule: 'Tối Thứ 2, 4, 6 (18:00 - 20:00)',
    tuitionPerStudent: '200.000đ/buổi',
    description: 'Lớp do thầy Hoàng giảng dạy, hiện còn trống 2 chỗ. Ưu tiên các bạn đã có nền tảng cơ bản.',
    author: 'Gia sư Hoàng',
    type: 'Tuyển sinh viên'
  }
];

export function MatchClass() {
  const [activeTab, setActiveTab] = useState<'find' | 'create'>('find');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Trực tiếp');

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 px-4">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để tham gia"
        message="Vui lòng đăng nhập để có thể tham gia nhóm học này."
      />
      
      <div className="mt-8 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
          Ghép Lớp & Tìm Bạn Học
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
          />
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Kết nối với các học viên khác để tạo nhóm học chung, giúp tiết kiệm chi phí và tăng động lực học tập.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4">
        <Button 
          variant={activeTab === 'find' ? 'default' : 'outline'}
          onClick={() => setActiveTab('find')}
          className={`w-48 rounded-sm uppercase font-bold tracking-wider ${activeTab === 'find' ? 'bg-emerald-700 hover:bg-emerald-800 text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
        >
          Tìm lớp ghép
        </Button>
        <Button 
          variant={activeTab === 'create' ? 'default' : 'outline'}
          onClick={() => setActiveTab('create')}
          className={`w-48 rounded-sm uppercase font-bold tracking-wider ${activeTab === 'create' ? 'bg-emerald-700 hover:bg-emerald-800 text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}
        >
          Tạo yêu cầu ghép
        </Button>
      </div>

      {activeTab === 'find' && (
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Tìm theo môn học, khu vực..." 
              className="flex-1 rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
            />
            <select className="rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 bg-white sm:w-64">
              <option>Tất cả hình thức</option>
              <option>Trực tiếp</option>
              <option>Trực tuyến</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {MOCK_MATCHING_CLASSES.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 shadow-sm border border-slate-200 rounded-sm flex flex-col"
              >
                <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">{item.subject}</h3>
                  <span className={`inline-block px-3 py-1 border text-xs font-bold uppercase tracking-wider ${
                    item.type === 'Tìm bạn học ghép' 
                      ? 'border-amber-500 text-amber-600' 
                      : 'border-emerald-600 text-emerald-700'
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="flex justify-between items-end mb-4">
                  <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                    Đăng bởi: <span className="text-slate-900">{item.author}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-700">{item.tuitionPerStudent}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Dự kiến / học viên</div>
                  </div>
                </div>

                <p className="text-slate-700 text-sm mb-6 flex-1 leading-relaxed text-justify">{item.description}</p>

                <div className="grid grid-cols-1 gap-y-2 text-sm text-slate-700 mb-6 border border-slate-200 p-4 bg-slate-50">
                  <div><span className="font-bold">Sĩ số hiện tại:</span> {item.currentStudents}/{item.maxStudents} học viên</div>
                  <div><span className="font-bold">Địa điểm:</span> {item.location}</div>
                  <div><span className="font-bold">Lịch học:</span> {item.schedule}</div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                  <Button 
                    className="rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white" 
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    Tham gia ngay
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'create' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white p-8 shadow-sm border border-slate-200 rounded-sm"
        >
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-3 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">Tạo yêu cầu ghép lớp mới</h2>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Môn học</label>
                <select className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                  <option value="">Chọn môn học</option>
                  {SUBJECTS.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Cấp lớp</label>
                <select className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                  <option value="">Chọn lớp</option>
                  {GRADES.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Sĩ số hiện tại</label>
                <input type="number" min="1" defaultValue="1" className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Sĩ số mong muốn (Tối đa)</label>
                <input type="number" min="2" defaultValue="3" className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Hình thức học</label>
                <select 
                  className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="Trực tiếp">Trực tiếp</option>
                  <option value="Trực tuyến">Trực tuyến</option>
                </select>
              </div>
              {learningMode === 'Trực tiếp' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Khu vực</label>
                  <select className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50">
                    <option value="">Chọn khu vực</option>
                    {HANOI_WARDS.map((ward) => (
                      <option key={ward} value={ward}>{ward}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Mô tả chi tiết</label>
              <textarea rows={4} placeholder="Chia sẻ thêm về mục tiêu học tập, yêu cầu đối với bạn học cùng..." className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50 resize-none"></textarea>
            </div>

            <Button 
              type="button" 
              className="w-full py-6 text-lg mt-8 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white" 
              onClick={() => setIsLoginModalOpen(true)}
            >
              Đăng yêu cầu ghép lớp
            </Button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
