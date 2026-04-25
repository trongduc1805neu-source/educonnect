import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24 px-6 mt-8">
      {/* Header - Editorial Style */}
      <header className="space-y-10 max-w-3xl">
        <h1 className="text-5xl lg:text-6xl font-heading text-ink leading-tight">
          Sẵn sàng <br />
          <span className="italic text-primary-700 font-light">
            lắng nghe bạn.
          </span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          Bạn có câu hỏi, đề xuất hay cần hỗ trợ? Đội ngũ EduConnect luôn ở đây,
          sẵn sàng giải đáp và đồng hành cùng bạn trên mọi chặng đường.
        </p>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Contact Info Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-6 shrink-0">
          {[
            {
              icon: Phone,
              title: "Hotline",
              content: "1900 1234",
              sub: "Thứ 2 - Chủ nhật (8:00 - 22:00)",
            },
            {
              icon: Mail,
              title: "Email",
              content: "support@educonnect.vn",
              sub: "Phản hồi trong vòng 24h",
            },
            {
              icon: MapPin,
              title: "Văn phòng",
              content: "EduConnect HQ",
              sub: "Tầng 12, Tòa nhà Tech, 123 Đường ABC, Cầu Giấy, Hà Nội",
            },
          ].map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
              className="bg-primary-50/40 backdrop-blur-sm rounded-3xl p-6 border border-primary-100 shadow-sm flex flex-col group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center group-hover:bg-primary-700 group-hover:text-white transition-colors duration-500 shrink-0">
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-heading text-xl text-ink">{item.title}</h3>
              </div>

              <div className="mt-auto">
                <p className="text-lg text-ink font-bold mb-1">
                  {item.content}
                </p>
                <p className="text-sm font-medium text-ink/50">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </aside>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 w-full bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-primary-100 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full -z-10"></div>

          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-heading text-ink mb-3">
              Gửi tin nhắn
            </h2>
            <p className="text-ink/60 font-light">
              Chúng tôi sẽ phản hồi bạn sớm nhất có thể.
            </p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70">
                  Họ và tên <span className="text-accent-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  className="w-full rounded-2xl border border-primary-100 p-4 text-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-300 focus:outline-none bg-transparent text-ink transition-all placeholder:text-ink/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/70">
                  Số điện thoại <span className="text-accent-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-2xl border border-primary-100 p-4 text-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-300 focus:outline-none bg-transparent text-ink transition-all placeholder:text-ink/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/70">Email</label>
              <input
                type="email"
                placeholder="Nhập địa chỉ email"
                className="w-full rounded-2xl border border-primary-100 p-4 text-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-300 focus:outline-none bg-transparent text-ink transition-all placeholder:text-ink/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/70">
                Nội dung tin nhắn <span className="text-accent-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Bạn cần chúng tôi hỗ trợ vấn đề gì?"
                className="w-full rounded-2xl border border-primary-100 p-4 text-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-300 focus:outline-none resize-none bg-transparent text-ink transition-all placeholder:text-ink/30"
              ></textarea>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="w-full rounded-2xl font-bold bg-primary-700 hover:bg-primary-800 text-white px-8 h-14 tracking-wide shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Gửi tin nhắn</span>
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
