import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { ImagePlus, Users, X, PenTool, Search } from 'lucide-react';

const MOCK_TEAM = [
  { id: 1, name: 'Nguyễn Trọng Đức', role: 'Giám đốc Tài chính', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
  { id: 2, name: 'Lê Nguyễn Thu Uyên', role: 'Giám đốc Sản phẩm', image: 'https://i.ibb.co/SF32x32/649080250-1480301896998131-8534730828073620253-n.jpg' },
  { id: 3, name: 'Nguyễn Ngọc Huyền', role: 'Giám đốc Điều hành', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
  { id: 4, name: 'Phan Thúy An', role: 'Giám đốc Marketing', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop' },
  { id: 5, name: 'Nguyễn Ngân Hà', role: 'Giám đốc Pháp lý', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=200&auto=format&fit=crop' },
];

export function EditorTeam() {
  const [team, setTeam] = useState(MOCK_TEAM);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', role: '', image: '' });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (member: typeof MOCK_TEAM[0]) => {
    setEditingId(member.id);
    setFormData({ name: member.name, role: member.role, image: member.image });
    setPreviewImage(member.image);
  };

  const handleAddNew = () => {
    setEditingId(0); // 0 means new
    setFormData({ name: '', role: '', image: '' });
    setPreviewImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Fake image preview
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData({ ...formData, image: url }); // In real app, upload file and get real URL
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === 0) {
      // Add new
      const newMember = { ...formData, id: Date.now() };
      setTeam([...team, newMember]);
    } else {
      // Update
      setTeam(team.map(m => m.id === editingId ? { ...formData, id: editingId } : m));
    }
    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-12">
      {/* Header - Editorial Style */}
      <header className="mb-16 border-b border-primary-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-500 mb-4">
            <PenTool className="w-4 h-4" /> Bàn làm việc
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-2">
            Những người <span className="italic text-primary-700 font-light">giữ lửa.</span>
          </h1>
          <p className="text-lg text-ink/50 font-light max-w-xl">
            Quản lý và cập nhật thông tin của đội ngũ sáng lập viên.
          </p>
        </div>
        <Button onClick={handleAddNew} variant="outline" className="text-xs tracking-widest shadow-none hover:bg-primary-50 self-start md:self-auto">
          THÊM THÀNH VIÊN
        </Button>
      </header>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        {/* Cột Danh sách (Danh mục) */}
        <div className="w-full lg:w-1/3 shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="flex items-center gap-2 border-b border-primary-200 pb-2 mb-6">
              <Users className="w-4 h-4 text-ink/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Thư mục hiện tại</span>
            </div>
            
            <div className="space-y-2">
              {team.map((member) => (
                <motion.div 
                  key={member.id}
                  whileHover={{ x: 4 }}
                  onClick={() => handleEdit(member)}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${editingId === member.id ? 'bg-primary-50' : 'hover:bg-paper'}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 overflow-hidden shrink-0 border border-primary-200">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale-[30%]" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary-300 font-heading text-xl">{member.name.charAt(0)}</div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-ink leading-tight">{member.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột Chỉnh sửa (Bàn biên tập) */}
        <div className="flex-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            {editingId !== null ? (
              <motion.div
                key={editingId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FDFBF7] rounded-3xl p-8 lg:p-12 border border-primary-100 paper-shadow relative"
              >
                <div className="absolute top-6 right-6">
                  <button onClick={() => setEditingId(null)} className="p-2 text-ink/30 hover:text-ink hover:bg-primary-50 rounded-full transition-colors">
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>
                
                <h2 className="text-2xl font-heading text-ink mb-10 pb-4 border-b border-primary-100">
                  {editingId === 0 ? 'Thêm chân dung mới' : 'Cập nhật hồ sơ'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-10">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Họ và tên</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="Nhập tên nhân vật..."
                          className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Chức danh / Vai trò</label>
                        <input 
                          required
                          type="text" 
                          value={formData.role}
                          onChange={e => setFormData({...formData, role: e.target.value})}
                          placeholder="VD: Giám đốc sáng tạo"
                          className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700 placeholder:text-ink/30 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Ảnh chân dung</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="relative flex flex-col items-center justify-center w-full aspect-[3/4] border border-dashed border-primary-200 bg-primary-50/30 hover:bg-primary-50/70 transition-all cursor-pointer rounded-2xl overflow-hidden group"
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef} 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        {previewImage ? (
                          <>
                            <img src={previewImage} alt="Preview" className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all" />
                            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-[10px] text-white font-bold uppercase tracking-widest bg-ink/50 px-3 py-1 rounded-full backdrop-blur-sm">Thay đổi</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-6 text-primary-700">
                            <ImagePlus className="w-8 h-8 stroke-[1.5] mx-auto mb-3 opacity-50" />
                            <span className="text-[11px] font-bold uppercase tracking-widest opacity-60">Tải lên chân dung</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-primary-100 flex justify-end">
                    <Button type="submit" className="text-xs tracking-widest h-12 px-10 shadow-md bg-ink text-white hover:bg-ink/80">
                      LƯU BẢN THẢO
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-dashed border-primary-200 rounded-3xl bg-primary-50/10">
                <Search className="w-10 h-10 stroke-[1] text-primary-300 mb-4" />
                <h3 className="font-heading text-2xl text-ink/40 mb-2">Bàn biên tập đang trống</h3>
                <p className="text-sm text-ink/40 font-light font-sans max-w-sm">
                  Chọn một nhân vật từ thư mục bên trái để bắt đầu chỉnh sửa, hoặc thêm mới để mở rộng đội ngũ.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
