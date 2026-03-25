import { Header, Footer } from '@/components';

export default function TermPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#1E1B4B]">Terms &amp; Conditions</h1>
            <p className="text-gray-400 text-sm">Effective Date: 16/07/2025</p>
          </div>

          <div className="flex flex-col gap-8 text-gray-600 text-base leading-relaxed">

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">1. Acceptance of Terms</h2>
              <p>
                By creating an account or using HouseFlow, you agree to these Terms &amp; Conditions. If you do not agree, please do not use the app.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">2. Eligibility</h2>
              <p>
                HouseFlow is intended for individuals managing shared living spaces. By using the app, you confirm that you are at least 16 years old or have permission from a legal guardian.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">3. User Accounts</h2>
              <p>
                To use HouseFlow, you must create an account with a valid name, email address, and password. You are responsible for keeping your login credentials secure.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">4. Task &amp; Utility Data</h2>
              <p>
                You retain full ownership of the chores, tasks, utility usage data, and group interactions you create in HouseFlow. This data is stored to enable app functionality and improve your shared household experience.
              </p>
              <p>
                You agree not to store unlawful, abusive, or misleading content in the app. We reserve the right to remove inappropriate content or suspend accounts that misuse the service.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">5. Features &amp; Limitations</h2>
              <p>
                Free users have access to limited features (for example: up to 5 active tasks). Upgrades to Gold or Platinum plans expand these limits. Downgrading your account may result in removal of excess tasks or data to fit the allowed limits.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">6. Data &amp; Privacy</h2>
              <p>
                We take your privacy seriously. Please read our{' '}
                <a href="/privacy" className="text-[#7C74F5] underline hover:text-[#6C63FF] transition-colors">Privacy Policy</a>{' '}
                to learn more about how we collect, store, and use your data.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">7. Changes to the App</h2>
              <p>
                We may improve, modify, or remove features from HouseFlow at any time. While we aim to notify users of major updates, we are not required to do so.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms or abuse the platform. You may also request account deletion at any time by contacting us.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-[#1E1B4B]">9. Contact</h2>
              <p>
                Questions or concerns? You can reach us at{' '}
                <strong className="text-[#1E1B4B]">woodhamshelp@gmail.com</strong>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
