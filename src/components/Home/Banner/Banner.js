import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding-top: 2.5%;
    font-style: normal;
    font-weight: normal;
`;
const Postbox = styled.div`
    height: 30rem;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    padding: 1% 1% 1% 1%;
    background: #ffffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const PostInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
`;
const PopularIntro = styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 2.5%;
`;

const Title = styled.p`
    font-size: 34px;
    line-height: 40px;
`;
const Technology = styled.p`
    font-size: 18px;
    line-height: 20px;
`;
const DateFont = styled.p`
    font-size: 14px;
    line-height: 20px;
`;

const Content = styled.div`
    max-width: 1440px;
    margin: auto;
    justify-content: space-between;

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
function Banner(props) {
    return (
        <Container>
            <Content>
                {/*Most popular */}
                <PopularIntro>Most popular</PopularIntro>
                {/*박스 컨테이너*/}
                <Postbox>
                    <img
                        style={{
                            width: '50%',
                            height: '100%',
                            borderRadius: '20px',
                            backgroundRepeat: 'no-repeat',
                        }}
                        src="https://i.pinimg.com/originals/4a/d4/e6/4ad4e67b19d6e4c91877b317aed51f26.jpg"
                    />
                    <div
                        style={{
                            width: '45%',
                            padding: '2% 2% 2% 0',
                        }}
                    >
                        <PostInfo>
                            <Title>리액트 만들사람있나요 행님들</Title>
                            <Technology>
                                기술 : 리액트, 백엔드 : 미정
                            </Technology>
                            <DateFont>기간 : 2020-12-23 ~ 2022-11-11</DateFont>
                        </PostInfo>
                    </div>
                </Postbox>
            </Content>
        </Container>
    );
}

export default Banner;
