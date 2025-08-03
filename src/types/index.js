const types = {
  Intern: {
    id: 'string',
    name: 'string',
    email: 'string',
    referralCode: 'string',
    totalDonations: 'number',
    joinDate: 'string'
  },
  LeaderboardEntry: {
    id: 'string',
    name: 'string',
    donations: 'number',
    rank: 'number'
  },
  Reward: {
    id: 'string',
    name: 'string',
    description: 'string',
    requiredAmount: 'number',
    isUnlocked: 'boolean',
    icon: 'string'
  }
};

module.exports = types;