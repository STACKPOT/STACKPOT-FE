import {
  buttonStyle,
  iconStyle,
  paginationContainer,
  paginationTextStyle,
} from "./pagination.style";
import { LeftIcon } from "@assets/svgs";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => (
  <div css={paginationContainer}>
    <button
      type="button"
      css={buttonStyle}
      onClick={onPrev}
      disabled={currentPage === 1}
    >
      <LeftIcon />
    </button>
    <span css={paginationTextStyle}>
      {currentPage} / {totalPages}
    </span>
    <button
      type="button"
      css={buttonStyle}
      onClick={onNext}
      disabled={currentPage === totalPages}
    >
      <LeftIcon css={iconStyle} />
    </button>
  </div>
);

export default Pagination;
