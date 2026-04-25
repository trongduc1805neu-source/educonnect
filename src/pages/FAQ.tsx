import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus } from 'lucide-react';

const CATEGORIES = [
  "Tất cả",
  "Dành cho Phụ huynh & Học viên",
  "Dành cho Gia sư",
  "Thanh toán & Phí dịch vụ"
];

const FAQ_DATA = [
  {
    id: 1,
    category: "Dành cho Phụ huynh & Học viên",
    question: "Làm thế nào để tìm được gia sư phù hợp?",
    answer: "Bạn có thể sử dụng chức năng 'Tìm Gia Sư', nhập các yêu cầu về môn học, khu vực, học phí và mục tiêu. Hệ thống sẽ đề xuất những gia sư phù hợp nhất. Bạn cũng có thể xem hồ sơ chi tiết, đánh giá và đặt lịch học thử."
  },
  {
    id: 2,
    category: "Dành cho Phụ huynh & Học viên",
    question: "Học thử có mất phí không?",
    answer: "EduConnect khuyến khích các gia sư cung cấp một buổi học thử miễn phí hoặc có phí ưu đãi để hai bên làm quen và đánh giá mức độ phù hợp trước khi quyết định học chính thức."
  },
  {
    id: 3,
    category: "Dành cho Gia sư",
    question: "Điều kiện để trở thành gia sư trên EduConnect?",
    answer: "Bạn cần cung cấp thông tin cá nhân, định danh, thẻ sinh viên/bằng cấp, và chứng chỉ liên quan. Hồ sơ sẽ được đội ngũ EduConnect kiểm duyệt trong vòng 24-48h trước khi bạn có thể nhận lớp."
  },
  {
    id: 4,
    category: "Thanh toán & Phí dịch vụ",
    question: "Phí dịch vụ của nền tảng là bao nhiêu?",
    answer: "Phụ huynh và học viên hoàn toàn miễn phí khi sử dụng nền tảng. Đối với gia sư, chúng tôi thu một khoản phí kết nối nhỏ (tính trên tháng học đầu tiên) nhằm duy trì và phát triển tính năng của nền tảng."
  },
  {
    id: 5,
    category: "Dành cho Gia sư",
    question: "Làm sao để nhận lớp?",
    answer: "Sau khi hồ sơ được duyệt, bạn có thể truy cập mục 'Tìm Lớp' để gửi yêu cầu nhận lớp tới những lớp đang mở, hoặc chờ phụ huynh chủ động liên hệ gửi lời mời dạy tới bạn thông qua hồ sơ trực tuyến."
  },
  {
    id: 6,
    category: "Thanh toán & Phí dịch vụ",
    question: "Phương thức thanh toán học phí như thế nào?",
    answer: "Học phí có thể được thanh toán trực tiếp cho gia sư hoặc thông qua cổng thanh toán trung gian an toàn của EduConnect. Chúng tôi khuyến nghị trao đổi rõ ràng phương thức thanh toán ngay từ buổi học đầu tiên."
  },
  {
    id: 7,
    category: "Dành cho Phụ huynh & Học viên",
    question: "Nếu không hài lòng với gia sư, tôi phải làm sao?",
    answer: "Trong trường hợp không hài lòng sau buổi học đầu tiên hoặc quá trình học tập không như mong đợi, bạn có thể phản hồi trực tiếp qua tính năng đánh giá hoặc liên hệ Hotline hỗ trợ của EduConnect để được đổi gia sư miễn phí."
  }
];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "Tất cả" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-24 px-6 mt-8">
      {/* Header - Editorial Style */}
      <header className="space-y-10 max-w-3xl">
        <h1 className="text-5xl lg:text-6xl font-heading text-ink leading-tight">
          Chúng tôi có thể <br />
          <span className="italic text-primary-700 font-light">giúp gì cho bạn?</span>
        </h1>
        
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-ink/40" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-2xl border border-primary-100 bg-[#FDFBF7] shadow-sm focus:shadow-md focus:border-primary-300 focus:outline-none transition-all text-ink placeholder:text-ink/40 font-medium"
          />
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
        
        {/* Categories Sidebar */}
        <aside className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-28">
          <nav className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-left whitespace-nowrap px-5 py-4 rounded-xl transition-all duration-300 text-sm font-bold tracking-wide uppercase ${
                  activeCategory === category 
                    ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/20' 
                    : 'bg-transparent text-ink/50 hover:text-ink hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </aside>

        {/* FAQs List */}
        <div className="flex-1 space-y-2 w-full">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div 
                key={faq.id}
                className="border-b border-primary-100 last:border-0 py-6 group"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex justify-between items-center text-left gap-4 transition-colors"
                >
                  <h3 className={`text-xl md:text-2xl font-heading pr-4 transition-colors duration-300 ${openItem === faq.id ? 'text-primary-700' : 'text-ink group-hover:text-primary-700'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 transition-colors duration-300 ${openItem === faq.id ? 'text-primary-700' : 'text-ink/30 group-hover:text-primary-500'}`}>
                    {openItem === faq.id ? <Minus className="w-6 h-6 stroke-[1.5]" /> : <Plus className="w-6 h-6 stroke-[1.5]" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-ink/70 leading-relaxed font-light text-[15px] md:text-base max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-primary-50/50 rounded-3xl border border-primary-100 border-dashed"
            >
              <Search className="w-8 h-8 text-primary-300 mx-auto mb-4" />
              <p className="text-ink/60 font-medium">Trống! Không tìm thấy kết quả phù hợp.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("Tất cả"); }}
                className="mt-4 text-sm font-bold text-primary-700 uppercase tracking-widest hover:text-primary-800"
              >
                Xóa bộ lọc
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
