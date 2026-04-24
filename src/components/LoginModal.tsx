import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { X, User, GraduationCap, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  intendedRole?: 'student' | 'tutor';
}

export function LoginModal({ 
  isOpen, 
  onClose, 
  title = "Chào mừng trở lại.", 
  message = "Hãy lựa chọn không gian phù hợp với hành trình của bạn."
}: LoginModalProps) {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async (role: 'student' | 'tutor') => {
    try {
      setError(null);
      sessionStorage.setItem('intendedRole', role);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
      window.location.href = '/dashboard';
    } catch (err: any) {
      console.error("Google login error:", err);
      setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Lớp nền mờ (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-md"
          />
          
          {/* Khối Modal chính */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-paper rounded-[2rem] shadow-2xl overflow-hidden border border-primary-100"
          >
            <div className="p-8 sm:p-12 relative">
              
              {/* Hiệu ứng ánh sáng nghệ thuật ở góc */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-full blur-3xl opacity-80 -translate-y-1/2 translate-x-1/3"></div>
              
              {/* Nút Đóng (Close) tối giản */}
              <button 
                onClick={onClose}
                className="absolute right-6 top-6 p-2.5 rounded-full text-ink/30 hover:text-ink hover:bg-primary-50 transition-colors"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Tiêu đề & Lời dẫn */}
              <div className="text-center mb-10 relative z-10 mt-4">
                <h2 className="text-3xl font-heading text-ink mb-3 tracking-tight">{title}</h2>
                <p className="text-ink/50 text-[14px] font-light leading-relaxed max-w-[260px] mx-auto">{message}</p>
              </div>

              {/* Thông báo lỗi (Nếu có) */}
              {error && (
                <div className="mb-8 p-3 bg-accent-50 text-accent-600 text-[13px] rounded-xl text-center border border-accent-100 flex items-center justify-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              {/* Các nút Đăng nhập - Thiết kế như những tấm thẻ (Card) lựa chọn */}
              <div className="space-y-4 relative z-10">
                <button 
                  onClick={() => handleGoogleLogin('student')} 
                  className="w-full h-16 flex items-center justify-between px-6 rounded-2xl border border-primary-200 bg-white hover:bg-primary-50 hover:border-primary-300 text-ink shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      <User className="w-5 h-5 text-primary-700 stroke-[1.5]" />
                    </div>
                    <span className="font-semibold text-sm tracking-wide">Dành cho Học viên</span>
                  </div>
                  <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest group-hover:text-primary-700 transition-colors">
                    Google
                  </span>
                </button>
                
                <button 
                  onClick={() => handleGoogleLogin('tutor')} 
                  className="w-full h-16 flex items-center justify-between px-6 rounded-2xl border border-primary-200 bg-white hover:bg-primary-50 hover:border-primary-300 text-ink shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-white transition-colors">
                      <GraduationCap className="w-5 h-5 text-primary-700 stroke-[1.5]" />
                    </div>
                    <span className="font-semibold text-sm tracking-wide">Dành cho Người dạy</span>
                  </div>
                  <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest group-hover:text-primary-700 transition-colors">
                    Google
                  </span>
                </button>
              </div>
              
              {/* Footer & Pháp lý */}
              <div className="mt-8 pt-6 border-t border-primary-100/50 text-center relative z-10">
                <p className="text-[11px] text-ink/40 font-light">
                  Bằng việc đăng nhập, bạn đồng ý với <a href="#" className="text-primary-700 font-medium hover:underline editorial-link">Điều khoản</a> của EduConnect.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
