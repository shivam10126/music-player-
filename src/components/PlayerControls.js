import React from 'react';

const NowPlaying = () => {
  return (
    <div className="fixed bottom-0 right-0 m-10 p-5 w-80 bg-red-600 text-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Now Playing</h3>
      <div className="flex items-center mb-4">
        <img 
          src="https://example.com/beat-it.jpg" 
          alt="Beat It" 
          className="w-16 h-16 mr-4 object-cover rounded-lg"
        />
        <div>
          <h4 className="text-xl font-semibold">Beat It</h4>
          <p className="text-gray-200">Michael Jackson</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-gray-800 p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button className="bg-gray-800 p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.72 3.88a1 1 0 01-1.504-.864v-7.76a1 1 0 011.504-.864l6.72 3.88a1 1 0 010 1.728z" />
          </svg>
        </button>
        <button className="bg-gray-800 p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NowPlaying;
