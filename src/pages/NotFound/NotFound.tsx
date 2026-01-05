import { NotFoundImage } from "@assets/images";
import { container, contentStyle, bgImage, titleStyle, foreground } from "./NotFound.style";
import { Button } from "@components/index";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.home);
  };

  return (
    <main css={container}>
      <img src={NotFoundImage} css={bgImage} alt="404" />
      <div css={foreground}>
        <p css={titleStyle}>페이지를 찾을 수 없습니다.</p>
        <p css={contentStyle}>
          존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Button variant="cta" onClick={handleClick}>
          메인 홈으로
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
