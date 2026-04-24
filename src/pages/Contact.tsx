import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export function Contact() {
  return (
    <div className="max-w-5xl mx-auto pb-16 px-4">
      <div className="text-center mb-12 mt-8 bg-zinc-50 p-12 rounded-2xl border border-zinc-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-zinc-200 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6 relative z-10">
          Liên hệ với <span className=" ">chúng tôi</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium relative z-10">
          Bạn có câu hỏi hay cần hỗ trợ? Đội ngũ EduConnect VN luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 border border-zinc-200 shadow-sm hover:shadow-sm transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center text-2xl">📞</span>
              <h3 className="font-extrabold text-zinc-900 text-xl">Hotline</h3>
            </div>
            <div>
              <p className="text-zinc-900 font-extrabold text-2xl">1900 1234</p>
              <p className="text-sm text-zinc-500 mt-2 font-medium">Thứ 2 - Chủ nhật (8:00 - 22:00)</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 border border-zinc-200 shadow-sm hover:shadow-sm transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-600 flex items-center justify-center text-2xl">✉️</span>
              <h3 className="font-extrabold text-zinc-900 text-xl">Email</h3>
            </div>
            <div>
              <p className="text-zinc-600 font-extrabold text-xl">support@educonnect.vn</p>
              <p className="text-sm text-zinc-500 mt-2 font-medium">Phản hồi trong vòng 24h</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-2xl bg-white p-8 border border-zinc-200 shadow-sm hover:shadow-sm transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center text-2xl">🏢</span>
              <h3 className="font-extrabold text-zinc-900 text-xl">Văn phòng</h3>
            </div>
            <div>
              <p className="text-zinc-600 font-medium leading-relaxed">Tầng 12, Tòa nhà Tech, 123 Đường ABC, Quận Cầu Giấy, Hà Nội</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl bg-white p-8 md:p-12 border border-zinc-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50     rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-12 rounded-2xl bg-zinc-100 text-zinc-900 flex items-center justify-center text-2xl">💬</span>
              <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Gửi tin nhắn</h2>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Họ và tên <span className="text-zinc-600">*</span></label>
                  <input type="text" placeholder="Nhập họ tên của bạn" className="w-full rounded-2xl border-2 border-zinc-200 p-4 text-sm outline-none focus:border-zinc-900 focus:ring-4 focus:ring-zinc-1000/10 bg-zinc-50/50 text-zinc-900 transition-all font-medium placeholder:text-zinc-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Số điện thoại <span className="text-zinc-600">*</span></label>
                  <input type="tel" placeholder="Nhập số điện thoại" className="w-full rounded-2xl border-2 border-zinc-200 p-4 text-sm outline-none focus:border-zinc-900 focus:ring-4 focus:ring-zinc-1000/10 bg-zinc-50/50 text-zinc-900 transition-all font-medium placeholder:text-zinc-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Email</label>
                <input type="email" placeholder="Nhập địa chỉ email" className="w-full rounded-2xl border-2 border-zinc-200 p-4 text-sm outline-none focus:border-zinc-900 focus:ring-4 focus:ring-zinc-1000/10 bg-zinc-50/50 text-zinc-900 transition-all font-medium placeholder:text-zinc-400" />
              </div>

              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Nội dung tin nhắn <span className="text-zinc-600">*</span></label>
                <textarea 
                  rows={5} 
                  placeholder="Bạn cần chúng tôi hỗ trợ vấn đề gì?" 
                  className="w-full rounded-2xl border-2 border-zinc-200 p-4 text-sm outline-none focus:border-zinc-900 focus:ring-4 focus:ring-zinc-1000/10 resize-none bg-zinc-50/50 text-zinc-900 transition-all font-medium placeholder:text-zinc-400"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto rounded-2xl font-bold bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 shadow-sm hover:shadow-sm">
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
