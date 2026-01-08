import {
  modalContentBoldStyle,
  modalContentTextStyle,
} from "./ContractContent.style";

interface ContractContentProps {
  contractType: "service" | "privacy";
}

const ContractContent: React.FC<ContractContentProps> = ({
  contractType,
}: ContractContentProps) => {
  return contractType === "service" ? (
    <p css={modalContentTextStyle}>
      <span css={modalContentBoldStyle}>제1조 (목적)</span>
      {"\n"}이 약관은 회원이 회사가 제공하는 서비스를 이용함에 있어, 회원과 회사
      간의 권리, 의무 및 책임사항을 명확히 규정함을 목적으로 합니다.{"\n"}
      <span css={modalContentBoldStyle}>제2조 (약관의 효력 및 적용)</span>
      {"\n"}① 본 약관은 회원이 가입 절차를 완료함과 동시에 이에 동의한 것으로
      간주되며, 서비스 이용과 관련하여 회원에게 적용됩니다.
      {"\n"}② 회사는 필요한 경우 관련 법령을 위반하지 않는 범위에서 본 약관을
      개정할 수 있으며, 개정된 약관은 회사가 정한 절차에 따라 공지 또는 통지한
      시점부터 효력을 가집니다.
      {"\n"}
      <span css={modalContentBoldStyle}>제3조 (회원가입 및 정보제공 의무)</span>
      {"\n"}① 회원 가입은 회사가 정한 절차에 따라 성명, 유효한 전자우편 주소,
      비밀번호 등 필수 정보를 제공하고 이에 대한 승인을 얻음으로써 완료됩니다.
      {"\n"}② 회원은 허위의 정보를 제공하여서는 아니 되며, 제공한 정보가 변경될
      경우 지체 없이 이를 수정하여야 합니다.{"\n"}
      <span css={modalContentBoldStyle}>
        제4조 (회원의 정보 정확성 및 회사의 보호의무)
      </span>
      {"\n"}① 회원은 본인이 제공한 정보의 정확성과 최신성을 유지할 책임이
      있습니다.
      {"\n"}② 회사는 관계 법령과 개인정보 처리방침에 따라 회원의 개인정보를
      보호하며, 안전한 서비스 제공을 위하여 합리적인 보안 조치를 취합니다.{"\n"}
    </p>
  ) : (
    <p css={modalContentTextStyle}>
      <span css={modalContentBoldStyle}>제1조 (목적)</span>
      {"\n"}본 약관은 「개인정보 보호법」 등 관련 법령에 따라 회사(STACKPOT)가
      회원가입 신청자 및 서비스 이용자를 대상으로 수집·이용하는 개인정보의 항목,
      수집 및 이용 목적, 보유 및 이용 기간, 동의 거부권 및 그 불이익 사항 등을
      규정함을 목적으로 합니다.{"\n"}
      <span css={modalContentBoldStyle}>제2조 (수집하는 개인정보 항목)</span>
      {"\n"}① 회사는 회원 가입 및 서비스 제공을 위하여 필요한 최소한의
      개인정보를 수집합니다.
      {"\n"}② 수집하는 항목은 성명, 성별, 생년월일, 전자우편 주소 등이며, 이는
      회원 식별, 고객 응대, 서비스 이용 안내 등을 위하여 사용됩니다.
      {"\n"}③ 수집된 개인정보는 회원 탈퇴 시까지 보관되며, 관계 법령에서 정하는
      경우 일정 기간 동안 추가로 보관될 수 있습니다.
      {"\n"}
      <span css={modalContentBoldStyle}>
        제3조 (개인정보의 수집 및 이용 목적)
      </span>
      {"\n"}수집된 개인정보는 다음 각 호의 목적을 위하여 이용됩니다.
      {"\n"}① 회원 식별 및 본인 확인 절차 수행
      {"\n"}② 서비스 제공에 관한 계약의 이행 및 이용 안내
      {"\n"}③ 고객 응대 및 민원 처리
      {"\n"}④ 법령상 의무 준수 및 분쟁 해결{"\n"}
    </p>
  );
};

export default ContractContent;
