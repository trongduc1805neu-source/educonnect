import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Wallet, CalendarClock, BookOpen, Clock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function StudentDashboard() {
  const navigate = useNavigate();
  const [confirmStep, setConfirmStep] = useState<0 | 1 | 2>(0);
  
  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-24 px-6">
      
      {/* Header - Góc Học Tập */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-12 mb-12 border-b border-primary-200 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500 mb-4">
            <span className="w-6 h-px bg-accent-500"></span> Không gian cá nhân
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-2">
            Góc học tập <span className="italic text-primary-700 font-light">của con.</span>
          </h1>
          <p className="text-lg text-ink/60 font-light mt-4 max-w-xl leading-relaxed">
            Theo dõi hành trình trưởng thành, quản lý lịch trình và kết nối sâu sắc hơn với người dẫn đường.
          </p>
        </div>
        <Button variant="outline" className="shrink-0 text-xs tracking-widest shadow-none hover:bg-primary-50">
          TIN NHẮN MỚI (3)
        </Button>
      </div>

      {/* Top Stats - Chỉ số tổng quan thiết kế dạng thẻ tối giản */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Quỹ học tập (Wallet) */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-ink/50">
              <Wallet className="w-5 h-5 text-primary-700" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Quỹ Học Tập</span>
            </div>
            <div className="text-3xl font-heading text-ink mb-2">1.500.000đ</div>
            <div className="text-[11px] text-ink/60 font-light tracking-wide uppercase">
              Đã nạp 2.000.000đ tháng này
            </div>
            <Button onClick={() => navigate('/payment', { state: { type: 'wallet', data: { name: 'Nạp quỹ học tập', fee: '500.000đ' } } })} variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
              NẠP THÊM
            </Button>
          </div>
        </motion.div>

        {/* Lịch học sắp tới */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <CalendarClock className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Lịch Trình</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">3 buổi</div>
          <div className="text-[12px] text-ink/60 font-light">
            Gần nhất: <span className="text-primary-700 font-semibold">18:00 hôm nay</span>
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            XEM LỊCH
          </Button>
        </motion.div>

        {/* Sổ liên lạc mới */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <BookOpen className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Nhật Ký</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">2 báo cáo</div>
          <div className="text-[12px] text-ink/60 font-light">
            Cập nhật <span className="text-primary-700 font-semibold">2 giờ trước</span>
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            ĐỌC NHẬN XÉT
          </Button>
        </motion.div>

        {/* Tổng giờ học */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <Clock className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Tích Lũy</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">24 giờ</div>
          <div className="text-[12px] text-ink/60 font-light">
            Tăng <span className="text-primary-700 font-semibold">15%</span> so với tháng trước
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            XEM THỐNG KÊ
          </Button>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Cột trái: Sổ liên lạc & AI Insights */}
        <div className="lg:col-span-8 space-y-12">
          
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 lg:p-12 border border-primary-100 paper-shadow relative overflow-hidden">
            {/* Header của phần Nhật ký */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-primary-100">
              <h2 className="text-3xl font-heading text-ink">
                Nhật ký <span className="italic text-primary-700 font-light">đồng hành.</span>
              </h2>
              <Button variant="link" className="text-[11px] tracking-widest h-auto p-0">Xem tất cả</Button>
            </div>

            <div className="space-y-12">
              {/* Report Item - Thiết kế như một bức thư */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="font-heading text-2xl text-ink mb-2">Toán Học - Khối 9</h3>
                    <p className="text-[13px] text-ink/60 font-light">
                      Người hướng dẫn: <span className="text-primary-700 font-medium">Nguyễn Hải Anh</span>
                    </p>
                    <p className="text-[12px] text-ink/40 uppercase tracking-widest mt-1">15/10/2023 • 18:00 - 20:00</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold text-primary-700 bg-primary-50 rounded uppercase tracking-widest h-fit">
                    <CheckCircle2 className="w-3 h-3" /> Đã xác nhận
                  </span>
                </div>
                
                <div className="pl-6 border-l-[1.5px] border-primary-200 space-y-8">
                  {/* Điểm đánh giá (Rubric) */}
                  <div className="grid grid-cols-2 gap-8 max-w-md">
                    <div>
                      <span className="text-[10px] text-ink/40 font-bold uppercase tracking-[0.2em] block mb-2">Sự chuyên cần</span>
                      <div className="text-sm font-medium text-ink flex items-center gap-2">
                        Đúng giờ <span className="text-accent-500 font-serif italic text-lg ml-1">5/5</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-ink/40 font-bold uppercase tracking-[0.2em] block mb-2">Mức độ tiếp thu</span>
                      <div className="text-sm font-medium text-ink flex items-center gap-2">
                        Khá tốt <span className="text-accent-500 font-serif italic text-lg ml-1">4/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Lời nhận xét */}
                  <div>
                    <span className="text-[10px] text-ink/40 font-bold uppercase tracking-[0.2em] block mb-3">Lời nhắn từ người dạy</span>
                    <p className="text-[15px] text-ink/80 font-light leading-relaxed italic bg-primary-50/50 p-5 rounded-r-xl border border-l-0 border-primary-50">
                      "Cháu làm bài tập về nhà đầy đủ. Hôm nay học phần Hình học không gian, cháu nắm bắt ý tưởng nền tảng rất nhanh nhưng việc áp dụng công thức tính thể tích còn đôi chút ngập ngừng. Cô đã gửi thêm 3 bài tập nhỏ để cháu tự tin hơn trước buổi học tới."
                    </p>
                  </div>
                </div>

                {/* AI Insights - Góc nhìn thấu cảm */}
                <div className="mt-8 ml-6 rounded-2xl bg-paper p-6 border border-primary-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl"></div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-accent-500 mb-4 uppercase tracking-[0.2em]">
                    <Sparkles className="w-4 h-4" /> Góc nhìn thấu cảm (AI)
                  </div>
                  <ul className="space-y-3 text-[13px] text-ink/70 font-light relative z-10">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 mt-0.5 font-serif text-lg leading-none">✦</span>
                      <span>Mức độ tương tác chủ động: <strong className="font-medium text-ink">45% (Tích cực)</strong>. Học sinh đặt câu hỏi phản biện nhiều hơn 10% so với trung bình tuần trước.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 mt-0.5 font-serif text-lg leading-none">✦</span>
                      <span>Khoảng trống kiến thức phát hiện: <strong className="font-medium text-ink">Dấu hiệu nhận biết hình thang cân</strong>. Đã tự động bổ sung vào lộ trình ôn tập cuối tháng.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-500 mt-0.5 font-serif text-lg leading-none">✦</span>
                      <span>Hệ thống đã chuẩn bị sẵn <strong className="font-medium text-ink">5 thẻ ghi nhớ (Flashcard)</strong> từ vựng mới để con ôn tập trên ứng dụng.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Đường cắt ngang giữa các báo cáo */}
              <div className="magazine-divider opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Cột phải: Thanh toán & Lịch trình */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Thanh toán chờ xử lý (Escrow Pending) */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 border border-primary-100 paper-shadow">
            <div className="mb-6 pb-4 border-b border-primary-100">
              <h2 className="text-sm font-bold text-ink/50 uppercase tracking-[0.2em] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-accent-500" /> Xác nhận giải ngân
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-heading text-lg text-ink">Toán Lớp 9</div>
                    <div className="text-[11px] text-ink/40 uppercase tracking-widest mt-1">15/10/2023 (2 giờ)</div>
                  </div>
                  <div className="font-heading text-primary-700 text-xl">400.000đ</div>
                </div>
                <p className="text-[12px] text-ink/60 font-light mb-5 leading-relaxed">
                  Quỹ học tập đang giữ khoản tiền này. Vui lòng xác nhận chất lượng buổi học để hệ thống gửi thù lao cho người dạy.
                </p>
                <div className="flex gap-3">
                  {confirmStep === 0 && (
                    <Button onClick={() => setConfirmStep(1)} size="sm" className="w-full text-[10px] h-10 tracking-widest px-0">XÁC NHẬN</Button>
                  )}
                  {confirmStep === 1 && (
                    <Button onClick={() => setConfirmStep(2)} size="sm" className="w-full text-[10px] h-10 tracking-widest px-0 bg-accent-500 hover:bg-accent-600 text-white">CHẮC CHẮN?</Button>
                  )}
                  {confirmStep === 2 && (
                    <Button size="sm" className="w-full text-[10px] h-10 tracking-widest px-0 bg-emerald-600 hover:bg-emerald-700 text-white cursor-default opacity-100">
                      <CheckCircle2 className="w-4 h-4 mr-1.5" /> ĐÃ XÁC NHẬN
                    </Button>
                  )}
                  {confirmStep !== 2 && (
                    <Button onClick={() => setConfirmStep(0)} size="sm" variant="outline" className="w-full text-[10px] h-10 tracking-widest px-0 border-primary-200 text-ink/60 hover:text-accent-500 hover:border-accent-200">KHIẾU NẠI</Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Lịch học sắp tới */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 border border-primary-100 paper-shadow">
            <div className="mb-8 pb-4 border-b border-primary-100">
              <h2 className="text-sm font-bold text-ink/50 uppercase tracking-[0.2em]">
                Lịch trình sắp tới
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Ngày 1 */}
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center justify-center w-14 h-16 rounded-xl bg-primary-50 border border-primary-100 shrink-0 text-primary-900">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Thứ 3</div>
                  <div className="text-2xl font-heading leading-none mt-1">17</div>
                </div>
                <div className="pt-1">
                  <div className="font-heading text-lg text-ink leading-tight mb-1">Tiếng Anh Giao Tiếp</div>
                  <div className="text-[12px] text-primary-700 font-semibold mb-1">18:00 - 19:30</div>
                  <div className="text-[12px] text-ink/50 font-light">
                    Đồng hành cùng: <span className="font-medium text-ink">Cô Phương Ly</span>
                  </div>
                </div>
              </div>

              {/* Ngày 2 */}
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center justify-center w-14 h-16 rounded-xl bg-paper border border-primary-100 shrink-0 text-ink/60">
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Thứ 5</div>
                  <div className="text-2xl font-heading leading-none mt-1">19</div>
                </div>
                <div className="pt-1">
                  <div className="font-heading text-lg text-ink leading-tight mb-1">Toán Học Khối 9</div>
                  <div className="text-[12px] text-ink/70 font-semibold mb-1">19:00 - 21:00</div>
                  <div className="text-[12px] text-ink/50 font-light">
                    Đồng hành cùng: <span className="font-medium text-ink">Thầy Hải Anh</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button variant="link" className="w-full mt-6 text-[11px] tracking-widest justify-center">
              MỞ TOÀN BỘ LỊCH CHÌNH
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
