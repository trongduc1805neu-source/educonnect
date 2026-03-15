import { motion } from 'framer-motion';
import { ShieldCheck, Star, MapPin, Clock, Calendar, Video, CheckCircle2, MessageSquare, PlayCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export function TutorProfile() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Header Profile */}
      <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                alt="Tutor" 
                className="h-40 w-40 rounded-full object-cover shadow-sm border-4 border-white"
              />
              <div className="absolute -bottom-2 -right-2 rounded-full bg-white p-1.5 shadow-sm">
                <div className="rounded-full bg-[#e8f5e9] p-1.5 text-[#1b5e20]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-[#e8f5e9] px-3 py-1 text-xs font-medium text-[#1b5e20]">
                <ShieldCheck className="h-3.5 w-3.5" /> Đã xác thực E-KYC
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">Nguyễn Văn A</h1>
                <p className="text-xl text-[#0071e3] font-medium mt-1">Gia sư Toán học - Lớp 9 & Luyện thi vào 10</p>
                
                <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-[#86868b]">
                  <div className="flex items-center gap-1.5 font-medium text-[#1d1d1f]">
                    <Star className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
                    <span className="text-lg">4.9</span>
                    <span className="text-[#86868b] font-normal">(124 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-5 w-5" />
                    Cách bạn 2.5 km (Quận Cầu Giấy)
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-5 w-5" />
                    Hơn 500+ giờ dạy
                  </div>
                </div>
              </div>

              <div className="shrink-0 rounded-3xl bg-[#f5f5f7] p-5 text-center min-w-[180px]">
                <div className="text-sm text-[#86868b] font-medium mb-1">Học phí</div>
                <div className="text-3xl font-semibold tracking-tight text-[#1d1d1f]">200.000đ<span className="text-base font-normal text-[#86868b]">/h</span></div>
                <Button className="w-full mt-5">Đặt lịch học</Button>
                <Button variant="secondary" className="w-full mt-2"><MessageSquare className="h-4 w-4 mr-2" /> Nhắn tin</Button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-3">Giới thiệu</h3>
              <p className="text-[#1d1d1f] leading-relaxed">
                Chào các bậc phụ huynh và các em học sinh. Mình là sinh viên năm 3 Đại học Sư phạm Hà Nội, khoa Toán. 
                Với 3 năm kinh nghiệm gia sư, mình chuyên lấy lại gốc Toán cho học sinh mất căn bản và ôn thi chuyển cấp vào lớp 10. 
                Phương pháp dạy của mình tập trung vào việc hiểu bản chất, không học vẹt, kết hợp với các bài kiểm tra nhỏ (Sổ liên lạc điện tử) sau mỗi buổi học để phụ huynh tiện theo dõi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column: Video & Details */}
        <div className="md:col-span-2 space-y-8">
          {/* Intro Video */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-5 flex items-center gap-2">
              <PlayCircle className="h-6 w-6 text-[#0071e3]" /> Video giới thiệu
            </h3>
            <div className="aspect-video w-full rounded-3xl bg-black relative overflow-hidden flex items-center justify-center group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video thumbnail" />
              <div className="relative z-10 h-20 w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-105 transition-transform">
                <PlayCircle className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] mb-6">Đánh giá từ học viên (124)</h3>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-[#1d1d1f]">Phụ huynh em Minh Đức</div>
                    <div className="flex text-[#f59e0b]">
                      {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-[#1d1d1f] leading-relaxed">
                    Gia sư rất nhiệt tình, giảng bài dễ hiểu. Đặc biệt thích tính năng Sổ liên lạc điện tử trên app, 
                    hết buổi học là mình nhận được báo cáo ngay con hôm nay học gì, thái độ ra sao. Rất yên tâm!
                  </p>
                  <div className="text-sm text-[#86868b] mt-3">2 tuần trước • Đã học 12 buổi</div>
                </div>
              ))}
              <Button variant="secondary" className="w-full mt-2">Xem tất cả đánh giá</Button>
            </div>
          </div>
        </div>

        {/* Right Column: Booking & Guarantees */}
        <div className="space-y-6">
          {/* Booking Calendar */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f] mb-5 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#0071e3]" /> Lịch trống tuần này
            </h3>
            <div className="space-y-3">
              <div className="rounded-2xl border border-[#0071e3] bg-[#0071e3]/5 p-4 cursor-pointer transition-colors">
                <div className="font-semibold text-[#0071e3]">Thứ 3, 15/03</div>
                <div className="text-sm text-[#0071e3]/80 mt-1">18:00 - 20:00</div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 cursor-pointer hover:border-gray-300 transition-colors">
                <div className="font-semibold text-[#1d1d1f]">Thứ 5, 17/03</div>
                <div className="text-sm text-[#86868b] mt-1">19:30 - 21:30</div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4 cursor-pointer hover:border-gray-300 transition-colors">
                <div className="font-semibold text-[#1d1d1f]">Thứ 7, 19/03</div>
                <div className="text-sm text-[#86868b] mt-1">09:00 - 11:00</div>
              </div>
            </div>
            <Button variant="secondary" className="w-full mt-5">Xem toàn bộ lịch</Button>
          </div>

          {/* Guarantees */}
          <div className="rounded-3xl bg-[#1d1d1f] p-6 shadow-sm text-white">
            <h3 className="text-lg font-semibold mb-5">Chính sách đảm bảo</h3>
            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-[#34c759] shrink-0" />
                <div>
                  <strong className="text-white block mb-1 text-base">Thanh toán ký quỹ</strong>
                  Tiền của bạn được giữ an toàn bởi hệ thống, chỉ chuyển cho gia sư khi buổi học hoàn tất.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#0071e3] shrink-0" />
                <div>
                  <strong className="text-white block mb-1 text-base">Bảo hành hài lòng</strong>
                  Hoàn 100% học phí buổi đầu tiên nếu bạn cảm thấy không phù hợp với phương pháp giảng dạy.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Video className="h-6 w-6 text-[#af52de] shrink-0" />
                <div>
                  <strong className="text-white block mb-1 text-base">Lớp học ảo tích hợp</strong>
                  Hỗ trợ bảng trắng tương tác và AI ghi âm bài giảng cho các lớp học trực tuyến.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
