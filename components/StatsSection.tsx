const stats = [
  { value: '500+', label: 'Downloads' },
  { value: '4.8★', label: 'App Rating' },
  { value: '3', label: 'Core Features' },
  { value: 'Free', label: 'To Download' },
];

export default function StatsSection() {
  return (
    <div className="bg-white border-b border-gray-100 py-14 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="text-3xl font-bold text-[#7C74F5]">{stat.value}</span>
            <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
