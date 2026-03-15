import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Contact() {
  return (
    <div className="max-w-5xl mx-auto pb-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Bạn có câu hỏi hay cần hỗ trợ? Đội ngũ EduConnect VN luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <motion.div whileHover={{ y: -2 }} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="rounded-full bg-indigo-100 p-3 text-indigo-600 shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Hotline</h3>
              <p className="text-slate-600">1900 1234</p>
              <p className="text-sm text-slate-500 mt-1">Thứ 2 - Chủ nhật (8:00 - 22:00)</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="rounded-full bg-emerald-100 p-3 text-emerald-600 shrink-0">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <p className="text-slate-600">support@educonnect.vn</p>
              <p className="text-sm text-slate-500 mt-1">Phản hồi trong vòng 24h</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="rounded-full bg-amber-100 p-3 text-amber-600 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Văn phòng</h3>
              <p className="text-slate-600">Tầng 12, Tòa nhà Tech, 123 Đường ABC, Quận Cầu Giấy, Hà Nội</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Gửi tin nhắn</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Họ và tên *</label>
                  <input type="text" placeholder="Nhập họ tên của bạn" className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">Số điện thoại *</label>
                  <input type="tel" placeholder="Nhập số điện thoại" className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Email</label>
                <input type="email" placeholder="Nhập địa chỉ email" className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">Nội dung tin nhắn *</label>
                <textarea 
                  rows={5} 
                  placeholder="Bạn cần chúng tôi hỗ trợ vấn đề gì?" 
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                ></textarea>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                <Send className="h-4 w-4 mr-2" /> Gửi tin nhắn
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
