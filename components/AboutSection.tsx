import Image from 'next/image';
import Image1 from '@/public/splash/Self confidence-rafiki.png';

export default function AboutSection() {
  return (
    <div className="bg-[#efdbff] min-h-screen md:px-20 py-20 px-5 flex flex-col items-center gap-20">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">About HouseFlow</h3>

      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-[1400px]">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Image1}
            alt="About HouseFlow"
            width={600}
            height={600}
            className="rounded-xl object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-black text-lg leading-relaxed space-y-5">
          <p>
            At <strong>HouseFlow</strong>, we understand that keeping a shared home running smoothly takes more than just good intentions. Whether you live with flatmates, family, or a partner, household management can quickly turn into silent frustrations, forgotten chores, and unfair imbalances.
          </p>

          <p>
            That&apos;s why we built <strong>HouseFlow</strong>: a smart, streamlined app designed to make co-living fairer, calmer, and more efficient.
          </p>

          <p>
            From gamified chore tracking and one-off task scheduling to utility check-ins and automated reminders, every feature is built with real households in mind. No more guesswork, nagging, or passive-aggressive sticky notes.
          </p>

          <p>
            Our goal is simple: help everyone do their part, stay in sync, and live together with less stress and more harmony.
          </p>

          <p>
            Whether you&apos;re trying to track who&apos;s taken the bins out or avoid walking in on someone in the bathroom, <strong>HouseFlow</strong> keeps your home flowing.
          </p>

        </div>
      </div>

      <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Learn More
      </h3>
    </div>
  );
}
