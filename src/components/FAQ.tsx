"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this the same as a Google Merchant Feed?",
      answer:
        "No, they work together. Your feed contains the product data, and llms.txt gives AI permission to access and crawl that data and your pages correctly. Think of llms.txt as the roadmap that tells AI assistants where to find your products.",
    },
    {
      question: "Will this guarantee my products appear on ChatGPT?",
      answer:
        "It doesn't guarantee it, but it's the essential first step. It tells AI crawlers exactly what to look at, making it much more likely you'll be included. Without it, AI assistants might miss your products entirely or display incorrect information.",
    },
    {
      question: "Is my customer and checkout information safe?",
      answer:
        "Yes. The generator automatically adds rules to Disallow access to sensitive pages like /cart, /checkout, and /account. This ensures AI crawlers only access your public product pages, not private customer data.",
    },
    {
      question: "What if I don't have a product feed file?",
      answer:
        "No problem. You can still guide the AI by providing the path to your product pages (e.g., /products/*). The feed is just a more efficient method that provides structured data about your products.",
    },
    {
      question: "How often should I update my llms.txt file?",
      answer:
        "Update it whenever you add new product categories, change your site structure, or launch new sections of your store. For most stores, reviewing it quarterly is sufficient unless you're making major changes.",
    },
    {
      question: "Does this work with custom eCommerce platforms?",
      answer:
        "Absolutely! While we provide templates for popular platforms like Shopify and WooCommerce, you can customize the paths for any eCommerce platform. Just specify your product page structure in the custom generator.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            eCommerce-Focused FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Common questions from store owners like you.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help you optimize your store for AI-powered
              shopping.
            </p>
            <a
              href="mailto:support@llmstxt.store"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <span>Get Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
