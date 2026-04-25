import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { MOCK_TUTORS } from "../data/tutors";
import { SUBJECTS, HANOI_WARDS } from "../constants";

const MOCK_CLASSES = [
  {
    id: 1,
    title: "Luyện đề Toán 12 - Trọng điểm hình học",
    subject: MOCK_TUTORS[0].subject,
    tutor: `Cô ${MOCK_TUTORS[0].name}`,
    tutorImage: MOCK_TUTORS[0].photoURL,
    schedule: "Tối Thứ 3 & Thứ 6 (19:30 - 21:00)",
    location: MOCK_TUTORS[0].location,
    mode: MOCK_TUTORS[0].mode,
    price: MOCK_TUTORS[0].fee,
    enrolled: 3,
    capacity: 5,
    startDate: "15/11/2026",
    tags: ["Luyện đề", "Mục tiêu 8+"],
  },
  {
    id: 2,
    title: "Tiếng Anh Giao Tiếp - Xóa mất gốc",
    subject: MOCK_TUTORS[1].subject,
    tutor: `Cô ${MOCK_TUTORS[1].name}`,
    tutorImage: MOCK_TUTORS[1].photoURL,
    schedule: "Sáng Chủ Nhật (08:30 - 11:30)",
    location: MOCK_TUTORS[1].location,
    mode: MOCK_TUTORS[1].mode,
    price: MOCK_TUTORS[1].fee,
    enrolled: 8,
    capacity: 10,
    startDate: "20/11/2026",
    tags: ["Giao tiếp", "Người đi làm"],
  },
  {
    id: 3,
    title: "Luyện thi Chuyên Đại học",
    subject: MOCK_TUTORS[2].subject,
    tutor: `Cô ${MOCK_TUTORS[2].name}`,
    tutorImage: MOCK_TUTORS[2].photoURL,
    schedule: "Tối Thứ 4 (18:00 - 20:00)",
    location: MOCK_TUTORS[2].location,
    mode: MOCK_TUTORS[2].mode,
    price: MOCK_TUTORS[2].fee,
    enrolled: 2,
    capacity: 4,
    startDate: "01/12/2026",
    tags: ["Chuyên gia", "Học sinh mới"],
  },
  {
    id: 4,
    title: "Lấy lại gốc Vật Lý 11",
    subject: MOCK_TUTORS[3].subject,
    tutor: `Thầy ${MOCK_TUTORS[3].name}`,
    tutorImage: MOCK_TUTORS[3].photoURL,
    schedule: "Chiều Thứ 7 & Sáng CN",
    location: MOCK_TUTORS[3].location,
    mode: MOCK_TUTORS[3].mode,
    price: MOCK_TUTORS[3].fee,
    enrolled: 4,
    capacity: 6,
    startDate: "10/12/2026",
    tags: ["Cơ bản", "Tận tâm"],
  },
  {
    id: 5,
    title: "Hóa Học Vui Mỗi Ngày",
    subject: MOCK_TUTORS[4].subject,
    tutor: `Thầy ${MOCK_TUTORS[4].name}`,
    tutorImage: MOCK_TUTORS[4].photoURL,
    schedule: "Tối Thứ 2 & Thứ 5 (19:00 - 21:00)",
    location: MOCK_TUTORS[4].location,
    mode: MOCK_TUTORS[4].mode,
    price: MOCK_TUTORS[4].fee,
    enrolled: 1,
    capacity: 5,
    startDate: "05/12/2026",
    tags: ["Thực hành", "Ứng dụng"],
  },
  {
    id: 6,
    title: "Chinh phục IELTS 7.0+",
    subject: MOCK_TUTORS[5].subject,
    tutor: `Thầy ${MOCK_TUTORS[5].name}`,
    tutorImage: MOCK_TUTORS[5].photoURL,
    schedule: "Sáng Thứ 3 & Thứ 5 (08:00 - 10:00)",
    location: MOCK_TUTORS[5].location,
    mode: MOCK_TUTORS[5].mode,
    price: MOCK_TUTORS[5].fee,
    enrolled: 5,
    capacity: 8,
    startDate: "20/12/2026",
    tags: ["IELTS", "Cam kết đầu ra"],
  },
];

