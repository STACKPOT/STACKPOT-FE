import { MyPot, Home, Spot, Profile, SetUp } from "@assets/svgs";
import { container, menuContainer, divider } from "./SideBar.style";

const SideBar: React.FC = () => {
  return (
    <div css={container}>
      <div css={menuContainer}>
        <Profile />
        <div css={divider} />
        <Home />
        <Spot />
        <MyPot />
        <SetUp />
      </div>
    </div>
  );
};

export default SideBar;
