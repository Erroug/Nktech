import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Company A",
      text: "This is an amazing service!",
      fullText:
        "This is an amazing service! I am so happy with the quality and attention to detail provided.",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Marketing Head, Brand B",
      text: "Highly recommend to everyone.",
      fullText:
        "Highly recommend to everyone. Their professionalism and dedication are unmatched.",
      rating: 4,
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Sam Wilson",
      designation: "Product Manager, Startup C",
      text: "Great value for money.",
      fullText:
        "Great value for money. I am impressed by the support and quick responses.",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="py-10 bg-[#294A63]">
      <h2 className="text-5xl font-bold text-center text-white mb-8">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            onClick={() =>
              setExpandedCard(expandedCard === t.id ? null : t.id)
            }
            className={`bg-white rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-6 w-80 ${
              expandedCard === t.id ? "h-auto" : "h-60 overflow-hidden"
            }`}
          >
            {/* Header with image, name, and designation */}
            <div className="flex items-center mb-3 relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
              />
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.designation}</p>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < t.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600">
              {expandedCard === t.id ? t.fullText : t.text}
            </p>

            {/* Button */}
            <button className="mt-4 text-blue-500 underline">
              {expandedCard === t.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
