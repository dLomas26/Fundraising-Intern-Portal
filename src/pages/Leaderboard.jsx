import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import LeaderboardItem from '../components/LeaderboardItem';
import { Trophy, TrendingUp } from 'lucide-react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await api.getLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-8"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-6 w-6 bg-gray-700 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-32"></div>
                      <div className="h-3 bg-gray-700 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="h-6 bg-gray-700 rounded w-20"></div>
                    <div className="h-3 bg-gray-700 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const totalRaised = leaderboard.reduce((sum, entry) => sum + entry.donations, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="h-8 w-8 text-green-400" />
          <h1 className="text-3xl font-bold text-green-200">Leaderboard</h1>
        </div>
        <p className="text-gray-400 mb-6">
          Top performing interns in our fundraising campaign
        </p>
        
        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-lg p-6 text-green-100 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Campaign Summary</h3>
              <p className="text-green-200">Combined efforts of our top performers</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-2xl font-bold">${totalRaised.toLocaleString()}</span>
              </div>
              <p className="text-green-200 text-sm">Total Raised by Top 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-4">
        {leaderboard.map((entry) => (
          <LeaderboardItem key={entry.id} entry={entry} darkMode />
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-green-200 mb-3">How Rankings Work</h3>
        <div className="text-sm text-gray-300 space-y-2">
          <p>• Rankings are updated in real-time based on total donations raised</p>
          <p>• Only verified donations count toward your leaderboard position</p>
          <p>• Top performers gain access to exclusive rewards and recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;