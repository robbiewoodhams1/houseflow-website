import FeatureCard from "./FeatureCard";
import Image1 from '@/public/splash/Obsessive compulsive disorder-pana.png';
import Image2 from '@/public/splash/Work life balance-amico.png';
import Image3 from '@/public/splash/At the bathroom-pana.png';

export default function FeaturesSection() {
  
  const FeatureCards = [
    {
      title: 'House Dashboard',
      description:
        "Track who’s pulling their weight ... and who’s not. Earn points for completed chores and see a live leaderboard to keep everyone accountable.",
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
        "Avoid awkward knock-knock moments ... easily check if the bathroom, kitchen, or other shared utilities are in use before heading over.",
      image: Image3,
    },
  ];

  return (
    <div className="bg-[#efdbff] min-h-screen md:px-20 py-20 px-5 flex flex-col items-center justify-center gap-30">
      <h3 className="text-3xl text-[#6b0059] font-semibold text-center">Our Features & Services</h3>

      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FeatureCards.map((card, index) => (
          <FeatureCard
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
          />
        ))}
      </div>

      <h3 className="text-xl text-[#6b0059] font-semibold cursor-pointer hover:text-blue-700">Explore all Features and Services</h3>

    </div>
  );
}
