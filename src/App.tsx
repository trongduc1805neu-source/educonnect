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
import { ClassList } from './pages/ClassList';
import { FindClass } from './pages/FindClass';
import { FindInHomeTutor } from './pages/FindInHomeTutor';
import { Contact } from './pages/Contact';
import { MatchClass } from './pages/MatchClass';
import { BecomeTutor } from './pages/BecomeTutor';
import { GraduationCap, Menu, X, LogIn, LogOut, User as UserIcon } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl text-primary-800 tracking-tight">
            <span>
              <span className="relative inline-block">
                Edu
                <motion.span
                  key={location.pathname}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="absolute -bottom-1 left-0 h-1 bg-primary-500 rounded-full"
                />
              </span>
              Connect
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`relative py-2 hover:text-primary-700 transition-colors group ${isActive ? 'text-primary-700' : ''}`}
                >
                  {item.name}
                  {isActive ? (
                    <motion.div
                      layoutId="desktop-nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-300 rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary-600">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || "User"} className="w-8 h-8 rounded-full border border-slate-200" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                      <UserIcon className="w-4 h-4" />
                    </div>
                  )}
                  <span className="hidden sm:inline-block">{user.displayName || "Tài khoản"}</span>
                </Link>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-red-600 hover:bg-red-50" onClick={logout} title="Đăng xuất">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button variant="outline" className="text-primary-700 border-primary-200 hover:bg-primary-50" onClick={() => setIsLoginModalOpen(true)}>
                <LogIn className="w-4 h-4 mr-2" />
                Đăng nhập / Đăng ký
              </Button>
            )}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block text-sm font-medium hover:text-primary-700 ${isActive ? 'text-primary-700' : 'text-slate-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              {user ? (
                <div className="space-y-3">
                  <Link to="/dashboard" className="flex items-center gap-3 text-sm font-medium text-slate-700" onClick={() => setIsOpen(false)}>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || "User"} className="w-8 h-8 rounded-full border border-slate-200" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
                        <UserIcon className="w-4 h-4" />
                      </div>
                    )}
                    <span>{user.displayName || "Tài khoản"}</span>
                  </Link>
                  <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50" onClick={() => { setIsOpen(false); logout(); }}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Đăng xuất
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full text-primary-700 border-primary-200 hover:bg-primary-50" onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Đăng nhập / Đăng ký
                </Button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navigation />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutors" element={<Search />} />
            <Route path="/classes" element={<ClassList />} />
            <Route path="/match-class" element={<MatchClass />} />
            <Route path="/become-tutor" element={<BecomeTutor />} />
            <Route path="/find-class" element={<FindClass />} />
            <Route path="/find-tutor" element={<FindInHomeTutor />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Hidden routes from previous phase */}
            <Route path="/search" element={<Search />} />
            <Route path="/profile/:id" element={<TutorProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
