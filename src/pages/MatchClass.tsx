import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, BookOpen, Clock, PlusCircle, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { LoginModal } from '../components/LoginModal';
import { HANOI_WARDS } from '../constants';

const MOCK_MATCHING_CLASSES = [
  {
    id: 1,
    subject: 'Toán học - Lớp 10',
    currentStudents: 2,
    maxStudents: 4,
    location: 'Quận Cầu Giấy, Hà Nội',
    schedule: 'Tối Thứ 3, Thứ 5 (19:00 - 21:00)',
    tuitionPerStudent: '100.000đ/buổi',
    description: 'Nhóm đang có 2 bạn học lực khá, cần tìm thêm 1-2 bạn để học ghép giảm học phí. Mục tiêu ôn thi Đại học.',
    author: 'Phụ huynh bé Minh',
    type: 'Tìm bạn học ghép'
  },
  {
    id: 2,
    subject: 'Tiếng Anh Giao tiếp',
    currentStudents: 1,
    maxStudents: 3,
    location: 'Học trực tuyến (Zoom)',
    schedule: 'Sáng Thứ 7, Chủ Nhật (09:00 - 10:30)',
    tuitionPerStudent: '150.000đ/buổi',
    description: 'Mình là sinh viên năm 2 cần tìm bạn học ghép tiếng Anh giao tiếp với giáo viên bản ngữ để có môi trường luyện tập.',
    author: 'Học viên Lan Anh',
    type: 'Tìm bạn học ghép'
  },
  {
    id: 3,
    subject: 'Luyện thi IELTS 6.5+',
    currentStudents: 3,
    maxStudents: 5,
    location: 'Quận 1, TP.HCM',
    schedule: 'Tối Thứ 2, 4, 6 (18:00 - 20:00)',
    tuitionPerStudent: '200.000đ/buổi',
    description: 'Lớp do thầy Hoàng (IELTS 8.0) giảng dạy, hiện còn trống 2 chỗ. Ưu tiên các bạn đã có nền tảng cơ bản.',
    author: 'Gia sư Hoàng',
    type: 'Tuyển sinh viên'
  }
];

export function MatchClass() {
  const [activeTab, setActiveTab] = useState<'find' | 'create'>('find');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState('Trực tiếp');

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để tham gia"
        message="Vui lòng đăng nhập để có thể tham gia nhóm học này."
      />
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Ghép Lớp & Tìm Bạn Học</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Kết nối với các học viên khác để tạo nhóm học chung, giúp tiết kiệm chi phí và tăng động lực học tập.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button 
          variant={activeTab === 'find' ? 'default' : 'outline'}
          onClick={() => setActiveTab('find')}
          className="w-48"
        >
          <Search className="w-4 h-4 mr-2" />
          Tìm lớp ghép
        </Button>
        <Button 
          variant={activeTab === 'create' ? 'default' : 'outline'}
          onClick={() => setActiveTab('create')}
          className="w-48"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Tạo yêu cầu ghép
        </Button>
      </div>

      {activeTab === 'find' && (
        <div className="space-y-6">
          <div className="flex gap-4 mb-8">
            <input 
              type="text" 
              placeholder="Tìm theo môn học, khu vực..." 
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 bg-white">
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
                className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:border-indigo-100 transition-colors flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.type === 'Tìm bạn học ghép' 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{item.subject}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">{item.tuitionPerStudent}</div>
                    <div className="text-xs text-slate-500">Dự kiến / học viên</div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 flex-1">{item.description}</p>

                <div className="space-y-3 text-sm text-slate-600 mb-6 bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-500" />
                    <span>Sĩ số: <strong className="text-slate-900">{item.currentStudents}/{item.maxStudents}</strong> học viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>{item.schedule}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="text-sm font-medium text-slate-900">
                    Đăng bởi: <span className="text-slate-600 font-normal">{item.author}</span>
                  </div>
                  <Button size="sm" onClick={() => setIsLoginModalOpen(true)}>Tham gia ngay</Button>
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
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Tạo yêu cầu ghép lớp mới</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Môn học / Cấp lớp</label>
              <input type="text" placeholder="VD: Toán học - Lớp 10" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sĩ số hiện tại</label>
                <input type="number" min="1" defaultValue="1" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sĩ số mong muốn (Tối đa)</label>
                <input type="number" min="2" defaultValue="3" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Hình thức học</label>
                <select 
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="Trực tiếp">Trực tiếp</option>
                  <option value="Trực tuyến">Trực tuyến</option>
                </select>
              </div>
              {learningMode === 'Trực tiếp' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Khu vực</label>
                  <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 bg-white">
                    <option value="">Chọn khu vực</option>
                    {HANOI_WARDS.map((ward) => (
                      <option key={ward} value={ward}>{ward}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả chi tiết</label>
              <textarea rows={4} placeholder="Chia sẻ thêm về mục tiêu học tập, yêu cầu đối với bạn học cùng..." className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 resize-none"></textarea>
            </div>

            <Button type="button" className="w-full py-6 text-lg mt-4" onClick={() => setIsLoginModalOpen(true)}>Đăng yêu cầu ghép lớp</Button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
