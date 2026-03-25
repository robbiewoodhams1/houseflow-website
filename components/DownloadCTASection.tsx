import Image from 'next/image';
import Google from '@/public/splash/GetItOnGooglePlay_Badge_Web_color_English.png';
import Apple from '@/public/splash/5a902db97f96951c82922874.png';

export default function DownloadCTASection() {
  return (
    <div className="relative bg-gradient-to-r from-[#7C74F5] to-[#9F98FF] py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to keep your<br />home flowing?
        </h2>
        <p className="text-white/80 text-lg max-w-lg">
          Join hundreds of households making co-living smoother every day. Download HouseFlow for free.
        </p>
        <div className="flex flex-row gap-5 flex-wrap justify-center">
          <a href="https://play.google.com/store/apps/details?id=com.houseflow" className="relative w-[155px] h-[48px]">
            <Image src={Google} alt="Get it on Google Play" fill style={{ objectFit: 'contain' }} />
          </a>
          <a href="https://apps.apple.com/us/app/houseflow-app/id6747577123" className="relative w-[155px] h-[48px]">
            <Image src={Apple} alt="Download on the App Store" fill style={{ objectFit: 'contain' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