export function FindClass() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [learningMode, setLearningMode] = useState("");
  const [availability, setAvailability] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    subject: "",
    location: "",
    learningMode: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleApplyFilters = () => {
    setAppliedFilters({
      searchTerm,
      subject,
      location,
      learningMode,
      availability,
    });
  };

  const filteredClasses = MOCK_CLASSES.filter((cls) => {
    if (
      appliedFilters.searchTerm &&
      !cls.title
        .toLowerCase()
        .includes(appliedFilters.searchTerm.toLowerCase()) &&
      !cls.subject
        .toLowerCase()
        .includes(appliedFilters.searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (appliedFilters.subject && cls.subject !== appliedFilters.subject) {
      return false;
    }
    if (appliedFilters.location && cls.location !== appliedFilters.location) {
      return false;
    }
    if (appliedFilters.learningMode) {
      if (appliedFilters.learningMode === "offline" && cls.mode === "Online")
        return false;
      if (appliedFilters.learningMode === "online" && cls.mode === "Tại nhà")
        return false;
    }
    if (appliedFilters.availability) {
      if (
        appliedFilters.availability === "available" &&
        cls.enrolled >= cls.capacity
      )
        return false;
      if (appliedFilters.availability === "full" && cls.enrolled < cls.capacity)
        return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-8">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-6 leading-tight">
          Giảng đường{" "}
          <span className="italic text-primary-700 font-normal">thu nhỏ.</span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          Tham gia vào các không gian học tập nhóm được thiết kế tỉ mỉ. Tối ưu
          hóa chi phí, nhân đôi nguồn cảm hứng từ những người bạn đồng hành.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-2">
          <Button
            variant="outline"
            className="w-full h-12 flex items-center justify-center gap-2 border-primary-200"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Search className="w-4 h-4" />
            {isMobileFilterOpen ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
          </Button>
        </div>

        {/* Sidebar Bộ lọc */}
        <aside
          className={`w-full lg:w-80 shrink-0 ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}
        >
          <div className="sticky top-28 bg-[#FDFBF7] rounded-[32px] p-6 lg:p-8 border border-primary-100 shadow-xl shadow-primary-900/5 space-y-6 lg:space-y-8">
            <div className="border-b border-primary-100 pb-4 mb-2">
              <h4 className="text-[12px] font-bold text-ink uppercase tracking-[0.2em] flex items-center gap-2">
                <Search className="w-4 h-4 text-primary-700" /> Tìm kiếm lớp
              </h4>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                  Tên lớp / Môn học
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nhập từ khóa..."
                    className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 placeholder:text-ink/30 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                  Môn học
                </label>
                <select
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Tất cả chuyên ngành</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                  Không gian học
                </label>
                <select
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                  value={learningMode}
                  onChange={(e) => setLearningMode(e.target.value)}
                >
                  <option value="">Tất cả hình thức</option>
                  <option value="offline">Trực tiếp (Tại nhà)</option>
                  <option value="online">Trực tuyến (Online)</option>
                </select>
              </div>

              {learningMode !== "online" && (
                <div>
                  <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                    Khu vực (Hà Nội)
                  </label>
                  <select
                    className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Toàn thành phố</option>
                    {HANOI_WARDS.map((ward) => (
                      <option key={ward} value={ward}>
                        {ward}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                  Tình trạng chỗ
                </label>
                <select
                  className="w-full bg-primary-50/50 border border-primary-100 rounded-xl py-3 px-4 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary-700/20 focus:border-primary-700 appearance-none font-medium cursor-pointer transition-all"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  <option value="available">Đang mở đăng ký (Còn chỗ)</option>
                  <option value="full">Đã đủ học viên</option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleApplyFilters}
                  className="w-full h-12 text-xs tracking-widest shadow-md"
                >
                  ÁP DỤNG BỘ LỌC
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Danh sách lớp học */}
        <div className="flex-1 space-y-12">
          {filteredClasses.map((cls, idx) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-primary-100 last:border-0"
            >
              {/* Lịch & Sĩ số (Khối thông tin bên trái) */}
              <div className="w-full md:w-40 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">
                    Khai giảng
                  </div>
                  <div className="text-xl font-heading text-ink">
                    {cls.startDate}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">
                    Sĩ số
                  </div>
                  <div className="text-xl font-heading text-primary-700">
                    {cls.enrolled}
                    <span className="text-sm text-ink/30">/{cls.capacity}</span>
                  </div>
                  <div className="text-[10px] text-accent-500 font-medium mt-1">
                    Còn {cls.capacity - cls.enrolled} chỗ
                  </div>
                </div>
              </div>

              {/* Chi tiết lớp học */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-2 py-1 rounded">
                    {cls.subject}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-heading text-ink">
                      {cls.price}
                    </div>
                    <div className="text-[10px] text-ink/40 uppercase tracking-widest">
                      / buổi
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-heading text-ink mb-4 group-hover:text-primary-700 transition-colors">
                  <Link to={`/class/${cls.id}`}>{cls.title}</Link>
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <img
                      src={cls.tutorImage}
                      alt="Tutor"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    Giảng viên:{" "}
                    <span className="font-medium text-ink">{cls.tutor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <Calendar className="w-4 h-4 text-primary-700" />
                    {cls.schedule}
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-ink/70">
                    <MapPin className="w-4 h-4 text-primary-700" />
                    {cls.mode} — {cls.location}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-primary-50">
                  <div className="flex gap-2">
                    {cls.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-ink/50 uppercase tracking-widest border border-primary-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() =>
                      navigate("/payment", {
                        state: { type: "class", data: cls },
                      })
                    }
                    className="w-full sm:w-auto text-[11px] h-10 px-6 tracking-widest"
                  >
                    ĐĂNG KÝ HỌC <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
