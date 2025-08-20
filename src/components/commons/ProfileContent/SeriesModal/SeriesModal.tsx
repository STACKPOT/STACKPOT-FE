
import { CloseIcon } from "@assets/svgs";
import { useState } from "react";
import { modalBodyStyle, modalCloseButtonStyle, modalContainerStyle, modalExplainStyle, modalHeaderStyle, modalInputStyle, modalOverlayStyle, modalSeriesInputStyle, modalTagCloseButtonStyle, modalTagListStyle, modalTagStyle, modalTitleStyle } from "./SeriesModal.style";
import { Button } from "@components/index";


interface SeriesModalProps {
  defaultSeriesList: { comments: string }[];
  onConfirm: (updated: { comments: string }[]) => void;
  onClose: () => void;
}

const SeriesModal = ({ defaultSeriesList, onConfirm, onClose }: SeriesModalProps) => {
  const [series, setSeries] = useState(defaultSeriesList);
  const [newSeries, setNewSeries] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  return (
    <div css={modalOverlayStyle}>
      <div css={modalContainerStyle}>
        <button css={modalCloseButtonStyle} onClick={onClose}>
          <CloseIcon />
        </button>
        <div css={modalHeaderStyle}>
          <strong css={modalTitleStyle}>시리즈 편집</strong>
          <Button variant="cta"
            onClick={() => {
              const trimmed = newSeries.trim();
              if (trimmed && trimmed !== '전체보기' && series.filter((s) => s.comments !== '전체보기').length < 5) {
                setSeries([...series, { comments: trimmed }]);
                setNewSeries("");
              }
            }}
          >
            시리즈 추가하기
          </Button>
        </div>
        <div css={modalBodyStyle}>
          <div css={modalExplainStyle}>
            시리즈는 최대 5개까지 추가할 수 있어요.
          </div>
          <div css={modalInputStyle(series.length === 1)}>
            <div css={modalTagListStyle}>
              {series.map((item, index) => (
                item.comments !== "전체보기" && (
                  <div key={index} css={modalTagStyle}>
                    {item.comments}
                    <button
                      onClick={() => {
                        const updated = [...series];
                        updated.splice(index, 1);
                        setSeries(updated);
                      }}
                      css={modalTagCloseButtonStyle}
                    >
                      ×
                    </button>
                  </div>
                )
              ))}
              <input
                value={newSeries}
                onChange={(e) => setNewSeries(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isComposing) {
                    e.preventDefault();
                    const trimmed = newSeries.trim();
                    if (trimmed && trimmed !== '전체보기' && series.filter((s) => s.comments !== '전체보기').length < 5) {
                      setSeries([...series, { comments: trimmed }]);
                      setNewSeries("");
                    }
                  }
                }}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                placeholder={series.length === 1 ? "입력 후 엔터를 누르면 시리즈 태그가 추가돼요." : ""}
                css={modalSeriesInputStyle}
              />
            </div>
          </div>

          <Button variant="full"
            onClick={() => {
              onConfirm(series.filter((s) => s.comments !== '전체보기'));
              setNewSeries("");
              onClose();
            }}
          >
            작성 완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeriesModal;
