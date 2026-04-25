import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { MapPin, Star, ShieldCheck, Video, Heart, Share, ChevronRight, Check, BookOpen, Award, MessageCircle } from 'lucide-react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { MOCK_TUTORS } from '../data/tutors';

export function TutorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutorParamId = parseInt(id || '1', 10);
  
  const tutor = MOCK_TUTORS.find(t => t.id === tutorParamId);

  if (!tutor) {
    return <Navigate to="/tutors" />;
  }

  return (
    <div className="bg-paper min-h-screen pb-24 pt-8">
      {/* Điều hướng tĩnh lặng (Breadcrumb) */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 overflow-x-auto whitespace-nowrap no-scrollbar">
          <span className="hover:text-primary-700 cursor-pointer transition-colors">Trang chủ</span>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="hover:text-primary-700 cursor-pointer transition-colors">Người dẫn đường</span>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-ink">{tutor.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Cột Nội dung Chính (Cột trái - 8 phần) */}
          <div className="flex-1 lg:w-2/3 space-y-16">
            
            {/* Header: Chân dung và Tiêu đề */}
            <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start text-center sm:text-left">
              {/* Chân dung mang tính nghệ thuật */}
              <div className="shrink-0 relative group">
                <div className="w-40 h-48 sm:w-48 sm:h-64 rounded-2xl overflow-hidden bg-primary-50 paper-shadow">
                  <img 
                    src={tutor.photoURL} 
                    alt={tutor.name} 
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {tutor.isAmbassador && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FDFBF7] text-[10px] text-ink font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5 border border-primary-100 shadow-md">
                    <Star className="w-3 h-3 text-accent-500 fill-accent-500" />
                    Đại sứ
                  </div>
                )}
              </div>
              
              <div className="flex-1 pt-2">
                <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-primary-700 bg-primary-50 rounded border border-primary-100">
                  {tutor.subject}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-ink mb-4 leading-tight">
                  {tutor.name}
                </h1>
                <h2 className="text-lg text-ink/60 font-light mb-6 leading-relaxed max-w-xl">
                  {tutor.title}
                </h2>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-4 text-[13px] text-ink/70">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent-500 fill-accent-500" />
                    <span className="font-semibold text-ink">{tutor.rating}</span>
                    <span className="font-light italic">({tutor.reviews} nhận xét)</span>
                  </div>
                  <div className="flex items-center gap-2 font-light">
                    <MapPin className="w-4 h-4 text-primary-700" />
                    {tutor.location}
                  </div>
                  {tutor.isVerified && (
                    <div className="flex items-center gap-2 text-primary-700 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      Đã xác thực
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="magazine-divider"></div>

            {/* Phần Câu chuyện / Về bản thân */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink/40 mb-8 flex items-center gap-3">
                <BookOpen className="w-4 h-4" /> Câu chuyện cá nhân
              </h3>
              <div className="prose prose-lg prose-p:text-ink/70 prose-p:leading-relaxed prose-p:font-light max-w-none whitespace-pre-line">
                {tutor.about}
              </div>
            </section>

            {/* Phần Phương pháp giảng dạy (Pull Quote Style) */}
            <section className="bg-primary-900 text-paper p-10 lg:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-700 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-paper/40 mb-8 relative z-10">
                Triết lý giáo dục
              </h3>
              
              {/* Lấy câu đầu tiên làm Quote nổi bật */}
              <blockquote className="mb-10 relative z-10">
                <p className="text-2xl lg:text-3xl font-heading italic text-paper leading-snug border-l-[3px] border-accent-500 pl-6 py-2">
                  "Mình tin rằng không có học sinh kém, chỉ là chưa tìm được phương pháp học phù hợp."
                </p>
              </blockquote>
              
              <div className="prose prose-lg prose-p:text-paper/70 prose-p:leading-relaxed prose-p:font-light prose-ol:text-paper/70 prose-li:font-light max-w-none whitespace-pre-line relative z-10">
                {tutor.methodology.replace("Mình tin rằng không có học sinh kém, chỉ là chưa tìm được phương pháp học phù hợp.\n\n", "")}
              </div>
            </section>

            {/* Phần Lý Lịch (Timeline Style) */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink/40 mb-10 flex items-center gap-3">
                <Award className="w-4 h-4" /> Hành trình học thuật
              </h3>
              <div className="space-y-8">
                {tutor.resume.map((item, index) => (
                  <div key={index} className="flex gap-6 lg:gap-10">
                    <div className="w-24 shrink-0 text-[11px] font-bold text-ink/40 uppercase tracking-widest pt-1">
                      {item.year}
                    </div>
                    <div className="flex-1 border-l border-primary-200 pl-6 lg:pl-10 pb-6 relative">
                      {/* Icon thay thế cho dấu tròn nhàm chán */}
                      <div className="absolute text-accent-500 font-serif text-xl -left-[9px] -top-3 bg-paper py-1">✦</div>
                      <div className="font-heading text-2xl text-ink mb-2">{item.title}</div>
                      <div className="text-ink/60 font-light leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Phần Nhận xét (Reviews) */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-ink/40 mb-10 flex items-center justify-between">
                <span className="flex items-center gap-3"><MessageCircle className="w-4 h-4" /> Lời nhắn từ học viên</span>
              </h3>
              
              <div className="space-y-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="pb-10 border-b border-primary-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center font-heading text-xl text-primary-700">
                        {String.fromCharCode(64 + i)}
                      </div>
                      <div>
                        <div className="font-heading text-lg text-ink">Học viên giấu tên</div>
                        <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">Tháng {i}/2023</div>
                      </div>
                    </div>
                    <p className="text-ink/70 font-light leading-relaxed text-[15px] italic">
                      "Thầy dạy rất nhiệt tình và dễ hiểu. Từ một đứa sợ môn Toán, giờ em đã tự tin hơn rất nhiều và có thể tự giải được các bài tập khó. Cảm ơn thầy nhiều ạ!"
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-8 text-[11px] font-bold text-primary-700 uppercase tracking-widest editorial-link">
                Đọc toàn bộ đánh giá
              </button>
            </section>

          </div>

          {/* Cột Sidebar (Cột phải - 4 phần) */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-28 space-y-8">
              
              {/* Thẻ Đặt Lịch (Booking Card) */}
              <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-primary-100 paper-shadow">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-1">Học phí đầu tư</div>
                    <div className="text-4xl font-heading text-primary-700">{tutor.fee}</div>
                    <div className="text-[12px] text-ink/40 font-medium mt-1">/ giờ học</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-full border border-primary-100 text-ink/40 hover:text-accent-500 hover:border-accent-200 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-full border border-primary-100 text-ink/40 hover:text-primary-700 hover:border-primary-300 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-5 mb-10 text-[13px] text-ink/70 font-light">
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-primary-700 shrink-0" />
                    <span>Không gian trực tuyến (Webcam)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary-700 shrink-0" />
                    <span>Tại nhà: {tutor.location}</span>
                  </div>
                  {tutor.firstLessonFree && (
                    <div className="flex items-center gap-3 text-ink font-medium bg-primary-50/50 p-2 rounded-lg border border-primary-50">
                      <Check className="w-4 h-4 text-primary-700 shrink-0" />
                      <span>Trải nghiệm buổi đầu miễn phí</span>
                    </div>
                  )}
                </div>

                <Button onClick={() => navigate('/payment', { state: { type: 'tutor', data: tutor } })} className="w-full h-14 text-xs tracking-widest shadow-md">
                  GỬI YÊU CẦU ĐỒNG HÀNH
                </Button>
                
                <div className="text-center text-[11px] text-ink/50 uppercase tracking-widest mt-6">
                  Tốc độ phản hồi: <span className="font-bold text-ink">{tutor.responseTime}</span>
                </div>
              </div>

              {/* Thẻ Thống Kê (Stats Card) - Tối giản như các cột báo */}
              <div className="bg-[#FDFBF7] rounded-3xl p-8 border border-primary-100 paper-shadow">
                <div className="grid grid-cols-2 gap-8 divide-x divide-primary-100">
                  <div className="text-center">
                    <div className="text-3xl font-heading text-ink mb-1">{tutor.responseRate}</div>
                    <div className="text-[10px] text-ink/40 uppercase font-bold tracking-widest">Tỉ lệ phản hồi</div>
                  </div>
                  <div className="text-center pl-8">
                    <div className="text-3xl font-heading text-ink mb-1">{tutor.students}</div>
                    <div className="text-[10px] text-ink/40 uppercase font-bold tracking-widest">Học viên</div>
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
