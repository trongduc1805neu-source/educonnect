import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Clock, FileText, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { HANOI_WARDS } from '../constants';

export function FindClass() {
  const [learningMode, setLearningMode] = useState('Trực tiếp tại nhà');

  return (
    <div className="max-w-3xl mx-auto pb-16">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Đăng yêu cầu Tìm Lớp / Tìm Gia Sư</h1>
        <p className="text-slate-600">
          Điền thông tin chi tiết về nhu cầu học tập của bạn. Hệ thống AI của chúng tôi sẽ tự động ghép nối bạn với những gia sư phù hợp nhất trong vòng 24h.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
      >
        <form className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <BookOpen className="h-5 w-5 text-indigo-600" /> Thông tin môn học
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Môn học cần tìm *</label>
                <input type="text" placeholder="VD: Toán, Tiếng Anh, Piano..." className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Lớp / Trình độ *</label>
                <input type="text" placeholder="VD: Lớp 9, IELTS 6.5..." className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2 mt-8">
              <MapPin className="h-5 w-5 text-indigo-600" /> Hình thức & Địa điểm
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Hình thức học *</label>
                <select 
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="Trực tiếp tại nhà">Trực tiếp tại nhà</option>
                  <option value="Trực tuyến (Online)">Trực tuyến (Online)</option>
                  <option value="Linh hoạt cả hai">Linh hoạt cả hai</option>
                </select>
              </div>
              {learningMode !== 'Trực tuyến (Online)' && (
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Khu vực *</label>
                  <select className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    <option value="">Chọn khu vực</option>
                    {HANOI_WARDS.map((ward) => (
                      <option key={ward} value={ward}>{ward}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2 mt-8">
              <Clock className="h-5 w-5 text-indigo-600" /> Thời gian & Học phí
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Số buổi / tuần *</label>
                <select className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option>1 buổi/tuần</option>
                  <option>2 buổi/tuần</option>
                  <option>3 buổi/tuần</option>
                  <option>Nhiều hơn</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Mức học phí dự kiến (VNĐ/buổi)</label>
                <input type="text" placeholder="VD: 200.000 - 250.000" className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2 mt-8">
              <FileText className="h-5 w-5 text-indigo-600" /> Yêu cầu thêm
            </h3>
            
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">Mô tả chi tiết yêu cầu về gia sư (Giới tính, kinh nghiệm, trường đại học...)</label>
              <textarea 
                rows={4} 
                placeholder="VD: Cần gia sư nữ, sinh viên năm 3 trở lên trường ĐH Sư Phạm, kiên nhẫn vì cháu hơi chậm..." 
                className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-6">
            <Button size="lg" className="w-full text-base h-12">
              <Send className="h-5 w-5 mr-2" /> Gửi Yêu Cầu Tìm Gia Sư
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Bằng việc gửi yêu cầu, bạn đồng ý với các điều khoản dịch vụ và chính sách bảo mật của EduConnect VN.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
