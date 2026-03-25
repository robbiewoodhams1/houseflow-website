import Image from 'next/image';
import Image1 from '@/public/splash/Phones.png';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/5a902db97f96951c82922874.png';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-[#8B83FF] via-[#9F98FF] to-[#7C74F5] min-h-screen pt-28 px-6 flex justify-center items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10 py-16">
        {/* Text content */}
        <div className="flex flex-col gap-8 items-start lg:max-w-xl">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm font-medium">
            Free to Download
          </div>
          <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
            Organise Better.<br />
            Automate Smarter.<br />
            <span className="text-white/75">Take Back Your Time.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            The smart household app that makes co-living fairer, calmer, and more efficient.
          </p>
          <div className="flex flex-row gap-5 flex-wrap">
            <a href="https://play.google.com/store/apps/details?id=com.houseflow" className="relative w-[155px] h-[48px]">
              <Image src={Google} alt="Get it on Google Play" fill style={{ objectFit: 'contain' }} priority />
            </a>
            <a href="https://apps.apple.com/us/app/houseflow-app/id6747577123" className="relative w-[155px] h-[48px]">
              <Image src={Apple} alt="Download on the App Store" fill style={{ objectFit: 'contain' }} priority />
            </a>
          </div>
        </div>

        {/* Phone image */}
        <div className="lg:w-[580px] lg:h-[580px] w-[300px] h-[300px] relative drop-shadow-2xl">
          <Image
            src={Image1}
            alt="HouseFlow app screens"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
