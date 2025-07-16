import type { StaticImageData } from 'next/image';
import Image from "next/image";

type FeatureCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
};


export default function FeatureCard({ image, title, description }: FeatureCardProps) {

    return (
          <div className="bg-white rounded-2xl p-6 md:py-20 py-10 shadow-md items-center flex flex-col gap-10">
            <Image
              src={image}
              alt={title}
              className="w-full h-80 object-cover rounded-xl"
            />
            <h4 className="text-2xl font-semibold text-[#6b0059]">{title}</h4>
            <p className="text-[#333] text-base">{description}</p>
            <button className=" bg-[#6b0059] text-white font-semibold px-4 py-2 w-[50%] rounded-full hover:bg-blue-700 transition cursor-pointer">
              Learn more
            </button>
          </div>
    )
}