"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaHeart, FaBirthdayCake, FaGlassCheers, FaRegSmileBeam } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import moment from 'moment';

export default function BirthdayWish() {
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = moment().add(1, 'days').startOf('day'); // Set to next day
    const timer = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now);
      const duration = moment.duration(diff);
      
      setTimeLeft({
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-8">
      {/* Main Card */}
      <div className="max-w-4xl mx-4 md:mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 bg-purple-600 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-50 bg-black" />
          <div className="relative z-10 text-center space-y-4 px-4">
            <div className="animate-float">
              <FaBirthdayCake className="mx-auto h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Happy Birthday, <span className="text-yellow-300">Hassan!</span>
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Photo Gallery */}
          <div className="space-y-4">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img
                src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
                alt="Friends"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 rounded-xl overflow-hidden">
                <img
                  src="https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"
                  alt="Friends"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-all"
                />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Friends"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaRegSmileBeam className="mr-2 text-pink-500" />
                Birthday Wishes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Dear Sarah,<br />
                On your special day, I want to celebrate the amazing person you are! 
                Your kindness, laughter, and friendship light up every room. 
                May this year bring you endless joy and wonderful adventures! 🎉
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaGlassCheers className="mr-2 text-purple-600" />
                Celebration Countdown
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow">
                  <div className="text-2xl font-bold text-purple-600">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-500">Hours</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <div className="text-2xl font-bold text-purple-600">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-500">Minutes</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <div className="text-2xl font-bold text-purple-600">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-500">Seconds</div>
                </div>
              </div>
            </div>

            {/* Personal Message Form */}
            <div className="bg-yellow-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaHeart className="mr-2 text-red-500" />
                Send Your Wish
              </h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a personal message..."
                  className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                  <FiSend className="mr-2" /> Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white py-6 text-center">
          <p className="text-gray-400">
            Made with ❤️ by Ahmed • {new Date().getFullYear()}
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaHeart className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaBirthdayCake className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGlassCheers className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
