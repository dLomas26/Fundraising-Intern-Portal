/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

// Mock API base URL (in a real app, this would be your actual API)
const API_BASE_URL = 'https://api.example.com';

// Mock data
const mockIntern = {
  id: '1',
  name: 'Sunny Hayes',
  email: 'alex.johnson@company.com',
  referralCode: 'Lomas2025',
  totalDonations: 17750,
  joinDate: '2024-01-26'
};

const mockLeaderboard = [
  { id: '1', name: 'Lewis Hamilton', donations: 25400, rank: 1 },
  { id: '2', name: 'Michael Rodriguez', donations: 22100, rank: 2 },
  { id: '3', name: 'Emily Davis', donations: 19800, rank: 3 }
];

const mockRewards = [
  {
    id: '1',
    name: 'First Donation',
    description: 'Raised your first $100',
    requiredAmount: 100,
    isUnlocked: true,
    icon: '🎯'
  },
  {
    id: '2',
    name: 'Fundraising Star',
    description: 'Raised over $5,000',
    requiredAmount: 5000,
    isUnlocked: true,
    icon: '⭐'
  },
  {
    id: '3',
    name: 'Top Performer',
    description: 'Raised over $10,000',
    requiredAmount: 10000,
    isUnlocked: true,
    icon: '🏆'
  },
  {
    id: '4',
    name: 'Elite Fundraiser',
    description: 'Raised over $25,000',
    requiredAmount: 25000,
    isUnlocked: false,
    icon: '💎'
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Mock login function
  login: async (email, password) => {
    await delay(1000);
    // Accept any email/password for demo purposes
    return { success: true, token: 'mock-jwt-token' };
  },

  // Mock signup function
  signup: async (name, email, password) => {
    await delay(1200);
    // Accept any signup data for demo purposes
    return { success: true, token: 'mock-jwt-token' };
  },

  // Get intern profile
  getInternProfile: async () => {
    await delay(800);
    return mockIntern;
  },

  // Get leaderboard
  getLeaderboard: async () => {
    await delay(600);
    return mockLeaderboard;
  },

  // Get rewards
  getRewards: async () => {
    await delay(500);
    return mockRewards;
  }
};