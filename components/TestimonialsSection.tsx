import TestimonialCard from "./TestimonialCard";
import Image1 from '@/public/splash/Obsessive compulsive disorder-pana.png';
import Image2 from '@/public/splash/Work life balance-amico.png';
import Image3 from '@/public/splash/At the bathroom-pana.png';

const testimonialCards = [
  {
    name: 'Emma Hounslow',
    info: 'University Student',
    description:
      "HouseFlow makes it super clear who's actually doing their chores. No more guessing or arguments — it keeps everyone on track.",
    image: Image1,
  },
  {
    name: 'Daisy Taylor-Jones',
    info: 'University Student',
    description:
      "Before HouseFlow, our flat was a mess. Now we've got shared tasks, reminders, and even know when the bathroom's free. It's a game changer.",
    image: Image2,
  },
  {
    name: 'Billal Shah',
    info: 'University Student',
    description:
      "It's helped our house work like a team. We all know what needs doing and when. Makes the vibe at home way better.",
    image: Image3,
  },
  {
    name: 'Robbie Woodhams',
    info: 'Large Household Father',
    description:
      "With a big household, it's easy for things to fall apart. HouseFlow keeps everyone accountable and makes sure no one's slacking.",
    image: Image1,
  },
  {
    name: 'Michelle Decoine',
    info: 'Large Household Mother',
    description:
      "Now I don't have to remind everyone a dozen times. Tasks get ticked off, and we all know who's pulling their weight. Love it.",
    image: Image2,
  },
  {
    name: 'Ryan Christmann-Cooper',
    info: 'University Student',
    description:
      "I used to do most of the cleaning. With HouseFlow, the workload's actually shared. It keeps things fair and clean.",
    image: Image3,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="bg-[#FAFAFA] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-bold text-[#1E1B4B]">What our users say</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Real households. Real results.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialCards.map((card, index) => (
            <TestimonialCard
              key={index}
              name={card.name}
              info={card.info}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
