"use client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

// Updated menu data with categories and descriptions
const data: NavMenu = [
  {
    id: 0,
    type: "MenuItem",
    label: "Home",
    url: "/",
    children: [],
  },
  {
    id: 1,
    label: "Products",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "General Surgery",
        url: "/shop/general-surgery",
        description: "Tools and equipment for surgery procedures.",
      },
      {
        id: 12,
        label: "Laryngoscopes",
        url: "/shop/laryngoscopes",
        description: "Laryngoscopes for medical examination.",
      },
      {
        id: 13,
        label: "Dental",
        url: "/shop/dental",
        description: "Dental care tools and equipment.",
      },
      {
        id: 14,
        label: "Micro Surgery",
        url: "/shop/micro-surgery",
        description: "Precision tools for micro surgery procedures.",
      },
      {
        id: 15,
        label: "Beauty",
        url: "/shop/beauty",
        description: "Beauty products and equipment.",
      },
      {
        id: 16,
        label: "Ophthalmology",
        url: "/shop/ophthalmology",
        description: "Ophthalmology tools and equipment.",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Brochure",
    url: "/shop/on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "About",
    url: "/about",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Contact Us",
    url: "/contact",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link href="/" className="mr-3 lg:mr-10">
            <Image
              src="/images/logo.png" // Replace with the correct path for your logo
              alt="Logo"
              height={40} // Adjust height as per your logo size
              width={80} // Adjust width as per your logo size
              className="w-[60px] h-[40px] sm:w-[80px] sm:h-[40px] md:w-[150px] md:h-[45px] lg:w-[150px] lg:h-[50px] xl:w-[190px] xl:h-[50px] "
            />
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item:any) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <Link href={item.url || "/"}>
                    <MenuItem label={item.label} url={item.url || "/"} />
                  </Link>
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={22}
              width={22}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          {/* <CartBtn />
          <Link href="/signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={22}
              width={22}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
