import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const Container = styled.div`
    width: 100%;
    padding-top: 2.5%;
    font-style: normal;
    font-weight: normal;
`;
const LastFont = styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 25px;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1.2fr);

    grid-column-gap: 20px;
    grid-row-gap: 40px;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1.2fr);
    }
    @media only screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 1.2fr);
    }
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

function MainBoard(props) {
    const test = [
        {
            title: '나랑게임만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: 'figma, 코틀린', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
        {
            title: '나랑웹 만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: 'css ,html 자바스크립트', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
        {
            title: '나랑 건담 만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: 'css ,html, react', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
        {
            title: '나랑 눈사람 만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: '엘사, 안나', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
        {
            title: '나랑 눈사람 만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: '엘사, 안나', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
        {
            title: '나랑 눈사람 만들사람!!!!!!', //제목
            info: '저랑같이만드실분있나요?', //상세내용
            stack: '엘사, 안나', //기술
            date: '2020-13-41~2022-11-11', //기간
        },
    ];
    return (
        <Container>
            <Content>
                <LastFont>Last new</LastFont>
                <GridContainer>
                    {test.map((information) => (
                        <Post test={information} />
                    ))}
                </GridContainer>
            </Content>
        </Container>
    );
}

export default MainBoard;
