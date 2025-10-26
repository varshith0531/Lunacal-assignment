'use client';

import { useState } from 'react';

export default function AboutMeWidget() {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="bg-[#363C43] rounded-lg shadow-2xl shadow-gray-900/50 p-4 sm:p-6 w-full max-w-2xl mx-auto lg:mx-0">
      {/* Header with icon and tabs */}
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-4">
          <span className="text-[#969696] text-sm">?</span>
        </div>
        <div className="flex rounded-lg bg-black p-1 shadow-lg relative">
          {/* Sliding background indicator */}
          <div 
            className="absolute bg-[#2E3237] rounded-lg transition-all duration-300 ease-in-out"
            style={{
              width: 'calc(100% / 4)',
              height: 'calc(100% - 8px)',
              top: '4px',
              left: `${(tabs.indexOf(activeTab) * 100) / tabs.length}%`,
              transform: 'translateX(4px)'
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="flex">
        <div className="w-6 h-6 mr-4 mt-10 shrink-0">
          <div className="w-4 h-6 grid grid-cols-2 gap-0.5">
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-[#363C43] rounded-md p-3 sm:p-4 h-40 sm:h-48 overflow-y-auto">
            <p className="text-[#969696] text-sm leading-relaxed">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a great opportunity for us to work together and I'm excited to help you with your business needs. I have extensive experience in sales and customer relationship management, and I'm here to ensure you get the best possible service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
