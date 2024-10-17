"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdHomeFilled } from "react-icons/md";
import { PiTicketDuotone } from "react-icons/pi";
import { PiUserDuotone } from "react-icons/pi";

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (pathname) {
      setValue(pathname);
    }
  }, [pathname]);

  const handleChange = (newValue) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <nav className="bg-white text-purple-400 fixed bottom-0 left-0 right-0 flex justify-around p-2">
      <button
        className={`flex flex-col items-center ${
          value === "/home" ? "text-violet-600" : ""
        }`}
        onClick={() => handleChange("/home")}
      >
        <MdHomeFilled size={24} />
        <span className="text-xs font-semibold">Home</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          value === "/my-coupons" ? "text-violet-600" : ""
        }`}
        onClick={() => handleChange("/my-coupons")}
      >
        <PiTicketDuotone size={24} />
        <span className="text-xs font-semibold">My Coupons</span>
      </button>
      <button
        className={`flex flex-col items-center ${
          value === "/me" ? "text-violet-600" : ""
        }`}
        onClick={() => handleChange("/me")}
      >
        <PiUserDuotone size={24} />
        <span className="text-xs font-semibold">Me</span>
      </button>
    </nav>
  );
};

export default BottomNav;
