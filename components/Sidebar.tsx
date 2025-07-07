"use client";
// import React from 'react';
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./Sidebaritem";


interface SideBarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }) => {
// usePathname() tells you the current path (like /search)
// useMemo() recalculates routes only when pathname changes
// active is true only when the current route matches the href
// The map() displays the links and highlights the active one
  
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
     icon: HiHome,   
     label: 'Home',
     active: pathname !== '/search',
     href: '/',
    },
     {
     icon: BiSearch,   
     label: 'Search',
     active: pathname !== '/search',
     href: '/search',
    },
  ], [pathname]);  

  return (
  <div className="flex h-full">
    <div className="
    hidden
    md:flex
    flex-col
    gap-y-2
    bg-black
    h-full
    w-[300px]
    p-2
    "
    >
    <Box>
    <div  className="
    flex
    flex-col
    gap-y-4
    px-5
    py-4
    ">
    {routes.map((item) => (
      <SidebarItem 
      key={item.label} {...item}
      />
    ))}

    </div>
    </Box>
    {/* <Box className="overflow-y-auto h-full"> */}
    <Box className="flex flex-col h-full overflow-y-auto p-4 gap-2">
      Song Library
    </Box>
    </div> 

    <main className="h-full flex-1 overflow-y-auto py-2">
      {children}
    </main> 
  </div>

  );
};

export default Sidebar;