import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/auth";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
  border-bottom: 2px solid #e0e0ec;
`;

const Content = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1440px) {
    padding: 0 6.875rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 4.875rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2.875rem;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 1rem;
  }
`;

const Title = styled(Link)`
  font-size: 1.125rem;
  color: #282b31;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RightContainer = styled.div`
  width: 40%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const DrawerIcon = styled(BsJustify)`
  display: none;
  font-size: 1.5rem;
  color: #282b31;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

function NavBar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Content>
        <Title to="/">사이드메이트</Title>
        <RightContainer>
          <Title to="/board">메이트 찾기</Title>
          <Title to="/board">메이트 모집</Title>
          {isAuthenticated ? (
            <button onClick={onLogout}>로그아웃</button>
          ) : (
            <Title to="/login">로그인</Title>
          )}
        </RightContainer>
        <DrawerIcon />
      </Content>
    </Container>
  );
}

export default NavBar;
