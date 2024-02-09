
import { RiTwitterXLine } from "react-icons/ri";
import { Inter } from "next/font/google";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { RxSlash } from "react-icons/rx";
import { IoListSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import {RiQuillPenFill} from "react-icons/ri";
import FeedCard from "@/components/FeedSection";
const inter = Inter({ subsets:["latin"]});
interface twitterSidebarButton{
  title :  string,
  icon : React.ReactNode,
}
const sidebarButtonArray:  twitterSidebarButton[]=[
  {
    title:"Home",
    icon:<GoHomeFill color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl"/>,
  },
  {
    title:"Explore",
    icon:<FiSearch  color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl"/>
  },
  {
    title:"Notification",
    icon:<GrNotification  color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl" />
  },
  {
    title:"Message",
    icon:<FaRegEnvelope color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl" />
  },
  {
    title:"Grok",
    icon:<RxSlash color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl"/>,
  },
  {
    title:"Lists",
    icon:<IoListSharp color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl" />,
  },
  {
    title:"Premium",
    icon:<RiTwitterXLine color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl"/>
  },
  {
    title:"Profile",
    icon:<HiUser  color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl"/>,
  },
  {
    title:"More",
    icon:<CgMoreO color="white" className="cursor-pointer text-2xl  max-[640px]:text-2xl" />,
  }

]

export default function Home() {
  

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-36 max-[1000px]:px-0  gap-x-5 overflow-hidden ">
        <div className="col-span-3 flex justify-start  flex-col max-[700px]:col-span-2 border border-red-700">
          <div className="rounded-full p-3 mx-3 hover:bg-zinc-900 w-fit h-fit cursor-pointer transition-all max-[490px]:px-0">
            <RiTwitterXLine className="text-3xl  max-[640px]:text-2xl"/>
          </div>
          <div className="px-3 min-h-10 max-[490px]:px-0">
            {
              sidebarButtonArray.map((item) => (
              <ul key={item.title} className="list-none">
              <li key={item.title} className="flex justify-start gap-4 items-center rounded-full pl-3 pr-6 py-3 max-[700px]:pr-3 w-fit hover:bg-zinc-900"> 
              <span>{item.icon }</span>
              <span className="text-xl max-[700px]:hidden">{item.title }</span>
              </li></ul>))
            }
          </div>
          <button className="w-[80%] h-[3.5rem] bg-[#1d9bf0] border border-zinc-900 rounded-full ml-2 my-2 font-bold 
          max-[1000px]:my-0  max-[640px]:h-[3rem] max-[700px]:text-sm max-[700px]:w-[3rem] max-[490px]:ml-0">Post</button>

         
        </div>
        <div className="col-span-6  border-x-[1px]  border-gray-400 max-[700px]:col-span-10 h-screen overflow-y-scroll box-content no-scrollbar ">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 border-red-500 border max-[600px]:col-span-0 "></div>

      </div>
    </div>
  );
}
