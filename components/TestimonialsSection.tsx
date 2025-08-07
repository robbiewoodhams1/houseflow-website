import TestimonialCard from "./TestimonialCard";
import Image1 from '@/public/splash/Obsessive compulsive disorder-pana.png';
import Image2 from '@/public/splash/Work life balance-amico.png';
import Image3 from '@/public/splash/At the bathroom-pana.png';

export default function TestimonialsSection() {
  const TestimonialCards = [
    {
      name: 'Emma Hounslow',
      info: 'University Student',
      description:
        "HouseFlow makes it super clear who’s actually doing their chores. No more guessing or arguments as it keeps everyone on track.",
      image: Image1,
    },
    {
      name: 'Daisy Taylor-Jones',
      info: 'University Student',
      description:
        "Before HouseFlow, our flat was a mess. Now we’ve got shared tasks, reminders, and even know when the bathroom’s free. It’s a game changer.",
      image: Image2,
    },
    {
      name: 'Billal Shah',
      info: 'University Student',
      description:
        "It’s helped our house work like a team. We all know what needs doing and when. Makes the vibe at home way better.",
      image: Image3,
    },
    {
      name: 'Robbie Woodhams',
      info: 'Large Household Father',
      description:
        "With a big household, it’s easy for things to fall apart. HouseFlow keeps everyone accountable and makes sure no one’s slacking.",
      image: Image1,
    },
    {
      name: 'Michelle Decoine',
      info: 'Large Household Mother',
      description:
        "Now I don’t have to remind everyone a dozen times. Tasks get ticked off, and we all know who’s pulling their weight. Love it.",
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


  return (
    <div className="bg-white min-h-screen md:px-20 py-20 px-5 flex flex-col items-center gap-20">
      <h3 className="text-3xl text-[#001F4D] font-semibold text-center">What our customers say</h3>

      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mx-auto place-items-center">
        {TestimonialCards.map((card, index) => (
          <TestimonialCard
            key={index}
            name={card.name}
            info={card.info}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      {/* <h3 className="text-xl text-[#001F4D] font-semibold cursor-pointer hover:text-blue-700 mt-10">
        Explore all Testimonials
      </h3> */}
    </div>
  );
}
