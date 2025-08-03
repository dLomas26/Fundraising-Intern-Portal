import React from 'react';
import { Lock } from 'lucide-react';

const RewardCard = ({ reward, darkMode = false }) => {
  return (
    <div className={`rounded-lg border p-4 transition-all duration-200 ${
      reward.isUnlocked 
        ? darkMode 
          ? 'border-green-700 bg-green-900/30 hover:shadow-green-900/10' 
          : 'border-green-200 bg-green-50 hover:shadow-md'
        : darkMode
          ? 'border-gray-700 bg-gray-800 opacity-80'
          : 'border-gray-200 bg-gray-50 opacity-60'
    }`}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">
          {reward.isUnlocked ? reward.icon : <Lock className="h-6 w-6 text-gray-500" />}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${
            reward.isUnlocked 
              ? darkMode ? 'text-green-300' : 'text-green-800'
              : darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {reward.name}
          </h3>
          <p className={`text-sm ${
            reward.isUnlocked
              ? darkMode ? 'text-green-400' : 'text-green-700'
              : darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {reward.description}
          </p>
          <p className={`text-xs mt-1 ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Required: ${reward.requiredAmount.toLocaleString()}
          </p>
        </div>
        {reward.isUnlocked && (
          <div className={`font-semibold text-sm ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            Unlocked!
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardCard;