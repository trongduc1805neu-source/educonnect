import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Sparkles, BrainCircuit, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Onboarding() {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Form states
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);

  // If no user or if they already completed onboarding, go back
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if ((userData as any)?.onboardingCompleted) {
      navigate("/dashboard");
    }
  }, [user, userData, navigate]);

  const completeOnboarding = async () => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        onboardingCompleted: true,
        phone,
        grade,
        goals,
        subjects,
      });
      // Force reload to update context and go to dashboard
      window.location.href = "/dashboard";
    } catch (e) {
      console.error(e);
      window.location.href = "/dashboard";
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(5); // AI processing
    }
  };

  useEffect(() => {
    if (step === 5) {
      // Simulate AI processing
      const timer = setTimeout(() => {
        completeOnboarding();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden mt-8 pb-24">
      <div className="max-w-2xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-primary-100 shadow-sm relative overflow-hidden"
            >
              <h2 className="text-3xl font-heading text-ink mb-2">
                Chào mừng, {userData?.displayName?.split(" ")[0] || "bạn"}!
              </h2>
              <p className="text-ink/60 mb-8 font-light">
                Hãy cho chúng tôi biết thêm một chút về bạn để EduConnect hỗ trợ
                tốt nhất.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ink/70 mb-2">
                    Số điện thoại liên hệ
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-primary-100 p-4 bg-transparent outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all text-ink"
                    placeholder="VD: 0987xxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink/70 mb-2">
                    {userData?.role === "tutor"
                      ? "Bạn nhận dạy cấp học nào?"
                      : "Bạn đang học lớp mấy?"}
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full rounded-2xl border border-primary-100 p-4 bg-transparent outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 transition-all text-ink appearance-none"
                  >
                    <option value="" disabled>
                      Chọn cấp/lớp học
                    </option>
                    {userData?.role === "tutor" ? (
                      <>
                        <option value="Tiểu học">Tiểu học</option>
                        <option value="THCS">THCS</option>
                        <option value="THPT">THPT</option>
                        <option value="Tất cả các cấp">Tất cả các cấp</option>
                      </>
                    ) : (
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "Đại học"].map(
                        (g) => (
                          <option key={g} value={g}>
                            {typeof g === "number" ? `Lớp ${g}` : g}
                          </option>
                        ),
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <Button
                  onClick={handleNext}
                  disabled={!phone || !grade}
                  className="rounded-xl px-8 tracking-widest uppercase text-xs font-bold bg-primary-700 hover:bg-primary-800 text-white h-12 flex items-center justify-center"
                >
                  Tiếp tục <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-primary-100 shadow-sm relative overflow-hidden"
            >
              <h2 className="text-3xl font-heading text-ink mb-2">
                {userData?.role === "tutor"
                  ? "Bạn giảng dạy những môn nào?"
                  : "Bạn cần hỗ trợ môn học nào?"}
              </h2>
              <p className="text-ink/60 mb-8 font-light">
                Chọn một hoặc nhiều môn học.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Toán",
                  "Vật Lý",
                  "Hóa Học",
                  "Ngữ Văn",
                  "Tiếng Anh",
                  "Sinh Học",
                  "IELTS",
                  "Lập trình",
                ].map((subject) => (
                  <button
                    key={subject}
                    onClick={() => {
                      setSubjects((prev) =>
                        prev.includes(subject)
                          ? prev.filter((s) => s !== subject)
                          : [...prev, subject],
                      );
                    }}
                    className={`p-4 rounded-2xl border text-center font-medium transition-all ${
                      subjects.includes(subject)
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-primary-100 text-ink/70 hover:border-primary-300"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-ink/50 hover:text-ink text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  Quay lại
                </button>
                <Button
                  onClick={handleNext}
                  disabled={subjects.length === 0}
                  className="rounded-xl px-8 tracking-widest uppercase text-xs font-bold bg-primary-700 hover:bg-primary-800 text-white h-12 flex items-center justify-center"
                >
                  Tiếp tục <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-primary-100 shadow-sm relative overflow-hidden"
            >
              <h2 className="text-3xl font-heading text-ink mb-2">
                Mục tiêu của bạn là gì?
              </h2>
              <p className="text-ink/60 mb-8 font-light">
                Điều này giúp EduConnect cá nhân hóa lộ trình cho bạn.
              </p>

              <div className="space-y-4">
                {(userData?.role === "tutor"
                  ? [
                      "Tìm kiếm học viên phù hợp",
                      "Xây dựng thương hiệu cá nhân",
                      "Nâng cao kỹ năng sư phạm",
                      "Gia tăng thu nhập ngoài giờ",
                      "Đóng góp cho cộng đồng giáo dục",
                    ]
                  : [
                      "Cải thiện điểm số trên lớp",
                      "Lấy lại kiến thức căn bản",
                      "Ôn thi chuyển cấp / Đại học",
                      "Luyện thi học sinh giỏi",
                      "Học trước chương trình",
                    ]
                ).map((goal) => (
                  <button
                    key={goal}
                    onClick={() => {
                      setGoals((prev) =>
                        prev.includes(goal)
                          ? prev.filter((g) => g !== goal)
                          : [...prev, goal],
                      );
                    }}
                    className={`w-full p-5 rounded-2xl border text-left font-medium transition-all flex items-center justify-between ${
                      goals.includes(goal)
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-primary-100 text-ink/70 hover:border-primary-300"
                    }`}
                  >
                    <span>{goal}</span>
                    {goals.includes(goal) && (
                      <CheckCircle2 className="w-5 h-5 text-primary-700" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-ink/50 hover:text-ink text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  Quay lại
                </button>
                <Button
                  onClick={handleNext}
                  disabled={goals.length === 0}
                  className="rounded-xl px-8 tracking-widest uppercase text-xs font-bold bg-primary-700 hover:bg-primary-800 text-white h-12 flex items-center justify-center"
                >
                  Tiếp tục <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-primary-50/40 backdrop-blur-sm rounded-[40px] p-6 lg:p-12 border border-primary-100 shadow-sm text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-primary-50 rounded-2xl mx-auto flex items-center justify-center text-primary-700 mb-6">
                <Sparkles className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-heading text-ink mb-4">
                Bạn đã sẵn sàng!
              </h2>
              <p className="text-ink/60 mb-10 font-light leading-relaxed max-w-md mx-auto">
                {userData?.role === "tutor"
                  ? "EduConnect sẽ tối ưu hóa điểm mạnh của bạn và đưa hồ sơ của bạn đến với hàng ngàn học viên tiềm năng phù hợp nhất."
                  : "EduConnect sẽ sử dụng AI để thiết kế lộ trình và đề xuất gia sư hoàn hảo nhất dựa trên thông tin bạn vừa cung cấp."}
              </p>

              <Button
                onClick={handleNext}
                className="mx-auto rounded-xl px-10 tracking-widest uppercase text-xs font-bold bg-primary-700 hover:bg-primary-800 text-white h-14 w-full md:w-auto flex items-center justify-center gap-2 shadow-lg shadow-primary-700/20"
              >
                {userData?.role === "tutor"
                  ? "Xây dựng hồ sơ tối ưu ngay"
                  : "Tạo lộ trình tối ưu ngay"}
              </Button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center p-8 space-y-8"
            >
              <div className="relative w-32 h-32 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-primary-500 border-r-2 border-transparent"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-b-2 border-accent-500 border-l-2 border-transparent"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-primary-700">
                  <BrainCircuit className="w-12 h-12" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-heading text-ink mb-3">
                  AI đang phân tích hồ sơ...
                </h2>
                <div className="h-6 overflow-hidden relative leading-6">
                  <motion.div
                    animate={{ y: [0, -24, -48, -72] }}
                    transition={{ duration: 3.5, times: [0, 0.3, 0.6, 1] }}
                    className="text-ink/60 font-medium whitespace-nowrap"
                  >
                    {userData?.role === "tutor" ? (
                      <>
                        <p className="h-6">
                          Đánh giá kinh nghiệm chuyên môn...
                        </p>
                        <p className="h-6">Phân tích thị trường học viên...</p>
                        <p className="h-6">
                          Thiết lập hồ sơ giảng dạy tiêu chuẩn...
                        </p>
                        <p className="h-6">Chuẩn bị không gian lớp học ảo...</p>
                      </>
                    ) : (
                      <>
                        <p className="h-6">Đánh giá mục tiêu học tập...</p>
                        <p className="h-6">Lọc danh sách 1,000+ gia sư...</p>
                        <p className="h-6">
                          Thiết kế lộ trình học cá nhân hóa...
                        </p>
                        <p className="h-6">Chuẩn bị không gian học tập...</p>
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
