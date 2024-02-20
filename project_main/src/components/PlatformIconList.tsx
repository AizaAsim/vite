import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon } from "@chakra-ui/react"; // Assuming Icon is imported correctly

import { Platform } from "./useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: React.ElementType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <div>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? (
          <IconComponent key={platform.slug} color="gray.500" />
        ) : null;
      })}
    </div>
  );
};

export default PlatformIconList;
