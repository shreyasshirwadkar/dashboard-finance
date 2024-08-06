import React from "react";

const BatteryRemain = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-xl mb-4">Battery Remain</h2>
      <p className="text-gray-400">System Reliability • Last Month</p>
      {/* Add battery indicator component here */}
      <div className="mt-4 flex">
        <button className="mr-2 px-3 py-1 bg-blue-500 rounded">3M</button>
        <button className="mr-2 px-3 py-1 bg-gray-600 rounded">6M</button>
        <button className="mr-2 px-3 py-1 bg-gray-600 rounded">1Y</button>
        <button className="px-3 py-1 bg-gray-600 rounded">5Y</button>
      </div>
    </div>
  );
};

export default BatteryRemain;
