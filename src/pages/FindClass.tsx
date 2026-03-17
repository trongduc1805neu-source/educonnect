import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { HANOI_WARDS, SUBJECTS, GRADES } from '../constants';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export function FindClass() {
  const { user } = useAuth();
  const [learningMode, setLearningMode] = useState('Trực tiếp tại nhà');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [ward, setWard] = useState('');
  const [sessionsPerWeek, setSessionsPerWeek] = useState('2 buổi/tuần');
  const [expectedFee, setExpectedFee] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('Vui lòng đăng nhập để gửi yêu cầu tìm gia sư.');
      return;
    }

    if (!subject || !grade || !learningMode || !sessionsPerWeek) {
      setError('Vui lòng điền đầy đủ các trường bắt buộc (*).');
      return;
    }

    if (learningMode !== 'Trực tuyến (Online)' && !ward) {
      setError('Vui lòng chọn khu vực cho hình thức học trực tiếp.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, 'class_requests'), {
        userId: user.uid,
        subject,
        grade,
        learningMode,
        ward: learningMode !== 'Trực tuyến (Online)' ? ward : null,
        sessionsPerWeek,
        expectedFee: expectedFee || null,
        additionalRequirements: additionalRequirements || null,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });

      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting class request:', err);
      setError('Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto pb-16 pt-8 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-sm p-8 shadow-sm border border-slate-200 text-center space-y-6"
        >
          <div className="w-24 h-24 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-emerald-200">
            <span className="text-4xl font-bold">✓</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2 uppercase tracking-wider">Gửi yêu cầu thành công!</h2>
            <p className="text-slate-600 leading-relaxed">
              Cảm ơn bạn đã tin tưởng EduConnect. Hệ thống AI của chúng tôi đang tiến hành phân tích yêu cầu và sẽ ghép nối bạn với những gia sư phù hợp nhất.
            </p>
          </div>
          <div className="bg-slate-50 rounded-sm p-6 text-left space-y-4 border border-slate-200">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">Các bước tiếp theo:</h3>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-700">01.</span>
                <p>Hệ thống sẽ gửi danh sách gia sư đề xuất qua email và thông báo trên ứng dụng trong vòng 24h.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-700">02.</span>
                <p>Bạn có thể xem hồ sơ chi tiết và chọn gia sư ưng ý nhất.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-emerald-700">03.</span>
                <p>Tiến hành học thử 1 buổi (miễn phí) trước khi quyết định học chính thức.</p>
              </li>
            </ul>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="w-full sm:w-auto">
              <Button className="w-full rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Về trang quản lý</Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50" onClick={() => {
              setIsSuccess(false);
              setSubject('');
              setGrade('');
              setWard('');
              setExpectedFee('');
              setAdditionalRequirements('');
            }}>
              Đăng yêu cầu khác
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-16 px-4">
      <div className="text-center space-y-4 mb-12 mt-8">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
          Đăng yêu cầu Tìm Lớp / Tìm Gia Sư
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
          />
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Điền thông tin chi tiết về nhu cầu học tập của bạn. Hệ thống AI của chúng tôi sẽ tự động ghép nối bạn với những gia sư phù hợp nhất trong vòng 24h.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-sm bg-white p-8 md:p-12 shadow-sm border border-slate-200"
      >
        <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-3 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider text-center">Phiếu Yêu Cầu Gia Sư</h2>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-medium text-center">
              {error}
            </div>
          )}

          {!user && (
            <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 text-amber-800 font-medium text-center">
              Bạn cần đăng nhập để có thể gửi yêu cầu tìm gia sư. Vui lòng đăng nhập ở góc phải màn hình.
            </div>
          )}

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2">
              Thông tin môn học
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Môn học cần tìm *</label>
                <select 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                >
                  <option value="">Chọn môn học</option>
                  {SUBJECTS.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Lớp / Trình độ *</label>
                <select 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                >
                  <option value="">Chọn lớp</option>
                  {GRADES.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2 mt-8">
              Hình thức & Địa điểm
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Hình thức học *</label>
                <select 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                  required
                >
                  <option value="Trực tiếp tại nhà">Trực tiếp tại nhà</option>
                  <option value="Trực tuyến (Online)">Trực tuyến (Online)</option>
                  <option value="Linh hoạt cả hai">Linh hoạt cả hai</option>
                </select>
              </div>
              {learningMode !== 'Trực tuyến (Online)' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Khu vực *</label>
                  <select 
                    className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    required={learningMode !== 'Trực tuyến (Online)'}
                  >
                    <option value="">Chọn khu vực</option>
                    {HANOI_WARDS.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2 mt-8">
              Thời gian & Học phí
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Số buổi / tuần *</label>
                <select 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(e.target.value)}
                  required
                >
                  <option value="1 buổi/tuần">1 buổi/tuần</option>
                  <option value="2 buổi/tuần">2 buổi/tuần</option>
                  <option value="3 buổi/tuần">3 buổi/tuần</option>
                  <option value="Nhiều hơn">Nhiều hơn</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Mức học phí dự kiến (VNĐ/buổi)</label>
                <input 
                  type="text" 
                  placeholder="VD: 200.000 - 250.000" 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" 
                  value={expectedFee}
                  onChange={(e) => setExpectedFee(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-2 mt-8">
              Yêu cầu thêm
            </h3>
            
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Mô tả chi tiết yêu cầu về gia sư</label>
              <textarea 
                rows={4} 
                placeholder="VD: Cần gia sư nữ, sinh viên năm 3 trở lên trường ĐH Sư Phạm, kiên nhẫn vì cháu hơi chậm..." 
                className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 resize-none bg-slate-50"
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="pt-8">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg py-6 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white"
              disabled={isSubmitting || !user}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Tìm Gia Sư'}
            </Button>
            <p className="text-center text-xs text-slate-500 mt-4 font-medium">
              Bằng việc gửi yêu cầu, bạn đồng ý với các điều khoản dịch vụ và chính sách bảo mật của EduConnect VN.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
