import { Header, Footer } from '@/components';

type DeleteItem = {
  title: string;
  answer: string;
};

const items: DeleteItem[] = [
  {
    title: '1. Deleting Your Data',
    answer:
      'You have full control over your data within the app. To delete a task, utility status, or group, simply navigate to the appropriate section such as Tasks, Utilities, Groups and tap the "Delete" button. Once deleted, the item will be permanently removed from your account and our database immediately.',
  },
  {
    title: '2. Deleting Your Account',
    answer:
      'To delete your entire account and all associated data, go to settings > general settings > delete account.',
  },
];

export default function DeletePage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Account</span>
            <h1 className="text-4xl font-bold text-[#1E1B4B]">Deleting Your Data</h1>
          </div>

          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-[#FAFAFA] rounded-2xl p-8 border border-gray-100 flex flex-col gap-3">
                <h2 className="text-xl font-bold text-[#1E1B4B]">{item.title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
