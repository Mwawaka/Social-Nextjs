import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import Feedbar from "../components/feedbar";
import Rightbar from "../components/rightbar";
const Home = () => {
  return (
    <div className="font-outfit">
      <Topbar />
      <div className="flex w-full">
      <Sidebar/>
      <Feedbar/>

      <Rightbar/>

      </div>
      </div>
  );
};

export default Home;
