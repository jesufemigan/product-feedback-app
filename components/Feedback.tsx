import Image from "next/image";

import userImage from "../public/assets/user-images/image-roxanne.jpg";
import upvoteIcon from "../public/assets/shared/icon-arrow-up.svg";
import commentIcon from "../public/assets/shared/icon-comments.svg";

const Feedback = () => {
  return (
    <div className="bg-primaryWhite rounded-[10px] p-4 grid grid-row-[auto_50px] md:grid-cols-[50px_minmax(200px,400px)_50px] justify-between md:grid-rows-none">
      <div className="md:col-start-2 col-start-1 col-end-4 mb-5 md:mb-0 md:row-end-2">
        <div className="flex items-center gap-3 mb-3">
          <span>
            <Image
              src={userImage}
              alt="commentator"
              className="w-[40px] h-[40px] rounded-full"
            />
          </span>
          <span>
            <h1 className="text-secondaryGray font-bold">John Doe</h1>
            <p>14 Sep, 2021</p>
          </span>
        </div>
        <h1 className="text-secondaryGray font-bold mb-2">
          Gie us a roadmap to something
        </h1>
        <p className="font-100 text-accentGray text-sm mb-2">
          Help us choose the right razer for us
        </p>

        <p className="bg-secondaryWhite w-fit py-2 px-4 rounded-[10px] text-primaryBlue">
          Feature
        </p>
      </div>

      <div className="md:row-start-1 row-start-2 col-start-1">
        <span className="flex items-center md:flex-col bg-secondaryWhite py-2 px-4 md:w-2/3 md:p-2 rounded-md gap-1">
          <Image src={upvoteIcon} alt="upvote" />
          <h1>70</h1>
        </span>
      </div>

      <div className="col-start-3 self-center md:row-start-1 row-start-2">
        <span className="flex items-center gap-2">
          <Image src={commentIcon} alt="commentIcon" />
          <h1>35</h1>
        </span>
      </div>
    </div>
  );
};
export default Feedback;
