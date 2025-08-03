import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import DashboardCard from '../components/DashboardCard';
import RewardCard from '../components/RewardCard';
import { User, DollarSign, Share2, Calendar, Gift } from 'lucide-react';

const Dashboard = () => {
  const [intern, setIntern] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [internData, rewardsData] = await Promise.all([
          api.getInternProfile(),
          api.getRewards()
        ]);
        setIntern(internData);
        setRewards(rewardsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!intern) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
        <div className="text-center">
          <p className="text-gray-400">Failed to load profile data.</p>
        </div>
      </div>
    );
  }

  const unlockedRewards = rewards.filter(r => r.isUnlocked);
  const lockedRewards = rewards.filter(r => !r.isUnlocked);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-300 mb-2">
          Welcome back, {intern.name}!
        </h1>
        <p className="text-gray-400">
          Here's an overview of your fundraising performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Your Name"
          value={intern.name}
          icon={<User className="h-6 w-6 text-green-400" />}
          description="Intern Profile"
          darkMode
        />
        
        <DashboardCard
          title="Referral Code"
          value={intern.referralCode}
          icon={<Share2 className="h-6 w-6 text-green-400" />}
          description="Share to earn more"
          darkMode
        />
        
        <DashboardCard
          title="Total Donations"
          value={`$${intern.totalDonations.toLocaleString()}`}
          icon={<DollarSign className="h-6 w-6 text-green-400" />}
          description="All-time fundraising"
          valueColor="text-green-400"
          darkMode
        />
        
        <DashboardCard
          title="Member Since"
          value={new Date(intern.joinDate).toLocaleDateString()}
          icon={<Calendar className="h-6 w-6 text-green-400" />}
          description="Join date"
          darkMode
        />
      </div>

      {/* Rewards Section */}
      <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Gift className="h-6 w-6 text-green-400" />
          <h2 className="text-xl font-semibold text-green-200">Rewards & Achievements</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-green-400 mb-3">
              Unlocked Achievements ({unlockedRewards.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unlockedRewards.map(reward => (
                <RewardCard key={reward.id} reward={reward} darkMode />
              ))}
            </div>
          </div>
          
          {lockedRewards.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-400 mb-3 mt-6">
                Locked Achievements ({lockedRewards.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lockedRewards.map(reward => (
                  <RewardCard key={reward.id} reward={reward} darkMode />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-green-900/30 rounded-lg p-6 border border-green-800">
        <h3 className="text-lg font-semibold text-green-200 mb-3">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
            Share Referral Code
          </button>
          <button className="bg-gray-700 text-green-400 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;