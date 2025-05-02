"use client";
import { CalendarIcon, Clock, Heart, MapPin } from 'lucide-react';
import { useState } from 'react';
export default function BirthdayPage() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      {/* Hero Section */}
      <header className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-bounce mb-8">
            <Heart className="mx-auto h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Celebrate With Us!
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-yellow-100 sm:text-2xl md:mt-5 md:max-w-3xl">
            Join our spectacular birthday celebration filled with joy, laughter, and unforgettable moments!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
              <img
                src="https://desserterys.com/wp-content/uploads/2022/05/11.jpeg"
                alt="Birthday Cake"
                className="rounded-3xl object-cover w-full h-"
              />
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="text-lg text-gray-700">Saturday, 25 November 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="text-lg text-gray-700">7:00 PM - Midnight</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="text-lg text-gray-700">Grand Ballroom, The Luxury Hotel</span>
                  </div>
                </div>
              </div>

              {/* RSVP Form */}
              {!rsvpSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">RSVP Now</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <select
                      className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Will you attend?</option>
                      <option value="yes">Yes, I'll be there!</option>
                      <option value="no">Regretfully decline</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      Submit RSVP
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-50 p-6 rounded-2xl shadow-sm text-center">
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">🎉 Thank You!</h3>
                  <p className="text-green-700">Your RSVP has been successfully submitted!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Designed and developed by Ahmed
          </p>
        </div>
      </footer>
    </div>
  );
}