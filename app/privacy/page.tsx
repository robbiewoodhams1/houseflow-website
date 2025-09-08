
import {
  Header,
  Footer
} from '@/components'

export default function PrivacyPage() {

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Privacy Policy</h2>

      <div className="flex flex-col gap-8 max-w-4xl w-full text-base md:text-lg text-gray-800 leading-relaxed p-10">

        <p><strong className="font-semibold">Effective Date:</strong> 16/07/2025</p>

        <p>
          At <strong className="font-semibold">HouseFlow</strong>, your privacy is important to us.
          This policy outlines what information we collect, how it&apos;s stored, and your control over it.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">What We Collect</h2>
        <p>When you create an account on HouseFlow, we collect:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Your <strong className="font-semibold">name</strong></li>
            <li>Your <strong className="font-semibold">email address</strong></li>
            <li>Your <strong className="font-semibold">password</strong></li>
          </ul>
        <p>We also store all <strong className="font-semibold">chore data, tasks, and household activity</strong> created or tracked in the app.</p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Where Your Data Goes</h2>
        <p>We use <strong className="font-semibold">Supabase</strong> to manage and store your data, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>User accounts and authentication</li>
          <li>Chores, utilities, points, and task history</li>
        </ul>
        <p>
          Please note: This data is <strong className="font-semibold">not encrypted</strong>.
          For this reason, we recommend not storing any sensitive personal or financial information within the app.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Do You Use Ads or Share My Info?</h2>
        <p>
          <strong className="font-semibold">No.</strong> HouseFlow does <strong className="font-semibold">not</strong> use advertisements or sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Do You Use Analytics?</h2>
        <p>
          At this time, <strong className="font-semibold">HouseFlow</strong> does <strong className="font-semibold">not</strong> use any analytics or tracking services.
        </p>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">How to Delete Your Data</h2>
        <ul className="list-disc list-inside ml-4">
          <li>You can <strong className="font-semibold">delete individual tasks or reset house data</strong> within the app settings.</li>
          <li>
            To <strong className="font-semibold">permanently delete your account and all associated data</strong>, please contact us at:<br />
            <strong className="font-semibold">woodhamshelp@gmail.com</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-800 mt-6">Your Data, Your Choice</h2>
        <p>
          We don&apos;t use your data for anything outside of helping your house run smoothly.
          HouseFlow exists to make shared living simpler, and that includes keeping your information under your control.
        </p>

      </div>

      <Footer />
    </div>
  );

}
