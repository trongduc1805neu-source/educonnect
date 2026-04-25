import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Sparkles, Users, BookOpen, Clock, AlertCircle, CheckCircle2, ChevronRight, PenTool } from 'lucide-react';

interface ClassRequest {
  id: string;
  subject: string;
  grade: string;
  learningMode: string;
  ward?: string;
  sessionsPerWeek: string;
  expectedFee?: string;
  status: string;
  createdAt: string;
}

export function TutorDashboard() {
  const [recentRequests, setRecentRequests] = useState<ClassRequest[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'class_requests'),
      orderBy('createdAt', 'desc'),
      limit(3)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const requestsData: ClassRequest[] = [];
      snapshot.forEach((doc) => {
        requestsData.push({ id: doc.id, ...doc.data() } as ClassRequest);
      });
      setRecentRequests(requestsData);
      setLoadingRequests(false);
    }, (error) => {
      console.error("Error fetching class requests:", error);
      setLoadingRequests(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-24 px-6">
      
      {/* Header - Lời chào & Tóm tắt */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-12 mb-12 border-b border-primary-200 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500 mb-4">
            <Sparkles className="w-4 h-4" /> Bàn làm việc
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-2">
            Hành trình <span className="italic text-primary-700 font-light">người dẫn đường.</span>
          </h1>
          <p className="text-lg text-ink/60 font-light mt-4 leading-relaxed max-w-xl">
            Sắp xếp lớp học, chuẩn bị bài giảng và theo dõi những giá trị bạn đang tạo ra mỗi ngày.
          </p>
        </div>
        <Button variant="outline" className="shrink-0 text-xs tracking-widest shadow-none hover:bg-primary-50">
          THÔNG BÁO (5)
        </Button>
      </div>

      {/* Top Stats - Thống kê mượt mà */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Thu nhập */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-ink/50">
              <span className="text-[10px] font-bold uppercase tracking-widest">Thù lao tháng này</span>
            </div>
            <div className="text-3xl font-heading text-ink mb-2">4.500.000đ</div>
            <div className="text-[11px] text-ink/60 font-light tracking-wide uppercase">
              Tăng 12% so với tháng trước
            </div>
            <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
              RÚT TIỀN VỀ VÍ
            </Button>
          </div>
        </motion.div>

        {/* Học sinh đang nhận */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <Users className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Học viên đồng hành</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">5 bạn</div>
          <div className="text-[12px] text-ink/60 font-light">
            Trải đều trên <span className="text-primary-700 font-semibold">4 lớp học</span>
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            QUẢN LÝ LỚP
          </Button>
        </motion.div>

        {/* Lời mời chờ phản hồi */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <BookOpen className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Lời mời dạy học</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">2 yêu cầu</div>
          <div className="text-[12px] text-ink/60 font-light">
            Phụ huynh đang chờ <span className="text-accent-500 font-semibold">phản hồi sớm</span>
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            XEM CHI TIẾT
          </Button>
        </motion.div>

        {/* Giờ dạy */}
        <motion.div whileHover={{ y: -4 }} className="rounded-[40px] bg-[#FDFBF7] p-8 border border-primary-100 paper-shadow">
          <div className="flex items-center gap-3 mb-6 text-ink/50">
            <Clock className="w-5 h-5 text-primary-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Thời gian cống hiến</span>
          </div>
          <div className="text-3xl font-heading text-ink mb-2">32 giờ</div>
          <div className="text-[12px] text-ink/60 font-light">
            Đạt <span className="text-primary-700 font-semibold">80%</span> mục tiêu tháng
          </div>
          <Button variant="outline" className="w-full mt-8 text-[11px] tracking-widest h-10 border-primary-100 hover:border-primary-300">
            NHẬT KÝ LÊN LỚP
          </Button>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Cột trái: Lịch dạy & Danh sách lớp mới */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Lịch lên lớp hôm nay */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 border border-primary-100 paper-shadow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary-100">
              <h2 className="text-2xl font-heading text-ink">
                Lịch lên lớp hôm nay
              </h2>
              <Button variant="link" className="text-[11px] tracking-widest h-auto p-0 text-primary-700">Xem toàn bộ lịch</Button>
            </div>

            <div className="space-y-6">
              {/* Ca 1 */}
              <div className="flex items-stretch gap-6 group relative">
                <div className="w-24 text-right shrink-0 py-2 border-r border-primary-100 pr-6">
                  <div className="text-xl font-heading text-ink">18:00</div>
                  <div className="text-[10px] text-ink/40 uppercase tracking-widest mt-1">1.5 GIỜ</div>
                </div>
                <div className="flex-1 py-2">
                  <h3 className="font-heading text-lg text-ink group-hover:text-primary-700 transition-colors">Toán Khối 9 - Học sinh Nguyễn Văn B</h3>
                  <p className="text-[13px] text-ink/60 font-light mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                    Tại nhà (Quận Cầu Giấy)
                  </p>
                </div>
                <div className="py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="text-[10px] h-9 tracking-widest">ĐIỂM DANH</Button>
                </div>
              </div>

              {/* Ca 2 */}
              <div className="flex items-stretch gap-6 group relative">
                <div className="w-24 text-right shrink-0 py-2 border-r border-primary-100 pr-6">
                  <div className="text-xl font-heading text-ink">20:00</div>
                  <div className="text-[10px] text-ink/40 uppercase tracking-widest mt-1">2 GIỜ</div>
                </div>
                <div className="flex-1 py-2">
                  <h3 className="font-heading text-lg text-ink group-hover:text-primary-700 transition-colors">Vật Lý Khối 10 - Học sinh Trần Thị C</h3>
                  <p className="text-[13px] text-ink/60 font-light mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Không gian Trực tuyến (Google Meet)
                  </p>
                </div>
                <div className="py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="text-[10px] h-9 tracking-widest">VÀO LỚP</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lớp ghép mới đăng (Cơ hội mới) */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 lg:p-10 border border-primary-100 paper-shadow">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary-100">
              <h2 className="text-2xl font-heading text-ink">
                Cơ hội kết nối mới
              </h2>
              <span className="text-xs font-light text-ink/50 italic">Dành riêng cho chuyên môn của bạn</span>
            </div>

            {loadingRequests ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700"></div>
              </div>
            ) : recentRequests.length > 0 ? (
              <div className="space-y-6">
                {recentRequests.map((req) => (
                  <div key={req.id} className="p-6 rounded-2xl bg-primary-50/50 border border-primary-100 hover:bg-[#FDFBF7] hover:shadow-md transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-xl text-ink group-hover:text-primary-700 transition-colors">{req.subject} - Khối {req.grade}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent-500 bg-accent-50 px-2 py-1 rounded">
                        Mới đăng
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-[13px] text-ink/70 font-light mb-6">
                      <div>
                        <strong className="block text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">Không gian</strong>
                        {req.learningMode} {req.ward ? `(${req.ward})` : ''}
                      </div>
                      <div>
                        <strong className="block text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">Lịch dự kiến</strong>
                        {req.sessionsPerWeek}
                      </div>
                      {req.expectedFee && (
                        <div className="col-span-2 mt-2">
                          <strong className="block text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">Học phí đề xuất</strong>
                          <span className="text-lg font-heading text-primary-700">{req.expectedFee}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button size="sm" className="text-[10px] h-9 tracking-widest px-6 shadow-sm">
                      NHẬN LỚP NÀY <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-ink/40 font-light italic">
                Hiện tại chưa có lời mời mới nào phù hợp với môn học của bạn.
              </div>
            )}
          </div>
        </div>

        {/* Cột phải: Nhắc nhở & Thu nhập */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Nhắc nhở chuyên môn (Sổ liên lạc) */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 border border-primary-100 paper-shadow">
            <div className="mb-6 pb-4 border-b border-primary-100">
              <h2 className="text-sm font-bold text-ink/50 uppercase tracking-[0.2em] flex items-center gap-2">
                <PenTool className="w-4 h-4 text-accent-500" /> Cần hoàn thiện
              </h2>
            </div>
            
            <div className="bg-paper border border-primary-100 rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-500"></div>
              <h3 className="font-heading text-lg text-ink mb-2">Toán Học Khối 9</h3>
              <p className="text-[12px] text-ink/60 font-light leading-relaxed mb-4">
                Buổi học ngày hôm qua (15/10) với bé Nguyễn Văn B chưa có nhận xét. Hãy dành vài phút chia sẻ về sự tiến bộ của con nhé.
              </p>
              <Button size="sm" className="w-full text-[10px] h-9 tracking-widest shadow-none">VIẾT NHẬN XÉT</Button>
            </div>
          </div>

          {/* Biến động thu nhập */}
          <div className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 border border-primary-100 paper-shadow">
            <div className="mb-6 pb-4 border-b border-primary-100">
              <h2 className="text-sm font-bold text-ink/50 uppercase tracking-[0.2em]">
                Dòng chảy thu nhập
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start group">
                <div>
                  <div className="font-heading text-base text-ink group-hover:text-primary-700 transition-colors">Toán Khối 9</div>
                  <div className="text-[11px] text-ink/40 uppercase tracking-widest mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-primary-500" /> Đã giải ngân
                  </div>
                </div>
                <div className="font-heading text-primary-700 text-lg">+400.000đ</div>
              </div>
              
              <div className="flex justify-between items-start group">
                <div>
                  <div className="font-heading text-base text-ink group-hover:text-primary-700 transition-colors">Tiếng Anh Giao Tiếp</div>
                  <div className="text-[11px] text-ink/40 uppercase tracking-widest mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-primary-500" /> Đã giải ngân
                  </div>
                </div>
                <div className="font-heading text-primary-700 text-lg">+300.000đ</div>
              </div>
              
              <div className="flex justify-between items-start group opacity-60">
                <div>
                  <div className="font-heading text-base text-ink">Vật Lý Khối 10</div>
                  <div className="text-[11px] text-ink/40 uppercase tracking-widest mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-accent-500" /> Chờ xác nhận
                  </div>
                </div>
                <div className="font-heading text-ink text-lg">500.000đ</div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-primary-50">
               <Button variant="link" className="w-full text-[10px] tracking-widest p-0">XEM BÁO CÁO TÀI CHÍNH</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}