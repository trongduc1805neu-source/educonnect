import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { BookOpen, Calendar, MapPin, X, Users, Settings2, PenTool } from 'lucide-react';

const MOCK_CLASSES = [
  { id: 1, title: 'Luyện đề Toán 12 - Trọng điểm hình học', tutor: 'Thầy Nguyễn Hải Anh', startDate: '15/11/2026', schedule: 'Tối Thứ 3 & Thứ 6', mode: 'offline', capacity: 5, fee: '150.000đ' },
  { id: 2, title: 'Phân tích định lượng SPSS', tutor: 'Cô Khánh Lê', startDate: '20/11/2026', schedule: 'Sáng Chủ Nhật', mode: 'online', capacity: 10, fee: '200.000đ' },
];

export function EditorClasses() {
  const [classes, setClasses] = useState(MOCK_CLASSES);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<typeof MOCK_CLASSES[0] | null>(null);

  const handleEdit = (cls: typeof MOCK_CLASSES[0]) => {
    setEditingId(cls.id);
    setFormData({ ...cls });
  };

  const handleAddNew = () => {
    setEditingId(0);
    setFormData({ id: 0, title: '', tutor: '', startDate: '', schedule: '', mode: 'offline', capacity: 1, fee: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    if (editingId === 0) {
      setClasses([{ ...formData, id: Date.now() }, ...classes]);
    } else {
      setClasses(classes.map(c => c.id === editingId ? formData : c));
    }
    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-12 bg-paper min-h-screen">
      {/* Header */}
      <header className="mb-16 border-b border-primary-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-500 mb-4">
            <Settings2 className="w-4 h-4" /> Bàn làm việc
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-2">
            Điều phối <span className="italic text-primary-700 font-light">giảng đường.</span>
          </h1>
          <p className="text-lg text-ink/50 font-light max-w-xl">
            Tổ chức, sắp xếp các lớp học và không gian tri thức trực tuyến.
          </p>
        </div>
        <Button onClick={handleAddNew} variant="outline" className="text-xs tracking-widest shadow-none hover:bg-primary-50">
          MỞ LỚP MỚI
        </Button>
      </header>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Danh sách Lớp */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="border-b border-primary-200 pb-2 mb-6 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 flex items-center gap-2"><BookOpen className="w-3 h-3" /> Các lớp đang mở</span>
            </div>
            
            <div className="space-y-4">
              {classes.map((cls) => (
                <div 
                  key={cls.id}
                  onClick={() => handleEdit(cls)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${editingId === cls.id ? 'bg-primary-50/50 border-primary-300 shadow-sm' : 'border-primary-100 bg-[#FDFBF7] hover:border-primary-300'}`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary-700 mb-2">{cls.startDate}</div>
                  <h3 className="font-heading text-lg text-ink leading-tight mb-3">{cls.title}</h3>
                  <div className="flex items-center gap-2 text-[11px] text-ink/60 font-light">
                    <PenTool className="w-3 h-3" /> {cls.tutor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Khối Chỉnh sửa Mở rộng (Editor Panel) */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {editingId !== null && formData ? (
              <motion.div
                key={editingId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FDFBF7] p-8 lg:p-12 rounded-3xl border border-primary-100 paper-shadow relative"
              >
                <div className="absolute top-6 right-6">
                  <button onClick={() => setEditingId(null)} className="p-2 bg-paper rounded-full text-ink/40 hover:text-ink transition-colors border border-primary-100">
                    <X className="w-4 h-4 stroke-[1.5]" />
                  </button>
                </div>
                
                <h2 className="text-2xl font-heading text-ink mb-10 pb-4 border-b border-primary-100 w-max">
                  {editingId === 0 ? 'Mở lớp mới' : 'Biên tập lớp học'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Tên Lớp */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Tên Lớp Học</label>
                    <input name="title" required type="text" value={formData.title} onChange={handleChange} placeholder="VD: Luyện thi Ngữ Văn 12..." className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-xl font-heading text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/20" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Gia sư */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Người Phụ Trách</label>
                      <select name="tutor" required value={formData.tutor} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none rounded-none cursor-pointer">
                        <option value="" disabled>--- Chọn Giáo viên ---</option>
                        <option value="Thầy Nguyễn Hải Anh">Thầy Nguyễn Hải Anh</option>
                        <option value="Cô Khánh Lê">Cô Khánh Lê</option>
                        <option value="Cô Trần Phương Ly">Cô Trần Phương Ly</option>
                      </select>
                    </div>

                    {/* Hình thức */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Không Gian Cấp Lớp</label>
                      <select name="mode" required value={formData.mode} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-primary-200 py-3 px-0 text-ink focus:ring-0 focus:border-primary-700 appearance-none rounded-none cursor-pointer">
                        <option value="offline">Trực tiếp (Tại nhà/Trung tâm)</option>
                        <option value="online">Trực tuyến (Google Meet/Zoom)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Khai giảng */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 flex items-center gap-1"><Calendar className="w-3 h-3" /> Ngày Bắt Đầu</label>
                      <input name="startDate" required type="text" value={formData.startDate} onChange={handleChange} placeholder="DD/MM/YYYY" className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/20" />
                    </div>
                    
                    {/* Lịch trình */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Lịch Trình</label>
                      <input name="schedule" required type="text" value={formData.schedule} onChange={handleChange} placeholder="VD: Tối Thứ 3 & 5" className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/20" />
                    </div>

                    {/* Sĩ số */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2 flex items-center gap-1"><Users className="w-3 h-3" /> Sĩ số Tối Đa</label>
                      <input name="capacity" required type="number" min="1" value={formData.capacity} onChange={handleChange} className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700" />
                    </div>
                  </div>

                  {/* Học phí */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Học Phí (/Buổi)</label>
                    <input name="fee" required type="text" value={formData.fee} onChange={handleChange} placeholder="VD: 150.000đ" className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-xl font-heading text-primary-700 focus:ring-0 focus:border-primary-700 placeholder:text-ink/20" />
                  </div>

                  <div className="pt-8 border-t border-primary-100 flex justify-end">
                    <Button type="submit" className="text-xs tracking-widest h-12 px-10 shadow-md">
                      CẬP NHẬT GIẢNG ĐƯỜNG
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary-300 stroke-[1.5]" />
                  </div>
                  <p className="text-[13px] text-ink/40 font-light max-w-xs mx-auto italic">
                    Chọn một lớp học từ danh sách để thiết lập không gian, hoặc thêm mới để mở rộng cơ hội học tập.
                  </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
