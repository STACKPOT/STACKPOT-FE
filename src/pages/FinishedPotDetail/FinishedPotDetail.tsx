import { useParams } from "react-router-dom";

const FinishedPotDetail = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);

  return <h1>끓인 팟 상세보기 페이지- {potIdNumber}</h1>;
};
export default FinishedPotDetail;
