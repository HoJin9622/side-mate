import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`
  width: 100%;
  padding-top: 2.5%;
`;

const LastFont = styled.div`
  font-size: 1.625rem;
  line-height: 30px;
  margin-bottom: 25px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
  grid-gap: 1rem;
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

function MainBoard() {
  const test = [
    {
      title: "나랑게임만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "figma, 코틀린", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑웹 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "css ,html 자바스크립트", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 건담 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "css ,html, react", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
    },
    {
      title: "나랑 눈사람 만들사람!!!!!!", //제목
      content: "저랑같이만드실분있나요?", //상세내용
      stack: "엘사, 안나", //기술
      date: "2020-13-41~2022-11-11", //기간
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
