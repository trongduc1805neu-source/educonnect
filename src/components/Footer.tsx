import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center font-bold text-white shadow-sm group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
              </div>
              <span className="font-bold text-xl text-zinc-900 tracking-tight">Edu<span className="text-zinc-800">Connect</span></span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Nền tảng kết nối gia sư và học viên hàng đầu Việt Nam. Chất lượng, uy tín và minh bạch.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-4">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/find-tutor" className="hover:text-zinc-900 transition-colors">Tìm Gia Sư</Link></li>
              <li><Link to="/find-class" className="hover:text-zinc-900 transition-colors">Nhận Lớp</Link></li>
              <li><Link to="/become-tutor" className="hover:text-zinc-900 transition-colors">Đăng ký làm Gia Sư</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/about" className="hover:text-zinc-900 transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-zinc-900 transition-colors">Liên hệ</Link></li>
              <li><Link to="/faq" className="hover:text-zinc-900 transition-colors">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 mb-4">Kết nối</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-800 hover:bg-zinc-100 transition-all shadow-sm">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-800 hover:bg-zinc-100 transition-all shadow-sm">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-800 hover:bg-zinc-100 transition-all shadow-sm">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-800 hover:bg-zinc-100 transition-all shadow-sm">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} EduConnect VN. Đã đăng ký bản quyền.
          </p>
          <div className="flex space-x-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
