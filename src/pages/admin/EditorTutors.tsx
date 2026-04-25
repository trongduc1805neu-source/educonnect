import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  ImagePlus,
  BookOpen,
  X,
  PenTool,
  Search,
  Briefcase,
  Plus,
  Trash2,
} from "lucide-react";

const MOCK_TUTORS = [
  {
    id: 1,
    name: "Thầy Nguyễn Hải Anh",
    subject: "Toán Học",
    fee: "150.000đ",
    location: "Hà Nội",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    about: "Giáo viên Toán THCS chuyên luyện thi Đại học.",
    methodology: "Tập trung vào bản chất, không rập khuôn.",
    resume: [
      { year: "2018 - Nay", title: "Giáo viên tự do" },
      { year: "2014 - 2018", title: "Cử nhân ĐH Sư Phạm" },
    ],
  },
  {
    id: 2,
    name: "Cô Trần Phương Ly",
    subject: "Ngữ Văn",
    fee: "180.000đ",
    location: "TP. Hồ Chí Minh",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    about: "Có 3 năm kinh nghiệm kèm cặp học sinh thi chuyên.",
    methodology: "Khơi gợi sự đồng cảm qua từng tác phẩm.",
    resume: [{ year: "2020 - Nay", title: "Gia sư Ngữ Văn" }],
  },
];

