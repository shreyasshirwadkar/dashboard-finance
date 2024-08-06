import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar"
const Layout = ({ children }) => {
  return (
    <div className="flex bg-black text-white h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-24">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
