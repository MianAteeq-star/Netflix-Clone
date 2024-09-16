import React, { useState } from 'react';
import {FaTimes , FaPlus} from "react-icons/fa"

const faqs = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 800 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles."
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  }
];

const FAQItem = ({ faq, index, toggleFAQ }) => (
  <div className="mb-4">
   <button
      className="w-full flex justify-between items-center text-left text-lg font-semibold bg-gray-700 p-4 rounded-md"
      onClick={() => toggleFAQ(index)}
    >
      {faq.question}
      {faq.open ? <FaTimes /> : <FaPlus />}
    </button>
    {faq.open && (
      <div className="p-4 bg-gray-800 rounded-sm ">
        {faq.answer}
      </div>
    )}
  </div>
);

const FAQs = () => {
  const [faqsState, setFaqsState] = useState(faqs.map(faq => ({ ...faq, open: false })));

  const toggleFAQ = index => {
    setFaqsState(faqsState.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <section className="p-8 bg-black">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqsState.map((faq, index) => (
        <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </section>
  );
};

export default FAQs;