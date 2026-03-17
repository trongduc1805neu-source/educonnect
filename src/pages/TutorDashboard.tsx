import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

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
    <div className="max-w-6xl mx-auto space-y-8 pb-16 px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight relative inline-block mb-2">
            Bảng điều khiển Gia sư
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h1>
          <p className="text-lg text-slate-600 mt-2 font-medium">Quản lý lớp học, thu nhập và lịch trình giảng dạy.</p>
        </div>
        <Button variant="outline" className="shrink-0 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
          Thông báo (5)
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Earnings */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-emerald-800 p-6 shadow-sm text-white">
          <div className="flex items-center justify-between mb-4 border-b border-emerald-700 pb-2">
            <span className="text-sm font-bold text-emerald-100 uppercase tracking-wider">Thu nhập tháng này</span>
          </div>
          <div className="text-3xl font-bold mb-2">4.500.000đ</div>
          <div className="text-sm text-emerald-200 font-medium">
            Tăng 12% so với tháng trước
          </div>
          <Button variant="secondary" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider bg-white text-emerald-800 hover:bg-emerald-50">
            Rút tiền
          </Button>
        </motion.div>

        {/* Active Classes */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Lớp đang dạy</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">4 lớp</div>
          <div className="text-sm text-slate-600 font-medium">
            Tổng cộng <span className="text-emerald-700 font-bold">5 học sinh</span>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Quản lý lớp học
          </Button>
        </motion.div>

        {/* Pending Requests */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Yêu cầu nhận lớp</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">2 yêu cầu</div>
          <div className="text-sm text-slate-600 font-medium">
            Cần phản hồi <span className="text-emerald-700 font-bold">sớm</span>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Xem yêu cầu
          </Button>
        </motion.div>

        {/* Hours Taught */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Giờ dạy tháng này</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">32 giờ</div>
          <div className="text-sm text-slate-600 font-medium">
            Đạt <span className="text-emerald-700 font-bold">80%</span> mục tiêu
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Xem thống kê
          </Button>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content: Schedule & Contact Book */}
        <div className="lg:col-span-2 space-y-8">
          {/* Lớp mới đăng (Recent Class Requests) */}
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6 border-b-2 border-emerald-800 pb-2">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider">
                Lớp mới đăng
              </h2>
              <Button variant="ghost" size="sm" className="text-emerald-700 font-bold uppercase tracking-wider hover:bg-emerald-50 rounded-sm">Xem tất cả lớp</Button>
            </div>

            {loadingRequests ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-700"></div>
              </div>
            ) : recentRequests.length > 0 ? (
              <div className="space-y-4">
                {recentRequests.map((req) => (
                  <div key={req.id} className="p-6 rounded-sm border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wide">{req.subject} - {req.grade}</h3>
                      <span className="inline-flex items-center rounded-sm bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                        Mới
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 mb-6 font-medium">
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Hình thức</span>
                        {req.learningMode} {req.ward ? `(${req.ward})` : ''}
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Lịch học</span>
                        {req.sessionsPerWeek}
                      </div>
                      {req.expectedFee && (
                        <div className="sm:col-span-2">
                          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Học phí dự kiến</span>
                          <span className="font-bold text-emerald-700 text-base">{req.expectedFee}</span>
                        </div>
                      )}
                    </div>
                    <Button size="sm" className="w-full sm:w-auto rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Nhận lớp ngay</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 font-medium">
                Hiện chưa có lớp mới nào được đăng.
              </div>
            )}
          </div>

          {/* Lịch dạy hôm nay */}
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6 border-b-2 border-emerald-800 pb-2">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider">
                Lịch dạy hôm nay
              </h2>
              <Button variant="ghost" size="sm" className="text-emerald-700 font-bold uppercase tracking-wider hover:bg-emerald-50 rounded-sm">Xem toàn bộ lịch</Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 rounded-sm border border-slate-200 bg-slate-50">
                <div className="w-20 text-center shrink-0 border-r border-slate-300 pr-6">
                  <div className="text-2xl font-bold text-slate-900">18:00</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">1.5 giờ</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide">Toán Lớp 9 - Nguyễn Văn B</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    Trực tiếp tại nhà (Quận Cầu Giấy)
                  </p>
                </div>
                <Button size="sm" variant="outline" className="rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">Điểm danh</Button>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-sm border border-slate-200 bg-slate-50">
                <div className="w-20 text-center shrink-0 border-r border-slate-300 pr-6">
                  <div className="text-2xl font-bold text-slate-900">20:00</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">2 giờ</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide">Lý Lớp 10 - Trần Thị C</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    Trực tuyến (Google Meet)
                  </p>
                </div>
                <Button size="sm" variant="outline" className="rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">Vào lớp</Button>
              </div>
            </div>
          </div>

          {/* Sổ liên lạc cần viết */}
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6 border-b-2 border-emerald-800 pb-2">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider">
                Sổ liên lạc cần viết
              </h2>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-6">
              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide">Toán Lớp 9 - Nguyễn Văn B</h3>
                <p className="text-sm text-slate-700 font-medium mt-2 leading-relaxed">Buổi học ngày hôm qua (15/10) chưa có nhận xét. Vui lòng cập nhật sổ liên lạc để phụ huynh theo dõi.</p>
                <Button size="sm" className="mt-4 rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Viết nhận xét ngay</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Income & Requests */}
        <div className="space-y-8">
          {/* Recent Income */}
          <div className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                Thu nhập gần đây
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wide">Toán Lớp 9</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Đã giải ngân (15/10)</div>
                </div>
                <div className="font-bold text-emerald-700 text-lg">+400.000đ</div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wide">Tiếng Anh Giao Tiếp</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Đã giải ngân (14/10)</div>
                </div>
                <div className="font-bold text-emerald-700 text-lg">+300.000đ</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wide">Lý Lớp 10</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Chờ phụ huynh xác nhận</div>
                </div>
                <div className="font-bold text-slate-400 text-lg">500.000đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
