import React from 'react';
import Subscribers from './Subscribers';
import TotalPageViews from './TotalPageViews';
import DailyPageViews from './DailyPageViews';
import TotalPosts from './TotalPosts';

const Dashboard = () => {
  return (
    <div className="container p-3" style={{height:"100%"}}>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <TotalPageViews />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <DailyPageViews />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <TotalPosts />
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <Subscribers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
