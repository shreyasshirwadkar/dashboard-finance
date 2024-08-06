import React from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

const OverviewItem = ({
  title,
  value,
  change,
  unit,
  icon,
  style,
  iconStyle,
}) => (
  <div className={`p-4 w-44 ${style}`}>
    <div className="flex flex-col items-start">
      {icon && (
        <span
          className={`mr-2 border mb-2 border-gray-700 rounded-xl p-2 ${iconStyle}`}
        >
          {icon}
        </span>
      )}
      <h3 className="text-gray-400 mb-2">{title}</h3>
    </div>
    <p className="text-4xl font-bold">
      {value}
      <span className="ml-2 text-gray-400 text-sm">{unit}</span>
    </p>
    {change !== undefined && (
      <span
        className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change > 0 ? "▲" : "▼"} {Math.abs(change)}%
      </span>
    )}
  </div>
);

const OverallOverview = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-0 text-left h-72">
      <h2 className="text-xl mb-2 font-bold">Overall Overview</h2>
      <h4 className="text-sm mb-2 text-gray-400">
        During the last 30 days, the peak volume is 8713
      </h4>
      <div className="flex flex-wrap gap-10 items-start">
        <OverviewItem
          title="Uptime"
          value="97.6"
          change={4.56}
          unit="%"
          icon={<TrendingUpOutlinedIcon sx={{ fontSize: "48px" }} />}
          iconStyle="text-green-400"
        />
        <OverviewItem
          title="Users"
          value="1000"
          change={13.84}
          icon={<PeopleOutlinedIcon sx={{ fontSize: "48px" }} />}
          iconStyle="text-blue-400"
        />
        <OverviewItem
          title="Network Traffic"
          value="512"
          change={-7.18}
          unit=" mb/s"
          icon={<SignalCellularAltOutlinedIcon sx={{ fontSize: "48px" }} />}
          iconStyle="text-yellow-400"
        />
        <OverviewItem
          title="Produced"
          value="5,26K"
          change={-3.26}
          icon={<SettingsOutlinedIcon sx={{ fontSize: "48px" }} />}
          iconStyle="text-green-400"

        />
        <OverviewItem
          title="Server Status"
          value="Idle"
          icon={<StorageOutlinedIcon sx={{ fontSize: "48px" }} />}
          style="text-gray-500"
          iconStyle="text-gray-500"
        />
        <OverviewItem
          title="Operational flow"
          value="3824"
          icon={<WarningOutlinedIcon sx={{ fontSize: "48px" }} />}
          style=" text-white"
          iconStyle="bg-red-500 text-white"
        />
      </div>
    </div>
  );
};

export default OverallOverview;
