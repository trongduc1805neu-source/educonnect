import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  Sparkles,
  UploadCloud,
  FileText,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export function BecomeTutor() {
  const { user } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: user?.email || "",
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("Vui lòng đăng nhập để gửi hồ sơ.");
      return;
    }
    if (!file) {
      setError("Vui lòng chia sẻ bản tóm tắt hành trình (CV) của bạn.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In a real app, upload file to Firebase Storage and get URL.
      const applicationData = {
        userId: user.uid,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        cvFileName: file.name,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "tutor_applications"), applicationData);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting application:", err);
      setError(err.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  // MÀN HÌNH THÀNH CÔNG (Success State) - Thiết kế như một tấm thiệp tri ân
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto pb-24 pt-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FDFBF7] rounded-3xl p-12 lg:p-16 border border-primary-100 paper-shadow text-center relative overflow-hidden"
        >
          {/* Họa tiết trang trí góc */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h2 className="text-4xl font-heading text-ink mb-4">
              Lời chào mừng đã được gửi đi.
            </h2>
            <p className="text-ink/60 leading-relaxed font-light text-lg max-w-md mx-auto mb-10">
              Cảm ơn bạn đã lựa chọn trở thành một phần của EduConnect. Ban biên
              tập chuyên môn sẽ đọc kỹ hồ sơ và phản hồi bạn qua thư điện tử
              trong thời gian sớm nhất.
            </p>
            <Button asChild className="tracking-widest text-xs h-12 px-8">
              <Link to="/">TRỞ VỀ TRANG CHỦ</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // MÀN HÌNH ĐIỀN FORM (Main State)
  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-24 px-6 mt-8">
      {/* Header - Phong cách Editorial */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-heading text-ink leading-tight mb-6">
          Trở thành{" "}
          <span className="italic text-primary-700 font-light">
            người dẫn đường.
          </span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          Gia nhập mạng lưới giáo dục tinh hoa. Hãy để câu chuyện, kinh nghiệm
          và lòng nhiệt thành của bạn chạm đến những học viên đang cần bạn nhất.
        </p>
      </div>

      {/* Cảnh báo chưa đăng nhập - Nhẹ nhàng, không dùng màu vàng gắt */}
      {!user && (
        <div className="bg-paper border-l-2 border-accent-500 p-6 flex items-start sm:items-center gap-4 text-ink/80 font-light">
          <AlertCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Danh tính là nền tảng của sự tin cậy. Vui lòng đăng nhập trước khi
            gửi hồ sơ để chúng tôi có thể bảo vệ quyền lợi của bạn.
          </p>
        </div>
      )}

      {/* Form Đăng ký */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#FDFBF7] rounded-3xl p-8 lg:p-14 border border-primary-100 paper-shadow relative"
      >
        <div className="mb-12 pb-6 border-b border-primary-100">
          <h2 className="text-2xl font-heading text-ink">
            Bản giới thiệu bản thân
          </h2>
          <p className="text-ink/50 font-light mt-2 text-sm">
            Những thông tin này sẽ được bảo mật tuyệt đối bởi đội ngũ
            EduConnect.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {error && (
            <div className="bg-accent-50 text-accent-700 px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-3">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-10">
            {/* Input fields phong cách biểu mẫu giấy */}
            <div>
              <label className="block text-[10px] font-bold text-ink/40 uppercase tracking-[0.2em] mb-2">
                Danh tính của bạn <span className="text-accent-500">*</span>
              </label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="VD: Nguyễn Văn A"
                className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink text-[15px] focus:ring-0 focus:border-primary-700 placeholder:text-ink/20 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-ink/40 uppercase tracking-[0.2em] mb-2">
                Số điện thoại liên lạc{" "}
                <span className="text-accent-500">*</span>
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="VD: 090 123 4567"
                className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink text-[15px] focus:ring-0 focus:border-primary-700 placeholder:text-ink/20 transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold text-ink/40 uppercase tracking-[0.2em] mb-2">
                Thư điện tử (Email) <span className="text-accent-500">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="VD: nguyenvana@example.com"
                className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink text-[15px] focus:ring-0 focus:border-primary-700 placeholder:text-ink/20 transition-colors"
              />
            </div>
          </div>

          <div className="pt-6">
            <label className="block text-[10px] font-bold text-ink/40 uppercase tracking-[0.2em] mb-4">
              Bản tóm tắt hành trình (CV){" "}
              <span className="text-accent-500">*</span>
            </label>

            {/* Vùng Drop file thanh lịch */}
            <div
              className={`relative flex flex-col items-center justify-center w-full h-48 border-px border-dashed rounded-2xl transition-all cursor-pointer ${
                dragActive
                  ? "border-primary-700 bg-primary-50/50"
                  : "border-primary-200 bg-paper/50 hover:bg-primary-50/30 hover:border-primary-300"
              }`}
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
                <div className="text-center px-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <p className="text-sm font-semibold text-ink truncate max-w-xs mx-auto">
                    {file.name}
                  </p>
                  <p className="text-[11px] text-ink/40 mt-1 uppercase tracking-widest">
                    Nhấn để thay đổi tập tin
                  </p>
                </div>
              ) : (
                <div className="text-center px-4">
                  <div className="w-12 h-12 bg-[#FDFBF7] text-ink/30 border border-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 paper-shadow">
                    <UploadCloud className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <p className="text-sm text-ink/70 font-light mb-1">
                    Nhấn để tải lên hoặc kéo thả tập tin
                  </p>
                  <p className="text-[11px] text-ink/40 uppercase tracking-widest">
                    Định dạng hỗ trợ: PDF, DOCX
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-10 border-t border-primary-100 flex flex-col items-center">
            <Button
              type="submit"
              className="w-full md:w-auto h-14 px-12 text-xs tracking-widest shadow-md"
              disabled={loading || !user}
            >
              {loading ? "ĐANG LƯU HỒ SƠ..." : "GỬI TÂM THƯ"}
            </Button>
            <p className="text-center text-[11px] text-ink/40 mt-6 font-light">
              Việc gửi hồ sơ đồng nghĩa bạn đã chấp thuận{" "}
              <a
                href="#"
                className="text-primary-700 hover:underline editorial-link"
              >
                Quy tắc ứng xử
              </a>{" "}
              của EduConnect.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
