'use client';
import React, { useState } from "react";

const Sidebar = () => {
  

  return (
    <div>

      <nav className="flex flex-col bg-gray-800 text-white w-64 h-screen fixed ">
        <ul>
        
          <li className="p-4 hover:bg-gray-700">Dashboard</li>
          <li className="p-4 hover:bg-gray-700">Profile</li>
          <li className="p-4 hover:bg-gray-700">Settings</li>
          <li className="p-4 hover:bg-gray-700">Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
