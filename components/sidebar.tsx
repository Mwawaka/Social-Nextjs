import {ChatBubbleLeftRightIcon,RssIcon,UserGroupIcon,QuestionMarkCircleIcon,BriefcaseIcon,AcademicCapIcon,PlayCircleIcon,CalendarIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon} from '@heroicons/react/24/solid';

const Sidebar = () => {
    return <div>

    <div className="sidebar basis-3 overflow-y-scroll sticky top-12 ">
      <div className="sidebarWrapper p-5">
        <ul className="sidebarList p-0 m-0 list-none">
          <li className="sidebarListItem flex items-center mb-5">
            <RssIcon className="sidebarIcon h-8 mr-4 cursor-pointer" />
            <span className=" pl-2">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5 ">
            <ChatBubbleLeftRightIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <PlayCircleIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <UserGroupIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <BookmarkIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Bookmarks</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <QuestionMarkCircleIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Questions</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <BriefcaseIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <CalendarIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Events</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <AcademicCapIcon className="sidebarIcon h-8 cursor-pointer" />
            <span className=" pl-5">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton mt-4 w-[150px] p-2 rounded-full font-bold outline hover:bg-blue-400 hover:outline-none outline-gray-800 ">Show More</button>
        <hr className="sidebarHr my-5" />
        <ul className="sidebarFriendList list-none m-0 p-0 ">
          {/* {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))} */}
        </ul>
      </div>
    </div>
    </div>;
  };
  
  export default Sidebar;