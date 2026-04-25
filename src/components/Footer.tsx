import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-paper border-t border-primary-100 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-ink tracking-tight mb-6">
              <span>
                EduConnect<span className="text-accent-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-ink/70 leading-relaxed max-w-xs">
              Nền tảng kết nối gia sư và học viên hàng đầu Việt Nam. Chất lượng, uy tín và minh bạch.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-ink uppercase tracking-widest text-[11px] mb-4">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-ink/60">
              <li><Link to="/tutors" className="hover:text-primary-700 transition-colors">Tìm Gia Sư</Link></li>
              <li><Link to="/classes" className="hover:text-primary-700 transition-colors">Tìm Lớp</Link></li>
              <li><Link to="/become-tutor" className="hover:text-primary-700 transition-colors">Đăng ký làm Gia Sư</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ink uppercase tracking-widest text-[11px] mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-ink/60">
              <li><Link to="/about" className="hover:text-primary-700 transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-primary-700 transition-colors">Liên hệ</Link></li>
              <li><Link to="/faq" className="hover:text-primary-700 transition-colors">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ink uppercase tracking-widest text-[11px] mb-4">Kết nối</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-colors duration-300">
                <Twitter className="w-4 h-4 break-words" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-700 hover:text-white transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink/50 uppercase tracking-widest font-semibold">
            &copy; {new Date().getFullYear()} EduConnect VN.
          </p>
          <div className="flex space-x-6 text-sm text-ink/60 font-medium">
            <a href="#" className="hover:text-primary-700 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-primary-700 transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
