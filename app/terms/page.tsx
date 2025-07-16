
import {
  Header,
  Footer
} from '@/components'

export default function TermPage() {

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

        <h2 className='text-blue-950 text-3xl font-bold'>Terms & Conditions</h2>

        <div className="flex flex-col gap-8 max-w-4xl w-full text-base md:text-lg text-gray-800 leading-relaxed">

          <p><strong>Effective Date:</strong> 16/07/2025</p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">1. Acceptance of Terms</h2>
          <p>
            By creating an account or using HouseFlow, you agree to these Terms & Conditions. If you do not agree, please do not use the app.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">2. Eligibility</h2>
          <p>
            HouseFlow is intended for individuals managing shared living spaces. By using the app, you confirm that you are at least 16 years old or have permission from a legal guardian.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">3. User Accounts</h2>
          <p>
            To use HouseFlow, you must create an account with a valid name, email address, and password. You are responsible for keeping your login credentials secure.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">4. Task & Utility Data</h2>
          <p>
            You retain full ownership of the chores, tasks, utility usage data, and group interactions you create in HouseFlow. This data is stored to enable app functionality and improve your shared household experience.
          </p>
          <p>
            You agree not to store unlawful, abusive, or misleading content in the app. We reserve the right to remove inappropriate content or suspend accounts that misuse the service.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">5. Features & Limitations</h2>
          <p>
            Free users have access to limited features (for example: up to 5 active tasks). Upgrades to Gold or Platinum plans expand these limits. Downgrading your account may result in removal of excess tasks or data to fit the allowed limits.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">6. Data & Privacy</h2>
          <p>
            We take your privacy seriously. Please read our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> to learn more about how we collect, store, and use your data.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">7. Changes to the App</h2>
          <p>
            We may improve, modify, or remove features from HouseFlow at any time. While we aim to notify users of major updates, we are not required to do so.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms or abuse the platform. You may also request account deletion at any time by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">9. Contact</h2>
          <p>
            Questions or concerns? You can reach us at:<br />
            <strong>woodhamshelp@gmail.com</strong>
          </p>

        </div>

      <Footer />
    </div>
  );

}
