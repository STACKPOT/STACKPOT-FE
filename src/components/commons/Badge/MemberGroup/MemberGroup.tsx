import { Role } from "types/role";
import {
  groupContainer,
  profilePlusStyle,
  profileStyle,
} from "./MemberGroup.style";
import { roleImages } from "@constants/roleImage";

interface MemberGroupProps {
  memberRoleList: Role[]
}

const MemberGroup: React.FC<MemberGroupProps> = ({
  memberRoleList,
}: MemberGroupProps) => {
  return (
    <div css={groupContainer}>
      {memberRoleList.length > 4 && (
        <div css={profilePlusStyle}>+{memberRoleList.length - 4}</div>
      )}
      {memberRoleList.slice(0, 4).map((role, index) => (
        <img key={index} css={profileStyle} src={roleImages[role]} alt="profileImage" />
      ))}
    </div>
  );
};

export default MemberGroup;
