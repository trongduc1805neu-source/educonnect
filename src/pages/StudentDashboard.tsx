import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

export function StudentDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16 px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight relative inline-block mb-2">
            Bảng điều khiển Phụ huynh / Học sinh
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h1>
          <p className="text-lg text-slate-600 mt-2 font-medium">Quản lý học tập, thanh toán và theo dõi tiến độ của con.</p>
        </div>
        <Button variant="outline" className="shrink-0 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
          Thông báo (3)
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Wallet / Escrow */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-emerald-800 p-6 shadow-sm text-white">
          <div className="flex items-center justify-between mb-4 border-b border-emerald-700 pb-2">
            <span className="text-sm font-bold text-emerald-100 uppercase tracking-wider">Ví Ký Quỹ (Escrow)</span>
          </div>
          <div className="text-3xl font-bold mb-2">1.500.000đ</div>
          <div className="text-sm text-emerald-200 font-medium">
            Đã nạp 2.000.000đ tháng này
          </div>
          <Button variant="secondary" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider bg-white text-emerald-800 hover:bg-emerald-50">
            Nạp thêm tiền
          </Button>
        </motion.div>

        {/* Upcoming Lessons */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Lịch học sắp tới</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">3 buổi</div>
          <div className="text-sm text-slate-600 font-medium">
            Buổi tiếp theo: <span className="text-emerald-700 font-bold">18:00 hôm nay</span>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Xem lịch chi tiết
          </Button>
        </motion.div>

        {/* Contact Book Reports */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Sổ liên lạc mới</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">2 báo cáo</div>
          <div className="text-sm text-slate-600 font-medium">
            Cập nhật <span className="text-emerald-700 font-bold">2 giờ trước</span>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Đọc nhận xét
          </Button>
        </motion.div>

        {/* Hours Learned */}
        <motion.div whileHover={{ y: -2 }} className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tổng giờ học</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">24 giờ</div>
          <div className="text-sm text-slate-600 font-medium">
            Tăng <span className="text-emerald-700 font-bold">15%</span> so với tháng trước
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6 rounded-sm uppercase font-bold tracking-wider border-emerald-700 text-emerald-700 hover:bg-emerald-50">
            Xem thống kê
          </Button>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content: Contact Book & Insights */}
        <div className="lg:col-span-2 space-y-8">
          {/* Sổ Liên Lạc Điện Tử 2.0 */}
          <div className="rounded-sm bg-white p-8 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6 border-b-2 border-emerald-800 pb-2">
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider">
                Sổ Liên Lạc Điện Tử 2.0
              </h2>
              <Button variant="ghost" size="sm" className="text-emerald-700 font-bold uppercase tracking-wider hover:bg-emerald-50 rounded-sm">Xem tất cả</Button>
            </div>

            <div className="space-y-6">
              {/* Report Item */}
              <div className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg uppercase tracking-wide">Môn Toán - Lớp 9</h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">Gia sư: <span className="text-emerald-700 font-bold">Nguyễn Văn A</span></p>
                    <p className="text-sm text-slate-500 mt-1">Ngày học: 15/10/2023 - 18:00 đến 20:00</p>
                  </div>
                  <span className="inline-flex items-center rounded-sm bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 uppercase tracking-wider h-fit">
                    Đã xác nhận
                  </span>
                </div>
                
                <div className="bg-slate-50 rounded-sm p-6 space-y-4 border border-slate-200">
                  <div className="grid grid-cols-2 gap-6 border-b border-slate-200 pb-4">
                    <div className="space-y-2">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chuyên cần</span>
                      <div className="text-sm font-bold text-slate-900">
                        Đúng giờ <span className="text-emerald-700">(5/5)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tiếp thu</span>
                      <div className="text-sm font-bold text-slate-900">
                        Khá tốt <span className="text-emerald-700">(4/5)</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-2">Nhận xét của gia sư</span>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">Cháu làm bài tập về nhà đầy đủ. Hôm nay học phần Hình học không gian, cháu nắm bắt nhanh nhưng phần tính thể tích còn hơi chậm. Đã giao thêm 3 bài tập tương tự để luyện tập.</p>
                  </div>
                </div>

                {/* AI Insights (Phase 2 feature) */}
                <div className="mt-6 rounded-sm bg-emerald-50 p-6 border border-emerald-200">
                  <div className="text-sm font-bold text-emerald-900 mb-3 uppercase tracking-wider border-b border-emerald-200 pb-2">
                    AI Lesson Insights (Phân tích tự động)
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-800 list-disc list-inside font-medium">
                    <li>Thời gian học sinh tương tác: <span className="font-bold">45% (Tốt)</span></li>
                    <li>Lỗi sai phổ biến: <span className="font-bold">Nhầm lẫn dấu hiệu nhận biết hình thang cân.</span></li>
                    <li>Đã tự động tạo <span className="font-bold">5 flashcard</span> ôn tập từ vựng/công thức mới.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Payment & Upcoming */}
        <div className="space-y-8">
          {/* Escrow Payment Status */}
          <div className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                Thanh toán chờ xử lý
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-sm p-5 border border-slate-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-bold text-slate-900 uppercase tracking-wide">Toán Lớp 9</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">15/10/2023 (2 giờ)</div>
                  </div>
                  <div className="font-bold text-emerald-700 text-lg">400.000đ</div>
                </div>
                <p className="text-xs text-slate-600 mb-4 font-medium leading-relaxed">Đang chờ phụ huynh xác nhận buổi học để giải ngân cho gia sư.</p>
                <div className="flex gap-3">
                  <Button size="sm" className="w-full text-xs rounded-sm uppercase font-bold tracking-wider bg-emerald-700 hover:bg-emerald-800 text-white">Xác nhận & Trả tiền</Button>
                  <Button size="sm" variant="outline" className="w-full text-xs rounded-sm uppercase font-bold tracking-wider text-red-700 border-red-300 hover:bg-red-50">Khiếu nại</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="rounded-sm bg-white p-6 shadow-sm border border-slate-200">
            <div className="border-b-2 border-emerald-800 pb-2 mb-6">
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                Lịch học tuần này
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
                <div className="rounded-sm bg-emerald-50 p-3 text-center min-w-[60px] border border-emerald-200">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Thứ 3</div>
                  <div className="text-xl font-bold text-emerald-900 mt-1">17</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wide">Tiếng Anh Giao Tiếp</div>
                  <div className="text-sm text-emerald-700 font-bold mt-1">18:00 - 19:30</div>
                  <div className="text-xs text-slate-600 font-medium mt-1">Gia sư: <span className="font-bold">Trần Thị B</span></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-sm bg-slate-50 p-3 text-center min-w-[60px] border border-slate-200">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Thứ 5</div>
                  <div className="text-xl font-bold text-slate-800 mt-1">19</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 uppercase tracking-wide">Toán Lớp 9</div>
                  <div className="text-sm text-slate-600 font-bold mt-1">19:00 - 21:00</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Gia sư: <span className="font-bold">Nguyễn Văn A</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
