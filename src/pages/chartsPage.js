import React from "react";
import OverallOverview from "../components/OverallOverview";
import RecentBars from "../components/RecentBars";
import MainDailyTrend from "../components/MainDailyTrend";
import BatteryRemain from "../components/BatteryRemain";
import Layout from "../components/Layout";

const ChartsPage = () => (
  <Layout>
    <div className="grid grid-cols-1 gap-6">
      <OverallOverview />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBars />
        <MainDailyTrend />
      </div>
      <BatteryRemain />
    </div>
  </Layout>
);

export default ChartsPage;
