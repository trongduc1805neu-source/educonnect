import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { LoginModal } from '../components/LoginModal';

const MOCK_CLASSES = [
  {
    id: 1,
    teacherName: 'Nguyễn Anh Tuấn',
    teacherTitle: 'Giáo viên Toán THPT Cầu Giấy',
    teacherPhoto: 'https://picsum.photos/seed/tuan/300/400',
    classTitle: 'Lớp Toán 9 luyện thi vào 10',
    description: 'Lớp học tập trung ôn luyện các chuyên đề thi vào 10 với lộ trình cá nhân hóa. Sĩ số tối đa 15 học sinh để đảm bảo chất lượng tương tác. Thường xuyên tổ chức các bài kiểm tra định kỳ để đánh giá năng lực và điều chỉnh phương pháp học tập phù hợp. Luôn đặt mục tiêu đỗ NV1 lên hàng đầu.',
    info: {
      subject: 'Toán - Lớp 9',
      schedule: '2 buổi/tuần (Tối T3, T5)',
      fee: '800.000đ/tháng',
      location: 'Phường Dịch Vọng, Cầu Giấy',
      slots: 'Còn 3 chỗ',
      status: 'Đang tuyển sinh'
    },
    education: [
      {
        school: 'Đại học Sư phạm Hà Nội',
        major: 'Sư phạm Toán học',
        time: '2010 - 2014',
        details: ['Xếp loại: Giỏi', 'Giải Nhì Olympic Toán sinh viên toàn quốc']
      }
    ],
    certifications: [
      { year: '2018', name: 'Giáo viên dạy giỏi cấp Quận' },
      { year: '2015', name: 'Chứng chỉ Nghiệp vụ Sư phạm bậc THPT' }
    ],
    experience: [
      {
        time: '09/2014 - Hiện tại',
        place: 'Trường THPT Cầu Giấy',
        role: 'Giáo viên môn Toán',
        details: [
          'Giảng dạy môn Toán cho học sinh khối 10, 11, 12.',
          'Bồi dưỡng đội tuyển học sinh giỏi Toán của trường.',
          'Nhiều năm liền có học sinh đỗ thủ khoa, á khoa các trường chuyên.',
          '90% học sinh đỗ NV1, 30% đỗ các trường chuyên (Ams, KHTN, Sư Phạm).'
        ]
      },
      {
        time: 'Yêu cầu đầu vào',
        place: 'Dành cho học sinh lớp 9',
        role: 'Điều kiện tham gia lớp học',
        details: [
          'Học sinh có học lực Khá trở lên.',
          'Có ý thức tự giác làm bài tập và tuân thủ nội quy lớp học.',
          'Vượt qua bài kiểm tra đánh giá năng lực đầu vào.'
        ]
      }
    ]
  },
  {
    id: 2,
    teacherName: 'Trần Mai Hương',
    teacherTitle: 'Giáo viên Tiếng Anh luyện thi IELTS & THPT QG',
    teacherPhoto: 'https://picsum.photos/seed/huong/300/400',
    classTitle: 'Lớp Tiếng Anh 12 luyện thi THPT Quốc gia',
    description: 'Cam kết đầu ra 8.0+. Lộ trình học bài bản, bám sát đề thi minh họa của Bộ GD&ĐT. Hỗ trợ giải đáp thắc mắc 24/7. Phương pháp giảng dạy hiện đại, tập trung vào việc phát triển tư duy ngôn ngữ và kỹ năng làm bài thi hiệu quả.',
    info: {
      subject: 'Tiếng Anh - Lớp 12',
      schedule: '3 buổi/tuần (Tối T2, T4, T6)',
      fee: '1.200.000đ/tháng',
      location: 'Phường Láng Thượng, Đống Đa',
      slots: 'Còn 5 chỗ',
      status: 'Sắp khai giảng'
    },
    education: [
      {
        school: 'Đại học Ngoại Ngữ - ĐHQGHN',
        major: 'Ngôn ngữ Anh',
        time: '2015 - 2019',
        details: ['Xếp loại: Xuất sắc', 'Học bổng toàn phần trao đổi sinh viên tại Úc']
      }
    ],
    certifications: [
      { year: '2021', name: 'IELTS 8.5 (Overall)' },
      { year: '2020', name: 'Chứng chỉ giảng dạy TESOL' }
    ],
    experience: [
      {
        time: '01/2020 - Hiện tại',
        place: 'Trung tâm Anh ngữ IELTS Fighter',
        role: 'Giảng viên IELTS',
        details: [
          'Giảng dạy các lớp IELTS mục tiêu 6.5 - 7.5+.',
          'Tham gia biên soạn giáo trình và tài liệu luyện thi.',
          'Điểm trung bình thi THPT QG của học sinh khóa trước là 8.8, nhiều bạn đạt 9.5+.'
        ]
      },
      {
        time: 'Yêu cầu đầu vào',
        place: 'Dành cho học sinh lớp 12',
        role: 'Điều kiện tham gia lớp học',
        details: [
          'Đã nắm vững ngữ pháp cơ bản.',
          'Từ vựng ở mức độ B1 trở lên.',
          'Làm bài test đầu vào đạt tối thiểu 5.0 điểm.'
        ]
      }
    ]
  },
  {
    id: 3,
    teacherName: 'Lê Hoàng Minh',
    teacherTitle: 'Thạc sĩ Hóa học - Chuyên gia lấy gốc',
    teacherPhoto: 'https://picsum.photos/seed/minh/300/400',
    classTitle: 'Lớp Hóa 10 lấy lại gốc',
    description: 'Dành riêng cho các bạn học sinh mất gốc Hóa cấp 3. Phương pháp dạy dễ hiểu, trực quan, đi từ bản chất vấn đề giúp học sinh không còn sợ môn Hóa. Xây dựng lại nền tảng kiến thức vững chắc để chuẩn bị cho các năm học tiếp theo.',
    info: {
      subject: 'Hóa học - Lớp 10',
      schedule: '2 buổi/tuần (Sáng T7, CN)',
      fee: '600.000đ/tháng',
      location: 'Phường Bách Khoa, Hai Bà Trưng',
      slots: 'Còn 2 chỗ',
      status: 'Đang tuyển sinh'
    },
    education: [
      {
        school: 'Đại học Bách Khoa Hà Nội',
        major: 'Kỹ thuật Hóa học',
        time: '2012 - 2017',
        details: ['Xếp loại: Khá', 'Tham gia nghiên cứu khoa học cấp trường']
      },
      {
        school: 'Đại học Khoa học Tự nhiên - ĐHQGHN',
        major: 'Thạc sĩ Hóa học',
        time: '2018 - 2020',
        details: ['Bảo vệ luận văn xuất sắc']
      }
    ],
    certifications: [
      { year: '2022', name: 'Tác giả sách "Hóa học không khó"' }
    ],
    experience: [
      {
        time: '06/2018 - Hiện tại',
        place: 'Gia sư tự do & Dạy kèm',
        role: 'Gia sư chuyên Hóa',
        details: [
          'Chuyên nhận dạy kèm học sinh mất gốc môn Hóa từ lớp 8 đến lớp 12.',
          '100% học sinh lấy lại được căn bản sau 2 tháng học tập nghiêm túc.',
          'Điểm phẩy môn Hóa của học sinh đều cải thiện trên 7.0.'
        ]
      },
      {
        time: 'Yêu cầu đầu vào',
        place: 'Dành cho học sinh lớp 10',
        role: 'Điều kiện tham gia lớp học',
        details: [
          'Không yêu cầu kiến thức đầu vào.',
          'Chỉ cần tinh thần học hỏi, không giấu dốt.',
          'Cam kết làm đầy đủ bài tập về nhà.'
        ]
      }
    ]
  }
];

