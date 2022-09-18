import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideNav = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Employees",
    path: "/Employees",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "EmployeeShifts",
    path: "/EmployeeShifts",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Shifts",
    path: "/Shifts",
    icon: <AiIcons.AiOutlineCalendar />,
    cName: "nav-text",
  },
];
