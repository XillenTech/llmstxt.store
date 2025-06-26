"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToGenerator = () => {
    document
      .getElementById("generator")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-400/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">
                Future of eCommerce
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your Products
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Discovered by AI Shoppers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Optimize your store for the future of commerce. Our tool helps you
            generate the perfect
            <span className="font-semibold text-purple-600"> llms.txt</span> to
            list your products accurately in ChatGPT, Gemini, and other AI
            assistants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToGenerator}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Start Listing Your Products for Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-500">
              No signup required • Works with all platforms
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-500 ml-2">
                  yourstore.com/llms.txt
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-600"># eCommerce llms.txt</div>
                <div className="text-blue-600">Allow: /products/*</div>
                <div className="text-blue-600">Allow: /collections/*</div>
                <div className="text-purple-600">Disallow: /cart</div>
                <div className="text-purple-600">Disallow: /checkout</div>
                <div className="text-orange-600">Sitemap: /sitemap.xml</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Generated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
