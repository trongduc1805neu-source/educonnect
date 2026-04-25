import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { LoginModal } from "../components/LoginModal";
import { HANOI_WARDS, SUBJECTS, GRADES } from "../constants";
import {
  Users,
  MapPin,
  Clock,
  BookOpen,
  Edit3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Dữ liệu mẫu được trau chuốt lại với văn phong chia sẻ, đồng hành
const MOCK_MATCHING_CLASSES = [
  {
    id: 1,
    subject: "Toán Học - Khối 10",
    currentStudents: 2,
    maxStudents: 4,
    location: "Cầu Giấy, Hà Nội",
    schedule: "Tối Thứ 3 & Thứ 5 (19:00 - 21:00)",
    tuitionPerStudent: "100.000đ",
    description:
      "Nhóm chúng mình hiện có 2 thành viên với mục tiêu nắm chắc nền tảng Toán cấp 3. Cần tìm thêm 1-2 bạn đồng hành để cùng nhau giải đề và tạo động lực học tập mỗi tuần.",
    author: "Phụ huynh bé Minh",
    type: "Tìm bạn đồng hành",
  },
  {
    id: 2,
    subject: "Tiếng Anh - Luyện thi IELTS",
    currentStudents: 1,
    maxStudents: 3,
    location: "Không gian trực tuyến (Zoom)",
    schedule: "Sáng cuối tuần (09:00 - 10:30)",
    tuitionPerStudent: "150.000đ",
    description:
      "Mình đang kẹt ở band 6.0 và cần tìm những người bạn cùng chí hướng để luyện Speaking và trao đổi ideas. Có giáo viên hướng dẫn trực tiếp sửa lỗi.",
    author: "Học viên Lan Anh",
    type: "Tìm bạn đồng hành",
  },
  {
    id: 3,
    subject: "Hóa Học - Khối 12",
    currentStudents: 3,
    maxStudents: 5,
    location: "Đống Đa, Hà Nội",
    schedule: "Tối Thứ 2, 4, 6 (18:00 - 20:00)",
    tuitionPerStudent: "200.000đ",
    description:
      "Lớp luyện thi đại học chuyên sâu do thầy Hoàng trực tiếp đứng lớp. Không gian học tập yên tĩnh, tài liệu được biên soạn riêng. Hiện còn 2 vị trí trống.",
    author: "Gia sư Hoàng",
    type: "Mở rộng lớp học",
  },
];

export function MatchClass() {
  const [activeTab, setActiveTab] = useState<"find" | "create">("find");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [learningMode, setLearningMode] = useState("Trực tiếp");
  const [matchItems, setMatchItems] = useState(MOCK_MATCHING_CLASSES);
  const [joinedIds, setJoinedIds] = useState<number[]>([]);

  // Form states
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [currentStudents, setCurrentStudents] = useState<number>(1);
  const [maxStudents, setMaxStudents] = useState<number>(4);
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      subject: `${subject} ${grade ? `- ${grade}` : ""}`,
      currentStudents,
      maxStudents,
      location:
        learningMode === "Trực tuyến"
          ? "Không gian trực tuyến"
          : area || "Hà Nội",
      schedule: "Đang thảo luận",
      tuitionPerStudent: "Thỏa thuận",
      description:
        description ||
        "Chúng mình đang tìm bạn đồng hành cùng mục tiêu học tập...",
      author: "Bạn",
      type: "Tìm bạn đồng hành",
    };
    setMatchItems([newItem, ...matchItems]);
    setActiveTab("find");
    // reset form
    setSubject("");
    setGrade("");
    setCurrentStudents(1);
    setMaxStudents(4);
    setArea("");
    setDescription("");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-24 px-6 mt-8">
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Tiêu đề mang tính tự sự */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-6 leading-tight">
          Hành trình <span className="italic text-primary-700">song hành.</span>
        </h1>
        <p className="text-lg text-ink/70 font-light leading-relaxed">
          Không ai phải đi một mình. Kết nối với những tâm hồn đồng điệu để sẻ
          chia không gian học tập, nhân đôi động lực và lan tỏa tri thức.
        </p>
      </header>

      {/* Tabs Menu - Thanh lịch như mục lục tạp chí */}
      <div className="flex gap-8 border-b border-primary-200 pb-px">
        <button
          onClick={() => setActiveTab("find")}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
            activeTab === "find"
              ? "text-primary-700"
              : "text-ink/40 hover:text-ink/70"
          }`}
        >
          Bảng tin lớp ghép
          {activeTab === "find" && (
            <motion.div
              layoutId="match-tab"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-700"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
            activeTab === "create"
              ? "text-primary-700"
              : "text-ink/40 hover:text-ink/70"
          }`}
        >
          Tạo lời mời mới
          {activeTab === "create" && (
            <motion.div
              layoutId="match-tab"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-700"
            />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "find" ? (
          <motion.div
            key="find"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Bộ lọc tối giản */}
            <div className="flex flex-col sm:flex-row gap-6 max-w-3xl">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm môn học, từ khóa..."
                  className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/30 transition-colors"
                />
              </div>
              <div className="sm:w-64">
                <select className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer text-sm">
                  <option>Tất cả hình thức</option>
                  <option>Trực tiếp (Tại nhà)</option>
                  <option>Không gian trực tuyến</option>
                </select>
              </div>
            </div>

            {/* Danh sách các "Mẩu tin" (Notices) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-[#FDFBF7] p-8 border border-primary-100 rounded-2xl paper-shadow flex flex-col hover:border-primary-300 transition-colors group relative overflow-hidden"
                >
                  {/* Nhãn tag tinh tế */}
                  <div className="mb-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        item.type === "Tìm bạn đồng hành"
                          ? "bg-accent-50 text-accent-600"
                          : "bg-primary-50 text-primary-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading text-ink mb-2 group-hover:text-primary-700 transition-colors">
                    {item.subject}
                  </h3>
                  <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-6">
                    Đăng bởi: {item.author}
                  </p>

                  <p className="text-ink/70 text-[15px] font-light leading-relaxed mb-8 flex-1">
                    "{item.description}"
                  </p>

                  <div className="space-y-4 pt-6 border-t border-primary-50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2 text-[13px] text-ink/60">
                        <Users className="w-4 h-4 text-primary-700" />
                        <span>
                          Sĩ số: {item.currentStudents}/{item.maxStudents}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-heading text-primary-700">
                          {item.tuitionPerStudent}
                        </div>
                        <div className="text-[10px] text-ink/40 uppercase tracking-widest">
                          / buổi
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-ink/60">
                      <MapPin className="w-4 h-4 text-primary-700 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] text-ink/60">
                      <Clock className="w-4 h-4 text-primary-700 shrink-0" />
                      <span className="truncate">{item.schedule}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!joinedIds.includes(item.id)) {
                        setJoinedIds([...joinedIds, item.id]);
                      }
                    }}
                    className={`mt-8 w-full py-3 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-colors ${
                      joinedIds.includes(item.id)
                        ? "bg-emerald-50 text-emerald-600 cursor-default"
                        : "text-primary-700 bg-primary-50 hover:bg-primary-100"
                    }`}
                  >
                    {joinedIds.includes(item.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Đã tham gia nhóm
                      </>
                    ) : (
                      <>
                        Tham gia nhóm{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            {/* Form tạo yêu cầu với phong cách Biểu mẫu điền tay */}
            <div className="bg-[#FDFBF7] p-6 sm:p-10 lg:p-14 border border-primary-100 rounded-3xl paper-shadow">
              <div className="flex items-center gap-3 mb-10 pb-6 border-b border-primary-100">
                <div className="p-3 bg-primary-50 rounded-xl text-primary-700">
                  <Edit3 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading text-ink">
                    Mở lời mời mới
                  </h2>
                  <p className="text-sm text-ink/50 font-light mt-1">
                    Chi tiết và chân thành sẽ giúp bạn tìm được người đồng hành
                    phù hợp.
                  </p>
                </div>
              </div>

              <form className="space-y-10" onSubmit={handleCreatePost}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                      Lĩnh vực học tập
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer"
                    >
                      <option value="">Chọn môn học...</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                      Cấp độ / Khối lớp
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      required
                      className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer"
                    >
                      <option value="">Chọn trình độ...</option>
                      {GRADES.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                      Sĩ số hiện tại
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={currentStudents}
                      onChange={(e) =>
                        setCurrentStudents(Number(e.target.value) || 1)
                      }
                      className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                      Quy mô nhóm mong muốn (Tối đa)
                    </label>
                    <input
                      type="number"
                      min="2"
                      value={maxStudents}
                      onChange={(e) =>
                        setMaxStudents(Number(e.target.value) || 2)
                      }
                      className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                      Không gian học
                    </label>
                    <select
                      className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer"
                      value={learningMode}
                      onChange={(e) => setLearningMode(e.target.value)}
                    >
                      <option value="Trực tiếp">Gặp mặt trực tiếp</option>
                      <option value="Trực tuyến">Học trực tuyến</option>
                    </select>
                  </div>
                  {learningMode === "Trực tiếp" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-2 block">
                        Khu vực dự kiến
                      </label>
                      <select
                        className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none font-medium cursor-pointer"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      >
                        <option value="">Chọn khu vực tại Hà Nội...</option>
                        {HANOI_WARDS.map((ward) => (
                          <option key={ward} value={ward}>
                            {ward}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="text-[10px] font-bold text-ink/50 uppercase tracking-widest mb-4 block">
                    Câu chuyện của bạn
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Hãy chia sẻ đôi điều về mục tiêu, kỳ vọng hoặc phong cách học tập của bạn để tìm được những người bạn phù hợp nhất..."
                    className="w-full bg-primary-50/50 border border-primary-100 rounded-xl p-4 text-ink focus:ring-1 focus:ring-primary-700 focus:border-primary-700 resize-none text-[15px] font-light leading-relaxed placeholder:text-ink/30"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full lg:w-auto h-12 px-10 text-xs tracking-widest shadow-md"
                  >
                    ĐĂNG LỜI MỜI
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
