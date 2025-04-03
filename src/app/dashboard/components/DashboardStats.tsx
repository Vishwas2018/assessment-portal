'use client';

import React from 'react';
import { RootState } from '@/src/lib/redux/store';
import { useSelector } from 'react-redux';

interface StatsCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  bgColor: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count, icon, bgColor, change }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center mr-3`}>
          {icon}
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="flex items-end">
        <div className="text-3xl font-bold mb-2">{count}</div>
        {change && (
          <div className={`ml-2 mb-2 text-sm ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change.isPositive ? '+' : '-'}{Math.abs(change.value)}%
          </div>
        )}
      </div>
      {count === 0 ? (
        <p className="text-white/60 text-sm">No {title.toLowerCase()} available yet</p>
      ) : (
        <p className="text-white/60 text-sm">Total {title.toLowerCase()}</p>
      )}
    </div>
  );
};

export default function DashboardStats() {
  const { user } = useSelector((state: RootState) => state.auth);
  
  // In a real app, you would fetch this data from an API
  const stats = {
    tests: {
      count: 0,
      change: { value: 0, isPositive: true }
    },
    students: {
      count: 0,
      change: { value: 0, isPositive: true }
    },
    results: {
      count: 0,
      change: { value: 0, isPositive: true }
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        title="Tests"
        count={stats.tests.count}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-fuchsia-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        }
        bgColor="bg-fuchsia-500/20"
        change={stats.tests.change}
      />
      
      <StatsCard
        title="Students"
        count={stats.students.count}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        }
        bgColor="bg-purple-500/20"
        change={stats.students.change}
      />
      
      <StatsCard
        title="Results"
        count={stats.results.count}
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
        }
        bgColor="bg-cyan-500/20"
        change={stats.results.change}
      />
    </div>
  );
}