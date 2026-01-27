import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ArrowLeftRoundIcon, BookmarkIcon, HeartIcon } from "@assets/svgs";
import * as styles from "./Engagemet.style";
import routes from "@constants/routes";

const Engagement = () => {
  const navigate = useNavigate();

  const tabs = [
    { label: "내 공감", path: routes.engagement.likes, icon: <HeartIcon /> },
    {
      label: "내 저장",
      path: routes.engagement.saves,
      icon: <BookmarkIcon />,
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main css={styles.container}>
      <header css={styles.header}>
        <button type="button" onClick={handleBack} aria-label="뒤로 가기">
          <ArrowLeftRoundIcon css={styles.iconStyle} />
        </button>
        <h1 css={styles.title}>공감/저장 모아보기</h1>
      </header>

      <nav css={styles.tabsContainer} aria-label="공감/저장 탭">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            css={styles.tabTextStyle}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {tab.label}
            {tab.icon}
          </NavLink>
        ))}
      </nav>

      <section aria-label="콘텐츠 영역">
        <Outlet />
      </section>
    </main>
  );
};

export default Engagement;
