import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center top-0 sticky z-[999] bg-blu h-20 max-w-full  md:space-x-12 ">
      <div className=" p-2 ml-4 ">
        <h1 className="logo text-2xl  font-bold text-white cursor-pointer md:text-3xl">
          Skitz Social
        </h1>
      </div>

      <div className="searchbar hidden  md:flex md:items-center md:space-x-4 ">
        <input
          placeholder="Search for friends ,posts"
          className="searchInput border-none rounded-full py-2 px-12 focus:outline-blue-800  text-start"
        />
        <MagnifyingGlassIcon className="h-8 text-white" />
      </div>
      <div className=" text-white flex items-center pr-4 space-x-4 md:space-x-12 ">
        <div className="topbarLinks flex space-x-4 md:space-x-8 cursor-pointer">
          <h3 className="topbarLink md:text-xl">Homepage</h3>
          <h3 className="topbarLink md:text-xl">Timeline</h3>
        </div>
        <div className="topbarIcons hidden md:flex md:space-x-4 cursor-pointer">
          <div className="topbarIconItem relative">
            <UserCircleIcon className="h-8" />
            <div className="topbarIconBadge bg-red-600 rounded-full absolute top-[-12px] right-[-8px] w-6 h-6 text-white  text-center  ">
              1
            </div>
          </div>
          <div className="topbarIconItem relative">
            <ChatBubbleLeftRightIcon className="h-8" />
            <span className="topbarIconBadge  bg-red-600 rounded-full absolute top-[-12px] right-[-8px] w-6 h-6 text-white text-center">
              2
            </span>
          </div>
          <div className="topbarIconItem relative">
            <BellIcon className="h-8" />
            <span className="topbarIconBadge  bg-red-600 rounded-full absolute top-[-12px] right-[-8px] w-6 h-6 text-white text-center">
              1
            </span>
          </div>
        </div>
        <img
          src="/assets/p1.jpeg"
          alt="Image"
          className=" hidden md:block md:rounded-full  md:object-cover md:cursor-pointer  md:h-16 md:w-16 md:mr-4"
        />
      </div>
      
    </div>
  );
};
export default Topbar;
