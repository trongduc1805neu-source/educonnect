import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export function Contact() {
  return (
    <div className="max-w-5xl mx-auto pb-16 px-4">
      <div className="text-center space-y-4 mb-12 mt-8">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6 relative inline-block">
          Liên hệ với chúng tôi
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
          />
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bạn có câu hỏi hay cần hỗ trợ? Đội ngũ EduConnect VN luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider">Hotline</h3>
            </div>
            <div>
              <p className="text-emerald-700 font-bold text-xl">1900 1234</p>
              <p className="text-sm text-slate-600 mt-2 font-medium">Thứ 2 - Chủ nhật (8:00 - 22:00)</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider">Email</h3>
            </div>
            <div>
              <p className="text-emerald-700 font-bold text-lg">support@educonnect.vn</p>
              <p className="text-sm text-slate-600 mt-2 font-medium">Phản hồi trong vòng 24h</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-wider">Văn phòng</h3>
            </div>
            <div>
              <p className="text-slate-700 font-medium leading-relaxed">Tầng 12, Tòa nhà Tech, 123 Đường ABC, Quận Cầu Giấy, Hà Nội</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-sm bg-white p-8 md:p-12 shadow-sm border border-slate-200"
          >
            <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-3 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider text-center">Gửi tin nhắn</h2>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Họ và tên *</label>
                  <input type="text" placeholder="Nhập họ tên của bạn" className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Số điện thoại *</label>
                  <input type="tel" placeholder="Nhập số điện thoại" className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Email</label>
                <input type="email" placeholder="Nhập địa chỉ email" className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 bg-slate-50" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2 uppercase">Nội dung tin nhắn *</label>
                <textarea 
                  rows={5} 
                  placeholder="Bạn cần chúng tôi hỗ trợ vấn đề gì?" 
                  className="w-full rounded-sm border border-slate-300 p-3 text-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 resize-none bg-slate-50"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white px-8">
                  Gửi tin nhắn
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
