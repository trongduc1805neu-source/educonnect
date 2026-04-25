import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { X, User, GraduationCap, AlertCircle, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth, UserData } from "../contexts/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  intendedRole?: "student" | "tutor";
  initialMode?: "login" | "register";
}

export function LoginModal({
  isOpen,
  onClose,
  title = "Chào mừng trở lại.",
  message = "Hãy lựa chọn không gian phù hợp với hành trình của bạn.",
  initialMode = "login"
}: LoginModalProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const { loginLocal } = useAuth();
  
  // reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLogin(initialMode === "login");
      setError(null);
      setEmail("");
      setPassword("");
    }
  }, [isOpen, initialMode]);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"student" | "tutor">("student");
  
  const navigate = useNavigate();

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }
    
    setLoading(true);
    setError(null);
    try {
      const usersStr = localStorage.getItem("educonnect_users");
      const users = usersStr ? JSON.parse(usersStr) : {};
      
      if (isLogin) {
        // Đăng nhập
        const userRec = users[email];
        if (!userRec || userRec.password !== password) {
          setError("Email hoặc mật khẩu không chính xác.");
          setLoading(false);
          return;
        }
        
        // Cập nhật session role nếu cần thiết hoặc chỉ dùng role đã lưu
        const userData: UserData = {
          uid: email, // Dùng email làm uid tạm
          email: email,
          displayName: userRec.displayName || email.split("@")[0],
          photoURL: null,
          role: userRec.role,
          createdAt: userRec.createdAt,
          onboardingCompleted: true,
        };
        
        loginLocal(userData);
        onClose();
        navigate("/dashboard");
      } else {
        // Đăng ký
        if (users[email]) {
          setError("Email này đã được sử dụng.");
          setLoading(false);
          return;
        }
        
        if (password.length < 6) {
          setError("Mật khẩu phải có ít nhất 6 ký tự.");
          setLoading(false);
          return;
        }
        
        const newUserRec = {
          email,
          password,
          role,
          createdAt: new Date().toISOString(),
          onboardingCompleted: false
        };
        
        users[email] = newUserRec;
        localStorage.setItem("educonnect_users", JSON.stringify(users));
        
        const userData: UserData = {
          uid: email,
          email: email,
          displayName: email.split("@")[0],
          photoURL: null,
          role: role,
          createdAt: newUserRec.createdAt,
          onboardingCompleted: false,
        };
        
        loginLocal(userData);
        onClose();
        navigate("/dashboard");
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Lớp nền mờ (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-md"
          />

          {/* Khối Modal chính */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-paper rounded-[2rem] shadow-2xl overflow-hidden border border-primary-100 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8 sm:p-12 relative">
              {/* Nút Đóng (Close) tối giản */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2.5 rounded-full text-ink/30 hover:text-ink hover:bg-primary-50 transition-colors z-20"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Tiêu đề & Lời dẫn */}
              <div className="text-center mb-8 relative z-10 mt-2">
                <h2 className="text-3xl font-heading text-ink mb-3 tracking-tight">
                  {isLogin ? "Đăng nhập" : "Tạo tài khoản"}
                </h2>
                <p className="text-ink/50 text-[14px] font-light leading-relaxed max-w-[260px] mx-auto">
                  {isLogin ? "Chào mừng bạn quay trở lại EduConnect." : "Bắt đầu hành trình giáo dục của bạn cùng EduConnect."}
                </p>
              </div>

              {/* Thông báo lỗi (Nếu có) */}
              {error && (
                <div className="mb-6 p-3 bg-accent-50 text-accent-600 text-[13px] rounded-xl text-center border border-accent-100 flex items-center justify-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              {/* Form Email/Password */}
              <form onSubmit={handleEmailAuth} className="space-y-4 mb-6 relative z-10">
                {!isLogin && (
                  <div className="flex bg-primary-50 p-1 rounded-xl mb-4">
                    <button
                      type="button"
                      onClick={() => setRole("student")}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${role === "student" ? "bg-white text-primary-700 shadow-sm" : "text-ink/60 hover:text-ink"}`}
                    >
                      Học viên
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("tutor")}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${role === "tutor" ? "bg-white text-primary-700 shadow-sm" : "text-ink/60 hover:text-ink"}`}
                    >
                      Người dạy
                    </button>
                  </div>
                )}
                
                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-ink/30" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 rounded-xl border border-primary-200 bg-[#FDFBF7] text-ink focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                      placeholder="Địa chỉ Email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-ink/30" />
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 rounded-xl border border-primary-200 bg-[#FDFBF7] text-ink focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                      placeholder="Mật khẩu"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 mt-2 rounded-xl bg-primary-700 hover:bg-primary-900 text-white font-medium shadow-md transition-all"
                >
                  {loading ? "Đang xử lý..." : (isLogin ? "Đăng nhập" : "Đăng ký")}
                </Button>
                
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => { setIsLogin(!isLogin); setError(null); }}
                    className="text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
                  >
                    {isLogin ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"}
                  </button>
                </div>
              </form>

              {/* Footer & Pháp lý */}
              <div className="mt-8 pt-6 border-t border-primary-100/50 text-center relative z-10">
                <p className="text-[11px] text-ink/40 font-light">
                  Bằng việc tiếp tục, bạn đồng ý với{" "}
                  <a
                    href="#"
                    className="text-primary-700 font-medium hover:underline editorial-link"
                  >
                    Điều khoản
                  </a>{" "}
                  của EduConnect.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
