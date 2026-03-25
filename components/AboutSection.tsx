import Image from 'next/image';
import Image1 from '@/public/splash/Self confidence-rafiki.png';

export default function AboutSection() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">About</span>
          <h2 className="text-4xl font-bold text-[#1E1B4B]">Built for shared living</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-96 bg-[#F0EEFF] rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src={Image1}
                alt="About HouseFlow"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 text-gray-600 text-base leading-relaxed">
            <p>
              At <strong className="text-[#1E1B4B]">HouseFlow</strong>, we understand that keeping a shared home running smoothly takes more than just good intentions. Whether you live with flatmates, family, or a partner, household management can quickly turn into silent frustrations, forgotten chores, and unfair imbalances.
            </p>
            <p>
              That&apos;s why we built <strong className="text-[#1E1B4B]">HouseFlow</strong>: a smart, streamlined app designed to make co-living fairer, calmer, and more efficient.
            </p>
            <p>
              From gamified chore tracking and one-off task scheduling to utility check-ins and automated reminders, every feature is built with real households in mind. No more guesswork, nagging, or passive-aggressive sticky notes.
            </p>
            <p>
              Our goal is simple: help everyone do their part, stay in sync, and live together with less stress and more harmony.
            </p>
            <p>
              Whether you&apos;re trying to track who&apos;s taken the bins out or avoid walking in on someone in the bathroom, <strong className="text-[#1E1B4B]">HouseFlow</strong> keeps your home flowing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
