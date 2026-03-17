import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export function TutorProfile() {
  // Mock tutor data to demonstrate the placeholder functionality
  const tutor = {
    name: "Nguyễn Văn A",
    title: "Gia sư Toán học - Lớp 9 & Luyện thi vào 10",
    photoURL: "", // Empty to show the placeholder
    rating: 4.9,
    reviews: 124,
    location: "Cách bạn 2.5 km (Quận Cầu Giấy, Hà Nội)",
    hoursTaught: "Hơn 500+ giờ dạy",
    fee: "200.000đ",
    isVerified: true,
    education: "Đại học Sư phạm Hà Nội - Khoa Toán",
    experience: "3 năm kinh nghiệm gia sư",
    achievements: "90% học sinh đỗ NV1"
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 px-4">
      {/* Header Profile */}
      <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative">
              {tutor.photoURL ? (
                <img 
                  src={tutor.photoURL} 
                  alt={tutor.name} 
                  className="h-40 w-40 rounded-sm object-cover shadow-sm border border-slate-200"
                />
              ) : (
                <div className="h-40 w-40 rounded-sm shadow-sm border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-4xl uppercase">
                  {tutor.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              {tutor.isVerified && (
                <div className="inline-flex items-center gap-1 rounded-sm bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  Đã xác thực E-KYC
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b-2 border-emerald-800 pb-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 uppercase relative inline-block mb-2">
                  {tutor.name}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
                  />
                </h1>
                <p className="text-xl text-emerald-700 font-bold mt-2">{tutor.title}</p>
                
                <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-700 font-medium">
                  <div>
                    Đánh giá: <span className="text-emerald-700 font-bold">{tutor.rating}/5.0</span> ({tutor.reviews} đánh giá)
                  </div>
                  <div>
                    Khu vực: {tutor.location}
                  </div>
                  <div>
                    Kinh nghiệm: {tutor.hoursTaught}
                  </div>
                </div>
              </div>

              <div className="shrink-0 text-right min-w-[180px]">
                <div className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-1">Học phí</div>
                <div className="text-3xl font-bold tracking-tight text-slate-900">{tutor.fee}<span className="text-base font-medium text-slate-600">/h</span></div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Đặt lịch học</Button>
                  <Button variant="outline" className="w-full rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">Nhắn tin</Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
              <div><span className="font-bold text-slate-900 uppercase">Học vấn:</span> {tutor.education}</div>
              <div><span className="font-bold text-slate-900 uppercase">Kinh nghiệm:</span> {tutor.experience}</div>
              <div className="col-span-2"><span className="font-bold text-slate-900 uppercase">Thành tích:</span> {tutor.achievements}</div>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 mb-2 uppercase">Giới thiệu</h3>
              <p className="text-slate-700 leading-relaxed text-justify">
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
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 uppercase">Video giới thiệu</h3>
            </div>
            <div className="aspect-video w-full rounded-sm bg-slate-900 relative overflow-hidden flex items-center justify-center group cursor-pointer border border-slate-200">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Video thumbnail" />
              <div className="relative z-10 px-6 py-3 rounded-sm bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:bg-white/30 transition-colors font-bold text-white uppercase tracking-wider">
                Xem Video
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6 flex justify-between items-end">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 uppercase">Đánh giá từ học viên (124)</h3>
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-slate-900 uppercase tracking-wide">Phụ huynh em Minh Đức</div>
                    <div className="font-bold text-emerald-700">
                      5.0 / 5.0
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-justify">
                    Gia sư rất nhiệt tình, giảng bài dễ hiểu. Đặc biệt thích tính năng Sổ liên lạc điện tử trên app, 
                    hết buổi học là mình nhận được báo cáo ngay con hôm nay học gì, thái độ ra sao. Rất yên tâm!
                  </p>
                  <div className="text-sm text-slate-500 mt-3 font-medium">2 tuần trước • Đã học 12 buổi</div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 rounded-sm uppercase font-bold tracking-wider border-slate-300 text-slate-700 hover:bg-slate-50">Xem tất cả đánh giá</Button>
            </div>
          </div>
        </div>

        {/* Right Column: Booking & Guarantees */}
        <div className="space-y-8">
          {/* Booking Calendar */}
          <div className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 uppercase">Lịch trống tuần này</h3>
            </div>
            <div className="space-y-3">
              <div className="rounded-sm border-2 border-emerald-700 bg-emerald-50 p-4 cursor-pointer transition-colors">
                <div className="font-bold text-emerald-800 uppercase tracking-wider">Thứ 3, 15/03</div>
                <div className="text-sm text-emerald-700 font-medium mt-1">18:00 - 20:00</div>
              </div>
              <div className="rounded-sm border border-slate-200 p-4 cursor-pointer hover:border-emerald-700 hover:bg-emerald-50 transition-colors">
                <div className="font-bold text-slate-900 uppercase tracking-wider">Thứ 5, 17/03</div>
                <div className="text-sm text-slate-600 font-medium mt-1">19:30 - 21:30</div>
              </div>
              <div className="rounded-sm border border-slate-200 p-4 cursor-pointer hover:border-emerald-700 hover:bg-emerald-50 transition-colors">
                <div className="font-bold text-slate-900 uppercase tracking-wider">Thứ 7, 19/03</div>
                <div className="text-sm text-slate-600 font-medium mt-1">09:00 - 11:00</div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-slate-300 text-slate-700 hover:bg-slate-50">Xem toàn bộ lịch</Button>
          </div>

          {/* Guarantees */}
          <div className="rounded-sm bg-slate-900 p-6 shadow-sm text-white">
            <div className="border-b-2 border-emerald-500 pb-2 mb-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">Chính sách đảm bảo</h3>
            </div>
            <ul className="space-y-6 text-sm text-slate-300">
              <li className="flex flex-col gap-1">
                <strong className="text-emerald-400 block text-base uppercase tracking-wider">Thanh toán ký quỹ</strong>
                <span className="leading-relaxed">Tiền của bạn được giữ an toàn bởi hệ thống, chỉ chuyển cho gia sư khi buổi học hoàn tất.</span>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-emerald-400 block text-base uppercase tracking-wider">Bảo hành hài lòng</strong>
                <span className="leading-relaxed">Hoàn 100% học phí buổi đầu tiên nếu bạn cảm thấy không phù hợp với phương pháp giảng dạy.</span>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-emerald-400 block text-base uppercase tracking-wider">Lớp học ảo tích hợp</strong>
                <span className="leading-relaxed">Hỗ trợ bảng trắng tương tác và AI ghi âm bài giảng cho các lớp học trực tuyến.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
