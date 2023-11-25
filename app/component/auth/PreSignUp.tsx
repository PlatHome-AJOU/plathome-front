"use client";
//PreSignUp.tsx
import { useState } from "react";
//import { data } from '../assets/forSignUp.ts';
function PreSignUp() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const goToSignUp = () => {
    if (!isChecked1 || !isChecked2) {
      alert("필수 사항이 아직 동의되지 않았습니다.");
    } else {
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="my-36 w-auto px-5">
          <p className="pb-10 text-center text-3xl font-bold text-blue-600">
            회원가입
          </p>
          <div className="mb-10">
            <div className="text-s mb-3">이용약관</div>
            <div className="container m-2 h-24 w-full overflow-y-scroll p-2 text-xs font-bold ">
              이용약관
              <br /> <br />
              <br />
              제1장 총칙
              <br />
              <br />
              <br />
              제1조(목적)
              <br />
              본 약관은 아주대학교 총학생회 (이하 "당 사이트")이 제공하는 모든
              서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당 사이트의
              권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로
              합니다.
              <br />
              <br />
              <br />
              제2조(용어의 정의)
              <br />
              본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              <br />
              ① 이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 이용할 수
              있는 자.
              <br />
              ② 가 입 : 당 사이트가 제공하는 신청서 양식에 해당 정보를 기입하고,
              본 약관에 동의하여 서비스 이용계약을 완료시키는 행위
              <br />
              ③ 회 원 : 당 사이트에 개인정보 등 관련 정보를 제공하여 회원등록을
              한 개인(아주대학교 포탈 아이디를 가지는 아주대학교 구성원)으로서
              당 사이트의 정보를 제공 받으며, 당 사이트가 제공하는 서비스를
              이용할 수 있는 자.
              <br />
              ④ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 문자와
              숫자의 조합으로 설정한 고유의 체계
              <br />
              ⑤ 비밀번호 : 이용자와 아이디가 일치하는지를 확인하고 통신상의
              자신의 비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합.
              <br />
              ⑥ 탈 퇴 : 회원이 이용계약을 종료 시키는 행위
              <br />
              ⑦ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및
              이용규정에서 정의하거나 일반적인 개념에 의합니다.
              <br />
              <br />
              <br />
              제3조(약관의 효력과 변경)
              <br />
              ① 당 사이트는 귀하가 본 약관 내용에 동의하는 것을 조건으로
              귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의하는
              경우, 당 사이트의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는
              본 약관이 우선적으로 적용됩니다.
              <br />
              ② 당 사이트는 본 약관을 변경할 수 있으며, 변경된 약관은 당 사이트
              내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 약관을
              변경할 경우에는 적용일자 및 변경사유를 명시하여 당 사이트 내에 그
              적용일자 30일 전부터 공지합니다. 약관 변경 공지 후 이용자가
              명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 이용자가
              약관에 동의한 것으로 간주합니다. 이용자가 변경된 약관에 동의하지
              아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수
              있습니다.
              <br />
              <br />
              <br />
              제4조(약관외 준칙)
              <br />
              ① 본 약관은 당 사이트가 제공하는 서비스에 관한 이용규정 및 별도
              약관과 함께 적용됩니다.
              <br />
              ② 본 약관에 명시되지 않은 사항은 정보통신망 이용촉진 및 정보보호
              등에 관한 법률, 전기통신기본법, 전기통신사업법,
              정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램보호법 등
              관계법령과 개인정보 처리방침 및 아주대학교 총학생회가 별도로 정한
              지침 등의 규정에 따릅니다.
              <br />
              <br />
              <br />
              제2장 서비스 제공 및 이용
              <br />
              <br />
              <br />
              제5조(이용 계약의 성립)
              <br />
              ① 이용계약은 신청자가 온라인으로 당 사이트에서 제공하는 소정의
              가입신청 양식에서 요구하는 사항을 기록하고, 이 약관에 대한 동의를
              완료한 경우에 성립됩니다.
              <br />
              ② 당 사이트는 다음 각 호에 해당하는 이용계약에 대하여는 가입을
              취소할 수 있습니다.
              <br />
              1. 다른 사람의 명의를 사용하여 신청하였을 때
              <br />
              2. 이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
              <br />
              3. 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때
              <br />
              4. 다른 사람의 당 사이트 서비스 이용을 방해하거나 그 정보를
              도용하는 등의 행위를 하였을 때
              <br />
              5. 당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
              <br />
              6. 기타 당 사이트가 정한 이용신청요건이 미비 되었을 때
              <br />
              ③ 당 사이트는 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지
              이용계약 성립을 유보할 수 있습니다.
              <br />
              1. 기술상의 장애사유로 인한 서비스 중단의 경우(시스템관리자의
              고의·과실 없는 디스크장애, 시스템 다운 등)
              <br />
              2. 전기통신사업법에 의한 기간통신사업자가 전기통신 서비스를
              중지하는 경우
              <br />
              3. 전시. 사변, 천재지변 또는 이에 준하는 국가 비상사태가
              발생하거나 발생할 우려가 있는 경우
              <br />
              4. 긴급한 시스템 점검, 증설 및 교체설비의 보수 등을 위하여
              부득이한 경우
              <br />
              5. 서비스 설비의 장애 또는 서비스 이용의 폭주 등 기타 서비스를
              제공할 수 없는 사유가 발생한 경우
              <br />
              ④ 당 사이트가 제공하는 서비스는 아래와 같으며, 그 변경될 서비스의
              내용을 이용자에게 공지하고 아래에서 정한 서비스를 변경하여 제공할
              수 있습니다. 다만, 비회원에게는 서비스 중 일부만을 제공할 수
              있습니다.
              <br />
              1. 당 사이트가 자체 개발하거나 다른 기관과의 협의 등을 통해
              제공하는 일체의 서비스
              <br />
              <br />
              <br />
              제6조(회원정보 사용에 대한 동의)
              <br />
              ① 당 사이트가 처리하는 모든 개인정보는 개인정보 보호법 등 관련
              법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 보호 및
              권익을 보호합니다.
              <br />
              ② 당 사이트는 다른 법령에 특별한 규정이 있는 경우를 제외하고
              귀하가 당 사이트 서비스 가입시 동의하여 제공하는 정보에 한하여
              최소한으로 수집합니다.
              <br />
              ③ 회원이 당 사이트에 본 약관에 따라 이용신청을 하는 것은 당
              사이트가 본 약관에 따라 신청서에 기재된 회원정보를 수집, 이용하는
              것에 동의하는 것으로 간주됩니다.
              <br />
              ④ 당 사이트는 회원정보의 진위여부 및 소속기관의 확인 등을 위하여
              확인절차를 거칠 수도 있습니다.
              <br />
              <br />
              <br />
              제7조(사용자의 정보 보안)
              <br />
              ① 가입 신청자가 당 사이트 서비스 가입 절차를 완료하는 순간부터
              귀하는 입력한 정보의 비밀을 유지할 책임이 있으며, 회원의 ID와
              비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은 회원본인에게
              있습니다.
              <br />
              ② ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의
              ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시
              당 사이트에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든
              책임은 회원 본인에게 있습니다.
              <br />
              ③ 이용자는 당 사이트 서비스의 사용 종료시 마다 정확히 접속을
              종료하도록 해야 하며, 정확히 종료하지 아니함으로써 제3자가 귀하에
              관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에
              대하여 당 사이트는 책임을 부담하지 아니합니다.
              <br />
              ④ 비밀번호 분실 시 통보는 이메일 또는 단문 메시지 서비스(SMS)로
              안내하며, 전 항의 규정에도 불구하고 회원의 이메일 주소 또는
              휴대전화번호 기입 잘못 등 본인 과실 및 본인 정보 관리 소홀로
              발생하는 문제의 책임은 회원에게 있습니다.
              <br />
              ⑤ 이용자는 개인정보 보호 및 관리를 위하여 서비스의
              개인정보관리에서 수시로 개인정보를 수정/삭제할 수 있습니다.
              <br />
              <br />
              <br />
              제8조(서비스 이용시간)
              <br />
              ① 서비스 이용시간은 당 사이트의 업무상 또는 기술상 특별한 지장이
              없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
              <br />
              ② 제1항의 이용시간은 정기점검 등의 필요로 인하여 당 사이트가 정한
              날 또는 시간은 예외로 합니다.
              <br />
              <br />
              <br />
              제9조(서비스의 중지 및 정보의 저장과 사용)
              <br />
              ① 귀하는 당 사이트 서비스에 보관되거나 전송된 메시지 및 기타 통신
              메시지 등의 내용이 국가의 비상사태, 정전, 당 사이트의 관리 범위
              외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지
              못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의
              손실이 있을 경우에 당 사이트는 관련 책임을 부담하지 아니합니다.
              <br />
              ② 당 사이트가 정상적인 서비스 제공의 어려움으로 인하여 일시적으로
              서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후
              서비스를 중지할 수 있으며, 이 기간 동안 귀하가 고지내용을 인지하지
              못한 데 대하여 당 사이트는 책임을 부담하지 아니합니다. 부득이한
              사정이 있을 경우 위 사전 고지기간은 감축되거나 생략될 수 있습니다.
              또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지
              및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제된 경우,
              전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에
              대하여도 당 사이트는 책임을 부담하지 아니합니다.
              <br />
              ③ 당 사이트의 사정으로 서비스를 영구적으로 중단하여야 할 경우 제 2
              항에 의거합니다. 다만, 이 경우 사전 고지기간은 1개월로 합니다.
              <br />
              ④ 당 사이트는 사전 고지 후 서비스를 일시적으로 수정, 변경 및
              중단할 수 있으며, 이에 대하여 귀하 또는 제3자에게 어떠한 책임도
              부담하지 아니합니다.
              <br />
              ⑤ 당 사이트는 이용자가 본 약관의 내용에 위배되는 행동을 한 경우,
              임의로 서비스 사용을 제한 및 중지할 수 있습니다. 이 경우 당
              사이트는 위 이용자의 접속을 금지할 수 있습니다.
              <br />
              ⑥ 당 사이트에 장기간 접속을 하지 아니한 회원의 경우 이메일 또는
              공지사항 등을 통한 안내 후 검토 기간을 거쳐 서비스 이용을 중지할
              수 있습니다.
              <br />
              <br />
              <br />
              제10조(서비스의 변경 및 해지)
              <br />
              ① 당 사이트는 귀하가 서비스를 이용하여 기대하는 손익이나 서비스를
              통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이
              본 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에
              관하여는 책임을 지지 않습니다.
              <br />
              ② 당 사이트는 서비스 이용과 관련하여 가입자에게 발생한 손해 중
              가입자의 고의, 과실에 의한 손해에 대하여 책임을 부담하지
              아니합니다.
              <br />
              ③ 당 사이트에 2년을 주기로 개인정보의 수집·이용에 대한 동의를 하지
              아니한 회원의 경우 안내 메일 또는 공지사항 발표 후 검토 기간을
              거쳐 회원의 정보를 삭제할 수 있습니다.
              <br />
              <br />
              <br />
              제11조(정보 제공 및 홍보물 게재)
              <br />
              ① 당 사이트는 서비스에 적절하다고 판단되거나 활용 가능성 있는
              홍보물을 게재할 수 있습니다.
              <br />
              <br />
              <br />
              제12조(당 사이트에 제출된 게시물의 저작권)
              <br />
              ① 귀하가 게시한 게시물의 내용에 대한 권리는 귀하에게 있습니다.
              <br />
              ② 당 사이트는 게시된 내용을 사전 통지 없이 편집, 이동 할 수 있는
              권리를 보유하며, 다음의 경우 사전 통지 없이 삭제할 수 있습니다.
              <br />
              1. 본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고
              판단되는 게시물을 게시한 경우
              <br />
              2. 다른 회원 또는 제 3자를 비방하거나 중상 모략으로 명예를
              손상시키는 내용인 경우
              <br />
              3. 공공질서 및 미풍양속에 위반되는 내용인 경우
              <br />
              4. 범죄적 행위에 결부된다고 인정되는 내용일 경우
              <br />
              5. 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우
              <br />
              6. 기타 관계 법령에 위배되는 경우
              <br />
              ③ 귀하의 게시물이 타인의 저작권을 침해함으로써 발생하는 민,
              형사상의 책임은 전적으로 귀하가 부담하여야 합니다.
              <br />
              <br />
              <br />
              제13조(사용자의 행동규범 및 서비스 이용제한)
              <br />
              ① 귀하가 제공하는 정보의 내용이 허위인 것으로 판명되거나,
              그러하다고 의심할 만한 합리적인 사유가 발생할 경우 당 사이트는
              귀하의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로 인해
              발생하는 불이익에 대해 책임을 부담하지 아니합니다.
              <br />
              ② 귀하가 당 사이트 서비스를 통하여 게시, 전송, 입수하였거나
              전자메일 기타 다른 수단에 의하여 게시, 전송 또는 입수한 모든
              형태의 정보에 대하여는 귀하가 모든 책임을 부담하며 당 사이트는
              어떠한 책임도 부담하지 아니합니다.
              <br />
              ③ 당 사이트는 당 사이트가 제공한 서비스가 아닌 가입자 또는 기타
              유관기관이 제공하는 서비스의 내용상의 정확성, 완전성 및 질에
              대하여 보장하지 않습니다. 따라서 당 사이트는 귀하가 위 내용을
              이용함으로 인하여 입게 된 모든 종류의 손실이나 손해에 대하여
              책임을 부담하지 아니합니다.
              <br />
              ④ 귀하는 본 서비스를 통하여 다음과 같은 행동을 하지 않는데
              동의합니다.
              <br />
              1. 타인의 아이디(ID)와 비밀번호를 도용하는 행위
              <br />
              2. 저속, 음란, 모욕적, 위협적이거나 타인의 프라이버시를 침해할 수
              있는 내용을 전송, 게시, 게재, 전자메일 또는 기타의 방법으로
              전송하는 행위
              <br />
              3. 서비스를 통하여 전송된 내용의 출처를 위장하는 행위
              <br />
              4. 법률, 계약에 의하여 이용할 수 없는 내용을 게시, 게재, 전자메일
              또는 기타의 방법으로 전송하는 행위
              <br />
              5. 타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는
              내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위
              <br />
              6. 당 사이트의 승인을 받지 아니한 광고, 판촉물, 정크메일, 스팸,
              행운의 편지, 피라미드 조직 기타 다른 형태의 권유를 게시, 게재,
              전자메일 또는 기타의 방법으로 전송하는 행위.
              <br />
              7. 다른 사용자의 개인정보를 수집 또는 저장하는 행위
              <br />
              8. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비를 파괴, 방해 또는
              기능을 제한하기 위한 소프트웨어 바이러스를 게시, 게재 또는
              전자우편으로 보내는 행위
              <br />
              9. 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의
              행위
              <br />
              ⑤ 당 사이트는 회원이 본 약관을 위배했다고 판단되면 서비스와 관련된
              모든 정보를 이용자의 동의 없이 삭제할 수 있습니다.
              <br />
              <br />
              <br />
              제3장 의무 및 책임
              <br />
              <br />
              <br />
              제14조(당 사이트의 의무)
              <br />
              ① 당 사이트는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를
              하지 않으며, 지속적, 안정적으로 서비스를 제공하기 위해 노력할
              의무가 있습니다.
              <br />
              ② 당 사이트는 서비스 제공과 관련하여 취득한 회원의 정보를 본인의
              승낙 없이 타인에게 누설 또는 배포할 수 없으며, 상업적 목적으로
              사용할 수 없습니다. 다만, 전기통신관련법령 등 관계법령에 의하여
              관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.
              <br />
              ③ 당 사이트는 이용자가 안전하게 당 사이트서비스를 이용할 수 있도록
              이용자의 개인정보 (신용정보 포함) 보호를 위한 보안시스템을
              갖추어야 합니다.
              <br />
              ④ 당 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여
              책임을 지지 않습니다.
              <br />
              ⑤ 당 사이트는 서비스와 관련한 이용자의 불만사항이 접수되는 경우
              이를 즉시 처리하여야 하며, 즉시 처리가 곤란한 경우 이용자에게 그
              사유와 처리일정을 당 사이트, 전화, 이메일, 팩스 등으로 통보하여야
              합니다.
              <br />
              <br />
              <br />
              제15조(회원의 의무)
              <br />
              ① 회원 가입시에 요구되는 정보는 정확하게 기입하여야 합니다. 또한
              이미 제공된 귀하에 대한 정보가 정확한 정보가 되도록 유지,
              갱신하여야 하며, 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게
              해서는 안됩니다.
              <br />
              ② 회원은 당 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한
              영리행위도 할 수 없습니다.
              <br />
              ③ 회원은 당 사이트 서비스를 이용하여 얻은 정보를 당 사이트의
              사전승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로
              사용하거나 이를 타인에게 제공할 수 없습니다.
              <br />
              ④ 회원은 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를
              하여서는 안됩니다.
              <br />
              1. 다른 회원의 ID를 부정 사용하는 행위
              <br />
              2. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
              <br />
              3. 선량한 풍속, 기타 사회질서를 해하는 행위
              <br />
              4. 타인의 명예를 훼손하거나 모욕하는 행위
              <br />
              5. 타인의 지적재산권 등의 권리를 침해하는 행위
              <br />
              6. 해킹행위 또는 컴퓨터바이러스의 유포행위
              <br />
              7. 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로
              전송하는 행위
              <br />
              8. 서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의
              행위
              <br />
              9. 당 사이트에 게시된 정보의 변경
              <br />
              <br />
              <br />
              제4장 기 타
              <br />
              <br />
              <br />
              제16조 (당 사이트의 소유권)
              <br />
              ① 당 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지,
              마크, 로고, 디자인, 서비스명칭, 정보 및 상표 등과 관련된
              지적재산권 및 기타 권리는 해당 저작권자 또는 아주대학교 총학생회에
              귀속됩니다.
              <br />
              ② 귀하는 당 사이트가 명시적으로 승인한 경우를 제외하고는 전항의
              소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매,
              배포, 제작, 양도, 재라이센스, 담보권 설정 행위, 상업적 이용 행위를
              할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수
              없습니다.
              <br />
              <br />
              <br />
              제17조 (양도금지)
              <br />
              회원이 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도,
              증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
              <br />
              <br />
              <br />
              제18조 (손해배상)
              <br />
              당 사이트는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한
              손해가 발생하더라도 당 사이트가 고의로 행한 범죄행위를 제외하고
              이에 대하여 책임을 부담하지 아니합니다.
              <br />
              <br />
              <br />
              제19조 (면책조항)
              <br />
              ① 당 사이트는 제9조에 따라 서비스가 중지됨으로써 이용자에게 손해가
              발생하더라도 이로 인한 책임을 부담하지 않습니다.
              <br />
              ② 당 사이트는 서비스에 표출된 어떠한 의견이나 정보에 대해 확신이나
              대표할 의무가 없으며 회원이나 제3자에 의해 표출된 의견을
              승인하거나 반대하거나 수정하지 않습니다. 당 사이트는 어떠한
              경우라도 회원이 서비스에 담긴 정보에 의존해 얻은 이득이나 입은
              손해에 대해 책임이 없습니다.
              <br />
              ③ 당 사이트는 회원간 또는 회원과 제3자간에 서비스를 매개로 하여
              물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지
              아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여
              책임을 부담하지 않습니다.
              <br />
              <br />
              <br />
              제20조 (관할법원)
              <br />
              본 사이트와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는
              대한민국 법을 적용하며, 본 분쟁으로 인한 소는 아주대학교 총학생회
              주소지의 관할 법원에 제기합니다.
              <br />
              <br />
              <br />
              부칙
              <br />본 약관은 2020년 4월 5일부터 시행됩니다.
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={handleCheckboxChange1}
                  className="checkbox"
                />
                <span className="label-text ml-4 flex-1">
                  [필수] 이용약관을 확인했으며 약관에 동의합니다
                </span>
              </label>
            </div>
            <div className="text-s mb-3 mt-6">개인정보처리방침</div>
            <div className="container m-2 h-24 w-full overflow-y-scroll p-2 text-xs font-bold ">
              [아주대학교 총학생회] ('www.ajouchong.com'이하 '총학생회')는
              개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
              개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과
              같은 처리방침을 두고 있습니다.
              <br />
              <br />
              <br />
              [아주대학교 총학생회] ('총학생회') 는 회사는 개인정보처리방침을
              개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할
              것입니다.
              <br />
              <br />
              <br />
              ○ 본 방침은부터 2020년 4월 5일부터 시행됩니다.
              <br />
              <br />
              <br />
              1. 개인정보의 처리 목적 [아주대학교
              총학생회]('www.ajouchong.com'이하 '총학생회')는 개인정보를 다음의
              목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의
              용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할
              예정입니다.
              <br />
              가. 홈페이지 회원가입 및 관리
              <br />
              회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
              회원자격 유지·관리, 서비스 부정이용 방지, 고충처리, 분쟁 조정을
              위한 기록 보존 등을 목적으로 개인정보를 처리합니다.
              <br />
              나. 민원사무 처리
              <br />
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
              처리결과 통보 등을 목적으로 개인정보를 처리합니다.
              <br />
              <br />
              <br />
              2. 개인정보의 처리 및 보유 기간
              <br />
              ① [아주대학교 총학생회]('총학생회')는 법령에 따른 개인정보
              보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은
              개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.
              <br />
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <br />
              1.[홈페이지 회원가입 및 관리]
              <br />
              [홈페이지 회원가입 및 관리]와 관련한 개인정보는 수집.이용에 관한
              동의일로부터 5년까지 위 이용목적을 위하여 보유.이용됩니다.
              <br />
              -보유근거 : 회원가입 시 약관 동의
              <br />
              -관련법령 : 계약 또는 청약철회 등에 관한 기록 : 5년
              <br />
              -예외사유 : 관계 법령 위반에 따른 수사․조사 등이 진행중인 경우에는
              해당 수사․조사 종료시까지, 학번 정보의 경우 회원 제재 중 탈퇴 시
              부정 가입 방지를 위해 탈퇴 이후 최대 1년까지 보유
              <br />
              <br />
              <br />
              3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
              개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
              <br />
              ① 정보주체는 학생회에 대해 언제든지 개인정보
              열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.
              <br />
              ② 제1항에 따른 권리 행사는학생회에 대해 개인정보 보호법 시행령
              제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실
              수 있으며 학생회는 이에 대해 지체 없이 조치하겠습니다.
              <br />
              ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
              자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
              시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
              <br />
              ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항,
              제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
              <br />
              ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
              대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
              <br />
              ⑥ 학생회는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
              처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
              대리인인지를 확인합니다.
              <br />
              <br />
              <br />
              4. 처리하는 개인정보의 항목 작성
              <br />
              ① [아주대학교 총학생회]('www.ajouchong.com'이하 '총학생회')는
              다음의 개인정보 항목을 처리하고 있습니다.
              <br />
              <br />
              <br />
              1[홈페이지 회원가입 및 관리]
              <br />
              - 필수항목 : 이메일, 비밀번호, 로그인ID, 이름, 학번, 학과
              <br />
              - 선택항목 :
              <br />
              <br />
              <br />
              5. 개인정보의 파기[아주대학교 총학생회]('총학생회')는 원칙적으로
              개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를
              파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
              <br />
              -파기절차
              <br />
              이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
              별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
              혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
              경우가 아니고서는 다른 목적으로 이용되지 않습니다.
              <br />
              -파기기한
              <br />
              이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
              보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성,
              해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
              때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
              이내에 그 개인정보를 파기합니다.
              <br />
              -파기방법
              <br />
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용합니다.
              <br />
              <br />
              <br />
              6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
              <br />
              ① 학생회는 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고
              수시로 불러오는 ‘쿠기(cookie)’를 사용합니다.
              <br />
              ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의
              컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
              컴퓨터내의 하드디스크에 저장되기도 합니다.
              <br />
              가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
              대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다.
              <br />
              나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구, 인터넷
              옵션, 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
              있습니다.
              <br />
              다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할
              수 있습니다.
              <br />
              <br />
              <br />
              7. 개인정보 보호책임자 작성
              <br />
              ① 아주대학교 총학생회('www.ajouchong.com'이하 '총학생회') 는
              개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
              관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
              개인정보 보호책임자를 지정하고 있습니다.
              <br />
              ▶ 개인정보 보호책임자
              <br />
              성명 :차재명
              <br />
              직책 :차장
              <br />
              연락처 :031-219-2870, ajouchong@gmail.com,
              <br />
              ※ 개인정보 보호 담당부서로 연결됩니다.
              <br />
              <br />
              <br />
              ▶ 개인정보 보호 담당부서
              <br />
              부서명 :소통발전국
              <br />
              담당자 :차재명
              <br />
              연락처 :031-219-2870, ajouchong@gmail.com,
              <br />
              ② 정보주체께서는 아주대학교 총학생회(www.ajouchong.com 이하
              총학생회) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보
              보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
              보호책임자 및 담당부서로 문의하실 수 있습니다. 아주대학교
              총학생회(‘www.ajouchong.com’이하 총학생회) 는 정보주체의 문의에
              대해 지체 없이 답변 및 처리해드릴 것입니다.
              <br />
              <br />
              <br />
              8. 개인정보 처리방침 변경
              <br />
              ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
              전부터 공지사항을 통하여 고지할 것입니다.
              <br />
              <br />
              <br />
              9. 개인정보의 안전성 확보 조치 [아주대학교 총학생회]('아주대학교
              총학생회')는 개인정보보호법 제29조에 따라 다음과 같이 안전성
              확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              <br />
              1. 개인정보 취급 직원의 최소화 및 교육
              <br />
              개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
              개인정보를 관리하는 대책을 시행하고 있습니다.
              <br />
              2. 내부관리계획의 수립 및 시행
              <br />
              개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고
              있습니다.
              <br />
              3. 해킹 등에 대비한 기술적 대책
              <br />
              [아주대학교 총학생회]('총학생회')은 해킹이나 컴퓨터 바이러스 등에
              의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고
              주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을
              설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
              <br />
              4. 개인정보의 암호화
              <br />
              이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
              본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
              하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
              있습니다.
              <br />
              5. 개인정보에 대한 접근 제한
              <br />
              개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
              조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
              접근을 통제하고 있습니다.
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                  className="checkbox"
                />
                <span className="label-text ml-4 flex-1">
                  [필수] 개인정보처리방침을 확인했으며 개인정보 수집 및 이용에
                  동의합니다
                </span>
              </label>
            </div>
            <div className="mb-5 flex justify-end">
              <button onClick={goToSignUp} className="btn">
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreSignUp;