"use client"
import { Menu } from "lucide-react"


const SideBar = () => {
  return (
    <div>
        {/* top  */}
        <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            <div>Logo</div>
            <h1 className="font-extrabold text-2xl">Dashboard</h1>
       
        <button className="md:hidden  px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
            <Menu className="w-4 h-4"/>
        </button>
        </div>
        {/* links */}
        <div className="flex-grow mt-8 ">

        </div>
    </div>
  )
}

export default SideBar