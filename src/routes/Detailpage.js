import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../components/Home/MainBoard/MainBoard";
import api from "../settings/api";

const Title = styled.p``;
const TopContainer = styled.div`
  border-bottom: 4px solid #fafafa;
`;
const Subtitle = styled.div`
  display: flex;
  justify-content: center;
`;
const DetainContainer = styled.div``;
const MainContainer = styled.div``;
const SubtitleFont = styled.div``;

function Detailpage(props) {
  const id = props.match.params.id; ///URL 에서 가져옴
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = () => {
    api.get(`posts/${id}/`).then((res) => {
      if (res.statusText !== "OK") {
        alert("게시글을 불러오는데 실패했습니다");
        return;
      }
      setPost(res.data);
      console.log(res);
    });
  };

  return (
    <Container>
      <Content>
        <TopContainer>
          <Title>{post.title}</Title>
          <Subtitle>
            <SubtitleFont>{post.status}&nbsp;</SubtitleFont>
            <SubtitleFont>
              {post.hire_limit}&nbsp;명-&nbsp;&nbsp;&nbsp;&nbsp;
            </SubtitleFont>
            <SubtitleFont>{String(post.created_at).substr(0, 10)}</SubtitleFont>
          </Subtitle>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p>관심 {post.favorite_count}</p>
            <p>댓글 {1}</p>
          </div>
        </TopContainer>
        <MainContainer>
          <p>모집안내</p>
          <p>{post.content}</p>
        </MainContainer>
        <DetainContainer>
          <p>지역 : {post.city}</p>
          <p>상세정보</p>
          <p> 시작일: {post.start_time}</p>
          <p>예상 종료일 : {post.end_time}</p>
        </DetainContainer>

        <p>{post.status}</p>
        <p>{post.user?.nickname}</p>
        <p>{post.user?.phone_number}</p>
        <p>{post.user?.position}</p>
      </Content>
    </Container>
  );
}

export default Detailpage;
