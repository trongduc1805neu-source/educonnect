import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export function BecomeTutor() {
  const { user } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: user?.email || '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Vui lòng đăng nhập để gửi hồ sơ.');
      return;
    }
    if (!file) {
      setError('Vui lòng tải lên CV của bạn.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In a real app, we would upload the file to Firebase Storage here
      // and get the download URL. For now, we just save the file name.
      
      const applicationData = {
        userId: user.uid,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        cvFileName: file.name,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'tutor_applications'), applicationData);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting application:', err);
      setError(err.message || 'Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-24 h-24 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-emerald-200"
        >
          <span className="text-4xl font-bold">✓</span>
        </motion.div>
        <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-wider">Đăng ký thành công!</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Hồ sơ của bạn đã được gửi đi. Chúng tôi sẽ xem xét và liên hệ với bạn trong thời gian sớm nhất.
        </p>
        <Button onClick={() => window.location.href = '/'} className="mt-8 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">
          Về trang chủ
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-16 px-4">
      <div className="mt-8 mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
          Trở Thành Gia Sư
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
          />
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Gia nhập cộng đồng gia sư chất lượng cao. Tải CV của bạn lên, chúng tôi sẽ lo phần còn lại.
        </p>
      </div>

      {!user && (
        <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 text-amber-800 font-medium text-center">
          Bạn cần đăng nhập để có thể gửi hồ sơ đăng ký làm gia sư. Vui lòng đăng nhập ở góc phải màn hình.
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-sm p-8 md:p-12 shadow-sm border border-slate-200"
      >
        <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-3 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider text-center">Thông tin ứng viên</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-medium text-center">
              {error}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Họ và tên</label>
              <input 
                required 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Nguyễn Văn A" 
                className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Số điện thoại</label>
              <input 
                required 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="0901234567" 
                className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Email</label>
              <input 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="nguyenvana@example.com" 
                className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Tải lên CV (PDF, DOCX)</label>
            <div 
              className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-sm transition-colors cursor-pointer ${dragActive ? 'border-emerald-700 bg-emerald-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'}`}
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
              {file ? (
                <p className="text-lg font-bold text-emerald-800">{file.name}</p>
              ) : (
                <>
                  <p className="mb-2 text-sm text-slate-600"><span className="font-bold text-emerald-700 uppercase">Nhấn để tải lên</span> hoặc kéo thả file vào đây</p>
                  <p className="text-xs text-slate-500 font-medium">Hệ thống sẽ tự động trích xuất thông tin từ CV của bạn</p>
                </>
              )}
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white" disabled={loading || !user}>
            {loading ? 'Đang gửi...' : 'Gửi hồ sơ đăng ký'}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
