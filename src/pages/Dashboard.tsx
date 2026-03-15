import { motion } from 'framer-motion';
import { Wallet, Calendar as CalendarIcon, FileText, Bell, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, BrainCircuit } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-slate-900">Bảng điều khiển Phụ huynh</h1>
          <p className="text-slate-600 mt-1">Quản lý học tập, thanh toán và theo dõi tiến độ của con.</p>
        </div>
        <Button variant="outline" className="shrink-0">
          <Bell className="h-4 w-4 mr-2" /> Thông báo (3)
        </Button>
      </div>

      {/* Top Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Wallet / Escrow */}
        <motion.div whileHover={{ y: -2 }} className="rounded-3xl bg-primary-700 p-6 shadow-md text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="rounded-xl bg-white/20 p-2 backdrop-blur-sm">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-medium text-primary-100">Ví Ký Quỹ (Escrow)</span>
          </div>
          <div className="font-heading text-3xl font-bold mb-1">1.500.000đ</div>
          <div className="text-sm text-primary-200 flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4" /> Đã nạp 2.000.000đ tháng này
          </div>
          <Button variant="secondary" size="sm" className="w-full mt-6 bg-white text-primary-700 hover:bg-primary-50">
            Nạp thêm tiền
          </Button>
        </motion.div>

        {/* Upcoming Lessons */}
        <motion.div whileHover={{ y: -2 }} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-slate-500">Lịch học sắp tới</span>
          </div>
          <div className="font-heading text-3xl font-bold text-slate-900 mb-1">3 buổi</div>
          <div className="text-sm text-slate-500 flex items-center gap-1">
            <Clock className="h-4 w-4 text-blue-500" /> Buổi tiếp theo: 18:00 hôm nay
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6">
            Xem lịch chi tiết
          </Button>
        </motion.div>

        {/* Contact Book Reports */}
        <motion.div whileHover={{ y: -2 }} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="rounded-xl bg-accent-100 p-2 text-accent-600">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-slate-500">Sổ liên lạc mới</span>
          </div>
          <div className="font-heading text-3xl font-bold text-slate-900 mb-1">2 báo cáo</div>
          <div className="text-sm text-slate-500 flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-accent-500" /> Cập nhật 2 giờ trước
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6">
            Đọc nhận xét
          </Button>
        </motion.div>

        {/* Hours Learned */}
        <motion.div whileHover={{ y: -2 }} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-slate-500">Tổng giờ học</span>
          </div>
          <div className="font-heading text-3xl font-bold text-slate-900 mb-1">24 giờ</div>
          <div className="text-sm text-slate-500 flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4 text-emerald-500" /> Tăng 15% so với tháng trước
          </div>
          <Button variant="outline" size="sm" className="w-full mt-6">
            Xem thống kê
          </Button>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content: Contact Book & Insights */}
        <div className="lg:col-span-2 space-y-8">
          {/* Sổ Liên Lạc Điện Tử 2.0 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-6 w-6 text-accent-500" /> Sổ Liên Lạc Điện Tử 2.0
              </h2>
              <Button variant="ghost" size="sm" className="text-primary-700">Xem tất cả</Button>
            </div>

            <div className="space-y-6">
              {/* Report Item */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Toán học Lớp 9 - Ôn tập Hình học</h3>
                    <p className="text-sm text-slate-500 mt-1">Gia sư: Nguyễn Văn A • 18:00 - 20:00, 10/03/2026</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                    Đã hoàn thành
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl bg-white p-3 border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Chuyên cần</div>
                    <div className="font-medium text-slate-900 flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Đúng giờ (5/5)
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-semibold">Tiếp thu</div>
                    <div className="font-medium text-slate-900 flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Khá tốt (4/5)
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-slate-100">
                  <div className="text-sm font-semibold text-slate-900 mb-2">Nhận xét từ gia sư:</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Hôm nay Minh Đức đã nắm được cách chứng minh tứ giác nội tiếp cơ bản. Tuy nhiên, phần vẽ hình phụ vẫn còn lúng túng. 
                    Gia sư đã giao 3 bài tập về nhà phần này, phụ huynh nhắc nhở em làm bài đầy đủ nhé.
                  </p>
                </div>

                {/* AI Insights (Phase 2 feature) */}
                <div className="mt-4 rounded-xl bg-purple-50 p-4 border border-purple-100">
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-900 mb-2">
                    <BrainCircuit className="h-4 w-4" /> AI Lesson Insights (Phân tích tự động)
                  </div>
                  <ul className="space-y-1 text-sm text-purple-800 list-disc list-inside">
                    <li>Thời gian học sinh tương tác: 45% (Tốt)</li>
                    <li>Lỗi sai phổ biến: Nhầm lẫn dấu hiệu nhận biết hình thang cân.</li>
                    <li>Đã tự động tạo 5 flashcard ôn tập từ vựng/công thức mới.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Escrow Transactions & Schedule */}
        <div className="space-y-8">
          {/* Lịch sử Ký quỹ */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <h2 className="font-heading text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary-600" /> Giao dịch Ký quỹ
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-red-100 p-2 text-red-600">
                    <ArrowDownRight className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Thanh toán buổi học</div>
                    <div className="text-xs text-slate-500">Toán 9 • 10/03/2026</div>
                  </div>
                </div>
                <div className="font-semibold text-slate-900">-200.000đ</div>
              </div>
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-accent-100 p-2 text-accent-600">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Đang tạm giữ (Escrow)</div>
                    <div className="text-xs text-slate-500">Tiếng Anh • 12/03/2026</div>
                  </div>
                </div>
                <div className="font-semibold text-accent-600">-300.000đ</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">Nạp tiền vào ví</div>
                    <div className="text-xs text-slate-500">Qua ZaloPay • 01/03/2026</div>
                  </div>
                </div>
                <div className="font-semibold text-emerald-600">+2.000.000đ</div>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-4 text-primary-600">Xem toàn bộ lịch sử</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
