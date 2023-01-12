import Image from "next/image";
import userImage from "../public/assets/user-images/image-elijah.jpg";
import hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";

import close from "../public/assets/shared/mobile/icon-close.svg";

import { useLocalContext } from "../context/localContext";

const ProfileCard = () => {
  const { showSidebar, setSidebar } = useLocalContext();

  return (
    <div className="bg-mobileProfile md:bg-tabletProfile lg:bg-desktopProfile bg-no-repeat bg-cover flex justify-between items-center p-6 md:flex-col-reverse md:justify-start md:gap-[20px] md:items-start md:rounded-[10px] md:bg-center">
      <div>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>

      <div className="flex items-center gap-[30px] md:gap-[10px]">
        <div>
          <Image
            src={userImage}
            alt="userImage"
            className="rounded-full w-[50px] h-[50px]"
          />
        </div>

        <div onClick={() => setSidebar?.()}>
          <Image
            src={showSidebar ? close : hamburger}
            alt="hamburger-icon"
            className="md:hidden w-[20px] h-[20px]"
          />
        </div>

        <div className="hidden md:block">
          <h1>Kevin Smith</h1>
          <p>@jes</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
