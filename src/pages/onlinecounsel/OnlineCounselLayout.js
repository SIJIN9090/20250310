import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

function OnlineCounselLayout() {
  const location = useLocation();

  // 현재 URL 경로에 "admin"이 포함되어 있는지 확인
  const isAdminPage = location.pathname.includes("admin");

  return (
    <Container>
      <LoginBox>
        {/* 관리 페이지일 때는 "온라인상담 관리" 제목을, 아닐 때는 "온라인상담" 제목을 표시 */}
        {isAdminPage ? (
          <>
            <LoginTitle>온라인상담 관리</LoginTitle>
            <LoginSub>온라인상담을 관리하는 곳입니다.</LoginSub>
          </>
        ) : (
          <>
            <LoginTitle>온라인상담</LoginTitle>
            <LoginSub>하이펫병원은 언제든지 도움을 드립니다.</LoginSub>
          </>
        )}
      </LoginBox>

      {/* Outlet은 항상 보이게 함 */}
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  pointer-events: none;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LoginTitle = styled.h1`
  font-weight: 700;
  line-height: 1.3em;
  font-size: 42px;
  color: #111;
  text-align: center;
`;

const LoginSub = styled.p`
  display: block;
  margin-top: 1.5em;
  color: #888888;
  font-size: 14px;
  text-align: center;
`;

export default OnlineCounselLayout;
