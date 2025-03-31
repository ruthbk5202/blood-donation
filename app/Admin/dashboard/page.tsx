"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface DashboardData {
  users: number;
  activeSessions: number;
  recentActivity: {
    id: number;
    action: string;
    timestamp: string;
  }[];
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/dashboard')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/settings">Settings</Link>
      </nav>
      <div className="stats">
        <div className="stat-card">Total Users: {data?.users}</div>
        <div className="stat-card">Active Sessions: {data?.activeSessions}</div>
      </div>
      <div className="activity">
        <h2>Recent Activity</h2>
        <ul>
          {data?.recentActivity.map(activity => (
            <li key={activity.id}>
              {activity.action} - {new Date(activity.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;