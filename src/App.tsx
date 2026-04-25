/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { TutorProfile } from './pages/TutorProfile';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { FindClass } from './pages/FindClass';
import { FindInHomeTutor } from './pages/FindInHomeTutor';
import { Contact } from './pages/Contact';
import { MatchClass } from './pages/MatchClass';
import { BecomeTutor } from './pages/BecomeTutor';
import { Menu, X, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { LoginModal } from './components/LoginModal';
import { useAuth } from './contexts/AuthContext';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Về Chúng Tôi', path: '/about' },
    { name: 'Tìm Gia Sư', path: '/tutors' },
    { name: 'Tìm Lớp', path: '/classes' },
    { name: 'Ghép Lớp', path: '/match-class' },
    { name: 'Trở Thành Gia Sư', path: '/become-tutor' },
  ];

  return (
    <>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      {/* Masthead Navigation:
        - Sử dụng nền giấy (bg-paper/90) với hiệu ứng mờ nhẹ
        - Đường viền mỏng manh tinh tế (border-primary-100)
      */}
      <header className="sticky top-0 z-50 w-full border-b border-primary-100 bg-paper/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
          
          {/* Logo - Cảm hứng từ tiêu đề tạp chí (Serif font, dấu chấm phá cách) */}
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-3xl text-ink tracking-tight">
            <span>
              EduConnect<span className="text-accent-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav - Khoảng trắng rộng, typography thanh lịch */}
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-ink/70">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`relative py-2 hover:text-ink transition-colors group ${isActive ? 'text-ink' : ''}`}
                >
                  {item.name}
                  {isActive ? (
                    <motion.div
                      layoutId="desktop-nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-primary-700"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary-300 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-5">
                <Link to="/dashboard" className="flex items-center gap-3 text-sm font-medium text-ink/80 hover:text-primary-700 transition-colors">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || "User"} className="w-9 h-9 rounded-full border border-primary-200 object-cover paper-shadow" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700">
                      <UserIcon className="w-4 h-4" />
                    </div>
                  )}
                  <span className="hidden sm:inline-block font-semibold">{user.displayName || "Tài khoản"}</span>
                </Link>
                <button 
                  className="text-ink/40 hover:text-accent-500 transition-colors" 
                  onClick={logout} 
                  title="Đăng xuất"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                className="text-[11px] px-6 h-10 tracking-widest border-primary-200 text-ink hover:bg-primary-50" 
                onClick={() => setIsLoginModalOpen(true)}
              >
                ĐĂNG NHẬP
              </Button>
            )}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="lg:hidden p-2 text-ink/70 hover:text-ink transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
          </button>
        </div>

        {/* Mobile Nav Menu - Thiết kế tràn viền, mượt mà */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden border-t border-primary-100 bg-paper px-6 py-8 space-y-6 shadow-2xl absolute w-full"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block text-lg font-heading font-medium tracking-wide transition-colors ${isActive ? 'text-primary-700 italic' : 'text-ink/70 hover:text-ink'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <div className="pt-6 border-t border-primary-100/50">
              {user ? (
                <div className="space-y-5">
                  <Link to="/dashboard" className="flex items-center gap-4 text-base font-medium text-ink" onClick={() => setIsOpen(false)}>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || "User"} className="w-10 h-10 rounded-full border border-primary-200" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-700">
                        <UserIcon className="w-5 h-5" />
                      </div>
                    )}
                    <span>{user.displayName || "Tài khoản"}</span>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start text-accent-500 hover:bg-accent-50/50 p-0 h-auto" onClick={() => { setIsOpen(false); logout(); }}>
                    <LogOut className="w-5 h-5 mr-3" />
                    Đăng xuất
                  </Button>
                </div>
              ) : (
                <Button variant="default" className="w-full tracking-widest text-xs" onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}>
                  ĐĂNG NHẬP / ĐĂNG KÝ
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}

import { EditorTeam } from './pages/admin/EditorTeam';
import { EditorTutors } from './pages/admin/EditorTutors';
import { EditorClasses } from './pages/admin/EditorClasses';
import { Footer } from './components/Footer';
import { FAQ } from './pages/FAQ';
import { Onboarding } from './pages/Onboarding';
import { Payment } from './pages/Payment';

export default function App() {
  return (
    <Router>
      {/* Bao bọc toàn bộ App trong màu giấy (bg-paper) và font chữ chung */}
      <div className="min-h-screen bg-paper font-sans text-ink selection:bg-primary-200 selection:text-primary-900 flex flex-col">
        <Navigation />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tutors" element={<Search />} />
            <Route path="/classes" element={<FindClass />} />
            <Route path="/match-class" element={<MatchClass />} />
            <Route path="/become-tutor" element={<BecomeTutor />} />
            <Route path="/find-tutor" element={<FindInHomeTutor />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Chuyên trang Biên tập / Admin */}
            <Route path="/admin/team" element={<EditorTeam />} />
            <Route path="/admin/tutors" element={<EditorTutors />} />
            <Route path="/admin/classes" element={<EditorClasses />} />
            
            {/* Các route ẩn */}
            <Route path="/search" element={<Search />} />
            <Route path="/profile/:id" element={<TutorProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
