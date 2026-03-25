import FAQsButton from "@/components/FAQsButton";
import { Header, Footer } from '@/components';

type FAQsItem = {
  question: string;
  answer: string;
};

const items: FAQsItem[] = [
  {
    question: "What is HouseFlow Pro?",
    answer: "HouseFlow Pro gives you access to premium features such as more customisation tools and analytics.",
  },
  {
    question: "How much does it cost?",
    answer: "HouseFlow Pro costs £2.99/month per group. You only pay for the groups you upgrade.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You'll retain Pro features until the end of your billing period. After that, the group will be downgraded to free.",
  },
  {
    question: "Can I upgrade more than one group?",
    answer: "Yes! Each group has its own subscription. You can upgrade as many groups as you like.",
  },
  {
    question: "Do all group members need Pro?",
    answer: "No. Only one member needs to upgrade the group. Once it's Pro, all members benefit.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds are generally not provided unless there's a billing error. Contact support for help.",
  },
  {
    question: "How do I delete my account?",
    answer: "To request account deletion, please fill out the contact form located in the app settings. Our team will permanently remove your data within 48 hours.",
  },
  {
    question: "How do I delete a group?",
    answer: "Tap into the group settings and choose 'Delete Group'. Only the group creator or owner can perform this action.",
  },
  {
    question: "How do I create a group?",
    answer: "On the Group page, tap the 'Create a Group' button, then enter a name for your group. You can invite others via email or share your invite code.",
  },
  {
    question: "How do I invite someone to my group?",
    answer: "Inside your group, press the 'Invite Member' button and either share the group's invite code or send them a direct invite by email.",
  },
  {
    question: "What can I use HouseFlow for?",
    answer: "HouseFlow helps manage shared living and group tasks. It's ideal for households, roommates, or team collaborations.",
  },
  {
    question: "Where can I get support?",
    answer: "Use the contact form in the Settings tab to reach our support team. We'll respond within 24–48 hours.",
  },
  {
    question: "I found a bug — how do I report it?",
    answer: "You can report bugs via the in-app contact form or by emailing us directly. Please include screenshots if possible!",
  },
];

export default function FAQsPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-[#7C74F5] text-sm font-semibold uppercase tracking-widest">Support</span>
            <h1 className="text-4xl font-bold text-[#1E1B4B]">Frequently Asked Questions</h1>
            <p className="text-gray-500 text-lg">Everything you need to know about HouseFlow.</p>
          </div>

          <FAQsButton items={items} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
