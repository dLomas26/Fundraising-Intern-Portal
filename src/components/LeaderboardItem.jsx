import React from 'react';
import { Crown, Medal, Award } from 'lucide-react';

const LeaderboardItem = ({ entry, darkMode = false }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-green-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-green-300" />;
      default:
        return <div className={`h-6 w-6 flex items-center justify-center font-bold ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>#{rank}</div>;
    }
  };

  const getRankColors = (rank) => {
    if (darkMode) {
      switch (rank) {
        case 1:
          return 'bg-gradient-to-r from-green-900/30 to-green-800/30 border-green-700';
        case 2:
          return 'bg-gradient-to-r from-gray-800 to-gray-800 border-gray-700';
        case 3:
          return 'bg-gradient-to-r from-green-900/30 to-green-800/30 border-green-700';
        default:
          return 'bg-gray-800 border-gray-700';
      }
    } else {
      switch (rank) {
        case 1:
          return 'bg-gradient-to-r from-green-50 to-green-100 border-green-200';
        case 2:
          return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
        case 3:
          return 'bg-gradient-to-r from-green-50 to-green-100 border-green-200';
        default:
          return 'bg-white border-gray-200';
      }
    }
  };

  return (
    <div className={`rounded-lg border p-6 transition-all duration-200 hover:shadow-md ${getRankColors(entry.rank)}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {getRankIcon(entry.rank)}
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${
              darkMode ? 'text-green-200' : 'text-gray-900'
            }`}>
              {entry.name}
            </h3>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Rank #{entry.rank}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-2xl font-bold ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            ${entry.donations.toLocaleString()}
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Total Raised
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;