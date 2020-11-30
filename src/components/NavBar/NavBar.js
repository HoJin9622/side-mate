import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/auth";
import Drawer from "@material-ui/core/Drawer";

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

const NavLabel = styled(Link)`
    font-size: 1.125rem;
    color: #282b31;
    line-height: 21px;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const RightContainer = styled.div`
    width: 40%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const LogoutButton = styled.p`
    font-size: 1.125rem;
    color: #282b31;
    border: none;
    background-color: #ffffff;
    padding: 0;
    cursor: pointer;
    outline: 0;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
    &: hover {
        color: red;
    }
`;
const SideMenu = styled.p`
    margin-left: 20px;
    text-decoration: none;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 1.3rem;
    &:hover {
        color: #34558b;
    }
    @media only screen and (max-width: 768px) {
        display: inline-block !important;
    }
`;

function NavBar() {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const history = useHistory();
    const DrawClose = (a) => {
        setVisible(false);
    };
    const Drawopen = () => {
        setVisible(true);
    };
    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <Container>
            <Content>
                <NavLabel to="/" style={{ fontSize: "1.5rem" }}>
                    Side Mate
                </NavLabel>
                <RightContainer>
                    <NavLabel to="/board">메이트 찾기</NavLabel>
                    <NavLabel to="/Upload">메이트 모집</NavLabel>
                    {isAuthenticated ? (
                        <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
                    ) : (
                        <NavLabel to="/login">로그인</NavLabel>
                    )}
                </RightContainer>
                <DrawerIcon onClick={Drawopen} />

                <Drawer anchor="right" open={visible} onClose={DrawClose}>
                    <p
                        style={{
                            fontSize: "1.4rem",
                            padding: "10px 140px 10px 20px ",
                            borderBottom: "solid 1px #e8e8e8",
                        }}
                    >
                        Side-Mate
                    </p>
                    <SideMenu
                        style={{ marginTop: "2rem" }}
                        onClick={() => {
                            setVisible(false);
                            history.push("/");
                        }}
                    >
                        메인페이지
                    </SideMenu>
                    <SideMenu
                        onClick={() => {
                            setVisible(false);
                            history.push("/board");
                        }}
                    >
                        메이트 찾기
                    </SideMenu>
                    <SideMenu
                        onClick={() => {
                            setVisible(false);
                            history.push("/Upload");
                        }}
                    >
                        메이트 모집
                    </SideMenu>
                    {isAuthenticated ? (
                        <>
                            <SideMenu
                                onClick={() => {
                                    setVisible(false);
                                    history.push("/login");
                                }}
                            >
                                로그인
                            </SideMenu>
                            <SideMenu
                                onClick={() => {
                                    setVisible(false);
                                    history.push("/register");
                                }}
                            >
                                회원가입
                            </SideMenu>
                        </>
                    ) : (
                        <>
                            <SideMenu onClick={onLogout}>로그아웃</SideMenu>
                        </>
                    )}
                </Drawer>
            </Content>
        </Container>
    );
}

export default NavBar;
