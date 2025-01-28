import React from "react";
import {
  container,
  content,
  contentHeader,
  iconStyle,
  profileStyle,
} from "./Setting.style";
import { PotIcon } from "@assets/svgs";
import { contentBody } from "@pages/Home/Home.style";
import { MushRoomProfile } from "@assets/images";

const Setting = () => {
  return (
    <main>
      <div css={container}>
        <div css={content}>
          <div css={contentHeader}>
            <p>설정</p>
            <PotIcon css={iconStyle} />
          </div>
          <div css={contentBody}>
            <img css={profileStyle} src={MushRoomProfile} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Setting;
