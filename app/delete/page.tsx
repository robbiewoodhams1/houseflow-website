
import {
  Header,
  Footer
} from '@/components'


type DeleteItem = {
  title: string;
  answer: string;
}

export default function DeletePage() {

  const items: DeleteItem[] = [
    {
      title: '1. Deleting Your Data',
      answer:
        'You have full control over your data within the app. To delete a task, utility status, or group, simply navigate to the appropriate section such as Tasks, Utilities, Groups and tap the "Delete" button. Once deleted, the item will be permanently removed from your account and our database immediately.'
    },
    {
      title: '2. Deleting Your Account',
      answer:
        'To delete your entire account and all associated data, please contact us directly at: woodhamshelp@gmail.com. Our team will process your request as quickly as possible. Once completed, all of your saved data and login information will be permanently deleted.'
    }
  ];

  return(
    <div className="w-full flex flex-col bg-blue-50 items-center gap-20">
      <Header />

      <h2 className='text-blue-950 text-3xl font-bold'>Deleting Data</h2>



      <div className='text-start flex flex-col p-10 gap-20'>
        {items.map((item, index) => (
          <div
            key={index}
          >
            <h2 className='text-blue-950 text-2xl font-bold mb-5'>{item.title}</h2>
            <p className='text-gray-800 text-lg'>{item.answer}</p>
          </div>
        ))}
      </div>



      <Footer />
    </div>
  );
}
