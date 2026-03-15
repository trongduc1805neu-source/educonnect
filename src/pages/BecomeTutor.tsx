import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export function BecomeTutor() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h2 className="font-heading text-3xl font-bold text-slate-900">Đăng ký thành công!</h2>
        <p className="text-lg text-slate-600">
          Hệ thống đã tự động trích xuất thông tin từ CV của bạn và tạo tài khoản. Vui lòng kiểm tra email để xác thực và hoàn tất hồ sơ.
        </p>
        <Button onClick={() => window.location.href = '/'} className="mt-8">
          Về trang chủ
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-16">
      <div className="text-center space-y-4">
        <h1 className="font-heading text-4xl font-bold text-slate-900">Trở Thành Gia Sư</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Gia nhập cộng đồng gia sư chất lượng cao. Tải CV của bạn lên, chúng tôi sẽ lo phần còn lại.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Họ và tên</label>
              <input required type="text" placeholder="Nguyễn Văn A" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Số điện thoại</label>
              <input required type="tel" placeholder="0901234567" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input required type="email" placeholder="nguyenvana@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tải lên CV (PDF, DOCX)</label>
            <div 
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl transition-colors cursor-pointer ${dragActive ? 'border-primary-500 bg-primary-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
            >
              <input 
                ref={inputRef}
                type="file" 
                accept=".pdf,.doc,.docx" 
                className="hidden" 
                onChange={handleChange}
              />
              <UploadCloud className={`w-10 h-10 mb-3 ${dragActive ? 'text-primary-500' : 'text-slate-400'}`} />
              {file ? (
                <p className="text-sm font-medium text-primary-600">{file.name}</p>
              ) : (
                <>
                  <p className="mb-2 text-sm text-slate-500"><span className="font-semibold text-primary-600">Nhấn để tải lên</span> hoặc kéo thả file vào đây</p>
                  <p className="text-xs text-slate-400">Hệ thống sẽ tự động trích xuất thông tin từ CV của bạn</p>
                </>
              )}
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full text-lg py-6">
            Gửi hồ sơ đăng ký
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
