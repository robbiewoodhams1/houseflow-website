'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  items: FAQItem[];
}

export default function FAQsButton({ items }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {items?.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 cursor-pointer hover:bg-[#F8F7FF] transition-colors"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-base font-semibold text-[#1E1B4B]">{item.question}</h3>
            {openIndex === index
              ? <ChevronUpIcon className="h-5 w-5 text-[#7C74F5] flex-shrink-0" />
              : <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
            }
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 border-t border-gray-50">
              <p className="text-gray-600 text-sm leading-relaxed pt-4">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