export function EditorTutors() {
  const [tutors, setTutors] = useState(MOCK_TUTORS);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState<(typeof MOCK_TUTORS)[0] | null>(
    null,
  );
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (tutor: (typeof MOCK_TUTORS)[0]) => {
    setEditingId(tutor.id);
    setFormData({ ...tutor });
    setPreviewImage(tutor.image);
  };

  const handleAddNew = () => {
    setEditingId(0);
    setFormData({
      id: 0,
      name: "",
      subject: "",
      fee: "",
      location: "",
      image: "",
      about: "",
      methodology: "",
      resume: [{ year: "", title: "" }],
    });
    setPreviewImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && formData) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData({ ...formData, image: url });
    }
  };

  const handleAddResume = () => {
    if (formData) {
      setFormData({
        ...formData,
        resume: [...formData.resume, { year: "", title: "" }],
      });
    }
  };

  const handleRemoveResume = (index: number) => {
    if (formData) {
      const newResume = [...formData.resume];
      newResume.splice(index, 1);
      setFormData({ ...formData, resume: newResume });
    }
  };

  const handleResumeChange = (
    index: number,
    field: "year" | "title",
    value: string,
  ) => {
    if (formData) {
      const newResume = [...formData.resume];
      newResume[index][field] = value;
      setFormData({ ...formData, resume: newResume });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    if (editingId === 0) {
      setTutors([{ ...formData, id: Date.now() }, ...tutors]);
    } else {
      setTutors(tutors.map((t) => (t.id === editingId ? formData : t)));
    }
    setEditingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 mt-12 bg-paper">
      {/* Header */}
      <header className="mb-16 border-b border-primary-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-500 mb-4">
            <Briefcase className="w-4 h-4" /> Bàn làm việc
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading text-ink mb-2">
            Danh bạ{" "}
            <span className="italic text-primary-700 font-light">
              người dẫn đường.
            </span>
          </h1>
          <p className="text-lg text-ink/50 font-light max-w-xl">
            Biên tập câu chuyện, chuyên môn và thông tin liên lạc của các giáo
            viên xuất sắc.
          </p>
        </div>
        <Button
          onClick={handleAddNew}
          variant="outline"
          className="text-xs tracking-widest shadow-none hover:bg-primary-50"
        >
          THÊM HỒ SƠ MỚI
        </Button>
      </header>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Danh sách (Thư mục) */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="sticky top-28">
            <div className="border-b border-primary-200 pb-2 mb-6 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                Hồ sơ đã lưu
              </span>
              <span className="text-[10px] font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                {tutors.length}
              </span>
            </div>

            <div className="space-y-4">
              {tutors.map((tutor) => (
                <div
                  key={tutor.id}
                  onClick={() => handleEdit(tutor)}
                  className={`border-b border-primary-100 pb-4 cursor-pointer group transition-all ${editingId === tutor.id ? "pl-4 border-l-2 border-l-primary-700 border-b-transparent" : "hover:pl-2"}`}
                >
                  <h3 className="font-heading text-lg text-ink group-hover:text-primary-700 mb-1">
                    {tutor.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-ink/50 uppercase tracking-widest">
                    <span>{tutor.subject}</span>
                    <span>•</span>
                    <span>{tutor.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bàn Biên Tập */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {editingId !== null && formData ? (
              <motion.div
                key={editingId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-primary-200">
                  <h2 className="text-3xl font-heading text-ink">
                    Cập nhật hồ sơ
                  </h2>
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 text-ink/40 hover:text-ink transition-colors"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Chân dung & Info cơ bản */}
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Upload */}
                    <div className="w-40 shrink-0">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">
                        Chân dung
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full aspect-[3/4] border border-dashed border-primary-200 bg-primary-50/50 hover:bg-primary-50 cursor-pointer rounded-2xl overflow-hidden relative group flex items-center justify-center"
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        {previewImage ? (
                          <img
                            src={previewImage}
                            className="w-full h-full object-cover filter grayscale-[20%]"
                          />
                        ) : (
                          <ImagePlus className="w-6 h-6 text-primary-300 stroke-[1.5]" />
                        )}
                        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-paper stroke-[1.5]" />
                        </div>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1 space-y-6 w-full">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">
                          Họ Tên Giáo Viên
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-xl font-heading text-ink focus:ring-0 focus:border-primary-700"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">
                            Môn Giảng Dạy
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                            className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">
                            Học Phí (/Buổi)
                          </label>
                          <input
                            type="text"
                            value={formData.fee}
                            onChange={(e) =>
                              setFormData({ ...formData, fee: e.target.value })
                            }
                            className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">
                          Khu Vực / Địa Điểm
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              location: e.target.value,
                            })
                          }
                          className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink focus:ring-0 focus:border-primary-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Textareas */}
                  <div className="space-y-10">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-4 flex items-center gap-2">
                        <PenTool className="w-3 h-3" /> Câu chuyện cá nhân
                        (About)
                      </label>
                      <textarea
                        value={formData.about}
                        onChange={(e) =>
                          setFormData({ ...formData, about: e.target.value })
                        }
                        className="w-full bg-transparent border border-primary-100 rounded-xl py-4 px-5 text-ink/80 focus:ring-0 focus:border-primary-500 font-light leading-relaxed resize-y min-h-[120px]"
                        placeholder="Hãy kể về hành trình giáo dục..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-4 flex items-center gap-2">
                        <BookOpen className="w-3 h-3" /> Triết lý giáo dục
                        (Methodology)
                      </label>
                      <textarea
                        value={formData.methodology}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            methodology: e.target.value,
                          })
                        }
                        className="w-full bg-transparent border border-primary-100 rounded-xl py-4 px-5 text-ink/80 focus:ring-0 focus:border-primary-500 font-light leading-relaxed resize-y min-h-[120px]"
                        placeholder="Phương pháp tiếp cận học sinh..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Hành trình học thuật (Resume) */}
                  <div className="bg-primary-50/30 border border-primary-100 rounded-2xl p-6 lg:p-8">
                    <div className="flex justify-between items-center mb-6">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-ink/50">
                        Hành trình học thuật / Kinh nghiệm
                      </label>
                      <button
                        type="button"
                        onClick={handleAddResume}
                        className="text-[10px] uppercase tracking-widest font-bold text-primary-700 flex items-center gap-1 hover:underline"
                      >
                        <Plus className="w-3 h-3" /> Thêm mốc
                      </button>
                    </div>

                    <div className="space-y-4">
                      {formData.resume.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 bg-[#FDFBF7] p-4 rounded-xl border border-primary-50"
                        >
                          <div className="w-1/3">
                            <input
                              type="text"
                              placeholder="Năm (VD: 2018-2022)"
                              value={item.year}
                              onChange={(e) =>
                                handleResumeChange(
                                  index,
                                  "year",
                                  e.target.value,
                                )
                              }
                              className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink text-sm focus:ring-0 focus:border-primary-700"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              placeholder="Thành tựu / Vị trí"
                              value={item.title}
                              onChange={(e) =>
                                handleResumeChange(
                                  index,
                                  "title",
                                  e.target.value,
                                )
                              }
                              className="w-full bg-transparent border-0 border-b border-primary-200 py-2 px-0 text-ink text-sm font-medium focus:ring-0 focus:border-primary-700"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveResume(index)}
                            className="p-2 text-ink/30 hover:text-accent-500 transition-colors mt-1"
                          >
                            <Trash2 className="w-4 h-4 stroke-[1.5]" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-8 border-t border-primary-200">
                    <Button
                      type="submit"
                      className="h-12 px-10 text-xs tracking-widest shadow-md"
                    >
                      LƯU BẢN THẢO
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 lg:p-24 border border-dashed border-primary-200 rounded-3xl bg-primary-50/10 mt-10">
                <Search className="w-8 h-8 stroke-[1] text-primary-300 mb-4" />
                <h3 className="font-heading text-2xl text-ink/40 mb-2">
                  Chưa chọn hồ sơ
                </h3>
                <p className="text-sm text-ink/40 font-light font-sans">
                  Chọn người dẫn đường từ danh bạ bên trái để cập nhật thông
                  tin.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
