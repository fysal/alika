import React from "react";
import dummy from "@/app/assets/dummy.webp";
import Image from "next/image";
import Link from "next/link";
const MainMenu = () => {
  const menuItems = [
    { name: "home", link: "/" },
    { name: "Find event", link: "/find" },
    { name: "Create event", link: "/create-event" },
  ];
  return (
    <div className="navbar text-purple-600 bg-slate-950 shadow ">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl my-2">Alika</a>
      </div>
      <ul className=" flex-1 flex items-center gap-10 capitalize flex-grow">
        {menuItems.map((menuItem, index: number) => (
          <li key={index} className="text-lg">
            <Link href={menuItem.link}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image alt="Profile" src={dummy.src} width={80} height={80} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
