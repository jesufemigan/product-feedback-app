import Image from "next/image";
import userImage from "../public/assets/user-images/image-jackson.jpg";
import commentIcon from "../public/assets/shared/icon-comments.svg";
import upvoteIcon from "../public/assets/shared/icon-arrow-up.svg";

const RoadmapCard: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className={`bg-primaryWhite relative rounded-[10px] p-4 grid grid-row-[auto_50px] justify-between overflow-hidden before:content-[''] before:w-full before:h-1 before:absolute before:bg-${color} rounded-t-[5px]`}
    >
      <div className="col-start-1 col-end-4">
        <p
          className={`before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:rounded-full before:bg-orange before:left-[-20px] before:top-[7px] before:bottom-0 relative ml-[20px]`}
        >
          Planned
        </p>
        <h1 className="text-secondaryGray font-bold mb-2">
          Gie us a roadmap to something
        </h1>
        <p className="font-100 text-accentGray text-sm mb-2">
          Help us choose the right razer for us
        </p>

        <p className="bg-secondaryWhite w-fit py-2 px-4 rounded-[10px] text-primaryBlue mb-8">
          Feature
        </p>
      </div>

      <div className="row-start-2 col-start-1">
        <span className="flex items-center bg-secondaryWhite py-2 px-4 rounded-md gap-1">
          <Image src={upvoteIcon} alt="upvote" />
          <h1>70</h1>
        </span>
      </div>

      <div className="col-start-3 self-center row-start-2">
        <span className="flex items-center gap-2">
          <Image src={commentIcon} alt="commentIcon" />
          <h1>35</h1>
        </span>
      </div>
    </div>
  );
};
export default RoadmapCard;
