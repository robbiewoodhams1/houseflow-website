import FeatureCard from "./FeatureCard";
import Image1 from '@/public/splash/Obsessive compulsive disorder-pana.png';
import Image2 from '@/public/splash/Work life balance-amico.png';
import Image3 from '@/public/splash/At the bathroom-pana.png';

const featureCards = [
  {
    title: 'House Dashboard',
    description:
      "Track who's pulling their weight — and who's not. Earn points for completed chores and see a live leaderboard to keep everyone accountable.",
    image: Image1,
  },
  {
    title: 'Recurring & One-Off Tasks',
    description:
      "Assign long-term chores or quick one-off tasks that auto-clear at midnight. Stay organised without the mental load.",
    image: Image2,
  },
  {
    title: 'Shared Utility Check',
    description:
      "Avoid awkward knock-knock moments — easily check if the bathroom, kitchen, or other shared utilities are in use before heading over.",
    image: Image3,
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#FAFAFA] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl font-bold text-[#1E1B4B]">Everything your household needs</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Built for shared living — from student flats to family homes.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} title={card.title} image={card.image} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
