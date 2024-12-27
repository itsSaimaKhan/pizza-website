'use client';

import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hour',
      description: '5PM se 7PM tak tamam drinks par 50% off hasil kren',
    },
    {
      title: 'Family Meal Deal',
      description: '2 main courses order kren aur family deal coupon code hasil kren',
    },
    {
      title: 'Weekly Brunch',
      description: 'Ek free complimentary drink ka luft uthaen',
    },
    {
      title: 'Mid-Night Deal',
      description: 'Ek free complimentary pizza drink ka luft uthaen in midnight deal',
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center text-white">Special Offers</h2>

        {/* Offers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 ${
                index < 2 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <button
                onClick={() => handleOfferClick(offer.description)}
                className="flex items-center gap-6 bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition duration-300 transform hover:scale-105 w-full"
              >
                {/* Placeholder for Image/Icon */}
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  {index + 1}
                </div>

                {/* Offer Content */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">{offer.title}</h3>
                  <p className="text-gray-700">{offer.description}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
