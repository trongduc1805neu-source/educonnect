export const getSubjectColor = (subject: string) => {
  const s = subject.toLowerCase();
  if (s.includes('toán')) return 'bg-red-50 text-red-700 border-red-200';
  if (s.includes('tiếng anh')) return 'bg-blue-50 text-blue-700 border-blue-200';
  if (s.includes('ngữ văn')) return 'bg-amber-50 text-amber-700 border-amber-200';
  if (s.includes('vật lý')) return 'bg-purple-50 text-purple-700 border-purple-200';
  if (s.includes('hóa học')) return 'bg-teal-50 text-teal-700 border-teal-200';
  if (s.includes('sinh học')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  return 'bg-zinc-50 text-zinc-700 border-zinc-200';
};
