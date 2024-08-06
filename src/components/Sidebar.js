import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  HomeOutlined,
  BarChartOutlined,
  FolderOutlined,
  ChatOutlined,
  CampaignOutlined,
  PublicOutlined,
  SettingsOutlined,
  InsertDriveFileOutlined,
} from "@mui/icons-material";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: HomeOutlined, path: "/home" },
    { name: "Charts", icon: BarChartOutlined, path: "/" },
    { name: "File Manager", icon: FolderOutlined, path: "/file" },
    { name: "Team Chat", icon: ChatOutlined, path: "/chat" },
    { name: "Advertise", icon: CampaignOutlined, path: "/advertise" },
    { name: "Domains", icon: PublicOutlined, path: "/domains" },
    { name: "Settings", icon: SettingsOutlined, path: "/settings" },
    { name: "Reports", icon: InsertDriveFileOutlined, path: "/reports" },
  ];

  return (
    <aside className="fixed top-0 left-0 w-24 h-screen bg-primarySidebar pt-8 text-gray-300">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            className={`mb-4 cursor-pointer p-2 rounded flex flex-col items-center w- ${
              isActive ? "bg-selectedSidebar text-black" : ""
            }`}
          >
            <item.icon
             style={{ fontSize: '30px' }}
              className={`text-4xl mb-1 p-1 rounded-full ${
                isActive ? "bg-secondarySidebar" : "bg-iconSidebar"
              } hover:bg-secondarySidebar hover:text-black`}
            />
            <span
              className={`text-xs text-center ${
                isActive ? "text-gray-300" : ""
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
