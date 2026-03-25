import type { StaticImageData } from 'next/image';
import Image from "next/image";

type FeatureCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

export default function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 shadow-sm hover:shadow-2xl hover:scale-102 transition-all cursor-default">
      <div className="w-full h-52 bg-[#F0EEFF] rounded-xl flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <h4 className="text-lg font-semibold text-[#1E1B4B]">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