function ClassCard({ cls, onRegister }: { cls: typeof MOCK_CLASSES[0], onRegister: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 shadow-sm border border-slate-200 mb-8 rounded-sm"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-48 shrink-0">
          <img 
            src={cls.teacherPhoto} 
            alt={cls.teacherName} 
            className="w-full h-auto object-cover aspect-[3/4] bg-slate-100"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-emerald-800 mb-2 uppercase">{cls.teacherName}</h2>
          <h3 className="text-xl font-bold text-slate-900 mb-4">{cls.teacherTitle}</h3>
          <div className="h-0.5 w-full bg-slate-900 mb-4"></div>
          <p className="text-slate-700 leading-relaxed text-justify">
            <span className="font-semibold">{cls.classTitle}:</span> {cls.description}
          </p>
        </div>
      </div>

      {/* Three Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1: THÔNG TIN LỚP HỌC */}
        <div>
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-4">
            <h4 className="text-lg font-bold text-slate-900 uppercase">Thông tin lớp học</h4>
          </div>
          <ul className="space-y-2 text-slate-700">
            <li><span className="font-semibold">Môn học:</span> {cls.info.subject}</li>
            <li><span className="font-semibold">Lịch học:</span> {cls.info.schedule}</li>
            <li><span className="font-semibold">Học phí:</span> {cls.info.fee}</li>
            <li><span className="font-semibold">Khu vực:</span> {cls.info.location}</li>
            <li><span className="font-semibold">Sĩ số:</span> {cls.info.slots}</li>
            <li><span className="font-semibold">Trạng thái:</span> <span className="text-emerald-700 font-medium">{cls.info.status}</span></li>
          </ul>
        </div>

        {/* Column 2: HỌC VẤN */}
        <div>
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-4">
            <h4 className="text-lg font-bold text-slate-900 uppercase">Học vấn</h4>
          </div>
          <div className="space-y-4">
            {cls.education.map((edu, idx) => (
              <div key={idx}>
                <div className="font-bold text-slate-900">{edu.school}</div>
                <div className="text-slate-700">{edu.major}</div>
                <div className="text-slate-500 text-sm mb-1">{edu.time}</div>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-1 text-sm">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: CHỨNG CHỈ */}
        <div>
          <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-4">
            <h4 className="text-lg font-bold text-slate-900 uppercase">Chứng chỉ</h4>
          </div>
          <div className="space-y-4">
            {cls.certifications.map((cert, idx) => (
              <div key={idx}>
                <div className="font-bold text-slate-900">{cert.year}</div>
                <div className="text-slate-700">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="border-t-4 border-emerald-800 border-b border-b-emerald-800 py-2 mb-6">
          <h4 className="text-lg font-bold text-slate-900 uppercase">Kinh nghiệm & Yêu cầu</h4>
        </div>
        <div className="space-y-6">
          {cls.experience.map((exp, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full md:w-48 shrink-0 relative">
                <div className="font-medium text-slate-800">{exp.time}</div>
                <div className="text-slate-600 text-sm font-bold">{exp.place}</div>
              </div>
              <div className="flex-1 md:border-l-2 md:border-slate-300 md:pl-8 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-4 border-white"></div>
                <div className="font-bold text-slate-900 mb-2">{exp.role}</div>
                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-1">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
        <Button onClick={onRegister} className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-2 rounded-sm uppercase font-bold tracking-wider">
          Đăng ký học
        </Button>
      </div>
    </motion.div>
  );
}

export function ClassList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        title="Đăng nhập để đăng ký"
        message="Vui lòng đăng nhập với tư cách Học viên để có thể đăng ký lớp học này."
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight relative inline-block mb-2">
            Danh sách lớp học
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-emerald-700 rounded-full"
            />
          </h1>
          <p className="text-slate-600 mt-2">Tìm và đăng ký các lớp học chất lượng từ các giáo viên và trung tâm uy tín.</p>
        </div>
      </div>

      <div className="relative">
        <input 
          type="text" 
          placeholder="Tìm kiếm lớp học theo môn, khu vực, tên giáo viên..." 
          className="w-full rounded-sm border border-slate-300 bg-white py-4 px-6 text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-8">
        {MOCK_CLASSES.map((cls) => (
          <ClassCard key={cls.id} cls={cls} onRegister={() => setIsLoginModalOpen(true)} />
        ))}
      </div>
    </div>
  );
}
