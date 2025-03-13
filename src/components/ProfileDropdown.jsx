import Image from "next/image";
import Dropdown from "./reuseableComponents/Dropdown";
import { FaChevronDown } from "react-icons/fa";

const ProfileDropdown = ({ onSelect, userImage }) => {
  const profileOptions = [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];

  return (
    <Dropdown
      options={profileOptions}
      onSelect={onSelect}
      icon={<FaChevronDown className="text-xs text-[#D6D6D6]" />}
      buttonContent={
        <>
          <Image src={userImage} alt="User" className="w-8 h-8 rounded-full" />
        </>
      }
    />
  );
};

export default ProfileDropdown;
