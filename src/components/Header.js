import React from "react";
import {
  SearchOutlined,
  EditOutlined,
  MoreHorizOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Header = () => {
  const messageCount = 5; // Example notification count

  return (
    <header className="flex items-center justify-between p-4 bg-black text-gray-500 mb-0">
      <div className="flex items-center">
        <div className="bg-iconSidebar text-black rounded-lg h-12 w-12 flex items-center justify-center mr-3">
          <span className="text-2xl font-bold">V</span>
        </div>
        <h1 className="text-2xl font-bold">Vsevidno</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center rounded-full bg-gray-800 px-3 py-1">
          <SearchOutlined
            style={{ fontSize: 36 }}
            className="text-gray-600 ml-2 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search for anything"
            className="bg-gray-800 text-gray-600 px-2 py-1 rounded-full outline-none ml-2 w-96"
          />
        </div>
        <button className="flex items-center justify-center bg-yellow-500 rounded-full p-2 hover:bg-yellow-600">
          <EditOutlined  className="text-black" />
        </button>
        <button className="flex items-center justify-center bg-gray-800 rounded-full p-2 hover:bg-gray-700">
          <TuneOutlined className="text-gray-200" />
        </button>
        <button className="flex items-center justify-center bg-gray-800 rounded-full p-2 hover:bg-gray-700">
          <MoreHorizOutlined  className="text-gray-200" />
        </button>
        <div className="relative">
          <Avatar
            src="./images.jpg"
            alt="Profile"
            className="cursor-pointer w-12 h-12"
          />
          {messageCount > 0 && (
            <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center -translate-y-1/2 translate-x-1/2">
              {messageCount}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
