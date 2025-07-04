"use client";
// import React from 'react';
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";


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
    ">
h
    </div>
    Sidebar!
  </div>

  );
};

export default Sidebar;