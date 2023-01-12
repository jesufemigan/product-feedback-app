import FeedbackContainer from "../../components/FeedbackContainer";
import ProfileCard from "../../components/ProfileCard";
import SideBar from "../../components/SideBar";

const index = () => {
  return (
    <div className="flex-col md:flex lg:flex-row gap-[25px]">
      <div className="lg:flex-[30%] lg:flex lg:gap-[20px] lg:flex-col md:grid md:grid-cols-half md:gap-[10px]">
        <ProfileCard />
        <SideBar />
      </div>
      <div className="flex-[70%]">
        <div>
          <FeedbackContainer />
        </div>
      </div>
    </div>
  );
};
export default index;
