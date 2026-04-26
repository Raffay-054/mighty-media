'use client';

import { useState } from 'react';

const platforms = [
  { name: 'Spotify', icon: '🎵', rateUSD: 0.24 },
  { name: 'Apple Music', icon: '🍎', rateUSD: 0.30 },
  { name: 'Tidal', icon: '💎', rateUSD: 0.72 },
  { name: 'Deezer', icon: '📊', rateUSD: 0.28 },
  { name: 'Amazon Music', icon: '🎧', rateUSD: 0.30 },
  { name: 'Pandora', icon: '🎙️', rateUSD: 0.08 },
  { name: 'YouTube Music', icon: '▶️', rateUSD: 0.10 },
  { name: 'SoundCloud', icon: '☁️', rateUSD: 0.08 },
];

const exchangeRates = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
};

export default function RoyaltiesCalculator() {
  const [streams, setStreams] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [calculated, setCalculated] = useState(false);

  const currencySymbols = {
    USD: '$',
    GBP: '£',
    EUR: '€',
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (streams && !isNaN(Number(streams))) {
      setCalculated(true);
    }
  };

  const calculateEarnings = (rateUSD) => {
    const numStreams = Number(streams) || 0;
    const earningsUSD = numStreams * rateUSD;
    const exchangeRate = exchangeRates[currency];
    const earnings = earningsUSD * exchangeRate;
    return earnings.toFixed(2);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Streaming Royalties Calculator
          </h1>
          <p className="text-slate-300 text-lg">
            Estimate how much you could earn on streaming platforms based on your play count.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-slate-900 border border-pink-500/30 rounded-xl p-8 md:p-12 shadow-2xl backdrop-blur-sm mb-8">
          <form onSubmit={handleCalculate} className="space-y-8">
            
            {/* Streams Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-3">
                Estimated number of streams
              </label>
              <input
                type="number"
                value={streams}
                onChange={(e) => setStreams(e.target.value)}
                placeholder="Enter number of streams"
                className="w-full h-12 px-4 border border-slate-700 bg-slate-800 text-white placeholder-slate-500 text-base rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
            </div>

            {/* Currency Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-4">
                Currency
              </label>
              <div className="flex gap-4">
                {(['USD', 'GBP', 'EUR']).map((curr) => (
                  <label key={curr} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="currency"
                      value={curr}
                      checked={currency === curr}
                      onChange={() => setCurrency(curr)}
                      className="w-5 h-5 accent-pink-500"
                    />
                    <span className="text-slate-300 font-medium">
                      {currencySymbols[curr]}{curr}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-base border border-pink-400 rounded-md transition"
            >
              Calculate
            </button>

          </form>
        </div>

        {/* Results Grid */}
        {calculated && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-pink-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{platform.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                      <p className="text-sm text-slate-400">
                        {currencySymbols[currency]}
                        {(platform.rateUSD * exchangeRates[currency]).toFixed(4)} per stream
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-pink-400">
                      {currencySymbols[currency]}
                      {calculateEarnings(platform.rateUSD)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!calculated && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              Enter your stream count and select a currency to see your estimated earnings
            </p>
          </div>
        )}

        {/* Total Earnings */}
        {calculated && (
          <div className="mt-8 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-lg p-6 text-center">
            <p className="text-slate-300 mb-2">Total Potential Earnings</p>
            <p className="text-4xl font-bold text-pink-400">
              {currencySymbols[currency]}
              {(
                platforms.reduce((sum, platform) => {
                  return sum + Number(calculateEarnings(platform.rateUSD));
                }, 0)
              ).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}