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
const PopularImage = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 20px;
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
                    <PopularImage bg="https://lh3.googleusercontent.com/proxy/vaWb1aqv-JSOkKnIr1AYjhrnloXfvnONc5irwgyBMFiBMgwy3O2xEAYMtDAzyeU9RCtxl-OFm0rmdcCgwonb65DBfdEJt7zyE4rWoYu8vvVy6OQ1A3r0prcKlN7wP3vyoh-YxJM0Z71neBwgqvV6SdWEdLDDOcJRV0T8HOM_tnlekgEzIk-tLrNakZZjyFHnMSDUpyN9HXxuhLi8MqMXP1XU8I-uIep9-DOJnlzvdo4Z58T2lp5hZq-bupNgmYmMzngJ5daysKd-WwAyteb3IYLw_TR6EmSt_alW1S8DpZvUOLSheKwH55SLWKqPsFdX148QziVasYRwqoIsmgbw1zjRxWiSQFLusfZSveSDJGMQtaIDBWaZ4Um2" />
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
