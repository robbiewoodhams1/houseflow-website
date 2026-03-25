import type { StaticImageData } from 'next/image';

type TestimonialCardProps = {
  image: StaticImageData;
  name: string;
  info: string;
  description: string;
};

export default function TestimonialCard({ name, info, description }: TestimonialCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:scale-102 transition-all">
      <div className="text-4xl text-[#9F98FF] font-serif leading-none select-none">&ldquo;</div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
        <div className="w-9 h-9 rounded-full bg-[#9F98FF] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1E1B4B]">{name}</p>
          <p className="text-xs text-gray-400">{info}</p>
        </div>
      </div>
    </div>
  );
}
