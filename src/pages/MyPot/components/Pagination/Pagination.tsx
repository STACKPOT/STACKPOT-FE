import { paginationContainer, paginationTextStyle } from "../../MyPotStatus/MyPotStatus.style";
import { ArrowButton } from "@components/index";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrev, onNext }) => (
  <div css={paginationContainer}>
    <ArrowButton direction="left" onClick={onPrev} />
    <span css={paginationTextStyle}>
      {currentPage} / {totalPages}
    </span>
    <ArrowButton direction="right" onClick={onNext} />
  </div>
);

export default Pagination;
