"use client" 
import React from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import {BiMessageRounded } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import {SiGoogleanalytics } from "react-icons/si"
import { FaRegBookmark } from "react-icons/fa";
// import {LiaRetweetSolid } from "react-icons/lia"
import {LuUpload } from "react-icons/lu"


const FeedCard : React.FC = ()=>{
    return <div className="border border-gray-600 border-l-0 border-r-0 border-b-0  text-gray-100 p-4 max-[490px]:px-0 hover:bg-gray-950 cursor-pointer">
        <div className="grid grid-cols-8 min-h-20 min-w-full gap-x-5">
            <div className="col-span-1   ">
                <Image src={"data:image/png;base64,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"}
                alt="image" width={80} height={80}  className="rounded-full min-h-8 min-w-8 max-h-10 max-w-10 "/>
            </div>
            <div className="col-span-7  max-[490px]:text-xs text-sm px-2 ">
                <h4 className=" font-medium pb-1">Kumail Ghadiali</h4>
                <p >Lorem ipsum dolor sit a
                met consectetur adipisicing elit. Nulla o
                ptio ea placeat eius maiores, saepe numquam quidem ad iusto provident.</p>
                <div className="flex w-full  flex-wrap justify-between text-[1.2rem] items-center mt-1" >
                    <div className="hover:bg-gray-900 p-2   rounded-full ">   

                        <IconContext.Provider value={{  className: "msg" }}>
                        <BiMessageRounded />
                        </IconContext.Provider>
                    </div>
                    <div className="hover:bg-gray-900 p-2   rounded-full ">
                        <IconContext.Provider value={{  className: "retweet" }}>
                        <FaRetweet />
                       
                        </IconContext.Provider>
                       
                    </div>
                    <div className="hover:bg-gray-900 p-2   rounded-full ">
                        <IconContext.Provider value={{  className: "like" }}>
                        <GoHeart />
                        
                        </IconContext.Provider>
                    </div>
                    <div className="hover:bg-gray-900 p-2   rounded-full ">
                        <IconContext.Provider value={{  className: "analytic" }}>
                        <SiGoogleanalytics />
                        </IconContext.Provider>
                    </div>
                    <div className="flex ">
                        <div className="hover:bg-gray-900 p-2   rounded-full ">
                            <IconContext.Provider value={{  className: "share" }}>
                            <FaRegBookmark />
                            </IconContext.Provider>
                        </div>
                        <div className="hover:bg-gray-900 p-2   rounded-full ">
                             <IconContext.Provider value={{  className: "bookmark" }}>
                        <LuUpload  />
                        </IconContext.Provider>
                        </div>
                        
                       
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    </div>
}
export default FeedCard;
