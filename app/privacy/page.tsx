import { Header, Footer } from '@/components';

export default function PrivacyPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#1E1B4B]">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Effective Date: 16/07/2025</p>
          </div>

          <div className="flex flex-col gap-8 text-gray-600 text-base leading-relaxed">
            <p>
              At <strong className="text-[#1E1B4B]">HouseFlow</strong>, your privacy is important to us.
              This policy outlines what information we collect, how it&apos;s stored, and your control over it.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">What We Collect</h2>
              <p>When you create an account on HouseFlow, we collect:</p>
              <ul className="list-disc list-inside ml-4 flex flex-col gap-1">
                <li>Your <strong className="text-[#1E1B4B]">name</strong></li>
                <li>Your <strong className="text-[#1E1B4B]">email address</strong></li>
                <li>Your <strong className="text-[#1E1B4B]">password</strong></li>
              </ul>
              <p>We also store all <strong className="text-[#1E1B4B]">chore data, tasks, and household activity</strong> created or tracked in the app.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">Where Your Data Goes</h2>
              <p>We use <strong className="text-[#1E1B4B]">Supabase</strong> to manage and store your data, including:</p>
              <ul className="list-disc list-inside ml-4 flex flex-col gap-1">
                <li>User accounts and authentication</li>
                <li>Chores, utilities, points, and task history</li>
              </ul>
              <p>
                Please note: This data is <strong className="text-[#1E1B4B]">not encrypted</strong>.
                For this reason, we recommend not storing any sensitive personal or financial information within the app.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">Do You Use Ads or Share My Info?</h2>
              <p>
                <strong className="text-[#1E1B4B]">No.</strong> HouseFlow does <strong className="text-[#1E1B4B]">not</strong> use advertisements or sell your personal information to third parties.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">Do You Use Analytics?</h2>
              <p>
                At this time, <strong className="text-[#1E1B4B]">HouseFlow</strong> does <strong className="text-[#1E1B4B]">not</strong> use any analytics or tracking services.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">How to Delete Your Data</h2>
              <ul className="list-disc list-inside ml-4 flex flex-col gap-1">
                <li>You can <strong className="text-[#1E1B4B]">delete individual tasks or reset house data</strong> within the app settings.</li>
                <li>
                  To <strong className="text-[#1E1B4B]">permanently delete your account and all associated data</strong>, please contact us at{' '}
                  <strong className="text-[#1E1B4B]">woodhamshelp@gmail.com</strong>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">Your Data, Your Choice</h2>
              <p>
                We don&apos;t use your data for anything outside of helping your house run smoothly.
                HouseFlow exists to make shared living simpler, and that includes keeping your information under your control.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
