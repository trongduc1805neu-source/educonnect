import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function LoginModal({ isOpen, onClose, title = "Đăng nhập để tiếp tục", message = "Vui lòng đăng nhập hoặc tạo tài khoản để sử dụng tính năng này." }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <button 
                onClick={onClose}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
                <p className="text-slate-600 text-sm">{message}</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ và tên</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="email" placeholder="email@example.com" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Quên mật khẩu?</a>
                  </div>
                )}

                <Button type="submit" className="w-full py-6 text-base mt-2">
                  {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-600">
                {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 font-medium text-indigo-600 hover:text-indigo-700"
                >
                  {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
