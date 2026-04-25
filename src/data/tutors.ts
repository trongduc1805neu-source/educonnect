export const RAW_NAMES = [
  "Phan Thúy An", "Phạm Nguyễn Hà Anh", "Vũ Ngọc Bảo Anh", "Phạm Lê Huyền Diệu", 
  "Diệp Anh Dũng", "Nguyễn Đức Dũng", "Đinh Nhật Duy", "Trần Khánh Dương", 
  "Ngô Quốc Đạt", "Nguyễn Trọng Đức", "Nguyễn Ngân Hà", "Phan Thúy Hằng", 
  "Trịnh Vũ Hiệp", "Nguyễn Minh Hoàng", "Nguyễn Đình Huy", "Nguyễn Ngọc Huyền", 
  "Trịnh Nguyên Hưng", "Nguyễn Trung Kiên", "Lê Ngọc Khánh", "Nguyễn Công Nhật Khánh", 
  "Nguyễn Thị Huyền Linh", "Nguyễn Thị Kiều Mai", "Nguyễn Tiến Mạnh", "Nguyễn Quang Minh", 
  "Vy Quang Minh", "Đặng Bảo Ngọc", "Nguyễn Thị Anh Ngọc", "Trần Hải Nguyên", 
  "Lê Huyền Như", "Nguyễn Thị Phương Oanh", "Lê Hữu Minh Quân", "Lê Minh Quý", 
  "Nguyễn Thị Như Quỳnh", "Nguyễn Minh Tâm", "Vũ Cẩm Tú", "Lê Duy Thăng", 
  "Ngô Gia Thủy", "Lê Quỳnh Trang", "Trần Quỳnh Trang", "Nguyễn Sinh Trung", 
  "Lê Nguyễn Thu Uyên", "Trần Quốc Việt"
];

const ROLES = ['Sinh viên xuất sắc', 'Giáo viên THCS', 'Giáo viên THPT', 'Nghiên cứu viên', 'Chuyên gia Luyện thi'];
const SUBJECTS_LIST = ['Toán Học', 'Ngữ Văn', 'Tiếng Anh', 'Vật Lý', 'Hóa Học', 'Sinh Học', 'IELTS'];
const DISTANCES = ['Cầu Giấy, Hà Nội', 'Hai Bà Trưng, Hà Nội', 'Đống Đa, Hà Nội', 'Thanh Xuân, Hà Nội', 'Tây Hồ, Hà Nội'];
const MODES = ['Tại nhà', 'Online', 'Tại nhà hoặc Online'];
const UNIVERSITIES = ['Đại học Sư phạm Hà Nội', 'Đại học Kinh tế Quốc dân (NEU)', 'Đại học Bách Khoa Hà Nội', 'Đại học Ngoại Thương (FTU)', 'Đại học Quốc gia Hà Nội'];

export const MOCK_TUTORS = RAW_NAMES.map((name, index) => {
  const seed = index * 12345;
  const rating = (4.5 + ((seed % 50) / 100)).toFixed(1);
  const reviews = (seed % 100) + 10;
  const price = `${200 + (seed % 5) * 50}.000đ`;
  
  return {
    id: index + 1,
    name: name,
    title: `${ROLES[seed % ROLES.length]} - Chuyên ôn luyện chuyển cấp và lấy lại gốc cho học sinh`,
    subject: SUBJECTS_LIST[seed % SUBJECTS_LIST.length],
    rating: parseFloat(rating),
    reviews: reviews,
    fee: price,
    distance: DISTANCES[seed % DISTANCES.length],
    location: DISTANCES[seed % DISTANCES.length],
    mode: MODES[seed % MODES.length],
    isVerified: true,
    isAmbassador: seed % 3 === 0,
    firstLessonFree: true,
    responseRate: "100%",
    responseTime: "1 giờ",
    students: (seed % 30) + 10,
    photoURL: `https://i.pravatar.cc/300?u=${encodeURIComponent(name)}`,
    tags: ['Tư duy logic', 'Dạy dễ hiểu'],
    education: UNIVERSITIES[seed % UNIVERSITIES.length],
    experience: `${(seed % 5) + 2} năm kinh nghiệm giảng dạy`,
    achievements: 'Giúp học sinh tiến bộ rõ rệt',
    about: `Chào các bậc phụ huynh và các em học sinh. Mình là giáo viên chuyên môn với hơn ${(seed % 5) + 2} năm kinh nghiệm giảng dạy.\n\nPhương pháp của mình:\n- Tập trung vào việc hiểu bản chất, không học vẹt công thức.\n- Xây dựng lộ trình cá nhân hóa dựa trên năng lực hiện tại của từng học sinh.\n- Kết hợp lý thuyết và thực hành liên tục để ghi nhớ sâu.\n- Thường xuyên kiểm tra đánh giá để điều chỉnh phương pháp kịp thời.\n\nThành tích:\n- 90% học sinh tiến bộ sau 1 tháng.\n- Giúp nhiều học sinh từ mất gốc đạt điểm khá, giỏi.`,
    methodology: `Mình tin rằng không có học sinh kém, chỉ là chưa tìm được phương pháp học phù hợp.\n\nTrong buổi học đầu tiên, mình sẽ dành thời gian để kiểm tra năng lực, tìm hiểu điểm mạnh, điểm yếu và mục tiêu của học sinh. Từ đó, mình sẽ thiết kế một lộ trình học tập riêng biệt.\n\nMỗi buổi học sẽ bao gồm:\n1. Ôn tập kiến thức cũ (15p)\n2. Giảng kiến thức mới kèm ví dụ minh họa (45p)\n3. Thực hành giải bài tập từ cơ bản đến nâng cao (45p)\n4. Tổng kết và giao bài tập về nhà (15p)\n\nPhụ huynh sẽ nhận được báo cáo tình hình học tập sau mỗi tháng.`,
    resume: [
      { year: "2018 - Nay", title: "Giáo viên tự do", desc: "Dạy kèm 1-1 và nhóm nhỏ" },
      { year: "2014 - 2018", title: UNIVERSITIES[seed % UNIVERSITIES.length], desc: `Cử nhân (Bằng Giỏi)` }
    ]
  };
});
