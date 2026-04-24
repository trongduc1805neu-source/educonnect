import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { MapPin, Star, ShieldCheck, Video, MessageCircle, Heart, Share, ChevronRight, Check } from 'lucide-react';

export function TutorProfile() {
  // Mock tutor data to demonstrate the placeholder functionality
  const tutor = {
    name: "Nguyễn Văn A",
    title: "Giáo viên Toán THCS & THPT - Chuyên luyện thi Đại học, lấy lại gốc cho học sinh yếu",
    subject: "Toán",
    photoURL: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
    reviews: 124,
    location: "Cầu Giấy, Hà Nội",
    mode: "Tại nhà hoặc Online",
    fee: "200.000đ",
    isVerified: true,
    isAmbassador: true,
    firstLessonFree: true,
    responseRate: "100%",
    responseTime: "1 giờ",
    students: 45,
    about: `Chào các bậc phụ huynh và các em học sinh. Mình là giáo viên Toán với hơn 5 năm kinh nghiệm giảng dạy.

Phương pháp của mình:
- Tập trung vào việc hiểu bản chất, không học vẹt công thức.
- Xây dựng lộ trình cá nhân hóa dựa trên năng lực hiện tại của từng học sinh.
- Kết hợp lý thuyết và thực hành liên tục để ghi nhớ sâu.
- Thường xuyên kiểm tra đánh giá để điều chỉnh phương pháp kịp thời.

Thành tích:
- 90% học sinh đỗ NV1 trong các kỳ thi chuyển cấp.
- Nhiều học sinh đạt điểm 8+ môn Toán kỳ thi THPT Quốc gia.
- Giúp nhiều học sinh từ mất gốc đạt điểm khá, giỏi.

Mình nhận dạy kèm tại nhà khu vực Cầu Giấy, Đống Đa, Ba Đình và dạy online qua Zoom/Google Meet cho các bạn ở xa.`,
    methodology: `Mình tin rằng không có học sinh kém, chỉ là chưa tìm được phương pháp học phù hợp. 
    
Trong buổi học đầu tiên, mình sẽ dành thời gian để kiểm tra năng lực, tìm hiểu điểm mạnh, điểm yếu và mục tiêu của học sinh. Từ đó, mình sẽ thiết kế một lộ trình học tập riêng biệt.

Mỗi buổi học sẽ bao gồm:
1. Ôn tập kiến thức cũ (15p)
2. Giảng kiến thức mới kèm ví dụ minh họa (45p)
3. Thực hành giải bài tập từ cơ bản đến nâng cao (45p)
4. Tổng kết và giao bài tập về nhà (15p)

Phụ huynh sẽ nhận được báo cáo tình hình học tập sau mỗi tháng.`,
    resume: [
      { year: "2018 - Nay", title: "Giáo viên Toán tự do", desc: "Dạy kèm 1-1 và nhóm nhỏ" },
      { year: "2014 - 2018", title: "Đại học Sư phạm Hà Nội", desc: "Cử nhân Sư phạm Toán học (Bằng Giỏi)" }
    ]
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-zinc-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        <span className="hover:underline cursor-pointer">Trang chủ</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="hover:underline cursor-pointer">Gia sư Toán</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="hover:underline cursor-pointer">Hà Nội</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-zinc-900 font-medium">{tutor.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content (Left) */}
          <div className="flex-1 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
                <div className="shrink-0 relative">
                  <img 
                    src={tutor.photoURL} 
                    alt={tutor.name} 
                    className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl object-cover"
                  />
                  {tutor.isAmbassador && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Đại sứ
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-4xl font-black text-zinc-900 mb-2">
                    {tutor.name}
                  </h1>
                  <h2 className="text-lg sm:text-xl text-zinc-700 font-medium mb-4 leading-snug">
                    {tutor.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm sm:text-base text-zinc-600">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Star className="w-5 h-5 fill-[#FF5A5F] text-[#FF5A5F]" />
                      <span className="text-zinc-900 font-bold">{tutor.rating}</span>
                      <span className="underline cursor-pointer">({tutor.reviews} đánh giá)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      {tutor.location}
                    </div>
                    {tutor.isVerified && (
                      <div className="flex items-center gap-1.5 text-zinc-900 font-medium">
                        <ShieldCheck className="w-5 h-5" />
                        Đã xác thực
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-black text-zinc-900 mb-6">Về {tutor.name}</h3>
              <div className="prose prose-lg text-zinc-700 max-w-none whitespace-pre-line">
                {tutor.about}
              </div>
            </div>

            {/* Methodology Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-black text-zinc-900 mb-6">Phương pháp giảng dạy</h3>
              <div className="prose prose-lg text-zinc-700 max-w-none whitespace-pre-line">
                {tutor.methodology}
              </div>
            </div>

            {/* Resume Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-black text-zinc-900 mb-6">CV / Lý lịch</h3>
              <div className="space-y-6">
                {tutor.resume.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-24 shrink-0 text-zinc-500 font-medium pt-1">{item.year}</div>
                    <div className="flex-1 border-l-2 border-zinc-100 pl-6 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-white border-2 border-[#FF5A5F] rounded-full -left-[7px] top-2"></div>
                      <div className="font-bold text-zinc-900 text-lg">{item.title}</div>
                      <div className="text-zinc-600 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-zinc-900 flex items-center gap-2">
                  <Star className="w-6 h-6 fill-[#FF5A5F] text-[#FF5A5F]" />
                  {tutor.rating} <span className="text-zinc-500 font-medium text-lg">({tutor.reviews} đánh giá)</span>
                </h3>
              </div>
              
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-zinc-500 font-bold text-xl">
                        {String.fromCharCode(64 + i)}
                      </div>
                      <div>
                        <div className="font-bold text-zinc-900">Học viên {i}</div>
                        <div className="text-sm text-zinc-500">Tháng {i}/2023</div>
                      </div>
                    </div>
                    <p className="text-zinc-700 leading-relaxed">
                      Thầy dạy rất nhiệt tình và dễ hiểu. Từ một đứa sợ môn Toán, giờ em đã tự tin hơn rất nhiều và có thể tự giải được các bài tập khó. Cảm ơn thầy nhiều ạ!
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-[#FF5A5F] font-bold hover:underline">
                Xem thêm đánh giá
              </button>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-24 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-3xl font-black text-zinc-900">{tutor.fee}</div>
                    <div className="text-zinc-500 font-medium">/ giờ</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-600">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-600">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-zinc-700">
                    <Video className="w-5 h-5 text-gray-400" />
                    <span>Học qua Webcam</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-700">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span>Học tại nhà: {tutor.location}</span>
                  </div>
                  {tutor.firstLessonFree && (
                    <div className="flex items-center gap-3 text-zinc-900 font-medium">
                      <Check className="w-5 h-5" />
                      <span>Buổi học đầu tiên miễn phí</span>
                    </div>
                  )}
                </div>

                <button className="w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-700 mb-4">
                  Liên hệ với giáo viên
                </button>
                
                <div className="text-center text-sm text-zinc-500">
                  Thời gian phản hồi: <span className="font-bold text-zinc-900">{tutor.responseTime}</span>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-zinc-50 rounded-xl">
                    <div className="text-2xl font-black text-zinc-900 mb-1">{tutor.responseRate}</div>
                    <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Tỉ lệ phản hồi</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-50 rounded-xl">
                    <div className="text-2xl font-black text-zinc-900 mb-1">{tutor.students}</div>
                    <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Học viên</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
