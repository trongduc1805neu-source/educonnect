/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import { GraduationCap, Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/ui/button';
import { LoginModal } from './components/LoginModal';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary-600">
            <span>EduConnect</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-primary-700 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="text-primary-700 border-primary-200 hover:bg-primary-50" onClick={() => setIsLoginModalOpen(true)}>
              <LogIn className="w-4 h-4 mr-2" />
              Đăng nhập / Đăng ký
            </Button>
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
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="block text-sm font-medium text-slate-600 hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <Button variant="outline" className="w-full text-primary-700 border-primary-200 hover:bg-primary-50" onClick={() => { setIsOpen(false); setIsLoginModalOpen(true); }}>
                <LogIn className="w-4 h-4 mr-2" />
                Đăng nhập / Đăng ký
              </Button>
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
